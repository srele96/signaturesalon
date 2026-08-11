import { ogLocaleFor, hrefFor, type Locale, type Messages } from '@/messages';
import type { Metadata } from 'next';

interface CreateOpenGraphMetadataOptions {
  locale: Locale;
  translations: Messages;
}

function createOpenGraphMetadata({
  locale,
  translations: t,
}: CreateOpenGraphMetadataOptions): Metadata['openGraph'] {
  const metadata: Metadata['openGraph'] = {
    title: t.metadata.title,
    description: t.metadata.description,
    url: hrefFor(locale),
    siteName: 'Signature Salon',
    images: [
      {
        url: '/image/og-image.jpg',
        width: 1200,
        height: 630,
        alt: t.metadata.title,
      },
    ],
    locale: ogLocaleFor(locale),
    type: 'website',
  };

  return metadata;
}

interface createTwitterMetadataOptions {
  translations: Messages;
}

function createTwitterMetadata({
  translations: t,
}: createTwitterMetadataOptions): Metadata['twitter'] {
  const metadata: Metadata['twitter'] = {
    card: 'summary_large_image',
    title: t.metadata.title,
    description: t.metadata.description,
    images: ['/image/og-image.jpg'],
  };

  return metadata;
}

export { createOpenGraphMetadata, createTwitterMetadata };
