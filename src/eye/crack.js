import * as THREE from 'three';
import { nucleusTopY } from './anatomy.js';

const SAMPLES = 24;
const TUBE_RADIUS = 0.07;
const RADIAL = 6;
const crackMat = new THREE.MeshBasicMaterial({ color: 0x3d2610 });  // 不透明，保持深度寫入

// 沿核表面的裂縫：worldA → worldB（只用 x / z），掛在 parent（核群組）上跟著核轉，
// setProgress(k) 以 drawRange 從 A 端逐段長出
export function createCrack(parent, worldA, worldB) {
  parent.updateWorldMatrix(true, false);
  const a = parent.worldToLocal(new THREE.Vector3(worldA.x, 9, worldA.z));
  const b = parent.worldToLocal(new THREE.Vector3(worldB.x, 9, worldB.z));
  const points = [];
  for (let i = 0; i <= SAMPLES; i++) {
    const t = i / SAMPLES;
    const x = a.x + (b.x - a.x) * t, z = a.z + (b.z - a.z) * t;
    points.push(new THREE.Vector3(x, nucleusTopY(Math.hypot(x, z)) + 0.03, z));
  }
  const geometry = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), SAMPLES, TUBE_RADIUS, RADIAL, false);
  const mesh = new THREE.Mesh(geometry, crackMat);
  mesh.renderOrder = 3;
  parent.add(mesh);
  const api = {
    mesh,
    setProgress(k) {
      const n = Math.floor(SAMPLES * Math.min(1, Math.max(0, k)));
      geometry.setDrawRange(0, n * RADIAL * 6);
    },
    dispose() {
      parent.remove(mesh);
      geometry.dispose();
    },
  };
  api.setProgress(0);
  return api;
}
