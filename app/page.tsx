import { Home } from '@/components/Home';
import { WithHtml } from '@/components/WithHtml';
import messages, { type Locale, defaultLocale } from '@/messages';
import { url } from '@/url';

const locale: Locale = defaultLocale;

export default function Page() {
  const translations = messages['sr'];

  return (
    <WithHtml locale={locale}>
      <Home translations={translations} locale={locale} url={url().href} />
    </WithHtml>
  );
}
