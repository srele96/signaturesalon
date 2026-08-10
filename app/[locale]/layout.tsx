import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import messages, { locales, hasLocale } from '@/messages';

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
    title: t.metadata.title,
    alternates: {
      canonical: locale === 'sr' ? '/' : `/${locale}`,
      languages: {
        sr: '/',
        en: '/en',
      },
    },
  };
}

export default async function LocaleLayout({ children }: Props) {
  return children;
}
