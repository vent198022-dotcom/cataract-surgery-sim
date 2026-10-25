import { baseStep, lerp3 } from './common.js';
import { SKIPS } from '../core/skips.js';
import { Tweens, ease } from '../core/tween.js';
import { clampToDisk, createArcTracker } from '../core/geometry.js';
import { dragEvents, circlePoints } from '../core/demo.js';
import { INCISIONS, CAPSULE_OPENING, CAPSULE_Y } from '../eye/anatomy.js';
import { createDashedPath, createProgressPath, circleAt } from '../eye/guides.js';

const BINS = 36;
const DONE_COVERAGE = 0.9;
const OFF_PATH_LIMIT = 20;

export function createCapsulorhexisStep({ scene, eye, tools, ui, content }) {
  const forceps = tools.forceps;
  const tweens = new Tweens();
  const guide = createDashedPath(circleAt(CAPSULE_OPENING), CAPSULE_Y + 0.05);
  const progress = createProgressPath(circleAt(CAPSULE_OPENING), CAPSULE_Y + 0.06, BINS);
  let state, tracker, dragging, finishing, done, offPath;

  // 撕完一圈：鑷子夾住前囊片，從主切口拉出
  function finish() {
    finishing = true;
    dragging = false;
    const disc = eye.parts.capsuleDisc.group;
    const from = { x: forceps.tip.x, y: forceps.tip.y, z: forceps.tip.z };
    const grab = { x: 0, y: CAPSULE_Y + 0.3, z: 0 };
    const out = { x: INCISIONS.main.x + 1.5, y: INCISIONS.main.y + 0.8, z: 0 };
    tweens.add(0.5, k => {
      const p = lerp3(from, grab, ease(k));
      forceps.setTip(p.x, p.y, p.z);
    }, () => {
      tweens.add(1.0, k => {
        const e = ease(k);
        const p = lerp3(grab, out, e);
        forceps.setTip(Math.min(p.x, INCISIONS.main.x - 0.5), Math.min(p.y, 10.5), p.z);  // 尖端留在切口內
        // 囊片幾何在眼球座標原點，縮放會往原點縮；用 p - s*grab 讓夾住點始終跟著 p
        const s = 1 - 0.7 * e;
        disc.scale.setScalar(s);
        disc.position.set(p.x - s * grab.x, p.y - s * grab.y, p.z - s * grab.z);
      }, () => {
        state.capsuleOpen = true;
        eye.applyState(state);
        guide.visible = false;
        progress.clear();
        done = true;
        ui.showHint(content.hints.stepDone);
      });
    });
  }

  function move(p) {
    const c = clampToDisk(p.x, p.z, 4.0);
    forceps.setTip(c.x, CAPSULE_Y, c.z);
    if (tracker.add(c.x, c.z)) {
      offPath = 0;
      progress.setHits(tracker.hits());
      if (tracker.coverage() >= DONE_COVERAGE) finish();
    } else if (++offPath > OFF_PATH_LIMIT) {
      offPath = 0;
      ui.showHint(content.hints.followCircle);
    }
  }

  return baseStep({
    id: 'capsulorhexis',
    workY: CAPSULE_Y,
    enter(ctx) {
      state = ctx.state;
      tracker = createArcTracker(CAPSULE_OPENING, BINS, 0.8);
      dragging = finishing = done = false;
      offPath = 0;
      tweens.clear();
      guide.visible = true;
      progress.clear();
      scene.add(guide, progress.object);
      forceps.pivot(INCISIONS.main).show();
      forceps.setTip(CAPSULE_OPENING, CAPSULE_Y, 0);
    },
    exit() {
      tweens.clear();
      forceps.hide();
      scene.remove(guide, progress.object);
    },
    update(dt) { tweens.update(dt); },
    pointerDown(p) {
      if (finishing) return;
      dragging = true;
      offPath = 0;
      tracker.lift();
      move(p);
    },
    pointerMove(p) { if (dragging && !finishing) move(p); },
    pointerUp() {
      dragging = false;
      tracker?.lift();
    },
    isComplete() { return done; },
    skip: SKIPS.capsulorhexis,
    demoPath() { return dragEvents(circlePoints(CAPSULE_OPENING, 48), 0.3, 3.5); },
  });
}
