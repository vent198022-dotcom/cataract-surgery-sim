import * as THREE from 'three';
import { baseStep } from './common.js';
import { SKIPS } from '../core/skips.js';
import { Tweens, ease } from '../core/tween.js';
import { clampToDisk } from '../core/geometry.js';
import { dragEvents } from '../core/demo.js';
import { INCISIONS } from '../eye/anatomy.js';
import { chopOffsets, H_FINAL, Q_FINAL } from '../eye/layout.js';
import { createPathCrack } from '../eye/crack.js';
import { straightCuts, boundaryFromPath, continueAcross, clampCuts, localPoint } from '../eye/nucleusCuts.js';
import { createChopStroke, alignNegZ, alignX, localX, shortestDelta, wobblePath, pointAlong } from './chopStroke.js';

const WORK_Y = 9.1;
const AUTO_RIM = { x: 0, z: -3.3 };   // 自動劈另一半時，該半轉到畫面上方，劈核器從這裡入刀
const CENTER = { x: 0, z: -0.5 };     // 探頭吸住的核中央附近
const PROBE_START = { x: 3.2, y: 9.0, z: 0 };
const PROBE_HOLD = { x: 0.5, y: 9.0, z: 0 };
const CHOPPER_START = { x: 0, y: 9.1, z: -4.3 };
const CHOPPER_SPREAD = { x: -0.9, y: 9.0, z: -0.6 };  // 撐開時劈核器往左、探頭往右
const PROBE_SPREAD = { x: 0.9, y: 9.0, z: 0.2 };
const CONTACT_R = 3.0;              // 推核時劈核器碰到核左緣的位置
const HALF_OPEN = 0.35;             // 第一刀後兩半撐開的距離
const START_R = 2.4;                // 從這個半徑以外下刀，裂縫才開始（核邊緣約 3.13）
const ALIGN_TIME = 0.25;            // 第二刀下刀時，核轉到對準劈向的時間
const EDGE_HINT_GAP = 2;            // 「先移到邊緣」提示的最短間隔（秒）
const AUTO_WOBBLE = 0.25;           // 自動那一刀的側向擺動（mm）
const CONTINUE_SEED = 3;            // 第一刀另一側（病人沒拉的那邊）延伸切線的擺動種子

// 真實劈核（自由劈）：探頭吸住核中央 → 病人把劈核器從核邊緣往探頭拉，裂縫沿實際拉過的路徑長出，
// 核的裂縫方向自動對準病人拉的方向 → 撐開 → 劈核器把核推轉 → 第二刀（劈較靠近下刀點的那一半）
// → 再推轉，另一半自動劈開
export function createChopStep({ eye, tools, ui, content }) {
  const { probe, chopper } = tools;
  const tweens = new Tweens();
  let state, stroke, crack, dragging, phase, time, lastEdgeHint;  // phase: 'hold' | 'stroke1' | 'auto' | 'stroke2' | 'done'
  let aligning = false;   // 第二刀下刀後核正在轉到對準方向，這段時間不記錄移動
  let patientSign = 1;    // 第二刀劈的那一半：+1 = q0/q1（核座標 x>0）、-1 = q2/q3
  let rotation = 0;
  let cuts = straightCuts();  // 目前四條切線 B0..B3（核座標、旋轉體角度）；劈完一刀就把那條換成病人拉的路徑
  let amounts = { h: 0, qTop: 0, qBot: 0 };

  const push = () => eye.setPieceOffsets(chopOffsets(amounts), rotation);
  const set = patch => { amounts = { ...amounts, ...patch }; push(); };
  const tipOf = tool => ({ x: tool.tip.x, y: tool.tip.y, z: tool.tip.z });
  const mix = (a, b, k) => ({ x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k, z: a.z + (b.z - a.z) * k });
  const halfKey = sign => (sign > 0 ? 'qTop' : 'qBot');  // q0|q1 的接縫用 qTop，q2|q3 用 qBot

  // 讓工具尖端在 duration 秒內滑到 to
  function slide(tool, to, duration, onDone) {
    const from = tipOf(tool);
    return tweens.add(duration, k => {
      const p = mix(from, to, ease(k));
      tool.setTip(p.x, p.y, p.z);
    }, onDone);
  }

  // 更新切線並立刻讓核塊照新切線重建。四條接縫：B0 / B2 是第一刀的兩端（核座標 z 軸，φ = 0 / π），
  // B1 是 q0|q1（核座標 +x，φ = π/2）、B3 是 q2|q3（核座標 −x，φ = 3π/2）。
  // 這裡的 φ 是旋轉體角度 atan2(x, z)，不是世界的 atan2(z, x)
  function applyCuts(patch) {
    cuts = clampCuts(cuts.map((c, k) => patch[k] ?? c));
    state.nucleusCuts = cuts;
    eye.setNucleusCuts(cuts);
  }
  const localPath = worldPoints => worldPoints.map(p => localPoint(p, rotation));

  function dropCrack() {
    crack?.dispose();
    crack = null;
  }

  function startStroke(n) {
    phase = 'stroke' + n;
    dragging = false;
    aligning = false;
    stroke = createChopStroke({ startR: START_R, minInward: 1.6, doneDist: 1.0, holdPoint: PROBE_HOLD });
    dropCrack();
    crack = createPathCrack(eye.nucleusGroup);
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
    aligning = false;
    crack.setPoints(stroke.points);
    if (n === 1) {
      // 第一刀拉在核座標 −z（φ = π）：接縫 B2 照病人的路徑，另一端 B0 自動延伸
      const b2 = boundaryFromPath(localPath(stroke.points), Math.PI);
      applyCuts({ 0: continueAcross(b2, 0, CONTINUE_SEED), 2: b2 });
      state.nucleusSplit = 1;
      spread(0.8, e => set({ h: HALF_OPEN * e }), () => rotateBy(Math.PI / 2, 1.2, () => startStroke(2)));
    } else {
      // 第二刀劈的那一半：+x 半（q0|q1）的接縫是 B1（φ = π/2），−x 半（q2|q3）的接縫是 B3（φ = 3π/2）
      applyCuts(patientSign > 0
        ? { 1: boundaryFromPath(localPath(stroke.points), Math.PI / 2) }
        : { 3: boundaryFromPath(localPath(stroke.points), (3 * Math.PI) / 2) });
      const key = halfKey(patientSign);
      spread(0.7, e => set({ [key]: Q_FINAL * e, h: HALF_OPEN + (H_FINAL - HALF_OPEN) * e }), () => {
        ui.showHint(content.hints.chopOther);
        // 把另一半推轉到畫面上方，再由系統劈
        const delta = shortestDelta(rotation, alignX(-Math.PI / 2, -patientSign));
        rotateBy(delta, 0.7 + (0.7 * Math.abs(delta)) / Math.PI, autoThird);
      });
    }
  }

  // 另一半由系統自動劈：劈核器從邊緣沿略彎的路徑拉向中央，裂縫長出，再撐開
  function autoThird() {
    const path = wobblePath(AUTO_RIM, CENTER, 9, AUTO_WOBBLE, 0.8);
    const key = halfKey(-patientSign);
    slide(chopper, { x: AUTO_RIM.x, y: 9.0, z: AUTO_RIM.z }, 0.3, () => {
      crack = createPathCrack(eye.nucleusGroup);
      tweens.add(0.8, k => {
        const p = pointAlong(path, ease(k));
        chopper.setTip(p.x, 9.0, p.z);
        const i = Math.min(path.length - 1, Math.floor(ease(k) * (path.length - 1)));
        const pts = path.slice(0, i + 1);
        const last = pts[pts.length - 1];
        if (Math.hypot(p.x - last.x, p.z - last.z) > 0.02) pts.push(p);
        crack.setPoints(pts);
      }, () => {
        // 自動那一刀的路徑就是另一條接縫：另一半是 −patientSign 那邊
        applyCuts(patientSign > 0
          ? { 3: boundaryFromPath(localPath(path), (3 * Math.PI) / 2) }
          : { 1: boundaryFromPath(localPath(path), Math.PI / 2) });
        spread(0.6, e => set({ [key]: Q_FINAL * e }), () => {
          state.nucleusSplit = 2;
          state.nucleusRotation = rotation;  // 後面的步驟沿用這個角度
          phase = 'done';
          ui.showHint(content.hints.stepDone);
        });
      });
    });
  }

  // 下刀（裂縫剛開始）：把核轉到讓接縫沿著病人的劈向
  function onStart(c) {
    const thetaS = Math.atan2(c.z, c.x);
    if (phase === 'stroke1') {
      rotation = alignNegZ(thetaS);  // 核紋理是同心圓，瞬間轉動看不出來
      push();
      return;
    }
    patientSign = localX(c.x, c.z, rotation) >= 0 ? 1 : -1;  // 下刀點在哪一半就劈哪一半
    const r0 = rotation;
    const delta = shortestDelta(r0, alignX(thetaS, patientSign));
    aligning = true;
    tweens.add(ALIGN_TIME, k => {
      rotation = r0 + delta * ease(k);
      push();
    }, () => { aligning = false; });
  }

  function move(p, quiet = false) {
    if (aligning) return;
    const c = clampToDisk(p.x, p.z, 4.2);
    chopper.setTip(c.x, 9.0, c.z);
    const res = stroke.add(c.x, c.z);
    if (res.tooInner) {
      if (!quiet && time - lastEdgeHint >= EDGE_HINT_GAP) {
        lastEdgeHint = time;
        ui.showHint(content.hints.chopFromEdge);
      }
      return;
    }
    if (res.started) onStart(c);
    if (aligning) return;
    if (res.appended) crack.setPoints(stroke.points);
    if (stroke.isDone(c.x, c.z)) afterStroke(phase === 'stroke1' ? 1 : 2);
  }

  const chopping = () => phase === 'stroke1' || phase === 'stroke2';

  // 示範的一刀：從邊緣（世界角 deg）出發，沿帶側向擺動的路徑拉到探頭
  function demoStroke(deg, phaseShift, start, duration) {
    const a = (deg * Math.PI) / 180;
    const edge = { x: 3.4 * Math.cos(a), z: 3.4 * Math.sin(a) };
    return dragEvents(wobblePath(edge, { x: PROBE_HOLD.x, z: PROBE_HOLD.z }, 14, 0.3, phaseShift), start, duration);
  }

  return baseStep({
    id: 'chop',
    gripTool: chopper,  // 觸控相對移動時跟著手指平移的器械
    workY: WORK_Y,
    enter(ctx) {
      state = ctx.state;
      state.nucleusRotation = null;
      state.nucleusCuts = null;  // 進入時回到直線切線
      cuts = straightCuts();
      eye.setNucleusCuts(null);
      phase = 'hold';
      dragging = false;
      aligning = false;
      patientSign = 1;
      time = 0;
      lastEdgeHint = -Infinity;
      tweens.clear();
      dropCrack();
      stroke = null;
      rotation = 0;
      amounts = { h: 0, qTop: 0, qBot: 0 };
      push();
      probe.pivot(INCISIONS.main).show();
      probe.setTip(PROBE_START.x, PROBE_START.y, PROBE_START.z);
      chopper.pivot(INCISIONS.side).show();
      chopper.setTip(CHOPPER_START.x, CHOPPER_START.y, CHOPPER_START.z);
      slide(probe, PROBE_HOLD, 0.8, () => startStroke(1));
    },
    exit() {
      tweens.clear();
      probe.hide();
      chopper.hide();
      dropCrack();
    },
    update(dt) {
      tweens.update(dt);
      time += dt;
    },
    pointerDown(p) {
      if (!chopping()) return;
      dragging = true;
      move(p, true);
    },
    // main.js 只在按住時轉送 move；自動動畫結束時若仍按著，直接開始拉
    pointerMove(p) {
      if (!chopping()) return;
      dragging = true;
      move(p);
    },
    pointerUp() {
      dragging = false;
    },
    isComplete() { return phase === 'done'; },
    skip: SKIPS.chop,
    demoPath() {
      // 第一刀：左上方（約 -110°）入刀；第二刀在撐開、推轉結束後，從右下方（約 60°）入刀。
      // 最後一個事件在 done 之後無作用，只是讓示範撐到自動劈完另一半
      return [...demoStroke(-110, 0.5, 1.5, 1.6), ...demoStroke(60, 2.1, 6.3, 1.6), { t: 13.2, type: 'move', x: 0, z: 0 }];
    },
  });
}
