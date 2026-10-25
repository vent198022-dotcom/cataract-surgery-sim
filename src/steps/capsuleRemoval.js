import { baseStep, lerp3 } from './common.js';
import { SKIPS } from '../core/skips.js';
import { Tweens, ease } from '../core/tween.js';
import { dist2D, clampToDisk } from '../core/geometry.js';
import { dragEvents, linePoints } from '../core/demo.js';
import { INCISIONS, CAPSULE_Y } from '../eye/anatomy.js';

const OUTSIDE = { x: 9, y: 11.8, z: 0 };
const REST = { x: 1.5, y: CAPSULE_Y, z: 1.0 };
const AIM = { x: 0, y: 7, z: 0 };
const GRAB_RADIUS = 2.4;
const EXIT_RADIUS = 1.4;
const TIP_LIMIT = 5.6;

// 開頭自動：鑷子從眼外進入雷射切口；之後病人夾住發光的囊片拖到切口取出
export function createCapsuleRemovalStep({ eye, tools, ui, content }) {
  const forceps = tools.forceps;
  const disc = eye.parts.capsuleDisc.group;
  const tweens = new Tweens();
  let state, phase, grabbed, time;  // phase: 'opening' | 'grab' | 'extract' | 'done'

  const tipY = r => CAPSULE_Y + Math.max(0, r - 3) * 0.55;  // 越靠近切口越往上

  function tipTo(x, z) {
    forceps.setTip(x, tipY(Math.hypot(x, z)), z);
  }

  function extract() {
    phase = 'extract';
    grabbed = false;
    const fromC = { x: disc.position.x, y: disc.position.y + CAPSULE_Y, z: disc.position.z };  // 目前囊片中心
    const outC = { x: OUTSIDE.x, y: OUTSIDE.y, z: 0 };
    tweens.add(0.8, k => {
      const s = 1 - 0.7 * k;
      const c = lerp3(fromC, outC, ease(k));
      disc.scale.setScalar(s);
      disc.position.set(c.x, c.y - s * CAPSULE_Y, c.z);  // 縮放以囊片中心為準，不往眼球原點縮
    }, () => {
      state.capsuleOpen = true;
      eye.applyState(state);
      phase = 'done';
      ui.showHint(content.hints.stepDone);
    });
  }

  function move(p) {
    const c = clampToDisk(p.x, p.z, TIP_LIMIT);
    tipTo(c.x, c.z);
    if (!grabbed) return;
    disc.position.set(c.x, tipY(Math.hypot(c.x, c.z)) - CAPSULE_Y, c.z);
    if (dist2D(c.x, c.z, INCISIONS.main.x, INCISIONS.main.z) < EXIT_RADIUS) extract();
  }

  return baseStep({
    id: 'capsuleRemoval',
    workY: CAPSULE_Y,
    enter(ctx) {
      state = ctx.state;
      phase = 'opening';
      grabbed = false;
      time = 0;
      tweens.clear();
      const inc = INCISIONS.main;
      forceps.aim(AIM).show();
      forceps.setTip(OUTSIDE.x, OUTSIDE.y, OUTSIDE.z);
      tweens.add(1.0, k => {
        const p = lerp3(OUTSIDE, inc, ease(k));
        forceps.setTip(p.x, p.y, p.z);
      }, () => {
        forceps.pivot(inc);
        const start = { x: inc.x - 0.3, y: inc.y - 0.2, z: inc.z };
        tweens.add(0.8, k => {
          const p = lerp3(start, REST, ease(k));
          forceps.setTip(p.x, p.y, p.z);
        }, () => { phase = 'grab'; });
      });
    },
    exit() {
      tweens.clear();
      forceps.hide();
      eye.setDiscGlow(0);
    },
    update(dt) {
      time += dt;
      tweens.update(dt);
      eye.setDiscGlow(phase === 'grab' && !grabbed ? 0.5 + 0.5 * Math.sin(time * 5) : 0);
    },
    pointerDown(p) {
      if (phase !== 'grab') return;
      const c = clampToDisk(p.x, p.z, TIP_LIMIT);
      tipTo(c.x, c.z);
      if (dist2D(c.x, c.z, disc.position.x, disc.position.z) < GRAB_RADIUS) {
        grabbed = true;
        move(p);
      } else {
        ui.showHint(content.hints.grabDisc);
      }
    },
    pointerMove(p) { if (grabbed && phase === 'grab') move(p); },
    pointerUp() {
      if (!grabbed || phase !== 'grab') return;
      grabbed = false;
      const from = { x: disc.position.x, y: disc.position.y, z: disc.position.z };
      tweens.add(0.3, k => {
        const q = lerp3(from, { x: 0, y: 0, z: 0 }, ease(k));
        disc.position.set(q.x, q.y, q.z);
      });
    },
    isComplete() { return phase === 'done'; },
    skip: SKIPS.capsuleRemoval,
    demoPath() { return dragEvents(linePoints({ x: 0.4, z: 0.3 }, { x: INCISIONS.main.x, z: 0 }, 14), 2.2, 1.4); },
  });
}
