import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const OUT = "scripts/shots";
mkdirSync(OUT, { recursive: true });

const targets = [
  { key: "hero", sel: "#top" },
  { key: "about", sel: "#about" },
  { key: "programmes", sel: "#programmes" },
  { key: "leaders", sel: "#leaders" },
  { key: "faculty", sel: "#faculty" },
  { key: "campus", sel: "#campus" },
  { key: "testimonials", sel: "#testimonials" },
];

const browser = await chromium.launch();

for (const theme of ["light", "dark"]) {
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();
  await page.addInitScript((t) => {
    try {
      localStorage.setItem("jg-theme", t);
    } catch {}
  }, theme);
  await page.goto("http://localhost:3000", {
    waitUntil: "networkidle",
    timeout: 60000,
  });
  // full scroll to load lazy imgs + reveals
  await page.evaluate(async () => {
    await new Promise((res) => {
      let y = 0;
      const s = () => {
        window.scrollBy(0, 700);
        y += 700;
        if (y < document.documentElement.scrollHeight) setTimeout(s, 90);
        else setTimeout(res, 600);
      };
      s();
    });
  });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(700);

  for (const t of targets) {
    const el = await page.$(t.sel);
    if (!el) {
      console.log(`MISSING ${t.sel}`);
      continue;
    }
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await el.screenshot({ path: `${OUT}/sec-${t.key}-${theme}.png` });
  }
  await ctx.close();
}

await browser.close();
console.log("done");
