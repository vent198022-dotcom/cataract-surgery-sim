import * as THREE from 'three';
import { baseStep, lerp3 } from './common.js';
import { SKIPS } from '../core/skips.js';
import { Tweens, ease } from '../core/tween.js';
import { clampToDisk } from '../core/geometry.js';
import { dragEvents } from '../core/demo.js';
import { INCISIONS, CAPSULE_OPENING, CAPSULE_Y } from '../eye/anatomy.js';
import { createPathEdge, createMarker } from '../eye/guides.js';
import { anteriorY } from '../eye/flapMath.js';
import { createTearPath, CLOSE_TURNS } from '../eye/tearPath.js';

const INITIAL_ANGLE = 0.25;  // 穿刺後先撕開的一小片（rad）
const TWO_PI = Math.PI * 2;
const EDGE_STEP = 0.15;      // 撕裂邊緣每增長這麼長（mm）才重建一次圓管
const EDGE_SPACING = 0.12;   // 圓管取點的最小間距（mm）
const WIDE_HINT_GAP = 2;     // 「太靠外側」提示的最短間隔（秒）
const MARKER_SCALE = 0.6;

const tipY = r => anteriorY(Math.min(r, 4.0)) + 0.1;  // 尖端貼著前囊表面上方

// 自動示範：一圈不規則的撕裂，最後半徑漸收回 2.6、停在起點附近
export function demoPoints(n = 90) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const th = TWO_PI * 1.02 * t;
    const wobble = 0.22 * Math.sin(3 * th) + 0.12 * Math.cos(5 * th + 0.7);
    const taper = Math.min(1, Math.max(0, (t - 0.85) / 0.15));
    const r = CAPSULE_OPENING + wobble * (1 - taper);
    pts.push({ x: r * Math.cos(th), z: r * Math.sin(th) });
  }
  return pts;
}

export function createCapsulorhexisStep({ scene, eye, tools, ui, content }) {
  const forceps = tools.forceps;
  const flap = eye.capsuleFlap;
  const tweens = new Tweens();
  const edge = createPathEdge();
  const marker = createMarker({ x: CAPSULE_OPENING, y: anteriorY(CAPSULE_OPENING), z: 0 });
  marker.scale.setScalar(MARKER_SCALE);
  marker.visible = false;
  let state, path, dragging, phase;
  // 撕裂的「目標」由撕囊動作更新，「顯示值」每幀緩動追上，畫面才不會跳格
  let target, shown, targetPeel, shownPeel;
  let grip, gripTarget;  // 鑷子夾住撕裂前緣的點與強度
  let tip;
  let time, lastWideHint, closeHinted, edgeLen, edgeBuilt;

  function setTip(x, y, z) {
    tip = { x, y, z };
    forceps.setTip(x, y, z);
  }

  function setTear(dir, angle) {
    target = { dir, angle };
    shown = { dir, angle };
  }

  // 依記錄的撕裂點重建白色邊緣（取點太密的略過，最後一點一定保留）
  function rebuildEdge() {
    const dir = path.dir || 1;
    const pts = [];
    path.points.forEach((q, i) => {
      const v = new THREE.Vector3(q.r * Math.cos(dir * q.s), anteriorY(q.r) + 0.02, q.r * Math.sin(dir * q.s));
      const last = pts[pts.length - 1];
      const gap = last ? Math.hypot(v.x - last.x, v.z - last.z) : Infinity;
      if (i === path.points.length - 1) {
        if (gap < EDGE_SPACING && pts.length > 1) pts.pop();  // 最後一點取代太近的前一點
        if (gap > 1e-4 || pts.length < 2) pts.push(v);
      } else if (gap >= EDGE_SPACING) {
        pts.push(v);
      }
    });
    edge.set(pts);
    edgeBuilt = edgeLen;
  }

  // 每幀：顯示值追上目標，更新前囊片（外緣跟著實際撕出的開口）
  function refresh(dt) {
    const k = Math.min(1, dt * 8);
    if (shown.dir !== target.dir) shown = { dir: target.dir, angle: INITIAL_ANGLE };
    shown.angle += (target.angle - shown.angle) * k;
    shownPeel += (targetPeel - shownPeel) * k;
    grip.strength += (gripTarget - grip.strength) * k;
    grip.x = tip.x; grip.y = tip.y + 0.05; grip.z = tip.z;
    if (phase === 'finishing' && finishPull) { grip.x = finishPull.x; grip.y = finishPull.y + 0.05; grip.z = finishPull.z; }
    flap.update(shown, shownPeel, grip.strength > 0.001 ? grip : null, path.radiusAt);
  }

  let finishPull = null;  // 拉出階段：夾住點在前囊片本地座標中固定不動

  // 接回起點：撕裂收尾 → 整片折起 → 鑷子夾著折起的前囊片從主切口拉出
  function finish() {
    phase = 'finishing';
    dragging = false;
    marker.visible = false;
    const dir = path.dir || 1;
    const grab = { x: 0, y: CAPSULE_Y + 0.5, z: 0 };
    const out = { x: INCISIONS.main.x + 1.5, y: INCISIONS.main.y + 0.8, z: 0 };
    const a0 = shown.angle;
    const from = { ...tip };
    const start = path.startPoint;
    gripTarget = 1;
    tweens.add(0.3, k => {  // 尖端走回起點，把剩下的缺口接起來
      const e = ease(k);
      const x = from.x + (start.x - from.x) * e, z = from.z + (start.z - from.z) * e;
      path.add(x, z);
      setTear(dir, a0 + (TWO_PI - a0) * e);
      setTip(x, tipY(Math.hypot(x, z)), z);
      edgeLen += 0.05;
      if (edgeLen - edgeBuilt >= EDGE_STEP) rebuildEdge();
    }, () => {
      if (path.sweep < TWO_PI) {  // 保證切線完整接上
        path.points.push({ s: TWO_PI, r: start.x });
        path.sweep = TWO_PI;
      }
      rebuildEdge();
      const lift = { ...tip };
      tweens.add(0.5, k => {
        const e = ease(k);
        targetPeel = shownPeel = e;
        const p = lerp3(lift, grab, e);
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
          eye.setCapsulotomyShape(path.radiusAt);  // 記下實際撕出的不規則開口
          eye.applyState(state);  // 隱藏前囊片與圓盤，保留藍色染色，補上開口邊緣的囊膜
          edge.clear();
          phase = 'done';
          ui.showHint(content.hints.stepDone);
        });
      });
    });
  }

  function move(p) {
    const c = clampToDisk(p.x, p.z, 4.0);
    setTip(c.x, tipY(Math.hypot(c.x, c.z)), c.z);
    const before = path.points[path.points.length - 1];
    const res = path.add(c.x, c.z);
    if (res.tooWide && time - lastWideHint >= WIDE_HINT_GAP) {
      lastWideHint = time;
      ui.showHint(content.hints.tearTooWide);
    }
    if (res.tore) {
      const after = path.points[path.points.length - 1];
      edgeLen += Math.hypot(
        after.r * Math.cos(after.s) - before.r * Math.cos(before.s),
        after.r * Math.sin(after.s) - before.r * Math.sin(before.s),
      );
      if (edgeLen - edgeBuilt >= EDGE_STEP) rebuildEdge();
      target = { dir: path.dir, angle: Math.max(INITIAL_ANGLE, path.sweep) };
    }
    if (path.closedAt(c.x, c.z)) finish();
    else if (!closeHinted && path.sweep >= TWO_PI * CLOSE_TURNS) {
      closeHinted = true;
      ui.showHint(content.hints.closeLoop);
    }
  }

  function startDrag() {
    dragging = true;
    gripTarget = 1;
  }

  // 開場：染藍 → 鑷子到囊中央 → 穿刺 → 向外撕出第一小片到起點
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
          const end = { x: CAPSULE_OPENING, y: tipY(CAPSULE_OPENING), z: 0 };
          gripTarget = 1;
          tweens.add(0.6, k => {
            const p = lerp3(start, end, ease(k));
            setTip(p.x, p.y, p.z);
            setTear(1, INITIAL_ANGLE * ease(k));
          }, () => {
            marker.visible = true;
            phase = 'tear';
          });
        });
      });
    });
  }

  return baseStep({
    id: 'capsulorhexis',
    gripTool: forceps,  // 觸控相對移動時跟著手指平移的器械
    workY: CAPSULE_Y,
    enter(ctx) {
      state = ctx.state;
      path = createTearPath({ startRadius: CAPSULE_OPENING });
      dragging = false;
      phase = 'opening';
      finishPull = null;
      time = 0; lastWideHint = -Infinity; closeHinted = false;
      edgeLen = 0; edgeBuilt = 0;
      shownPeel = targetPeel = 0;
      grip = { x: 0, y: 0, z: 0, strength: 0 };
      gripTarget = 0;
      tweens.clear();
      edge.clear();
      marker.visible = false;
      scene.add(edge.object, marker);
      eye.setCapsulotomyShape(null);
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
      scene.remove(edge.object, marker);
      edge.clear();
      flap.mesh.visible = false;
    },
    update(dt) {
      time += dt;
      tweens.update(dt);
      if (phase === 'tear') marker.scale.setScalar(MARKER_SCALE * (1 + 0.15 * Math.sin(time * 5)));  // 起點標記脈動
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
    },
    isComplete() { return phase === 'done'; },
    skip: SKIPS.capsulorhexis,
    demoPath() { return dragEvents(demoPoints(), 2.6, 4.0); },
  });
}
