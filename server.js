// Kleine statische server zonder afhankelijkheden. Start met: npm start
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 8015;
const ROOT = path.join(__dirname, "site");
const TYPES = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8", ".json": "application/json",
  ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".webp": "image/webp", ".gif": "image/gif", ".ico": "image/x-icon", ".pdf": "application/pdf",
  ".woff2": "font/woff2", ".mp4": "video/mp4"
};

http.createServer((req, res) => {
  let rel = decodeURIComponent(req.url.split("?")[0]);
  if (rel.endsWith("/")) rel += "index.html";
  else if (["profiel", "ervaring", "vaardigheden", "meer"].includes(rel.slice(1))) rel = "/index.html";   // secties van de homepage
  else if (!path.extname(rel)) rel += ".html";                                                             // /projecten -> projecten.html
  const file = path.join(ROOT, path.normalize(rel));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end("Geen toegang"); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }); return res.end("Pagina niet gevonden"); }
    res.writeHead(200, { "Content-Type": TYPES[path.extname(file).toLowerCase()] || "application/octet-stream", "Cache-Control": "no-cache" });
    res.end(data);
  });
}).listen(PORT, () => console.log(`Website draait op http://localhost:${PORT}`));
