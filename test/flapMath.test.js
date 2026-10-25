import { test } from 'node:test';
import assert from 'node:assert/strict';
import { anteriorY, contiguousRun, tearState, flapVertex, gripWeight } from '../src/eye/flapMath.js';
import { LENS, CAPSULE_OPENING } from '../src/eye/anatomy.js';

const close = (a, b, eps = 1e-6) => assert.ok(Math.abs(a - b) < eps, `${a} ≈ ${b}`);
const bins = (n, on) => Array.from({ length: n }, (_, i) => on.includes(i));

test('anteriorY is the anterior pole height at r = 0 and falls with r', () => {
  close(anteriorY(0), LENS.center + 1.03 * LENS.front);
  assert.ok(anteriorY(2.6) < anteriorY(1));
  assert.ok(Number.isFinite(anteriorY(99)));  // r 超出時夾在赤道，不得 NaN
});

test('contiguousRun counts forward and backward from bin 0 with wrap', () => {
  assert.deepEqual(contiguousRun(bins(36, [0, 1, 2, 35, 34])), { forward: 3, backward: 3 });
  assert.deepEqual(contiguousRun(bins(36, [0, 1, 2, 3, 4])), { forward: 5, backward: 1 });
  assert.deepEqual(contiguousRun(bins(36, [0, 35, 34, 33])), { forward: 1, backward: 4 });
});

test('contiguousRun: all true → both equal length; bin 0 false → both 0', () => {
  assert.deepEqual(contiguousRun(new Array(36).fill(true)), { forward: 36, backward: 36 });
  assert.deepEqual(contiguousRun(bins(36, [1, 2, 3, 35])), { forward: 0, backward: 0 });
});

test('tearState picks the longer run and its direction', () => {
  const step = 2 * Math.PI / 36;
  let t = tearState(bins(36, [0, 1, 2, 3, 4]));
  assert.equal(t.dir, 1); close(t.angle, 5 * step);
  t = tearState(bins(36, [0, 35, 34, 33]));
  assert.equal(t.dir, -1); close(t.angle, 4 * step);
  t = tearState(bins(36, [0, 1, 35]));  // 平手 → +1
  assert.equal(t.dir, 1);
});

test('tearState respects minAngle', () => {
  const t = tearState(bins(36, [0]), 0.25);
  close(t.angle, 0.25);
  const u = tearState(bins(36, [3]), 0.25);  // 沒有連續撕開 → 仍是最小角度
  close(u.angle, 0.25);
});

test('flapVertex with no tear and no peel is the flat capsule', () => {
  const v = flapVertex(2, 0.7, { dir: 1, angle: 0 }, 0);
  close(v.x, 2 * Math.cos(0.7));
  close(v.z, 2 * Math.sin(0.7));
  close(v.y, anteriorY(2) + 0.01);
});

test('flapVertex: fully peeled rim folds over to radius ~0.2 and rises', () => {
  const tear = { dir: 1, angle: 0 };
  const v = flapVertex(CAPSULE_OPENING, 0, tear, 1);
  close(Math.hypot(v.x, v.z), 2 * 1.4 - CAPSULE_OPENING, 1e-6);
  assert.ok(v.y > anteriorY(CAPSULE_OPENING) + 0.01);
});

test('flapVertex: inner vertex rises by at most 0.04', () => {
  const flat = flapVertex(1, 1.2, { dir: 1, angle: 0 }, 0);
  const peeled = flapVertex(1, 1.2, { dir: 1, angle: 0 }, 1);
  assert.ok(peeled.y - flat.y <= 0.04 + 1e-9);
  close(peeled.x, flat.x); close(peeled.z, flat.z);
});

test('flapVertex folds behind the tear front and stays flat ahead of it', () => {
  const tear = { dir: 1, angle: 2 };
  const behind = flapVertex(2.6, 0.2, tear, 0);   // rel 0.2，離撕裂前緣 > FRONT_SOFT → 完全折起
  const ahead = flapVertex(2.6, 3.0, tear, 0);    // 尚未撕到
  close(Math.hypot(behind.x, behind.z), 0.2, 1e-6);
  close(ahead.y, anteriorY(2.6) + 0.01);
  // dir = -1 時鏡像：θ = -0.2 同樣折起
  const mirror = flapVertex(2.6, -0.2, { dir: -1, angle: 2 }, 0);
  close(Math.hypot(mirror.x, mirror.z), 0.2, 1e-6);
});

test('grip: a rim vertex exactly at the tear front lands on the grip point', () => {
  const grip = { x: 1.1, y: 9.9, z: -0.4, strength: 1 };
  const v = flapVertex(CAPSULE_OPENING, 1.5, { dir: 1, angle: 1.5 }, 0, grip);
  close(v.x, grip.x); close(v.y, grip.y); close(v.z, grip.z);
  // 強度 0 或沒有 grip 都等於沒有拉
  const none = flapVertex(CAPSULE_OPENING, 1.5, { dir: 1, angle: 1.5 }, 0);
  const zero = flapVertex(CAPSULE_OPENING, 1.5, { dir: 1, angle: 1.5 }, 0, { ...grip, strength: 0 });
  assert.deepEqual(zero, none);
});

test('grip: vertices far from the front, or near the hinge, are unaffected', () => {
  const grip = { x: 1.1, y: 9.9, z: -0.4, strength: 1 };
  const tear = { dir: 1, angle: 2 };
  assert.deepEqual(flapVertex(CAPSULE_OPENING, 0.5, tear, 0, grip), flapVertex(CAPSULE_OPENING, 0.5, tear, 0));  // |d| = 1.5 > 0.35
  assert.deepEqual(flapVertex(CAPSULE_OPENING, 3.5, tear, 0, grip), flapVertex(CAPSULE_OPENING, 3.5, tear, 0));
  assert.deepEqual(flapVertex(1.5, 2, tear, 0, grip), flapVertex(1.5, 2, tear, 0));  // r < 1.9 → 權重 0
});

test('grip: a vertex just ahead of the front is only partly pulled (w <= 0.35)', () => {
  const grip = { x: 1.1, y: 9.9, z: -0.4, strength: 1 };
  const tear = { dir: 1, angle: 1.5 };
  const base = flapVertex(CAPSULE_OPENING, 1.6, tear, 0);
  const v = flapVertex(CAPSULE_OPENING, 1.6, tear, 0, grip);
  const full = Math.hypot(grip.x - base.x, grip.y - base.y, grip.z - base.z);
  const moved = Math.hypot(v.x - base.x, v.y - base.y, v.z - base.z);
  assert.ok(moved > 0 && moved <= 0.35 * full + 1e-9, `moved ${moved} of ${full}`);
});

test('gripWeight: 0 inside GRIP_R0, peaks at the front outer rim, ahead side is weaker', () => {
  const tear = { dir: 1, angle: 1.0 };
  assert.equal(gripWeight(1.5, 1.0, tear, 1), 0);
  const peak = gripWeight(2.6, 1.0, tear, 1);
  close(peak, 1);
  close(gripWeight(2.6, 1.0, tear, 0.5), 0.5);
  assert.ok(gripWeight(2.6, 0.9, tear, 1) < peak);
  close(gripWeight(2.6, 1.1, tear, 1), gripWeight(2.6, 0.9, tear, 1) * 0.35);
  assert.equal(gripWeight(2.6, 3.0, tear, 1), 0);
});

test('flapVertex with grip equals the ungripped vertex pulled by gripWeight', () => {
  const tear = { dir: 1, angle: 1.0 };
  const grip = { x: 1, y: 11, z: 2, strength: 0.8 };
  const base = flapVertex(2.4, 0.95, tear, 0);
  const w = gripWeight(2.4, 0.95, tear, grip.strength);
  const v = flapVertex(2.4, 0.95, tear, 0, grip);
  close(v.x, base.x + (grip.x - base.x) * w);
  close(v.y, base.y + (grip.y - base.y) * w);
  close(v.z, base.z + (grip.z - base.z) * w);
});
