import { test } from 'node:test';
import assert from 'node:assert/strict';
import { dist2D, clampToDisk, shaftDirection, createArcTracker, createLineTracker, leadingRun } from '../src/core/geometry.js';

const close = (a, b) => assert.ok(Math.abs(a - b) < 1e-9, `${a} ≈ ${b}`);

test('dist2D and clampToDisk', () => {
  close(dist2D(0, 0, 3, 4), 5);
  assert.deepEqual(clampToDisk(1, 1, 5), { x: 1, z: 1 });
  const c = clampToDisk(6, 8, 5);
  close(c.x, 3); close(c.z, 4);
});

test('shaftDirection is a unit vector from → to', () => {
  const d = shaftDirection({ x: 0, y: 0, z: 0 }, { x: 0, y: 3, z: 4 });
  close(d.x, 0); close(d.y, 0.6); close(d.z, 0.8);
  const zero = shaftDirection({ x: 1, y: 1, z: 1 }, { x: 1, y: 1, z: 1 });
  assert.equal(Math.hypot(zero.x, zero.y, zero.z), 0);
});

test('arc tracker: a full sparse circle is fully covered thanks to interpolation', () => {
  const t = createArcTracker(2.6, 36, 0.8);
  for (let i = 0; i <= 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    t.add(2.6 * Math.cos(a), 2.6 * Math.sin(a));
  }
  assert.equal(t.coverage(), 1);
});

test('arc tracker ignores points off the circle and lift breaks strokes', () => {
  const t = createArcTracker(2.6, 36, 0.8);
  assert.equal(t.add(0, 0), false);
  t.lift();  // 不斷開的話，(0,0)→(10,0) 的補點會經過圓周
  assert.equal(t.add(10, 0), false);
  t.lift();
  assert.equal(t.coverage(), 0);
  t.add(2.6, 0);
  t.lift();
  t.add(-2.6, 0);
  assert.equal(t.hits().filter(Boolean).length, 2);
});

test('line tracker covers bins along the segment only', () => {
  const t = createLineTracker({ x: 0, z: -3 }, { x: 0, z: 3 }, 20, 0.9);
  assert.equal(t.add(3, 0), false);
  t.add(0, -3);
  t.add(0, 0);
  assert.ok(Math.abs(t.coverage() - 0.5) <= 0.05 + 1e-9);
  t.add(0.5, 3);
  assert.equal(t.coverage(), 1);
});

test('line tracker with coincident endpoints never reports hits', () => {
  const t = createLineTracker({ x: 1, z: 1 }, { x: 1, z: 1 }, 20, 0.9);
  assert.equal(t.add(1, 1), false);
  assert.equal(t.add(1.5, 1), false);
  assert.equal(t.coverage(), 0);
});

test('leadingRun counts consecutive trues from the start', () => {
  assert.equal(leadingRun([true, true, false, true]), 2);
  assert.equal(leadingRun([false, true]), 0);
  assert.equal(leadingRun([true, true]), 2);
  assert.equal(leadingRun([]), 0);
});
