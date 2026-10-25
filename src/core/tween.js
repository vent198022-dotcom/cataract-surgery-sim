// 簡單補間動畫；每個步驟各自擁有一組，離開步驟時 clear()
export const ease = k => (k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2);

export class Tweens {
  constructor() { this.list = []; }

  add(duration, onUpdate, onDone) {
    const tween = { t: 0, duration, onUpdate, onDone };
    this.list.push(tween);
    onUpdate(0);
    return tween;
  }

  update(dt) {
    for (const tween of [...this.list]) {
      if (!this.list.includes(tween)) continue;
      tween.t = Math.min(tween.duration, tween.t + dt);
      const k = tween.duration > 0 ? tween.t / tween.duration : 1;
      tween.onUpdate(k);
      if (k >= 1) {
        // onUpdate 內可能已 clear()（或再 add()），此時不可誤刪其他補間，也不再呼叫 onDone
        const i = this.list.indexOf(tween);
        if (i < 0) continue;
        this.list.splice(i, 1);
        tween.onDone?.();
      }
    }
  }

  clear() { this.list.length = 0; }

  get busy() { return this.list.length > 0; }
}
