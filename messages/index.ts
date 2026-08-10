import sr from './sr';
import en from './en';

export * from './types';

const messages = { sr, en } as const;

type Translations = typeof messages;
type Locale = keyof Translations;

export default messages;

export function locales() {
  return Object.keys(messages) as Locale[];
}

export function hasLocale(value: string): value is Locale {
  return (locales() as string[]).includes(value);
}

export type { Translations, Locale };
