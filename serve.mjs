import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = __dirname;
const port = 3000;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".woff2": "font/woff2",
  ".json": "application/json",
  ".pdf": "application/pdf",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
};

http
  .createServer((req, res) => {
    let reqPath = decodeURIComponent(req.url.split("?")[0]);
    if (reqPath === "/") reqPath = "/index.html";
    const filePath = path.join(root, reqPath);
    if (!filePath.startsWith(root)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }
    fs.readFile(filePath, (err, data) => {
      if (err) {
        // clean-path section routes (e.g. /hakkimda) have no matching file locally —
        // serve index.html directly so the page's own JS can pick up location.pathname
        // and scroll to the right section (mirrors what 404.html hands off to on GH Pages)
        if (!path.extname(reqPath)) {
          fs.readFile(path.join(root, "index.html"), (err2, indexData) => {
            if (err2) {
              res.writeHead(404, { "Content-Type": "text/plain" });
              res.end("Not found: " + reqPath);
              return;
            }
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            res.end(indexData);
          });
          return;
        }
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not found: " + reqPath);
        return;
      }
      const ext = path.extname(filePath);
      res.writeHead(200, { "Content-Type": types[ext] || "application/octet-stream" });
      res.end(data);
    });
  })
  .listen(port, () => console.log(`Serving ${root} at http://localhost:${port}`));
