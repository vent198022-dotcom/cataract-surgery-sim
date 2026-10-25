import * as THREE from 'three';

const TAU = Math.PI * 2;
const CUT_END = Math.PI * 1.5;  // 剖面模式只保留 φ ∈ [0, 1.5π]

export function inCutRegion(x, z) {
  return x < 0 && z > 0;
}

const toVec2 = profile => profile.map(([r, y]) => new THREE.Vector2(r, y));

function lathe(profile, material, phiStart, phiLength) {
  const pts = toVec2(profile);
  pts.push(pts[0].clone());
  const segments = Math.max(6, Math.round((72 * phiLength) / TAU));
  return new THREE.Mesh(new THREE.LatheGeometry(pts, segments, phiStart, phiLength), material);
}

// 剖面封面：ShapeGeometry 在 XY 平面（x=r），轉到角度 phi 的半平面 (sin φ, 0, cos φ)
function cap(profile, material, phi) {
  const mesh = new THREE.Mesh(new THREE.ShapeGeometry(new THREE.Shape(toVec2(profile))), material);
  mesh.rotation.y = phi - Math.PI / 2;
  return mesh;
}

function wedge(profile, material, start, length) {
  const group = new THREE.Group();
  group.add(lathe(profile, material, start, length));
  if (length < TAU - 1e-6) group.add(cap(profile, material, start), cap(profile, material, start + length));
  return group;
}

export function makeRevolvedPart(profile, material, { phiStart = 0, phiLength = TAU } = {}) {
  const full = wedge(profile, material, phiStart, phiLength);
  const s = Math.max(phiStart, 0);
  const e = Math.min(phiStart + phiLength, CUT_END);
  const cut = e - s > 1e-6 ? wedge(profile, material, s, e - s) : null;
  return { full, cut };
}

// 一層組織：同時持有完整版與剖面版，依模式切換
export class Part {
  constructor(id, { full, cut }) {
    this.id = id;
    this.group = new THREE.Group();
    this.full = full;
    this.cut = cut;
    this.group.add(full);
    if (cut) this.group.add(cut);
    this.group.traverse(o => { if (o.isMesh) o.userData.layerId = id; });
    this.present = true;
    this.cutaway = false;
    this.refresh();
  }

  setPresent(present) { this.present = present; this.refresh(); }
  setCutaway(on) { this.cutaway = on; this.refresh(); }

  refresh() {
    this.group.visible = this.present;
    this.full.visible = !this.cutaway;
    if (this.cut) this.cut.visible = this.cutaway;
  }
}
