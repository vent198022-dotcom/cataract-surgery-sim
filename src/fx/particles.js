import * as THREE from 'three';

// 乳化時從碎塊飛向探頭的細小顆粒
export class Particles {
  constructor(scene, max = 120) {
    this.max = max;
    this.pos = new Float32Array(max * 3).fill(-1000);
    this.target = new Float32Array(max * 3);
    this.life = new Float32Array(max);
    this.next = 0;
    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.points = new THREE.Points(this.geometry, new THREE.PointsMaterial({ color: 0xf3d27a, size: 0.22, transparent: true, opacity: 0.9, depthTest: false }));
    this.points.renderOrder = 20;
    this.points.frustumCulled = false;
    scene.add(this.points);
  }

  emit(from, to, count = 2) {
    for (let n = 0; n < count; n++) {
      const i = this.next;
      this.next = (this.next + 1) % this.max;
      this.pos[i * 3] = from.x + (Math.random() - 0.5) * 0.8;
      this.pos[i * 3 + 1] = from.y + (Math.random() - 0.5) * 0.4;
      this.pos[i * 3 + 2] = from.z + (Math.random() - 0.5) * 0.8;
      this.target[i * 3] = to.x;
      this.target[i * 3 + 1] = to.y;
      this.target[i * 3 + 2] = to.z;
      this.life[i] = 0.6;
    }
  }

  update(dt) {
    const k = Math.min(1, dt * 6);
    for (let i = 0; i < this.max; i++) {
      if (this.life[i] <= 0) continue;
      this.life[i] -= dt;
      for (let a = 0; a < 3; a++) this.pos[i * 3 + a] += (this.target[i * 3 + a] - this.pos[i * 3 + a]) * k;
      if (this.life[i] <= 0) this.pos[i * 3 + 1] = -1000;
    }
    this.geometry.attributes.position.needsUpdate = true;
  }
}
