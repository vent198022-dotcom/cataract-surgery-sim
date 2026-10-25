// 程式繪製的街景插畫，用於術前／術後視力對比（不使用外部圖片，沒有版權問題）
export function drawStreet(canvas, signText) {
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
  g.fillText(signText, 54, h * 0.66 + 22);
}
