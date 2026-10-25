// 撕囊前囊片（會折起的薄膜）的純數學，不依賴 three，可在 Node 測試。
// 角度 θ = atan2(z, x)，與 createArcTracker 相同；撕囊起點在 θ = 0。
import { LENS, CAPSULE_OPENING } from './anatomy.js';

export const FLAP_R = CAPSULE_OPENING;  // 前囊片半徑
export const HINGE_R = 1.4;             // 折線半徑：片子在此往中心折回
export const FRONT_SOFT = 0.5;          // 撕裂前緣的柔化角度（rad）

const TWO_PI = Math.PI * 2;

// 前囊表面在半徑 r 處的高度（s 為相對水晶體表面的縮放）
export function anteriorY(r, s = 1.03) {
  const t = Math.asin(Math.min(1, r / (s * LENS.radius)));
  return LENS.center + s * LENS.front * Math.cos(t);
}

// 從第 0 格出發，往前（+1）與往後（−1）連續為 true 的格數（環狀）
export function contiguousRun(hits) {
  const n = hits.length;
  let forward = 0, backward = 0;
  while (forward < n && hits[forward]) forward++;
  while (backward < n && hits[(n - backward) % n]) backward++;
  return { forward, backward };
}

// 取較長的連續撕開方向；平手取 +1
export function tearState(hits, minAngle = 0) {
  const { forward, backward } = contiguousRun(hits);
  const dir = backward > forward ? -1 : 1;
  const run = Math.max(forward, backward);
  return { dir, angle: Math.max(minAngle, (run * TWO_PI) / hits.length) };
}

const smooth = f => f * f * (3 - 2 * f);

const GRIP_SPAN = 0.35;   // 鑷子夾點影響的角度範圍（rad）
const GRIP_R0 = 1.9;       // 內於此半徑的頂點不受夾點拉動
const AHEAD_STRETCH = 0.35; // 尚未撕到的一側（膜被拉長）受力係數

const clamp01 = v => Math.min(1, Math.max(0, v));

// 鑷子夾點對 (r, θ) 這個頂點的拉力權重 0..1：靠近撕裂前緣、外圈的頂點受力最大；
// 尚未撕到的一側（膜被拉長）打折。tear = { dir, angle }，strength 為夾持強度 0..1
export function gripWeight(r, theta, tear, strength) {
  if (!(strength > 0)) return 0;
  const rel = (((tear.dir * theta) % TWO_PI) + TWO_PI) % TWO_PI;
  const d = rel - tear.angle;
  let w = strength * clamp01(1 - Math.abs(d) / GRIP_SPAN) * clamp01((r - GRIP_R0) / (FLAP_R - GRIP_R0));
  if (d > 0) w *= AHEAD_STRETCH;
  return w;
}

// 前囊片上 (r, θ) 這一點的位置。tear = { dir, angle }；peel 0..1 為整片折起程度；
// grip = { x, y, z, strength } 為鑷子夾住撕裂前緣的點，靠近前緣的外圈頂點會被拉向它
export function flapVertex(r, theta, tear, peel = 0, grip = null) {
  const rel = (((tear.dir * theta) % TWO_PI) + TWO_PI) % TWO_PI;
  let f = rel <= tear.angle ? clamp01((tear.angle - rel) / FRONT_SOFT) : 0;
  f = smooth(Math.max(f, peel));
  const c = Math.cos(theta), s = Math.sin(theta);
  const flat = { x: r * c, y: anteriorY(r) + 0.01, z: r * s };
  let v;
  if (r <= HINGE_R) {
    v = { x: flat.x, y: flat.y + 0.04 * f, z: flat.z };
  } else {
    const rm = 2 * HINGE_R - r;
    const yFold = anteriorY(rm) + 0.08 + 0.35 * Math.sin((Math.PI * (r - HINGE_R)) / (FLAP_R - HINGE_R));
    v = {
      x: flat.x + (rm * c - flat.x) * f,
      y: flat.y + (yFold - flat.y) * f,
      z: flat.z + (rm * s - flat.z) * f,
    };
  }
  if (grip && grip.strength > 0) {
    const w = gripWeight(r, theta, tear, grip.strength);
    if (w > 0) {
      v = { x: v.x + (grip.x - v.x) * w, y: v.y + (grip.y - v.y) * w, z: v.z + (grip.z - v.z) * w };
    }
  }
  return v;
}
