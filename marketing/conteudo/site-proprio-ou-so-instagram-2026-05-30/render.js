// Renderiza cada .slide do carrossel.html em PNG 1080x1350 (2x).
// Uso: node render.js   (precisa de playwright + chromium instalados)
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const dir = __dirname;
  const outDir = path.join(dir, 'instagram');
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1080, height: 1350 },
    deviceScaleFactor: 2,
  });

  await page.goto('file://' + path.join(dir, 'carrossel.html').replace(/\\/g, '/'));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400); // garantir fontes/gradientes pintados

  const slides = await page.$$('.slide');
  for (let i = 0; i < slides.length; i++) {
    const n = String(i + 1).padStart(2, '0');
    const file = path.join(outDir, `slide-${n}.png`);
    await slides[i].screenshot({ path: file });
    console.log('ok', file);
  }

  await browser.close();
  console.log(`\n${slides.length} slides renderizados em ${outDir}`);
})();
