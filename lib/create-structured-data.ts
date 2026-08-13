import {
  INSTAGRAM_URL,
  MOBILE_PHONE_INTL,
  SECTION_ID,
  GOOGLE_MAPS_URL,
  AREA_SERVED,
} from './constant';
import { type FaqItem, type Locale } from '@/messages';

interface Options {
  url: string;
  priceRange: string;
  faqItems: FaqItem[];
  locale: Locale;
}

export function createStructuredData({
  url,
  priceRange,
  faqItems,
  locale,
}: Options) {
  const pageUrl = new URL(url);
  const base = pageUrl.origin;

  const businessId = `${base}/#business`;
  const websiteId = `${base}/#website`;
  const faqId = new URL(`#${SECTION_ID.faq}`, url).href;

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
        image: `${base}/image/interior-florals-close.webp`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Majora Zorana Radosavljevića 205',
          addressLocality: 'Batajnica',
          addressRegion: 'Beograd',
          postalCode: '11273',
          addressCountry: 'RS',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 44.8979201,
          longitude: 20.2906896,
        },
        areaServed: AREA_SERVED.map((name) => ({ '@type': 'Place', name })),
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
        hasMap: GOOGLE_MAPS_URL,
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: base,
        inLanguage: locale,
        name: 'Signature Salon',
        publisher: { '@id': businessId },
      },
      {
        '@type': 'FAQPage',
        '@id': faqId,
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };

  return structuredData;
}
