import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createChopStroke, alignNegZ, alignX, localX, shortestDelta, wobblePath, pointAlong } from '../src/steps/chopStroke.js';

const HOLD = { x: 0.5, z: 0 };
const near = (a, b) => Math.abs(a - b) < 1e-9;

// 世界方向 = 核座標方向經 Ry(θ) 轉動
const toWorld = (lx, lz, th) => ({ x: lx * Math.cos(th) + lz * Math.sin(th), z: -lx * Math.sin(th) + lz * Math.cos(th) });

test('stroke does not start inside the start radius', () => {
  const s = createChopStroke({ holdPoint: HOLD });
  const r = s.add(1.0, 1.0);
  assert.deepEqual(r, { started: false, appended: false, tooInner: true });
  assert.equal(s.points.length, 0);
  assert.equal(s.hasStarted, false);
});

test('stroke starts at the edge, then appends only when moving inward', () => {
  const s = createChopStroke({ holdPoint: HOLD });
  assert.deepEqual(s.add(0, -3.2), { started: true, appended: true, tooInner: false });
  assert.deepEqual(s.add(0.2, -2.9), { started: false, appended: true, tooInner: false });
  assert.equal(s.add(0.2, -3.0).appended, false);   // 往外退
  assert.equal(s.add(0.2, -2.85).appended, false);  // 內縮不到 0.12
  assert.equal(s.add(0.1, -2.5).appended, true);
  assert.equal(s.add(2.0, -2.0).appended, false);   // 側向移動但沒更靠內
  assert.equal(s.points.length, 3);
});

test('stroke starts exactly at radius 2.4', () => {
  const s = createChopStroke({ holdPoint: HOLD });
  assert.equal(s.add(2.4, 0).started, true);
});

test('done needs enough inward travel and the tip near the hold point', () => {
  const s = createChopStroke({ holdPoint: HOLD });
  s.add(0, -3.2);
  assert.equal(s.isDone(0.5, 0), false);            // 還沒拉過
  s.add(0, -2.0);
  assert.equal(s.isDone(0, -2.0), false);
  assert.equal(s.isDone(0.5, 0), false);            // 拉了 1.2，不夠 1.6
  s.add(0, -1.5);
  assert.ok(near(s.inward(), 1.7));
  assert.equal(s.isDone(0, -1.5), false);           // 夠遠但還沒到探頭附近
  assert.equal(s.isDone(0.5, -0.8), true);
  assert.equal(s.isDone(0.5, -1.2), false);
});

test('done is false before the stroke starts', () => {
  const s = createChopStroke({ holdPoint: HOLD });
  assert.equal(s.isDone(0.5, 0), false);
});

test('alignNegZ points local -z at the chop start direction', () => {
  for (const deg of [-110, -90, 0, 35, 60, 135, 180, 250]) {
    const ts = (deg * Math.PI) / 180;
    const w = toWorld(0, -1, alignNegZ(ts));
    assert.ok(near(w.x, Math.cos(ts)) && near(w.z, Math.sin(ts)), `${deg}`);
  }
});

test('alignX points local +x / -x at the chop start direction', () => {
  for (const deg of [-110, -90, 0, 35, 60, 135, 180, 250]) {
    const ts = (deg * Math.PI) / 180;
    const p = toWorld(1, 0, alignX(ts, 1));
    assert.ok(near(p.x, Math.cos(ts)) && near(p.z, Math.sin(ts)), `+x ${deg}`);
    const m = toWorld(-1, 0, alignX(ts, -1));
    assert.ok(near(m.x, Math.cos(ts)) && near(m.z, Math.sin(ts)), `-x ${deg}`);
  }
});

test('localX inverts the rotation', () => {
  const th = 0.7, w = toWorld(1.3, -0.4, th);
  assert.ok(near(localX(w.x, w.z, th), 1.3));
});

test('shortestDelta wraps into (-pi, pi]', () => {
  assert.ok(near(shortestDelta(0, 0.5), 0.5));
  assert.ok(near(shortestDelta(0, 2 * Math.PI - 0.5), -0.5));
  assert.ok(near(shortestDelta(3 * Math.PI, 0), Math.PI));
  assert.ok(near(shortestDelta(0, -3.5), 2 * Math.PI - 3.5));
});

test('wobblePath keeps both ends and wobbles sideways within amp', () => {
  const a = { x: 0, z: -3.3 }, b = { x: 0, z: -0.5 };
  const pts = wobblePath(a, b, 10, 0.25, 0.4);
  assert.equal(pts.length, 11);
  assert.ok(near(pts[0].x, 0) && near(pts[0].z, -3.3));
  assert.ok(near(pts[10].x, 0) && near(pts[10].z, -0.5));
  assert.ok(pts.every(p => Math.abs(p.x) <= 0.25 + 1e-9));
  assert.ok(pts.some(p => Math.abs(p.x) > 0.05));
});

test('pointAlong interpolates along the polyline by index', () => {
  const pts = [{ x: 0, z: 0 }, { x: 2, z: 0 }, { x: 2, z: 4 }];
  assert.deepEqual(pointAlong(pts, 0), { x: 0, z: 0 });
  assert.deepEqual(pointAlong(pts, 0.5), { x: 2, z: 0 });
  assert.deepEqual(pointAlong(pts, 0.75), { x: 2, z: 2 });
  assert.deepEqual(pointAlong(pts, 1), { x: 2, z: 4 });
});
