import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeRevolvedPart, inCutRegion } from '../src/eye/revolve.js';
import { nucleusLayout, HALF_GAP, QUARTER_GAP, LASER_GAP } from '../src/eye/layout.js';
import { PROFILES } from '../src/eye/anatomy.js';
import { createInitialState } from '../src/core/state.js';

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
