// 暫時的進入點：只顯示剖面眼球，Task 6 會整個取代
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
import { createEye } from './eye/eyeModel.js';
import { createInitialState } from './core/state.js';

const stage = document.getElementById('stage');
const renderer = new THREE.WebGLRenderer({ antialias: true });
stage.prepend(renderer.domElement);
const labelRenderer = new CSS2DRenderer({ element: document.getElementById('labels') });

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0e1a26);
scene.add(new THREE.HemisphereLight(0xffffff, 0x334455, 1.6));
const key = new THREE.DirectionalLight(0xffffff, 2.0);
key.position.set(-20, 40, 30);
scene.add(key);

const eye = createEye(window.CONTENT.layers);
scene.add(eye.root);
eye.applyState(createInitialState());

const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 400);
camera.position.set(-32, 22, 36);
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 3, 0);
controls.update();

function layout() {
  const w = stage.clientWidth, h = stage.clientHeight;
  renderer.setSize(w, h);
  labelRenderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
new ResizeObserver(layout).observe(stage);
layout();

renderer.setAnimationLoop(() => {
  controls.update();
  eye.setCutaway(true);
  renderer.render(scene, camera);
  labelRenderer.render(scene, camera);
});
window.__sim = { eye };
