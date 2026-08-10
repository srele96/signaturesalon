import type { Messages } from './types';

const messages: Messages = {
  metadata: {
    title: 'Signature Salon',
    description: 'A cut that carries your signature.',
  },
  header: {
    brand: 'Signature',
    brandAccent: 'Salon',
    nav: {
      services: 'Services',
      work: 'Work',
      stylists: 'Stylists',
      about: 'About',
      visit: 'Visit',
    },
    bookAction: 'Book a chair',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
  hero: {
    eyebrow: 'Batajnica, Belgrade - by appointment',
    headingPrefix: 'A cut that carries',
    headingYour: 'your ',
    headingSignature: 'signature',
    sigCaption:
      'Every appointment ends the same way - with a cut ' +
      "that's unmistakably yours.",
    bookAction: 'Book a chair',
    seeServices: 'See services',
  },
  services: {
    heading: 'Services',
    subheading: 'Priced per consultation.',
    price: 'from {amount}',
    items: {
      haircut: {
        name: 'Haircut & Blow-Dry',
        detail:
          'Consultation, wash, precision cut, and finishing blow-dry - short to long hair.',
      },
      styling: {
        name: 'Styling & Occasion Hair',
        detail:
          'Iron styling, updos, and braids for events and special occasions.',
      },
      color: {
        name: 'Color - Revlon Professional',
        detail:
          'Full color with Revlon Color Sublime, toning, or gloss - priced by length.',
      },
      balayage: {
        name: 'Balayage & Lightening',
        detail:
          'Bleach, balayage, ombre, or color correction with Magnet Blondes.',
      },
      bondRepair: {
        name: 'Bond Repair & Care Rituals',
        detail:
          'Bond-repair, UniqOne, and Equave hydrating treatments for damaged hair.',
      },
      mensGrooming: {
        name: "Men's Grooming",
        detail: 'Cut, clipper work, beard shape, and wash & style finish.',
      },
    },
  },
  work: {
    heading: 'Recent work',
    subheading: 'A look at the work coming out of the chair this season.',
    items: {
      braidsWithExtensions: 'Braids with extensions',
      straightCutBlowDry: 'Straight cut/blow-dry',
      brownHairWaves: 'Brown hair waves',
      blackHairWaves: 'Black hair waves',
      chestnutHairWaves: 'Chestnut hair waves',
    },
  },
  stylists: {
    heading: 'Behind the chair',
    items: {
      jelena: {
        role: 'Cut, color & styling - every service under one chair.',
      },
    },
  },
  about: {
    heading: 'Built one detail at a time',
    paragraph1:
      'Signature Salon opened in Batajnica with one idea: a chair should feel ' +
      'considered, not rushed. Marble floors, warm light, and fresh flowers ' +
      'greet every appointment - not for show, but because the space you sit ' +
      'in shapes the cut you leave with.',
    paragraph2:
      'Every visit starts with a conversation, not a template. Whether ' +
      "it's a precision blow-dry or a full color correction, the " +
      'same care goes into the smallest details as the biggest changes.',
    wallImageAlt: 'Signature Salon wall lettering and entrance',
    floralsWideAlt: 'Fresh floral arrangement at Signature Salon entrance',
    floralsCloseAlt: 'Fresh floral detail at Signature Salon',
  },
  book: {
    headingPrefix: 'Reserve your ',
    headingChair: 'chair',
    subheading:
      "Tell us what you're after and when suits you - we'll confirm " +
      'within the day.',
    fastestWay: 'Fastest way to book',
    phoneHours: "Mon-Sat, 11:00-20:00 - call and we'll find you a chair.",
    callNow: 'Call now',
    whatsappHeading: 'Book on WhatsApp',
    whatsappBody:
      "Send us a message with your preferred service and date - we'll " +
      'reply to confirm your slot.',
    whatsappCta: 'Message us on WhatsApp',
    whatsappMessage:
      'Hi! I would like to book an appointment at Signature Salon.',
    instagramHeading: 'Follow on Instagram',
    instagramBody:
      'See our latest work, behind-the-chair moments, and booking openings.',
  },
  footer: {
    addressHeading: 'Signature Salon',
    hoursHeading: 'Hours',
    hoursLine: 'Mon-Sat, 11:00-20:00',
    closedSunday: 'Closed Sunday',
    contactHeading: 'Contact',
    copyright: '© 2026 Signature Salon. All rights reserved.',
  },
};

export default messages;
