import * as THREE from 'three';
import { baseStep } from './common.js';
import { SKIPS } from '../core/skips.js';
import { ease } from '../core/tween.js';
import { INCISIONS, CAPSULE_OPENING, CAPSULE_Y } from '../eye/anatomy.js';

// 時間軸（秒）：對接 → OCT 掃描 → 雷射打點 → 接觸鏡升起
const T = { dockEnd: 1.5, scanEnd: 4.0, laserEnd: 8.5, liftEnd: 10.0 };
const DOCK_TOP = 30;
const DOCK_Y = 13.3;

function buildLaserDots() {
  const pts = [];
  for (const inc of Object.values(INCISIONS)) {
    const len = Math.hypot(inc.x, inc.z);
    const tx = -inc.z / len, tz = inc.x / len;
    for (let i = 0; i <= 12; i++) {
      const s = (i / 12 - 0.5) * inc.length;
      pts.push(inc.x + tx * s, inc.y, inc.z + tz * s);
    }
  }
  for (let i = 0; i < 90; i++) {
    const a = (i / 90) * Math.PI * 2;
    pts.push(CAPSULE_OPENING * Math.cos(a), CAPSULE_Y, CAPSULE_OPENING * Math.sin(a));
  }
  for (let i = 0; i <= 30; i++) {
    const s = (i / 30 - 0.5) * 6;
    pts.push(s, 8.9, 0, 0, 8.9, s);  // 水晶體核十字分割
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  const points = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0x7cff6b, size: 0.28, transparent: true, depthTest: false }));
  points.renderOrder = 12;
  return points;
}

export function createLaserStep({ scene, eye, tools, ui, content }) {
  const dock = tools.femto;
  const scan = new THREE.Mesh(
    new THREE.PlaneGeometry(12, 6),
    new THREE.MeshBasicMaterial({ color: 0x4dd0e1, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthTest: false }),
  );
  scan.rotation.y = Math.PI / 2;  // 垂直的掃描面，沿 x 方向掃過
  scan.position.y = 10;
  scan.renderOrder = 12;
  const dots = buildLaserDots();
  const count = dots.geometry.attributes.position.count;
  let state, t, applied, done;

  return baseStep({
    id: 'laser',
    enter(ctx) {
      state = ctx.state;
      t = 0;
      applied = done = false;
      dock.visible = true;
      dock.position.y = DOCK_TOP;
      scan.visible = false;
      dots.geometry.setDrawRange(0, 0);
      dots.material.opacity = 1;
      scene.add(scan, dots);
    },
    exit() {
      dock.visible = false;
      scene.remove(scan, dots);
    },
    update(dt) {
      if (done) return;
      t += dt;
      if (t < T.dockEnd) {
        dock.position.y = DOCK_TOP + (DOCK_Y - DOCK_TOP) * ease(t / T.dockEnd);
      } else if (t < T.scanEnd) {
        dock.position.y = DOCK_Y;
        scan.visible = true;
        scan.position.x = -6 + 12 * ((t - T.dockEnd) / (T.scanEnd - T.dockEnd));
      } else if (t < T.laserEnd) {
        scan.visible = false;
        dots.geometry.setDrawRange(0, Math.floor((count * (t - T.scanEnd)) / (T.laserEnd - T.scanEnd)));
      } else if (!applied) {
        applied = true;
        scan.visible = false;
        dots.geometry.setDrawRange(0, count);
        SKIPS.laser(state);
        eye.applyState(state);
      }
      if (t >= T.laserEnd) {
        const k = Math.min(1, (t - T.laserEnd) / (T.liftEnd - T.laserEnd));
        dock.position.y = DOCK_Y + (DOCK_TOP - DOCK_Y) * ease(k);
        dots.material.opacity = 1 - k;
        if (k >= 1) {
          done = true;
          dock.visible = false;
          ui.showHint(content.hints.stepDone);
        }
      }
    },
    isComplete() { return done; },
    // 自動播放步驟：放一個無作用的事件撐到動畫結束，自動示範才不會在 5 秒時判定卡住而跳過
    demoPath() { return [{ t: T.liftEnd, type: 'move', x: 0, z: 0 }]; },
    skip: SKIPS.laser,
  });
}
