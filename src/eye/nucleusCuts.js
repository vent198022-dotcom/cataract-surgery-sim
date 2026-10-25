// 核塊的切線模型（純數學，不依賴 three，可在 Node 測試）。
// 四塊核是四條邊界曲線 B0..B3 之間的扇形；每條邊界是「半徑 → 旋轉體角度 φ」的函數，
// 在固定半徑 RS 上取樣。旋轉體角度慣例：角度 φ、半徑 r 的點是 (r·sinφ, y, r·cosφ)，
// 與別處的 atan2(z, x) 不同 —— 這裡的 φ = atan2(x, z)。
// 第 q 塊夾在 B_q 與 B_{q+1} 之間（q = 3 時為 B_0 + 2π）。預設直線切 B_k = k·π/2。
import { LENS, NUCLEUS_SCALE } from './anatomy.js';

const TWO_PI = Math.PI * 2;
export const CUT_SAMPLES = 18;                       // M：半徑方向的取樣段數
export const R_N = NUCLEUS_SCALE * LENS.radius;      // 核的赤道半徑
export const RS = Array.from({ length: CUT_SAMPLES + 1 }, (_, i) => (R_N * i) / CUT_SAMPLES);
const MAX_DEV = Math.PI / 4 - 0.12;                  // 每條邊界離預設角度的上限，相鄰邊界才不會交叉
const CONTINUE_AMP = 0.25;                           // 另一側自動延伸的擺動上限（rad）
const DEFAULT_AMP = 0.2;                             // 跳關時預設不規則切線的擺動上限（rad）

const defaultAngle = k => (k * Math.PI) / 2;
const wrapPi = a => a - TWO_PI * Math.round(a / TWO_PI);   // → [−π, π]
const smooth = s => s * s * (3 - 2 * s);

// 固定種子的亂數（LCG）
function makeRng(seed) {
  let s = (Math.floor(seed) * 2654435761) >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

// 隨半徑平滑變化、中心為 0、絕對值 ≤ amp 的擺動；回傳各取樣半徑上的值
function wobbleSamples(seed, amp) {
  const rng = makeRng(seed);
  const f1 = 0.8 + rng() * 0.6, f2 = 1.6 + rng() * 0.8;
  const p1 = rng(), p2 = rng();
  return RS.map(r => {
    const x = r / R_N;
    const osc = 0.6 * Math.sin(TWO_PI * (f1 * x + p1)) + 0.4 * Math.sin(TWO_PI * (f2 * x + p2));
    return amp * smooth(x) * osc;
  });
}

// 世界 (x, z) → 核座標（核繞 +Y 轉 theta：世界 x = lx cosθ + lz sinθ、z = −lx sinθ + lz cosθ）
export function localPoint(p, theta) {
  const c = Math.cos(theta), s = Math.sin(theta);
  return { x: p.x * c - p.z * s, z: p.x * s + p.z * c };
}

export function straightCuts() {
  return [0, 1, 2, 3].map(k => RS.map(() => defaultAngle(k)));
}

// 病人拉出的路徑（核座標點，半徑由外往內遞減）→ 邊界。
// 路徑外端以外用外端角度；路徑內端以內平滑回到預設角度（中心 r = 0 一定是預設角度）
export function boundaryFromPath(localPoints, def) {
  const pts = [];
  for (const p of localPoints) {
    const r = Math.hypot(p.x, p.z);
    if (r < 1e-6) continue;
    const raw = Math.atan2(p.x, p.z);
    const prev = pts.length ? pts[pts.length - 1].phi : def;
    pts.push({ r, phi: prev + wrapPi(raw - prev) });  // 連續展開，且起點落在預設角度 ±π 內
  }
  if (!pts.length) return RS.map(() => def);
  const outer = pts[0], inner = pts[pts.length - 1];
  return RS.map(r => {
    if (r >= outer.r) return outer.phi;
    if (r < inner.r) return def + (inner.phi - def) * smooth(r / inner.r);
    for (let k = 0; k < pts.length - 1; k++) {
      const a = pts[k], b = pts[k + 1];
      if (r <= a.r && r >= b.r) {
        const span = a.r - b.r;
        return span < 1e-9 ? a.phi : a.phi + (b.phi - a.phi) * ((a.r - r) / span);
      }
    }
    return inner.phi;
  });
}

// 整條直徑劈開時，病人沒拉的另一側：預設角度加上確定性的平滑擺動（中心為 0，與中心平滑相接）。
// 擺動大小隨病人這一側的偏離程度稍微變化
export function continueAcross(boundary, def, seed) {
  const dev = Math.max(...boundary.map(v => Math.abs(v - boundary[0])));
  const amp = Math.min(CONTINUE_AMP, 0.1 + 0.4 * dev);
  return wobbleSamples(seed, amp).map(w => def + w);
}

// 每條邊界限制在預設角度 ±(π/4 − 0.12) 內，相鄰邊界不會交叉
export function clampCuts(cuts) {
  return cuts.map((cut, k) => {
    const d = defaultAngle(k);
    return cut.map(v => Math.min(d + MAX_DEV, Math.max(d - MAX_DEV, v)));
  });
}

// 跳關時用的預設切線：直線加上很小的確定性擺動
export function defaultIrregularCuts(seed) {
  return [0, 1, 2, 3].map(k => wobbleSamples(seed * 4 + k + 1, DEFAULT_AMP).map(w => defaultAngle(k) + w));
}

// a、b 之間的封閉實心扇形（b 已展開成大於 a）。頂面、底面、兩側壁各用獨立的頂點，邊緣才是硬的。
// 座標為眼球座標（光軸為 y，水晶體中心 y = LENS.center），角度用旋轉體慣例
export function sectorGeometry(a, b, { k: K = 10 } = {}) {
  const M = CUT_SAMPLES;
  const front = NUCLEUS_SCALE * LENS.front, back = NUCLEUS_SCALE * LENS.back;
  const shape = r => Math.sqrt(Math.max(0, 1 - (r / R_N) ** 2));
  const topY = r => LENS.center + front * shape(r);
  const botY = r => LENS.center - back * shape(r);
  const positions = [], indices = [];
  const add = (r, phi, y) => { positions.push(r * Math.sin(phi), y, r * Math.cos(phi)); return positions.length / 3 - 1; };
  const phiAt = (i, j) => a[i] + ((b[i] - a[i]) * j) / K;

  // 頂面與底面：徑向 i、角向 j 的格網
  const surface = (yAt, flip) => {
    const base = positions.length / 3;
    for (let i = 0; i <= M; i++) for (let j = 0; j <= K; j++) add(RS[i], phiAt(i, j), yAt(RS[i]));
    const id = (i, j) => base + i * (K + 1) + j;
    for (let i = 0; i < M; i++) {
      for (let j = 0; j < K; j++) {
        const p00 = id(i, j), p10 = id(i + 1, j), p01 = id(i, j + 1), p11 = id(i + 1, j + 1);
        if (flip) indices.push(p00, p01, p10, p10, p01, p11);
        else indices.push(p00, p10, p01, p10, p11, p01);
      }
    }
  };
  surface(topY, false);
  surface(botY, true);

  // 側壁：沿邊界每個半徑一對（底、頂）頂點
  const wall = (edge, flip) => {
    const base = positions.length / 3;
    for (let i = 0; i <= M; i++) {
      add(RS[i], edge[i], botY(RS[i]));
      add(RS[i], edge[i], topY(RS[i]));
    }
    for (let i = 0; i < M; i++) {
      const b0 = base + i * 2, t0 = b0 + 1, b1 = b0 + 2, t1 = b0 + 3;
      if (flip) indices.push(b0, t0, b1, b1, t0, t1);
      else indices.push(b0, b1, t0, b1, t1, t0);
    }
  };
  wall(a, false);
  wall(b, true);

  return { positions, indices };
}
