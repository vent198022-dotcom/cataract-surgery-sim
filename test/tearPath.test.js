import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createTearPath } from '../src/eye/tearPath.js';
import { CAPSULE_OPENING } from '../src/eye/anatomy.js';

const TWO_PI = Math.PI * 2;
const close = (a, b, eps = 1e-6) => assert.ok(Math.abs(a - b) < eps, `${a} ≈ ${b}`);
const at = (r, theta) => [r * Math.cos(theta), r * Math.sin(theta)];

// 沿半徑 r 的圓，從角度 a0 走到 a1，回傳每步的 add 結果
function walk(path, r, a0, a1, steps = 40) {
  const out = [];
  for (let i = 1; i <= steps; i++) out.push(path.add(...at(r, a0 + ((a1 - a0) * i) / steps)));
  return out;
}

test('starts at the start point with an undecided direction', () => {
  const p = createTearPath();
  assert.deepEqual(p.points, [{ s: 0, r: CAPSULE_OPENING }]);
  assert.equal(p.sweep, 0);
  assert.equal(p.dir, 0);
  assert.deepEqual(p.startPoint, { x: CAPSULE_OPENING, z: 0 });
});

test('forward motion adds points and grows the sweep', () => {
  const p = createTearPath();
  const res = walk(p, 2.6, 0, Math.PI);
  assert.ok(res.some(r => r.tore));
  assert.equal(p.dir, 1);
  close(p.sweep, Math.PI, 1e-6);
  assert.ok(p.points.length > 10);
  assert.ok(p.points.every((q, i) => i === 0 || q.s > p.points[i - 1].s));
});

test('backward motion adds nothing', () => {
  const p = createTearPath();
  walk(p, 2.6, 0, 2);
  const n = p.points.length, sweep = p.sweep;
  const res = walk(p, 2.6, 2, 1);
  assert.ok(res.every(r => !r.tore));
  assert.equal(p.points.length, n);
  assert.equal(p.sweep, sweep);
  // 回頭之後再往前，要超過原本的前緣才會再撕
  const again = walk(p, 2.6, 1, 2.5);
  assert.ok(again.some(r => r.tore));
  close(p.sweep, 2.5, 1e-6);
});

test('direction is decided by the first clear move, either way', () => {
  const cw = createTearPath();
  walk(cw, 2.6, 0, -1.5);
  assert.equal(cw.dir, -1);
  close(cw.sweep, 1.5, 1e-6);
  const ccw = createTearPath();
  ccw.add(...at(2.6, 0.02));  // 太小，還不算
  assert.equal(ccw.dir, 0);
  walk(ccw, 2.6, 0.02, 1);
  assert.equal(ccw.dir, 1);
});

test('radius clamps at 3.6 (tooWide) and at 1.2 inside', () => {
  const p = createTearPath();
  const wide = p.add(...at(4.0, 0.3));
  assert.equal(wide.tooWide, true);
  assert.equal(wide.tore, true);
  close(p.points[p.points.length - 1].r, 3.6);
  const ok = p.add(...at(3.0, 0.6));
  assert.equal(ok.tooWide, false);
  p.add(...at(0.8, 0.9));
  close(p.points[p.points.length - 1].r, 1.2);
});

test('radiusAt interpolates the recorded path and blends back over the untorn part', () => {
  const p = createTearPath();
  p.add(...at(2.6, 0.5));
  p.add(...at(3.2, 1.0));
  p.add(...at(2.0, 2.0));
  close(p.radiusAt(0), 2.6);
  close(p.radiusAt(1.0), 3.2);
  close(p.radiusAt(1.5), 2.6, 1e-6);  // 3.2 與 2.0 的中點
  close(p.radiusAt(2.0), 2.0);
  // 未撕開的部分：從前緣半徑 2.0 線性回到 2.6
  const mid = 2.0 + (TWO_PI - 2.0) / 2;
  close(p.radiusAt(mid), 2.3, 1e-6);
  close(p.radiusAt(TWO_PI - 1e-9), 2.6, 1e-6);
  close(p.radiusAt(-0.5), p.radiusAt(TWO_PI - 0.5));  // 絕對角度會包回
});

test('radiusAt follows the tear direction when going clockwise', () => {
  const p = createTearPath();
  walk(p, 3.0, 0, -1.0, 20);
  close(p.radiusAt(-0.5), 3.0, 0.3);
  assert.ok(p.radiusAt(0.5) < 3.0);  // +0.5 在未撕開那側，已往 2.6 靠
});

test('closedAt needs 0.85 of a turn and the tip near the start', () => {
  const p = createTearPath();
  walk(p, 2.6, 0, TWO_PI * 0.5, 60);
  assert.equal(p.closedAt(...at(2.6, 0)), false);        // 還沒繞夠
  walk(p, 2.6, TWO_PI * 0.5, TWO_PI * 0.9, 60);
  assert.equal(p.closedAt(...at(2.6, TWO_PI * 0.9)), false);  // 夠了但還沒回到起點附近
  assert.equal(p.closedAt(2.6, 0.5), true);              // 距起點 0.5 mm
  assert.equal(p.closedAt(2.6, 1.0), false);             // 1.0 mm 太遠
});

test('closedAt is false before the direction is decided', () => {
  const p = createTearPath();
  assert.equal(p.closedAt(2.6, 0), false);
});
