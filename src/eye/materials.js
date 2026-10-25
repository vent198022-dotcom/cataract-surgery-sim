import * as THREE from 'three';
import { irisTexture, nucleusTexture } from './textures.js';

export const BASE_CORTEX_OPACITY = 0.28;

// 每顆眼球一組材質（可個別調整透明度與發光）
export function createMaterials() {
  const solid = (color, extra = {}) =>
    new THREE.MeshStandardMaterial({ color, roughness: 0.6, metalness: 0, side: THREE.DoubleSide, ...extra });
  const glass = (color, opacity, extra = {}) =>
    solid(color, { transparent: true, opacity, depthWrite: false, roughness: 0.15, ...extra });
  return {
    sclera: solid(0xf4efe4),
    choroid: solid(0xa8574f),
    retina: solid(0xeba27c),
    opticNerve: solid(0xe6cf98),
    vitreous: glass(0xd8f1f6, 0.1),
    ciliary: solid(0x8d5a43),
    iris: solid(0xffffff, { map: irisTexture(), roughness: 0.8 }),
    // 顯微鏡頂燈下，光澤過強的角膜會讓畫面發灰；混濁水晶體則偏奶油色而非黃色，故放寬粗糙度、降低透明度
    // 囊膜是極薄的透明膜，太不透明會把瞳孔洗成一片白；染色時再加深（setCapsuleStain）
    capsule: glass(0xd6efff, 0.18, { roughness: 0.7 }),
    capsuleDisc: glass(0xd6efff, 0.22, { roughness: 0.7 }),
    cortex: glass(0xb08a48, BASE_CORTEX_OPACITY),
    // 核略透明，讓後方的紅反射透出一點橘色，像顯微鏡下混濁的核
    // 底色略暗：三盞燈下純白底色會把核的黃褐貼圖照成奶油色
    nucleus: solid(0xc9a77a, { map: nucleusTexture(), roughness: 0.85, transparent: true, opacity: 0.85 }),
    cornea: glass(0xbfe6f5, 0.1, { roughness: 0.05, metalness: 0.1 }),
    zonules: new THREE.LineBasicMaterial({ color: 0xd7dee3 }),
    incision: solid(0x7a3b3b),
    laser: new THREE.MeshBasicMaterial({ color: 0x7cff6b }),
    // 人工水晶體：淡藍透明鏡片 + 亮邊 + 深藍支撐腳，植入後在眼內輪廓清楚
    iol: glass(0xd9f2ff, 0.14, { roughness: 0.05, metalness: 0.1 }),  // 鏡片本身要清澈（紅反射透得過），輪廓靠亮邊
    iolRim: new THREE.MeshStandardMaterial({ color: 0xeef8ff, emissive: 0x1d4f73, roughness: 0.2, transparent: true, opacity: 0.95 }),
    haptic: solid(0x1f6fd0, { roughness: 0.35 }),
  };
}
