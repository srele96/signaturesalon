import { Home } from '@/components/Home';
import { WithHtml } from '@/components/WithHtml';
import messages, { type Locale, defaultLocale } from '@/messages';

const locale: Locale = defaultLocale;

export default function Page() {
  const translations = messages['sr'];

  return (
    <WithHtml locale={locale}>
      <Home translations={translations} locale={locale} />
    </WithHtml>
  );
}
