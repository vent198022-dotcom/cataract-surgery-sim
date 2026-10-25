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
  drawStreet(before.querySelector('canvas'), text.streetSign);
  drawStreet(after.querySelector('canvas'), text.streetSign);
  $('inset-frame').querySelector('span').textContent = text.insetLabel;
  after.querySelector('figcaption').textContent = text.after;

  const progress = $('progress');
  let hintTimer = 0;
  let shownStep = null;

  return {
    setStep({ route, ids, index, complete, demoing: isDemoing, view }) {
      demoing = isDemoing;
      const id = ids[index];
      const step = content.steps[id];
      // 只有真的換步驟才收起說明框與提示；完成狀態改變也會呼叫 setStep，不能把「完成！」提示收掉
      const stepKey = `${route}:${index}`;
      const stepChanged = stepKey !== shownStep;
      shownStep = stepKey;

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
      btn.next.classList.toggle('ready', complete && !last && id !== 'intro');
      btn.demo.textContent = isDemoing ? text.stop : text.demoStep;
      btn.demo.disabled = orbit && !isDemoing;
      btn.demoAll.disabled = isDemoing;
      btn.labels.hidden = !orbit;
      btn.resetView.hidden = !orbit;
      if (stepChanged) {
        $('layer-info').hidden = true;
        clearTimeout(hintTimer);
        $('hint').hidden = true;
      }
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
