export function url(path = '/') {
  const protocol = process.env.NEXT_PUBLIC_SITE_PROTOCOL ?? 'http';
  const host = process.env.NEXT_PUBLIC_SITE_HOST ?? 'localhost';
  // https://nextjs.org/docs/pages/api-reference/cli/next#changing-the-default-port
  const port = process.env.PORT;
  const base = `${protocol}://${host}${port ? `:${port}` : ''}`;

  return new URL(path, base);
}
