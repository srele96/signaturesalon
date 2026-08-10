import { Home } from '@/components/Home';

const locale: Locale = 'sr';
import messages, { type Locale } from '@/messages';

export default function Page() {
  const translations = messages['sr'];

  return (
    <html lang={locale} className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {<Home t={translations} />}
      </body>
    </html>
  );
}
