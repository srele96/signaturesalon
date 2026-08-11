import type { Locale } from '@/messages';
import { fraunces, workSans } from '@/fonts';

interface Props {
  children: React.ReactNode;
  locale: Locale;
}

export async function WithHtml({ children, locale }: Props) {
  return (
    <html
      lang={locale}
      className={[
        'h-full',
        'antialiased',
        fraunces.variable,
        workSans.variable,
      ].join(' ')}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
