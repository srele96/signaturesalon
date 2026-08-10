import { Home } from '@/components/Home';
import { notFound } from 'next/navigation';
import messages, { hasLocale } from '@/messages';
import { WithHtml } from '@/components/WithHtml';

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
    <WithHtml locale={locale}>
      <Home translations={translations} locale={locale} />
    </WithHtml>
  );
}
