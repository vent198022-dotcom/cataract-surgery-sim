// 純數學工具（不依賴 three），可在 Node 測試

export function dist2D(ax, az, bx, bz) {
  return Math.hypot(ax - bx, az - bz);
}

export function clampToDisk(x, z, radius) {
  const r = Math.hypot(x, z);
  if (r <= radius) return { x, z };
  return { x: (x / r) * radius, z: (z / r) * radius };
}

// from 指向 to 的單位向量；兩點重合時回傳零向量
export function shaftDirection(from, to) {
  const dx = to.x - from.x, dy = to.y - from.y, dz = to.z - from.z;
  const len = Math.hypot(dx, dy, dz);
  if (len < 1e-9) return { x: 0, y: 0, z: 0 };
  return { x: dx / len, y: dy / len, z: dz / len };
}

// 拖曳覆蓋追蹤：把路徑切成 bins 格，筆畫經過的格子記為完成。
// 兩次取樣之間每 0.2mm 補點，避免拖太快跳格。
function strokeTracker(bins, locate) {
  const hit = new Array(bins).fill(false);
  let last = null;
  function mark(x, z) {
    const i = locate(x, z);
    if (i === null) return false;
    hit[Math.min(bins - 1, Math.max(0, i))] = true;
    return true;
  }
  return {
    add(x, z) {
      let onPath = false;
      if (last) {
        const n = Math.max(1, Math.ceil(Math.hypot(x - last.x, z - last.z) / 0.2));
        for (let i = 1; i <= n; i++) onPath = mark(last.x + ((x - last.x) * i) / n, last.z + ((z - last.z) * i) / n) || onPath;
      } else {
        onPath = mark(x, z);
      }
      last = { x, z };
      return onPath;
    },
    lift() { last = null; },
    coverage() { return hit.filter(Boolean).length / bins; },
    hits() { return hit.slice(); },
  };
}

export function createArcTracker(radius, bins = 36, tolerance = 0.8) {
  return strokeTracker(bins, (x, z) => {
    if (Math.abs(Math.hypot(x, z) - radius) > tolerance) return null;
    const a = (Math.atan2(z, x) + Math.PI * 2) % (Math.PI * 2);
    return Math.floor((a / (Math.PI * 2)) * bins);
  });
}

export function createLineTracker(a, b, bins = 20, tolerance = 0.9) {
  const dx = b.x - a.x, dz = b.z - a.z, len2 = dx * dx + dz * dz;
  return strokeTracker(bins, (x, z) => {
    const t = ((x - a.x) * dx + (z - a.z) * dz) / len2;
    if (t < 0 || t > 1) return null;
    if (Math.hypot(x - (a.x + dx * t), z - (a.z + dz * t)) > tolerance) return null;
    return Math.floor(t * bins);
  });
}
