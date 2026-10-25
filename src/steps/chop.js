import { baseStep } from './common.js';
import { SKIPS } from '../core/skips.js';
import { Tweens, ease } from '../core/tween.js';
import { clampToDisk, createLineTracker } from '../core/geometry.js';
import { dragEvents, linePoints } from '../core/demo.js';
import { INCISIONS } from '../eye/anatomy.js';
import { HALF_GAP, QUARTER_GAP } from '../eye/layout.js';
import { createDashedPath, createProgressPath, lineAt } from '../eye/guides.js';

const WORK_Y = 9.1;
const LINE_Y = 9.15;
const A = { x: 0, z: -3.4 };
const B = { x: 0, z: 3.4 };
const BINS = 20;
const DONE_COVERAGE = 0.8;
const PROBE_TIP = { x: 0.7, y: 9.0, z: 0 };
const CHOPPER_REST = { x: 0, z: -3.8 };
const OFF_PATH_LIMIT = 20;

// 兩刀都沿畫面上的垂直虛線：第一刀分兩半 → 核轉 90° → 第二刀分四塊
export function createChopStep({ scene, eye, tools, ui, content }) {
  const { probe, chopper } = tools;
  const tweens = new Tweens();
  const guide = createDashedPath(lineAt(A, B), LINE_Y);
  const progress = createProgressPath(lineAt(A, B), LINE_Y + 0.01, BINS);
  let state, tracker, dragging, phase, offPath;  // phase: 'first' | 'animating' | 'second' | 'done'

  function newStroke() {
    tracker = createLineTracker(A, B, BINS, 0.9);
    progress.clear();
    guide.visible = true;
    chopper.setTip(CHOPPER_REST.x, WORK_Y, CHOPPER_REST.z);
  }

  function firstChop() {
    phase = 'animating';
    dragging = false;
    guide.visible = false;
    progress.clear();
    state.nucleusSplit = 1;
    tweens.add(0.5, k => eye.setNucleusLayout({ half: HALF_GAP * ease(k) }), () => {
      tweens.add(1.0, k => eye.setNucleusLayout({ half: HALF_GAP, rotation: (Math.PI / 2) * ease(k) }), () => {
        phase = 'second';
        newStroke();
      });
    });
  }

  function secondChop() {
    phase = 'animating';
    dragging = false;
    guide.visible = false;
    progress.clear();
    tweens.add(0.5, k => eye.setNucleusLayout({ half: HALF_GAP, quarter: QUARTER_GAP * ease(k), rotation: Math.PI / 2 }), () => {
      state.nucleusSplit = 2;
      phase = 'done';
      ui.showHint(content.hints.stepDone);
    });
  }

  function move(p) {
    const c = clampToDisk(p.x, p.z, 4.2);
    chopper.setTip(c.x, WORK_Y, c.z);
    if (tracker.add(c.x, c.z)) {
      offPath = 0;
      progress.setHits(tracker.hits());
      if (tracker.coverage() >= DONE_COVERAGE) (phase === 'first' ? firstChop : secondChop)();
    } else if (++offPath > OFF_PATH_LIMIT) {
      offPath = 0;
      ui.showHint(content.hints.followLine);
    }
  }

  const chopping = () => phase === 'first' || phase === 'second';

  return baseStep({
    id: 'chop',
    workY: WORK_Y,
    enter(ctx) {
      state = ctx.state;
      phase = 'first';
      dragging = false;
      offPath = 0;
      tweens.clear();
      scene.add(guide, progress.object);
      probe.pivot(INCISIONS.main).show();
      probe.setTip(PROBE_TIP.x, PROBE_TIP.y, PROBE_TIP.z);
      chopper.pivot(INCISIONS.side).show();
      newStroke();
    },
    exit() {
      tweens.clear();
      probe.hide();
      chopper.hide();
      scene.remove(guide, progress.object);
    },
    update(dt) { tweens.update(dt); },
    pointerDown(p) {
      if (!chopping()) return;
      dragging = true;
      tracker.lift();
      move(p);
    },
    // main.js 只在按住時轉送 move；動畫結束時若仍按著，直接開始第二刀
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
      const stroke = linePoints({ x: 0, z: -3.6 }, { x: 0, z: 3.6 }, 16);
      return [...dragEvents(stroke, 0.3, 1.5), ...dragEvents(stroke, 3.8, 1.5)];
    },
  });
}
