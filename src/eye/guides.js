import * as THREE from 'three';

// 引導線與標記點：不做深度測試，永遠畫在最上層
const guideMat = new THREE.MeshBasicMaterial({ color: 0x2ad1ff, transparent: true, depthTest: false });
const progressMat = new THREE.MeshBasicMaterial({ color: 0x00e08a, transparent: true, depthTest: false });
const markerMat = new THREE.MeshBasicMaterial({ color: 0x2ad1ff, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthTest: false });

export const circleAt = radius => t => ({ x: radius * Math.cos(t * Math.PI * 2), z: radius * Math.sin(t * Math.PI * 2) });
export const lineAt = (a, b) => t => ({ x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t });

function sample(pointAt, t0, t1, y, n = 4) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const q = pointAt(t0 + ((t1 - t0) * i) / n);
    pts.push(new THREE.Vector3(q.x, y, q.z));
  }
  return pts;
}

function tube(points, radius, material) {
  const mesh = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), points.length * 2, radius, 6, false), material);
  mesh.renderOrder = 10;
  return mesh;
}

export function createDashedPath(pointAt, y, dashes = 24) {
  const group = new THREE.Group();
  for (let i = 0; i < dashes; i++) group.add(tube(sample(pointAt, i / dashes, (i + 0.55) / dashes, y), 0.06, guideMat));
  return group;
}

export function createProgressPath(pointAt, y, bins) {
  const object = new THREE.Group();
  const segments = [];
  for (let i = 0; i < bins; i++) {
    const seg = tube(sample(pointAt, i / bins, (i + 1) / bins, y), 0.1, progressMat);
    seg.visible = false;
    segments.push(seg);
    object.add(seg);
  }
  return {
    object,
    setHits(hits) { hits.forEach((h, i) => { segments[i].visible = h; }); },
    clear() { for (const s of segments) s.visible = false; },
  };
}

export function createMarker(p) {
  const mesh = new THREE.Mesh(new THREE.RingGeometry(0.45, 0.8, 40), markerMat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set(p.x, p.y + 0.1, p.z);
  mesh.renderOrder = 11;
  return mesh;
}
