import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { StickyCta } from '@/components/layout/sticky-cta';
import { CookieBanner } from '@/components/layout/cookie-banner';
import { site, baseUrl } from '@/data/site';
import { LocalBusinessJsonLd } from './json-ld';
import { OverflowDebug } from '@/components/layout/overflow-debug';
import { ScrollLockX } from '@/components/layout/scroll-lock-x';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${site.name} — ${site.tagline} | ${site.region}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: ['клининг', 'уборка', 'Москва', 'Московская область', 'уборка квартир', 'уборка офисов', 'мойка окон', 'клининговая компания'],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: baseUrl,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: baseUrl + '/' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={montserrat.variable} suppressHydrationWarning>
      <head>
        {/* Security hardening: referrer policy */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased m-0 p-0 w-full max-w-full min-w-0 overflow-x-clip">
        <ScrollLockX />
        <OverflowDebug />
        <LocalBusinessJsonLd />
        <div className="w-full min-w-0 max-w-full overflow-visible flex flex-col flex-1">
        <Header />
        <main className="flex-1 flex flex-col min-w-0 overflow-x-clip pb-20 sm:pb-0">{children}</main>
        <div className="mt-auto min-w-0 overflow-x-clip bg-slate-50">
          <Footer />
        </div>
        <StickyCta />
        <CookieBanner />
        </div>
      </body>
    </html>
  );
}
