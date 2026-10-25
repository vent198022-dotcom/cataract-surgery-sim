import { ROUTES } from './routes.js';
import { createInitialState } from './state.js';
import { createDemoPlayer } from './demo.js';

const HANDLERS = { down: 'pointerDown', move: 'pointerMove', up: 'pointerUp' };
const ADVANCE_DELAY = 1.2;  // 自動示範：步驟完成後停留秒數
const STUCK_TIMEOUT = 5;    // 自動示範：播完仍未完成時，最多再等幾秒

export class StepController {
  constructor({ steps, ctx, onChange = () => {} }) {
    this.steps = steps;
    this.ctx = ctx;
    this.onChange = onChange;
    this.route = 'classic';
    this.index = 0;
    this.state = createInitialState(this.route);
    this.current = null;
    this.complete = false;
    this.demo = null;
    this.demoAll = false;
    this.waited = 0;
  }

  get ids() { return ROUTES[this.route]; }
  get step() { return this.current; }
  get demoing() { return this.demo !== null; }

  setRoute(route) { this.route = route; }

  goTo(index) {
    this.current?.exit(this.ctx);
    this.index = Math.max(0, Math.min(index, this.ids.length - 1));
    const state = createInitialState(this.route);
    for (let i = 0; i < this.index; i++) this.steps[this.ids[i]].skip(state);
    this.state = state;
    this.ctx.state = state;
    this.ctx.eye.applyState(state);
    this.current = this.steps[this.ids[this.index]];
    this.complete = false;
    this.waited = 0;
    this.current.enter(this.ctx);
    this.onChange(this);
  }

  next() { this.stopDemo(); if (this.index < this.ids.length - 1) this.goTo(this.index + 1); }
  prev() { this.stopDemo(); if (this.index > 0) this.goTo(this.index - 1); }
  restart() { this.stopDemo(); this.goTo(this.index); }

  startDemo(all = false) {
    this.demoAll = all;
    this.goTo(all ? 1 : this.index);
    this.playCurrent();
  }

  stopDemo() {
    if (!this.demo && !this.demoAll) return;
    this.demo = null;
    this.demoAll = false;
    this.onChange(this);
  }

  playCurrent() {
    const events = this.current.demoPath(this.ctx);
    this.demo = createDemoPlayer(events, (type, e) => this.dispatch(type, { x: e.x, y: this.current.workY, z: e.z }));
    this.waited = 0;
    this.onChange(this);
  }

  pointer(type, point) {
    if (this.demo) return;
    this.dispatch(type, point);
  }

  dispatch(type, point) {
    this.current?.[HANDLERS[type]](point, this.ctx);
  }

  update(dt) {
    if (!this.current) return;
    this.demo?.update(dt);
    this.current.update(dt, this.ctx);
    const complete = this.current.isComplete();
    if (complete !== this.complete) {
      this.complete = complete;
      this.onChange(this);
    }
    if (!this.demo?.finished) return;
    this.waited += dt;
    if (!(complete ? this.waited > ADVANCE_DELAY : this.waited > STUCK_TIMEOUT)) return;
    if (!this.demoAll) { this.stopDemo(); return; }
    const last = this.ids.length - 1;
    this.goTo(this.index + 1);
    if (this.index === last) this.stopDemo();
    else this.playCurrent();
  }
}
