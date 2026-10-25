import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { PROFILES, LENS, CAPSULE_OPENING, CAPSULE_Y, IOL_Y, INCISIONS, LABEL_ANCHORS, bevelIncision } from './anatomy.js';
import { nucleusLayout } from './layout.js';
import { makeRevolvedPart, Part, inCutRegion } from './revolve.js';
import { createMaterials, BASE_CORTEX_OPACITY } from './materials.js';
import { createCapsuleFlap } from './capsuleFlap.js';
import { applyPlanarUV, scleraVesselTexture, redReflexTexture, glintTexture } from './textures.js';

const PIECE_CENTER_R = 1.3;  // 每塊核的重心離光軸距離
const STAIN_BASE = new THREE.Color(0xd6efff);   // 囊膜原色
const STAIN_BLUE = new THREE.Color(0x4f86d9);   // 台盼藍染色後
const DISC_STAIN_OPACITY = 0.6;
const BAG_STAIN_OPACITY = 0.3;

function applyUVToMeshes(object, radius) {
  object.traverse(o => { if (o.isMesh) applyPlanarUV(o.geometry, radius); });
}

// 鞏膜外面一層薄殼（開口旋轉面），貼血管與角膜緣灰藍環；弧線同 sclera：R=12.02，仰角 61.1° → 20°
function makeScleraVessels() {
  const R = 12.02, a0 = (61.1 * Math.PI) / 180, a1 = (20 * Math.PI) / 180, n = 24;
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const a = a0 + ((a1 - a0) * i) / n;
    pts.push(new THREE.Vector2(R * Math.cos(a), R * Math.sin(a)));
  }
  const material = new THREE.MeshStandardMaterial({
    map: scleraVesselTexture(), transparent: true, depthWrite: false, roughness: 0.5, side: THREE.DoubleSide,
  });
  const build = (phiLength, segments) => {
    const geo = new THREE.LatheGeometry(pts, segments, 0, phiLength);
    applyPlanarUV(geo, 12);
    const mesh = new THREE.Mesh(geo, material);
    mesh.renderOrder = 1;
    return mesh;
  };
  return { full: build(Math.PI * 2, 96), cut: build(Math.PI * 1.5, 72) };
}

// 顯微鏡主畫面專用的紅光反射圓盤：晶體後方、瞳孔透出橘紅色
function makeRedReflex() {
  const mesh = new THREE.Mesh(
    new THREE.CircleGeometry(4.4, 64),
    new THREE.MeshBasicMaterial({ map: redReflexTexture(), transparent: true, depthWrite: false }),
  );
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = 5.0;
  // three 先依「上層 Group 的 renderOrder」排序透明物件，所以要包一層 Group 才排得到囊膜、玻璃體之後；
  // 否則會被它們洗成粉白色。核、虹膜會寫深度，仍能擋住它；角膜（5）與反光點（6）再畫在上面
  const group = new THREE.Group();
  group.renderOrder = 4;
  group.add(mesh);
  return group;
}

// 角膜頂端兩個同軸燈反光點
function makeGlints() {
  const material = new THREE.MeshBasicMaterial({ map: glintTexture(), transparent: true, depthWrite: false, opacity: 0.85 });
  const group = new THREE.Group();
  group.renderOrder = 6;
  for (const [x, z] of [[-0.6, -0.4], [0.7, -0.3]]) {
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.5), material);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(x, 13.15, z);
    mesh.renderOrder = 6;
    group.add(mesh);
  }
  return group;
}

function tag(object, layerId) {
  object.traverse(o => { if (o.isMesh) o.userData.layerId = layerId; });
}

// 飛秒雷射的倒嵌角切口（130°）：在切口的徑向平面上，沿角膜緣切線拉出一片從外口斜到內口的薄片，
// 外口與內口各畫一條亮線，讓切口開口清楚可見
const BEVEL_R_OUTER = 5.5;  // 與器械進入點、雷射落點（INCISIONS r=5.5）一致
const BEVEL_ANGLE = 130;
function makeBevelIncision(inc) {
  const len = Math.hypot(inc.x, inc.z);
  const ux = inc.x / len, uz = inc.z / len;      // 徑向（離光軸方向）
  const vx = -uz, vz = ux;                       // 沿角膜緣的切線
  const { outer, inner } = bevelIncision(BEVEL_R_OUTER, BEVEL_ANGLE);
  const half = inc.length / 2;
  const at = ([r, y], d) => [ux * r + vx * d, y, uz * r + vz * d];
  const corners = [at(outer, -half), at(outer, half), at(inner, half), at(inner, -half)];
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(corners.flat(), 3));
  geometry.setIndex([0, 1, 2, 0, 2, 3]);
  geometry.computeVertexNormals();
  const slab = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
    color: 0x5a1f1f, side: THREE.DoubleSide, transparent: true, opacity: 0.85, depthWrite: false,
  }));
  const edges = new THREE.LineSegments(
    new THREE.BufferGeometry().setFromPoints([corners[0], corners[1], corners[2], corners[3]].map(p => new THREE.Vector3(...p))),
    new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 }),
  );
  edges.geometry.setIndex([0, 1, 2, 3]);  // 外口、內口兩條線
  // 沿切口斜面（外口→內口）畫幾條有粗細的線：從切線方向側看時薄片會變成一條線，這些線讓斜角仍看得出來
  const profileMat = new THREE.MeshBasicMaterial({ color: 0x7a1d1d });
  const profiles = [-half, 0, half].map(d => new THREE.Mesh(
    new THREE.TubeGeometry(new THREE.LineCurve3(new THREE.Vector3(...at(outer, d)), new THREE.Vector3(...at(inner, d))), 1, 0.05, 6, false),
    profileMat,
  ));
  const group = new THREE.Group();
  group.add(slab, edges, ...profiles);
  group.renderOrder = 5.5;
  group.traverse(o => { o.renderOrder = 5.5; });
  tag(group, 'cornea');
  group.visible = false;
  return group;
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
  const irisPart = addPart('iris', PROFILES.iris, M.iris);
  applyUVToMeshes(irisPart.group, 5.6);
  addPart('capsuleBag', PROFILES.capsuleBag, M.capsule, 'capsule');
  addPart('capsuleDisc', PROFILES.capsuleDisc, M.capsuleDisc, 'capsule');
  addPart('cortex', PROFILES.cortex, M.cortex);
  addPart('cornea', PROFILES.cornea, M.cornea);
  parts.zonules = new Part('zonules', makeZonules(M.zonules));
  root.add(parts.zonules.group);
  parts.scleraVessels = new Part('sclera', makeScleraVessels());
  root.add(parts.scleraVessels.group);

  // 透明層由內往外畫
  // 前囊片排在紅反射（4）之後，俯視時才看得到（染色、發光）
  const order = { vitreous: 1, capsuleBag: 2, cortex: 3, capsuleDisc: 4.5, cornea: 5 };
  for (const [key, value] of Object.entries(order)) parts[key].group.traverse(o => { o.renderOrder = value; });

  // 水晶體核：四塊各自是一個旋轉體扇形；outer 放在重心，方便縮放與移動
  const nucleusGroup = new THREE.Group();
  root.add(nucleusGroup);
  const pieces = [];
  for (let q = 0; q < 4; q++) {
    const material = M.nucleus.clone();
    const { full } = makeRevolvedPart(PROFILES.nucleus, material, { phiStart: (q * Math.PI) / 2, phiLength: Math.PI / 2 });
    tag(full, 'nucleus');
    applyUVToMeshes(full, 3.13);
    const phi = ((q + 0.5) * Math.PI) / 2;
    const dir = new THREE.Vector3(Math.sin(phi), 0, Math.cos(phi));
    const centroid = dir.clone().multiplyScalar(PIECE_CENTER_R).setY(LENS.center);
    const outer = new THREE.Group();
    full.position.copy(centroid).negate();
    outer.add(full);
    nucleusGroup.add(outer);
    pieces.push({ outer, material, dir, centroid, present: true });
  }

  // 撕囊時的前囊片（會折起的薄膜）；與前囊片共用材質，染色時一起變色
  const capsuleFlap = createCapsuleFlap(M.capsuleDisc);
  root.add(capsuleFlap.mesh);
  const discBaseOpacity = M.capsuleDisc.opacity, bagBaseOpacity = M.capsule.opacity;

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

  // 飛秒路線用的倒嵌角切口（傳統路線用上面的表面切口記號）
  const bevelIncisions = {};
  for (const [key, inc] of Object.entries(INCISIONS)) {
    bevelIncisions[key] = makeBevelIncision(inc);
    root.add(bevelIncisions[key]);
  }

  const iol = createIol(M);
  root.add(iol.group);

  const redReflex = makeRedReflex();
  const glints = makeGlints();
  root.add(redReflex, glints);

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
    root, parts, pieces, nucleusGroup, capsuleFlap, laserRing, incisionMarks, bevelIncisions, iol, labels, redReflex, glints,

    setCutaway(on) {
      cutaway = on;
      for (const part of Object.values(parts)) part.setCutaway(on);
      redReflex.visible = !on;  // 只在顯微鏡主畫面出現
      glints.visible = !on;
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

    // 劈核動畫用：offsets 為每塊核在核座標下的 { x, z } 位移（見 chopOffsets）
    setPieceOffsets(offsets, rotation = 0) {
      nucleusGroup.rotation.y = rotation;
      pieces.forEach((p, q) => {
        p.outer.position.set(p.centroid.x + offsets[q].x, p.centroid.y, p.centroid.z + offsets[q].z);
      });
      refreshPieces();
    },

    setPiecePresent(i, present) {
      pieces[i].present = present;
      labels.nucleus.visible = pieces.some(p => p.present);
      refreshPieces();
    },

    setGlow(i, amount) { pieces[i].material.emissive.setRGB(amount * 0.5, amount * 0.35, 0); },
    setDiscGlow(amount) { M.capsuleDisc.emissive.setRGB(amount * 0.2, amount * 0.6, amount * 0.9); },
    // 台盼藍染色：amount 0 = 透明囊膜、1 = 淡藍；可逆。囊袋本體只染一半
    setCapsuleStain(amount) {
      const a = Math.min(1, Math.max(0, amount));
      M.capsuleDisc.color.copy(STAIN_BASE).lerp(STAIN_BLUE, a);
      M.capsuleDisc.opacity = discBaseOpacity + (DISC_STAIN_OPACITY - discBaseOpacity) * a;
      M.capsule.color.copy(STAIN_BASE).lerp(STAIN_BLUE, 0.5 * a);
      M.capsule.opacity = bagBaseOpacity + (BAG_STAIN_OPACITY - bagBaseOpacity) * a;
    },
    setCortexOpacity(opacity) { M.cortex.opacity = opacity; },

    applyState(s) {
      const femto = s.route === 'femto';
      incisionMarks.main.visible = !femto && s.incisions.main;
      incisionMarks.side.visible = !femto && s.incisions.side;
      bevelIncisions.main.visible = femto && s.incisions.main;
      bevelIncisions.side.visible = femto && s.incisions.side;
      parts.capsuleDisc.setPresent(!s.capsuleOpen);
      parts.capsuleDisc.group.position.set(0, 0, 0);
      parts.capsuleDisc.group.scale.setScalar(1);
      eye.setDiscGlow(0);
      capsuleFlap.reset();
      capsuleFlap.mesh.visible = false;
      // 古典路線撕囊後，剩下的囊膜維持藍色；飛秒路線不染色
      eye.setCapsuleStain(s.route === 'classic' && s.capsuleOpen ? 1 : 0);
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
  eye.setNucleusLayout({});  // 套用前即讓核塊位於重心
  return eye;
}
