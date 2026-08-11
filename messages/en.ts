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
      findUs: 'Find Us',
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
    review: {
      heading: 'Leave a Review',
      body: 'If you enjoyed your visit, a public review means a lot to us.',
      cta: 'Leave a Google review',
    },
  },
  footer: {
    addressHeading: 'Signature Salon',
    hoursHeading: 'Hours',
    hoursLine: 'Mon-Sat, 11:00-20:00',
    closedSunday: 'Closed Sunday',
    contactHeading: 'Contact',
    copyright: '© 2026 Signature Salon. All rights reserved.',
  },
  location: {
    heading: 'Find Us',
    subheading: 'Directions, landmarks, and the nearest bus stop.',
    directions: [
      'Signature hair salon in Batajnica is located at the intersection of ' +
        'Majora Zorana Radosavljevića, Maksima Brankovića, and Stevana ' +
        'Dubajića streets.',
      "It's on the right-hand side of Majora Zorana Radosavljevića Street " +
        'when coming from the entrance of Batajnica toward the center.',
      'Next to Signature salon are the Fotografik print shop and Gradnja ' +
        'Dekor D.O.O. - so the salon is on the same side as Fotografik and ' +
        'Gradnja Dekor.',
      'The entrance is set back slightly, between the Fotografik print shop ' +
        'and Maksima Brankovića street.',
      'Once you step through the entrance, the salon is straight ahead - the ' +
        "salon's own entrance is straight on, with a small passage to the " +
        'right and the door on the left.',
      "Looking through the entrance, you'll see a large glass window - that's " +
        "the Signature salon's window.",
    ],
    nearbyHeading: 'Nearby',
    nearby: [
      'Anemona Batajnica (flower shop)',
      'Cafeteria Awassa',
      '"Pavlica" dental practice',
      'Mini Style Gallery (gift shop)',
    ],
    busHeading: 'Nearest Bus Stop',
    busStopName: 'Maksima Brankovića, Batajnica',
    busLines: [
      {
        number: '73',
        route: 'Novi Beograd (Blok 45) - Batajnica',
      },
      {
        number: '703',
        route:
          'Zemun (Kej oslobođenja) - Batajnica (train station) - Ugrinovci',
      },
      {
        number: '706',
        route: 'Zeleni venac - Batajnica',
      },
      {
        number: '706E',
        route: 'Zemun (Kej oslobođenja) - Batajnica Airport',
      },
      {
        number: '706N',
        route: 'Trg republike - Batajnica',
      },
    ],
    mapTitle: 'Signature Salon location',
    openInMaps: 'Open in Google Maps',
    loadMap: 'Click to load map',
  },
  faqSection: {
    heading: 'Frequently Asked Questions',
    subheading: 'Answers to what people most often ask us.',
    items: [
      {
        question:
          'Do I need to book an appointment in advance, or can ' +
          'I just walk in?',
        answer:
          "Booking is available, but not required. You're welcome to " +
          'walk in and wait for your turn.',
      },
      {
        question: 'How far in advance should I book?',
        answer:
          "We're flexible - you don't need to book far in advance. You " +
          'can even get an appointment for tomorrow.',
      },
      {
        question:
          'Can I cancel or reschedule my appointment, and how much notice ' +
          'do I need to give?',
        answer:
          'Yes, appointments can be cancelled or rescheduled - just let us ' +
          'know at least a day in advance.',
      },
      {
        question: 'Do you have parking?',
        answer:
          'There are usually a few parking spots right in front of the salon ' +
          "entrance. If those are taken, there's plenty of space nearby - " +
          "while unmarked, parking is generally fine as long as you don't " +
          "block an exit or park where it's explicitly prohibited.",
      },
      {
        question: 'Do you accept card payments, or only cash?',
        answer: 'At the moment, we only accept cash.',
      },
      {
        question: 'How do I get to you / which transport should I take?',
        answer: 'Transport details are listed in the "Find Us" section.',
      },
      {
        question: 'Where exactly is the salon, and how do I find it?',
        answer:
          'The salon is located at the intersection of Majora Zorana ' +
          'Radosavljevića, Maksima Brankovića, and Stevana Dubajića ' +
          'streets. For more details, see the "Find Us" section.',
      },
    ],
  },
};

export default messages;
