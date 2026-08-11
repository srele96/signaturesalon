import sr from './sr';
import en from './en';

export * from './types';
export * from './translate';

const messages = { sr, en } as const;

type Translations = typeof messages;
type Locale = keyof Translations;

export default messages;

export const defaultLocale = 'sr' as const;

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

export function canonicalPaths(): string[] {
  return locales().map(hrefFor);
}

export function locales() {
  return Object.keys(messages) as Locale[];
}

export function hasLocale(value: string): value is Locale {
  return (locales() as string[]).includes(value);
}

const OG_LOCALE_MAP: Record<Locale, string> = {
  sr: 'sr_RS',
  en: 'en_US',
};

export function ogLocaleFor(locale: Locale): string {
  return OG_LOCALE_MAP[locale];
}

export type { Translations, Locale };
