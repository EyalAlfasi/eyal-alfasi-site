import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const logoSource = await readFile(
  path.join(projectRoot, 'src/components/Logo.astro'),
  'utf8'
);
const logoContent = logoSource.match(/<svg[\s\S]*?>([\s\S]*?)<\/svg>/)?.[1];

if (!logoContent) {
  throw new Error('Could not extract the logo artwork.');
}

const card = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#f7f6f2" />
        <stop offset="0.62" stop-color="#f2f1ed" />
        <stop offset="1" stop-color="#e8ecfb" />
      </linearGradient>
      <radialGradient id="glow" cx="0" cy="0" r="1" gradientTransform="translate(982 92) rotate(134) scale(450 390)">
        <stop stop-color="#1346ff" stop-opacity="0.11" />
        <stop offset="1" stop-color="#1346ff" stop-opacity="0" />
      </radialGradient>
    </defs>

    <rect width="1200" height="630" fill="url(#background)" />
    <rect width="1200" height="630" fill="url(#glow)" />
    <rect x="32" y="32" width="1136" height="566" rx="28" fill="none" stroke="#111318" stroke-opacity="0.1" />

    <g transform="translate(270 150) scale(1.994)" color="#111318">
      ${logoContent}
    </g>

    <line x1="270" y1="430" x2="930" y2="430" stroke="#111318" stroke-opacity="0.14" />
    <text
      x="600"
      y="486"
      fill="#4d515b"
      font-family="Arial, Helvetica, sans-serif"
      font-size="29"
      font-weight="600"
      letter-spacing="6"
      text-anchor="middle"
    >SENIOR FULL STACK ENGINEER</text>
  </svg>
`;

await sharp(Buffer.from(card))
  .png({ compressionLevel: 9 })
  .toFile(path.join(projectRoot, 'public/og.png'));

console.log('Generated public/og.png (1200x630) from the site logo.');
