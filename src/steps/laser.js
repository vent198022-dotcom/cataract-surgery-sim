import * as THREE from 'three';
import { baseStep } from './common.js';
import { SKIPS } from '../core/skips.js';
import { ease } from '../core/tween.js';
import { buildLaserPath, scheduleRain, landedCount, rainStreaks } from './laserPath.js';

// 時間軸（秒）：對接 → OCT 掃描 → 雷射雨 A（囊膜切開 + 核碎裂）→ 鏡頭拉近 → 雨 B（主切口）→ 停留看斜切面
// → 鏡頭轉到側切口 → 雨 C（側切口）→ 回正、接觸鏡升起
const T = {
  dockEnd: 1.5, scanEnd: 4.0,
  rainAEnd: 9.0,
  mainStart: 10.0, mainEnd: 11.0,
  sideFly: 12.2, sideStart: 13.0, sideEnd: 13.6,
  liftEnd: 15.0,
};
const CAM = {
  oblique: { position: [-16, 27, 20], target: [0, 9.5, 0] },
  mainClose: { position: [5.4, 11.6, -6.5], target: [5.4, 10.3, 0] },
  sideClose: { position: [-6.5, 11.6, -5.4], target: [0, 10.3, -5.4] },
};
const DOCK_TOP = 30;
const DOCK_Y = 13.3;
const RAIN_SPEED = 45;     // 光條下落速度（mm/s）
const STREAK_POOL = 120;
const STREAK_LEN = 0.9;
const FLASH_TIME = 0.12;   // 落點閃光持續秒數

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

// 雷射雨的光條池：細長亮芯 + 較寬的淡暈，加色混合；不用時隱藏
function buildStreaks() {
  const additive = { transparent: true, blending: THREE.AdditiveBlending, depthWrite: false };
  const coreGeo = new THREE.CylinderGeometry(0.035, 0.035, STREAK_LEN, 6, 1, true);
  const glowGeo = new THREE.CylinderGeometry(0.12, 0.12, STREAK_LEN, 8, 1, true);
  const coreMat = new THREE.MeshBasicMaterial({ color: 0xeafff4, opacity: 0.95, ...additive });
  const glowMat = new THREE.MeshBasicMaterial({ color: 0x5cff9a, opacity: 0.3, ...additive });
  const group = new THREE.Group();
  const pool = [];
  for (let i = 0; i < STREAK_POOL; i++) {
    const streak = new THREE.Group();
    streak.add(new THREE.Mesh(coreGeo, coreMat), new THREE.Mesh(glowGeo, glowMat));
    streak.visible = false;
    group.add(streak);
    pool.push(streak);
  }
  group.renderOrder = 13;
  group.traverse(o => { o.renderOrder = 13; });
  return { group, pool };
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

export function createLaserStep({ scene, eye, tools, ui, content, views }) {
  const dock = tools.femto;
  const scan = new THREE.Mesh(
    new THREE.PlaneGeometry(12, 6),
    new THREE.MeshBasicMaterial({ color: 0x4dd0e1, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthTest: false }),
  );
  scan.rotation.y = Math.PI / 2;  // 垂直的掃描面，沿 x 方向掃過
  scan.position.y = 10;
  scan.renderOrder = 12;
  const path = buildLaserPath();
  // 三個打點時段：A 囊膜切開 + 核碎裂、B 主切口、C 側切口（路徑順序即時間順序）
  const incIdx = path.segments.map((g, i) => (g.phase === 'incision' ? i : -1)).filter(i => i >= 0);
  const land = scheduleRain(path.segments, [
    { segments: path.segments.map((g, i) => i).filter(i => !incIdx.includes(i)), t0: T.scanEnd, t1: T.rainAEnd },
    { segments: [incIdx[0]], t0: T.mainStart, t1: T.mainEnd },
    { segments: [incIdx[1]], t0: T.sideStart, t1: T.sideEnd },
  ]);
  const dots = buildBubbles(path.positions);
  const count = path.positions.length / 3;
  const glowMap = buildGlowTexture();  // 延後到建立步驟時才畫，模組載入不需 DOM
  const streaks = buildStreaks();
  const flash = buildFlash(glowMap);
  streaks.group.visible = flash.visible = false;
  let state, t, done, fired;

  // 下雨：光條在接觸鏡高度生成、垂直落到目標點；落地後氣泡依序顯現，閃光移到最新落點
  function updateRain() {
    const landed = landedCount(land, t);
    dots.geometry.setDrawRange(0, landed);
    const falling = rainStreaks(path.positions, land, t, DOCK_Y, RAIN_SPEED);
    streaks.pool.forEach((streak, k) => {
      const f = falling[k];
      streak.visible = !!f;
      if (f) streak.position.set(f.x, f.y + STREAK_LEN / 2, f.z);  // y 為下端，光條在其上方
    });
    streaks.group.visible = true;
    if (landed > 0 && t - land[landed - 1] < FLASH_TIME) {
      flash.visible = true;
      const i = (landed - 1) * 3;
      flash.position.set(path.positions[i], path.positions[i + 1], path.positions[i + 2]);
      flash.userData.core.scale.setScalar(0.45 + 0.25 * Math.abs(Math.sin(t * 40)));
    } else {
      flash.visible = false;
    }
  }

  return baseStep({
    id: 'laser',
    cinematic: true,  // 鏡頭由步驟自己運鏡，停用「旋轉觀看」
    enter(ctx) {
      state = ctx.state;
      t = 0;
      done = false;
      fired = {};
      dock.visible = true;
      dock.position.y = DOCK_TOP;
      scan.visible = false;
      streaks.group.visible = flash.visible = false;
      dots.geometry.setDrawRange(0, 0);
      dots.material.opacity = 0.9;
      scene.add(scan, dots, streaks.group, flash);
    },
    exit() {
      dock.visible = false;
      streaks.group.visible = flash.visible = false;
      scene.remove(scan, dots, streaks.group, flash);
      views.home(0);
    },
    update(dt) {
      if (done) return;
      t += dt;
      // 一次性事件（鏡頭與切口出現）；鏡頭飛行不能放在 enter()，因為控制器會在 enter() 之後把鏡頭歸位
      const once = (key, at, fn) => { if (!fired[key] && t >= at) { fired[key] = true; fn(); } };
      once('fly1', T.dockEnd, () => views.flyTo(CAM.oblique, 1.2));
      once('fly2', T.rainAEnd, () => views.flyTo(CAM.mainClose, 1.0));
      once('main', T.mainEnd, () => {
        state.incisions.main = true;
        eye.applyState(state);
        ui.showHint(content.hints.bevel, 4000);
      });
      once('fly3', T.sideFly, () => views.flyTo(CAM.sideClose, 0.8));
      once('side', T.sideEnd, () => {
        views.home(1.2);
        SKIPS.laser(state);
        eye.applyState(state);
      });

      if (t < T.dockEnd) {
        dock.position.y = DOCK_TOP + (DOCK_Y - DOCK_TOP) * ease(t / T.dockEnd);
      } else if (t < T.sideEnd) {
        dock.position.y = DOCK_Y;
      }
      scan.visible = t >= T.dockEnd && t < T.scanEnd;
      if (scan.visible) scan.position.x = -6 + 12 * ((t - T.dockEnd) / (T.scanEnd - T.dockEnd));
      if (t >= T.dockEnd - 0.2 && t < T.sideEnd + 0.2) updateRain();
      else { streaks.group.visible = flash.visible = false; }

      if (t >= T.sideEnd) {
        dots.geometry.setDrawRange(0, count);
        const k = Math.min(1, (t - T.sideEnd) / (T.liftEnd - T.sideEnd));
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
