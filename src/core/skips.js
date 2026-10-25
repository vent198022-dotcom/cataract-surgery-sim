// 每個步驟「完成後」對眼睛狀態的改變；用於跳過步驟與重建上一步
export const SKIPS = {
  intro: () => {},
  incision: s => { s.incisions.main = true; s.incisions.side = true; },
  capsulorhexis: s => { s.capsuleOpen = true; },
  chop: s => { s.nucleusSplit = 2; },
  laser: s => { s.incisions.main = true; s.incisions.side = true; s.laserDone = true; s.nucleusSplit = 2; },
  capsuleRemoval: s => { s.capsuleOpen = true; },
  phaco: s => { s.pieces = [false, false, false, false]; },
  cortex: s => { s.cortex = false; },
  iol: s => { s.iol = true; },
  done: () => {},
};
