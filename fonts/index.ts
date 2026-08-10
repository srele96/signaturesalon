import { Fraunces, Work_Sans, Homemade_Apple } from 'next/font/google';

export const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'], // covers Serbian Latin diacritics
  variable: '--app-font-display',
  display: 'swap',
  // do not use axes, they increase First Contentful Paint to ~3s
});

export const workSans = Work_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--app-font-body',
  display: 'swap',
});

export const homemadeApple = Homemade_Apple({
  subsets: ['latin'], // script font, decorative use only (`.font-script`) — check if it needs latin-ext for your content
  weight: '400',
  variable: '--app-font-script',
  display: 'swap',
});
