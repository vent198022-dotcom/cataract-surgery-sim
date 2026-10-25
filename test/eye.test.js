import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeRevolvedPart, inCutRegion } from '../src/eye/revolve.js';
import { nucleusLayout, chopOffsets, H_FINAL, Q_FINAL, HALF_GAP, QUARTER_GAP, LASER_GAP } from '../src/eye/layout.js';
import { PROFILES, nucleusTopY, bevelIncision } from '../src/eye/anatomy.js';
import { createInitialState } from '../src/core/state.js';

const close = (a, b, eps = 1e-6) => assert.ok(Math.abs(a - b) < eps, `${a} !~ ${b}`);
const square = [[0, 0], [1, 0], [1, 1], [0, 1]];

test('full revolution: no caps, cut variant has two caps', () => {
  const { full, cut } = makeRevolvedPart(square, null);
  assert.equal(full.children.length, 1);
  assert.equal(cut.children.length, 3);
});

test('a quadrant inside the removed quarter has no cut variant', () => {
  const { full, cut } = makeRevolvedPart(square, null, { phiStart: Math.PI * 1.5, phiLength: Math.PI / 2 });
  assert.equal(full.children.length, 3);
  assert.equal(cut, null);
});

test('cut region is x<0 and z>0', () => {
  assert.equal(inCutRegion(-1, 1), true);
  assert.equal(inCutRegion(1, 1), false);
  assert.equal(inCutRegion(-1, -1), false);
});

test('nucleus layout follows state', () => {
  const s = createInitialState('classic');
  assert.deepEqual(nucleusLayout(s), {});
  s.nucleusSplit = 1;
  assert.deepEqual(nucleusLayout(s), { half: HALF_GAP, rotation: Math.PI / 2 });
  s.nucleusSplit = 2;
  assert.deepEqual(nucleusLayout(s), { half: HALF_GAP, quarter: QUARTER_GAP, rotation: Math.PI / 2 });
  const f = createInitialState('femto');
  f.laserDone = true;
  f.nucleusSplit = 2;
  assert.deepEqual(nucleusLayout(f), { quarter: LASER_GAP });
});

test('every profile has at least 3 points with r >= 0', () => {
  for (const [name, profile] of Object.entries(PROFILES)) {
    assert.ok(profile.length >= 3, name);
    for (const [r] of profile) assert.ok(r >= 0, name);
  }
});

test('chopOffsets at the final values equals the split-2 layout', () => {
  const offsets = chopOffsets({ h: H_FINAL, qTop: Q_FINAL, qBot: Q_FINAL });
  assert.equal(offsets.length, 4);
  for (let q = 0; q < 4; q++) {
    const phi = ((q + 0.5) * Math.PI) / 2;
    const dx = Math.sin(phi), dz = Math.cos(phi);
    const x = Math.sign(dx) * HALF_GAP + dx * QUARTER_GAP, z = dz * QUARTER_GAP;
    assert.ok(Math.abs(offsets[q].x - x) < 1e-9, `x${q}`);
    assert.ok(Math.abs(offsets[q].z - z) < 1e-9, `z${q}`);
  }
});

test('chopOffsets moves top and bottom pairs independently', () => {
  const o = chopOffsets({ h: 0.3, qTop: 0.2, qBot: 0 });
  assert.deepEqual(o.map(p => [p.x, p.z]), [[0.3, 0.2], [0.3, -0.2], [-0.3, -0], [-0.3, 0]]);
});

test('nucleusTopY follows the nucleus front surface', () => {
  assert.ok(Math.abs(nucleusTopY(0) - (8 + 0.68 * 1.5)) < 1e-9);
  assert.ok(Math.abs(nucleusTopY(3.2) - 8) < 1e-9);
  assert.ok(Math.abs(nucleusTopY(5) - 8) < 1e-9);
});

test('bevelIncision: 90 degrees runs along the surface normal to the inner surface', () => {
  const { outer, inner } = bevelIncision(5.1, 90);
  const cy = 5.285;
  close(Math.hypot(outer[0], outer[1] - cy), 7.8, 1e-9);
  close(Math.hypot(inner[0], inner[1] - cy), 7.2, 1e-9);
  const n = [outer[0] / 7.8, (outer[1] - cy) / 7.8];
  const tangent = [-n[1], n[0]];
  const cut = [inner[0] - outer[0], inner[1] - outer[1]];
  close(cut[0] * tangent[0] + cut[1] * tangent[1], 0, 1e-9);  // 垂直表面
  assert.ok(inner[0] < outer[0]);  // 法線朝向中心，r 變小
});

test('bevelIncision: 130 degrees undercuts outward at 130 degrees to the central surface', () => {
  const b90 = bevelIncision(5.1, 90);
  const b130 = bevelIncision(5.1, 130);
  const cy = 5.285;
  close(Math.hypot(b130.inner[0], b130.inner[1] - cy), 7.2, 1e-9);
  assert.ok(b130.inner[0] > b90.inner[0]);  // 往角膜緣方向外傾
  const n = [b130.outer[0] / 7.8, (b130.outer[1] - cy) / 7.8];
  const tangent = [-n[1], n[0]];  // 朝中心（r 變小）的表面切線
  const cut = [b130.inner[0] - b130.outer[0], b130.inner[1] - b130.outer[1]];
  const angle = Math.acos((cut[0] * tangent[0] + cut[1] * tangent[1]) / Math.hypot(cut[0], cut[1])) * 180 / Math.PI;
  assert.ok(Math.abs(angle - 130) < 0.5, `angle ${angle}`);
  assert.ok(b130.inner[1] < b130.outer[1]);  // 往組織深處走
});

test('tipForGrip keeps the tip ahead of the finger along the instrument', async () => {
  const { Instrument } = await import('../src/instruments/instruments.js');
  const THREE = await import('three');
  const tool = new Instrument(new THREE.Group());
  tool.pivot({ x: 5.5, y: 10.8, z: 0 });                 // 從右側切口進入：握柄在尖端右邊
  const t = tool.tipForGrip(3, 0, 1.5);
  assert.ok(Math.abs(t.x - 1.5) < 1e-9 && Math.abs(t.z) < 1e-9);
  tool.aim({ x: 0, y: 7, z: 0 });                        // 眼外瞄準中心：握柄在尖端外側
  const u = tool.tipForGrip(10, 0, 2);
  assert.ok(Math.abs(u.x - 8) < 1e-9 && Math.abs(u.z) < 1e-9);
});
