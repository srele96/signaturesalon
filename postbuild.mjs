async function main() {
  const CNAME_FILENAME = 'CNAME';

  console.log('Starting... Writing ' + CNAME_FILENAME + ' ...');

  const host = process.env.NEXT_PUBLIC_SITE_HOST;
  if (!host) {
    throw new Error('NEXT_PUBLIC_SITE_HOST is not set');
  }

  const fs = await import('node:fs/promises');
  const path = await import('node:path');

  const outDir = path.join(process.cwd(), 'out');
  const cnamePath = path.join(outDir, CNAME_FILENAME);

  await fs.writeFile(cnamePath, host, 'utf8');

  console.log('Done. Wrote ' + CNAME_FILENAME + ' to ' + cnamePath);
}

main().catch((error) => {
  console.error(`An error occured`, error);
});
