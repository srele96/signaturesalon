import type { Messages } from './types';

const messages: Messages = {
  metadata: {
    title: 'Signature Salon (SR)',
    description: 'Šišanje koje nosi vaš potpis',
  },
  header: {
    brand: 'Signature',
    brandAccent: 'Salon',
    nav: {
      services: 'Usluge',
      work: 'Radovi',
      stylists: 'Frizeri',
      about: 'O nama',
      visit: 'Poseta',
    },
    bookAction: 'Zakaži termin',
    menuOpen: 'Otvori meni',
    menuClose: 'Zatvori meni',
  },
  hero: {
    eyebrow: 'Batajnica, Beograd - po zakazivanju',
    headingPrefix: 'Šišanje koje nosi',
    headingYour: 'vaš ',
    headingSignature: 'potpis',
    sigCaption:
      'Svaki termin se završava isto - frizurom koja je nepogrešivo vaša.',
    bookAction: 'Zakaži termin',
    seeServices: 'Pogledaj usluge',
  },
  services: {
    heading: 'Usluge',
    subheading: 'Cena se određuje na konsultacijama.',
    price: 'od {amount}',
    items: {
      haircut: {
        name: 'Šišanje i feniranje',
        detail:
          'Konsultacije, pranje, precizno šišanje i završno feniranje \u2014 za kratku i dugu kosu.',
      },
      styling: {
        name: 'Stilizovanje i svečane frizure',
        detail: 'Peglanje, punđe i pletenice za događaje i posebne prilike.',
      },
      color: {
        name: 'Farbanje \u2014 Revlon Professional',
        detail:
          'Kompletno farbanje Revlon Color Sublime, toniranje ili glos \u2014 cena zavisi od dužine kose.',
      },
      balayage: {
        name: 'Balayage i posvetljivanje',
        detail:
          'Posvetljivanje, balayage, ombre ili korekcija boje sa Magnet Blondes.',
      },
      bondRepair: {
        name: 'Bond repair i regeneracija',
        detail:
          'Bond-repair, UniqOne i Equave hidratantni tretmani za oštećenu kosu.',
      },
      mensGrooming: {
        name: 'Muško šišanje',
        detail:
          'Šišanje, mašinica, oblikovanje brade i pranje sa stilizovanjem.',
      },
    },
  },
  work: {
    heading: 'Nedavni radovi',
    subheading: 'Pregled radova iz salona ove sezone.',
    items: {
      braidsWithExtensions: 'Pletenice sa umetcima',
      straightCutBlowDry: 'Ravno šišanje/feniranje',
      brownHairWaves: 'Talasi na braon kosi',
      blackHairWaves: 'Talasi na crnoj kosi',
      chestnutHairWaves: 'Talasi na kestenjastoj kosi',
    },
  },
  stylists: {
    heading: 'Iza stolice',
    items: {
      jelena: {
        role: 'Šišanje, farbanje i stilizovanje - sve usluge na jednoj stolici.',
      },
    },
  },
  about: {
    heading: 'Izgrađeno detalj po detalj',
    paragraph1:
      'Signature Salon je otvoren u Batajnici sa jednom idejom - stolica treba ' +
      'da deluje osmišljeno, a ne užurbano. Mermerni podovi, toplo svetlo i ' +
      'sveže cveće dočekuju svaki termin - ne radi utiska, već zato što ' +
      'prostor u kom sedite oblikuje šišanje sa kojim odlazite.',
    paragraph2:
      'Svaka poseta počinje razgovorom, a ne šablonom. Bilo da je u pitanju ' +
      'precizno feniranje ili kompletna korekcija boje, ista pažnja se ' +
      'posvećuje najmanjim detaljima kao i najvećim promenama.',
    wallImageAlt: 'Natpis na zidu i ulaz u Signature Salon',
    floralsWideAlt: 'Cvetni aranžman na ulazu u Signature Salon',
    floralsCloseAlt: 'Detalj cvetnog aranžmana u Signature Salon',
  },
  book: {
    headingPrefix: 'Rezerviši svoju ',
    headingChair: 'stolicu',
    subheading:
      'Recite nam šta vam treba i kada vam odgovara - potvrdićemo isti dan.',
    fastestWay: 'Najbrži način za zakazivanje',
    phoneHours: 'Pon–Sub, 11:00–20:00 - pozovite i naći ćemo vam termin.',
    callNow: 'Pozovi odmah',
    whatsappHeading: 'Zakaži preko WhatsApp-a',
    whatsappBody:
      'Pošaljite nam poruku sa željenom uslugom i datumom - odgovorićemo ' +
      'da potvrdimo termin.',
    whatsappCta: 'Pošalji poruku na WhatsApp',
    whatsappMessage:
      'Zdravo! Želeo/la bih da zakažem termin u Signature Salon.',
    instagramHeading: 'Prati nas na Instagramu',
    instagramBody:
      'Pogledajte naše najnovije radove, trenutke iza stolice i slobodne ' +
      'termine.',
  },
  footer: {
    addressHeading: 'Signature Salon',
    hoursHeading: 'Radno vreme',
    hoursLine: 'Pon–Sub, 11:00–20:00',
    closedSunday: 'Nedeljom ne radimo',
    contactHeading: 'Kontakt',
    copyright: '© 2026 Signature Salon. Sva prava zadržana.',
  },
};

export default messages;
