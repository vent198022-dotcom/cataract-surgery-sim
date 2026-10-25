import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildLaserPath, pointAt, scheduleLaser, beamAt } from '../src/steps/laserPath.js';
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
