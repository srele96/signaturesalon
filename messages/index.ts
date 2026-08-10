import sr from './sr';
import en from './en';

export * from './types';
export * from './translate';

const messages = { sr, en } as const;

type Translations = typeof messages;
type Locale = keyof Translations;

export default messages;

export const defaultLocale: Locale = 'sr';

export function hrefFor(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}`;
}

// TODO: Improve type 'sr': '/', 'en': '/en', etc
export function languageAlternates(): Record<Locale, string> {
  return Object.fromEntries(locales().map((l) => [l, hrefFor(l)])) as Record<
    Locale,
    string
  >;
}

export function locales() {
  return Object.keys(messages) as Locale[];
}

export function hasLocale(value: string): value is Locale {
  return (locales() as string[]).includes(value);
}

export type { Translations, Locale };
