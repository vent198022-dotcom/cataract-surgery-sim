// 把 src/ 打包成單一 IIFE 檔，讓 index.html 用 file:// 雙擊也能執行
import * as esbuild from 'esbuild';
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';

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
  const { port } = await ctx.serve({ servedir: OUT_DIR, port: 8123, host: '127.0.0.1' });
  console.log(`預覽：http://localhost:${port}/`);
} else {
  await esbuild.build(options);
  stampVersion();
}

// 在 index.html 引用的檔案後面加上內容雜湊（?v=xxxx）：網站更新後，手機不會繼續用快取的舊檔案
function stampVersion() {
  const files = ['app.js', 'style.css', 'content.js'];
  const hash = createHash('sha1');
  for (const f of files) hash.update(readFileSync(`${OUT_DIR}/${f}`));
  const v = hash.digest('hex').slice(0, 8);
  const indexPath = `${OUT_DIR}/index.html`;
  const html = readFileSync(indexPath, 'utf8');
  const stamped = files.reduce(
    (out, f) => out.replace(new RegExp(`(["'])${f.replace('.', '\\.')}(\\?v=[0-9a-f]+)?\\1`, 'g'), `$1${f}?v=${v}$1`),
    html,
  );
  if (stamped !== html) writeFileSync(indexPath, stamped);
}
