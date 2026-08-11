import type { MetadataRoute } from 'next';
import { canonicalPaths } from '@/messages';
import { url } from '@/lib/url';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = url().href.replace(/\/$/, '');

  return canonicalPaths().map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
  }));
}
