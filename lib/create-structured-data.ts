import { INSTAGRAM_URL, MOBILE_PHONE_INTL } from './constant';
import { defaultLocale } from '@/messages';

interface Options {
  url: string;
  priceRange: string;
}

export function createStructuredData({ url, priceRange }: Options) {
  const base = url.replace(/\/$/, '');
  const businessId = `${base}/#business`;
  const websiteId = `${base}/#website`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HairSalon',
        '@id': businessId,
        priceRange,
        name: 'Signature Salon',
        url: base,
        telephone: MOBILE_PHONE_INTL,
        image: `${base}/image/interior-florals-close.jpeg`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Majora Zorana Radosavljevića 205',
          addressLocality: 'Beograd',
          addressRegion: 'Batajnica',
          postalCode: '11273',
          addressCountry: 'RS',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 44.8979201,
          longitude: 20.2906896,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            opens: '11:00',
            closes: '20:00',
          },
        ],
        sameAs: [INSTAGRAM_URL],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: base,
        inLanguage: defaultLocale,
        name: 'Signature Salon',
        publisher: { '@id': businessId },
      },
    ],
  };

  return structuredData;
}
