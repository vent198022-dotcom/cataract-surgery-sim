# 白內障手術 3D 互動模擬 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 做一個可離線、雙擊即開的 3D 網頁，讓病人親手操作白內障手術各步驟（傳統與飛秒雷射兩條路線），用於診間衛教。

**Architecture:** Three.js 以程式產生剖面眼球（每一層是旋轉體＋剖面封面），器械以切口為支點擺動。每個手術步驟是一個實作共同介面的模組，由 `StepController` 依路線串接；「上一步／重來／跳過」靠各步驟的 `skip()` 從初始狀態重建眼睛狀態。原始碼用 esbuild 打包成單一 IIFE `app.js`，讓 `file://` 也能執行。

**Tech Stack:** three 0.170.0、esbuild 0.24.0、Node 24 內建 `node:test`、原生 DOM（無前端框架）。

**Spec:** `docs/superpowers/specs/2026-10-25-cataract-surgery-3d-sim-design.md`

## Global Constraints

- 交付資料夾名稱：`白內障手術模擬/`，雙擊 `index.html` 即可在 Windows 的 Chrome、Edge 執行，**不需網路**。
- `app.js` 必須是 IIFE（非 ES module），`content.js` 以一般 `<script>` 載入並設定 `window.CONTENT`。
- 所有衛教文字只放在 `白內障手術模擬/content.js`，程式不得寫死中文衛教文字。
- 介面繁體中文，基本字級 20px，按鈕高度 ≥ 52px。
- 滑鼠與觸控同一套操作：器械只在「按住」時跟著移動。
- 不做語音、音效、手機版面、Logo。
- 單位：毫米；眼球中心在原點，光軸為 +Y（角膜朝上，像病人躺在顯微鏡下）。
- 剖面模式切掉 `x < 0 且 z > 0` 那 1/4（旋轉角 φ ∈ [1.5π, 2π]）。
- 偏離引導只顯示溫和提示，不判定失敗。

## 檔案結構

```
package.json, build.mjs, .claude/launch.json
白內障手術模擬/
  index.html, style.css, content.js, app.js(建置產物，要提交), 使用說明.txt
src/
  main.js                 啟動、渲染迴圈、指標事件
  core/routes.js          兩條路線的步驟順序
  core/state.js           眼睛狀態
  core/skips.js           各步驟完成後的狀態變化
  core/geometry.js        純數學：夾限、器械方向、拖曳覆蓋追蹤
  core/tween.js           補間動畫
  core/demo.js            自動示範播放與路徑產生
  core/controller.js      StepController
  eye/anatomy.js          尺寸、輪廓、切口、標籤位置
  eye/layout.js           水晶體核碎塊排列
  eye/revolve.js          旋轉體＋剖面、Part 類別
  eye/materials.js        材質
  eye/eyeModel.js         組合整顆眼球與 API
  eye/guides.js           虛線、進度線、標記點
  instruments/instruments.js  器械模型與 Instrument 類別
  fx/particles.js         乳化顆粒
  view/views.js           軌道視角、顯微鏡視角、剖面小視窗
  ui/ui.js                DOM 介面
  vision/vision.js        街景插畫（視力對比）
  steps/common.js, steps/index.js
  steps/incision.js, capsulorhexis.js, chop.js, phaco.js, cortex.js, iol.js, laser.js, capsuleRemoval.js
test/*.test.js
```

## 步驟索引（瀏覽器驗證時用）

- 傳統 `classic`：0 intro、1 incision、2 capsulorhexis、3 chop、4 phaco、5 cortex、6 iol、7 done
- 飛秒 `femto`：0 intro、1 laser、2 capsuleRemoval、3 phaco、4 cortex、5 iol、6 done

---

### Task 1: 專案骨架與打包流程

**Files:**
- Create: `package.json`, `build.mjs`, `.claude/launch.json`
- Create: `白內障手術模擬/index.html`, `白內障手術模擬/style.css`
- Create: `src/main.js`（暫時版本，Task 5 取代）

**Interfaces:**
- Produces: `npm run build` → `白內障手術模擬/app.js`；`npm run serve` → http://localhost:8123（監看重建）；`npm test` → 執行 `test/*.test.js`。
- Produces: index.html 內的 DOM id：`app-title`, `progress`, `stage`, `labels`, `inset-frame`, `counter`, `hint`, `layer-info`, `layer-name`, `layer-desc`, `vision`, `vision-before`, `vision-after`, `step-title`, `step-body`, `route-choice`, `other-route`, `controls`, `fatal`。

- [ ] **Step 1: 建立 `package.json`**

```json
{
  "name": "cataract-surgery-sim",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "node build.mjs",
    "serve": "node build.mjs --serve",
    "test": "node --test"
  },
  "devDependencies": {
    "esbuild": "0.24.0",
    "three": "0.170.0"
  }
}
```

- [ ] **Step 2: 建立 `build.mjs`**

```js
// 把 src/ 打包成單一 IIFE 檔，讓 index.html 用 file:// 雙擊也能執行
import * as esbuild from 'esbuild';

const OUT_DIR = '白內障手術模擬';
const serve = process.argv.includes('--serve');
const options = {
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'iife',
  target: 'es2020',
  minify: !serve,
  outfile: `${OUT_DIR}/app.js`,
  logLevel: 'info',
};

if (serve) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  const { port } = await ctx.serve({ servedir: OUT_DIR, port: 8123 });
  console.log(`預覽：http://localhost:${port}/`);
} else {
  await esbuild.build(options);
}
```

- [ ] **Step 3: 建立 `.claude/launch.json`**

```json
{
  "version": "0.0.1",
  "configurations": [
    { "name": "sim", "runtimeExecutable": "npm", "runtimeArgs": ["run", "serve"], "port": 8123 }
  ]
}
```

- [ ] **Step 4: 建立 `白內障手術模擬/index.html`**

```html
<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>白內障手術 3D 互動模擬</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header id="topbar">
    <h1 id="app-title">白內障手術 3D 互動模擬</h1>
    <ol id="progress"></ol>
  </header>
  <main id="stage">
    <div id="labels"></div>
    <div id="inset-frame" hidden><span>剖面圖</span></div>
    <div id="counter" hidden></div>
    <div id="hint" hidden></div>
    <div id="layer-info" hidden><strong id="layer-name"></strong><p id="layer-desc"></p></div>
    <div id="vision" hidden>
      <figure id="vision-before"><canvas width="480" height="300"></canvas><figcaption></figcaption></figure>
      <figure id="vision-after"><canvas width="480" height="300"></canvas><figcaption></figcaption></figure>
    </div>
  </main>
  <footer id="panel">
    <section id="step-text">
      <h2 id="step-title"></h2>
      <div id="step-body"></div>
      <div id="route-choice" hidden></div>
      <button id="other-route" type="button" hidden></button>
    </section>
    <nav id="controls"></nav>
  </footer>
  <div id="fatal" hidden></div>
  <script src="content.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

- [ ] **Step 5: 建立 `白內障手術模擬/style.css`**

```css
:root {
  --bg: #0e1a26;
  --panel: #f7f9fb;
  --ink: #1d2a36;
  --muted: #5b6b7a;
  --accent: #0a84c6;
  --ready: #12a36b;
  --line: #d5dde5;
  font-family: "Microsoft JhengHei", "PingFang TC", "Noto Sans TC", sans-serif;
  font-size: 20px;
  color: var(--ink);
}
* { box-sizing: border-box; }
html, body { margin: 0; height: 100%; }
body { display: grid; grid-template-rows: auto 1fr auto; height: 100vh; background: var(--bg); overflow: hidden; }
[hidden] { display: none !important; }

#topbar { display: flex; align-items: center; gap: 24px; padding: 10px 20px; background: #12263a; color: #fff; }
#topbar h1 { margin: 0; font-size: 1.15rem; white-space: nowrap; }
#progress { display: flex; gap: 6px; margin: 0; padding: 0; list-style: none; overflow-x: auto; }
#progress li { padding: 6px 12px; border-radius: 999px; background: #1f3a55; color: #9fb6cc; font-size: 0.8rem; white-space: nowrap; }
#progress li.done { background: #1d5b45; color: #d6f5e7; }
#progress li.current { background: var(--accent); color: #fff; font-weight: bold; }

#stage { position: relative; min-height: 0; overflow: hidden; }
#stage canvas { display: block; touch-action: none; }
#labels { position: absolute; inset: 0; pointer-events: none; }
.label { display: flex; align-items: center; gap: 6px; font-size: 0.75rem; color: #fff; text-shadow: 0 1px 3px #000; white-space: nowrap; }
.label::before { content: ""; width: 8px; height: 8px; border-radius: 50%; background: #ffd54f; box-shadow: 0 0 0 2px rgba(0,0,0,0.4); }
#inset-frame { position: absolute; right: 16px; bottom: 16px; border: 3px solid #fff; border-radius: 10px; pointer-events: none; z-index: 2; }
#inset-frame span { position: absolute; top: -1.6em; left: 0; color: #fff; font-size: 0.75rem; }
#counter { position: absolute; top: 16px; right: 16px; padding: 8px 16px; border-radius: 10px; background: rgba(255,255,255,0.92); font-weight: bold; z-index: 2; }
#hint { position: absolute; top: 16px; left: 50%; transform: translateX(-50%); padding: 10px 20px; border-radius: 12px; background: #fff8d6; color: #5a4300; font-weight: bold; box-shadow: 0 4px 16px rgba(0,0,0,0.3); z-index: 3; }
#layer-info { position: absolute; left: 16px; top: 16px; max-width: 340px; padding: 12px 16px; border-radius: 12px; background: rgba(255,255,255,0.95); z-index: 2; }
#layer-info p { margin: 6px 0 0; font-size: 0.85rem; color: var(--muted); }
#vision { position: absolute; right: 16px; top: 16px; display: flex; gap: 12px; z-index: 2; }
#vision figure { margin: 0; padding: 8px; border-radius: 12px; background: rgba(255,255,255,0.95); text-align: center; }
#vision canvas { display: block; width: 240px; height: 150px; border-radius: 8px; }
#vision figcaption { margin-top: 4px; font-size: 0.8rem; font-weight: bold; }
#vision-before canvas { filter: blur(3px) sepia(0.7) brightness(0.85) contrast(0.75); }

#panel { display: flex; flex-wrap: wrap; gap: 20px; align-items: flex-start; justify-content: space-between; padding: 14px 20px; background: var(--panel); border-top: 1px solid var(--line); }
#step-text { flex: 1 1 420px; min-width: 0; }
#step-title { margin: 0 0 6px; font-size: 1.2rem; }
#step-body p { margin: 4px 0; line-height: 1.5; }
#step-body p.note { color: var(--ready); font-weight: bold; }
#route-choice { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin-top: 10px; }
#controls { display: flex; flex-wrap: wrap; gap: 8px; justify-content: flex-end; flex: 0 1 560px; }
button { min-height: 52px; padding: 0 18px; border: 2px solid var(--line); border-radius: 12px; background: #fff; color: var(--ink); font: inherit; font-size: 0.9rem; cursor: pointer; }
button:disabled { opacity: 0.4; cursor: default; }
button.primary { background: var(--accent); border-color: var(--accent); color: #fff; }
button.primary.ready { background: var(--ready); border-color: var(--ready); animation: pulse 1.2s ease-in-out infinite; }
button.route, #other-route { background: #e8f4fb; border-color: var(--accent); font-weight: bold; }
#other-route { margin-top: 10px; }
button.toggle.on { background: #e8f4fb; border-color: var(--accent); }
@keyframes pulse { 50% { box-shadow: 0 0 0 6px rgba(18,163,107,0.25); } }
#fatal { position: fixed; inset: 0; display: grid; place-items: center; padding: 40px; background: var(--bg); color: #fff; font-size: 1.2rem; text-align: center; z-index: 10; }
```

- [ ] **Step 6: 建立暫時的 `src/main.js`**

```js
// 暫時的進入點：只確認打包流程可用，Task 5 會整個取代
document.getElementById('step-title').textContent = '程式已載入';
```

- [ ] **Step 7: 安裝與建置**

Run: `npm install` 然後 `npm run build`
Expected: 產生 `白內障手術模擬/app.js`，esbuild 印出檔案大小，無錯誤。

- [ ] **Step 8: 在瀏覽器確認**

用 `preview_start` 啟動 `sim`，用 `get_page_text` 讀頁面。
Expected: 頁面文字含「程式已載入」與「白內障手術 3D 互動模擬」。

- [ ] **Step 9: Commit**

```bash
git add package.json package-lock.json build.mjs .claude/launch.json 白內障手術模擬 src
git commit -m "chore: scaffold project and esbuild pipeline"
```

---

### Task 2: 路線、眼睛狀態與衛教文字

**Files:**
- Create: `src/core/routes.js`, `src/core/state.js`, `src/core/skips.js`
- Create: `白內障手術模擬/content.js`
- Test: `test/core.test.js`

**Interfaces:**
- Produces: `ROUTES: { classic: string[], femto: string[] }`、`otherRoute(route) → string`
- Produces: `createInitialState(route='classic') → { route, incisions:{main,side}, laserDone, capsuleOpen, nucleusSplit, pieces:[bool×4], cortex, iol }`
- Produces: `SKIPS: Record<stepId, (state) => void>`（就地修改 state）
- Produces: `window.CONTENT`，結構見 Step 5；鍵名 `steps[id].title/text[]`、`layers[id].name/desc`、`hints.*`、`ui.*`、`routes[route].name`、`routeNotes.femtoPhaco`

- [ ] **Step 1: 寫失敗測試 `test/core.test.js`**

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { ROUTES, otherRoute } from '../src/core/routes.js';
import { createInitialState } from '../src/core/state.js';
import { SKIPS } from '../src/core/skips.js';

function loadContent() {
  const sandbox = { window: {} };
  vm.runInNewContext(readFileSync(new URL('../白內障手術模擬/content.js', import.meta.url), 'utf8'), sandbox);
  return sandbox.window.CONTENT;
}

test('initial state: eye untouched', () => {
  const s = createInitialState('femto');
  assert.equal(s.route, 'femto');
  assert.deepEqual(s.incisions, { main: false, side: false });
  assert.equal(s.capsuleOpen, false);
  assert.equal(s.laserDone, false);
  assert.equal(s.nucleusSplit, 0);
  assert.deepEqual(s.pieces, [true, true, true, true]);
  assert.equal(s.cortex, true);
  assert.equal(s.iol, false);
});

test('routes start with intro and end with done', () => {
  for (const ids of Object.values(ROUTES)) {
    assert.equal(ids[0], 'intro');
    assert.equal(ids.at(-1), 'done');
  }
  assert.equal(otherRoute('classic'), 'femto');
  assert.equal(otherRoute('femto'), 'classic');
});

test('every step has a skip', () => {
  for (const ids of Object.values(ROUTES)) for (const id of ids) assert.equal(typeof SKIPS[id], 'function', id);
});

for (const route of Object.keys(ROUTES)) {
  test(`skipping every ${route} step ends with an IOL`, () => {
    const s = createInitialState(route);
    for (const id of ROUTES[route]) SKIPS[id](s);
    assert.deepEqual(s.incisions, { main: true, side: true });
    assert.equal(s.capsuleOpen, true);
    assert.equal(s.nucleusSplit, 2);
    assert.deepEqual(s.pieces, [false, false, false, false]);
    assert.equal(s.cortex, false);
    assert.equal(s.iol, true);
    assert.equal(s.laserDone, route === 'femto');
  });
}

test('content covers every step, layer and hint', () => {
  const c = loadContent();
  for (const ids of Object.values(ROUTES)) {
    for (const id of ids) {
      assert.ok(c.steps[id]?.title, `title ${id}`);
      assert.ok(c.steps[id].text.length > 0, `text ${id}`);
    }
  }
  for (const id of ['cornea', 'anteriorChamber', 'iris', 'capsule', 'cortex', 'nucleus', 'zonules', 'ciliary', 'vitreous', 'retina', 'choroid', 'sclera', 'opticNerve', 'iol']) {
    assert.ok(c.layers[id]?.name && c.layers[id].desc, `layer ${id}`);
  }
  for (const key of ['followLine', 'followCircle', 'moveToMarker', 'moveToPiece', 'grabDisc', 'pushInjector', 'stepDone']) assert.ok(c.hints[key], key);
  for (const key of ['prev', 'restart', 'next', 'demoStep', 'demoAll', 'stop', 'labels', 'resetView', 'chooseRoute', 'otherRoute', 'before', 'after', 'cloudy', 'noWebGL']) assert.ok(c.ui[key], key);
  assert.ok(c.routes.classic.name && c.routes.femto.name);
  assert.ok(c.routeNotes.femtoPhaco);
});
```

- [ ] **Step 2: 確認測試失敗**

Run: `npm test`
Expected: FAIL，錯誤為找不到 `src/core/routes.js`。

- [ ] **Step 3: 建立 `src/core/routes.js`**

```js
// 兩條手術路線的步驟順序
export const ROUTES = {
  classic: ['intro', 'incision', 'capsulorhexis', 'chop', 'phaco', 'cortex', 'iol', 'done'],
  femto: ['intro', 'laser', 'capsuleRemoval', 'phaco', 'cortex', 'iol', 'done'],
};

export function otherRoute(route) {
  return route === 'classic' ? 'femto' : 'classic';
}
```

- [ ] **Step 4: 建立 `src/core/state.js` 與 `src/core/skips.js`**

`src/core/state.js`：

```js
// 眼睛目前的狀態；畫面一律由這個物件決定
export function createInitialState(route = 'classic') {
  return {
    route,
    incisions: { main: false, side: false },
    laserDone: false,                 // 飛秒雷射已打完
    capsuleOpen: false,               // 前囊片已取出
    nucleusSplit: 0,                  // 0 完整、1 兩半、2 四塊
    pieces: [true, true, true, true], // 四塊水晶體核是否還在
    cortex: true,
    iol: false,
  };
}
```

`src/core/skips.js`：

```js
// 每個步驟「完成後」對眼睛狀態的改變；用於跳過步驟與重建上一步
export const SKIPS = {
  intro: () => {},
  incision: s => { s.incisions.main = true; s.incisions.side = true; },
  capsulorhexis: s => { s.capsuleOpen = true; },
  chop: s => { s.nucleusSplit = 2; },
  laser: s => { s.incisions.main = true; s.incisions.side = true; s.laserDone = true; s.nucleusSplit = 2; },
  capsuleRemoval: s => { s.capsuleOpen = true; },
  phaco: s => { s.pieces = [false, false, false, false]; },
  cortex: s => { s.cortex = false; },
  iol: s => { s.iol = true; },
  done: () => {},
};
```

- [ ] **Step 5: 建立 `白內障手術模擬/content.js`**

```js
// 衛教文字集中在這裡。要修改用字，用記事本打開本檔，只改引號內的文字即可。
window.CONTENT = {
  appTitle: '白內障手術 3D 互動模擬',
  routes: {
    classic: { name: '傳統超音波乳化手術' },
    femto: { name: '飛秒雷射輔助手術' },
  },
  steps: {
    intro: {
      title: '認識眼睛',
      text: [
        '眼睛裡的「水晶體」就像相機的鏡頭，原本是透明的。',
        '白內障是水晶體變黃、變混濁，看東西就會霧霧的。',
        '可以旋轉眼球、點一下各個部位看看，準備好後選擇手術方式。',
      ],
    },
    incision: {
      title: '製作小切口',
      text: [
        '點麻醉眼藥水後，醫師在角膜邊緣做 2 個很小的切口（約 2.2 毫米與 1 毫米）。',
        '請按住角膜刀，拖到閃爍的標記點上。',
      ],
    },
    capsulorhexis: {
      title: '撕開前囊',
      text: [
        '水晶體外面包著一層薄薄的「囊袋」，醫師會在前方撕開一個圓形開口。',
        '請按住撕囊鑷，沿著虛線圓圈拖一圈。',
      ],
    },
    chop: {
      title: '劈開水晶體核',
      text: [
        '混濁的水晶體核比較硬，醫師會先把它分成小塊，比較好清除。',
        '請按住劈核器，沿著虛線劃過去。',
      ],
    },
    phaco: {
      title: '超音波乳化吸除',
      text: [
        '超音波探頭把碎塊震成細小顆粒，同時吸出眼外。',
        '請按住探頭，移到發光的碎塊旁吸除。',
      ],
    },
    cortex: {
      title: '清除皮質',
      text: ['把殘留的皮質吸乾淨，留下透明完整的囊袋，準備放入人工水晶體。'],
    },
    iol: {
      title: '植入人工水晶體',
      text: [
        '人工水晶體摺疊後從小切口推入，進到囊袋後會自己展開固定。',
        '請按住推注器，往切口方向推進。',
      ],
    },
    done: {
      title: '手術完成',
      text: [
        '透明的人工水晶體取代了混濁的水晶體，光線又能清楚進入眼睛。',
        '小切口通常會自行癒合，不需要縫線。',
      ],
    },
    laser: {
      title: '飛秒雷射',
      text: [
        '雷射接觸鏡輕輕貼合眼睛，電腦先掃描量測眼睛各層位置。',
        '接著雷射精準做出切口、切開正圓形的前囊，並預先把水晶體核分割成小塊。',
      ],
    },
    capsuleRemoval: {
      title: '取出前囊片',
      text: [
        '雷射已經把前囊切成正圓形，醫師只要輕輕夾出即可。',
        '請把撕囊鑷移到發光的囊片上，按住夾起，拖向切口取出。',
      ],
    },
  },
  routeNotes: {
    femtoPhaco: '雷射已預先分割水晶體核，超音波用量較少。',
  },
  layers: {
    cornea: { name: '角膜', desc: '眼睛最前面透明的窗戶，手術切口做在它的邊緣。' },
    anteriorChamber: { name: '前房', desc: '角膜和虹膜之間充滿透明液體的空間。' },
    iris: { name: '虹膜', desc: '決定眼睛顏色，中間的開口就是瞳孔。手術前會點藥把瞳孔放大。' },
    capsule: { name: '水晶體囊袋', desc: '包住水晶體的透明薄膜，人工水晶體會放在裡面。' },
    cortex: { name: '水晶體皮質', desc: '水晶體外層較軟的部分。' },
    nucleus: { name: '水晶體核（混濁）', desc: '白內障時變黃變硬的中心，是視力模糊的主因。' },
    zonules: { name: '懸韌帶', desc: '細細的纖維，把水晶體懸掛固定在眼球裡。' },
    ciliary: { name: '睫狀體', desc: '連接懸韌帶，負責調節水晶體。' },
    vitreous: { name: '玻璃體', desc: '眼球後段透明的膠狀物質。' },
    retina: { name: '視網膜', desc: '眼底感光的底片，把影像傳給大腦。' },
    choroid: { name: '脈絡膜', desc: '富含血管，供應視網膜養分。' },
    sclera: { name: '鞏膜', desc: '眼白，保護眼球的堅韌外殼。' },
    opticNerve: { name: '視神經', desc: '把視網膜的訊號傳送到大腦。' },
    iol: { name: '人工水晶體', desc: '透明的人工鏡片，取代混濁的水晶體。' },
  },
  hints: {
    followLine: '請沿著虛線劃',
    followCircle: '請沿著虛線圓圈拖動',
    moveToMarker: '把刀尖拖到閃爍的標記點',
    moveToPiece: '把探頭移到發光的碎塊旁',
    grabDisc: '先把鑷子移到發光的囊片上再按住',
    pushInjector: '按住推注器往切口方向推',
    stepDone: '完成！請按「下一步」',
  },
  ui: {
    prev: '上一步',
    restart: '重來這一步',
    next: '下一步',
    demoStep: '示範這一步',
    demoAll: '從頭示範',
    stop: '停止示範',
    labels: '名稱標籤',
    resetView: '視角重置',
    chooseRoute: '選擇手術方式：',
    otherRoute: '換另一種方式再看一次',
    before: '手術前',
    after: '手術後',
    cloudy: '白內障時看出去的樣子',
    noWebGL: '這台裝置的瀏覽器不支援 3D 顯示，請改用最新版 Chrome 或 Edge 開啟。',
  },
};
```

- [ ] **Step 6: 確認測試通過**

Run: `npm test`
Expected: 所有測試 PASS。

- [ ] **Step 7: Commit**

```bash
git add src/core test/core.test.js 白內障手術模擬/content.js
git commit -m "feat: add routes, eye state, step skips and patient-education content"
```

---

### Task 3: 幾何、補間與示範工具

**Files:**
- Create: `src/core/geometry.js`, `src/core/tween.js`, `src/core/demo.js`
- Test: `test/geometry.test.js`, `test/tween.test.js`, `test/demo.test.js`

**Interfaces:**
- Produces (`geometry.js`): `dist2D(ax, az, bx, bz) → number`、`clampToDisk(x, z, radius) → {x, z}`、`shaftDirection(from, to) → {x,y,z}`（from→to 單位向量；兩點重合時回傳零向量）、`createArcTracker(radius, bins=36, tolerance=0.8)`、`createLineTracker(a, b, bins=20, tolerance=0.9)`；追蹤器方法 `add(x, z) → bool`（是否落在路徑上）、`lift()`（斷開筆畫）、`coverage() → 0..1`、`hits() → bool[]`。弧的第 i 格對應角度 `[i, i+1) * 2π / bins`，角度 = `atan2(z, x)`。
- Produces (`tween.js`): `ease(k)`、`class Tweens { add(duration, onUpdate(k), onDone?) ; update(dt) ; clear() ; busy }`
- Produces (`demo.js`): `createDemoPlayer(events, emit(type, event)) → { update(dt), finished }`、`linePoints(a, b, count)`、`circlePoints(radius, count, startAngle=0)`、`dragEvents(points, start, duration)`；事件格式 `{ t, type: 'down'|'move'|'up', x, z }`。

- [ ] **Step 1: 寫失敗測試**

`test/geometry.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { dist2D, clampToDisk, shaftDirection, createArcTracker, createLineTracker } from '../src/core/geometry.js';

const close = (a, b) => assert.ok(Math.abs(a - b) < 1e-9, `${a} ≈ ${b}`);

test('dist2D and clampToDisk', () => {
  close(dist2D(0, 0, 3, 4), 5);
  assert.deepEqual(clampToDisk(1, 1, 5), { x: 1, z: 1 });
  const c = clampToDisk(6, 8, 5);
  close(c.x, 3); close(c.z, 4);
});

test('shaftDirection is a unit vector from → to', () => {
  const d = shaftDirection({ x: 0, y: 0, z: 0 }, { x: 0, y: 3, z: 4 });
  close(d.x, 0); close(d.y, 0.6); close(d.z, 0.8);
  const zero = shaftDirection({ x: 1, y: 1, z: 1 }, { x: 1, y: 1, z: 1 });
  assert.equal(Math.hypot(zero.x, zero.y, zero.z), 0);
});

test('arc tracker: a full sparse circle is fully covered thanks to interpolation', () => {
  const t = createArcTracker(2.6, 36, 0.8);
  for (let i = 0; i <= 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    t.add(2.6 * Math.cos(a), 2.6 * Math.sin(a));
  }
  assert.equal(t.coverage(), 1);
});

test('arc tracker ignores points off the circle and lift breaks strokes', () => {
  const t = createArcTracker(2.6, 36, 0.8);
  assert.equal(t.add(0, 0), false);
  t.lift();  // 不斷開的話，(0,0)→(10,0) 的補點會經過圓周
  assert.equal(t.add(10, 0), false);
  t.lift();
  assert.equal(t.coverage(), 0);
  t.add(2.6, 0);
  t.lift();
  t.add(-2.6, 0);
  assert.equal(t.hits().filter(Boolean).length, 2);
});

test('line tracker covers bins along the segment only', () => {
  const t = createLineTracker({ x: 0, z: -3 }, { x: 0, z: 3 }, 20, 0.9);
  assert.equal(t.add(3, 0), false);
  t.add(0, -3);
  t.add(0, 0);
  assert.ok(Math.abs(t.coverage() - 0.5) <= 0.05 + 1e-9);
  t.add(0.5, 3);
  assert.equal(t.coverage(), 1);
});
```

`test/tween.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Tweens, ease } from '../src/core/tween.js';

test('ease endpoints', () => {
  assert.equal(ease(0), 0);
  assert.equal(ease(1), 1);
  assert.equal(ease(0.5), 0.5);
});

test('tween runs from 0 to 1 then calls done once', () => {
  const tw = new Tweens();
  const seen = [];
  let done = 0;
  tw.add(1, k => seen.push(k), () => done++);
  assert.deepEqual(seen, [0]);
  tw.update(0.5);
  tw.update(0.6);
  tw.update(0.6);
  assert.deepEqual(seen, [0, 0.5, 1]);
  assert.equal(done, 1);
  assert.equal(tw.busy, false);
});

test('chained tween starts on the next update, clear stops everything', () => {
  const tw = new Tweens();
  const log = [];
  tw.add(0.1, () => {}, () => tw.add(1, k => log.push(k)));
  tw.update(0.2);
  assert.deepEqual(log, [0]);
  tw.update(0.5);
  assert.deepEqual(log, [0, 0.5]);
  tw.clear();
  tw.update(1);
  assert.deepEqual(log, [0, 0.5]);
});
```

`test/demo.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createDemoPlayer, dragEvents, linePoints, circlePoints } from '../src/core/demo.js';

test('player emits events in time order', () => {
  const got = [];
  const p = createDemoPlayer(
    [{ t: 1, type: 'up', x: 2, z: 0 }, { t: 0, type: 'down', x: 0, z: 0 }, { t: 0.5, type: 'move', x: 1, z: 0 }],
    (type, e) => got.push(`${type}:${e.x}`),
  );
  p.update(0.4);
  assert.deepEqual(got, ['down:0']);
  assert.equal(p.finished, false);
  p.update(1);
  assert.deepEqual(got, ['down:0', 'move:1', 'up:2']);
  assert.equal(p.finished, true);
});

test('dragEvents: down, moves, up with increasing time', () => {
  const ev = dragEvents(linePoints({ x: 0, z: 0 }, { x: 4, z: 0 }, 4), 1, 2);
  assert.equal(ev[0].type, 'down');
  assert.equal(ev.at(-1).type, 'up');
  assert.equal(ev.filter(e => e.type === 'move').length, 5);
  for (let i = 1; i < ev.length; i++) assert.ok(ev[i].t >= ev[i - 1].t);
  assert.equal(ev.at(-1).x, 4);
});

test('circlePoints closes the loop', () => {
  const pts = circlePoints(2, 8);
  assert.equal(pts.length, 9);
  assert.ok(Math.abs(pts[0].x - pts[8].x) < 1e-9 && Math.abs(pts[0].z - pts[8].z) < 1e-9);
});
```

- [ ] **Step 2: 確認測試失敗**

Run: `npm test`
Expected: FAIL，找不到 `geometry.js`、`tween.js`、`demo.js`。

- [ ] **Step 3: 建立 `src/core/geometry.js`**

```js
// 純數學工具（不依賴 three），可在 Node 測試

export function dist2D(ax, az, bx, bz) {
  return Math.hypot(ax - bx, az - bz);
}

export function clampToDisk(x, z, radius) {
  const r = Math.hypot(x, z);
  if (r <= radius) return { x, z };
  return { x: (x / r) * radius, z: (z / r) * radius };
}

// from 指向 to 的單位向量；兩點重合時回傳零向量
export function shaftDirection(from, to) {
  const dx = to.x - from.x, dy = to.y - from.y, dz = to.z - from.z;
  const len = Math.hypot(dx, dy, dz);
  if (len < 1e-9) return { x: 0, y: 0, z: 0 };
  return { x: dx / len, y: dy / len, z: dz / len };
}

// 拖曳覆蓋追蹤：把路徑切成 bins 格，筆畫經過的格子記為完成。
// 兩次取樣之間每 0.2mm 補點，避免拖太快跳格。
function strokeTracker(bins, locate) {
  const hit = new Array(bins).fill(false);
  let last = null;
  function mark(x, z) {
    const i = locate(x, z);
    if (i === null) return false;
    hit[Math.min(bins - 1, Math.max(0, i))] = true;
    return true;
  }
  return {
    add(x, z) {
      let onPath = false;
      if (last) {
        const n = Math.max(1, Math.ceil(Math.hypot(x - last.x, z - last.z) / 0.2));
        for (let i = 1; i <= n; i++) onPath = mark(last.x + ((x - last.x) * i) / n, last.z + ((z - last.z) * i) / n) || onPath;
      } else {
        onPath = mark(x, z);
      }
      last = { x, z };
      return onPath;
    },
    lift() { last = null; },
    coverage() { return hit.filter(Boolean).length / bins; },
    hits() { return hit.slice(); },
  };
}

export function createArcTracker(radius, bins = 36, tolerance = 0.8) {
  return strokeTracker(bins, (x, z) => {
    if (Math.abs(Math.hypot(x, z) - radius) > tolerance) return null;
    const a = (Math.atan2(z, x) + Math.PI * 2) % (Math.PI * 2);
    return Math.floor((a / (Math.PI * 2)) * bins);
  });
}

export function createLineTracker(a, b, bins = 20, tolerance = 0.9) {
  const dx = b.x - a.x, dz = b.z - a.z, len2 = dx * dx + dz * dz;
  return strokeTracker(bins, (x, z) => {
    const t = ((x - a.x) * dx + (z - a.z) * dz) / len2;
    if (t < 0 || t > 1) return null;
    if (Math.hypot(x - (a.x + dx * t), z - (a.z + dz * t)) > tolerance) return null;
    return Math.floor(t * bins);
  });
}
```

- [ ] **Step 4: 建立 `src/core/tween.js`**

```js
// 簡單補間動畫；每個步驟各自擁有一組，離開步驟時 clear()
export const ease = k => (k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2);

export class Tweens {
  constructor() { this.list = []; }

  add(duration, onUpdate, onDone) {
    const tween = { t: 0, duration, onUpdate, onDone };
    this.list.push(tween);
    onUpdate(0);
    return tween;
  }

  update(dt) {
    for (const tween of [...this.list]) {
      if (!this.list.includes(tween)) continue;
      tween.t = Math.min(tween.duration, tween.t + dt);
      const k = tween.duration > 0 ? tween.t / tween.duration : 1;
      tween.onUpdate(k);
      if (k >= 1) {
        this.list.splice(this.list.indexOf(tween), 1);
        tween.onDone?.();
      }
    }
  }

  clear() { this.list.length = 0; }

  get busy() { return this.list.length > 0; }
}
```

- [ ] **Step 5: 建立 `src/core/demo.js`**

```js
// 自動示範：依時間把預錄的指標事件送進步驟
// 事件格式 { t: 秒, type: 'down' | 'move' | 'up', x, z }
export function createDemoPlayer(events, emit) {
  const list = [...events].sort((a, b) => a.t - b.t);
  let time = 0, index = 0;
  return {
    update(dt) {
      time += dt;
      while (index < list.length && list[index].t <= time) {
        const e = list[index++];
        emit(e.type, e);
      }
    },
    get finished() { return index >= list.length; },
  };
}

export function linePoints(a, b, count) {
  const pts = [];
  for (let i = 0; i <= count; i++) {
    const t = i / count;
    pts.push({ x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t });
  }
  return pts;
}

export function circlePoints(radius, count, startAngle = 0) {
  const pts = [];
  for (let i = 0; i <= count; i++) {
    const a = startAngle + (i / count) * Math.PI * 2;
    pts.push({ x: radius * Math.cos(a), z: radius * Math.sin(a) });
  }
  return pts;
}

// 按下 → 沿點移動 → 放開
export function dragEvents(points, start, duration) {
  const last = points.length - 1;
  const events = [{ t: start, type: 'down', ...points[0] }];
  points.forEach((p, i) => events.push({ t: start + (duration * i) / Math.max(1, last), type: 'move', ...p }));
  events.push({ t: start + duration + 0.01, type: 'up', ...points[last] });
  return events;
}
```

- [ ] **Step 6: 確認測試通過**

Run: `npm test`
Expected: 全部 PASS。

- [ ] **Step 7: Commit**

```bash
git add src/core/geometry.js src/core/tween.js src/core/demo.js test/geometry.test.js test/tween.test.js test/demo.test.js
git commit -m "feat: add geometry trackers, tweens and demo helpers"
```

---

### Task 4: 步驟控制器

**Files:**
- Create: `src/core/controller.js`
- Test: `test/controller.test.js`

**Interfaces:**
- Consumes: `ROUTES`、`createInitialState`、`createDemoPlayer`
- Consumes（步驟物件介面，所有步驟都要實作）：`{ id, view: 'orbit'|'microscope', workY: number, enter(ctx), exit(ctx), update(dt, ctx), pointerDown(p, ctx), pointerMove(p, ctx), pointerUp(p, ctx), isComplete() → bool, skip(state), demoPath(ctx) → events[] }`，其中 `p = { x, y, z }`（世界座標，y = workY）。
- Consumes: `ctx.eye.applyState(state)`
- Produces: `new StepController({ steps, ctx, onChange(controller) })`；屬性 `route, index, state, step, ids, complete, demoing`；方法 `setRoute(route)`, `goTo(index)`, `next()`, `prev()`, `restart()`, `startDemo(all)`, `stopDemo()`, `pointer(type, p)`, `update(dt)`。`goTo` 會把 `ctx.state` 設為新的狀態物件。

- [ ] **Step 1: 寫失敗測試 `test/controller.test.js`**

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { StepController } from '../src/core/controller.js';
import { ROUTES } from '../src/core/routes.js';

function setup() {
  const log = [];
  const steps = {};
  for (const id of new Set([...ROUTES.classic, ...ROUTES.femto])) {
    steps[id] = {
      id,
      view: 'microscope',
      workY: 9,
      done: false,
      enter() { log.push(`enter:${id}`); },
      exit() { log.push(`exit:${id}`); },
      update() {},
      pointerDown(p) { log.push(`down:${id}:${p.x}`); },
      pointerMove() {},
      pointerUp() {},
      isComplete() { return this.done; },
      skip: s => { s.visited = [...(s.visited ?? []), id]; },
      demoPath: () => [],
    };
  }
  const applied = [];
  const ctx = { eye: { applyState: s => applied.push(s) } };
  let changes = 0;
  const c = new StepController({ steps, ctx, onChange: () => changes++ });
  return { c, steps, log, applied, ctx, changes: () => changes };
}

test('goTo rebuilds state from the skips of earlier steps', () => {
  const { c, applied, ctx } = setup();
  c.goTo(3);
  assert.equal(c.step.id, 'chop');
  assert.deepEqual(c.state.visited, ['intro', 'incision', 'capsulorhexis']);
  assert.equal(ctx.state, c.state);
  assert.equal(applied.at(-1), c.state);
});

test('next / prev / restart exit and enter steps', () => {
  const { c, log } = setup();
  c.goTo(0);
  c.next();
  c.prev();
  c.restart();
  assert.deepEqual(log, ['enter:intro', 'exit:intro', 'enter:incision', 'exit:incision', 'enter:intro', 'exit:intro', 'enter:intro']);
});

test('femto route uses its own steps', () => {
  const { c } = setup();
  c.setRoute('femto');
  c.goTo(1);
  assert.equal(c.step.id, 'laser');
  assert.equal(c.state.route, 'femto');
});

test('pointer events reach the current step, but not while demoing', () => {
  const { c, steps, log } = setup();
  c.goTo(1);
  c.pointer('down', { x: 5, y: 9, z: 0 });
  assert.ok(log.includes('down:incision:5'));
  steps.incision.demoPath = () => [{ t: 0, type: 'down', x: 7, z: 0 }];
  c.startDemo(false);
  c.pointer('down', { x: 6, y: 9, z: 0 });
  c.update(0.1);
  assert.ok(!log.includes('down:incision:6'));
  assert.ok(log.includes('down:incision:7'));
});

test('completion change triggers onChange', () => {
  const { c, steps, changes } = setup();
  c.goTo(1);
  const before = changes();
  steps.incision.done = true;
  c.update(0.016);
  assert.equal(c.complete, true);
  assert.equal(changes(), before + 1);
});

test('demo all walks every step and stops at done', () => {
  const { c, steps } = setup();
  for (const s of Object.values(steps)) s.done = true;
  c.startDemo(true);
  for (let i = 0; i < 40; i++) c.update(0.5);
  assert.equal(c.step.id, 'done');
  assert.equal(c.demoing, false);
});
```

- [ ] **Step 2: 確認測試失敗**

Run: `npm test`
Expected: FAIL，找不到 `controller.js`。

- [ ] **Step 3: 建立 `src/core/controller.js`**

```js
import { ROUTES } from './routes.js';
import { createInitialState } from './state.js';
import { createDemoPlayer } from './demo.js';

const HANDLERS = { down: 'pointerDown', move: 'pointerMove', up: 'pointerUp' };
const ADVANCE_DELAY = 1.2;  // 自動示範：步驟完成後停留秒數
const STUCK_TIMEOUT = 5;    // 自動示範：播完仍未完成時，最多再等幾秒

export class StepController {
  constructor({ steps, ctx, onChange = () => {} }) {
    this.steps = steps;
    this.ctx = ctx;
    this.onChange = onChange;
    this.route = 'classic';
    this.index = 0;
    this.state = createInitialState(this.route);
    this.current = null;
    this.complete = false;
    this.demo = null;
    this.demoAll = false;
    this.waited = 0;
  }

  get ids() { return ROUTES[this.route]; }
  get step() { return this.current; }
  get demoing() { return this.demo !== null; }

  setRoute(route) { this.route = route; }

  goTo(index) {
    this.current?.exit(this.ctx);
    this.index = Math.max(0, Math.min(index, this.ids.length - 1));
    const state = createInitialState(this.route);
    for (let i = 0; i < this.index; i++) this.steps[this.ids[i]].skip(state);
    this.state = state;
    this.ctx.state = state;
    this.ctx.eye.applyState(state);
    this.current = this.steps[this.ids[this.index]];
    this.complete = false;
    this.waited = 0;
    this.current.enter(this.ctx);
    this.onChange(this);
  }

  next() { this.stopDemo(); if (this.index < this.ids.length - 1) this.goTo(this.index + 1); }
  prev() { this.stopDemo(); if (this.index > 0) this.goTo(this.index - 1); }
  restart() { this.stopDemo(); this.goTo(this.index); }

  startDemo(all = false) {
    this.demoAll = all;
    this.goTo(all ? 1 : this.index);
    this.playCurrent();
  }

  stopDemo() {
    if (!this.demo && !this.demoAll) return;
    this.demo = null;
    this.demoAll = false;
    this.onChange(this);
  }

  playCurrent() {
    const events = this.current.demoPath(this.ctx);
    this.demo = createDemoPlayer(events, (type, e) => this.dispatch(type, { x: e.x, y: this.current.workY, z: e.z }));
    this.waited = 0;
    this.onChange(this);
  }

  pointer(type, point) {
    if (this.demo) return;
    this.dispatch(type, point);
  }

  dispatch(type, point) {
    this.current?.[HANDLERS[type]](point, this.ctx);
  }

  update(dt) {
    if (!this.current) return;
    this.demo?.update(dt);
    this.current.update(dt, this.ctx);
    const complete = this.current.isComplete();
    if (complete !== this.complete) {
      this.complete = complete;
      this.onChange(this);
    }
    if (!this.demo?.finished) return;
    this.waited += dt;
    if (!(complete ? this.waited > ADVANCE_DELAY : this.waited > STUCK_TIMEOUT)) return;
    if (!this.demoAll) { this.stopDemo(); return; }
    const last = this.ids.length - 1;
    this.goTo(this.index + 1);
    if (this.index === last) this.stopDemo();
    else this.playCurrent();
  }
}
```

- [ ] **Step 4: 確認測試通過**

Run: `npm test`
Expected: 全部 PASS。

- [ ] **Step 5: Commit**

```bash
git add src/core/controller.js test/controller.test.js
git commit -m "feat: add step controller with skip-based rebuild and demo playback"
```

---

### Task 5: 3D 剖面眼球

**Files:**
- Create: `src/eye/anatomy.js`, `src/eye/layout.js`, `src/eye/revolve.js`, `src/eye/materials.js`, `src/eye/eyeModel.js`
- Modify: `src/main.js`（整檔改成只顯示眼球的暫時版本，Task 6 再取代）
- Test: `test/eye.test.js`

**Interfaces:**
- Produces (`anatomy.js`): `LENS {center, radius, front, back}`、`NUCLEUS_SCALE`、`CAPSULE_OPENING = 2.6`、`CAPSULE_Y = 9.3`、`IOL_Y = 8`、`INCISIONS { main: {x:5.5,y:10.8,z:0,length:2.2}, side: {x:0,y:10.8,z:-5.5,length:1.0} }`、`PROFILES`、`LABEL_ANCHORS`
- Produces (`layout.js`): `HALF_GAP`, `QUARTER_GAP`, `LASER_GAP`, `nucleusLayout(state) → { half?, quarter?, rotation? }`
- Produces (`revolve.js`): `makeRevolvedPart(profile, material, { phiStart, phiLength }) → { full: Group, cut: Group|null }`、`inCutRegion(x, z)`、`class Part(id, variants)`，含 `group`, `setPresent(bool)`, `setCutaway(bool)`
- Produces (`materials.js`): `BASE_CORTEX_OPACITY`、`createMaterials()`
- Produces (`eyeModel.js`) `createEye(layers) →`：
  - `root`, `parts`（含 `capsuleDisc`, `cortex` 等 Part）, `pieces[{ outer, material, dir, centroid, present }]`, `nucleusGroup`, `laserRing`, `incisionMarks {main, side}`, `iol { group, setPose(x, y, z, unfold) }`, `labels`
  - `setCutaway(on)`, `setNucleusLayout({half, quarter, rotation})`, `setPiecePresent(i, bool)`, `setGlow(i, amount)`, `setDiscGlow(amount)`, `setCortexOpacity(o)`, `applyState(state)`
  - 每個可點選的網格 `mesh.userData.layerId` 等於 `CONTENT.layers` 的鍵。

- [ ] **Step 1: 寫失敗測試 `test/eye.test.js`**

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeRevolvedPart, inCutRegion } from '../src/eye/revolve.js';
import { nucleusLayout, HALF_GAP, QUARTER_GAP, LASER_GAP } from '../src/eye/layout.js';
import { PROFILES } from '../src/eye/anatomy.js';
import { createInitialState } from '../src/core/state.js';

const square = [[0, 0], [1, 0], [1, 1], [0, 1]];

test('full revolution: no caps, cut variant has two caps', () => {
  const { full, cut } = makeRevolvedPart(square, null);
  assert.equal(full.children.length, 1);
  assert.equal(cut.children.length, 3);
});

test('a quadrant inside the removed quarter has no cut variant', () => {
  const { full, cut } = makeRevolvedPart(square, null, { phiStart: Math.PI * 1.5, phiLength: Math.PI / 2 });
  assert.equal(full.children.length, 3);
  assert.equal(cut, null);
});

test('cut region is x<0 and z>0', () => {
  assert.equal(inCutRegion(-1, 1), true);
  assert.equal(inCutRegion(1, 1), false);
  assert.equal(inCutRegion(-1, -1), false);
});

test('nucleus layout follows state', () => {
  const s = createInitialState('classic');
  assert.deepEqual(nucleusLayout(s), {});
  s.nucleusSplit = 1;
  assert.deepEqual(nucleusLayout(s), { half: HALF_GAP, rotation: Math.PI / 2 });
  s.nucleusSplit = 2;
  assert.deepEqual(nucleusLayout(s), { half: HALF_GAP, quarter: QUARTER_GAP, rotation: Math.PI / 2 });
  const f = createInitialState('femto');
  f.laserDone = true;
  f.nucleusSplit = 2;
  assert.deepEqual(nucleusLayout(f), { quarter: LASER_GAP });
});

test('every profile has at least 3 points with r >= 0', () => {
  for (const [name, profile] of Object.entries(PROFILES)) {
    assert.ok(profile.length >= 3, name);
    for (const [r] of profile) assert.ok(r >= 0, name);
  }
});
```

- [ ] **Step 2: 確認測試失敗**

Run: `npm test`
Expected: FAIL，找不到 `src/eye/revolve.js`。

- [ ] **Step 3: 建立 `src/eye/anatomy.js`**

```js
// 眼球尺寸（毫米）。眼球中心在原點，光軸為 +Y，角膜朝上。
// 輪廓為 [r, y] 封閉多邊形，r 為離光軸的距離。

export const LENS = { center: 8, radius: 4.6, front: 1.5, back: 2.5 };
export const NUCLEUS_SCALE = 0.68;
export const CAPSULE_OPENING = 2.6;  // 撕囊半徑（直徑約 5.2mm）
export const CAPSULE_Y = 9.3;        // 撕囊圓周處前囊的高度
export const IOL_Y = 8;

export const INCISIONS = {
  main: { x: 5.5, y: 10.8, z: 0, length: 2.2 },
  side: { x: 0, y: 10.8, z: -5.5, length: 1.0 },
};

const T_OPEN = Math.asin(CAPSULE_OPENING / LENS.radius);
const rad = d => (d * Math.PI) / 180;

// 圓心在光軸 (0, cy)、半徑 R，角度 a0→a1（度，0 度指向 +r）
export function arc(cy, R, a0, a1, n = 32) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const a = rad(a0 + ((a1 - a0) * i) / n);
    pts.push([Math.max(0, R * Math.cos(a)), cy + R * Math.sin(a)]);
  }
  return pts;
}

// 水晶體表面：t=0 前極、t=π/2 赤道、t=π 後極；s 為縮放
export function lensCurve(t0, t1, s, n = 32) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const t = t0 + ((t1 - t0) * i) / n;
    const depth = t < Math.PI / 2 ? LENS.front : LENS.back;
    pts.push([Math.max(0, s * LENS.radius * Math.sin(t)), LENS.center + s * depth * Math.cos(t)]);
  }
  return pts;
}

const shell = (outer, inner) => [...outer, ...[...inner].reverse()];

export const PROFILES = {
  sclera: shell(arc(0, 12, -90, 61.1), arc(0, 11.4, -90, 61.1)),
  choroid: shell(arc(0, 11.38, -90, 35), arc(0, 11.15, -90, 35)),
  retina: shell(arc(0, 11.13, -90, 32), arc(0, 10.9, -90, 32)),
  opticNerve: [[0, -11.95], [1.6, -11.95], [1.6, -18], [0, -18]],
  cornea: shell(arc(5.285, 7.8, 90, 41.96), arc(5.285, 7.2, 90, 36.3)),
  iris: [[3.2, 9.3], [5.6, 9.0], [5.6, 9.4], [3.2, 9.6]],
  ciliary: [[5.3, 8.7], [5.8, 9.2], [6.3, 9.0], [7.6, 7.8], [8.9, 6.4], [8.6, 6.0], [6.6, 7.0], [5.4, 8.0]],
  vitreous: [...arc(0, 10.88, -90, 30), [6.5, 6.6], ...lensCurve(1.75, Math.PI, 1.04)],
  cortex: lensCurve(0, Math.PI, 0.98),
  nucleus: lensCurve(0, Math.PI, NUCLEUS_SCALE),
  capsuleBag: shell(lensCurve(T_OPEN, Math.PI, 1.03), lensCurve(T_OPEN, Math.PI, 1.0)),
  capsuleDisc: shell(lensCurve(0, T_OPEN, 1.03), lensCurve(0, T_OPEN, 1.0)),
};

// 名稱標籤放在剖面上（x<0、z=0 的半平面）
export const LABEL_ANCHORS = {
  cornea: [-2.5, 12.4, 0],
  anteriorChamber: [-1.5, 11.0, 0],
  iris: [-4.4, 9.3, 0],
  capsule: [-3.5, 6.35, 0],
  cortex: [-3.7, 8.0, 0],
  nucleus: [-1.4, 8.0, 0],
  zonules: [-5.0, 8.2, 0],
  ciliary: [-7.0, 7.5, 0],
  vitreous: [-4.0, 0, 0],
  retina: [-9.5, -5.5, 0],
  choroid: [-8.0, -8.0, 0],
  sclera: [-5.85, -10.1, 0],
  opticNerve: [-0.8, -15, 0],
  iol: [-2.0, 8.6, 0],
};
```

- [ ] **Step 4: 建立 `src/eye/layout.js`**

```js
// 水晶體核四塊的排列：half 為兩半分開距離、quarter 為四塊向外距離、rotation 為整顆核繞光軸旋轉
export const HALF_GAP = 0.3;
export const QUARTER_GAP = 0.35;
export const LASER_GAP = 0.1;

export function nucleusLayout(s) {
  if (s.route === 'femto' && s.laserDone) return { quarter: LASER_GAP };
  if (s.nucleusSplit >= 2) return { half: HALF_GAP, quarter: QUARTER_GAP, rotation: Math.PI / 2 };
  if (s.nucleusSplit === 1) return { half: HALF_GAP, rotation: Math.PI / 2 };
  return {};
}
```

- [ ] **Step 5: 建立 `src/eye/revolve.js`**

```js
import * as THREE from 'three';

const TAU = Math.PI * 2;
const CUT_END = Math.PI * 1.5;  // 剖面模式只保留 φ ∈ [0, 1.5π]

export function inCutRegion(x, z) {
  return x < 0 && z > 0;
}

const toVec2 = profile => profile.map(([r, y]) => new THREE.Vector2(r, y));

function lathe(profile, material, phiStart, phiLength) {
  const pts = toVec2(profile);
  pts.push(pts[0].clone());
  const segments = Math.max(6, Math.round((72 * phiLength) / TAU));
  return new THREE.Mesh(new THREE.LatheGeometry(pts, segments, phiStart, phiLength), material);
}

// 剖面封面：ShapeGeometry 在 XY 平面（x=r），轉到角度 phi 的半平面 (sin φ, 0, cos φ)
function cap(profile, material, phi) {
  const mesh = new THREE.Mesh(new THREE.ShapeGeometry(new THREE.Shape(toVec2(profile))), material);
  mesh.rotation.y = phi - Math.PI / 2;
  return mesh;
}

function wedge(profile, material, start, length) {
  const group = new THREE.Group();
  group.add(lathe(profile, material, start, length));
  if (length < TAU - 1e-6) group.add(cap(profile, material, start), cap(profile, material, start + length));
  return group;
}

export function makeRevolvedPart(profile, material, { phiStart = 0, phiLength = TAU } = {}) {
  const full = wedge(profile, material, phiStart, phiLength);
  const s = Math.max(phiStart, 0);
  const e = Math.min(phiStart + phiLength, CUT_END);
  const cut = e - s > 1e-6 ? wedge(profile, material, s, e - s) : null;
  return { full, cut };
}

// 一層組織：同時持有完整版與剖面版，依模式切換
export class Part {
  constructor(id, { full, cut }) {
    this.id = id;
    this.group = new THREE.Group();
    this.full = full;
    this.cut = cut;
    this.group.add(full);
    if (cut) this.group.add(cut);
    this.group.traverse(o => { if (o.isMesh) o.userData.layerId = id; });
    this.present = true;
    this.cutaway = false;
    this.refresh();
  }

  setPresent(present) { this.present = present; this.refresh(); }
  setCutaway(on) { this.cutaway = on; this.refresh(); }

  refresh() {
    this.group.visible = this.present;
    this.full.visible = !this.cutaway;
    if (this.cut) this.cut.visible = this.cutaway;
  }
}
```

- [ ] **Step 6: 確認測試通過**

Run: `npm test`
Expected: 全部 PASS。

- [ ] **Step 7: 建立 `src/eye/materials.js`**

```js
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
```

- [ ] **Step 8: 建立 `src/eye/eyeModel.js`**

```js
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
```

- [ ] **Step 9: 把 `src/main.js` 換成只顯示眼球的暫時版本**

```js
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
```

- [ ] **Step 10: 在瀏覽器確認**

`npm run serve` 正在跑時存檔會自動重建（或執行 `npm run build`）。在 `sim` 預覽重新整理後截圖。
Expected:
- 看到切掉右前方 1/4 的眼球，剖面上依序可分辨：鞏膜（白）、脈絡膜（紅褐）、視網膜（橘）、玻璃體（淡藍透明）、視神經、睫狀體、虹膜（棕）、懸韌帶細線、水晶體（乳白皮質包著黃褐色核）、角膜（淡藍透明）。
- 14 個標籤中，除了「人工水晶體」外都出現在剖面上。
- 用 `javascript_tool` 執行 `__sim.eye.setNucleusLayout({ half: 0.3, quarter: 0.35, rotation: Math.PI / 2 })` 後截圖：核分成分開的 4 塊，剖面那 1/4 的那塊被藏起來。
- 確認 console 沒有錯誤（`read_console_messages` onlyErrors）。

- [ ] **Step 11: Commit**

```bash
git add src/eye src/main.js test/eye.test.js 白內障手術模擬/app.js
git commit -m "feat: build procedural cutaway eye model with labeled layers"
```

---

### Task 6: 應用程式外框（介面、視角、器械、控制器串接）

**Files:**
- Create: `src/view/views.js`, `src/ui/ui.js`, `src/vision/vision.js`, `src/instruments/instruments.js`, `src/fx/particles.js`, `src/steps/common.js`, `src/steps/index.js`
- Modify: `src/main.js`（整檔換成正式版本）

**Interfaces:**
- Consumes: `createEye`, `StepController`, `SKIPS`, `otherRoute`, `window.CONTENT`
- Produces (`views.js`): `createViews(renderer) → { mode, camera, inset, controls, setMode(m), resize(w, h), insetRect(w, h) → {x, y, w, h}（WebGL 座標，y 由下往上）, resetOrbit() }`
- Produces (`ui.js`): `createUI(content, handlers) → { setStep({route, ids, index, complete, demoing, view}), setLabelsOn(on), showHint(text), showLayer(id|null), setCounter(text|null), setInsetRect(rect|null), fatal(text) }`；handlers 鍵：`prev, next, restart, demoStep, demoAll, stopDemo, toggleLabels, resetView, chooseRoute(route), otherRoute`
- Produces (`instruments.js`): `class Instrument { tip: Vector3; pivot(p) → this; aim(p) → this; setTip(x, y, z); show() → this; hide() → this; setOpacity(a) }`；`createInstruments(scene) → { blade, forceps, probe, chopper, ia, injector, femto }`（`femto` 是 `THREE.Group`，其餘是 `Instrument`）。`pivot(p)`：桿身穿過切口 p；`aim(p)`：桿身沿「p → 尖端」方向往外延伸。
- Produces (`particles.js`): `class Particles { emit(from, to, count=2); update(dt) }`
- Produces (`common.js`): `baseStep(def)`（補齊步驟介面預設值）、`lerp3(a, b, k)`
- Produces (`index.js`): `createSteps(deps) → Record<stepId, step>`；`deps = { scene, eye, tools, ui, content, particles }`
- Produces: `window.__sim = { controller, eye, views }`（驗收用）

- [ ] **Step 1: 建立 `src/view/views.js`**

```js
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
    orbit.position.set(-32, 22, 36);
    controls.target.set(0, 3, 0);
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
```

- [ ] **Step 2: 建立 `src/vision/vision.js`**

```js
// 程式繪製的街景插畫，用於術前／術後視力對比（不使用外部圖片，沒有版權問題）
export function drawStreet(canvas) {
  const g = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height, ground = h * 0.62;

  const sky = g.createLinearGradient(0, 0, 0, ground);
  sky.addColorStop(0, '#6ec3f4');
  sky.addColorStop(1, '#d9f1ff');
  g.fillStyle = sky;
  g.fillRect(0, 0, w, h);

  g.fillStyle = '#ffd54f';
  g.beginPath();
  g.arc(w * 0.85, h * 0.18, 26, 0, Math.PI * 2);
  g.fill();

  const buildings = [[20, 90, 90, '#ef8a62'], [120, 60, 80, '#5c9ead'], [210, 110, 70, '#f4c95d'], [290, 75, 100, '#8e7cc3'], [400, 100, 70, '#66bb6a']];
  for (const [x, top, bw, color] of buildings) {
    g.fillStyle = color;
    g.fillRect(x, top, bw, ground - top);
    g.fillStyle = 'rgba(255,255,255,0.85)';
    for (let wy = top + 12; wy < ground - 20; wy += 24) {
      for (let wx = x + 10; wx < x + bw - 14; wx += 22) g.fillRect(wx, wy, 12, 14);
    }
  }

  g.fillStyle = '#555f6b';
  g.fillRect(0, ground, w, h - ground);
  g.fillStyle = '#ffffff';
  for (let x = 10; x < w; x += 60) g.fillRect(x, h * 0.82, 34, 6);

  g.fillStyle = '#795548';
  g.fillRect(452, h * 0.45, 10, ground - h * 0.45);
  g.fillStyle = '#2e7d32';
  g.beginPath();
  g.arc(457, h * 0.42, 26, 0, Math.PI * 2);
  g.fill();

  g.fillStyle = '#1565c0';
  g.fillRect(40, h * 0.66, 130, 44);
  g.fillStyle = '#ffffff';
  g.font = 'bold 24px "Microsoft JhengHei", sans-serif';
  g.textBaseline = 'middle';
  g.fillText('眼科診所', 54, h * 0.66 + 22);
}
```

- [ ] **Step 3: 建立 `src/ui/ui.js`**

```js
import { drawStreet } from '../vision/vision.js';
import { otherRoute } from '../core/routes.js';

export function createUI(content, handlers) {
  const $ = id => document.getElementById(id);
  const text = content.ui;
  document.title = content.appTitle;
  $('app-title').textContent = content.appTitle;

  const controls = $('controls');
  const button = (label, onClick, className = '') => {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = label;
    b.className = className;
    b.addEventListener('click', onClick);
    controls.appendChild(b);
    return b;
  };
  let demoing = false;
  const btn = {
    prev: button(text.prev, () => handlers.prev()),
    restart: button(text.restart, () => handlers.restart()),
    demo: button(text.demoStep, () => (demoing ? handlers.stopDemo() : handlers.demoStep())),
    demoAll: button(text.demoAll, () => handlers.demoAll()),
    labels: button(text.labels, () => handlers.toggleLabels(), 'toggle'),
    resetView: button(text.resetView, () => handlers.resetView()),
    next: button(text.next, () => handlers.next(), 'primary'),
  };

  const routeBox = $('route-choice');
  const routeLabel = document.createElement('span');
  routeLabel.textContent = text.chooseRoute;
  routeBox.appendChild(routeLabel);
  for (const route of ['classic', 'femto']) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'route';
    b.textContent = content.routes[route].name;
    b.addEventListener('click', () => handlers.chooseRoute(route));
    routeBox.appendChild(b);
  }
  const otherBtn = $('other-route');
  otherBtn.addEventListener('click', () => handlers.otherRoute());

  const vision = $('vision'), before = $('vision-before'), after = $('vision-after');
  drawStreet(before.querySelector('canvas'));
  drawStreet(after.querySelector('canvas'));
  after.querySelector('figcaption').textContent = text.after;

  const progress = $('progress');
  let hintTimer = 0;

  return {
    setStep({ route, ids, index, complete, demoing: isDemoing, view }) {
      demoing = isDemoing;
      const id = ids[index];
      const step = content.steps[id];

      progress.replaceChildren(...ids.map((sid, i) => {
        const li = document.createElement('li');
        li.textContent = content.steps[sid].title;
        if (i < index) li.className = 'done';
        if (i === index) li.className = 'current';
        return li;
      }));

      $('step-title').textContent = index === 0 ? step.title : `${content.routes[route].name}｜${step.title}`;
      const paras = step.text.map(t => {
        const p = document.createElement('p');
        p.textContent = t;
        return p;
      });
      if (id === 'phaco' && route === 'femto') {
        const note = document.createElement('p');
        note.className = 'note';
        note.textContent = content.routeNotes.femtoPhaco;
        paras.push(note);
      }
      $('step-body').replaceChildren(...paras);

      routeBox.hidden = id !== 'intro';
      otherBtn.hidden = id !== 'done';
      otherBtn.textContent = `${text.otherRoute}（${content.routes[otherRoute(route)].name}）`;
      vision.hidden = id !== 'intro' && id !== 'done';
      after.hidden = id !== 'done';
      before.querySelector('figcaption').textContent = id === 'intro' ? text.cloudy : text.before;

      const orbit = view === 'orbit';
      const last = index === ids.length - 1;
      btn.prev.disabled = index === 0 || isDemoing;
      btn.restart.disabled = orbit || isDemoing;
      btn.next.disabled = last || isDemoing;
      btn.next.classList.toggle('ready', complete && !last);
      btn.demo.textContent = isDemoing ? text.stop : text.demoStep;
      btn.demo.disabled = orbit && !isDemoing;
      btn.demoAll.disabled = isDemoing;
      btn.labels.hidden = !orbit;
      btn.resetView.hidden = !orbit;
      $('layer-info').hidden = true;
    },

    setLabelsOn(on) { btn.labels.classList.toggle('on', on); },

    showHint(message) {
      const el = $('hint');
      el.textContent = message;
      el.hidden = false;
      clearTimeout(hintTimer);
      hintTimer = setTimeout(() => { el.hidden = true; }, 2600);
    },

    showLayer(id) {
      const el = $('layer-info');
      if (!id) { el.hidden = true; return; }
      $('layer-name').textContent = content.layers[id].name;
      $('layer-desc').textContent = content.layers[id].desc;
      el.hidden = false;
    },

    setCounter(message) {
      const el = $('counter');
      el.hidden = !message;
      el.textContent = message ?? '';
    },

    setInsetRect(rect) {
      const el = $('inset-frame');
      el.hidden = !rect;
      if (rect) {
        el.style.width = `${rect.w}px`;
        el.style.height = `${rect.h}px`;
      }
    },

    fatal(message) {
      const el = $('fatal');
      el.textContent = message;
      el.hidden = false;
    },
  };
}
```

- [ ] **Step 4: 建立 `src/instruments/instruments.js`**

```js
import * as THREE from 'three';
import { shaftDirection } from '../core/geometry.js';

// 每支器械的本地座標：尖端在原點，桿身往 +Y 延伸
const UP = new THREE.Vector3(0, 1, 0);
const STEEL = 0xc9d1d9;
const dir = new THREE.Vector3();

const mat = (color, metal = false) =>
  new THREE.MeshStandardMaterial({ color, metalness: metal ? 0.8 : 0.1, roughness: metal ? 0.3 : 0.5 });

function rod(radius, from, to, material) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, to - from, 16), material);
  mesh.position.y = (from + to) / 2;
  return mesh;
}

function blade() {
  const g = new THREE.Group();
  const shape = new THREE.Shape([[0, 0], [0.55, 1.4], [0.2, 1.8], [-0.2, 1.8], [-0.55, 1.4]].map(([x, y]) => new THREE.Vector2(x, y)));
  g.add(new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { depth: 0.05, bevelEnabled: false }), mat(STEEL, true)));
  g.add(rod(0.2, 1.8, 7, mat(STEEL, true)), rod(0.6, 7, 22, mat(0x2f6db5)));
  return g;
}

function forceps() {
  const g = new THREE.Group();
  const steel = mat(STEEL, true);
  for (const side of [-1, 1]) {
    const prong = rod(0.08, 0, 6, steel);
    prong.position.x = side * 0.15;
    prong.rotation.z = side * 0.03;
    g.add(prong);
  }
  g.add(rod(0.45, 6, 22, steel));
  return g;
}

function probe() {
  const g = new THREE.Group();
  g.add(rod(0.3, 0, 1.2, mat(STEEL, true)), rod(0.5, 1.2, 6, mat(0x9fd3e6)), rod(1.2, 6, 24, mat(0xe8eef3)));
  return g;
}

function chopper() {
  const g = new THREE.Group();
  const steel = mat(STEEL, true);
  const hook = rod(0.09, 0, 0.8, steel);
  hook.rotation.z = Math.PI / 2;
  hook.position.set(0.4, 0, 0);
  g.add(hook, rod(0.12, 0, 7, steel), rod(0.5, 7, 20, mat(0x7a8ca0)));
  return g;
}

function ia() {
  const g = new THREE.Group();
  g.add(rod(0.3, 0, 1, mat(STEEL, true)), rod(0.45, 1, 6, mat(0xd9e6f2)), rod(1.0, 6, 22, mat(0xb0bec5)));
  return g;
}

function injector() {
  const g = new THREE.Group();
  g.add(rod(0.35, 0, 2.5, mat(0xf5f5f5)), rod(1.0, 2.5, 14, mat(0xe0f2f1)), rod(0.4, 14, 20, mat(0x26a69a)));
  return g;
}

// 飛秒雷射接觸鏡：金屬環＋半透明鏡片與外罩（俯視時看得穿）
function femtoDock() {
  const g = new THREE.Group();
  const glass = new THREE.MeshStandardMaterial({ color: 0xcfe8ff, transparent: true, opacity: 0.15, depthWrite: false, side: THREE.DoubleSide });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(7, 0.35, 12, 64), new THREE.MeshStandardMaterial({ color: 0x8a99a8, metalness: 0.6, roughness: 0.4 }));
  ring.rotation.x = Math.PI / 2;
  const cover = new THREE.Mesh(new THREE.CylinderGeometry(4.5, 7, 8, 48, 1, true), glass);
  cover.position.y = 4;
  const lens = new THREE.Mesh(new THREE.CylinderGeometry(7, 7, 0.3, 48), glass);
  g.add(ring, cover, lens);
  g.visible = false;
  return g;
}

export class Instrument {
  constructor(object) {
    this.object = object;
    this.tip = new THREE.Vector3();
    this.anchor = new THREE.Vector3();
    this.mode = 'aim';
    this.materials = [];
    object.traverse(o => { if (o.material) this.materials.push(o.material); });
    object.visible = false;
  }

  // 桿身穿過切口 p（尖端在眼內時用）
  pivot(p) { this.mode = 'pivot'; this.anchor.set(p.x, p.y, p.z); return this; }

  // 桿身沿 p → 尖端方向往外（尖端在眼外時用）
  aim(p) { this.mode = 'aim'; this.anchor.set(p.x, p.y, p.z); return this; }

  setTip(x, y, z) {
    this.tip.set(x, y, z);
    this.object.position.copy(this.tip);
    const d = this.mode === 'pivot' ? shaftDirection(this.tip, this.anchor) : shaftDirection(this.anchor, this.tip);
    if (Math.hypot(d.x, d.y, d.z) < 0.5) return;
    this.object.quaternion.setFromUnitVectors(UP, dir.set(d.x, d.y, d.z));
  }

  show() { this.object.visible = true; this.setOpacity(1); return this; }
  hide() { this.object.visible = false; return this; }

  setOpacity(a) {
    for (const m of this.materials) {
      m.opacity = a;
      m.transparent = a < 1;
      m.needsUpdate = true;
    }
  }
}

export function createInstruments(scene) {
  const tools = {
    blade: new Instrument(blade()),
    forceps: new Instrument(forceps()),
    probe: new Instrument(probe()),
    chopper: new Instrument(chopper()),
    ia: new Instrument(ia()),
    injector: new Instrument(injector()),
    femto: femtoDock(),
  };
  for (const t of Object.values(tools)) scene.add(t.object ?? t);
  return tools;
}
```

- [ ] **Step 5: 建立 `src/fx/particles.js`**

```js
import * as THREE from 'three';

// 乳化時從碎塊飛向探頭的細小顆粒
export class Particles {
  constructor(scene, max = 120) {
    this.max = max;
    this.pos = new Float32Array(max * 3).fill(-1000);
    this.target = new Float32Array(max * 3);
    this.life = new Float32Array(max);
    this.next = 0;
    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.points = new THREE.Points(this.geometry, new THREE.PointsMaterial({ color: 0xf3d27a, size: 0.22, transparent: true, opacity: 0.9, depthTest: false }));
    this.points.renderOrder = 20;
    this.points.frustumCulled = false;
    scene.add(this.points);
  }

  emit(from, to, count = 2) {
    for (let n = 0; n < count; n++) {
      const i = this.next;
      this.next = (this.next + 1) % this.max;
      this.pos[i * 3] = from.x + (Math.random() - 0.5) * 0.8;
      this.pos[i * 3 + 1] = from.y + (Math.random() - 0.5) * 0.4;
      this.pos[i * 3 + 2] = from.z + (Math.random() - 0.5) * 0.8;
      this.target[i * 3] = to.x;
      this.target[i * 3 + 1] = to.y;
      this.target[i * 3 + 2] = to.z;
      this.life[i] = 0.6;
    }
  }

  update(dt) {
    const k = Math.min(1, dt * 6);
    for (let i = 0; i < this.max; i++) {
      if (this.life[i] <= 0) continue;
      this.life[i] -= dt;
      for (let a = 0; a < 3; a++) this.pos[i * 3 + a] += (this.target[i * 3 + a] - this.pos[i * 3 + a]) * k;
      if (this.life[i] <= 0) this.pos[i * 3 + 1] = -1000;
    }
    this.geometry.attributes.position.needsUpdate = true;
  }
}
```

- [ ] **Step 6: 建立 `src/steps/common.js`**

```js
// 補齊步驟介面的預設值；各步驟只需覆寫用得到的部分
export function baseStep(def) {
  return {
    view: 'microscope',
    workY: 9.2,
    enter() {},
    exit() {},
    update() {},
    pointerDown() {},
    pointerMove() {},
    pointerUp() {},
    isComplete() { return false; },
    skip() {},
    demoPath() { return []; },
    ...def,
  };
}

export function lerp3(a, b, k) {
  return { x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k, z: a.z + (b.z - a.z) * k };
}
```

- [ ] **Step 7: 建立 `src/steps/index.js`（尚未實作的手術步驟先用可跳過版本）**

```js
import { baseStep } from './common.js';
import { SKIPS } from '../core/skips.js';

const orbitStep = id => baseStep({ id, view: 'orbit', isComplete: () => true, skip: SKIPS[id] });
// Task 7–12 會逐一把 pendingStep 換成真正的步驟
const pendingStep = id => baseStep({ id, isComplete: () => true, skip: SKIPS[id] });

export function createSteps(deps) {
  return {
    intro: orbitStep('intro'),
    incision: pendingStep('incision'),
    capsulorhexis: pendingStep('capsulorhexis'),
    chop: pendingStep('chop'),
    laser: pendingStep('laser'),
    capsuleRemoval: pendingStep('capsuleRemoval'),
    phaco: pendingStep('phaco'),
    cortex: pendingStep('cortex'),
    iol: pendingStep('iol'),
    done: orbitStep('done'),
  };
}
```

- [ ] **Step 8: 把 `src/main.js` 換成正式版本**

```js
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
const NO_POINT = { x: 0, y: 0, z: 0 };

function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

function isShown(object) {
  for (let o = object; o; o = o.parent) if (!o.visible) return false;
  return true;
}

function start() {
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
  });
  if (!webglAvailable()) {
    ui.fatal(content.ui.noWebGL);
    return;
  }

  const stage = document.getElementById('stage');
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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

  const deps = { scene, eye, tools, ui, content, particles };
  controller = new StepController({
    steps: createSteps(deps),
    ctx: { ...deps, state: null },
    onChange: c => {
      views.setMode(c.step.view);
      layout();
      ui.setStep({ route: c.route, ids: c.ids, index: c.index, complete: c.complete, demoing: c.demoing, view: c.step.view });
    },
  });

  // 指標：顯微鏡視角時換算成工作平面上的 3D 點；軌道視角時點一下顯示該層說明
  const canvas = renderer.domElement;
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const hit = new THREE.Vector3();
  let downAt = null;

  function aimRay(e) {
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    raycaster.setFromCamera(ndc, views.camera);
  }
  function workPoint(e) {
    aimRay(e);
    plane.constant = -controller.step.workY;
    return raycaster.ray.intersectPlane(plane, hit) ? { x: hit.x, y: hit.y, z: hit.z } : null;
  }
  function pickLayer(e) {
    aimRay(e);
    const found = raycaster.intersectObject(eye.root, true).find(h => h.object.userData.layerId && isShown(h.object));
    ui.showLayer(found ? found.object.userData.layerId : null);
  }

  canvas.addEventListener('pointerdown', e => {
    downAt = { x: e.clientX, y: e.clientY };
    if (views.mode !== 'microscope') return;
    canvas.setPointerCapture(e.pointerId);
    const p = workPoint(e);
    if (p) controller.pointer('down', p);
  });
  canvas.addEventListener('pointermove', e => {
    if (views.mode !== 'microscope') return;
    const p = workPoint(e);
    if (p) controller.pointer('move', p);
  });
  canvas.addEventListener('pointerup', e => {
    if (views.mode === 'microscope') {
      controller.pointer('up', workPoint(e) ?? NO_POINT);
      return;
    }
    if (downAt && Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y) < 6) pickLayer(e);
  });
  canvas.addEventListener('pointercancel', () => controller.pointer('up', NO_POINT));

  new ResizeObserver(layout).observe(stage);
  layout();
  controller.goTo(0);
  ui.setLabelsOn(labelsOn);

  const clock = new THREE.Clock();
  renderer.setAnimationLoop(() => {
    const dt = Math.min(clock.getDelta(), 0.05);
    controller.update(dt);
    particles.update(dt);

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
  });

  window.__sim = { controller, eye, views };  // 除錯與自動驗收用
}

start();
```

- [ ] **Step 9: 建置與測試**

Run: `npm test` 然後 `npm run build`
Expected: 測試全部 PASS；建置無錯誤。

- [ ] **Step 10: 在瀏覽器確認**

重新整理 `sim` 預覽並截圖。
Expected:
- 第 0 步：上方進度列 8 格（傳統路線），下方顯示「認識眼睛」文字、兩個路線按鈕；右上角是「白內障時看出去的樣子」的模糊街景。
- 點眼球剖面上的虹膜 → 左上角出現「虹膜」說明框。
- 按「飛秒雷射輔助手術」→ 進度列變 7 格、畫面切到顯微鏡俯視，右下角出現白框剖面小視窗，「下一步」是綠色亮起狀態。
- 一路按「下一步」到「手術完成」，畫面回到可旋轉的剖面眼球，眼內看到藍色人工水晶體，右上角出現術前／術後兩張街景，下方有「換另一種方式再看一次（傳統超音波乳化手術）」按鈕。
- `read_console_messages` onlyErrors 沒有錯誤。

- [ ] **Step 11: Commit**

```bash
git add src 白內障手術模擬/app.js
git commit -m "feat: wire UI, views, instruments and step controller into the app shell"
```

---

### Task 7: 步驟 1 製作小切口

**Files:**
- Create: `src/eye/guides.js`, `src/steps/incision.js`
- Modify: `src/steps/index.js`

**Interfaces:**
- Produces (`guides.js`): `circleAt(radius) → (t) => {x, z}`、`lineAt(a, b) → (t) => {x, z}`、`createDashedPath(pointAt, y, dashes=24) → Group`、`createProgressPath(pointAt, y, bins) → { object, setHits(bool[]), clear() }`、`createMarker(p) → Mesh`。`circleAt` 的參數 t 對應角度 2πt，與 `createArcTracker` 的格子一致。
- Produces: `createIncisionStep(deps)`

- [ ] **Step 1: 建立 `src/eye/guides.js`**

```js
import * as THREE from 'three';

// 引導線與標記點：不做深度測試，永遠畫在最上層
const guideMat = new THREE.MeshBasicMaterial({ color: 0x2ad1ff, transparent: true, depthTest: false });
const progressMat = new THREE.MeshBasicMaterial({ color: 0x00e08a, transparent: true, depthTest: false });
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

export function createProgressPath(pointAt, y, bins) {
  const object = new THREE.Group();
  const segments = [];
  for (let i = 0; i < bins; i++) {
    const seg = tube(sample(pointAt, i / bins, (i + 1) / bins, y), 0.1, progressMat);
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

export function createMarker(p) {
  const mesh = new THREE.Mesh(new THREE.RingGeometry(0.45, 0.8, 40), markerMat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set(p.x, p.y + 0.1, p.z);
  mesh.renderOrder = 11;
  return mesh;
}
```

- [ ] **Step 2: 建立 `src/steps/incision.js`**

```js
import { baseStep, lerp3 } from './common.js';
import { SKIPS } from '../core/skips.js';
import { Tweens, ease } from '../core/tween.js';
import { dist2D, clampToDisk } from '../core/geometry.js';
import { dragEvents, linePoints } from '../core/demo.js';
import { INCISIONS } from '../eye/anatomy.js';
import { createMarker } from '../eye/guides.js';

const BLADE_Y = 11.4;
const REST = { x: 10, z: 5 };
const HIT_RADIUS = 1.0;
const AIM = { x: 0, y: 7, z: 0 };

export function createIncisionStep({ scene, eye, tools, ui, content }) {
  const blade = tools.blade;
  const tweens = new Tweens();
  const markers = { main: createMarker(INCISIONS.main), side: createMarker(INCISIONS.side) };
  let state, dragging = false, busy = false, time = 0;

  const pending = () => Object.keys(INCISIONS).filter(k => !state.incisions[k]);
  const setTip = p => blade.setTip(p.x, p.y, p.z);

  // 刀尖刺入切口 → 切口出現 → 退回眼外
  function cut(key) {
    busy = true;
    dragging = false;
    const inc = INCISIONS[key];
    const len = Math.hypot(inc.x, inc.z);
    const ux = inc.x / len, uz = inc.z / len;
    const from = { x: blade.tip.x, y: blade.tip.y, z: blade.tip.z };
    const inside = { x: inc.x - ux * 1.2, y: inc.y - 0.35, z: inc.z - uz * 1.2 };
    const out = { x: inc.x + ux * 2.5, y: BLADE_Y, z: inc.z + uz * 2.5 };
    tweens.add(0.45, k => setTip(lerp3(from, inside, ease(k))), () => {
      state.incisions[key] = true;
      eye.applyState(state);
      markers[key].visible = false;
      tweens.add(0.35, k => setTip(lerp3(inside, out, ease(k))), () => {
        busy = false;
        if (pending().length === 0) ui.showHint(content.hints.stepDone);
      });
    });
  }

  function move(p) {
    const c = clampToDisk(p.x, p.z, 14);
    blade.setTip(c.x, BLADE_Y, c.z);
    const key = pending().find(k => dist2D(c.x, c.z, INCISIONS[k].x, INCISIONS[k].z) < HIT_RADIUS);
    if (key) cut(key);
  }

  return baseStep({
    id: 'incision',
    workY: BLADE_Y,
    enter(ctx) {
      state = ctx.state;
      dragging = false;
      busy = false;
      time = 0;
      tweens.clear();
      for (const [k, m] of Object.entries(markers)) {
        m.visible = !state.incisions[k];
        scene.add(m);
      }
      blade.aim(AIM).show();
      blade.setTip(REST.x, BLADE_Y, REST.z);
    },
    exit() {
      tweens.clear();
      blade.hide();
      for (const m of Object.values(markers)) scene.remove(m);
    },
    update(dt) {
      time += dt;
      tweens.update(dt);
      const s = 1 + 0.25 * Math.sin(time * 5);
      for (const m of Object.values(markers)) m.scale.set(s, s, s);
    },
    pointerDown(p) { if (busy) return; dragging = true; move(p); },
    pointerMove(p) { if (dragging && !busy) move(p); },
    pointerUp() {
      if (dragging && pending().length > 0) ui.showHint(content.hints.moveToMarker);
      dragging = false;
    },
    isComplete() { return !busy && pending().length === 0; },
    skip: SKIPS.incision,
    demoPath() {
      return [
        ...dragEvents(linePoints(REST, INCISIONS.main, 12), 0.3, 1.4),
        ...dragEvents(linePoints({ x: 7.5, z: -1.5 }, INCISIONS.side, 12), 2.6, 1.4),
      ];
    },
  });
}
```

- [ ] **Step 3: 在 `src/steps/index.js` 註冊**

在檔案開頭的 import 區加入：

```js
import { createIncisionStep } from './incision.js';
```

並把

```js
    incision: pendingStep('incision'),
```

換成

```js
    incision: createIncisionStep(deps),
```

- [ ] **Step 4: 建置並在瀏覽器確認**

Run: `npm run build`
在 `sim` 預覽用 `javascript_tool` 執行：

```js
const c = __sim.controller; c.setRoute('classic'); c.goTo(1); c.startDemo(false);
await new Promise(r => setTimeout(r, 5500));
({ step: c.step.id, complete: c.complete, incisions: c.state.incisions })
```

Expected: `{ step: 'incision', complete: true, incisions: { main: true, side: true } }`。
再 `c.restart()` 後截圖：俯視畫面可見角膜刀在右下眼外，角膜邊緣右側與上方各有一個閃爍藍圈，右下角剖面小視窗正常顯示。
接著手動用 `computer` 從刀子位置拖到右側藍圈：刀子刺入、出現切口、藍圈消失。
`read_console_messages` onlyErrors 沒有錯誤。

- [ ] **Step 5: Commit**

```bash
git add src 白內障手術模擬/app.js
git commit -m "feat: add incision step with blade, markers and demo"
```

---

### Task 8: 步驟 2 撕囊

**Files:**
- Create: `src/steps/capsulorhexis.js`
- Modify: `src/steps/index.js`

**Interfaces:**
- Consumes: `createArcTracker`, `createDashedPath`, `createProgressPath`, `circleAt`, `eye.parts.capsuleDisc.group`, `tools.forceps`
- Produces: `createCapsulorhexisStep(deps)`

- [ ] **Step 1: 建立 `src/steps/capsulorhexis.js`**

```js
import { baseStep, lerp3 } from './common.js';
import { SKIPS } from '../core/skips.js';
import { Tweens, ease } from '../core/tween.js';
import { clampToDisk, createArcTracker } from '../core/geometry.js';
import { dragEvents, circlePoints } from '../core/demo.js';
import { INCISIONS, CAPSULE_OPENING, CAPSULE_Y } from '../eye/anatomy.js';
import { createDashedPath, createProgressPath, circleAt } from '../eye/guides.js';

const BINS = 36;
const DONE_COVERAGE = 0.9;
const OFF_PATH_LIMIT = 20;

export function createCapsulorhexisStep({ scene, eye, tools, ui, content }) {
  const forceps = tools.forceps;
  const tweens = new Tweens();
  const guide = createDashedPath(circleAt(CAPSULE_OPENING), CAPSULE_Y + 0.05);
  const progress = createProgressPath(circleAt(CAPSULE_OPENING), CAPSULE_Y + 0.06, BINS);
  let state, tracker, dragging, finishing, done, offPath;

  // 撕完一圈：鑷子夾住前囊片，從主切口拉出
  function finish() {
    finishing = true;
    dragging = false;
    const disc = eye.parts.capsuleDisc.group;
    const from = { x: forceps.tip.x, y: forceps.tip.y, z: forceps.tip.z };
    const grab = { x: 0, y: CAPSULE_Y + 0.3, z: 0 };
    const out = { x: INCISIONS.main.x + 1.5, y: INCISIONS.main.y + 0.8, z: 0 };
    tweens.add(0.5, k => {
      const p = lerp3(from, grab, ease(k));
      forceps.setTip(p.x, p.y, p.z);
    }, () => {
      tweens.add(1.0, k => {
        const e = ease(k);
        const p = lerp3(grab, out, e);
        forceps.setTip(Math.min(p.x, INCISIONS.main.x - 0.5), Math.min(p.y, 10.5), p.z);  // 尖端留在切口內
        disc.position.set(p.x - grab.x, p.y - grab.y, p.z - grab.z);
        disc.scale.setScalar(1 - 0.7 * e);
      }, () => {
        state.capsuleOpen = true;
        eye.applyState(state);
        guide.visible = false;
        progress.clear();
        done = true;
        ui.showHint(content.hints.stepDone);
      });
    });
  }

  function move(p) {
    const c = clampToDisk(p.x, p.z, 4.0);
    forceps.setTip(c.x, CAPSULE_Y, c.z);
    if (tracker.add(c.x, c.z)) {
      offPath = 0;
      progress.setHits(tracker.hits());
      if (tracker.coverage() >= DONE_COVERAGE) finish();
    } else if (++offPath > OFF_PATH_LIMIT) {
      offPath = 0;
      ui.showHint(content.hints.followCircle);
    }
  }

  return baseStep({
    id: 'capsulorhexis',
    workY: CAPSULE_Y,
    enter(ctx) {
      state = ctx.state;
      tracker = createArcTracker(CAPSULE_OPENING, BINS, 0.8);
      dragging = finishing = done = false;
      offPath = 0;
      tweens.clear();
      guide.visible = true;
      progress.clear();
      scene.add(guide, progress.object);
      forceps.pivot(INCISIONS.main).show();
      forceps.setTip(CAPSULE_OPENING, CAPSULE_Y, 0);
    },
    exit() {
      tweens.clear();
      forceps.hide();
      scene.remove(guide, progress.object);
    },
    update(dt) { tweens.update(dt); },
    pointerDown(p) {
      if (finishing) return;
      dragging = true;
      tracker.lift();
      move(p);
    },
    pointerMove(p) { if (dragging && !finishing) move(p); },
    pointerUp() {
      dragging = false;
      tracker?.lift();
    },
    isComplete() { return done; },
    skip: SKIPS.capsulorhexis,
    demoPath() { return dragEvents(circlePoints(CAPSULE_OPENING, 48), 0.3, 3.5); },
  });
}
```

- [ ] **Step 2: 在 `src/steps/index.js` 註冊**

加入 `import { createCapsulorhexisStep } from './capsulorhexis.js';`，並把 `capsulorhexis: pendingStep('capsulorhexis'),` 換成 `capsulorhexis: createCapsulorhexisStep(deps),`。

- [ ] **Step 3: 建置並在瀏覽器確認**

Run: `npm run build`
`javascript_tool`：

```js
const c = __sim.controller; c.setRoute('classic'); c.goTo(2); c.startDemo(false);
await new Promise(r => setTimeout(r, 6500));
({ step: c.step.id, complete: c.complete, capsuleOpen: c.state.capsuleOpen })
```

Expected: `{ step: 'capsulorhexis', complete: true, capsuleOpen: true }`。
`c.restart()` 後手動拖半圈截圖：虛線圓圈上已拖過的部分變成綠色實線。放開滑鼠後在圓外拖動，出現「請沿著虛線圓圈拖動」提示。

- [ ] **Step 4: Commit**

```bash
git add src 白內障手術模擬/app.js
git commit -m "feat: add capsulorhexis step with circular tracking and flap removal"
```

---

### Task 9: 步驟 3a 劈核

**Files:**
- Create: `src/steps/chop.js`
- Modify: `src/steps/index.js`

**Interfaces:**
- Consumes: `createLineTracker`, `lineAt`, `eye.setNucleusLayout`, `HALF_GAP`, `QUARTER_GAP`, `tools.probe`, `tools.chopper`
- Produces: `createChopStep(deps)`

- [ ] **Step 1: 建立 `src/steps/chop.js`**

```js
import { baseStep } from './common.js';
import { SKIPS } from '../core/skips.js';
import { Tweens, ease } from '../core/tween.js';
import { clampToDisk, createLineTracker } from '../core/geometry.js';
import { dragEvents, linePoints } from '../core/demo.js';
import { INCISIONS } from '../eye/anatomy.js';
import { HALF_GAP, QUARTER_GAP } from '../eye/layout.js';
import { createDashedPath, createProgressPath, lineAt } from '../eye/guides.js';

const WORK_Y = 9.1;
const LINE_Y = 9.15;
const A = { x: 0, z: -3.4 };
const B = { x: 0, z: 3.4 };
const BINS = 20;
const DONE_COVERAGE = 0.8;
const PROBE_TIP = { x: 0.7, y: 9.0, z: 0 };
const CHOPPER_REST = { x: 0, z: -3.8 };
const OFF_PATH_LIMIT = 20;

// 兩刀都沿畫面上的垂直虛線：第一刀分兩半 → 核轉 90° → 第二刀分四塊
export function createChopStep({ scene, eye, tools, ui, content }) {
  const { probe, chopper } = tools;
  const tweens = new Tweens();
  const guide = createDashedPath(lineAt(A, B), LINE_Y);
  const progress = createProgressPath(lineAt(A, B), LINE_Y + 0.01, BINS);
  let state, tracker, dragging, phase, offPath;  // phase: 'first' | 'animating' | 'second' | 'done'

  function newStroke() {
    tracker = createLineTracker(A, B, BINS, 0.9);
    progress.clear();
    guide.visible = true;
    chopper.setTip(CHOPPER_REST.x, WORK_Y, CHOPPER_REST.z);
  }

  function firstChop() {
    phase = 'animating';
    dragging = false;
    guide.visible = false;
    progress.clear();
    state.nucleusSplit = 1;
    tweens.add(0.5, k => eye.setNucleusLayout({ half: HALF_GAP * ease(k) }), () => {
      tweens.add(1.0, k => eye.setNucleusLayout({ half: HALF_GAP, rotation: (Math.PI / 2) * ease(k) }), () => {
        phase = 'second';
        newStroke();
      });
    });
  }

  function secondChop() {
    phase = 'animating';
    dragging = false;
    guide.visible = false;
    progress.clear();
    tweens.add(0.5, k => eye.setNucleusLayout({ half: HALF_GAP, quarter: QUARTER_GAP * ease(k), rotation: Math.PI / 2 }), () => {
      state.nucleusSplit = 2;
      phase = 'done';
      ui.showHint(content.hints.stepDone);
    });
  }

  function move(p) {
    const c = clampToDisk(p.x, p.z, 4.2);
    chopper.setTip(c.x, WORK_Y, c.z);
    if (tracker.add(c.x, c.z)) {
      offPath = 0;
      progress.setHits(tracker.hits());
      if (tracker.coverage() >= DONE_COVERAGE) (phase === 'first' ? firstChop : secondChop)();
    } else if (++offPath > OFF_PATH_LIMIT) {
      offPath = 0;
      ui.showHint(content.hints.followLine);
    }
  }

  const chopping = () => phase === 'first' || phase === 'second';

  return baseStep({
    id: 'chop',
    workY: WORK_Y,
    enter(ctx) {
      state = ctx.state;
      phase = 'first';
      dragging = false;
      offPath = 0;
      tweens.clear();
      scene.add(guide, progress.object);
      probe.pivot(INCISIONS.main).show();
      probe.setTip(PROBE_TIP.x, PROBE_TIP.y, PROBE_TIP.z);
      chopper.pivot(INCISIONS.side).show();
      newStroke();
    },
    exit() {
      tweens.clear();
      probe.hide();
      chopper.hide();
      scene.remove(guide, progress.object);
    },
    update(dt) { tweens.update(dt); },
    pointerDown(p) {
      if (!chopping()) return;
      dragging = true;
      tracker.lift();
      move(p);
    },
    pointerMove(p) { if (dragging && chopping()) move(p); },
    pointerUp() {
      dragging = false;
      tracker?.lift();
    },
    isComplete() { return phase === 'done'; },
    skip: SKIPS.chop,
    demoPath() {
      const stroke = linePoints({ x: 0, z: -3.6 }, { x: 0, z: 3.6 }, 16);
      return [...dragEvents(stroke, 0.3, 1.5), ...dragEvents(stroke, 3.8, 1.5)];
    },
  });
}
```

- [ ] **Step 2: 在 `src/steps/index.js` 註冊**

加入 `import { createChopStep } from './chop.js';`，並把 `chop: pendingStep('chop'),` 換成 `chop: createChopStep(deps),`。

- [ ] **Step 3: 建置並在瀏覽器確認**

Run: `npm run build`
`javascript_tool`：

```js
const c = __sim.controller; c.setRoute('classic'); c.goTo(3); c.startDemo(false);
await new Promise(r => setTimeout(r, 7000));
({ step: c.step.id, complete: c.complete, split: c.state.nucleusSplit })
```

Expected: `{ step: 'chop', complete: true, split: 2 }`。截圖：俯視可見核分成 4 塊、兩支器械分別從右側與上方切口伸入；剖面小視窗中缺一塊（被剖掉那 1/4），其餘三塊可見。

- [ ] **Step 4: Commit**

```bash
git add src 白內障手術模擬/app.js
git commit -m "feat: add chop step with two strokes and nucleus rotation"
```

---

### Task 10: 步驟 3b 吸除碎核與 3c 清除皮質

**Files:**
- Create: `src/steps/phaco.js`, `src/steps/cortex.js`
- Modify: `src/steps/index.js`

**Interfaces:**
- Consumes: `eye.pieces`, `eye.nucleusGroup`, `eye.setGlow`, `eye.setPiecePresent`, `eye.setCortexOpacity`, `BASE_CORTEX_OPACITY`, `particles.emit`, `ui.setCounter`, `tools.probe`, `tools.chopper`, `tools.ia`
- Produces: `createPhacoStep(deps)`, `createCortexStep(deps)`

- [ ] **Step 1: 建立 `src/steps/phaco.js`**

```js
import * as THREE from 'three';
import { baseStep } from './common.js';
import { SKIPS } from '../core/skips.js';
import { clampToDisk } from '../core/geometry.js';
import { linePoints } from '../core/demo.js';
import { INCISIONS } from '../eye/anatomy.js';

const WORK_Y = 9.0;
const REST = { x: 3.2, z: 0 };
const CHOPPER_IDLE = { x: 0, y: 9.2, z: -2.6 };
const GLOW_RADIUS = 2.2;
const SUCK_RADIUS = 1.6;
const SUCK_TIME = 1.3;   // 每塊吸除所需秒數
const IDLE_HINT = 1.5;

export function createPhacoStep({ eye, tools, ui, content, particles }) {
  const { probe, chopper } = tools;
  const world = new THREE.Vector3();
  const local = new THREE.Vector3();
  let state, pressing, idle, time, progress;

  const remaining = () => state.pieces.filter(Boolean).length;
  const showCounter = () => ui.setCounter(`已清除 ${4 - remaining()}/4`);

  function nearestPiece() {
    let index = null, distance = Infinity;
    eye.pieces.forEach((p, i) => {
      if (!state.pieces[i]) return;
      p.outer.getWorldPosition(world);
      const d = Math.hypot(world.x - probe.tip.x, world.z - probe.tip.z);
      if (d < distance) { distance = d; index = i; }
    });
    return { index, distance };
  }

  function move(p) {
    const c = clampToDisk(p.x, p.z, 4.2);
    probe.setTip(c.x, WORK_Y, c.z);
  }

  // 按住且夠近：碎塊被拉向探頭、縮小、冒出顆粒，滿了就消失
  function aspirate(index, dt) {
    const piece = eye.pieces[index];
    progress[index] += dt / SUCK_TIME;
    local.copy(probe.tip);
    eye.nucleusGroup.worldToLocal(local);
    piece.outer.position.lerp(local, Math.min(1, dt * 3));
    piece.outer.scale.setScalar(Math.max(0.1, 1 - 0.9 * progress[index]));
    piece.outer.getWorldPosition(world);
    particles.emit(world, probe.tip);
    if (progress[index] >= 1) {
      state.pieces[index] = false;
      eye.setPiecePresent(index, false);
      showCounter();
      if (remaining() === 0) ui.showHint(content.hints.stepDone);
    }
  }

  return baseStep({
    id: 'phaco',
    workY: WORK_Y,
    enter(ctx) {
      state = ctx.state;
      pressing = false;
      idle = 0;
      time = 0;
      progress = [0, 0, 0, 0];
      probe.pivot(INCISIONS.main).show();
      probe.setTip(REST.x, WORK_Y, REST.z);
      chopper.pivot(INCISIONS.side).show();
      chopper.setTip(CHOPPER_IDLE.x, CHOPPER_IDLE.y, CHOPPER_IDLE.z);
      chopper.setOpacity(0.35);
      showCounter();
    },
    exit() {
      probe.hide();
      chopper.hide();
      ui.setCounter(null);
    },
    update(dt) {
      time += dt;
      const { index, distance } = nearestPiece();
      eye.pieces.forEach((_, i) => eye.setGlow(i, i === index && distance < GLOW_RADIUS ? 0.6 + 0.4 * Math.sin(time * 8) : 0));
      if (index === null || !pressing) return;
      if (distance < SUCK_RADIUS) {
        idle = 0;
        aspirate(index, dt);
      } else if ((idle += dt) > IDLE_HINT) {
        idle = 0;
        ui.showHint(content.hints.moveToPiece);
      }
    },
    pointerDown(p) { pressing = true; move(p); },
    pointerMove(p) { if (pressing) move(p); },
    pointerUp() { pressing = false; },
    isComplete() { return remaining() === 0; },
    skip: SKIPS.phaco,
    demoPath() {
      const events = [{ t: 0.3, type: 'down', ...REST }];
      let t = 0.3, from = REST;
      eye.pieces.forEach((p, i) => {
        if (!state.pieces[i]) return;
        p.outer.getWorldPosition(world);
        const to = { x: world.x * 0.85, z: world.z * 0.85 };
        for (const q of linePoints(from, to, 8)) {
          t += 0.08;
          events.push({ t, type: 'move', ...q });
        }
        t += SUCK_TIME + 0.6;
        from = to;
      });
      events.push({ t: t + 0.1, type: 'up', ...from });
      return events;
    },
  });
}
```

- [ ] **Step 2: 建立 `src/steps/cortex.js`**

```js
import { baseStep } from './common.js';
import { SKIPS } from '../core/skips.js';
import { INCISIONS } from '../eye/anatomy.js';
import { BASE_CORTEX_OPACITY } from '../eye/materials.js';

const DURATION = 4.5;

// 自動播放：灌注抽吸頭在囊袋內繞圈，皮質逐漸消失
export function createCortexStep({ eye, tools, ui, content }) {
  const ia = tools.ia;
  let state, t, done;

  return baseStep({
    id: 'cortex',
    workY: 9.0,
    enter(ctx) {
      state = ctx.state;
      t = 0;
      done = false;
      ia.pivot(INCISIONS.main).show();
      ia.setTip(2.8, 8.9, 0);
    },
    exit() { ia.hide(); },
    update(dt) {
      if (done) return;
      t = Math.min(DURATION, t + dt);
      const k = t / DURATION;
      const a = k * Math.PI * 3;
      const r = 2.8 - 0.8 * Math.sin(k * Math.PI);
      ia.setTip(r * Math.cos(a), 8.7 + 0.3 * Math.cos(a * 2), r * Math.sin(a));
      eye.setCortexOpacity(BASE_CORTEX_OPACITY * (1 - k));
      if (k >= 1) {
        state.cortex = false;
        eye.applyState(state);
        done = true;
        ui.showHint(content.hints.stepDone);
      }
    },
    isComplete() { return done; },
    skip: SKIPS.cortex,
  });
}
```

- [ ] **Step 3: 在 `src/steps/index.js` 註冊**

加入：

```js
import { createPhacoStep } from './phaco.js';
import { createCortexStep } from './cortex.js';
```

並把 `phaco: pendingStep('phaco'),` 換成 `phaco: createPhacoStep(deps),`、`cortex: pendingStep('cortex'),` 換成 `cortex: createCortexStep(deps),`。

- [ ] **Step 4: 建置並在瀏覽器確認**

Run: `npm run build`
`javascript_tool`：

```js
const c = __sim.controller; c.setRoute('classic'); c.goTo(4); c.startDemo(false);
await new Promise(r => setTimeout(r, 11000));
const phaco = { step: c.step.id, complete: c.complete, pieces: c.state.pieces };
c.goTo(5);
await new Promise(r => setTimeout(r, 5500));
({ phaco, cortex: { step: c.step.id, complete: c.complete, cortex: c.state.cortex } })
```

Expected: `phaco.complete === true`、`pieces` 全為 `false`；`cortex.complete === true`、`cortex === false`。
`c.goTo(4)` 後手動按住探頭拖到一塊核旁：該塊發光、被吸向探頭、冒出黃色顆粒後消失，右上角計數變「已清除 1/4」。
`c.setRoute('femto'); c.goTo(3)` 截圖：文字區多一行綠色「雷射已預先分割水晶體核…」，核是 4 塊間隙很小的碎塊。

- [ ] **Step 5: Commit**

```bash
git add src 白內障手術模擬/app.js
git commit -m "feat: add phaco aspiration and cortex clean-up steps"
```

---

### Task 11: 步驟 4 植入人工水晶體

**Files:**
- Create: `src/steps/iol.js`
- Modify: `src/steps/index.js`

**Interfaces:**
- Consumes: `eye.iol.group`, `eye.iol.setPose`, `IOL_Y`, `tools.injector`
- Produces: `createIolStep(deps)`

- [ ] **Step 1: 建立 `src/steps/iol.js`**

```js
import { baseStep, lerp3 } from './common.js';
import { SKIPS } from '../core/skips.js';
import { Tweens, ease } from '../core/tween.js';
import { dist2D, clampToDisk } from '../core/geometry.js';
import { dragEvents, linePoints } from '../core/demo.js';
import { INCISIONS, IOL_Y } from '../eye/anatomy.js';

const WORK_Y = 11.0;
const REST = { x: 10, z: 3 };
const AIM = { x: 0, y: 6, z: 0 };
const REACH = 1.2;
const CORNEA_EDGE = 5.6;  // 推注器尖端不能穿過角膜中央

export function createIolStep({ eye, tools, ui, content }) {
  const injector = tools.injector;
  const tweens = new Tweens();
  let state, dragging, inserting, done;
  const setTip = p => injector.setTip(p.x, p.y, p.z);

  // 推注器抵達切口 → 摺疊的人工水晶體推入囊袋並展開 → 推注器退出
  function insert() {
    inserting = true;
    dragging = false;
    const main = INCISIONS.main;
    const from = { x: injector.tip.x, y: injector.tip.y, z: injector.tip.z };
    const mouth = { x: main.x - 0.6, y: main.y - 0.3, z: main.z };
    const rest = { x: REST.x, y: WORK_Y, z: REST.z };
    const center = { x: 0, y: IOL_Y, z: 0 };
    tweens.add(0.6, k => setTip(lerp3(from, mouth, ease(k))), () => {
      eye.iol.group.visible = true;
      tweens.add(1.8, k => {
        const p = lerp3(mouth, center, ease(Math.min(1, k * 1.6)));
        eye.iol.setPose(p.x, p.y, p.z, (k - 0.45) / 0.55);
      }, () => {
        state.iol = true;
        eye.applyState(state);
        tweens.add(0.6, k => setTip(lerp3(mouth, rest, ease(k))), () => {
          done = true;
          ui.showHint(content.hints.stepDone);
        });
      });
    });
  }

  function move(p) {
    let c = clampToDisk(p.x, p.z, 14);
    const r = Math.hypot(c.x, c.z);
    if (r < CORNEA_EDGE) c = r > 0 ? { x: (c.x / r) * CORNEA_EDGE, z: (c.z / r) * CORNEA_EDGE } : { x: CORNEA_EDGE, z: 0 };
    injector.setTip(c.x, WORK_Y, c.z);
    if (dist2D(c.x, c.z, INCISIONS.main.x, INCISIONS.main.z) < REACH) insert();
  }

  return baseStep({
    id: 'iol',
    workY: WORK_Y,
    enter(ctx) {
      state = ctx.state;
      dragging = inserting = done = false;
      tweens.clear();
      injector.aim(AIM).show();
      injector.setTip(REST.x, WORK_Y, REST.z);
    },
    exit() {
      tweens.clear();
      injector.hide();
    },
    update(dt) { tweens.update(dt); },
    pointerDown(p) {
      if (inserting) return;
      dragging = true;
      move(p);
    },
    pointerMove(p) { if (dragging && !inserting) move(p); },
    pointerUp() {
      if (dragging && !inserting) ui.showHint(content.hints.pushInjector);
      dragging = false;
    },
    isComplete() { return done; },
    skip: SKIPS.iol,
    demoPath() { return dragEvents(linePoints(REST, { x: INCISIONS.main.x + 0.3, z: 0 }, 12), 0.3, 1.5); },
  });
}
```

- [ ] **Step 2: 在 `src/steps/index.js` 註冊**

加入 `import { createIolStep } from './iol.js';`，並把 `iol: pendingStep('iol'),` 換成 `iol: createIolStep(deps),`。

- [ ] **Step 3: 建置並在瀏覽器確認**

Run: `npm run build`
`javascript_tool`：

```js
const c = __sim.controller; c.setRoute('classic'); c.goTo(6); c.startDemo(false);
await new Promise(r => setTimeout(r, 6000));
({ step: c.step.id, complete: c.complete, iol: c.state.iol })
```

Expected: `{ step: 'iol', complete: true, iol: true }`。
`c.restart()` 後手動拖推注器到右側切口，截圖動畫中段：窄長（摺疊）的鏡片往中央移動，接近中央時展開成圓形鏡片＋兩條藍色支撐腳。

- [ ] **Step 4: Commit**

```bash
git add src 白內障手術模擬/app.js
git commit -m "feat: add IOL injection step with unfolding lens"
```

---

### Task 12: 飛秒雷射與取出前囊片

**Files:**
- Create: `src/steps/laser.js`, `src/steps/capsuleRemoval.js`
- Modify: `src/steps/index.js`

**Interfaces:**
- Consumes: `tools.femto`（Group）、`tools.forceps`、`eye.parts.capsuleDisc.group`、`eye.setDiscGlow`、`SKIPS.laser`
- Produces: `createLaserStep(deps)`, `createCapsuleRemovalStep(deps)`

- [ ] **Step 1: 建立 `src/steps/laser.js`**

```js
import * as THREE from 'three';
import { baseStep } from './common.js';
import { SKIPS } from '../core/skips.js';
import { ease } from '../core/tween.js';
import { INCISIONS, CAPSULE_OPENING, CAPSULE_Y } from '../eye/anatomy.js';

// 時間軸（秒）：對接 → OCT 掃描 → 雷射打點 → 接觸鏡升起
const T = { dockEnd: 1.5, scanEnd: 4.0, laserEnd: 8.5, liftEnd: 10.0 };
const DOCK_TOP = 30;
const DOCK_Y = 13.3;

function buildLaserDots() {
  const pts = [];
  for (const inc of Object.values(INCISIONS)) {
    const len = Math.hypot(inc.x, inc.z);
    const tx = -inc.z / len, tz = inc.x / len;
    for (let i = 0; i <= 12; i++) {
      const s = (i / 12 - 0.5) * inc.length;
      pts.push(inc.x + tx * s, inc.y, inc.z + tz * s);
    }
  }
  for (let i = 0; i < 90; i++) {
    const a = (i / 90) * Math.PI * 2;
    pts.push(CAPSULE_OPENING * Math.cos(a), CAPSULE_Y, CAPSULE_OPENING * Math.sin(a));
  }
  for (let i = 0; i <= 30; i++) {
    const s = (i / 30 - 0.5) * 6;
    pts.push(s, 8.9, 0, 0, 8.9, s);  // 水晶體核十字分割
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  const points = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0x7cff6b, size: 0.28, transparent: true, depthTest: false }));
  points.renderOrder = 12;
  return points;
}

export function createLaserStep({ scene, eye, tools, ui, content }) {
  const dock = tools.femto;
  const scan = new THREE.Mesh(
    new THREE.PlaneGeometry(12, 6),
    new THREE.MeshBasicMaterial({ color: 0x4dd0e1, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthTest: false }),
  );
  scan.rotation.y = Math.PI / 2;  // 垂直的掃描面，沿 x 方向掃過
  scan.position.y = 10;
  scan.renderOrder = 12;
  const dots = buildLaserDots();
  const count = dots.geometry.attributes.position.count;
  let state, t, applied, done;

  return baseStep({
    id: 'laser',
    enter(ctx) {
      state = ctx.state;
      t = 0;
      applied = done = false;
      dock.visible = true;
      dock.position.y = DOCK_TOP;
      scan.visible = false;
      dots.geometry.setDrawRange(0, 0);
      dots.material.opacity = 1;
      scene.add(scan, dots);
    },
    exit() {
      dock.visible = false;
      scene.remove(scan, dots);
    },
    update(dt) {
      if (done) return;
      t += dt;
      if (t < T.dockEnd) {
        dock.position.y = DOCK_TOP + (DOCK_Y - DOCK_TOP) * ease(t / T.dockEnd);
      } else if (t < T.scanEnd) {
        dock.position.y = DOCK_Y;
        scan.visible = true;
        scan.position.x = -6 + 12 * ((t - T.dockEnd) / (T.scanEnd - T.dockEnd));
      } else if (t < T.laserEnd) {
        scan.visible = false;
        dots.geometry.setDrawRange(0, Math.floor((count * (t - T.scanEnd)) / (T.laserEnd - T.scanEnd)));
      } else if (!applied) {
        applied = true;
        scan.visible = false;
        dots.geometry.setDrawRange(0, count);
        SKIPS.laser(state);
        eye.applyState(state);
      }
      if (t >= T.laserEnd) {
        const k = Math.min(1, (t - T.laserEnd) / (T.liftEnd - T.laserEnd));
        dock.position.y = DOCK_Y + (DOCK_TOP - DOCK_Y) * ease(k);
        dots.material.opacity = 1 - k;
        if (k >= 1) {
          done = true;
          dock.visible = false;
          ui.showHint(content.hints.stepDone);
        }
      }
    },
    isComplete() { return done; },
    skip: SKIPS.laser,
  });
}
```

- [ ] **Step 2: 建立 `src/steps/capsuleRemoval.js`**

```js
import { baseStep, lerp3 } from './common.js';
import { SKIPS } from '../core/skips.js';
import { Tweens, ease } from '../core/tween.js';
import { dist2D, clampToDisk } from '../core/geometry.js';
import { dragEvents, linePoints } from '../core/demo.js';
import { INCISIONS, CAPSULE_Y } from '../eye/anatomy.js';

const OUTSIDE = { x: 9, y: 11.8, z: 0 };
const REST = { x: 1.5, y: CAPSULE_Y, z: 1.0 };
const AIM = { x: 0, y: 7, z: 0 };
const GRAB_RADIUS = 2.4;
const EXIT_RADIUS = 1.4;
const TIP_LIMIT = 5.6;

// 開頭自動：鑷子從眼外進入雷射切口；之後病人夾住發光的囊片拖到切口取出
export function createCapsuleRemovalStep({ eye, tools, ui, content }) {
  const forceps = tools.forceps;
  const disc = eye.parts.capsuleDisc.group;
  const tweens = new Tweens();
  let state, phase, grabbed, time;  // phase: 'opening' | 'grab' | 'extract' | 'done'

  const tipY = r => CAPSULE_Y + Math.max(0, r - 3) * 0.55;  // 越靠近切口越往上

  function tipTo(x, z) {
    forceps.setTip(x, tipY(Math.hypot(x, z)), z);
  }

  function extract() {
    phase = 'extract';
    grabbed = false;
    const from = { x: disc.position.x, y: disc.position.y, z: disc.position.z };
    const out = { x: OUTSIDE.x, y: OUTSIDE.y - CAPSULE_Y, z: 0 };
    tweens.add(0.8, k => {
      const p = lerp3(from, out, ease(k));
      disc.position.set(p.x, p.y, p.z);
      disc.scale.setScalar(1 - 0.7 * k);
    }, () => {
      state.capsuleOpen = true;
      eye.applyState(state);
      phase = 'done';
      ui.showHint(content.hints.stepDone);
    });
  }

  function move(p) {
    const c = clampToDisk(p.x, p.z, TIP_LIMIT);
    tipTo(c.x, c.z);
    if (!grabbed) return;
    disc.position.set(c.x, tipY(Math.hypot(c.x, c.z)) - CAPSULE_Y, c.z);
    if (dist2D(c.x, c.z, INCISIONS.main.x, INCISIONS.main.z) < EXIT_RADIUS) extract();
  }

  return baseStep({
    id: 'capsuleRemoval',
    workY: CAPSULE_Y,
    enter(ctx) {
      state = ctx.state;
      phase = 'opening';
      grabbed = false;
      time = 0;
      tweens.clear();
      const inc = INCISIONS.main;
      forceps.aim(AIM).show();
      forceps.setTip(OUTSIDE.x, OUTSIDE.y, OUTSIDE.z);
      tweens.add(1.0, k => {
        const p = lerp3(OUTSIDE, inc, ease(k));
        forceps.setTip(p.x, p.y, p.z);
      }, () => {
        forceps.pivot(inc);
        const start = { x: inc.x - 0.3, y: inc.y - 0.2, z: inc.z };
        tweens.add(0.8, k => {
          const p = lerp3(start, REST, ease(k));
          forceps.setTip(p.x, p.y, p.z);
        }, () => { phase = 'grab'; });
      });
    },
    exit() {
      tweens.clear();
      forceps.hide();
      eye.setDiscGlow(0);
    },
    update(dt) {
      time += dt;
      tweens.update(dt);
      eye.setDiscGlow(phase === 'grab' && !grabbed ? 0.5 + 0.5 * Math.sin(time * 5) : 0);
    },
    pointerDown(p) {
      if (phase !== 'grab') return;
      const c = clampToDisk(p.x, p.z, TIP_LIMIT);
      tipTo(c.x, c.z);
      if (dist2D(c.x, c.z, disc.position.x, disc.position.z) < GRAB_RADIUS) {
        grabbed = true;
        move(p);
      } else {
        ui.showHint(content.hints.grabDisc);
      }
    },
    pointerMove(p) { if (grabbed && phase === 'grab') move(p); },
    pointerUp() {
      if (!grabbed || phase !== 'grab') return;
      grabbed = false;
      const from = { x: disc.position.x, y: disc.position.y, z: disc.position.z };
      tweens.add(0.3, k => {
        const q = lerp3(from, { x: 0, y: 0, z: 0 }, ease(k));
        disc.position.set(q.x, q.y, q.z);
      });
    },
    isComplete() { return phase === 'done'; },
    skip: SKIPS.capsuleRemoval,
    demoPath() { return dragEvents(linePoints({ x: 0.4, z: 0.3 }, { x: INCISIONS.main.x, z: 0 }, 14), 2.2, 1.4); },
  });
}
```

- [ ] **Step 3: 在 `src/steps/index.js` 註冊並移除 pendingStep**

此時所有步驟都已實作。把 `src/steps/index.js` 整檔換成：

```js
import { baseStep } from './common.js';
import { SKIPS } from '../core/skips.js';
import { createIncisionStep } from './incision.js';
import { createCapsulorhexisStep } from './capsulorhexis.js';
import { createChopStep } from './chop.js';
import { createPhacoStep } from './phaco.js';
import { createCortexStep } from './cortex.js';
import { createIolStep } from './iol.js';
import { createLaserStep } from './laser.js';
import { createCapsuleRemovalStep } from './capsuleRemoval.js';

const orbitStep = id => baseStep({ id, view: 'orbit', isComplete: () => true, skip: SKIPS[id] });

export function createSteps(deps) {
  return {
    intro: orbitStep('intro'),
    incision: createIncisionStep(deps),
    capsulorhexis: createCapsulorhexisStep(deps),
    chop: createChopStep(deps),
    laser: createLaserStep(deps),
    capsuleRemoval: createCapsuleRemovalStep(deps),
    phaco: createPhacoStep(deps),
    cortex: createCortexStep(deps),
    iol: createIolStep(deps),
    done: orbitStep('done'),
  };
}
```

- [ ] **Step 4: 建置並在瀏覽器確認**

Run: `npm run build`
`javascript_tool`：

```js
const c = __sim.controller; c.setRoute('femto'); c.goTo(1);
await new Promise(r => setTimeout(r, 10500));
const laser = { step: c.step.id, complete: c.complete, laserDone: c.state.laserDone, incisions: c.state.incisions };
c.goTo(2); c.startDemo(false);
await new Promise(r => setTimeout(r, 5000));
({ laser, removal: { step: c.step.id, complete: c.complete, capsuleOpen: c.state.capsuleOpen } })
```

Expected: `laser.complete === true`、`laserDone === true`、兩個切口都是 `true`；`removal.complete === true`、`capsuleOpen === true`。
`c.goTo(1)` 後約 6 秒截圖：接觸鏡環貼在眼上，綠色雷射點沿切口、圓形前囊與十字逐步出現。
`c.goTo(2)` 約 3 秒後截圖：雷射切好的綠色圓環與發光的囊片可見，鑷子已從右側切口伸入。

- [ ] **Step 5: Commit**

```bash
git add src 白內障手術模擬/app.js
git commit -m "feat: add femtosecond laser and capsule disc removal steps"
```

---

### Task 13: 全流程驗收與使用說明

**Files:**
- Create: `白內障手術模擬/使用說明.txt`

- [ ] **Step 1: 跑測試與正式建置**

Run: `npm test` 然後 `npm run build`
Expected: 全部 PASS；建置無錯誤（minify 版 `app.js`）。

- [ ] **Step 2: 兩條路線從頭示範**

在 `sim` 預覽用 `javascript_tool`（每條約 40 秒）：

```js
const c = __sim.controller;
const run = async route => {
  c.setRoute(route);
  c.startDemo(true);
  const t0 = Date.now();
  while (c.demoing && Date.now() - t0 < 90000) await new Promise(r => setTimeout(r, 500));
  return { route, step: c.step.id, demoing: c.demoing, iol: c.state.iol, pieces: c.state.pieces };
};
[await run('classic'), await run('femto')]
```

Expected: 兩條都是 `step: 'done'`、`demoing: false`、`iol: true`、`pieces` 全為 `false`。
注意：瀏覽器分頁在背景時 requestAnimationFrame 會暫停，執行期間保持預覽窗格顯示。

- [ ] **Step 3: 上一步、重來、跳過**

`javascript_tool`：

```js
const c = __sim.controller; c.setRoute('classic'); c.goTo(4);
const a = { ...c.state, pieces: [...c.state.pieces] };
c.prev(); const b = { step: c.step.id, split: c.state.nucleusSplit };
c.restart(); c.next(); c.next();
({ a: { capsuleOpen: a.capsuleOpen, split: a.nucleusSplit }, b, after: { step: c.step.id, pieces: c.state.pieces } })
```

Expected: `a = { capsuleOpen: true, split: 2 }`；`b = { step: 'chop', split: 0 }`；`after.step === 'phaco'`、`pieces` 全為 `true`。

- [ ] **Step 4: 離線 file:// 測試**

停止 `sim` 預覽伺服器，用瀏覽器窗格 `navigate` 到 `file:///C:/Users/user/Desktop/AI用/claue 工作/3D/白內障手術模擬/index.html`。
Expected: 畫面與伺服器版相同、`read_console_messages` onlyErrors 沒有錯誤。若瀏覽器窗格不允許開 file:// 網址，在最後回報中請使用者自行雙擊 `index.html` 確認。

- [ ] **Step 5: 版面截圖**

用 `resize_window` 分別設成 1280×800（平板橫放）與 768×1024（平板直放），在第 0 步、手術步驟、完成步驟各截一張。
Expected: 沒有被切掉的按鈕或文字；剖面小視窗白框與畫面內容對齊。結束後 `resize_window` preset `desktop` 還原。

- [ ] **Step 6: 建立 `白內障手術模擬/使用說明.txt`**

```text
白內障手術 3D 互動模擬 — 使用說明

【開啟方式】
1. 把整個「白內障手術模擬」資料夾複製到電腦或平板。
2. 雙擊 index.html，用 Chrome 或 Edge 開啟。不需要網路。

【操作】
- 第一頁可以旋轉、縮放眼球，點一下各部位會出現說明，再選擇「傳統」或「飛秒雷射」。
- 手術步驟中，按住器械拖動即可操作；照著閃爍標記、虛線或發光的地方做。
- 「示範這一步」會自動示範目前這一步；「從頭示範」會自動播放整個手術。
- 「下一步」完成後會變綠色；衛教師也可以直接按下去跳過。
- 完成畫面可按「換另一種方式再看一次」比較兩種手術。

【修改衛教文字】
用記事本打開 content.js，只修改引號 '…' 裡面的文字，存檔後重新整理網頁即可。
請勿刪除引號、逗號或括號。

【注意】
本模擬為衛教示意，器械外觀與尺寸經簡化，實際手術方式以醫師說明為準。
```

- [ ] **Step 7: Commit**

```bash
git add 白內障手術模擬
git commit -m "docs: add clinic usage guide and final build"
```

- [ ] **Step 8: 回報待人工確認事項**

最後回報中列出仍需人工確認的項目：
1. 在診間平板上用手指實際操作每一步（觸控）。
2. 醫師審核 `content.js` 的衛教文字、器械名稱與切口尺寸。
3. 是否推到 GitHub（公開開網址或私人保存）——依規格，網頁完成後再決定。
