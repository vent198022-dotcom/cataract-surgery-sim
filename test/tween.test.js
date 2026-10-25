import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Tweens, ease } from '../src/core/tween.js';

test('ease endpoints', () => {
  assert.equal(ease(0), 0);
  assert.equal(ease(1), 1);
  assert.equal(ease(0.5), 0.5);
});

test('tween runs from 0 to 1 then calls done once', () => {
  const tw = new Tweens();
  const seen = [];
  let done = 0;
  tw.add(1, k => seen.push(k), () => done++);
  assert.deepEqual(seen, [0]);
  tw.update(0.5);
  tw.update(0.6);
  tw.update(0.6);
  assert.deepEqual(seen, [0, 0.5, 1]);
  assert.equal(done, 1);
  assert.equal(tw.busy, false);
});

test('chained tween starts on the next update, clear stops everything', () => {
  const tw = new Tweens();
  const log = [];
  tw.add(0.1, () => {}, () => tw.add(1, k => log.push(k)));
  tw.update(0.2);
  assert.deepEqual(log, [0]);
  tw.update(0.5);
  assert.deepEqual(log, [0, 0.5]);
  tw.clear();
  tw.update(1);
  assert.deepEqual(log, [0, 0.5]);
});

test('clear + add inside the final onUpdate keeps the new tween and skips onDone', () => {
  const tw = new Tweens();
  let done = 0;
  tw.add(1, k => {
    if (k >= 1) {
      tw.clear();
      tw.add(1, () => {});
    }
  }, () => done++);
  tw.update(1);
  assert.equal(tw.busy, true);
  assert.equal(done, 0);
});
