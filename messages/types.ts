interface BusLine {
  number: string;
  route: string;
}

interface Messages {
  metadata: {
    title: string;
    description: string;
  };
  header: {
    brand: string;
    brandAccent: string;
    nav: {
      services: string;
      work: string;
      stylists: string;
      about: string;
      findUs: string;
      visit: string;
    };
    bookAction: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    eyebrow: string;
    headingPrefix: string;
    headingYour: string;
    headingSignature: string;
    sigCaption: string;
    bookAction: string;
    seeServices: string;
  };
  services: {
    heading: string;
    subheading: string;
    price: string;
    items: {
      haircut: { name: string; detail: string };
      styling: { name: string; detail: string };
      color: { name: string; detail: string };
      balayage: { name: string; detail: string };
      bondRepair: { name: string; detail: string };
      mensGrooming: { name: string; detail: string };
    };
  };
  work: {
    heading: string;
    subheading: string;
    items: {
      braidsWithExtensions: string;
      straightCutBlowDry: string;
      brownHairWaves: string;
      blackHairWaves: string;
      chestnutHairWaves: string;
    };
  };
  stylists: {
    heading: string;
    items: {
      jelena: { role: string };
    };
  };
  about: {
    heading: string;
    paragraph1: string;
    paragraph2: string;
    wallImageAlt: string;
    floralsWideAlt: string;
    floralsCloseAlt: string;
  };
  book: {
    headingPrefix: string;
    headingChair: string;
    subheading: string;
    fastestWay: string;
    phoneHours: string;
    callNow: string;
    whatsappHeading: string;
    whatsappBody: string;
    whatsappCta: string;
    whatsappMessage: string;
    instagramHeading: string;
    instagramBody: string;
  };
  footer: {
    addressHeading: string;
    hoursHeading: string;
    hoursLine: string;
    closedSunday: string;
    contactHeading: string;
    copyright: string;
  };
  location: {
    heading: string;
    subheading: string;
    directions: string[];
    nearbyHeading: string;
    nearby: string[];
    busHeading: string;
    busStopName: string;
    busLines: BusLine[];
    mapTitle: string;
    openInMaps: string;
    loadMap: string;
  };
}

type Join<
  K extends string,
  P extends string, //
> = P extends '' ? K : `${K}.${P}`;

type Paths<T> = T extends string
  ? ''
  : T extends object
    ? {
        [K in keyof T & string]: T[K] extends string ? K : Join<K, Paths<T[K]>>;
      }[keyof T & string]
    : never;

type MessagePath = Paths<Messages>;

export type { Messages, MessagePath };
