// Regenera a Open Graph image (1200x630) usada no compartilhamento de links.
// Uso:  node scripts/build-og.mjs            -> escreve public/og-image.png
//       node scripts/build-og.mjs out.png    -> escreve no caminho dado
// Layout: logo grande à esquerda | tagline centralizada à direita | serviços embaixo.
import sharp from 'sharp'

const W = 1200, H = 630
const OUT = process.argv[2] || 'public/og-image.png'

// 1) Crop justo da logo (detecta a bounding box do alpha, mata o padding transparente)
const { data, info } = await sharp('public/images/logo/logo-transparente.png')
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })
const { width, height, channels } = info
let minX = width, minY = height, maxX = 0, maxY = 0
const A = 16
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    if (data[(y * width + x) * channels + 3] > A) {
      if (x < minX) minX = x
      if (x > maxX) maxX = x
      if (y < minY) minY = y
      if (y > maxY) maxY = y
    }
  }
}
const logoBuf = await sharp('public/images/logo/logo-transparente.png')
  .extract({ left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 })
  .resize({ height: 360 })
  .toBuffer()
const lm = await sharp(logoBuf).metadata()
const logoLeft = 80
const logoTop = Math.round((H - lm.height) / 2) - 18

// 2) Fundo — gradiente escuro -> roxo, glow suave à direita, filete roxo no topo
const bg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b0b10"/>
      <stop offset="0.55" stop-color="#15101f"/>
      <stop offset="1" stop-color="#2a1d44"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.78" cy="0.30" r="0.6">
      <stop offset="0" stop-color="#8b5cf6" stop-opacity="0.30"/>
      <stop offset="1" stop-color="#8b5cf6" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="top" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#6d28d9" stop-opacity="0"/>
      <stop offset="0.5" stop-color="#a855f7" stop-opacity="1"/>
      <stop offset="1" stop-color="#6d28d9" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect width="${W}" height="5" fill="url(#top)"/>
</svg>`

// 3) Texto — tagline centralizada à direita, linha de serviços centralizada embaixo
const rcx = 890
const text = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .t{font-family:Arial,Helvetica,sans-serif;font-weight:800;}
    .s{font-family:Arial,Helvetica,sans-serif;font-weight:600;letter-spacing:4px;}
  </style>
  <text class="t" x="${rcx}" y="278" text-anchor="middle" font-size="42" fill="#ffffff">Conteúdo que posiciona.</text>
  <text class="t" x="${rcx}" y="338" text-anchor="middle" font-size="42" fill="#9b7ef0">Estratégia que converte.</text>
  <text class="s" x="600" y="582" text-anchor="middle" font-size="20" fill="#8a8298">AUDIOVISUAL · TRÁFEGO PAGO · BRANDING · PERFORMANCE</text>
</svg>`

await sharp(Buffer.from(bg))
  .composite([
    { input: logoBuf, left: logoLeft, top: logoTop },
    { input: Buffer.from(text), left: 0, top: 0 },
  ])
  .png()
  .toFile(OUT)
console.log('wrote', OUT, '| logo', lm.width + 'x' + lm.height, 'at', logoLeft + ',' + logoTop)
