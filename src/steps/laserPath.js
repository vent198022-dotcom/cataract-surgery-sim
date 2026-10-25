// 飛秒雷射的治療路徑與時間分配（純函式，無 three 依賴，可在 Node 測試）
import { INCISIONS, CAPSULE_OPENING, CAPSULE_Y } from '../eye/anatomy.js';

const FRAG_Y = 8.9;
const FRAG_HALF = 3;
const MIN_INCISION_TIME = 1.2;

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
