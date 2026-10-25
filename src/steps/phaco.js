import * as THREE from 'three';
import { baseStep } from './common.js';
import { SKIPS } from '../core/skips.js';
import { clampToDisk } from '../core/geometry.js';
import { linePoints } from '../core/demo.js';
import { INCISIONS } from '../eye/anatomy.js';

const WORK_Y = 9.0;
const REST = { x: 3.2, z: 0 };
const CHOPPER_IDLE = { x: 0, y: 9.2, z: -2.6 };
const GLOW_RADIUS = 2.2;
const SUCK_RADIUS = 1.6;
const SUCK_TIME = 1.3;   // 每塊吸除所需秒數
const IDLE_HINT = 1.5;

export function createPhacoStep({ eye, tools, ui, content, particles }) {
  const { probe, chopper } = tools;
  const world = new THREE.Vector3();
  const local = new THREE.Vector3();
  let state, pressing, idle, time, progress;

  const remaining = () => state.pieces.filter(Boolean).length;
  const showCounter = () => ui.setCounter(content.hints.cleared.replace('{n}', 4 - remaining()));

  function nearestPiece() {
    let index = null, distance = Infinity;
    eye.pieces.forEach((p, i) => {
      if (!state.pieces[i]) return;
      p.outer.getWorldPosition(world);
      const d = Math.hypot(world.x - probe.tip.x, world.z - probe.tip.z);
      if (d < distance) { distance = d; index = i; }
    });
    return { index, distance };
  }

  function move(p) {
    const c = clampToDisk(p.x, p.z, 4.2);
    probe.setTip(c.x, WORK_Y, c.z);
  }

  // 按住且夠近：碎塊被拉向探頭、縮小、冒出顆粒，滿了就消失
  function aspirate(index, dt) {
    const piece = eye.pieces[index];
    progress[index] += dt / SUCK_TIME;
    local.copy(probe.tip);
    eye.nucleusGroup.worldToLocal(local);
    piece.outer.position.lerp(local, Math.min(1, dt * 3));
    piece.outer.scale.setScalar(Math.max(0.1, 1 - 0.9 * progress[index]));
    piece.outer.getWorldPosition(world);
    particles.emit(world, probe.tip);
    if (progress[index] >= 1) {
      state.pieces[index] = false;
      eye.setPiecePresent(index, false);
      showCounter();
      if (remaining() === 0) ui.showHint(content.hints.stepDone);
    }
  }

  return baseStep({
    id: 'phaco',
    workY: WORK_Y,
    enter(ctx) {
      state = ctx.state;
      pressing = false;
      idle = 0;
      time = 0;
      progress = [0, 0, 0, 0];
      probe.pivot(INCISIONS.main).show();
      probe.setTip(REST.x, WORK_Y, REST.z);
      chopper.pivot(INCISIONS.side).show();
      chopper.setTip(CHOPPER_IDLE.x, CHOPPER_IDLE.y, CHOPPER_IDLE.z);
      chopper.setOpacity(0.35);
      showCounter();
    },
    exit() {
      probe.hide();
      chopper.hide();
      ui.setCounter(null);
    },
    update(dt) {
      time += dt;
      const { index, distance } = nearestPiece();
      eye.pieces.forEach((_, i) => eye.setGlow(i, i === index && distance < GLOW_RADIUS ? 0.6 + 0.4 * Math.sin(time * 8) : 0));
      if (index === null || !pressing) return;
      if (distance < SUCK_RADIUS) {
        idle = 0;
        aspirate(index, dt);
      } else if ((idle += dt) > IDLE_HINT) {
        idle = 0;
        ui.showHint(content.hints.moveToPiece);
      }
    },
    pointerDown(p) { pressing = true; move(p); },
    pointerMove(p) { if (pressing) move(p); },
    pointerUp() { pressing = false; },
    isComplete() { return remaining() === 0; },
    skip: SKIPS.phaco,
    demoPath() {
      const events = [{ t: 0.3, type: 'down', ...REST }];
      let t = 0.3, from = REST;
      eye.pieces.forEach((p, i) => {
        if (!state.pieces[i]) return;
        p.outer.getWorldPosition(world);
        const to = { x: world.x * 0.85, z: world.z * 0.85 };
        for (const q of linePoints(from, to, 8)) {
          t += 0.08;
          events.push({ t, type: 'move', ...q });
        }
        t += SUCK_TIME + 0.6;
        from = to;
      });
      events.push({ t: t + 0.1, type: 'up', ...from });
      return events;
    },
  });
}
