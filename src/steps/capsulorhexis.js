import { baseStep, lerp3 } from './common.js';
import { SKIPS } from '../core/skips.js';
import { Tweens, ease } from '../core/tween.js';
import { clampToDisk, createArcTracker } from '../core/geometry.js';
import { dragEvents, circlePoints } from '../core/demo.js';
import { INCISIONS, CAPSULE_OPENING, CAPSULE_Y } from '../eye/anatomy.js';
import { createDashedPath, createTornEdge, circleAt } from '../eye/guides.js';
import { anteriorY, contiguousRun, tearState } from '../eye/flapMath.js';

const BINS = 36;
const DASHES = 24;
const DONE_COVERAGE = 0.9;
const OFF_PATH_LIMIT = 20;
const INITIAL_ANGLE = 0.25;  // 穿刺後先撕開的一小片（rad）
const TIP_Y = CAPSULE_Y + 0.1;
const TWO_PI = Math.PI * 2;

export function createCapsulorhexisStep({ scene, eye, tools, ui, content }) {
  const forceps = tools.forceps;
  const flap = eye.capsuleFlap;
  const tweens = new Tweens();
  const guide = createDashedPath(circleAt(CAPSULE_OPENING), CAPSULE_Y + 0.05, DASHES);
  const torn = createTornEdge(CAPSULE_OPENING, anteriorY(CAPSULE_OPENING) + 0.02);
  let state, tracker, dragging, offPath, phase;
  // 撕裂的「目標」由撕囊動作更新，「顯示值」每幀緩動追上，畫面才不會跳格
  let target, shown, targetPeel, shownPeel;
  let grip, gripTarget;  // 鑷子夾住撕裂前緣的點與強度
  let tip;

  function setTip(x, y, z) {
    tip = { x, y, z };
    forceps.setTip(x, y, z);
  }

  function setTear(dir, angle) {
    target = { dir, angle };
    shown = { dir, angle };
  }

  // 每幀：顯示值追上目標，更新前囊片、撕裂邊緣與虛線
  function refresh(dt) {
    const k = Math.min(1, dt * 8);
    if (shown.dir !== target.dir) shown = { dir: target.dir, angle: INITIAL_ANGLE };
    shown.angle += (target.angle - shown.angle) * k;
    shownPeel += (targetPeel - shownPeel) * k;
    grip.strength += (gripTarget - grip.strength) * k;
    grip.x = tip.x; grip.y = tip.y + 0.05; grip.z = tip.z;
    if (phase === 'finishing' && finishPull) { grip.x = finishPull.x; grip.y = finishPull.y + 0.05; grip.z = finishPull.z; }
    flap.update(shown, shownPeel, grip.strength > 0.001 ? grip : null);
    torn.setAngle(shown.dir, shown.angle);
    // 撕裂前緣之後的虛線消失（虛線 i 的中點角度 = 2π(i + 0.275)/DASHES）
    guide.children.forEach((dash, i) => {
      const a = (TWO_PI * (i + 0.275)) / DASHES;
      const rel = shown.dir > 0 ? a : TWO_PI - a;
      dash.visible = rel > shown.angle;
    });
  }

  let finishPull = null;  // 拉出階段：夾住點在前囊片本地座標中固定不動

  // 撕完一圈：撕裂收尾 → 整片折起 → 鑷子夾著折起的前囊片從主切口拉出
  function finish(tear) {
    phase = 'finishing';
    dragging = false;
    const grab = { x: 0, y: CAPSULE_Y + 0.5, z: 0 };
    const out = { x: INCISIONS.main.x + 1.5, y: INCISIONS.main.y + 0.8, z: 0 };
    const a0 = shown.angle;
    gripTarget = 1;
    tweens.add(0.4, k => {
      const angle = a0 + (TWO_PI - a0) * ease(k);
      setTear(tear.dir, angle);
      setTip(CAPSULE_OPENING * Math.cos(tear.dir * angle), TIP_Y, CAPSULE_OPENING * Math.sin(tear.dir * angle));
    }, () => {
      const from = { ...tip };
      tweens.add(0.5, k => {
        const e = ease(k);
        targetPeel = shownPeel = e;
        const p = lerp3(from, grab, e);
        setTip(p.x, p.y, p.z);
      }, () => {
        finishPull = grab;
        tweens.add(1.0, k => {
          const e = ease(k);
          const p = lerp3(grab, out, e);
          setTip(Math.min(p.x, INCISIONS.main.x - 0.5), Math.min(p.y, 10.5), p.z);  // 尖端留在切口內
          // 前囊片幾何在眼球座標原點，縮放會往原點縮；用 p - s*grab 讓夾住點始終跟著 p
          const s = 1 - 0.7 * e;
          flap.mesh.scale.setScalar(s);
          flap.mesh.position.set(p.x - s * grab.x, p.y - s * grab.y, p.z - s * grab.z);
        }, () => {
          finishPull = null;
          gripTarget = 0;
          state.capsuleOpen = true;
          eye.applyState(state);  // 隱藏前囊片與圓盤，保留藍色染色
          guide.visible = false;
          torn.clear();
          phase = 'done';
          ui.showHint(content.hints.stepDone);
        });
      });
    });
  }

  function move(p) {
    const c = clampToDisk(p.x, p.z, 4.0);
    setTip(c.x, TIP_Y, c.z);
    if (tracker.add(c.x, c.z)) {
      offPath = 0;
      const hits = tracker.hits();
      const tear = tearState(hits, INITIAL_ANGLE);
      target = tear;
      const { forward, backward } = contiguousRun(hits);
      if (Math.max(forward, backward) >= DONE_COVERAGE * BINS) finish(tear);
    } else if (++offPath > OFF_PATH_LIMIT) {
      offPath = 0;
      ui.showHint(content.hints.followCircle);
    }
  }

  function startDrag() {
    dragging = true;
    offPath = 0;
    tracker.lift();
    gripTarget = 1;
  }

  // 開場：染藍 → 鑷子到囊中央 → 穿刺 → 向外撕出第一小片
  function opening() {
    tweens.add(1.0, k => { eye.setCapsuleStain(k); }, () => {
      const from = { ...tip };
      const above = { x: 0.3, y: CAPSULE_Y + 0.25, z: 0 };
      tweens.add(0.4, k => {
        const p = lerp3(from, above, ease(k));
        setTip(p.x, p.y, p.z);
      }, () => {
        const low = anteriorY(0.3) - 0.05;
        tweens.add(0.2, k => {  // 穿刺：下壓再微微抬起
          const d = k < 0.6 ? k / 0.6 : 1 - 0.3 * ((k - 0.6) / 0.4);
          setTip(0.3, above.y + (low - above.y) * d, 0);
        }, () => {
          const start = { x: 0.3, y: above.y + (low - above.y) * 0.7, z: 0 };
          const end = { x: CAPSULE_OPENING, y: TIP_Y, z: 0 };
          gripTarget = 1;
          tweens.add(0.6, k => {
            const p = lerp3(start, end, ease(k));
            setTip(p.x, p.y, p.z);
            setTear(1, INITIAL_ANGLE * ease(k));
          }, () => {
            tracker.add(CAPSULE_OPENING, 0);
            phase = 'tear';
          });
        });
      });
    });
  }

  return baseStep({
    id: 'capsulorhexis',
    gripTool: forceps,  // 觸控時手指拖的是這支器械的握柄
    workY: CAPSULE_Y,
    enter(ctx) {
      state = ctx.state;
      tracker = createArcTracker(CAPSULE_OPENING, BINS, 0.8);
      dragging = false;
      offPath = 0;
      phase = 'opening';
      finishPull = null;
      shownPeel = targetPeel = 0;
      grip = { x: 0, y: 0, z: 0, strength: 0 };
      gripTarget = 0;
      tweens.clear();
      guide.visible = true;
      guide.children.forEach(d => { d.visible = true; });
      torn.clear();
      scene.add(guide, torn.object);
      eye.parts.capsuleDisc.setPresent(false);
      flap.reset();
      flap.mesh.visible = true;
      eye.setCapsuleStain(0);
      setTear(1, 0);
      forceps.pivot(INCISIONS.main).show();
      setTip(3.0, CAPSULE_Y + 0.6, 0.6);
      opening();
    },
    exit() {
      tweens.clear();
      forceps.hide();
      scene.remove(guide, torn.object);
      flap.mesh.visible = false;
    },
    update(dt) {
      tweens.update(dt);
      if (phase !== 'done' && flap.mesh.visible) refresh(dt);
    },
    pointerDown(p) {
      if (phase !== 'tear') return;
      startDrag();
      move(p);
    },
    pointerMove(p) {
      if (phase !== 'tear') return;
      if (!dragging) startDrag();
      move(p);
    },
    pointerUp() {
      dragging = false;
      if (phase === 'tear') gripTarget = 0;
      tracker?.lift();
    },
    isComplete() { return phase === 'done'; },
    skip: SKIPS.capsulorhexis,
    demoPath() { return dragEvents(circlePoints(CAPSULE_OPENING, 48), 2.6, 3.5); },
  });
}
