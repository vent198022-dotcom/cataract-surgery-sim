import * as THREE from 'three';

// 程序貼圖：全部用 Canvas 即時繪製，不依賴圖檔，file:// 也能執行。
// 貼圖座標約定（俯視顯微鏡畫面）：+x 在畫面右、−z 在畫面上，所以畫布的右 = +x、上 = −z。

const TAU = Math.PI * 2;

// 平面投影 UV：u = 0.5 + x/(2R)、v = 0.5 − z/(2R)
export function planarUV(x, z, radius) {
  return [0.5 + x / (2 * radius), 0.5 - z / (2 * radius)];
}

// 任何 BufferGeometry 都可用頂點位置直接算出 uv
export function applyPlanarUV(geometry, radius) {
  const pos = geometry.attributes.position;
  const uv = new Float32Array(pos.count * 2);
  for (let i = 0; i < pos.count; i++) {
    const [u, v] = planarUV(pos.getX(i), pos.getZ(i), radius);
    uv[i * 2] = u;
    uv[i * 2 + 1] = v;
  }
  geometry.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
}

// 固定種子的亂數（LCG），每次載入長得一樣
function makeRng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function makeCanvas(size) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  return { canvas, ctx: canvas.getContext('2d') };
}

function toTexture(canvas) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function radialGradient(ctx, cx, cy, r0, r1, stops) {
  const g = ctx.createRadialGradient(cx, cy, r0, cx, cy, r1);
  for (const [t, color] of stops) g.addColorStop(t, color);
  return g;
}

const rgba = (r, g, b, a) => `rgba(${r},${g},${b},${a})`;

/* ---------- 虹膜 ---------- */

const IRIS_SIZE = 512;
const IRIS_MM = 5.6;                                   // 畫布半幅 = 5.6mm
const irisPx = mm => (mm / IRIS_MM) * (IRIS_SIZE / 2); // 毫米 → 像素半徑

function paintIrisBase(ctx, c) {
  const rp = irisPx(3.2);
  ctx.fillStyle = radialGradient(ctx, c, c, rp, c, [
    [0, '#5a3d26'],
    [(irisPx(3.9) - rp) / (c - rp), '#8a6440'],   // 小環附近較亮
    [0.62, '#6f4e32'],
    [0.9, '#6b4a2f'],
    [1, '#3e2918'],
  ]);
  ctx.fillRect(0, 0, IRIS_SIZE, IRIS_SIZE);
}

// 一條帶輕微波動的放射狀纖維：從瞳孔緣到虹膜根部
function strokeFibre(ctx, c, angle, r0, r1, wobble, phase, style, width) {
  ctx.strokeStyle = style;
  ctx.lineWidth = width;
  ctx.beginPath();
  for (let r = r0; r <= r1; r += 6) {
    const a = angle + wobble * Math.sin(r * 0.045 + phase);
    const x = c + r * Math.cos(a), y = c + r * Math.sin(a);
    if (r === r0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function paintIrisFibres(ctx, c, rng) {
  const rp = irisPx(3.2);
  ctx.lineCap = 'round';
  for (let i = 0; i < 220; i++) {
    const light = rng() < 0.5;
    const style = light
      ? rgba(200 + rng() * 30, 150 + rng() * 30, 95 + rng() * 25, 0.18 + rng() * 0.25)
      : rgba(40 + rng() * 25, 25 + rng() * 15, 12 + rng() * 10, 0.2 + rng() * 0.3);
    const r0 = rp + rng() * 10;
    const r1 = c * (0.82 + rng() * 0.18);
    strokeFibre(ctx, c, rng() * TAU, r0, r1, 0.015 + rng() * 0.03, rng() * TAU, style, 0.8 + rng() * 1.6);
  }
  // 細而密的短纖維，讓纖維紋理更連續
  for (let i = 0; i < 380; i++) {
    const r0 = rp + 6 + rng() * (c - rp) * 0.7;
    const style = rng() < 0.5 ? rgba(215, 170, 115, 0.12) : rgba(35, 20, 10, 0.14);
    strokeFibre(ctx, c, rng() * TAU, r0, r0 + 20 + rng() * 50, 0.02, rng() * TAU, style, 0.7);
  }
}

// 小環：鋸齒狀較亮的環，位於約 3.9mm
function paintCollarette(ctx, c, rng) {
  const rc = irisPx(3.9);
  const teeth = 56;
  ctx.lineJoin = 'round';
  ctx.beginPath();
  for (let i = 0; i <= teeth * 2; i++) {
    const a = (i / (teeth * 2)) * TAU;
    const r = rc + (i % 2 ? 1 : -1) * (2 + rng() * 4) + (rng() - 0.5) * 4;  // 齒高不規則，較自然
    const x = c + r * Math.cos(a), y = c + r * Math.sin(a);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.strokeStyle = rgba(214, 176, 126, 0.35);
  ctx.lineWidth = 3.5;
  ctx.stroke();
  ctx.strokeStyle = rgba(236, 204, 158, 0.12);
  ctx.lineWidth = 9;
  ctx.stroke();
  // 小環外側稍暗的睫狀區邊界
  ctx.fillStyle = radialGradient(ctx, c, c, rc + 8, rc + 40, [[0, rgba(40, 24, 12, 0.22)], [1, rgba(40, 24, 12, 0)]]);
  ctx.fillRect(0, 0, IRIS_SIZE, IRIS_SIZE);
}

// 隱窩：幾個沿放射方向拉長的暗色柔邊橢圓
function paintCrypts(ctx, c, rng) {
  for (let i = 0; i < 16; i++) {
    const a = rng() * TAU;
    const r = irisPx(3.5) + rng() * irisPx(1.9);
    const size = 6 + rng() * 9;
    ctx.save();
    ctx.translate(c + r * Math.cos(a), c + r * Math.sin(a));
    ctx.rotate(a);
    ctx.scale(1.8, 0.7);
    ctx.fillStyle = radialGradient(ctx, 0, 0, 0, size, [[0, rgba(25, 14, 8, 0.65)], [1, rgba(25, 14, 8, 0)]]);
    ctx.beginPath();
    ctx.arc(0, 0, size, 0, TAU);
    ctx.fill();
    ctx.restore();
  }
}

// 瞳孔緣的黑色皺褶環（pupillary ruff）
function paintPupilRuff(ctx, c, rng) {
  const rp = irisPx(3.2);
  ctx.fillStyle = radialGradient(ctx, c, c, rp, rp + 22, [[0, rgba(30, 18, 10, 0.55)], [1, rgba(30, 18, 10, 0)]]);
  ctx.fillRect(0, 0, IRIS_SIZE, IRIS_SIZE);
  ctx.beginPath();
  for (let i = 0; i <= 180; i++) {
    const a = (i / 180) * TAU;
    const r = rp + 2.5 + (rng() - 0.5) * 2;
    const x = c + r * Math.cos(a), y = c + r * Math.sin(a);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.strokeStyle = '#2a1a10';
  ctx.lineWidth = 3;
  ctx.stroke();
}

function paintLimbalEdge(ctx, c) {
  ctx.fillStyle = radialGradient(ctx, c, c, c * 0.86, c, [[0, rgba(30, 18, 10, 0)], [1, rgba(30, 18, 10, 0.75)]]);
  ctx.fillRect(0, 0, IRIS_SIZE, IRIS_SIZE);
}

function clearPupil(ctx, c) {
  ctx.save();
  ctx.globalCompositeOperation = 'destination-out';
  ctx.beginPath();
  ctx.arc(c, c, irisPx(3.2), 0, TAU);
  ctx.fill();
  ctx.restore();
}

export function irisTexture() {
  const { canvas, ctx } = makeCanvas(IRIS_SIZE);
  const c = IRIS_SIZE / 2;
  const rng = makeRng(20261025);
  paintIrisBase(ctx, c);
  paintIrisFibres(ctx, c, rng);
  paintCollarette(ctx, c, rng);
  paintCrypts(ctx, c, rng);
  paintLimbalEdge(ctx, c);
  paintPupilRuff(ctx, c, rng);
  clearPupil(ctx, c);
  return toTexture(canvas);
}

/* ---------- 鞏膜血管 + 角膜緣 ---------- */

const SCLERA_SIZE = 1024;
const SCLERA_MM = 12;
const scleraPx = mm => (mm / SCLERA_MM) * (SCLERA_SIZE / 2);

function paintLimbalRing(ctx, c) {
  const r0 = scleraPx(5.8), r1 = scleraPx(6.6);
  ctx.fillStyle = radialGradient(ctx, c, c, r0, r1, [
    [0, rgba(112, 128, 144, 0.6)],
    [0.35, rgba(125, 142, 158, 0.34)],
    [1, rgba(130, 146, 160, 0)],
  ]);
  ctx.fillRect(0, 0, SCLERA_SIZE, SCLERA_SIZE);
}

// 一條由外向內延伸的血管（隨機漫步的角度），途中可分岔
function paintVessel(ctx, c, rng, angle, rStart, rEnd, width, alpha, branches) {
  const step = 8;
  const branchAt = new Set(Array.from({ length: branches }, () => 0.25 + rng() * 0.5));
  let a = angle, drift = (rng() - 0.5) * 0.004;
  const total = rStart - rEnd;
  let px = c + rStart * Math.cos(a), py = c + rStart * Math.sin(a);
  ctx.strokeStyle = rgba(184, 69, 63, alpha);
  ctx.lineCap = 'round';
  for (let r = rStart - step; r >= rEnd; r -= step) {
    drift = drift * 0.85 + (rng() - 0.5) * 0.012;  // 較彎曲的走向，避免像刮痕
    a += drift;
    const x = c + r * Math.cos(a), y = c + r * Math.sin(a);
    ctx.lineWidth = Math.max(0.8, width * (0.55 + 0.45 * ((r - rEnd) / total)));  // 靠近角膜緣變細
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(x, y);
    ctx.stroke();
    px = x; py = y;
    for (const t of branchAt) {
      if ((rStart - r) / total >= t) {
        branchAt.delete(t);
        const side = rng() < 0.5 ? -1 : 1;
        paintVessel(ctx, c, rng, a + side * (0.03 + rng() * 0.05), r, rEnd + rng() * scleraPx(0.4), width * 0.6, alpha * 0.9, 0);
      }
    }
  }
}

function paintVessels(ctx, c, rng) {
  const count = 20;
  for (let i = 0; i < count; i++) {
    const angle = ((i + rng() * 0.8) / count) * TAU;
    const rStart = scleraPx(10.4 + rng() * 0.9);
    const rEnd = scleraPx(6.25 + rng() * 1.6);
    paintVessel(ctx, c, rng, angle, rStart, rEnd, 1.5 + rng() * 2, 0.22 + rng() * 0.22, 1 + Math.floor(rng() * 3));
  }
}

export function scleraVesselTexture() {
  const { canvas, ctx } = makeCanvas(SCLERA_SIZE);
  const c = SCLERA_SIZE / 2;
  const rng = makeRng(7301);
  paintLimbalRing(ctx, c);
  paintVessels(ctx, c, rng);
  return toTexture(canvas);
}

/* ---------- 水晶體核 ---------- */

export function nucleusTexture() {
  const size = 256, c = size / 2;
  const { canvas, ctx } = makeCanvas(size);
  const rng = makeRng(4242);
  ctx.fillStyle = radialGradient(ctx, c, c, 0, c, [[0, '#8f5f24'], [0.55, '#b9873a'], [1, '#d8b062']]);
  ctx.fillRect(0, 0, size, size);
  // 層狀年輪（lamella）
  ctx.strokeStyle = rgba(70, 40, 10, 0.15);
  for (const t of [0.22, 0.38, 0.55, 0.72, 0.88]) {
    ctx.lineWidth = 3 + rng() * 3;
    ctx.beginPath();
    ctx.arc(c, c, t * c, 0, TAU);
    ctx.stroke();
  }
  // 細小斑點
  for (let i = 0; i < 1600; i++) {
    ctx.fillStyle = rng() < 0.5 ? rgba(255, 235, 190, 0.09) : rgba(60, 35, 10, 0.09);
    ctx.fillRect(rng() * size, rng() * size, 1 + rng(), 1 + rng());
  }
  return toTexture(canvas);
}

/* ---------- 紅光反射 ---------- */

export function redReflexTexture() {
  const size = 256, c = size / 2;
  const { canvas, ctx } = makeCanvas(size);
  ctx.fillStyle = radialGradient(ctx, c, c, 0, c, [
    [0, '#ea5a1c'],
    [0.6, '#c63a16'],
    [0.85, '#8f2412'],
    [1, rgba(168, 50, 30, 0)],
  ]);
  ctx.fillRect(0, 0, size, size);
  return toTexture(canvas);
}

/* ---------- 角膜反光點 ---------- */

export function glintTexture() {
  const size = 64, c = size / 2;
  const { canvas, ctx } = makeCanvas(size);
  ctx.fillStyle = radialGradient(ctx, c, c, 0, c, [
    [0, rgba(255, 255, 255, 1)],
    [0.4, rgba(255, 255, 255, 0.55)],
    [1, rgba(255, 255, 255, 0)],
  ]);
  ctx.fillRect(0, 0, size, size);
  return toTexture(canvas);
}
