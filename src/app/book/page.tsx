import type { Metadata } from 'next';
import Script from 'next/script';
import { Waves } from '@/components/ui/Waves';
import { BookingWidget } from '@/components/booking-calendar/booking-widget';

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ptebtuning.com" },
    { "@type": "ListItem", position: 2, name: "Book a Tune", item: "https://ptebtuning.com/book" },
  ],
};

export const metadata: Metadata = {
  title: 'Book a Dyno Tune Melbourne — Schedule Online | PTEB',
  description: 'Book your custom ECU dyno tune with PTEB Tuning in Melbourne. Select a date and time online — we confirm within 24 hours. Specialist in BMW, Audi, VW, Mercedes and Porsche tuning.',
  alternates: { canonical: '/book' },
  openGraph: {
    title: 'Book a Dyno Tune Melbourne | PTEB Tuning',
    description: 'Schedule your custom ECU tuning appointment online. PTEB Tuning — Melbourne specialist for BMW, Audi, VW, Mercedes, Porsche. Free pre-health check included.',
    url: '/book',
  },
  other: {
    'link-preconnect-cal': '<link rel="preconnect" href="https://app.cal.com" />',
  },
};

export default function BookPage() {
  return (
    <div className="bg-[#0A0A0A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Start loading Cal.com embed script as early as possible */}
      <Script src="https://app.cal.com/embed/embed.js" strategy="afterInteractive" />
      <link rel="preconnect" href="https://app.cal.com" />

      {/* Hero with waves */}
      <div className="relative overflow-hidden pt-28 pb-12 border-b border-[#1a1a1a]">
        <Waves
          lineColor="rgba(252,34,45,0.6)"
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.008}
          waveAmpX={60}
          waveAmpY={30}
          xGap={16}
          yGap={22}
          aria-hidden="true"
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)' }} aria-hidden="true" />

        <div className="relative z-10 px-4 sm:px-6 max-w-4xl mx-auto">
          <p className="eyebrow mb-3">Schedule</p>
          <h1 className="text-4xl sm:text-5xl font-black uppercase text-white leading-none mb-2 font-heading">
            Book a Tune
          </h1>
          <p className="text-sm text-[#6B7280]">Pick a date and time — we&apos;ll confirm within 24 hours.</p>
        </div>
      </div>

      <div className="px-4 sm:px-6 py-12 max-w-4xl mx-auto">
        <BookingWidget />
      </div>
    </div>
  );
}
