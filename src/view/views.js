import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// orbit：自由旋轉的剖面眼球；microscope：顯微鏡俯視；inset：右下角剖面小視窗
export function createViews(renderer) {
  const orbit = new THREE.PerspectiveCamera(35, 1, 0.1, 400);
  const micro = new THREE.PerspectiveCamera(32, 1, 0.1, 400);
  const inset = new THREE.PerspectiveCamera(30, 4 / 3, 0.1, 400);

  micro.position.set(0, 42, 0);
  micro.up.set(0, 0, -1);  // 畫面右方 = +x，畫面上方 = -z
  micro.lookAt(0, 9, 0);
  inset.position.set(-22, 14, 22);
  inset.lookAt(0, 7.5, 0);

  const controls = new OrbitControls(orbit, renderer.domElement);
  controls.enableDamping = true;
  controls.minDistance = 18;
  controls.maxDistance = 90;

  function resetOrbit() {
    orbit.position.set(-20, 17, 24);  // 較近的視角，對準前段（手術部位）
    controls.target.set(0, 6, 0);
    controls.update();
  }
  resetOrbit();

  let mode = 'orbit';
  return {
    get mode() { return mode; },
    get camera() { return mode === 'orbit' ? orbit : micro; },
    inset,
    controls,
    setMode(next) {
      mode = next;
      controls.enabled = next === 'orbit';
    },
    resize(w, h) {
      orbit.aspect = micro.aspect = w / h;
      orbit.updateProjectionMatrix();
      micro.updateProjectionMatrix();
    },
    insetRect(w) {
      const iw = Math.round(Math.min(w * 0.34, 420));
      const ih = Math.round(iw * 0.75);
      return { x: w - iw - 16, y: 16, w: iw, h: ih };
    },
    resetOrbit,
  };
}
