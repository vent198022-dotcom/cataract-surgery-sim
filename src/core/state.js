// 眼睛目前的狀態；畫面一律由這個物件決定
export function createInitialState(route = 'classic') {
  return {
    route,
    incisions: { main: false, side: false },
    laserDone: false,                 // 飛秒雷射已打完
    capsuleOpen: false,               // 前囊片已取出
    nucleusSplit: 0,                  // 0 完整、1 兩半、2 四塊
    nucleusRotation: null,            // 劈核後核繞光軸的角度（自由劈，不固定）；null 表示用預設 π/2
    nucleusCuts: null,                // 古典劈核後四塊核的切線（見 eye/nucleusCuts.js）；null 表示直線，跳過劈核時由眼球補預設的不規則切線
    pieces: [true, true, true, true], // 四塊水晶體核是否還在
    cortex: true,
    iol: false,
  };
}
