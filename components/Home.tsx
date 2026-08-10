'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, inView } from 'motion';

import Image, { type StaticImageData } from 'next/image';

import workBlackHairWaves from '@/assets/work-black-hair-waves.jpeg';
import workBraidsWithExtensions from '@/assets/work-braids-with-extensions.jpeg';
import workBrownHairWaves from '@/assets/work-brown-hair-waves.jpeg';
import workChestnutHairWaves from '@/assets/work-chestnut-hair-waves.jpeg';
import workStraightCutBlowDry from '@/assets/work-straight-cut-blow-dry.jpeg';
import jelena from '@/assets/jelena.webp';
import interiorSignatureWall from '@/assets/interior-signature-wall.jpeg';
import interiorFloralsClose from '@/assets/interior-florals-close.jpeg';
import interiorFloralsWide from '@/assets/interior-florals-wide.jpeg';

import type { Messages } from '@/messages';

interface Props {
  t: Messages;
}

export function Home({ t }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const sigPathRef = useRef<SVGPathElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReduced) return;

    if (sigPathRef.current) {
      animate(
        sigPathRef.current,
        { strokeDashoffset: [1400, 0] },
        { duration: 2.2, delay: 0.3, ease: [0.65, 0, 0.35, 1] },
      );
    }

    if (!rootRef.current) return;

    const targets = rootRef.current.querySelectorAll('.reveal');
    if (targets.length === 0) return;

    let isActive = true;

    const stop = inView(
      targets,
      (element) => {
        if (!isActive) return;
        animate(
          element,
          { opacity: [0, 1], y: [24, 0] },
          { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        );
      },
      { margin: '0px 0px -10% 0px' },
    );

    return () => {
      isActive = false;
      stop();
    };
  }, []);

  return (
    <div ref={rootRef} className="font-body text-ink antialiased">
      {/* ===== NAV ===== */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm bg-paper/80 border-b border-ink/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-lg tracking-tight">
            Signature <span className="text-gold">Salon</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide text-ink/70">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#book"
              className="hidden sm:inline-flex text-sm px-4 py-2 rounded-full bg-ink text-paper hover:bg-wine transition-colors"
            >
              Book a chair
            </a>

            {/* Hamburger - mobile only */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
            >
              <span
                className={`absolute h-px w-6 bg-ink transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`absolute h-px w-6 bg-ink transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute h-px w-6 bg-ink transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out bg-paper border-t border-ink/10 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col px-6 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-3 text-base text-ink/80 hover:text-ink transition-colors border-b border-ink/5 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 text-center text-sm px-4 py-3 rounded-full bg-ink text-paper hover:bg-wine transition-colors"
            >
              Book a chair
            </a>
          </nav>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section
        id="top"
        className="relative overflow-hidden bg-ink text-paper grain"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 pt-40 pb-28 md:pt-52 md:pb-36 relative">
          <p className="text-gold/90 text-xs md:text-sm tracking-[0.3em] uppercase mb-6">
            Batajnica, Belgrade - by appointment
          </p>

          <h1 className="font-display font-light text-[13vw] md:text-[6.5vw] leading-[0.95] max-w-4xl">
            {'A cut that carries '}
            <br className="hidden md:block" />
            {'your '}
            <em className="italic text-gold not-italic-fallback">signature</em>.
          </h1>

          <div className="mt-10 flex items-center gap-6">
            <svg
              id="sig-svg"
              viewBox="0 0 420 90"
              className="w-56 md:w-72 h-auto"
              fill="none"
              aria-hidden="true"
            >
              <path
                ref={sigPathRef}
                d="M10 60 C 40 10, 70 10, 85 55 C 95 80, 60 85, 55 60 C 50 30, 90 20, 120 45 C 140 62, 150 30, 175 30 C 210 30, 190 70, 220 65 C 250 60, 240 20, 270 25 C 300 30, 285 65, 310 60 C 335 55, 330 20, 355 30 C 375 38, 370 55, 400 45"
                stroke="#B08A3E"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={1400}
                strokeDashoffset={1400}
              />
            </svg>
            <p className="text-paper/60 text-sm max-w-56">
              Every appointment ends the same way - with a cut that&rsquo;s
              unmistakably yours.
            </p>
          </div>

          <div className="mt-14 flex flex-wrap gap-4">
            <a
              href="#book"
              className="px-6 py-3 rounded-full bg-gold text-ink text-sm font-medium hover:bg-paper transition-colors"
            >
              Book a chair
            </a>
            <a
              href="#services"
              className="px-6 py-3 rounded-full border border-paper/30 text-sm hover:border-gold hover:text-gold transition-colors"
            >
              See services
            </a>
          </div>
        </div>
        <div className="hairline absolute bottom-0 inset-x-0" />
      </section>

      {/* ===== SERVICES ===== */}
      <section
        id="services"
        className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32"
      >
        <div className="reveal flex items-end justify-between mb-14 flex-wrap gap-4">
          <h2 className="font-display text-4xl md:text-5xl font-light">
            Services
          </h2>
          <p className="text-taupe text-sm max-w-xs">
            Priced per consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16">
          {SERVICES.map((service) => (
            <div
              key={service.name}
              className={`reveal border-t border-ink/15 py-6 flex justify-between items-baseline ${service.wide ? 'border-b md:col-span-2' : ''}`}
            >
              <div>
                <h3 className="font-display text-xl">{service.name}</h3>
                <p className="text-taupe text-sm mt-1">{service.detail}</p>
              </div>
              <span className="text-gold text-sm whitespace-nowrap ml-6">
                {service.price}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WORK / GALLERY ===== */}
      <section id="work" className="bg-wine text-paper py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="reveal font-display text-4xl md:text-5xl font-light mb-3">
            Recent work
          </h2>
          <p className="reveal text-paper/60 text-sm mb-14 max-w-md">
            A look at the work coming out of the chair this season.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {WORK.map((item) => (
              <div
                key={item.label}
                className={`reveal rounded-lg overflow-hidden flex flex-col bg-paper/3 ring-1 ring-paper/10`}
              >
                {/* image zone - nothing overlaid on it */}
                <div className="relative aspect-3/4">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>

                {/* caption zone - its own space, clear of the photo */}
                <div className="px-4 py-3">
                  <span className="font-sans text-sm md:text-base tracking-wide text-paper/80">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STYLISTS ===== */}
      <section
        id="stylists"
        className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32"
      >
        <h2 className="reveal font-display text-4xl md:text-5xl font-light mb-14 text-center">
          Behind the chair
        </h2>
        <div className="max-w-xs mx-auto">
          {STYLISTS.map((stylist) => (
            <div key={stylist.name} className="reveal text-center">
              <div className="aspect-square rounded-full bg-ink/8 mb-5 overflow-hidden flex items-center justify-center">
                {stylist.image ? (
                  <Image
                    src={stylist.image}
                    alt={stylist.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-script text-3xl text-gold">
                    {stylist.name.charAt(0)}
                  </span>
                )}
              </div>
              <h3 className="font-display text-lg">{stylist.name}</h3>
              <p className="text-taupe text-sm">{stylist.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ABOUT / INTERIOR ===== */}
      <section id="about" className="bg-wine text-paper py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-14 md:gap-10 items-center">
            <div className="reveal">
              <h2 className="font-display text-4xl md:text-5xl font-light mb-8">
                Built one detail at a time
              </h2>
              <div className="space-y-5 text-paper/70 text-base md:text-lg leading-relaxed">
                <p>
                  Signature Salon opened in Batajnica with one idea: a chair
                  should feel considered, not rushed. Marble floors, warm light,
                  and fresh flowers greet every appointment - not for show, but
                  because the space you sit in shapes the cut you leave with.
                </p>
                <p>
                  Every visit starts with a conversation, not a template.
                  Whether it&rsquo;s a precision blow-dry or a full color
                  correction, the same care goes into the smallest details as
                  the biggest changes.
                </p>
              </div>
            </div>
            <div className="reveal relative aspect-4/5 rounded-lg overflow-hidden">
              <Image
                src={interiorSignatureWall}
                alt="Signature Salon wall lettering and entrance"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="reveal grid md:grid-cols-2 gap-4 md:gap-6 mt-14 md:mt-20">
            <div className="relative aspect-3/4 rounded-lg overflow-hidden">
              <Image
                src={interiorFloralsWide}
                alt="Fresh floral arrangement at Signature Salon entrance"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
            <div className="relative aspect-3/4 rounded-lg overflow-hidden">
              <Image
                src={interiorFloralsClose}
                alt="Fresh floral detail at Signature Salon"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== BOOK / CTA ===== */}
      <section
        id="book"
        className="bg-ink text-paper relative overflow-hidden grain"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32 relative">
          <div className="reveal text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6">
              Reserve your <span className="text-gold">chair</span>.
            </h2>
            <p className="text-paper/60 text-sm max-w-sm mx-auto">
              Tell us what you&rsquo;re after and when suits you - we&rsquo;ll
              confirm within the day.
            </p>
          </div>

          {/* Primary CTA: phone */}
          <div className="reveal max-w-xl mx-auto mb-10 text-center border border-gold/30 rounded-2xl p-10 bg-gold/5">
            <p className="text-gold/90 text-xs tracking-[0.3em] uppercase mb-4">
              Fastest way to book
            </p>
            <a
              href="tel:+381637427750"
              className="font-display text-4xl md:text-5xl font-light text-paper hover:text-gold transition-colors block mb-4"
            >
              063 742 7750
            </a>
            <p className="text-paper/50 text-sm mb-6">
              Mon–Sat, 11:00–20:00 - call and we&rsquo;ll find you a chair.
            </p>
            <a
              href="tel:+381637427750"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gold text-ink text-sm font-medium hover:bg-paper transition-colors"
            >
              Call now
            </a>
          </div>

          {/* Secondary: WhatsApp + Instagram */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="reveal bg-paper/5 border border-paper/15 rounded-2xl p-8">
              <h3 className="font-display text-2xl mb-3">Book on WhatsApp</h3>
              <p className="text-paper/60 text-sm mb-6">
                Send us a message with your preferred service and date -
                we&rsquo;ll reply to confirm your slot.
              </p>
              <a
                href="https://wa.me/381637427750?text=Hi!%20I%20would%20like%20to%20book%20an%20appointment%20at%20Signature%20Salon."
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-ink text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Message us on WhatsApp
              </a>
            </div>

            <div className="reveal bg-paper/5 border border-paper/15 rounded-2xl p-8">
              <h3 className="font-display text-2xl mb-3">
                Follow on Instagram
              </h3>
              <p className="text-paper/60 text-sm mb-6">
                See our latest work, behind-the-chair moments, and booking
                openings.
              </p>
              <a
                href="https://instagram.com/signaturebatajnica"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-linear-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] text-paper text-sm font-medium hover:opacity-90 transition-opacity"
              >
                @signaturebatajnica
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VISIT / FOOTER ===== */}
      <footer
        id="visit"
        className="max-w-6xl mx-auto px-6 md:px-10 py-16 grid sm:grid-cols-3 gap-10 text-sm"
      >
        <div>
          <h3 className="font-display text-lg mb-3">Signature Salon</h3>
          <p className="text-taupe">
            Majora Zorana Radosavljevića 205
            <br />
            Beograd 11273
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg mb-3">Hours</h3>
          <p className="text-taupe">
            Mon–Sat, 11:00–20:00
            <br />
            Closed Sunday
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg mb-3">Contact</h3>
          <p className="text-taupe mb-2">
            <a
              href="tel:+381637427750"
              className="hover:text-gold transition-colors"
            >
              063 742 7750
            </a>
          </p>
          <div className="flex items-center gap-4 text-taupe">
            <a
              href="https://wa.me/381637427750"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com/signaturebatajnica"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
      <div className="hairline max-w-6xl mx-auto" />
      <p className="text-center text-xs text-taupe py-6">
        © 2026 Signature Salon. All rights reserved.
      </p>
    </div>
  );
}

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#stylists', label: 'Stylists' },
  { href: '#about', label: 'About' },
  { href: '#visit', label: 'Visit' },
] as const;

const SERVICES = [
  {
    name: 'Haircut & Blow-Dry',
    detail:
      'Consultation, wash, precision cut, and finishing blow-dry - short to long hair.',
    price: 'from 1.000 din',
    wide: false,
  },
  {
    name: 'Styling & Occasion Hair',
    detail: 'Iron styling, updos, and braids for events and special occasions.',
    price: 'from 1.000 din',
    wide: false,
  },
  {
    name: 'Color - Revlon Professional',
    detail:
      'Full color with Revlon Color Sublime, toning, or gloss - priced by length.',
    price: 'from 2.200 din',
    wide: false,
  },
  {
    name: 'Balayage & Lightening',
    detail: 'Bleach, balayage, ombre, or color correction with Magnet Blondes.',
    price: 'from 3.500 din',
    wide: false,
  },
  {
    name: 'Bond Repair & Care Rituals',
    detail:
      'Bond-repair, UniqOne, and Equave hydrating treatments for damaged hair.',
    price: 'from 1.000 din',
    wide: false,
  },
  {
    name: "Men's Grooming",
    detail: 'Cut, clipper work, beard shape, and wash & style finish.',
    price: 'from 400 din',
    wide: true,
  },
] as const satisfies ReadonlyArray<{
  name: string;
  detail: string;
  price: string;
  wide?: boolean;
}>;

const WORK = [
  {
    label: 'Braids with extensions',
    image: workBraidsWithExtensions,
  },
  {
    label: 'Straight cut/blow-dry',
    image: workStraightCutBlowDry,
  },
  {
    label: 'Brown hair waves',
    image: workBrownHairWaves,
  },
  {
    label: 'Black hair waves',
    image: workBlackHairWaves,
  },
  {
    label: 'Chestnut hair waves',
    image: workChestnutHairWaves,
  },
] satisfies ReadonlyArray<{
  label: string;
  image: StaticImageData;
}>;

const STYLISTS = [
  {
    name: 'Jelena',
    role: 'Cut, color & styling - every service under one chair.',
    image: jelena,
  },
] as const;
