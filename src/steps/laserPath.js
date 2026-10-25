// 飛秒雷射的治療路徑與時間分配（純函式，無 three 依賴，可在 Node 測試）
import { INCISIONS, CAPSULE_OPENING, CAPSULE_Y } from '../eye/anatomy.js';

const FRAG_Y = 8.9;
const FRAG_HALF = 3;
const MIN_INCISION_TIME = 1.2;

// 把某一段的點就地打亂順序（固定亂數種子，每次載入都一樣）：
// 相鄰點只差 0.1mm，依序落下會擠成一條虛線；打亂後雷射點散落整個圖形，看起來才像下雨
export function scatterPoints(positions, start, count, seed = 1) {
  let s = seed >>> 0;
  const rand = () => (s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296;
  for (let i = count - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    for (let a = 0; a < 3; a++) {
      const p = (start + i) * 3 + a, q = (start + j) * 3 + a;
      [positions[p], positions[q]] = [positions[q], positions[p]];
    }
  }
}

// 依臨床順序：囊膜切開 → 水晶體核碎裂（十字，兩條線各自走完）→ 角膜切口（主切口、側切口）
export function buildLaserPath() {
  const positions = [];
  const segments = [];
  const begin = () => positions.length / 3;
  const end = (phase, start) => segments.push({ phase, start, count: positions.length / 3 - start });

  let s = begin();
  const N = 90;
  for (let i = 0; i <= N; i++) {  // 多一個點讓圓走完閉合
    const a = (i / N) * Math.PI * 2;
    positions.push(CAPSULE_OPENING * Math.cos(a), CAPSULE_Y, CAPSULE_OPENING * Math.sin(a));
  }
  end('capsulotomy', s);

  s = begin();
  for (let i = 0; i <= 30; i++) positions.push((i / 30 - 0.5) * 2 * FRAG_HALF, FRAG_Y, 0);
  end('fragmentation', s);
  s = begin();
  for (let i = 0; i <= 30; i++) positions.push(0, FRAG_Y, (i / 30 - 0.5) * 2 * FRAG_HALF);
  end('fragmentation', s);

  for (const inc of Object.values(INCISIONS)) {
    s = begin();
    const len = Math.hypot(inc.x, inc.z);
    const tx = -inc.z / len, tz = inc.x / len;
    for (let i = 0; i <= 12; i++) {
      const d = (i / 12 - 0.5) * inc.length;
      positions.push(inc.x + tx * d, inc.y, inc.z + tz * d);
    }
    end('incision', s);
  }
  return { positions, segments };
}

// 小數索引 f 處的內插點（f 夾在有效範圍內）
export function pointAt(positions, f) {
  const n = positions.length / 3;
  const c = Math.min(Math.max(f, 0), n - 1);
  const i = Math.min(Math.floor(c), n - 2 >= 0 ? n - 2 : 0);
  const k = n > 1 ? c - i : 0;
  const a = i * 3, b = Math.min(i + 1, n - 1) * 3;
  return {
    x: positions[a] + (positions[b] - positions[a]) * k,
    y: positions[a + 1] + (positions[b + 1] - positions[a + 1]) * k,
    z: positions[a + 2] + (positions[b + 2] - positions[a + 2]) * k,
  };
}

// 各段所需秒數：依點數比例分配；角膜切口合計至少 minIncision 秒
export function scheduleLaser(segments, total, minIncision = MIN_INCISION_TIME) {
  const sum = list => list.reduce((acc, seg) => acc + seg.count, 0);
  const incSegs = segments.filter(g => g.phase === 'incision');
  const otherSegs = segments.filter(g => g.phase !== 'incision');
  let incTime = incSegs.length ? Math.max(minIncision, (total * sum(incSegs)) / sum(segments)) : 0;
  incTime = Math.min(incTime, total);
  const otherTime = total - incTime;
  const incCount = sum(incSegs), otherCount = sum(otherSegs);
  return segments.map(g => (g.phase === 'incision'
    ? (incTime * g.count) / incCount
    : (otherTime * g.count) / otherCount));
}

// 經過 elapsed 秒時：光束所在的小數索引 f、已被打到的點數 revealed、所在段
export function beamAt(segments, durations, elapsed) {
  const last = segments[segments.length - 1];
  const totalPoints = last.start + last.count;
  let acc = 0;
  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];
    if (elapsed < acc + durations[i]) {
      const p = Math.max(0, (elapsed - acc) / durations[i]);
      const local = p * (seg.count - 1);
      return { segment: i, f: seg.start + local, revealed: seg.start + Math.floor(local) + 1 };
    }
    acc += durations[i];
  }
  return { segment: segments.length - 1, f: totalPoints - 1, revealed: totalPoints };
}

// 雷射雨：每個目標點的「落點時間」（秒）。windows 為 [{ segments: [段索引], t0, t1 }]，
// 該時段內依路徑順序把這些段的點均勻排在 t0..t1；沒有排進任何時段的點為 Infinity。
export function scheduleRain(segments, windows) {
  const last = segments[segments.length - 1];
  const land = new Array(last.start + last.count).fill(Infinity);
  for (const w of windows) {
    const idx = [...w.segments].sort((a, b) => a - b);
    const total = idx.reduce((n, i) => n + segments[i].count, 0);
    let k = 0;
    for (const i of idx) {
      const seg = segments[i];
      for (let j = 0; j < seg.count; j++, k++) {
        land[seg.start + j] = total > 1 ? w.t0 + ((w.t1 - w.t0) * k) / (total - 1) : w.t0;
      }
    }
  }
  return land;
}

// 時刻 t 已落地的點數（落點時間依序遞增，所以是開頭連續的那一段）
export function landedCount(land, t) {
  let n = 0;
  while (n < land.length && land[n] <= t) n++;
  return n;
}

// 時刻 t 正在空中下落的光條：從 dockY 垂直落到目標點高度，速度 speed（mm/s），落地當下消失。
// y 為光條前端（下端）高度
export function rainStreaks(positions, land, t, dockY, speed) {
  const out = [];
  for (let i = 0; i < land.length; i++) {
    if (!(land[i] > t)) continue;
    const y = positions[i * 3 + 1];
    const spawn = land[i] - (dockY - y) / speed;
    if (t >= spawn) out.push({ i, x: positions[i * 3], z: positions[i * 3 + 2], y: dockY - speed * (t - spawn) });
  }
  return out;
}
