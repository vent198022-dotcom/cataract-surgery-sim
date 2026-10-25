import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { ease } from '../core/tween.js';

// 顯微鏡鏡頭的起始姿勢：正上方俯視（畫面右方 = +x，畫面上方 = -z）
// up 用一般的 +Y 讓 OrbitControls 可用；位置的 +z 微小偏移避免 lookAt 與 up 平行
export const MICRO_HOME = { position: [0, 42, 0.01], target: [0, 9, 0] };

// orbit：自由旋轉的剖面眼球；microscope：顯微鏡俯視；inset：左下角剖面小視窗
export function createViews(renderer) {
  const orbit = new THREE.PerspectiveCamera(35, 1, 0.1, 400);
  const micro = new THREE.PerspectiveCamera(32, 1, 0.1, 400);
  const inset = new THREE.PerspectiveCamera(30, 4 / 3, 0.1, 400);

  micro.up.set(0, 1, 0);
  micro.position.set(...MICRO_HOME.position);
  micro.lookAt(...MICRO_HOME.target);
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

  // 手術中「旋轉觀看」：顯微鏡鏡頭也可用 OrbitControls 轉動、縮放
  const microControls = new OrbitControls(micro, renderer.domElement);
  microControls.enabled = false;
  microControls.target.set(...MICRO_HOME.target);
  microControls.enableDamping = true;
  microControls.minDistance = 14;
  microControls.maxDistance = 60;
  microControls.maxPolarAngle = Math.PI * 0.47;  // 不會轉到眼球下方
  microControls.enablePan = false;

  // 鏡頭飛行：同一時間只有一段，位置與注視點一起補間
  const lookAt = new THREE.Vector3(...MICRO_HOME.target);
  let flight = null;
  function flyTo(pose, seconds = 1) {
    const toPos = new THREE.Vector3(...pose.position);
    const toTarget = new THREE.Vector3(...pose.target);
    if (!(seconds > 0)) {
      flight = null;
      micro.position.copy(toPos);
      lookAt.copy(toTarget);
      micro.lookAt(lookAt);
      micro.updateMatrixWorld();
      microControls.target.copy(toTarget);
      return;
    }
    flight = {
      t: 0,
      seconds,
      fromPos: micro.position.clone(),
      fromTarget: lookAt.clone(),
      toPos,
      toTarget,
    };
  }
  function home(seconds = 0.8) { flyTo(MICRO_HOME, seconds); }
  function advanceFlight(dt) {
    if (!flight) return;
    flight.t = Math.min(flight.seconds, flight.t + dt);
    const k = ease(flight.t / flight.seconds);
    micro.position.lerpVectors(flight.fromPos, flight.toPos, k);
    lookAt.lerpVectors(flight.fromTarget, flight.toTarget, k);
    micro.lookAt(lookAt);
    micro.updateMatrixWorld();
    if (flight.t >= flight.seconds) {
      microControls.target.copy(flight.toTarget);
      flight = null;
    }
  }

  let mode = 'orbit';
  let inspecting = false;
  function setInspect(on) {
    const was = inspecting;
    inspecting = on;
    microControls.enabled = on;
    if (on) {
      // 從目前注視點開始轉動，避免第一次拖動時鏡頭跳一下
      if (!flight) microControls.target.copy(lookAt);
    } else if (was) {
      home(0.8);  // 只有真的從旋轉觀看回來才飛回；否則不打斷步驟自己的鏡頭動作
    }
  }

  return {
    get mode() { return mode; },
    get inspecting() { return inspecting; },
    get camera() { return mode === 'orbit' ? orbit : micro; },
    inset,
    controls,
    setMode(next) {
      const prev = mode;
      mode = next;
      controls.enabled = next === 'orbit';
      if (prev !== next && (prev === 'microscope' || next === 'microscope')) {
        setInspect(false);
        home(0);
      }
    },
    flyTo,
    home,
    setInspect,
    update(dt) {
      advanceFlight(dt);
      if (inspecting && !flight) {
        microControls.update();
        lookAt.copy(microControls.target);
      }
    },
    resize(w, h) {
      orbit.aspect = micro.aspect = w / h;
      orbit.updateProjectionMatrix();
      micro.updateProjectionMatrix();
    },
    // 放在左下角：器械都從右側（主切口）與上方（側切口）進入，右下角是器械的起始位置
    insetRect(w, h) {
      const iw = Math.round(Math.min(w * 0.3, 380, (h - 32) / 0.75));
      const ih = Math.round(iw * 0.75);
      return { x: 16, y: 16, w: iw, h: ih };
    },
    resetOrbit,
  };
}
