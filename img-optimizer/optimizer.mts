import sharp from 'sharp';
import path from 'node:path';
import fs from 'node:fs/promises';

const root = import.meta.dirname;

const inDir = 'in';
const outDir = 'out';
const inDirPath = path.join(root, inDir);
const outDirPath = path.join(root, outDir);

const webpQuality = 50;

const exclude = new Set(['.gitignore']);

async function main() {
  const entries = await fs.readdir(inDirPath, { withFileTypes: true });
  const files = entries.filter((entry) => {
    return entry.isFile() && !exclude.has(entry.name);
  });

  const optimizers = files.map(async (file) => {
    const inputPath = path.join(inDirPath, file.name);
    const outBaseName = path.basename(file.name, path.extname(file.name));
    const outName = `${outBaseName}.webp`;
    const outputPath = path.join(outDirPath, outName);

    try {
      await sharp(inputPath).webp({ quality: webpQuality }).toFile(outputPath);
      return `'${file.name}': converted to: '${outName}'`;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(`'${file.name}': conversion failed - '${message}'`);
    }
  });

  const results = await Promise.allSettled(optimizers);
  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      console.info(`✓ ${result.value}`);
    } else {
      console.error(`✗ ${result.reason.message}`);
    }
  });
}

main().catch((error) => {
  console.error(`Error during optimizing images: `, error);
  process.exitCode = 1;
});
