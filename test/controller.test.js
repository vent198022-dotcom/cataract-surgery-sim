import { test } from 'node:test';
import assert from 'node:assert/strict';
import { StepController } from '../src/core/controller.js';
import { ROUTES } from '../src/core/routes.js';

function setup() {
  const log = [];
  const steps = {};
  for (const id of new Set([...ROUTES.classic, ...ROUTES.femto])) {
    steps[id] = {
      id,
      view: 'microscope',
      workY: 9,
      done: false,
      enter() { log.push(`enter:${id}`); },
      exit() { log.push(`exit:${id}`); },
      update() {},
      pointerDown(p) { log.push(`down:${id}:${p.x}`); },
      pointerMove() {},
      pointerUp() {},
      isComplete() { return this.done; },
      skip: s => { s.visited = [...(s.visited ?? []), id]; },
      demoPath: () => [],
    };
  }
  const applied = [];
  const ctx = { eye: { applyState: s => applied.push(s) } };
  let changes = 0;
  const c = new StepController({ steps, ctx, onChange: () => changes++ });
  return { c, steps, log, applied, ctx, changes: () => changes };
}

test('goTo rebuilds state from the skips of earlier steps', () => {
  const { c, applied, ctx } = setup();
  c.goTo(3);
  assert.equal(c.step.id, 'chop');
  assert.deepEqual(c.state.visited, ['intro', 'incision', 'capsulorhexis']);
  assert.equal(ctx.state, c.state);
  assert.equal(applied.at(-1), c.state);
});

test('next / prev / restart exit and enter steps', () => {
  const { c, log } = setup();
  c.goTo(0);
  c.next();
  c.prev();
  c.restart();
  assert.deepEqual(log, ['enter:intro', 'exit:intro', 'enter:incision', 'exit:incision', 'enter:intro', 'exit:intro', 'enter:intro']);
});

test('femto route uses its own steps', () => {
  const { c } = setup();
  c.setRoute('femto');
  c.goTo(1);
  assert.equal(c.step.id, 'laser');
  assert.equal(c.state.route, 'femto');
});

test('pointer events reach the current step, but not while demoing', () => {
  const { c, steps, log } = setup();
  c.goTo(1);
  c.pointer('down', { x: 5, y: 9, z: 0 });
  assert.ok(log.includes('down:incision:5'));
  steps.incision.demoPath = () => [{ t: 0, type: 'down', x: 7, z: 0 }];
  c.startDemo(false);
  c.pointer('down', { x: 6, y: 9, z: 0 });
  c.update(0.1);
  assert.ok(!log.includes('down:incision:6'));
  assert.ok(log.includes('down:incision:7'));
});

test('completion change triggers onChange', () => {
  const { c, steps, changes } = setup();
  c.goTo(1);
  const before = changes();
  steps.incision.done = true;
  c.update(0.016);
  assert.equal(c.complete, true);
  assert.equal(changes(), before + 1);
});

test('demo all walks every step and stops at done', () => {
  const { c, steps } = setup();
  for (const s of Object.values(steps)) s.done = true;
  c.startDemo(true);
  for (let i = 0; i < 40; i++) c.update(0.5);
  assert.equal(c.step.id, 'done');
  assert.equal(c.demoing, false);
});
