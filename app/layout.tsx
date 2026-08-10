import type { Metadata } from 'next';
import '@fontsource-variable/fraunces/full.css';
import '@fontsource-variable/fraunces/full-italic.css';
import '@fontsource-variable/work-sans';
import '@fontsource/homemade-apple';
import './globals.css';

import messages, { type Locale } from '@/messages';

const locale: Locale = 'sr';
const t = messages[locale];

export const metadata: Metadata = {
  title: t.metadata.title,
  description: 'A cut that carries your signature.',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  alternates: {
    canonical: locale === 'sr' ? '/' : `/${locale}`,
    languages: {
      sr: '/',
      en: '/en',
    },
  },
};

export default async function RootLayout({ children }: LayoutProps<'/'>) {
  return children;
}
