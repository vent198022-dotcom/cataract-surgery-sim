import * as THREE from 'three';
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
import { createEye } from './eye/eyeModel.js';
import { createInstruments } from './instruments/instruments.js';
import { Particles } from './fx/particles.js';
import { createViews } from './view/views.js';
import { createUI } from './ui/ui.js';
import { StepController } from './core/controller.js';
import { otherRoute } from './core/routes.js';
import { createSteps } from './steps/index.js';

const content = window.CONTENT;
const GRIP_PX = 70;  // 觸控時尖端與手指的距離（像素）
const NO_POINT = { x: 0, y: 0, z: 0 };

function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!c.getContext('webgl2');
  } catch {
    return false;
  }
}

function isShown(object) {
  for (let o = object; o; o = o.parent) if (!o.visible) return false;
  return true;
}

function contentValid() {
  const c = window.CONTENT;
  return !!(c && c.steps && c.ui && c.hints && c.layers && c.routes);
}

function start() {
  // 衛教文字檔讀取失敗或格式有誤時，顯示 index.html 內建的說明，不要留下空白頁
  if (!contentValid()) {
    document.getElementById('fatal').hidden = false;
    return;
  }
  let controller, views;
  let labelsOn = true;

  const ui = createUI(content, {
    prev: () => controller.prev(),
    next: () => controller.next(),
    restart: () => controller.restart(),
    demoStep: () => controller.startDemo(false),
    demoAll: () => controller.startDemo(true),
    stopDemo: () => controller.stopDemo(),
    toggleLabels: () => { labelsOn = !labelsOn; ui.setLabelsOn(labelsOn); },
    resetView: () => views.resetOrbit(),
    chooseRoute: route => { controller.setRoute(route); controller.goTo(1); },
    otherRoute: () => { controller.setRoute(otherRoute(controller.route)); controller.goTo(1); },
    toggleInspect: () => {
      views.setInspect(!views.inspecting);
      ui.setInspect(views.inspecting);
      if (views.inspecting) {
        releasePress();  // 進入旋轉觀看時，若器械還在按住中，先放開
        ui.showHint(content.hints.inspect, 4000);
      }
    },
  });
  if (!webglAvailable()) {
    ui.fatal(content.ui.noWebGL);
    return;
  }

  const stage = document.getElementById('stage');
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true });
  } catch (err) {
    console.error(err);
    ui.fatal(content.ui.noWebGL);
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));  // 舊平板效能考量
  stage.prepend(renderer.domElement);
  const labelRenderer = new CSS2DRenderer({ element: document.getElementById('labels') });

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0e1a26);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x334455, 1.6));
  const key = new THREE.DirectionalLight(0xffffff, 2.0);
  key.position.set(-20, 40, 30);
  scene.add(key);
  const top = new THREE.DirectionalLight(0xffffff, 1.0);
  top.position.set(0, 50, 0);
  scene.add(top);

  const eye = createEye(content.layers);
  scene.add(eye.root);
  const tools = createInstruments(scene);
  const particles = new Particles(scene);
  views = createViews(renderer);

  function layout() {
    const w = stage.clientWidth, h = stage.clientHeight;
    renderer.setSize(w, h);
    labelRenderer.setSize(w, h);
    views.resize(w, h);
    ui.setInsetRect(views.mode === 'microscope' ? views.insetRect(w, h) : null);
  }

  const deps = { scene, eye, tools, ui, content, particles, views };
  let stepKey = null;  // 上一次的 route:index，換步驟時才重置旋轉觀看
  let wasDemoing = false;
  controller = new StepController({
    steps: createSteps(deps),
    ctx: { ...deps, state: null },
    onChange: c => {
      views.setMode(c.step.view);
      const key = `${c.route}:${c.index}`;
      if (key !== stepKey) {
        stepKey = key;
        views.setInspect(false);
        if (c.step.view === 'microscope') views.home(0);
      }
      if (c.demoing && !wasDemoing) views.setInspect(false);
      wasDemoing = c.demoing;
      layout();
      ui.setStep({ route: c.route, ids: c.ids, index: c.index, complete: c.complete, demoing: c.demoing, view: c.step.view, cinematic: c.step.cinematic === true });
      ui.setInspect(views.inspecting);
    },
  });

  // 指標：顯微鏡視角時換算成工作平面上的 3D 點；軌道視角時點一下顯示該層說明
  const canvas = renderer.domElement;
  canvas.addEventListener('contextmenu', e => e.preventDefault());  // 長按不跳出選單
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const hit = new THREE.Vector3();
  let downAt = null;
  let pressed = false;  // 顯微鏡視角下是否按住（器械只在按住時跟著移動）
  let lastPoint = NO_POINT;

  // 放開按住中的器械（旋轉觀看開始時用）
  function releasePress() {
    if (!pressed) return;
    pressed = false;
    controller.pointer('up', lastPoint);
  }

  function aimRay(e, offsetX = 0) {
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX + offsetX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    raycaster.setFromCamera(ndc, views.camera);
  }
  function planeHit(e, offsetX = 0) {
    aimRay(e, offsetX);
    plane.constant = -controller.step.workY;
    return raycaster.ray.intersectPlane(plane, hit) ? { x: hit.x, y: hit.y, z: hit.z } : null;
  }
  // 觸控：手指按的是器械握柄，尖端在手指前方約 GRIP_PX 像素，才不會被手指擋住（滑鼠游標很細，維持指哪打哪）
  function workPoint(e) {
    const p = planeHit(e);
    const tool = controller.step.gripTool;
    if (!p || !tool || e.pointerType === 'mouse') return p;
    const q = planeHit(e, GRIP_PX);
    if (!q) return p;
    const tip = tool.tipForGrip(p.x, p.z, Math.hypot(q.x - p.x, q.z - p.z));
    return { x: tip.x, y: p.y, z: tip.z };
  }
  function pickLayer(e) {
    aimRay(e);
    const found = raycaster.intersectObject(eye.root, true).find(h => h.object.userData.layerId && isShown(h.object));
    ui.showLayer(found ? found.object.userData.layerId : null);
  }

  canvas.addEventListener('pointerdown', e => {
    if (!e.isPrimary || e.button !== 0) return;
    downAt = { x: e.clientX, y: e.clientY };
    if (views.mode !== 'microscope' || views.inspecting) return;
    try { canvas.setPointerCapture(e.pointerId); } catch { /* 指標已不存在時忽略 */ }
    pressed = true;
    const p = workPoint(e);
    if (p) {
      lastPoint = p;
      controller.pointer('down', p);
    }
  });
  canvas.addEventListener('pointermove', e => {
    if (views.mode !== 'microscope' || views.inspecting || !pressed) return;
    const p = workPoint(e);
    if (p) {
      lastPoint = p;
      controller.pointer('move', p);
    }
  });
  canvas.addEventListener('pointerup', e => {
    if (!e.isPrimary) return;
    const wasPressed = pressed;
    pressed = false;  // 按住期間若換了步驟或視角，放開時也要清除
    if (views.mode === 'microscope') {
      if (wasPressed) controller.pointer('up', workPoint(e) ?? lastPoint);
      return;
    }
    if (downAt && Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y) < 6) pickLayer(e);
    downAt = null;
  });
  canvas.addEventListener('pointercancel', () => {
    if (!pressed) return;
    pressed = false;
    controller.pointer('up', lastPoint);
  });

  new ResizeObserver(layout).observe(stage);
  layout();
  controller.goTo(0);
  ui.setLabelsOn(labelsOn);

  const clock = new THREE.Clock();
  renderer.setAnimationLoop(() => {
    try {
      const dt = Math.min(clock.getDelta(), 0.05);
      controller.update(dt);
      particles.update(dt);
      views.update(dt);

      const w = stage.clientWidth, h = stage.clientHeight;
      const orbit = views.mode === 'orbit';
      if (orbit) views.controls.update();

      eye.setCutaway(orbit);
      renderer.setScissorTest(false);
      renderer.setViewport(0, 0, w, h);
      renderer.render(scene, views.camera);

      if (!orbit) {
        const r = views.insetRect(w, h);
        eye.setCutaway(true);
        renderer.setScissorTest(true);
        renderer.setScissor(r.x, r.y, r.w, r.h);
        renderer.setViewport(r.x, r.y, r.w, r.h);
        renderer.render(scene, views.inset);
        renderer.setScissorTest(false);
      }

      labelRenderer.domElement.hidden = !(orbit && labelsOn);
      if (orbit && labelsOn) labelRenderer.render(scene, views.camera);
    } catch (err) {
      console.error(err);  // 單次例外不要讓動畫迴圈永久停住
    }
  });

  window.__sim = { controller, eye, views };  // 除錯與自動驗收用
}

start();
