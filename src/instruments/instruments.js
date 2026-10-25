import * as THREE from 'three';
import { shaftDirection } from '../core/geometry.js';

// 每支器械的本地座標：尖端在原點，桿身往 +Y 延伸
const UP = new THREE.Vector3(0, 1, 0);
const STEEL = 0xc9d1d9;
const dir = new THREE.Vector3();

const mat = (color, metal = false) =>
  new THREE.MeshStandardMaterial({ color, metalness: metal ? 0.8 : 0.1, roughness: metal ? 0.3 : 0.5 });

function rod(radius, from, to, material) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, to - from, 16), material);
  mesh.position.y = (from + to) / 2;
  return mesh;
}

function blade() {
  const g = new THREE.Group();
  const shape = new THREE.Shape([[0, 0], [0.55, 1.4], [0.2, 1.8], [-0.2, 1.8], [-0.55, 1.4]].map(([x, y]) => new THREE.Vector2(x, y)));
  g.add(new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { depth: 0.05, bevelEnabled: false }), mat(STEEL, true)));
  g.add(rod(0.2, 1.8, 7, mat(STEEL, true)), rod(0.6, 7, 22, mat(0x2f6db5)));
  return g;
}

function forceps() {
  const g = new THREE.Group();
  const steel = mat(STEEL, true);
  for (const side of [-1, 1]) {
    const prong = rod(0.08, 0, 6, steel);
    prong.position.x = side * 0.15;
    prong.rotation.z = side * 0.03;
    g.add(prong);
  }
  g.add(rod(0.45, 6, 22, steel));
  return g;
}

function probe() {
  const g = new THREE.Group();
  g.add(rod(0.3, 0, 1.2, mat(STEEL, true)), rod(0.5, 1.2, 6, mat(0x9fd3e6)), rod(1.2, 6, 24, mat(0xe8eef3)));
  return g;
}

function chopper() {
  const g = new THREE.Group();
  const steel = mat(STEEL, true);
  const hook = rod(0.09, 0, 0.8, steel);
  hook.rotation.z = Math.PI / 2;
  hook.position.set(0.4, 0, 0);
  g.add(hook, rod(0.12, 0, 7, steel), rod(0.5, 7, 20, mat(0x7a8ca0)));
  return g;
}

function ia() {
  const g = new THREE.Group();
  g.add(rod(0.3, 0, 1, mat(STEEL, true)), rod(0.45, 1, 6, mat(0xd9e6f2)), rod(1.0, 6, 22, mat(0xb0bec5)));
  return g;
}

function injector() {
  const g = new THREE.Group();
  g.add(rod(0.35, 0, 2.5, mat(0xf5f5f5)), rod(1.0, 2.5, 14, mat(0xe0f2f1)), rod(0.4, 14, 20, mat(0x26a69a)));
  return g;
}

// 飛秒雷射接觸鏡：金屬環＋半透明鏡片與外罩（俯視時看得穿）
function femtoDock() {
  const g = new THREE.Group();
  const glass = new THREE.MeshStandardMaterial({ color: 0xcfe8ff, transparent: true, opacity: 0.15, depthWrite: false, side: THREE.DoubleSide });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(7, 0.35, 12, 64), new THREE.MeshStandardMaterial({ color: 0x8a99a8, metalness: 0.6, roughness: 0.4 }));
  ring.rotation.x = Math.PI / 2;
  const cover = new THREE.Mesh(new THREE.CylinderGeometry(4.5, 7, 8, 48, 1, true), glass);
  cover.position.y = 4;
  const lens = new THREE.Mesh(new THREE.CylinderGeometry(7, 7, 0.3, 48), glass);
  g.add(ring, cover, lens);
  g.visible = false;
  return g;
}

export class Instrument {
  constructor(object) {
    this.object = object;
    this.tip = new THREE.Vector3();
    this.anchor = new THREE.Vector3();
    this.mode = 'aim';
    this.materials = [];
    object.traverse(o => { if (o.material) this.materials.push(o.material); });
    object.visible = false;
  }

  // 桿身穿過切口 p（尖端在眼內時用）
  pivot(p) { this.mode = 'pivot'; this.anchor.set(p.x, p.y, p.z); return this; }

  // 桿身沿 p → 尖端方向往外（尖端在眼外時用）
  aim(p) { this.mode = 'aim'; this.anchor.set(p.x, p.y, p.z); return this; }

  setTip(x, y, z) {
    this.tip.set(x, y, z);
    this.object.position.copy(this.tip);
    const d = this.mode === 'pivot' ? shaftDirection(this.tip, this.anchor) : shaftDirection(this.anchor, this.tip);
    if (Math.hypot(d.x, d.y, d.z) < 0.5) return;
    this.object.quaternion.setFromUnitVectors(UP, dir.set(d.x, d.y, d.z));
  }

  show() { this.object.visible = true; this.setOpacity(1); return this; }
  hide() { this.object.visible = false; return this; }

  setOpacity(a) {
    for (const m of this.materials) {
      m.opacity = a;
      m.transparent = a < 1;
      m.needsUpdate = true;
    }
  }
}

export function createInstruments(scene) {
  const tools = {
    blade: new Instrument(blade()),
    forceps: new Instrument(forceps()),
    probe: new Instrument(probe()),
    chopper: new Instrument(chopper()),
    ia: new Instrument(ia()),
    injector: new Instrument(injector()),
    femto: femtoDock(),
  };
  for (const t of Object.values(tools)) scene.add(t.object ?? t);
  return tools;
}
