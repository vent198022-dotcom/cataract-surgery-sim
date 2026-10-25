// 倒嵌角切口的剖面示意圖（SVG 字串）：角膜厚度、斜切線與角度弧，數值與 3D 模型共用 bevelIncision
import { bevelIncision } from '../eye/anatomy.js';

const CY = 5.285, R_OUT = 7.8, R_IN = 7.2;   // 角膜內外表面（與 anatomy.js PROFILES.cornea 相同）
const SCLERA_OUT = 12, SCLERA_IN = 11.4;
const LIMBUS_R = 5.8;
const R0 = 3.9, R1 = 6.9, Y_TOP = 11.9, Y_BOTTOM = 9.3;
const PX = 100;                                // 每毫米像素
const W = (R1 - R0) * PX, H = (Y_TOP - Y_BOTTOM) * PX;

const sx = r => ((r - R0) * PX).toFixed(1);
const sy = y => ((Y_TOP - y) * PX).toFixed(1);
const pt = (r, y) => `${sx(r)},${sy(y)}`;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// 圓心在光軸 (0, cy)、半徑 R 的弧上，r 從 a 到 b 的點
function arcPoints(cy, R, a, b, n = 24) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const r = a + ((b - a) * i) / n;
    pts.push([r, cy + Math.sqrt(Math.max(0, R * R - r * r))]);
  }
  return pts;
}

const band = (outer, inner) => [...outer, ...[...inner].reverse()].map(([r, y]) => pt(r, y)).join(' ');

export function bevelDiagramSVG(text, alphaDeg = 130, rOuter = 5.5) {
  const { outer, inner } = bevelIncision(rOuter, alphaDeg);
  const cornea = band(arcPoints(CY, R_OUT, R0, LIMBUS_R), arcPoints(CY, R_IN, R0, LIMBUS_R));
  const sclera = band(arcPoints(0, SCLERA_OUT, LIMBUS_R, R1), arcPoints(0, SCLERA_IN, LIMBUS_R - 0.3, R1));

  // 角度弧：從「沿表面朝中心」轉到「切口方向」，半徑 0.45mm
  const ny = (outer[1] - CY) / R_OUT, nr = outer[0] / R_OUT;
  const t = [-ny, nr];                                         // (dr, dy) 朝中心的表面切線
  const len = Math.hypot(inner[0] - outer[0], inner[1] - outer[1]);
  const d = [(inner[0] - outer[0]) / len, (inner[1] - outer[1]) / len];
  const rad = 0.45;
  const a0 = [outer[0] + t[0] * rad, outer[1] + t[1] * rad];
  const a1 = [outer[0] + d[0] * rad, outer[1] + d[1] * rad];
  const mid = [t[0] + d[0], t[1] + d[1]];
  const midLen = Math.hypot(mid[0], mid[1]) || 1;
  // 弧從表面切線逆時針轉到切口方向（畫面上經過中央側、組織內部），即量角的那一側
  const label = [outer[0] - (nr * 0.75), outer[1] - (ny * 0.75)];
  const largeArc = alphaDeg > 180 ? 1 : 0;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H + 40}" role="img" aria-label="${esc(text.bevelTitle)}">
  <text x="${W / 2}" y="24" text-anchor="middle" font-size="22" font-weight="bold" fill="#1d2a36">${esc(text.bevelTitle)}</text>
  <g transform="translate(0,36)">
    <polygon points="${sclera}" fill="#f4efe4" stroke="#c9bfae" stroke-width="2"/>
    <polygon points="${cornea}" fill="#cfe9f7" stroke="#6aa9c9" stroke-width="2"/>
    <line x1="${sx(outer[0])}" y1="${sy(outer[1])}" x2="${sx(inner[0])}" y2="${sy(inner[1])}" stroke="#fff" stroke-width="11" stroke-linecap="round"/>
    <line x1="${sx(outer[0])}" y1="${sy(outer[1])}" x2="${sx(inner[0])}" y2="${sy(inner[1])}" stroke="#8b1e1e" stroke-width="6" stroke-linecap="round"/>
    <path d="M ${pt(...a0)} A ${rad * PX} ${rad * PX} 0 ${largeArc} 0 ${pt(...a1)}" fill="none" stroke="#e08a00" stroke-width="3"/>
    <text x="${sx(label[0] - 0.05 * mid[0] / midLen)}" y="${sy(label[1])}" text-anchor="end" font-size="20" font-weight="bold" fill="#b86e00">${esc(text.bevelAngle)}</text>
    <text x="8" y="${H - 10}" font-size="16" fill="#5b6b7a">← ${esc(text.bevelCenter)}</text>
    <text x="${sx(LIMBUS_R)}" y="${H - 10}" font-size="16" fill="#5b6b7a">${esc(text.bevelLimbus)} →</text>
  </g>
</svg>`;
}
