// 自由劈核的筆畫規則與旋轉換算（純數學，不依賴 three，可在 Node 測試）

const TWO_PI = Math.PI * 2;

// 一刀：從核邊緣（半徑 ≥ startR）開始，之後只記錄「比上一個記錄點更靠近中心」的位置，
// 所以裂縫照病人實際拉的不規則路徑長，往外退不會變長
export function createChopStroke({ startR = 2.4, minInward = 1.6, doneDist = 1.0, minStep = 0.12, holdPoint } = {}) {
  const points = [];
  let lastR = 0;
  return {
    points,
    get hasStarted() { return points.length > 0; },
    // started：這次剛開始；appended：這次新增了記錄點；tooInner：還沒開始，而且還在太靠內的位置
    add(x, z) {
      const r = Math.hypot(x, z);
      if (!points.length) {
        if (r < startR) return { started: false, appended: false, tooInner: true };
        points.push({ x, z });
        lastR = r;
        return { started: true, appended: true, tooInner: false };
      }
      if (r <= lastR - minStep) {
        points.push({ x, z });
        lastR = r;
        return { started: false, appended: true, tooInner: false };
      }
      return { started: false, appended: false, tooInner: false };
    },
    inward() {
      return points.length ? Math.hypot(points[0].x, points[0].z) - lastR : 0;
    },
    isDone(x, z) {
      return points.length > 0
        && this.inward() >= minInward
        && Math.hypot(x - holdPoint.x, z - holdPoint.z) <= doneDist;
    },
  };
}

// 核繞 +Y 轉 θ：核座標 (lx, lz) → 世界 x = lx cosθ + lz sinθ、z = −lx sinθ + lz cosθ

// 讓核座標 −z 軸指向世界角 θs（atan2(z, x)）的旋轉角
export function alignNegZ(thetaS) {
  return Math.atan2(-Math.cos(thetaS), -Math.sin(thetaS));
}

// 讓核座標 +x（sign > 0）或 −x（sign < 0）指向世界角 θs 的旋轉角
export function alignX(thetaS, sign) {
  return sign >= 0 ? -thetaS : Math.PI - thetaS;
}

// 世界點 (x, z) 在核旋轉 θ 時的核座標 x
export function localX(x, z, theta) {
  return x * Math.cos(theta) - z * Math.sin(theta);
}

// from 轉到 to 的最短帶號角度差，落在 (−π, π]
export function shortestDelta(from, to) {
  let d = (to - from) % TWO_PI;
  if (d > Math.PI) d -= TWO_PI;
  else if (d <= -Math.PI) d += TWO_PI;
  return d;
}

// 從 a 到 b 的略彎折線（兩端固定），側向擺動最大 amp
export function wobblePath(a, b, count, amp, phase = 0) {
  const dx = b.x - a.x, dz = b.z - a.z, len = Math.hypot(dx, dz) || 1;
  const nx = -dz / len, nz = dx / len;
  const pts = [];
  for (let i = 0; i <= count; i++) {
    const t = i / count;
    const w = amp * Math.sin(Math.PI * t) * Math.sin(t * 7 + phase);
    pts.push({ x: a.x + dx * t + nx * w, z: a.z + dz * t + nz * w });
  }
  return pts;
}

// 折線上 k（0..1）處的位置，依點的序號線性內插
export function pointAlong(points, k) {
  const f = Math.min(1, Math.max(0, k)) * (points.length - 1);
  const i = Math.min(points.length - 2, Math.floor(f));
  const t = f - i;
  return { x: points[i].x + (points[i + 1].x - points[i].x) * t, z: points[i].z + (points[i + 1].z - points[i].z) * t };
}
