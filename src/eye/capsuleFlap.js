import * as THREE from 'three';
import { CAPSULE_OPENING } from './anatomy.js';
import { flapVertex } from './flapMath.js';

const RINGS = 12;
const SEGS = 96;

// 撕囊時的前囊片：一片極薄的極座標網格，已撕開的部分會往中心折起。
// 回傳的 mesh 是外層 Group（可整體移動、縮放、顯示／隱藏），內含實際的網格。
export function createCapsuleFlap(material) {
  const count = 1 + RINGS * SEGS;
  const positions = new Float32Array(count * 3);
  const index = [];
  const at = (ring, seg) => 1 + (ring - 1) * SEGS + (seg % SEGS);
  for (let i = 0; i < SEGS; i++) index.push(0, at(1, i), at(1, i + 1));
  for (let j = 1; j < RINGS; j++) {
    for (let i = 0; i < SEGS; i++) {
      const a = at(j, i), b = at(j, i + 1), c = at(j + 1, i), d = at(j + 1, i + 1);
      index.push(a, c, b, b, c, d);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setIndex(index);

  const surface = new THREE.Mesh(geometry, material);
  surface.userData.layerId = 'capsule';
  surface.frustumCulled = false;  // 頂點會變動，包圍球不可靠

  // three 先依「上層 Group 的 renderOrder」排序透明物件；與 capsuleDisc 同為 4.5，才畫在紅反射（4）之上
  const mesh = new THREE.Group();
  mesh.renderOrder = 4.5;
  mesh.add(surface);
  mesh.visible = false;

  function update(tear, peel = 0, grip = null) {
    const set = (k, v) => { positions[k * 3] = v.x; positions[k * 3 + 1] = v.y; positions[k * 3 + 2] = v.z; };
    set(0, flapVertex(0, 0, tear, peel, grip));
    for (let j = 1; j <= RINGS; j++) {
      const r = (j / RINGS) * CAPSULE_OPENING;
      for (let i = 0; i < SEGS; i++) set(at(j, i), flapVertex(r, (i / SEGS) * Math.PI * 2, tear, peel, grip));
    }
    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();
  }

  function reset() {
    update({ dir: 1, angle: 0 }, 0);
    mesh.position.set(0, 0, 0);
    mesh.scale.setScalar(1);
  }

  reset();
  return { mesh, update, reset };
}
