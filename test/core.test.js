import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { ROUTES, otherRoute } from '../src/core/routes.js';
import { createInitialState } from '../src/core/state.js';
import { SKIPS } from '../src/core/skips.js';

function loadContent() {
  const sandbox = { window: {} };
  vm.runInNewContext(readFileSync(new URL('../白內障手術模擬/content.js', import.meta.url), 'utf8'), sandbox);
  return sandbox.window.CONTENT;
}

test('initial state: eye untouched', () => {
  const s = createInitialState('femto');
  assert.equal(s.route, 'femto');
  assert.deepEqual(s.incisions, { main: false, side: false });
  assert.equal(s.capsuleOpen, false);
  assert.equal(s.laserDone, false);
  assert.equal(s.nucleusSplit, 0);
  assert.equal(s.nucleusRotation, null);
  assert.deepEqual(s.pieces, [true, true, true, true]);
  assert.equal(s.cortex, true);
  assert.equal(s.iol, false);
});

test('routes start with intro and end with done', () => {
  for (const ids of Object.values(ROUTES)) {
    assert.equal(ids[0], 'intro');
    assert.equal(ids.at(-1), 'done');
  }
  assert.equal(otherRoute('classic'), 'femto');
  assert.equal(otherRoute('femto'), 'classic');
});

test('every step has a skip', () => {
  for (const ids of Object.values(ROUTES)) for (const id of ids) assert.equal(typeof SKIPS[id], 'function', id);
});

for (const route of Object.keys(ROUTES)) {
  test(`skipping every ${route} step ends with an IOL`, () => {
    const s = createInitialState(route);
    for (const id of ROUTES[route]) SKIPS[id](s);
    assert.deepEqual(s.incisions, { main: true, side: true });
    assert.equal(s.capsuleOpen, true);
    assert.equal(s.nucleusSplit, 2);
    assert.deepEqual(s.pieces, [false, false, false, false]);
    assert.equal(s.cortex, false);
    assert.equal(s.iol, true);
    assert.equal(s.laserDone, route === 'femto');
  });
}

test('content covers every step, layer and hint', () => {
  const c = loadContent();
  for (const ids of Object.values(ROUTES)) {
    for (const id of ids) {
      assert.ok(c.steps[id]?.title, `title ${id}`);
      assert.ok(c.steps[id].text.length > 0, `text ${id}`);
    }
  }
  for (const id of ['cornea', 'anteriorChamber', 'iris', 'capsule', 'cortex', 'nucleus', 'zonules', 'ciliary', 'vitreous', 'retina', 'choroid', 'sclera', 'opticNerve', 'iol']) {
    assert.ok(c.layers[id]?.name && c.layers[id].desc, `layer ${id}`);
  }
  for (const key of ['followLine', 'followCircle', 'moveToMarker', 'moveToPiece', 'grabDisc', 'pushInjector', 'cleared', 'chopOther', 'stepDone', 'inspect', 'bevel', 'tearTooWide', 'closeLoop', 'chopFromEdge']) assert.ok(c.hints[key], key);
  for (const key of ['prev', 'restart', 'next', 'demoStep', 'demoAll', 'stop', 'labels', 'resetView', 'inspect', 'inspectDone', 'chooseRoute', 'otherRoute', 'before', 'after', 'cloudy', 'noWebGL', 'insetLabel', 'streetSign', 'bevelTitle', 'bevelAngle', 'bevelCenter', 'bevelLimbus']) assert.ok(c.ui[key], key);
  assert.ok(c.routes.classic.name && c.routes.femto.name);
  assert.ok(c.routeNotes.femtoPhaco);
});
