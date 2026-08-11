import { Home } from '@/components/Home';
import messages, { type Locale, defaultLocale } from '@/messages';
import { url } from '@/lib/url';

const locale: Locale = defaultLocale;

export default function Page() {
  const translations = messages['sr'];

  return <Home translations={translations} locale={locale} url={url().href} />;
}
