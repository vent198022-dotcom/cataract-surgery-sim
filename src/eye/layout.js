// 水晶體核四塊的排列：half 為兩半分開距離、quarter 為四塊向外距離、rotation 為整顆核繞光軸旋轉
export const HALF_GAP = 0.3;
export const QUARTER_GAP = 0.35;
export const LASER_GAP = 0.1;

export function nucleusLayout(s) {
  if (s.route === 'femto' && s.laserDone) return { quarter: LASER_GAP };
  const rotation = s.nucleusRotation ?? Math.PI / 2;  // 自由劈核後由劈核步驟記下實際角度
  if (s.nucleusSplit >= 2) return { half: HALF_GAP, quarter: QUARTER_GAP, rotation };
  if (s.nucleusSplit === 1) return { half: HALF_GAP, rotation };
  return {};
}

// 劈核動畫的終點：與 nucleusLayout 的 split 2（半邊 HALF_GAP、四塊 QUARTER_GAP）完全相同
export const H_FINAL = HALF_GAP + QUARTER_GAP * Math.SQRT1_2;
export const Q_FINAL = QUARTER_GAP * Math.SQRT1_2;

// 四塊核在核座標下的位移：h 為兩半左右分開、qTop / qBot 為上下兩半各自裂成兩塊的距離。
// 核轉 +90° 後畫面上方是 q0/q1，再轉 180° 後畫面上方是 q2/q3，所以上下兩半分開記
export function chopOffsets({ h = 0, qTop = 0, qBot = 0 } = {}) {
  return [
    { x: h, z: qTop },
    { x: h, z: -qTop },
    { x: -h, z: -qBot },
    { x: -h, z: qBot },
  ];
}
