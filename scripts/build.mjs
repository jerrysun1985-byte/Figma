import { mkdir, copyFile, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');

const files = [
  ['index.html', 'index.html'],
  ['src/main.js', 'src/main.js'],
  ['src/styles.css', 'src/styles.css'],
];

await rm(dist, { recursive: true, force: true });

for (const [source, target] of files) {
  const outputPath = join(dist, target);
  await mkdir(dirname(outputPath), { recursive: true });
  await copyFile(join(root, source), outputPath);
}

console.log(`Built ${files.length} files to dist`);
