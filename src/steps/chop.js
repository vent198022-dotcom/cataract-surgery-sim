import * as THREE from 'three';
import { baseStep } from './common.js';
import { SKIPS } from '../core/skips.js';
import { Tweens, ease } from '../core/tween.js';
import { clampToDisk, createLineTracker, leadingRun } from '../core/geometry.js';
import { dragEvents, linePoints } from '../core/demo.js';
import { INCISIONS } from '../eye/anatomy.js';
import { chopOffsets, H_FINAL, Q_FINAL } from '../eye/layout.js';
import { createCrack } from '../eye/crack.js';
import { createDashedPath, createMarker, lineAt } from '../eye/guides.js';

const WORK_Y = 9.1;
const LINE_Y = 9.15;
const RIM = { x: 0, z: -3.3 };      // 核邊緣（畫面上方）：劈核器入刀處
const CENTER = { x: 0, z: -0.5 };   // 探頭吸住的核中央附近
const BINS = 14;
const DONE_RUN = 0.85;              // 從邊緣起連續拉過 85% 即裂開
const PROBE_START = { x: 3.2, y: 9.0, z: 0 };
const PROBE_HOLD = { x: 0.5, y: 9.0, z: 0 };
const CHOPPER_START = { x: 0, y: 9.1, z: -4.3 };
const CHOPPER_SPREAD = { x: -0.9, y: 9.0, z: -0.6 };  // 撐開時劈核器往左、探頭往右
const PROBE_SPREAD = { x: 0.9, y: 9.0, z: 0.2 };
const CONTACT_R = 3.0;              // 推核時劈核器碰到核左緣的位置
const HALF_OPEN = 0.35;             // 第一刀後兩半撐開的距離
const OFF_PATH_LIMIT = 20;

// 真實劈核：探頭吸住核中央 → 病人把劈核器從核邊緣往探頭拉，裂縫沿路徑長出 → 撐開 → 劈核器把核推轉 90°
// → 第二刀 → 再推轉 180°，另一半自動劈開
export function createChopStep({ scene, eye, tools, ui, content }) {
  const { probe, chopper } = tools;
  const tweens = new Tweens();
  const guide = createDashedPath(lineAt(RIM, CENTER), LINE_Y);
  const marker = createMarker({ x: RIM.x, y: 9.0, z: RIM.z });
  guide.visible = false;
  marker.visible = false;
  let state, tracker, crack, dragging, phase, offPath, time;  // phase: 'hold' | 'stroke1' | 'auto' | 'stroke2' | 'done'
  let rotation = 0;
  let amounts = { h: 0, qTop: 0, qBot: 0 };
  let startSlide = null;

  const push = () => eye.setPieceOffsets(chopOffsets(amounts), rotation);
  const set = patch => { amounts = { ...amounts, ...patch }; push(); };
  const tipOf = tool => ({ x: tool.tip.x, y: tool.tip.y, z: tool.tip.z });
  const mix = (a, b, k) => ({ x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k, z: a.z + (b.z - a.z) * k });

  // 讓工具尖端在 duration 秒內滑到 to；回傳補間，必要時可取消
  function slide(tool, to, duration, onDone) {
    const from = tipOf(tool);
    return tweens.add(duration, k => {
      const p = mix(from, to, ease(k));
      tool.setTip(p.x, p.y, p.z);
    }, onDone);
  }

  function dropCrack() {
    crack?.dispose();
    crack = null;
  }

  function startStroke(n) {
    phase = 'stroke' + n;
    dragging = false;
    offPath = 0;
    tracker = createLineTracker(RIM, CENTER, BINS, 0.9);
    dropCrack();
    crack = createCrack(eye.nucleusGroup, RIM, CENTER);
    crack.setProgress(0);
    guide.visible = true;
    marker.visible = true;
    startSlide = slide(chopper, { x: RIM.x, y: WORK_Y, z: RIM.z - 0.6 }, 0.4, () => { startSlide = null; });
  }

  // 撐開：劈核器往左、探頭往右，裂縫張開，張開後裂縫收起
  function spread(duration, apply, onDone) {
    const c0 = tipOf(chopper), p0 = tipOf(probe);
    tweens.add(duration, k => {
      const e = ease(k);
      apply(e);
      const c = mix(c0, CHOPPER_SPREAD, e), p = mix(p0, PROBE_SPREAD, e);
      chopper.setTip(c.x, c.y, c.z);
      probe.setTip(p.x, p.y, p.z);
    }, () => {
      dropCrack();
      onDone();
    });
  }

  // 劈核器碰到核左緣，把核繞光軸推轉 delta；尖端跟著核邊一起走
  function rotateBy(delta, duration, next) {
    const contact = { x: -CONTACT_R, y: 9.0, z: 0 };
    const c0 = tipOf(chopper), p0 = tipOf(probe);
    tweens.add(0.4, k => {
      const e = ease(k);
      const c = mix(c0, contact, e), p = mix(p0, PROBE_HOLD, e);
      chopper.setTip(c.x, c.y, c.z);
      probe.setTip(p.x, p.y, p.z);
    }, () => {
      eye.nucleusGroup.updateMatrixWorld(true);
      const local = eye.nucleusGroup.worldToLocal(new THREE.Vector3(contact.x, contact.y, contact.z));
      const r0 = rotation;
      const world = new THREE.Vector3();
      tweens.add(duration, k => {
        rotation = r0 + delta * ease(k);
        push();
        eye.nucleusGroup.updateMatrixWorld(true);
        world.copy(local);
        eye.nucleusGroup.localToWorld(world);
        chopper.setTip(world.x, world.y, world.z);
      }, next);
    });
  }

  function afterStroke(n) {
    phase = 'auto';
    dragging = false;
    guide.visible = false;
    marker.visible = false;
    crack.setProgress(1);
    if (n === 1) {
      state.nucleusSplit = 1;
      spread(0.8, e => set({ h: HALF_OPEN * e }), () => rotateBy(Math.PI / 2, 1.2, () => startStroke(2)));
    } else {
      spread(0.7, e => set({ qTop: Q_FINAL * e, h: HALF_OPEN + (H_FINAL - HALF_OPEN) * e }), () => {
        ui.showHint(content.hints.chopOther);
        rotateBy(Math.PI, 1.4, autoThird);
      });
    }
  }

  // 另一半由系統自動劈：劈核器從邊緣拉向中央，裂縫長出，再撐開
  function autoThird() {
    slide(chopper, { x: RIM.x, y: 9.0, z: RIM.z }, 0.3, () => {
      crack = createCrack(eye.nucleusGroup, RIM, CENTER);
      tweens.add(0.8, k => {
        const p = mix({ x: RIM.x, y: 9.0, z: RIM.z }, { x: CENTER.x, y: 9.0, z: CENTER.z }, ease(k));
        chopper.setTip(p.x, p.y, p.z);
        crack.setProgress(k);
      }, () => {
        spread(0.6, e => set({ qBot: Q_FINAL * e }), () => {
          state.nucleusSplit = 2;
          phase = 'done';
          ui.showHint(content.hints.stepDone);
        });
      });
    });
  }

  function move(p) {
    if (startSlide) { tweens.list = tweens.list.filter(t => t !== startSlide); startSlide = null; }
    const c = clampToDisk(p.x, p.z, 4.2);
    chopper.setTip(c.x, 9.0, c.z);
    if (tracker.add(c.x, c.z)) offPath = 0;
    else if (++offPath > OFF_PATH_LIMIT) {
      offPath = 0;
      ui.showHint(content.hints.followLine);
    }
    const run = leadingRun(tracker.hits());
    crack.setProgress(run / BINS);
    if (run >= DONE_RUN * BINS) afterStroke(phase === 'stroke1' ? 1 : 2);
  }

  const chopping = () => phase === 'stroke1' || phase === 'stroke2';

  return baseStep({
    id: 'chop',
    gripTool: chopper,  // 觸控相對移動時跟著手指平移的器械
    workY: WORK_Y,
    enter(ctx) {
      state = ctx.state;
      phase = 'hold';
      dragging = false;
      offPath = 0;
      time = 0;
      startSlide = null;
      tweens.clear();
      dropCrack();
      rotation = 0;
      amounts = { h: 0, qTop: 0, qBot: 0 };
      push();
      scene.add(guide, marker);
      guide.visible = false;
      marker.visible = false;
      probe.pivot(INCISIONS.main).show();
      probe.setTip(PROBE_START.x, PROBE_START.y, PROBE_START.z);
      chopper.pivot(INCISIONS.side).show();
      chopper.setTip(CHOPPER_START.x, CHOPPER_START.y, CHOPPER_START.z);
      slide(probe, PROBE_HOLD, 0.8, () => startStroke(1));
    },
    exit() {
      tweens.clear();
      startSlide = null;
      probe.hide();
      chopper.hide();
      scene.remove(guide, marker);
      dropCrack();
    },
    update(dt) {
      tweens.update(dt);
      time += dt;
      if (marker.visible) marker.scale.setScalar(1 + 0.25 * Math.sin(time * 5));
    },
    pointerDown(p) {
      if (!chopping()) return;
      dragging = true;
      offPath = 0;
      tracker.lift();
      move(p);
    },
    // main.js 只在按住時轉送 move；自動動畫結束時若仍按著，直接開始拉
    pointerMove(p) {
      if (!chopping()) return;
      if (!dragging) { dragging = true; tracker.lift(); }
      move(p);
    },
    pointerUp() {
      dragging = false;
      tracker?.lift();
    },
    isComplete() { return phase === 'done'; },
    skip: SKIPS.chop,
    demoPath() {
      const pull = linePoints({ x: 0, z: -3.4 }, { x: 0, z: -0.4 }, 12);
      // 最後一個事件在 done 之後無作用，只是讓示範撐到自動劈完另一半
      return [...dragEvents(pull, 1.0, 1.2), ...dragEvents(pull, 5.0, 1.2), { t: 10.5, type: 'move', x: 0, z: 0 }];
    },
  });
}
