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
