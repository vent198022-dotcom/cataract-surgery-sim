import { test } from 'node:test';
import assert from 'node:assert/strict';
import { planarUV } from '../src/eye/textures.js';

test('planar UV maps eye-centre to texture centre', () => {
  assert.deepEqual(planarUV(0, 0, 5), [0.5, 0.5]);
});

test('planar UV: +x is screen right, -z is screen up', () => {
  assert.deepEqual(planarUV(5, 0, 5), [1, 0.5]);
  assert.deepEqual(planarUV(0, -5, 5), [0.5, 1]);
});
