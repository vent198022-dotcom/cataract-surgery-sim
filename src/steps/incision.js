import { baseStep, lerp3 } from './common.js';
import { SKIPS } from '../core/skips.js';
import { Tweens, ease } from '../core/tween.js';
import { dist2D, clampToDisk } from '../core/geometry.js';
import { dragEvents, linePoints } from '../core/demo.js';
import { INCISIONS } from '../eye/anatomy.js';
import { createMarker } from '../eye/guides.js';

const BLADE_Y = 11.4;
const REST = { x: 6, z: 4.2 };  // 起始位置要在直立手機畫面內看得到
const HIT_RADIUS = 1.0;
const AIM = { x: 0, y: 7, z: 0 };

export function createIncisionStep({ scene, eye, tools, ui, content }) {
  const blade = tools.blade;
  const tweens = new Tweens();
  const markers = { main: createMarker(INCISIONS.main), side: createMarker(INCISIONS.side) };
  let state, dragging = false, busy = false, time = 0;

  const pending = () => Object.keys(INCISIONS).filter(k => !state.incisions[k]);
  const setTip = p => blade.setTip(p.x, p.y, p.z);

  // 刀尖刺入切口 → 切口出現 → 退回眼外
  function cut(key) {
    busy = true;
    dragging = false;
    const inc = INCISIONS[key];
    const len = Math.hypot(inc.x, inc.z);
    const ux = inc.x / len, uz = inc.z / len;
    const from = { x: blade.tip.x, y: blade.tip.y, z: blade.tip.z };
    const inside = { x: inc.x - ux * 1.2, y: inc.y - 0.35, z: inc.z - uz * 1.2 };
    const out = { x: inc.x + ux * 2.5, y: BLADE_Y, z: inc.z + uz * 2.5 };
    tweens.add(0.45, k => setTip(lerp3(from, inside, ease(k))), () => {
      state.incisions[key] = true;
      eye.applyState(state);
      markers[key].visible = false;
      tweens.add(0.35, k => setTip(lerp3(inside, out, ease(k))), () => {
        busy = false;
        if (pending().length === 0) ui.showHint(content.hints.stepDone);
      });
    });
  }

  function move(p) {
    const c = clampToDisk(p.x, p.z, 14);
    blade.setTip(c.x, BLADE_Y, c.z);
    const key = pending().find(k => dist2D(c.x, c.z, INCISIONS[k].x, INCISIONS[k].z) < HIT_RADIUS);
    if (key) cut(key);
  }

  return baseStep({
    id: 'incision',
    gripTool: blade,  // 觸控相對移動時跟著手指平移的器械
    workY: BLADE_Y,
    enter(ctx) {
      state = ctx.state;
      dragging = false;
      busy = false;
      time = 0;
      tweens.clear();
      for (const [k, m] of Object.entries(markers)) {
        m.visible = !state.incisions[k];
        scene.add(m);
      }
      blade.aim(AIM).show();
      blade.setTip(REST.x, BLADE_Y, REST.z);
    },
    exit() {
      tweens.clear();
      blade.hide();
      for (const m of Object.values(markers)) scene.remove(m);
    },
    update(dt) {
      time += dt;
      tweens.update(dt);
      const s = 1 + 0.25 * Math.sin(time * 5);
      for (const m of Object.values(markers)) m.scale.set(s, s, s);
    },
    pointerDown(p) { if (busy) return; dragging = true; move(p); },
    // main.js 只在按住時轉送 move；刀子退出後若仍按著，直接接續拖曳，不必重按
    pointerMove(p) { if (busy) return; dragging = true; move(p); },
    pointerUp() {
      if (dragging && pending().length > 0) ui.showHint(content.hints.moveToMarker);
      dragging = false;
    },
    isComplete() { return !busy && pending().length === 0; },
    skip: SKIPS.incision,
    demoPath() {
      return [
        ...dragEvents(linePoints(REST, INCISIONS.main, 12), 0.3, 1.4),
        ...dragEvents(linePoints({ x: 7.5, z: -1.5 }, INCISIONS.side, 12), 3.0, 1.4),
      ];
    },
  });
}
