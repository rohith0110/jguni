import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const OUT = "scripts/shots";
mkdirSync(OUT, { recursive: true });

const viewports = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "laptop", width: 1280, height: 800 },
  { name: "desktop", width: 1920, height: 1080 },
];
const themes = ["light", "dark"];

const browser = await chromium.launch();
const report = [];

for (const vp of viewports) {
  for (const theme of themes) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    const page = await ctx.newPage();
    await page.addInitScript((t) => {
      try {
        localStorage.setItem("jg-theme", t);
      } catch {}
    }, theme);

    const errors = [];
    page.on("pageerror", (e) => errors.push(String(e)));

    await page.goto("http://localhost:3000", {
      waitUntil: "networkidle",
      timeout: 60000,
    });

    // Scroll through to trigger reveals + lazy images
    await page.evaluate(async () => {
      await new Promise((res) => {
        let y = 0;
        const step = () => {
          window.scrollBy(0, window.innerHeight * 0.8);
          y += window.innerHeight * 0.8;
          if (
            y <
            document.documentElement.scrollHeight - window.innerHeight
          ) {
            setTimeout(step, 120);
          } else {
            setTimeout(res, 400);
          }
        };
        step();
      });
    });
    await page.waitForTimeout(900);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);

    const metrics = await page.evaluate(() => ({
      scrollW: document.documentElement.scrollWidth,
      clientW: document.documentElement.clientWidth,
      bodyH: document.body.scrollHeight,
    }));
    const overflow = metrics.scrollW - metrics.clientW;

    const file = `${OUT}/${vp.name}-${theme}.png`;
    await page.screenshot({ path: file, fullPage: true });
    report.push({
      vp: vp.name,
      theme,
      overflowPx: overflow,
      heightPx: metrics.bodyH,
      jsErrors: errors.length,
      file,
    });
    await ctx.close();
  }
}

await browser.close();
console.log(JSON.stringify(report, null, 2));
