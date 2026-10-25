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
  const { port } = await ctx.serve({ servedir: OUT_DIR, port: 8123, host: '127.0.0.1' });
  console.log(`預覽：http://localhost:${port}/`);
} else {
  await esbuild.build(options);
}
