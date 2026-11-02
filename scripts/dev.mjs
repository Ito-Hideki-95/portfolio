import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { watch } from 'node:fs';
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const output = path.join(root, 'dist');
const preview = process.argv.includes('--preview');
const port = Number(process.env.PORT || 3000);
const clients = new Set();
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8' };

function build() {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [path.join(root, 'scripts/build.mjs')], { cwd: root, stdio: 'inherit', windowsHide: true });
    child.on('error', reject);
    child.on('exit', (code) => code === 0 ? resolve() : reject(new Error(`Build failed (${code})`)));
  });
}
await build();
let rebuild = Promise.resolve();
let timer;
const watchers = preview ? [] : ['src', 'public'].map(folder => watch(path.join(root, folder), { recursive: true }, () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    rebuild = rebuild.then(build).then(() => {
      for (const client of clients) client.write('data: reload\n\n');
    }).catch(error => console.error(error.message));
  }, 160);
}));

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://127.0.0.1:${port}`);
    if (!preview && url.pathname === '/__reload') {
      res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', 'Connection': 'keep-alive' });
      res.write(': connected\n\n');
      clients.add(res);
      req.on('close', () => clients.delete(res));
      return;
    }
    if (!preview && url.pathname === '/__reload.js') {
      res.writeHead(200, { 'Content-Type': 'text/javascript', 'Cache-Control': 'no-store' });
      return res.end("new EventSource('/__reload').onmessage = () => location.reload();");
    }
    if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405, { Allow: 'GET, HEAD' }); return res.end(); }
    await rebuild;
    const requested = decodeURIComponent(url.pathname);
    const location = path.resolve(output, `.${requested === '/' ? '/index.html' : requested}`);
    if (!location.startsWith(`${output}${path.sep}`)) { res.writeHead(403); return res.end('Forbidden'); }
    let body, status = 200, extension = path.extname(location);
    try {
      if (!(await stat(location)).isFile()) throw new Error('Not a file');
      body = await readFile(location);
    } catch {
      status = 404; extension = '.html'; body = await readFile(path.join(output, '404.html'));
    }
    if (extension === '.html' && !preview) body = Buffer.from(body.toString('utf8').replace('</body>', '<script src="/__reload.js"></script></body>'));
    res.writeHead(status, { 'Content-Type': types[extension] || 'application/octet-stream', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch {
    res.writeHead(400); res.end('Bad request');
  }
});
server.on('error', error => { console.error(error.message); process.exit(1); });
server.listen(port, '127.0.0.1', () => console.log(`Local: http://localhost:${port} (${preview ? 'preview' : 'live reload'})`));
function stop() {
  clearTimeout(timer);
  watchers.forEach(watcher => watcher.close());
  clients.forEach(client => client.end());
  server.close(() => process.exit(0));
}
process.on('SIGINT', stop);
process.on('SIGTERM', stop);
