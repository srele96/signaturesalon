import type { MetadataRoute } from 'next';
import { url } from '@/lib/url';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = url().href.replace(/\/$/, '');

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
