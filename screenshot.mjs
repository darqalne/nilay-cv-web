import puppeteer from "puppeteer-core";
import fs from "node:fs";
import path from "node:path";

const url = process.argv[2] || "http://localhost:3000";
const label = process.argv[3] || "";
const width = Number(process.argv[4]) || 1440;
const height = Number(process.argv[5]) || 900;

const outDir = path.join(process.cwd(), "temporary screenshots");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

let n = 1;
while (fs.existsSync(path.join(outDir, `screenshot-${n}${label ? "-" + label : ""}.png`))) n++;
const outFile = path.join(outDir, `screenshot-${n}${label ? "-" + label : ""}.png`);

const chromePath = "C:/Users/darqa/.cache/puppeteer/chrome/win64-152.0.7977.54/chrome-win64/chrome.exe";

const browser = await puppeteer.launch({ executablePath: chromePath, headless: true });
const page = await browser.newPage();
await page.setViewport({ width, height });
await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
await new Promise((r) => setTimeout(r, 400));

// force scroll-triggered reveal states on for a full, stable QA screenshot
// (headless automation's chopped-up scrolling doesn't reliably fire IntersectionObserver
// the way continuous real-user scrolling does inside the page's own JS session)
await page.evaluate(() => {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
  const sig = document.getElementById("sigBig");
  if (sig) sig.classList.add("is-revealed");
});
await new Promise((r) => setTimeout(r, 400));
await page.evaluate(() => window.scrollTo(0, 0));
await new Promise((r) => setTimeout(r, 200));

await page.screenshot({ path: outFile, fullPage: true });
await browser.close();
console.log("Saved:", outFile);
