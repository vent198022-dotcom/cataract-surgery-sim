import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createDemoPlayer, dragEvents, linePoints, circlePoints } from '../src/core/demo.js';

test('player emits events in time order', () => {
  const got = [];
  const p = createDemoPlayer(
    [{ t: 1, type: 'up', x: 2, z: 0 }, { t: 0, type: 'down', x: 0, z: 0 }, { t: 0.5, type: 'move', x: 1, z: 0 }],
    (type, e) => got.push(`${type}:${e.x}`),
  );
  p.update(0.4);
  assert.deepEqual(got, ['down:0']);
  assert.equal(p.finished, false);
  p.update(1);
  assert.deepEqual(got, ['down:0', 'move:1', 'up:2']);
  assert.equal(p.finished, true);
});

test('dragEvents: down, moves, up with increasing time', () => {
  const ev = dragEvents(linePoints({ x: 0, z: 0 }, { x: 4, z: 0 }, 4), 1, 2);
  assert.equal(ev[0].type, 'down');
  assert.equal(ev.at(-1).type, 'up');
  assert.equal(ev.filter(e => e.type === 'move').length, 5);
  for (let i = 1; i < ev.length; i++) assert.ok(ev[i].t >= ev[i - 1].t);
  assert.equal(ev.at(-1).x, 4);
});

test('circlePoints closes the loop', () => {
  const pts = circlePoints(2, 8);
  assert.equal(pts.length, 9);
  assert.ok(Math.abs(pts[0].x - pts[8].x) < 1e-9 && Math.abs(pts[0].z - pts[8].z) < 1e-9);
});
