import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import messages, {
  locales,
  hasLocale,
  hrefFor,
  languageAlternates,
} from '@/messages';
import { url } from '@/url';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales().map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }

  const t = messages[locale];

  return {
    metadataBase: url(),
    title: t.metadata.title,
    description: t.metadata.description,
    alternates: {
      canonical: hrefFor(locale),
      languages: languageAlternates(),
    },
  };
}

export default async function LocaleLayout({ children }: Props) {
  return children;
}
