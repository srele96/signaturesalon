import { Fraunces, Work_Sans } from 'next/font/google';

export const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'], // covers Serbian Latin diacritics
  variable: '--app-font-display',
  display: 'swap',
  axes: ['opsz'],
});

export const workSans = Work_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--app-font-body',
  display: 'swap',
});
