import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Phone, CheckCircle, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "ECU Tuning Melbourne — Custom Dyno Tune Specialist | PTEB",
  description: "Melbourne's #1 specialist for custom ECU and TCU remapping. PTEB Tuning delivers dyno-logged, road-verified results for BMW, Audi, VW, Mercedes and Porsche. 500+ vehicles tuned. Free pre-approval — call 0422 300 859.",
  alternates: { canonical: "/melbourne-tuning" },
  openGraph: {
    title: "ECU Tuning Melbourne — Custom Dyno Tune | PTEB Specialist",
    description: "Melbourne's specialist ECU tuning workshop. Custom dyno maps for BMW, Audi, VW, Mercedes, Porsche — all results dyno-logged on Dyno Innovations equipment and road-verified. 500+ cars tuned.",
    url: "/melbourne-tuning",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://ptebtuning.com" },
        { "@type": "ListItem", position: 2, name: "ECU Tuning Melbourne", item: "https://ptebtuning.com/melbourne-tuning" },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://ptebtuning.com/#business",
      name: "PTEB Tuning",
      description: "Melbourne's specialist ECU and TCU remapping workshop for European performance vehicles. Custom dyno-mapped tunes for Audi, BMW, Volkswagen, Mercedes-AMG and Porsche — dyno-logged and road-verified.",
      url: "https://ptebtuning.com",
      telephone: "+61422300859",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Melbourne",
        addressRegion: "VIC",
        addressCountry: "AU",
      },
      geo: { "@type": "GeoCoordinates", latitude: -37.7591, longitude: 144.8299 },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "47", bestRating: "5" },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "17:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "14:00" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where is PTEB Tuning located in Melbourne?",
          acceptedAnswer: { "@type": "Answer", text: "PTEB Tuning is based in Melbourne, Victoria. Contact us on 0422 300 859 or via WhatsApp to arrange a booking and receive workshop directions." },
        },
        {
          "@type": "Question",
          name: "What ECU tuning services does PTEB offer in Melbourne?",
          acceptedAnswer: { "@type": "Answer", text: "PTEB Tuning Melbourne offers: custom dyno tuning on a Dyno Innovations rolling road, ECU and TCU remapping, flex fuel (E85) calibration, rolling anti-lag, launch control, boost-by-gear mapping, engine rebuilding, and performance parts installation. All results are dyno-logged and road-verified." },
        },
        {
          "@type": "Question",
          name: "How do I book ECU tuning in Melbourne?",
          acceptedAnswer: { "@type": "Answer", text: "Contact PTEB Tuning via phone (0422 300 859), WhatsApp, or the enquiry form. Tell us your vehicle, modifications, fuel type, and goals. We'll pre-approve your vehicle and confirm exactly what your tune will deliver before any commitment." },
        },
        {
          "@type": "Question",
          name: "Which European cars does PTEB tune in Melbourne?",
          acceptedAnswer: { "@type": "Answer", text: "PTEB Tuning Melbourne specialises in Audi (EA888, DAZA, EA825, EA839), BMW (B48, B58, N55, S55, S58), Volkswagen (EA888 Golf GTI, Golf R), Mercedes-AMG (M133, M177, M157), and Porsche (9A1, 9A2). Contact us to confirm your specific platform." },
        },
        {
          "@type": "Question",
          name: "How long does a dyno tune take in Melbourne?",
          acceptedAnswer: { "@type": "Answer", text: "A full custom dyno tune at PTEB Melbourne takes 4–8 hours. This includes a pre-health inspection, baseline dyno pull, iterative ECU calibration, repeatability verification, and road validation. You receive full data logs and a dyno graph showing your before and after power figures." },
        },
        {
          "@type": "Question",
          name: "Does PTEB offer Stage 1 and Stage 2 tunes in Melbourne?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. PTEB Melbourne offers Stage 1 (software only), Stage 2 (downpipe, intercooler, intake), and Stage 2+ (turbo/fuelling upgrades) calibrations. Every tune is built specifically for your vehicle's modification level, fuel type, and power goals — never an off-the-shelf map." },
        },
      ],
    },
  ],
};

const RESULTS = [
  { car: "BMW M4 F82", stage: "Stage 1", power: "334 kW", gain: "+74 kW" },
  { car: "Audi RS3 DAZA", stage: "Stage 2", power: "318 kW", gain: "+68 kW" },
  { car: "VW Golf R MK7", stage: "Stage 2", power: "280 kW", gain: "+80 kW" },
  { car: "BMW M4 S55", stage: "Stage 1", power: "360+ kW", gain: "Custom map" },
];

export default function MelbourneTuningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="pt-28 pb-20 md:pt-36 border-b border-[#1E1E1E]" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs mb-8" style={{ color: '#6B7280' }} aria-label="Breadcrumb">
            <Link href="/" style={{ color: '#6B7280' }}>Home</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span style={{ color: '#9CA3AF' }}>ECU Tuning Melbourne</span>
          </nav>

          <p className="eyebrow mb-5">Melbourne, Victoria</p>
          <h1 className="font-black uppercase leading-none mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#ffffff' }}>
            ECU Tuning<br />
            <span style={{ color: '#FC222D' }}>Melbourne</span>
          </h1>
          <p className="text-lg leading-relaxed mb-4 max-w-2xl" style={{ color: '#9CA3AF' }}>
            PTEB Tuning is Melbourne&apos;s specialist for custom ECU and TCU remapping on European performance vehicles. Every tune is built on our in-house Dyno Innovations rolling road, calibrated with live data, and road-verified before the car leaves the workshop.
          </p>
          <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: '#6B7280' }}>
            We specialise in Audi, BMW, Volkswagen, Mercedes-AMG and Porsche. Every result is dyno-logged and road-verified — documented with full data logs.
          </p>

          {/* Stars */}
          <div className="flex items-center gap-3 mb-10">
            <div className="flex gap-0.5" aria-label="5 out of 5 stars">
              {[1,2,3,4,5].map(s => (
                <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#FBBC05" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span className="text-white font-bold text-sm">5.0</span>
            <span className="text-sm" style={{ color: '#6B7280' }}>· 47 Google reviews · Melbourne</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#FC222D] text-white text-sm font-bold tracking-widest uppercase hover:bg-[#CC1B25] transition-colors">
              Book a Tune <ChevronRight size={14} aria-hidden="true" />
            </Link>
            <a href="tel:+61422300859" className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white text-sm font-bold tracking-widest uppercase hover:border-white/40 transition-colors">
              <Phone size={14} aria-hidden="true" /> 0422 300 859
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 border-b border-[#1E1E1E]" style={{ backgroundColor: '#111' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="eyebrow mb-4">Services</p>
          <h2 className="text-3xl font-black uppercase mb-10" style={{ color: '#ffffff' }}>
            ECU tuning services in Melbourne
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "Custom Dyno Tuning", desc: "Full ECU calibration on our Dyno Innovations rolling road. Includes pre-health check, baseline pull, iterative mapping, repeatability verification, and road validation. Full logs provided." },
              { title: "TCU / DSG Remapping", desc: "Gearbox calibration for DSG, DCT, and automatic transmissions. Faster shifts, improved launch feel, and torque limit lifting to match your ECU tune." },
              { title: "Flex Fuel (E85) Tuning", desc: "True flex fuel calibration supporting E85 ethanol or any blend ratio. Requires ethanol sensor and supporting hardware." },
              { title: "Engine Rebuilding", desc: "Performance engine builds for European vehicles. Stage 3+ builds including turbo upgrades, high-flow injectors, fuel pump upgrades, and supporting hardware." },
            ].map(({ title, desc }) => (
              <div key={title} className="p-6 border border-[#1E1E1E]" style={{ backgroundColor: '#0a0a0a' }}>
                <h3 className="text-white font-bold mb-3">{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dyno results */}
      <section className="py-20 border-b border-[#1E1E1E]" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="eyebrow mb-4">Proven results</p>
          <h2 className="text-3xl font-black uppercase mb-3" style={{ color: '#ffffff' }}>
            Real dyno numbers from Melbourne
          </h2>
          <p className="text-sm mb-10 max-w-xl" style={{ color: '#9CA3AF' }}>
            Every result is dyno-logged on Dyno Innovations equipment and road-verified. No estimated figures.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RESULTS.map(({ car, stage, power, gain }) => (
              <div key={car} className="p-5 border border-[#1E1E1E]" style={{ backgroundColor: '#111' }}>
                <p className="text-xs font-bold text-[#FC222D] mb-1">{stage}</p>
                <p className="text-sm font-bold text-white mb-3">{car}</p>
                <p className="text-2xl font-black font-heading text-white">{power}</p>
                <p className="text-xs font-bold text-[#FC222D]">{gain}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/our-work" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FC222D] hover:opacity-80 transition-opacity">
              View all dyno results <ChevronRight size={12} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-b border-[#1E1E1E]" style={{ backgroundColor: '#111' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="text-2xl font-black uppercase mb-8" style={{ color: '#ffffff' }}>
            ECU tuning Melbourne — common questions
          </h2>
          <div className="space-y-6">
            {[
              { q: "Where is PTEB Tuning located in Melbourne?", a: "PTEB Tuning is based in Melbourne, Victoria. Contact us on 0422 300 859 or via WhatsApp to arrange a booking and receive workshop directions." },
              { q: "How do I book a tune at PTEB?", a: "Contact PTEB via phone (0422 300 859), WhatsApp, or the enquiry form. Tell us your vehicle, modifications, fuel type, and goals — we'll pre-approve your car and confirm exactly what your tune will deliver before you commit." },
              { q: "What cars does PTEB tune in Melbourne?", a: "PTEB specialises in European turbocharged vehicles: Audi (EA888, DAZA, EA825), BMW (B48, B58, S55, S58), Volkswagen (Golf GTI, Golf R), Mercedes-AMG (A45, CLA45), and Porsche (911, Macan, Cayenne). Contact us to confirm your specific platform." },
              { q: "How long does a dyno tune take?", a: "A full custom dyno tune at PTEB takes 4–8 hours. This covers pre-health inspection, baseline pull, calibration, repeatability verification, and road validation. You receive a dyno graph and full data logs." },
              { q: "Does PTEB offer Stage 1 and Stage 2 tunes?", a: "Yes — Stage 1 (software only), Stage 2 (downpipe, intercooler, intake required), and Stage 2+ (turbo/fuelling upgrades). Every tune is built for your specific vehicle, not an off-the-shelf map." },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-[#1E1E1E] pb-6">
                <h3 className="text-white font-bold mb-2">{q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="py-16 text-center" style={{ backgroundColor: '#FC222D' }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-black uppercase mb-4" style={{ color: '#ffffff' }}>Ready to tune your car in Melbourne?</h2>
          <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>Free pre-approval check. Tell us your platform and we'll outline exactly what your tune will deliver.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-opacity" style={{ backgroundColor: '#000', color: '#fff' }}>
              Book a Tune <ChevronRight size={14} aria-hidden="true" />
            </Link>
            <a href="tel:+61422300859" className="inline-flex items-center gap-2 px-10 py-4 border border-white/40 text-white text-sm font-bold tracking-widest uppercase hover:bg-white/10 transition-all">
              <Phone size={14} aria-hidden="true" /> 0422 300 859
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
