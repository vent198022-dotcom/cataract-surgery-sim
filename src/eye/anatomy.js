// 眼球尺寸（毫米）。眼球中心在原點，光軸為 +Y，角膜朝上。
// 輪廓為 [r, y] 封閉多邊形，r 為離光軸的距離。

export const LENS = { center: 8, radius: 4.6, front: 1.5, back: 2.5 };
export const NUCLEUS_SCALE = 0.68;
export const CAPSULE_OPENING = 2.6;  // 撕囊半徑（直徑約 5.2mm）
export const CAPSULE_Y = 9.3;        // 撕囊圓周處前囊的高度
export const IOL_Y = 8;

export const INCISIONS = {
  main: { x: 5.5, y: 10.8, z: 0, length: 2.2 },
  side: { x: 0, y: 10.8, z: -5.5, length: 1.0 },
};

const T_OPEN = Math.asin(CAPSULE_OPENING / LENS.radius);
const rad = d => (d * Math.PI) / 180;

// 圓心在光軸 (0, cy)、半徑 R，角度 a0→a1（度，0 度指向 +r）
export function arc(cy, R, a0, a1, n = 32) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const a = rad(a0 + ((a1 - a0) * i) / n);
    pts.push([Math.max(0, R * Math.cos(a)), cy + R * Math.sin(a)]);
  }
  return pts;
}

// 水晶體表面：t=0 前極、t=π/2 赤道、t=π 後極；s 為縮放
export function lensCurve(t0, t1, s, n = 32) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const t = t0 + ((t1 - t0) * i) / n;
    const depth = t < Math.PI / 2 ? LENS.front : LENS.back;
    pts.push([Math.max(0, s * LENS.radius * Math.sin(t)), LENS.center + s * depth * Math.cos(t)]);
  }
  return pts;
}

const shell = (outer, inner) => [...outer, ...[...inner].reverse()];

export const PROFILES = {
  sclera: shell(arc(0, 12, -90, 61.1), arc(0, 11.4, -90, 61.1)),
  choroid: shell(arc(0, 11.38, -90, 35), arc(0, 11.15, -90, 35)),
  retina: shell(arc(0, 11.13, -90, 32), arc(0, 10.9, -90, 32)),
  opticNerve: [[0, -11.95], [1.6, -11.95], [1.6, -18], [0, -18]],
  cornea: shell(arc(5.285, 7.8, 90, 41.96), arc(5.285, 7.2, 90, 36.3)),
  iris: [[3.2, 9.3], [5.6, 9.0], [5.6, 9.4], [3.2, 9.6]],
  ciliary: [[5.3, 8.7], [5.8, 9.2], [6.3, 9.0], [7.6, 7.8], [8.9, 6.4], [8.6, 6.0], [6.6, 7.0], [5.4, 8.0]],
  vitreous: [...arc(0, 10.88, -90, 30), [6.5, 6.6], ...lensCurve(1.75, Math.PI, 1.04)],
  cortex: lensCurve(0, Math.PI, 0.98),
  nucleus: lensCurve(0, Math.PI, NUCLEUS_SCALE),
  capsuleBag: shell(lensCurve(T_OPEN, Math.PI, 1.03), lensCurve(T_OPEN, Math.PI, 1.0)),
  capsuleDisc: shell(lensCurve(0, T_OPEN, 1.03), lensCurve(0, T_OPEN, 1.0)),
};

// 名稱標籤放在兩個切面上：x<0、z=0 的半平面，以及 x=0、z>0 的半平面（水晶體四個標籤分開放，避免重疊）
export const LABEL_ANCHORS = {
  cornea: [-2.5, 12.4, 0],
  anteriorChamber: [-1.5, 11.0, 0],
  iris: [-4.4, 9.3, 0],
  capsule: [0, 5.9, 2.5],
  cortex: [0, 7.0, 3.6],
  nucleus: [0, 8.3, 1.2],
  zonules: [0, 8.2, 5.0],
  ciliary: [-7.0, 7.5, 0],
  vitreous: [-4.0, 0, 0],
  retina: [-9.5, -5.5, 0],
  choroid: [-8.0, -8.0, 0],
  sclera: [-5.85, -10.1, 0],
  opticNerve: [-0.8, -15, 0],
  iol: [-2.0, 8.6, 0],
};
