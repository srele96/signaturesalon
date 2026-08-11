'use client';

import { useState, useEffect } from 'react';
import { useReducedMotion, motion, type Transition } from 'motion/react';
import Image, { type StaticImageData } from 'next/image';
import {
  type Messages,
  type Locale,
  type MessagePath,
  translate,
} from '@/messages';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ArrowRight } from 'lucide-react';
import { INSTAGRAM_URL, MOBILE_PHONE, MOBILE_PHONE_INTL } from '@/lib/constant';
import { createStructuredData } from '@/lib/create-structured-data';

import workBlackHairWaves from '@/assets/work-black-hair-waves.jpeg';
import workBraidsWithExtensions from '@/assets/work-braids-with-extensions.jpeg';
import workBrownHairWaves from '@/assets/work-brown-hair-waves.jpeg';
import workChestnutHairWaves from '@/assets/work-chestnut-hair-waves.jpeg';
import workStraightCutBlowDry from '@/assets/work-straight-cut-blow-dry.jpeg';
import jelena from '@/assets/jelena.webp';
import interiorSignatureWall from '@/assets/interior-signature-wall.jpeg';
import interiorFloralsClose from '@/assets/interior-florals-close.webp';
import interiorFloralsWide from '@/assets/interior-florals-wide.jpeg';

interface Props {
  translations: Messages;
  locale: Locale;
  url: string;
}

interface RevealConfig {
  initial: { opacity: number; y: number };
  whileInView: { opacity: number; y: number };
  viewport: { once: boolean; margin?: string };
  transition: Transition;
}

interface MotionConfig {
  reveal: RevealConfig;
  dashInitial: number;
}

const REVEAL_DEFAULT: RevealConfig = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px -10% 0px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const REVEAL_REDUCED: RevealConfig = {
  initial: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0 },
};

const DASH_DEFAULT = 1400;
const DASH_REDUCED = 0;

export function Home({ translations: t, locale, url }: Props) {
  const [motionConfig, setMotionConfig] = useState<MotionConfig>({
    reveal: REVEAL_DEFAULT,
    dashInitial: DASH_DEFAULT,
  });

  const { reveal, dashInitial } = motionConfig;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // DO NOT MODIFY / EXTEND THIS HOOK UNLESS ABSOLUTELY CRITICALLY NECESSARY.
    //
    // The sole purpose of this hook is to enable usage of motion library only
    // after hydration.
    // During SSR there is no information whether reduced motion is enabled or
    // not, hence it's null and always disabled.
    // Therefore a universal solution is to treat motion as disabled until after
    // hydration, when hook runs and picks up from the user whether prefered
    // motion reduce is enabled or disabled.
    const next: MotionConfig = prefersReducedMotion
      ? { reveal: REVEAL_REDUCED, dashInitial: DASH_REDUCED }
      : { reveal: REVEAL_DEFAULT, dashInitial: DASH_DEFAULT };

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMotionConfig(next);
  }, [prefersReducedMotion]);

  return (
    <div className="font-body text-ink antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            createStructuredData({ url, priceRange: getPriceRange(SERVICES) }),
          ),
        }}
      />
      {/* ===== NAV ===== */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm bg-paper/80 border-b border-ink/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-lg tracking-tight">
            {translate(t, 'header.brand')}{' '}
            <span className="text-gold">
              {translate(t, 'header.brandAccent')}
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-sm tracking-wide text-ink/70">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-ink transition-colors"
              >
                {translate(t, link.key)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher locale={locale} />
            <a
              href="#book"
              className="hidden sm:inline-flex text-sm px-4 py-2 rounded-full bg-ink text-paper hover:bg-wine transition-colors"
            >
              {translate(t, 'header.bookAction')}
            </a>

            {/* Hamburger - mobile only */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? t.header.menuClose : t.header.menuOpen}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
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
                {translate(t, link.key)}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 text-center text-sm px-4 py-3 rounded-full bg-ink text-paper hover:bg-wine transition-colors"
            >
              {translate(t, 'header.bookAction')}
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* ===== HERO ===== */}
        <section
          id="top"
          className="relative overflow-hidden bg-ink text-paper"
        >
          <div className="max-w-6xl mx-auto px-6 md:px-10 pt-40 pb-28 md:pt-52 md:pb-36 relative">
            <p className="text-gold/90 text-xs md:text-sm tracking-[0.3em] uppercase mb-6">
              {t.hero.eyebrow}
            </p>

            <h1 className="font-display font-light text-[13vw] md:text-[6.5vw] leading-[0.95] max-w-4xl">
              {`${t.hero.headingPrefix} `}
              <br className="hidden md:block" />
              {`${t.hero.headingYour} `}
              <em className="italic text-gold not-italic-fallback">
                {t.hero.headingSignature}
              </em>
              .
            </h1>

            <div className="mt-10 flex items-center gap-6">
              <svg
                id="sig-svg"
                viewBox="0 0 420 90"
                className="w-56 md:w-72 h-auto"
                fill="none"
                aria-hidden="true"
              >
                <motion.path
                  d="M10 60 C 40 10, 70 10, 85 55 C 95 80, 60 85, 55 60 C 50 30, 90 20, 120 45 C 140 62, 150 30, 175 30 C 210 30, 190 70, 220 65 C 250 60, 240 20, 270 25 C 300 30, 285 65, 310 60 C 335 55, 330 20, 355 30 C 375 38, 370 55, 400 45"
                  stroke="#B08A3E"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={1400}
                  strokeDashoffset={1400}
                  initial={{ strokeDashoffset: dashInitial }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{
                    duration: 2.2,
                    delay: 0.3,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                />
              </svg>
              <p className="text-paper/60 text-sm max-w-56">
                {t.hero.sigCaption}
              </p>
            </div>

            <div className="mt-14 flex flex-wrap gap-4">
              <a
                href="#book"
                className="px-6 py-3 rounded-full bg-gold text-ink text-sm font-medium hover:bg-paper transition-colors"
              >
                {t.hero.bookAction}
              </a>
              <a
                href="#services"
                className="px-6 py-3 rounded-full border border-paper/30 text-sm hover:border-gold hover:text-gold transition-colors"
              >
                {t.hero.seeServices}
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
          <motion.div
            {...reveal}
            className="flex items-end justify-between mb-14 flex-wrap gap-4"
          >
            <h2 className="font-display text-4xl md:text-5xl font-light">
              {t.services.heading}
            </h2>
            <p className="text-taupe text-sm max-w-xs">
              {t.services.subheading}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-16">
            {SERVICES.map((service) => {
              const item = t.services.items[service.key];
              return (
                <motion.div
                  key={service.key}
                  {...reveal}
                  className={`border-t border-ink/15 py-6 flex justify-between items-baseline ${
                    service.wide ? 'border-b md:col-span-2' : ''
                  }`}
                >
                  <div>
                    <h3 className="font-display text-xl">{item.name}</h3>
                    <p className="text-taupe text-sm mt-1">{item.detail}</p>
                  </div>
                  <span className="text-gold text-sm whitespace-nowrap ml-6">
                    {translate(t, 'services.price', {
                      amount: formatPrice(service.amount, service.currency),
                    })}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ===== WORK / GALLERY ===== */}
        <section id="work" className="bg-wine text-paper py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <motion.h2
              {...reveal}
              className="font-display text-4xl md:text-5xl font-light mb-3"
            >
              {t.work.heading}
            </motion.h2>
            <motion.p
              {...reveal}
              className="text-paper/60 text-sm mb-14 max-w-md"
            >
              {t.work.subheading}
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {WORK.map((item) => (
                <motion.div
                  key={item.key}
                  {...reveal}
                  className="rounded-lg overflow-hidden flex flex-col bg-paper/3 ring-1 ring-paper/10"
                >
                  <div className="relative aspect-3/4">
                    <Image
                      src={item.image}
                      alt={t.work.items[item.key]}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="px-4 py-3">
                    <span className="font-sans text-sm md:text-base tracking-wide text-paper/80">
                      {t.work.items[item.key]}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== STYLISTS ===== */}
        <section
          id="stylists"
          className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32"
        >
          <motion.h2
            {...reveal}
            className="font-display text-4xl md:text-5xl font-light mb-14 text-center"
          >
            {translate(t, 'stylists.heading')}
          </motion.h2>
          <div className="max-w-xs mx-auto">
            {STYLISTS.map((stylist) => (
              <motion.div key={stylist.key} {...reveal} className="text-center">
                <div className="aspect-square rounded-full bg-ink/8 mb-5 overflow-hidden flex items-center justify-center">
                  <Image
                    src={stylist.image}
                    alt={stylist.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display text-lg">{stylist.name}</h3>
                <p className="text-taupe text-sm">
                  {translate(t, stylist.key)}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== ABOUT / INTERIOR ===== */}
        <section id="about" className="bg-wine text-paper py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-14 md:gap-10 items-center">
              <motion.div {...reveal}>
                <h2 className="font-display text-4xl md:text-5xl font-light mb-8">
                  {t.about.heading}
                </h2>
                <div className="space-y-5 text-paper/70 text-base md:text-lg leading-relaxed">
                  <p>{t.about.paragraph1}</p>
                  <p>{t.about.paragraph2}</p>
                </div>
              </motion.div>
              <motion.div
                {...reveal}
                className="relative aspect-4/5 rounded-lg overflow-hidden"
              >
                <Image
                  src={interiorSignatureWall}
                  alt={t.about.wallImageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </div>

            <motion.div
              {...reveal}
              className="grid md:grid-cols-2 gap-4 md:gap-6 mt-14 md:mt-20"
            >
              <div className="relative aspect-3/4 rounded-lg overflow-hidden">
                <Image
                  src={interiorFloralsWide}
                  alt={t.about.floralsWideAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="relative aspect-3/4 rounded-lg overflow-hidden">
                <Image
                  src={interiorFloralsClose}
                  alt={t.about.floralsCloseAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="find-us"
          className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32"
        >
          <motion.div
            {...reveal}
            className="flex items-end justify-between mb-14 flex-wrap gap-4"
          >
            <h2 className="font-display text-4xl md:text-5xl font-light">
              {t.location.heading}
            </h2>
            <p className="text-taupe text-sm max-w-xs">
              {t.location.subheading}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            {/* Text content */}
            <motion.div {...reveal} className="space-y-8">
              <div className="space-y-4 text-ink/70 text-sm md:text-base leading-relaxed">
                {t.location.directions.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="border-t border-ink/15 pt-6">
                <h3 className="font-display text-lg mb-3">
                  {t.location.nearbyHeading}
                </h3>
                <ul className="text-taupe text-sm space-y-1.5">
                  {t.location.nearby.map((place, i) => (
                    <li key={i}>{place}</li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-ink/15 pt-6">
                <h3 className="font-display text-lg mb-1">
                  {t.location.busHeading}
                </h3>
                <a
                  href="https://www.planplus.rs/beograd/stajaliste/maksima-brankovica/3076"
                  rel="noopener noreferrer"
                  className="text-gold text-sm hover:underline"
                >
                  {t.location.busStopName}
                </a>
                <ul className="mt-3 text-taupe text-sm space-y-1.5">
                  {t.location.busLines.map((line) => (
                    <li key={line.number} className="flex gap-3">
                      <span className="text-ink font-medium shrink-0 w-12">
                        {line.number}
                      </span>
                      <span>{line.route}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div {...reveal} className="space-y-4">
              <div className="w-full aspect-square md:aspect-4/5 rounded-lg overflow-hidden ring-1 ring-ink/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d666.9036587482959!2d20.290000049084973!3d44.8981339508624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a67a48e3c5523%3A0x1c43e0950fa06162!2sSignature!5e0!3m2!1sen!2srs!4v1786403572686!5m2!1sen!2srs"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title={t.location.mapTitle}
                />
              </div>
              <a
                href="https://maps.app.goo.gl/oeiT45tU6cUaNtNVA"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gold hover:underline"
              >
                {t.location.openInMaps}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ===== BOOK / CTA ===== */}
        <section
          id="book"
          className="bg-ink text-paper relative overflow-hidden grain"
        >
          <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32 relative">
            <motion.div {...reveal} className="text-center mb-14">
              <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6">
                {t.book.headingPrefix}
                <span className="text-gold">{t.book.headingChair}</span>.
              </h2>
              <p className="text-paper/60 text-sm max-w-sm mx-auto">
                {t.book.subheading}
              </p>
            </motion.div>

            {/* Primary CTA: phone */}
            <motion.div
              {...reveal}
              className="max-w-xl mx-auto mb-10 text-center border border-gold/30 rounded-2xl p-10 bg-gold/5"
            >
              <p className="text-gold/90 text-xs tracking-[0.3em] uppercase mb-4">
                {t.book.fastestWay}
              </p>
              <a
                href={`tel:${MOBILE_PHONE_INTL}`}
                className="font-display text-4xl md:text-5xl font-light text-paper hover:text-gold transition-colors block mb-4"
              >
                063 742 7750
              </a>
              <p className="text-paper/50 text-sm mb-6">{t.book.phoneHours}</p>
              <a
                href={`tel:${MOBILE_PHONE_INTL}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gold text-ink text-sm font-medium hover:bg-paper transition-colors"
              >
                {t.book.callNow}
              </a>
            </motion.div>

            {/* Secondary: WhatsApp + Instagram */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                {...reveal}
                className="bg-paper/5 border border-paper/15 rounded-2xl p-8"
              >
                <h3 className="font-display text-2xl mb-3">
                  {t.book.whatsappHeading}
                </h3>
                <p className="text-paper/60 text-sm mb-6">
                  {t.book.whatsappBody}
                </p>
                <a
                  href={`https://wa.me/${MOBILE_PHONE}?text=${encodeURIComponent(t.book.whatsappMessage)}`}
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-ink text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  {t.book.whatsappCta}
                </a>
              </motion.div>

              <motion.div
                {...reveal}
                className="bg-paper/5 border border-paper/15 rounded-2xl p-8"
              >
                <h3 className="font-display text-2xl mb-3">
                  {t.book.instagramHeading}
                </h3>
                <p className="text-paper/60 text-sm mb-6">
                  {t.book.instagramBody}
                </p>
                <a
                  href={INSTAGRAM_URL}
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-linear-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] text-paper text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  @signaturebatajnica
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== VISIT / FOOTER ===== */}
      <footer
        id="visit"
        className="max-w-6xl mx-auto px-6 md:px-10 py-16 grid sm:grid-cols-3 gap-10 text-sm"
      >
        <div>
          <h3 className="font-display text-lg mb-3">
            {t.footer.addressHeading}
          </h3>
          <p className="text-taupe">
            Majora Zorana Radosavljevića 205
            <br />
            Beograd 11273
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg mb-3">{t.footer.hoursHeading}</h3>
          <p className="text-taupe">
            {t.footer.hoursLine}
            <br />
            {t.footer.closedSunday}
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg mb-3">
            {t.footer.contactHeading}
          </h3>
          <p className="text-taupe mb-2">
            <a
              href={`tel:${MOBILE_PHONE_INTL}`}
              className="hover:text-gold transition-colors"
            >
              063 742 7750
            </a>
          </p>
          <nav
            className="flex items-center gap-4 text-taupe"
            aria-label={t.footer.contactHeading}
          >
            <a
              href={`https://wa.me/${MOBILE_PHONE}`}
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              Instagram
            </a>
          </nav>
        </div>
      </footer>
      <div className="hairline max-w-6xl mx-auto" />
      <p className="text-center text-xs text-taupe py-6">
        {t.footer.copyright}
      </p>
    </div>
  );
}

const NAV_LINKS = [
  { href: '#services', key: 'header.nav.services' },
  { href: '#work', key: 'header.nav.work' },
  { href: '#stylists', key: 'header.nav.stylists' },
  { href: '#about', key: 'header.nav.about' },
  { href: '#find-us', key: 'header.nav.findUs' },
  { href: '#visit', key: 'header.nav.visit' },
] as const satisfies ReadonlyArray<{
  href: string;
  key: MessagePath;
}>;

function formatPrice(amount: number, currency: string): string {
  return `${amount.toLocaleString('sr-RS')} ${currency}`;
}

function getPriceRange(services: typeof SERVICES): string {
  const amounts = services.map((s) => s.amount);
  const currency = services[0].currency;
  const min = Math.min(...amounts);
  const max = Math.max(...amounts);
  return `${min}-${max} ${currency}`;
}

const SERVICES = [
  { key: 'haircut', amount: 1000, currency: 'RSD', wide: false },
  { key: 'styling', amount: 1000, currency: 'RSD', wide: false },
  { key: 'color', amount: 2200, currency: 'RSD', wide: false },
  { key: 'balayage', amount: 3500, currency: 'RSD', wide: false },
  { key: 'bondRepair', amount: 1000, currency: 'RSD', wide: false },
  { key: 'mensGrooming', amount: 400, currency: 'RSD', wide: true },
] as const satisfies ReadonlyArray<{
  key: keyof Messages['services']['items'];
  amount: number;
  currency: string;
  wide: boolean;
}>;

const WORK = [
  { key: 'braidsWithExtensions', image: workBraidsWithExtensions },
  { key: 'straightCutBlowDry', image: workStraightCutBlowDry },
  { key: 'brownHairWaves', image: workBrownHairWaves },
  { key: 'blackHairWaves', image: workBlackHairWaves },
  { key: 'chestnutHairWaves', image: workChestnutHairWaves },
] satisfies ReadonlyArray<{
  key: keyof Messages['work']['items'];
  image: StaticImageData;
}>;

const STYLISTS = [
  {
    key: 'stylists.items.jelena.role',
    name: 'Jelena',
    image: jelena,
  },
] as const satisfies ReadonlyArray<{
  key: MessagePath;
  name: string;
  image: StaticImageData;
}>;
