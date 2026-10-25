// 補齊步驟介面的預設值；各步驟只需覆寫用得到的部分
export function baseStep(def) {
  return {
    view: 'microscope',
    workY: 9.2,
    enter() {},
    exit() {},
    update() {},
    pointerDown() {},
    pointerMove() {},
    pointerUp() {},
    isComplete() { return false; },
    skip() {},
    demoPath() { return []; },
    ...def,
  };
}

export function lerp3(a, b, k) {
  return { x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k, z: a.z + (b.z - a.z) * k };
}
