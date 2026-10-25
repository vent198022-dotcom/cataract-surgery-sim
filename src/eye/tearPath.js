// 自由撕囊的撕裂路徑（純數學，不依賴 three，可在 Node 測試）。
// 以器械尖端繞光軸的「展開角」s 記錄撕裂：起點在 θ = 0，方向由第一次明顯的移動決定；
// 尖端超過目前前緣才新增一點 { s, r }（r 為尖端半徑），所以開口會照器械走過的路徑，不必是正圓。
import { CAPSULE_OPENING } from './anatomy.js';

export const TEAR_MIN_R = 1.2;       // 撕裂點半徑下限
export const TEAR_MAX_R = 3.6;       // 撕裂點半徑上限（再外側囊袋容易裂開）
export const DIR_THRESHOLD = 0.05;   // 判定方向所需的最小角度（rad）
export const CLOSE_TURNS = 0.85;     // 繞過這比例的圈數後，回到起點附近才算接回
export const CLOSE_DIST = 0.7;       // 接回起點的容許距離（mm）
const AXIS_EPS = 0.3;                // 太靠近光軸時角度不穩定，忽略
const TWO_PI = Math.PI * 2;

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
// 角度差包到 (−π, π]
const wrapPi = a => {
  const w = ((a % TWO_PI) + TWO_PI) % TWO_PI;
  return w > Math.PI ? w - TWO_PI : w;
};

export function createTearPath({ startRadius = CAPSULE_OPENING } = {}) {
  const startPoint = { x: startRadius, z: 0 };
  const points = [{ s: 0, r: startRadius }];
  let lastTheta = 0;  // 尖端上一次的絕對角度
  let cum = 0;        // 尖端相對起點的展開角（可超過 ±2π）

  const path = {
    points,
    startPoint,
    sweep: 0,
    dir: 0,

    // 尖端移到 (x, z)；回傳這一步是否撕開新的一段，以及半徑是否被夾在上限
    add(x, z) {
      const rr = Math.hypot(x, z);
      const tooWide = rr > TEAR_MAX_R;
      if (rr < AXIS_EPS) return { tore: false, tooWide };
      const theta = Math.atan2(z, x);
      cum += wrapPi(theta - lastTheta);
      lastTheta = theta;
      if (path.dir === 0) {
        if (Math.abs(cum) <= DIR_THRESHOLD) return { tore: false, tooWide };
        path.dir = cum > 0 ? 1 : -1;
      }
      const s = path.dir * cum;
      if (s <= path.sweep + 1e-6) return { tore: false, tooWide };
      points.push({ s, r: clamp(rr, TEAR_MIN_R, TEAR_MAX_R) });
      path.sweep = s;
      return { tore: true, tooWide };
    },

    // 絕對角度 θ = atan2(z, x) 處的開口半徑：已撕過的角度沿記錄點內插，
    // 未撕的角度從前緣半徑線性回到起點半徑
    radiusAt(theta) {
      const dir = path.dir || 1;
      const rel = (((dir * theta) % TWO_PI) + TWO_PI) % TWO_PI;
      const last = points[points.length - 1];
      if (rel > path.sweep) {
        const t = (rel - path.sweep) / Math.max(1e-9, TWO_PI - path.sweep);
        return last.r + (startRadius - last.r) * Math.min(1, t);
      }
      let lo = 0, hi = points.length - 1;
      while (hi - lo > 1) {
        const mid = (lo + hi) >> 1;
        if (points[mid].s <= rel) lo = mid; else hi = mid;
      }
      const a = points[lo], b = points[hi];
      if (b.s - a.s < 1e-9) return a.r;
      return a.r + (b.r - a.r) * clamp((rel - a.s) / (b.s - a.s), 0, 1);
    },

    // 已繞過 85% 圈數且尖端在起點 0.7 mm 內 → 切線接起來了
    closedAt(x, z) {
      return path.sweep >= TWO_PI * CLOSE_TURNS && Math.hypot(x - startPoint.x, z - startPoint.z) <= CLOSE_DIST;
    },
  };
  return path;
}

// 沒有實際撕過（例如直接跳關）時用的預設開口：略不規則，不會是完美的圓
export const defaultCapsulotomy = theta => CAPSULE_OPENING + 0.18 * Math.sin(3 * theta) + 0.1 * Math.cos(5 * theta);
