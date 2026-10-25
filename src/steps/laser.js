import * as THREE from 'three';
import { baseStep } from './common.js';
import { SKIPS } from '../core/skips.js';
import { ease } from '../core/tween.js';
import { buildLaserPath, pointAt, scheduleLaser, beamAt } from './laserPath.js';

// 時間軸（秒）：對接 → OCT 掃描 → 雷射打點（囊膜切開 → 核碎裂 → 角膜切口）→ 接觸鏡升起
const T = { dockEnd: 1.5, scanEnd: 4.0, laserEnd: 10.5, liftEnd: 12.0 };
const DOCK_TOP = 30;
const DOCK_Y = 13.3;
const HEAD_OFFSET = 6;  // 雷射頭在對接環蓋錐頂端，隨對接環移動

// 雷射打過之處留下的空化小氣泡，依序顯現
function buildBubbles(positions) {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  const points = new THREE.Points(geometry, new THREE.PointsMaterial({
    color: 0xd9fbff, size: 0.18, transparent: true, opacity: 0.9, depthTest: false,
  }));
  points.renderOrder = 12;
  return points;
}

function buildBeam() {
  const additive = { transparent: true, blending: THREE.AdditiveBlending, depthWrite: false };
  const group = new THREE.Group();
  group.add(
    new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1, 8, 1, true),
      new THREE.MeshBasicMaterial({ color: 0xeafff4, opacity: 0.95, ...additive })),
    new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 1, 12, 1, true),
      new THREE.MeshBasicMaterial({ color: 0x5cff9a, opacity: 0.35, ...additive })),
  );
  group.renderOrder = 13;
  return group;
}

function buildGlowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.35, 'rgba(255,255,255,0.45)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

// 光束落點的閃光（飛秒脈衝的快速閃爍）：亮核 + 較大的淡暈
function buildFlash(map) {
  const group = new THREE.Group();
  const make = opacity => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({
      map, color: 0x9dffc8, opacity, transparent: true,
      blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false,
    }));
    m.rotation.x = -Math.PI / 2;
    return m;
  };
  const core = make(1), halo = make(0.25);
  halo.scale.setScalar(1.2);
  group.add(core, halo);
  group.userData = { core, halo };
  group.renderOrder = 14;
  return group;
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
  const path = buildLaserPath();
  const durations = scheduleLaser(path.segments, T.laserEnd - T.scanEnd);
  const dots = buildBubbles(path.positions);
  const count = path.positions.length / 3;
  const glowMap = buildGlowTexture();  // 延後到建立步驟時才畫，模組載入不需 DOM
  const beam = buildBeam();
  const flash = buildFlash(glowMap);
  beam.visible = flash.visible = false;
  const UP = new THREE.Vector3(0, 1, 0);
  const origin = new THREE.Vector3();
  const target = new THREE.Vector3();
  const dir = new THREE.Vector3();
  let state, t, applied, done;

  function aimBeam(elapsed) {
    const { f } = beamAt(path.segments, durations, elapsed);
    const p = pointAt(path.positions, f);
    origin.set(0, dock.position.y + HEAD_OFFSET, 0);
    target.set(p.x, p.y, p.z);
    dir.subVectors(target, origin);
    const len = dir.length();
    beam.position.copy(origin).addScaledVector(dir, 0.5);
    beam.scale.set(1, len, 1);
    beam.quaternion.setFromUnitVectors(UP, dir.divideScalar(len));
    flash.position.copy(target);
    flash.userData.core.scale.setScalar(0.45 + 0.25 * Math.abs(Math.sin(elapsed * 40)));
  }

  return baseStep({
    id: 'laser',
    enter(ctx) {
      state = ctx.state;
      t = 0;
      applied = done = false;
      dock.visible = true;
      dock.position.y = DOCK_TOP;
      scan.visible = false;
      beam.visible = flash.visible = false;
      dots.geometry.setDrawRange(0, 0);
      dots.material.opacity = 0.9;
      scene.add(scan, dots, beam, flash);
    },
    exit() {
      dock.visible = false;
      beam.visible = flash.visible = false;
      scene.remove(scan, dots, beam, flash);
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
        const elapsed = t - T.scanEnd;
        dots.geometry.setDrawRange(0, beamAt(path.segments, durations, elapsed).revealed);
        beam.visible = flash.visible = true;
        aimBeam(elapsed);
      } else if (!applied) {
        applied = true;
        scan.visible = false;
        beam.visible = flash.visible = false;
        dots.geometry.setDrawRange(0, count);
        SKIPS.laser(state);
        eye.applyState(state);
      }
      if (t >= T.laserEnd) {
        const k = Math.min(1, (t - T.laserEnd) / (T.liftEnd - T.laserEnd));
        dock.position.y = DOCK_Y + (DOCK_TOP - DOCK_Y) * ease(k);
        dots.material.opacity = 0.9 * (1 - k);
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
