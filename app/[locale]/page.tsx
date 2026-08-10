import { Home } from '@/components/Home';
import { notFound } from 'next/navigation';
import { hasLocale } from '@/messages';

import messages from '@/messages';

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }

  const translations = messages[locale];

  return (
    <html lang={locale} className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {<Home t={translations} />}
      </body>
    </html>
  );
}
