import * as THREE from 'three';
import { nucleusTopY } from './anatomy.js';

const TUBE_RADIUS = 0.17;  // 比劈核器桿身（0.12）粗，拉的時候裂縫從桿身兩側露出來
const RADIAL = 6;
const crackMat = new THREE.MeshBasicMaterial({ color: 0x3d2610 });  // 不透明，保持深度寫入

// 沿核表面的裂縫：照一串世界座標點（只用 x / z）長出，掛在 parent（核群組）上跟著核轉。
// setPoints(worldPoints) 在點數增加時重建圓管（至少 2 點才畫）
export function createPathCrack(parent) {
  const mesh = new THREE.Mesh(new THREE.BufferGeometry(), crackMat);
  mesh.renderOrder = 3;
  mesh.visible = false;
  parent.add(mesh);
  let built = 0;
  return {
    mesh,
    setPoints(worldPoints) {
      if (worldPoints.length === built) return;
      built = worldPoints.length;
      if (worldPoints.length < 2) { mesh.visible = false; return; }
      parent.updateWorldMatrix(true, false);
      const local = worldPoints.map(p => {
        const v = parent.worldToLocal(new THREE.Vector3(p.x, 9, p.z));
        return new THREE.Vector3(v.x, nucleusTopY(Math.hypot(v.x, v.z)) + 0.03, v.z);
      });
      mesh.geometry.dispose();
      mesh.geometry = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(local), Math.max(8, local.length * 4), TUBE_RADIUS, RADIAL, false);
      mesh.visible = true;
    },
    dispose() {
      parent.remove(mesh);
      mesh.geometry.dispose();
    },
  };
}
