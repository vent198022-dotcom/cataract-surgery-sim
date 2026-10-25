import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  CUT_SAMPLES, RS, R_N, straightCuts, boundaryFromPath, continueAcross, clampCuts,
  defaultIrregularCuts, sectorGeometry, localPoint,
} from '../src/eye/nucleusCuts.js';

const M = CUT_SAMPLES;
const HALF_PI = Math.PI / 2;
const MAX_DEV = Math.PI / 4 - 0.12;

test('radii span 0..R_N in M steps', () => {
  assert.equal(M, 18);
  assert.equal(RS.length, M + 1);
  assert.equal(RS[0], 0);
  assert.ok(Math.abs(RS[M] - 0.68 * 4.6) < 1e-12);
  assert.equal(R_N, RS[M]);
});

test('straight cuts reproduce k * pi/2', () => {
  const cuts = straightCuts();
  assert.equal(cuts.length, 4);
  cuts.forEach((c, k) => {
    assert.equal(c.length, M + 1);
    assert.ok(c.every(v => v === k * HALF_PI));
  });
});

// 路徑點：核座標 (x, z)，φ = atan2(x, z)（旋轉體慣例，與 atan2(z, x) 不同）
const polar = (r, phi) => ({ x: r * Math.sin(phi), z: r * Math.cos(phi) });

test('boundaryFromPath returns the path angle at a radius it passes through', () => {
  const path = [polar(3.4, 3.3), polar(2.6, 3.1), polar(1.6, 3.0), polar(0.8, 3.2)];
  const b = boundaryFromPath(path, Math.PI);
  assert.equal(b.length, M + 1);
  // RS[10] = R_N * 10/18 = 1.738：落在 1.6 與 2.6 之間，線性內插
  const r = RS[10];
  const t = (r - 1.6) / (2.6 - 1.6);
  assert.ok(Math.abs(b[10] - (3.0 + (3.1 - 3.0) * t)) < 1e-9);
  // 路徑外端 3.4 > R_N：R_N 落在 2.6 與 3.4 之間
  assert.ok(Math.abs(b[M] - (3.1 + (3.3 - 3.1) * ((R_N - 2.6) / (3.4 - 2.6)))) < 1e-9);
});

test('boundaryFromPath uses the outer end angle beyond the path start', () => {
  const path = [polar(2.0, 3.4), polar(1.0, 3.6)];
  const b = boundaryFromPath(path, Math.PI);
  for (let i = 0; i <= M; i++) if (RS[i] >= 2.0) assert.ok(Math.abs(b[i] - 3.4) < 1e-9);
});

test('boundaryFromPath is the default angle at r = 0 and blends inside the path end', () => {
  const path = [polar(3.4, 3.4), polar(2.0, 3.4), polar(1.0, 3.6)];
  const b = boundaryFromPath(path, Math.PI);
  assert.equal(b[0], Math.PI);
  for (let i = 1; i < M; i++) {
    if (RS[i] >= 1.0) continue;
    assert.ok(b[i] > Math.PI - 1e-12 && b[i] < 3.6 + 1e-12);
  }
  for (let i = 1; i <= M; i++) assert.ok(Math.abs(b[i] - b[i - 1]) < 0.35);
});

test('boundaryFromPath unwraps the angle around the default angle', () => {
  // 預設 3π/2；路徑在 φ = -1.6（atan2 回傳負值，等於 2π - 1.6 ≈ 4.68）
  const path = [polar(3.4, -1.6), polar(2.0, -1.5), polar(1.0, -1.4)];
  const b = boundaryFromPath(path, 3 * HALF_PI);
  for (const v of b) assert.ok(Math.abs(v - 3 * HALF_PI) <= Math.PI);
  assert.ok(Math.abs(b[M] - (2 * Math.PI - 1.6)) < 0.05);
});

test('boundaryFromPath keeps the angle continuous across the atan2 seam', () => {
  // 預設 π：路徑從 φ = 3.1 走到 φ = 3.3（atan2 在 π 處跳到負值）
  const path = [polar(3.4, 3.1), polar(2.4, 3.2), polar(1.4, 3.3)];
  const b = boundaryFromPath(path, Math.PI);
  for (let i = 1; i <= M; i++) assert.ok(Math.abs(b[i] - b[i - 1]) < 0.35);
  assert.ok(b.every(v => v > 2.9 && v < 3.5));
});

test('boundaryFromPath copes with a degenerate (single or r~0) path', () => {
  const b = boundaryFromPath([polar(3.3, 3.0)], Math.PI);
  assert.equal(b.length, M + 1);
  assert.ok(b.every(Number.isFinite));
  assert.equal(b[0], Math.PI);
  const c = boundaryFromPath([polar(3.3, 3.0), { x: 0, z: 0 }], Math.PI);
  assert.ok(c.every(Number.isFinite));
  assert.equal(c[0], Math.PI);
});

test('continueAcross is deterministic, zero at the centre and bounded', () => {
  const side = boundaryFromPath([polar(3.4, 3.3), polar(2.0, 3.0), polar(1.0, 3.2)], Math.PI);
  const a = continueAcross(side, 0, 5), b = continueAcross(side, 0, 5), c = continueAcross(side, 0, 6);
  assert.deepEqual(a, b);
  assert.notDeepEqual(a, c);
  assert.equal(a.length, M + 1);
  assert.equal(a[0], 0);
  assert.ok(a.some(v => Math.abs(v) > 0.02));
  for (const v of a) assert.ok(Math.abs(v) <= 0.25 + 1e-12);
  assert.ok(Math.abs(a[1]) < 0.02);  // 中心附近平滑地接近 0
});

test('clampCuts keeps every boundary within pi/4 - 0.12 of its default', () => {
  const wild = straightCuts().map(c => c.map((v, i) => v + (i % 2 ? 2 : -2)));
  const cl = clampCuts(wild);
  cl.forEach((c, k) => {
    assert.equal(c.length, M + 1);
    for (const v of c) assert.ok(Math.abs(v - k * HALF_PI) <= MAX_DEV + 1e-12);
  });
  const mild = straightCuts().map(c => c.map(v => v + 0.1));
  assert.deepEqual(clampCuts(mild), mild);
  // 相鄰邊界永不交叉
  for (let k = 0; k < 4; k++) {
    for (let i = 0; i <= M; i++) {
      const hi = cl[(k + 1) % 4][i] + (k === 3 ? 2 * Math.PI : 0);
      assert.ok(hi > cl[k][i]);
    }
  }
});

test('defaultIrregularCuts: deterministic small wobbles around the straight cuts', () => {
  const a = defaultIrregularCuts(7), b = defaultIrregularCuts(7), c = defaultIrregularCuts(8);
  assert.deepEqual(a, b);
  assert.notDeepEqual(a, c);
  a.forEach((cut, k) => {
    assert.equal(cut.length, M + 1);
    assert.equal(cut[0], k * HALF_PI);
    for (const v of cut) assert.ok(Math.abs(v - k * HALF_PI) <= 0.2 + 1e-12);
  });
  assert.ok(a.some((cut, k) => cut.some(v => Math.abs(v - k * HALF_PI) > 0.02)));
});

test('localPoint converts world (x, z) to nucleus-local for rotation theta', () => {
  // 核繞 +Y 轉 θ：核座標 (lx, lz) → 世界 x = lx cosθ + lz sinθ、z = −lx sinθ + lz cosθ
  const th = 0.7, lx = 1.3, lz = -2.1;
  const w = { x: lx * Math.cos(th) + lz * Math.sin(th), z: -lx * Math.sin(th) + lz * Math.cos(th) };
  const l = localPoint(w, th);
  assert.ok(Math.abs(l.x - lx) < 1e-12 && Math.abs(l.z - lz) < 1e-12);
});

function volumeOf({ positions, indices }) {
  let v = 0;
  for (let t = 0; t < indices.length; t += 3) {
    const [a, b, c] = [0, 1, 2].map(k => positions.slice(indices[t + k] * 3, indices[t + k] * 3 + 3));
    v += (a[0] * (b[1] * c[2] - b[2] * c[1]) - a[1] * (b[0] * c[2] - b[2] * c[0]) + a[2] * (b[0] * c[1] - b[1] * c[0])) / 6;
  }
  return v;
}

test('sectorGeometry: finite positions, valid indices, correct surface heights', () => {
  const cuts = defaultIrregularCuts(7);
  const g = sectorGeometry(cuts[0], cuts[1]);
  assert.ok(g.positions.length > 0 && g.positions.length % 3 === 0);
  assert.ok(g.indices.length > 0 && g.indices.length % 3 === 0);
  assert.ok(g.positions.every(Number.isFinite));
  const n = g.positions.length / 3;
  assert.ok(g.indices.every(i => Number.isInteger(i) && i >= 0 && i < n));
  const ys = [];
  for (let i = 0; i < n; i++) ys.push(g.positions[i * 3 + 1]);
  assert.ok(Math.abs(Math.max(...ys) - (8 + 0.68 * 1.5)) < 1e-9);   // 中心前表面
  assert.ok(Math.abs(Math.min(...ys) - (8 - 0.68 * 2.5)) < 1e-9);   // 中心後表面
});

test('sectorGeometry: every vertex lies between a(r) and b(r) in lathe angle', () => {
  const cuts = clampCuts(defaultIrregularCuts(3));
  for (const [qa, qb] of [[0, 1], [1, 2], [2, 3], [3, 0]]) {
    const a = cuts[qa], b = cuts[qb].map(v => (qb === 0 ? v + 2 * Math.PI : v));
    const g = sectorGeometry(a, b);
    for (let i = 0; i < g.positions.length / 3; i++) {
      const x = g.positions[i * 3], z = g.positions[i * 3 + 2];
      const r = Math.hypot(x, z);
      if (r < 1e-6) continue;
      const k = Math.round((r / R_N) * M);
      assert.ok(Math.abs(r - RS[k]) < 1e-9, 'vertices sit on the sample radii');
      let phi = Math.atan2(x, z);
      while (phi < a[k] - 1e-9) phi += 2 * Math.PI;
      assert.ok(phi >= a[k] - 1e-9 && phi <= b[k] + 1e-9, `phi ${phi} in [${a[k]}, ${b[k]}] at ${k}`);
    }
  }
});

test('sectorGeometry is a closed solid with outward faces (positive volume)', () => {
  const straight = straightCuts();
  const v = volumeOf(sectorGeometry(straight[0], straight[1]));
  // 四分之一核的體積：橢球 2/3·π·R²·(前 + 後) 的 1/4（取樣的折面略小）
  const exact = ((2 / 3) * Math.PI * R_N ** 2 * (0.68 * 1.5 + 0.68 * 2.5)) / 4;
  assert.ok(v > 0, `volume ${v}`);
  assert.ok(Math.abs(v - exact) / exact < 0.1, `volume ${v} vs ${exact}`);
  // 四塊不規則切出的體積加起來大約等於整顆核
  const irregular = defaultIrregularCuts(7);
  const total = [0, 1, 2, 3].reduce((s, q) => {
    const b = irregular[(q + 1) % 4].map(x => (q === 3 ? x + 2 * Math.PI : x));
    return s + volumeOf(sectorGeometry(irregular[q], b));
  }, 0);
  assert.ok(Math.abs(total - 4 * v) / (4 * v) < 0.02, `${total} vs ${4 * v}`);
});
