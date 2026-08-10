import type { Metadata } from 'next';
import messages, {
  hrefFor,
  languageAlternates,
  defaultLocale,
  type Locale,
} from '@/messages';
import { url } from '@/url';

// import '@fontsource-variable/fraunces/full';
// import '@fontsource-variable/fraunces/full-italic.css';
// import '@fontsource-variable/work-sans';
// import '@fontsource/homemade-apple';
import './globals.css';

const locale: Locale = defaultLocale;
const t = messages[locale];

export const metadata: Metadata = {
  metadataBase: url(),
  title: t.metadata.title,
  description: t.metadata.description,
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
  // For SEO each page needs to have canonical tag and link to its own
  // canonical page
  // If a page itself is canonical, it refers to itself, otherwise (for now)
  // /sr canonical page is /
  alternates: {
    canonical: hrefFor(locale),
    languages: languageAlternates(),
  },
};

export default async function RootLayout({ children }: LayoutProps<'/'>) {
  return children;
}
