// 水晶體核四塊的排列：half 為兩半分開距離、quarter 為四塊向外距離、rotation 為整顆核繞光軸旋轉
export const HALF_GAP = 0.3;
export const QUARTER_GAP = 0.35;
export const LASER_GAP = 0.1;

export function nucleusLayout(s) {
  if (s.route === 'femto' && s.laserDone) return { quarter: LASER_GAP };
  if (s.nucleusSplit >= 2) return { half: HALF_GAP, quarter: QUARTER_GAP, rotation: Math.PI / 2 };
  if (s.nucleusSplit === 1) return { half: HALF_GAP, rotation: Math.PI / 2 };
  return {};
}
