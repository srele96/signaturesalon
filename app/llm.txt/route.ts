import { NextResponse } from 'next/server';
import messages, { defaultLocale } from '@/messages';
import { MOBILE_PHONE_INTL, MOBILE_PHONE, INSTAGRAM_URL } from '@/lib/constant';

export const dynamic = 'force-static';

export async function GET() {
  const t = messages[defaultLocale];

  const services = [
    t.services.items.haircut.name,
    t.services.items.styling.name,
    t.services.items.color.name,
    t.services.items.balayage.name,
    t.services.items.bondRepair.name,
    t.services.items.mensGrooming.name,
  ];

  const content = `# ${t.header.brand} ${t.header.brandAccent}

> ${t.metadata.description}

## Key Information

- Address: Majora Zorana Radosavljevića 205, Beograd 11273
- Phone: ${MOBILE_PHONE_INTL}
- Hours: ${t.footer.hoursLine}
- Instagram: ${INSTAGRAM_URL}

## Services

${services.map((s) => `- ${s}`).join('\n')}

## Booking

- Phone: ${MOBILE_PHONE_INTL}
- WhatsApp: https://wa.me/${MOBILE_PHONE}
`;

  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
