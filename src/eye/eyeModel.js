import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { PROFILES, LENS, CAPSULE_OPENING, CAPSULE_Y, IOL_Y, INCISIONS, LABEL_ANCHORS } from './anatomy.js';
import { nucleusLayout } from './layout.js';
import { makeRevolvedPart, Part, inCutRegion } from './revolve.js';
import { createMaterials, BASE_CORTEX_OPACITY } from './materials.js';

const PIECE_CENTER_R = 1.3;  // 每塊核的重心離光軸距離

function tag(object, layerId) {
  object.traverse(o => { if (o.isMesh) o.userData.layerId = layerId; });
}

function makeZonules(material) {
  const build = phiMax => {
    const pts = [];
    const n = 72;
    for (let i = 0; i < n; i++) {
      const phi = (i / n) * Math.PI * 2;
      if (phi > phiMax) break;
      const s = Math.sin(phi), c = Math.cos(phi);
      for (const [r0, y0, r1, y1] of [[4.65, 8.35, 5.35, 8.6], [4.65, 7.65, 5.45, 8.05]]) {
        pts.push(new THREE.Vector3(r0 * s, y0, r0 * c), new THREE.Vector3(r1 * s, y1, r1 * c));
      }
    }
    const group = new THREE.Group();
    group.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(pts), material));
    return group;
  };
  return { full: build(Math.PI * 2), cut: build(Math.PI * 1.5) };
}

function createIol(M) {
  const group = new THREE.Group();
  const profile = [[0, 0.42], [1.5, 0.32], [3, 0.08], [3, -0.08], [1.5, -0.32], [0, -0.42]];
  const optic = new THREE.Mesh(new THREE.LatheGeometry(profile.map(([r, y]) => new THREE.Vector2(r, y)), 48), M.iol);
  const haptics = new THREE.Group();
  const curve = new THREE.CatmullRomCurve3([[2.7, 0, 1.2], [3.6, 0, 2.6], [4.4, 0, 1.0], [4.3, 0, -1.0]].map(([x, y, z]) => new THREE.Vector3(x, y, z)));
  for (const turn of [0, Math.PI]) {
    const loop = new THREE.Mesh(new THREE.TubeGeometry(curve, 32, 0.12, 8, false), M.haptic);
    loop.rotation.y = turn;
    haptics.add(loop);
  }
  group.add(optic, haptics);
  tag(group, 'iol');
  return {
    group,
    // unfold 0 = 摺疊在推注器內、1 = 完全展開
    setPose(x, y, z, unfold) {
      const u = Math.min(1, Math.max(0, unfold));
      group.position.set(x, y, z);
      optic.scale.set(0.35 + 0.65 * u, 1, 1);
      haptics.scale.setScalar(0.3 + 0.7 * u);
    },
  };
}

export function createEye(layers) {
  const M = createMaterials();
  const root = new THREE.Group();
  const parts = {};

  const addPart = (key, profile, material, layerId = key) => {
    const part = new Part(layerId, makeRevolvedPart(profile, material));
    parts[key] = part;
    root.add(part.group);
    return part;
  };
  addPart('sclera', PROFILES.sclera, M.sclera);
  addPart('choroid', PROFILES.choroid, M.choroid);
  addPart('retina', PROFILES.retina, M.retina);
  addPart('opticNerve', PROFILES.opticNerve, M.opticNerve);
  addPart('vitreous', PROFILES.vitreous, M.vitreous);
  addPart('ciliary', PROFILES.ciliary, M.ciliary);
  addPart('iris', PROFILES.iris, M.iris);
  addPart('capsuleBag', PROFILES.capsuleBag, M.capsule, 'capsule');
  addPart('capsuleDisc', PROFILES.capsuleDisc, M.capsuleDisc, 'capsule');
  addPart('cortex', PROFILES.cortex, M.cortex);
  addPart('cornea', PROFILES.cornea, M.cornea);
  parts.zonules = new Part('zonules', makeZonules(M.zonules));
  root.add(parts.zonules.group);

  // 透明層由內往外畫
  const order = { vitreous: 1, capsuleBag: 2, capsuleDisc: 2, cortex: 3, cornea: 5 };
  for (const [key, value] of Object.entries(order)) parts[key].group.traverse(o => { o.renderOrder = value; });

  // 水晶體核：四塊各自是一個旋轉體扇形；outer 放在重心，方便縮放與移動
  const nucleusGroup = new THREE.Group();
  root.add(nucleusGroup);
  const pieces = [];
  for (let q = 0; q < 4; q++) {
    const material = M.nucleus.clone();
    const { full } = makeRevolvedPart(PROFILES.nucleus, material, { phiStart: (q * Math.PI) / 2, phiLength: Math.PI / 2 });
    tag(full, 'nucleus');
    const phi = ((q + 0.5) * Math.PI) / 2;
    const dir = new THREE.Vector3(Math.sin(phi), 0, Math.cos(phi));
    const centroid = dir.clone().multiplyScalar(PIECE_CENTER_R).setY(LENS.center);
    const outer = new THREE.Group();
    full.position.copy(centroid).negate();
    outer.add(full);
    nucleusGroup.add(outer);
    pieces.push({ outer, material, dir, centroid, present: true });
  }

  const laserRing = new THREE.Mesh(new THREE.TorusGeometry(CAPSULE_OPENING, 0.05, 8, 96), M.laser);
  laserRing.rotation.x = Math.PI / 2;
  laserRing.position.y = CAPSULE_Y;
  root.add(laserRing);

  const incisionMarks = {};
  for (const [key, inc] of Object.entries(INCISIONS)) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(inc.length, 0.1, 0.22), M.incision);
    mesh.rotation.y = -(Math.atan2(inc.z, inc.x) + Math.PI / 2);  // 長邊沿角膜緣切線
    mesh.position.set(inc.x, inc.y + 0.05, inc.z);
    tag(mesh, 'cornea');
    root.add(mesh);
    incisionMarks[key] = mesh;
  }

  const iol = createIol(M);
  root.add(iol.group);

  const labels = {};
  for (const [id, [x, y, z]] of Object.entries(LABEL_ANCHORS)) {
    const el = document.createElement('div');
    el.className = 'label';
    el.textContent = layers[id].name;
    const label = new CSS2DObject(el);
    label.position.set(x, y, z);
    root.add(label);
    labels[id] = label;
  }

  const world = new THREE.Vector3();
  let cutaway = false;

  // 剖面模式下，重心落在被切掉那 1/4 的碎塊要藏起來
  function refreshPieces() {
    nucleusGroup.updateMatrixWorld(true);
    for (const p of pieces) {
      p.outer.getWorldPosition(world);
      p.outer.visible = p.present && !(cutaway && inCutRegion(world.x, world.z));
    }
  }

  const eye = {
    root, parts, pieces, nucleusGroup, laserRing, incisionMarks, iol, labels,

    setCutaway(on) {
      cutaway = on;
      for (const part of Object.values(parts)) part.setCutaway(on);
      refreshPieces();
    },

    setNucleusLayout({ half = 0, quarter = 0, rotation = 0 }) {
      nucleusGroup.rotation.y = rotation;
      for (const p of pieces) {
        p.outer.position.set(
          p.centroid.x + Math.sign(p.dir.x) * half + p.dir.x * quarter,
          p.centroid.y,
          p.centroid.z + p.dir.z * quarter,
        );
      }
      refreshPieces();
    },

    setPiecePresent(i, present) {
      pieces[i].present = present;
      labels.nucleus.visible = pieces.some(p => p.present);
      refreshPieces();
    },

    setGlow(i, amount) { pieces[i].material.emissive.setRGB(amount * 0.5, amount * 0.35, 0); },
    setDiscGlow(amount) { M.capsuleDisc.emissive.setRGB(amount * 0.2, amount * 0.6, amount * 0.9); },
    setCortexOpacity(opacity) { M.cortex.opacity = opacity; },

    applyState(s) {
      incisionMarks.main.visible = s.incisions.main;
      incisionMarks.side.visible = s.incisions.side;
      parts.capsuleDisc.setPresent(!s.capsuleOpen);
      parts.capsuleDisc.group.position.set(0, 0, 0);
      parts.capsuleDisc.group.scale.setScalar(1);
      eye.setDiscGlow(0);
      laserRing.visible = s.laserDone && !s.capsuleOpen;
      pieces.forEach((p, i) => {
        p.present = s.pieces[i];
        p.outer.scale.setScalar(1);
        eye.setGlow(i, 0);
      });
      eye.setNucleusLayout(nucleusLayout(s));
      parts.cortex.setPresent(s.cortex);
      M.cortex.opacity = BASE_CORTEX_OPACITY;
      iol.group.visible = s.iol;
      iol.setPose(0, IOL_Y, 0, 1);
      labels.nucleus.visible = s.pieces.some(Boolean);
      labels.cortex.visible = s.cortex;
      labels.iol.visible = s.iol;
    },
  };
  return eye;
}
