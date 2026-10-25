import { baseStep } from './common.js';
import { SKIPS } from '../core/skips.js';
import { INCISIONS } from '../eye/anatomy.js';
import { BASE_CORTEX_OPACITY } from '../eye/materials.js';

const DURATION = 4.5;

// 自動播放：灌注抽吸頭在囊袋內繞圈，皮質逐漸消失
export function createCortexStep({ eye, tools, ui, content }) {
  const ia = tools.ia;
  let state, t, done;

  return baseStep({
    id: 'cortex',
    workY: 9.0,
    enter(ctx) {
      state = ctx.state;
      t = 0;
      done = false;
      ia.pivot(INCISIONS.main).show();
      ia.setTip(2.8, 8.9, 0);
    },
    exit() { ia.hide(); },
    update(dt) {
      if (done) return;
      t = Math.min(DURATION, t + dt);
      const k = t / DURATION;
      const a = k * Math.PI * 3;
      const r = 2.8 - 0.8 * Math.sin(k * Math.PI);
      ia.setTip(r * Math.cos(a), 8.7 + 0.3 * Math.cos(a * 2), r * Math.sin(a));
      eye.setCortexOpacity(BASE_CORTEX_OPACITY * (1 - k));
      if (k >= 1) {
        state.cortex = false;
        eye.applyState(state);
        done = true;
        ui.showHint(content.hints.stepDone);
      }
    },
    isComplete() { return done; },
    skip: SKIPS.cortex,
  });
}
