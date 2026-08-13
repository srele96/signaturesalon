const INSTAGRAM_URL = 'https://instagram.com/signaturebatajnica';
const MOBILE_PHONE = '381637427750';
const MOBILE_PHONE_INTL = `+${MOBILE_PHONE}`;
const GOOGLE_REVIEW_URL =
  'https://search.google.com/local/writereview?placeid=ChIJI1U8jqRnWkcRYmGgD5XgQxw';

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/oeiT45tU6cUaNtNVA';

const SECTION_ID = {
  top: 'top',
  services: 'services',
  work: 'work',
  stylists: 'stylists',
  about: 'about',
  findUs: 'find-us',
  faq: 'faq',
  book: 'book',
  visit: 'visit',
} as const;

const AREA_SERVED = [
  'Batajnica',
  'Zemun Polje',
  'Busije',
  'Altina',
  'Ugrinovci',
  'Zemun',
  'Novi Beograd',
  'Novi Banovci',
  'Nova Pazova',
  'Dobanovci',
  'Surčin',
] as const;

export {
  INSTAGRAM_URL,
  MOBILE_PHONE,
  MOBILE_PHONE_INTL,
  GOOGLE_REVIEW_URL,
  SECTION_ID,
  AREA_SERVED,
  GOOGLE_MAPS_URL,
};
