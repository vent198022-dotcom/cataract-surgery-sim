import * as THREE from 'three';

// 引導線與標記點：不做深度測試，永遠畫在最上層
const guideMat = new THREE.MeshBasicMaterial({ color: 0x2ad1ff, transparent: true, depthTest: false });
const progressMat = new THREE.MeshBasicMaterial({ color: 0x00e08a, transparent: true, depthTest: false });
// 撕囊的白色撕裂邊緣
export const tornEdgeMat = new THREE.MeshBasicMaterial({ color: 0xf4f8ff, transparent: true, depthTest: false });
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

export function createProgressPath(pointAt, y, bins, material = progressMat) {
  const object = new THREE.Group();
  const segments = [];
  for (let i = 0; i < bins; i++) {
    const seg = tube(sample(pointAt, i / bins, (i + 1) / bins, y), 0.1, material);
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

// 自由撕囊的撕裂邊緣：一條穿過一串 3D 點的白色圓管，路徑增長時用 set(points) 重建（舊幾何會釋放）
export function createPathEdge(material = tornEdgeMat, tubeRadius = 0.07) {
  const object = new THREE.Group();
  let mesh = null;
  const clear = () => {
    if (!mesh) return;
    object.remove(mesh);
    mesh.geometry.dispose();
    mesh = null;
  };
  return {
    object,
    clear,
    set(points) {
      clear();
      if (points.length < 2) return;
      const curve = new THREE.CatmullRomCurve3(points, false, 'centripetal');
      const segments = Math.min(600, Math.max(8, points.length * 3));
      mesh = new THREE.Mesh(new THREE.TubeGeometry(curve, segments, tubeRadius, 6, false), material);
      mesh.renderOrder = 10;
      mesh.frustumCulled = false;
      object.add(mesh);
    },
  };
}

export function createMarker(p) {
  const mesh = new THREE.Mesh(new THREE.RingGeometry(0.45, 0.8, 40), markerMat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set(p.x, p.y + 0.1, p.z);
  mesh.renderOrder = 11;
  return mesh;
}
