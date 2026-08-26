import { writeFileSync } from 'fs';

const css = await fetch(
  'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600&display=swap',
  { headers: { 'User-Agent': 'Mozilla/5.0' } },
).then((r) => r.text());

const match = css.match(/url\((https:\/\/fonts\.gstatic\.com[^)]+\.(?:woff2|ttf))\)/);
if (!match) throw new Error('font file not found');

const ext = match[1].endsWith('.woff2') ? 'woff2' : 'truetype';
const fontBuf = Buffer.from(await fetch(match[1]).then((r) => r.arrayBuffer()));
const b64 = fontBuf.toString('base64');
const mime = ext === 'woff2' ? 'font/woff2' : 'font/ttf';

const fontFace = `@font-face{font-family:'Space Grotesk';src:url(data:${mime};base64,${b64}) format('${ext}');font-weight:600;font-style:normal}`;

writeFileSync(
  'public/favicon.svg',
  [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">',
    `<style>${fontFace}</style>`,
    '<rect width="32" height="32" rx="7" fill="#050505"/>',
    '<text x="16" y="22.5" text-anchor="middle" font-family="\'Space Grotesk\',sans-serif" font-size="21" font-weight="600" fill="#FFFFFF">Q</text>',
    '</svg>',
  ].join(''),
);

writeFileSync(
  'public/apple-touch-icon.svg',
  [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">',
    `<style>${fontFace}</style>`,
    '<rect width="180" height="180" rx="40" fill="#050505"/>',
    '<text x="90" y="124" text-anchor="middle" font-family="\'Space Grotesk\',sans-serif" font-size="118" font-weight="600" fill="#FFFFFF">Q</text>',
    '</svg>',
  ].join(''),
);

console.log('Generated favicons with Space Grotesk 600');
