import * as THREE from 'three';

export const BASE_CORTEX_OPACITY = 0.55;

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
    vitreous: glass(0xd8f1f6, 0.16),
    ciliary: solid(0x8d5a43),
    iris: solid(0x6b4a2f),
    capsule: glass(0xd6efff, 0.35),
    capsuleDisc: glass(0xd6efff, 0.45),
    cortex: glass(0xf2ead0, BASE_CORTEX_OPACITY),
    nucleus: solid(0xc6963a, { roughness: 0.85 }),
    cornea: glass(0xbfe6f5, 0.28),
    zonules: new THREE.LineBasicMaterial({ color: 0xd7dee3 }),
    incision: solid(0x7a3b3b),
    laser: new THREE.MeshBasicMaterial({ color: 0x7cff6b }),
    iol: glass(0xa6dcff, 0.6, { roughness: 0.05 }),
    haptic: solid(0x2f86d1),
  };
}
