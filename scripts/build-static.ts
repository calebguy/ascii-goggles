import { mkdir, rm } from 'node:fs/promises';

const outputDir = 'dist';
const assets = ['index.html', 'styles.css', 'favicon.png'];

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

await Promise.all(
  assets.map(async (asset) => {
    await Bun.write(`${outputDir}/${asset}`, Bun.file(asset));
  }),
);
