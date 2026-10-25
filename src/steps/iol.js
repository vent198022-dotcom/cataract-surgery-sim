import { baseStep, lerp3 } from './common.js';
import { SKIPS } from '../core/skips.js';
import { Tweens, ease } from '../core/tween.js';
import { dist2D, clampToDisk } from '../core/geometry.js';
import { dragEvents, linePoints } from '../core/demo.js';
import { INCISIONS, IOL_Y } from '../eye/anatomy.js';

const WORK_Y = 11.0;
const REST = { x: 6.6, z: 2.6 };  // 起始位置要在直立手機畫面內看得到
const AIM = { x: 0, y: 6, z: 0 };
const REACH = 1.2;
const CORNEA_EDGE = 5.6;  // 推注器尖端不能穿過角膜中央

export function createIolStep({ eye, tools, ui, content }) {
  const injector = tools.injector;
  const tweens = new Tweens();
  let state, dragging, inserting, done;
  const setTip = p => injector.setTip(p.x, p.y, p.z);

  // 推注器抵達切口 → 摺疊的人工水晶體推入囊袋並展開 → 推注器退出
  function insert() {
    inserting = true;
    dragging = false;
    const main = INCISIONS.main;
    const from = { x: injector.tip.x, y: injector.tip.y, z: injector.tip.z };
    const mouth = { x: main.x - 0.6, y: main.y - 0.3, z: main.z };
    const rest = { x: REST.x, y: WORK_Y, z: REST.z };
    const center = { x: 0, y: IOL_Y, z: 0 };
    tweens.add(0.6, k => setTip(lerp3(from, mouth, ease(k))), () => {
      eye.iol.group.visible = true;
      tweens.add(1.8, k => {
        const p = lerp3(mouth, center, ease(Math.min(1, k * 1.6)));
        eye.iol.setPose(p.x, p.y, p.z, (k - 0.45) / 0.55);
      }, () => {
        state.iol = true;
        eye.applyState(state);
        tweens.add(0.6, k => setTip(lerp3(mouth, rest, ease(k))), () => {
          done = true;
          ui.showHint(content.hints.stepDone);
        });
      });
    });
  }

  function move(p) {
    let c = clampToDisk(p.x, p.z, 14);
    const r = Math.hypot(c.x, c.z);
    if (r < CORNEA_EDGE) c = r > 0 ? { x: (c.x / r) * CORNEA_EDGE, z: (c.z / r) * CORNEA_EDGE } : { x: CORNEA_EDGE, z: 0 };
    injector.setTip(c.x, WORK_Y, c.z);
    if (dist2D(c.x, c.z, INCISIONS.main.x, INCISIONS.main.z) < REACH) insert();
  }

  return baseStep({
    id: 'iol',
    gripTool: injector,  // 觸控時手指拖的是這支器械的握柄
    workY: WORK_Y,
    enter(ctx) {
      state = ctx.state;
      dragging = inserting = done = false;
      tweens.clear();
      injector.aim(AIM).show();
      injector.setTip(REST.x, WORK_Y, REST.z);
    },
    exit() {
      tweens.clear();
      injector.hide();
    },
    update(dt) { tweens.update(dt); },
    pointerDown(p) {
      if (inserting) return;
      dragging = true;
      move(p);
    },
    // main.js 只在按住時轉送 move；推注器退出後若仍按著，直接接續拖曳，不必重按
    pointerMove(p) { if (inserting) return; dragging = true; move(p); },
    pointerUp() {
      if (dragging && !inserting) ui.showHint(content.hints.pushInjector);
      dragging = false;
    },
    isComplete() { return done; },
    skip: SKIPS.iol,
    demoPath() { return dragEvents(linePoints(REST, { x: INCISIONS.main.x + 0.3, z: 0 }, 12), 0.3, 1.5); },
  });
}
