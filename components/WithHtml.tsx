import type { Locale } from '@/messages';

interface Props {
  children: React.ReactNode;
  locale: Locale;
}

export function WithHtml({ children, locale }: Props) {
  return (
    <html
      lang={locale}
      className="h-full antialiased"
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
