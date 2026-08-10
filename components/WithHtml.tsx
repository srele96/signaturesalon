import type { Locale } from '@/messages';
import { fraunces, workSans, homemadeApple } from '@/fonts';

interface Props {
  children: React.ReactNode;
  locale: Locale;
}

export function WithHtml({ children, locale }: Props) {
  return (
    <html
      lang={locale}
      className={'h-full antialiased'.concat(
        [fraunces.variable, workSans.variable, homemadeApple.variable].join(
          ' ',
        ),
      )}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
