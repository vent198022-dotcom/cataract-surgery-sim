import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildLaserPath, pointAt, scheduleLaser, beamAt, scheduleRain, landedCount, rainStreaks } from '../src/steps/laserPath.js';
import { CAPSULE_OPENING, CAPSULE_Y, INCISIONS } from '../src/eye/anatomy.js';

const close = (a, b, eps = 1e-6) => assert.ok(Math.abs(a - b) < eps, `${a} !~ ${b}`);

test('pointAt interpolates and clamps', () => {
  const p = [0, 0, 0, 2, 4, 6, 4, 8, 12];
  assert.deepEqual(pointAt(p, 0), { x: 0, y: 0, z: 0 });
  assert.deepEqual(pointAt(p, 1.5), { x: 3, y: 6, z: 9 });
  assert.deepEqual(pointAt(p, -3), { x: 0, y: 0, z: 0 });
  assert.deepEqual(pointAt(p, 99), { x: 4, y: 8, z: 12 });
});

test('path order is capsulotomy, fragmentation, incisions', () => {
  const { positions, segments } = buildLaserPath();
  assert.equal(positions.length % 3, 0);
  const phases = segments.map(s => s.phase);
  const firstFrag = phases.indexOf('fragmentation');
  const firstInc = phases.indexOf('incision');
  assert.equal(phases[0], 'capsulotomy');
  assert.ok(firstFrag > 0 && firstInc > firstFrag);
  // segments are contiguous and cover all points
  let next = 0;
  for (const s of segments) { assert.equal(s.start, next); next += s.count; }
  assert.equal(next * 3, positions.length);
  // capsulotomy lies on the circle and closes
  const cap = segments[0];
  for (let i = 0; i < cap.count; i++) {
    const { x, y, z } = pointAt(positions, cap.start + i);
    close(Math.hypot(x, z), CAPSULE_OPENING);
    close(y, CAPSULE_Y);
  }
  const a = pointAt(positions, cap.start), b = pointAt(positions, cap.start + cap.count - 1);
  close(a.x, b.x); close(a.z, b.z);
  // incisions sit at their configured heights
  const incY = INCISIONS.main.y;
  const last = segments[segments.length - 1];
  close(pointAt(positions, last.start).y, incY);
});

test('scheduleLaser sums to total, keeps >= 1.2s for incisions', () => {
  const { segments } = buildLaserPath();
  for (const total of [6.5, 3, 20]) {
    const d = scheduleLaser(segments, total);
    assert.equal(d.length, segments.length);
    close(d.reduce((s, x) => s + x, 0), total);
    const inc = segments.reduce((s, seg, i) => s + (seg.phase === 'incision' ? d[i] : 0), 0);
    assert.ok(inc >= Math.min(1.2, total) - 1e-9);
    assert.ok(d.every(x => x > 0));
  }
});

test('beamAt traces each segment end to end and reveals progressively', () => {
  const { positions, segments } = buildLaserPath();
  const d = scheduleLaser(segments, 6.5);
  const s0 = beamAt(segments, d, 0);
  assert.equal(s0.segment, 0);
  assert.equal(s0.f, segments[0].start);
  assert.equal(s0.revealed, 1);
  // midway through segment 0
  const mid = beamAt(segments, d, d[0] / 2);
  assert.ok(mid.f > segments[0].start && mid.f < segments[0].start + segments[0].count - 1);
  assert.ok(mid.revealed > s0.revealed);
  // start of segment 1 jumps to its first point
  const s1 = beamAt(segments, d, d[0] + 1e-6);
  assert.equal(s1.segment, 1);
  assert.ok(Math.abs(s1.f - segments[1].start) < 0.1);
  // revealed is monotonic non-decreasing and ends at total
  let prev = 0;
  for (let t = 0; t <= 6.5; t += 0.01) {
    const r = beamAt(segments, d, t).revealed;
    assert.ok(r >= prev);
    prev = r;
  }
  const end = beamAt(segments, d, 100);
  assert.equal(end.revealed, positions.length / 3);
  assert.equal(end.f, positions.length / 3 - 1);
});

test('scheduleRain lands each window\'s points in order inside the window', () => {
  const { segments } = buildLaserPath();
  const incIdx = segments.map((s, i) => (s.phase === 'incision' ? i : -1)).filter(i => i >= 0);
  const otherIdx = segments.map((s, i) => (s.phase !== 'incision' ? i : -1)).filter(i => i >= 0);
  const land = scheduleRain(segments, [
    { segments: otherIdx, t0: 4, t1: 9 },
    { segments: [incIdx[0]], t0: 10, t1: 11 },
    { segments: [incIdx[1]], t0: 13, t1: 13.6 },
  ]);
  const total = segments[segments.length - 1].start + segments[segments.length - 1].count;
  assert.equal(land.length, total);
  // 每個點都有排程、整體由小到大
  for (let i = 1; i < land.length; i++) assert.ok(land[i] >= land[i - 1], `order at ${i}`);
  close(land[0], 4);
  const mainSeg = segments[incIdx[0]], sideSeg = segments[incIdx[1]];
  close(land[mainSeg.start], 10); close(land[mainSeg.start + mainSeg.count - 1], 11);
  close(land[sideSeg.start], 13); close(land[sideSeg.start + sideSeg.count - 1], 13.6);
  // 囊膜切開 + 碎裂都在 4–9 秒內，不會跟切口時段重疊
  for (const i of otherIdx) {
    const s = segments[i];
    for (let k = 0; k < s.count; k++) assert.ok(land[s.start + k] >= 4 - 1e-9 && land[s.start + k] <= 9 + 1e-9);
  }
});

test('scheduleRain leaves unscheduled points at Infinity', () => {
  const { segments } = buildLaserPath();
  const land = scheduleRain(segments, [{ segments: [0], t0: 1, t1: 2 }]);
  assert.equal(land[0], 1);
  assert.equal(land[segments[0].count - 1], 2);
  assert.equal(land[segments[1].start], Infinity);
});

test('landedCount counts the leading points that have landed', () => {
  const land = [1, 2, 3, Infinity];
  assert.equal(landedCount(land, 0.5), 0);
  assert.equal(landedCount(land, 1), 1);
  assert.equal(landedCount(land, 2.5), 2);
  assert.equal(landedCount(land, 99), 3);
});

test('rainStreaks fall vertically from the dock to the target and vanish on landing', () => {
  const positions = [1, 9, 2, 3, 8, -1];
  const land = [5, 6];
  const speed = 45, dockY = 13.3;
  const fall0 = (dockY - 9) / speed;
  assert.equal(rainStreaks(positions, land, 5 - fall0 - 0.01, dockY, speed).length, 0);
  const atSpawn = rainStreaks(positions, land, 5 - fall0, dockY, speed);
  assert.equal(atSpawn.length, 1);
  close(atSpawn[0].y, dockY);
  assert.equal(atSpawn[0].x, 1); assert.equal(atSpawn[0].z, 2);
  const mid = rainStreaks(positions, land, 5 - fall0 / 2, dockY, speed);
  close(mid[0].y, (dockY + 9) / 2, 1e-6);
  assert.equal(rainStreaks(positions, land, 5, dockY, speed).length, 0);  // 抵達當下就消失
  assert.equal(rainStreaks(positions, land, 5.5, dockY, speed).length, 0);
});

test('scatterPoints shuffles one segment in place, deterministically, keeping the same points', async () => {
  const { scatterPoints } = await import('../src/steps/laserPath.js');
  const make = () => [9, 9, 9, ...Array.from({ length: 10 }, (_, i) => [i, 0, -i]).flat(), 7, 7, 7];
  const a = make(), b = make();
  scatterPoints(a, 1, 10, 42);
  scatterPoints(b, 1, 10, 42);
  assert.deepEqual(a, b);
  assert.deepEqual(a.slice(0, 3), [9, 9, 9]);
  assert.deepEqual(a.slice(-3), [7, 7, 7]);
  const pts = i => a.slice(3 + i * 3, 6 + i * 3);
  const xs = Array.from({ length: 10 }, (_, i) => pts(i)[0]);
  assert.notDeepEqual(xs, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  assert.deepEqual([...xs].sort((p, q) => p - q), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  for (let i = 0; i < 10; i++) assert.equal(pts(i)[2], -pts(i)[0]);
});
