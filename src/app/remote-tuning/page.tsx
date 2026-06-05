import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MapPin, Clock, CheckCircle, Phone } from "lucide-react";
import { LOCATIONS } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Remote ECU Tuning Worldwide — PTEB Warport | $499",
  description: "Get a professional custom ECU tune delivered anywhere in the world. The PTEB Warport OBD2 device ships internationally — plug in, connect, and our Melbourne tuner calibrates your engine remotely. $499 AUD. Free compatibility check.",
  alternates: { canonical: "/remote-tuning" },
  openGraph: {
    title: "Remote ECU Tuning Worldwide | PTEB Warport $499",
    description: "Custom ECU tuning delivered anywhere in the world. No workshop visit — plug the Warport into your OBD port and our tuner calibrates remotely. BMW, Audi, VW, Mercedes, Porsche.",
    url: "/remote-tuning",
    images: [{ url: "/ptebtunedby.jpg", width: 1200, height: 630, alt: "PTEB Warport — Remote ECU Tuning Worldwide" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://ptebtuning.com/remote-tuning#webpage",
      "url": "https://ptebtuning.com/remote-tuning",
      "name": "Remote ECU Tuning Worldwide — PTEB Warport | $499",
      "description": "Get a professional custom ECU tune delivered anywhere in the world. The PTEB Warport OBD2 device ships internationally — plug in, connect, and our Melbourne tuner calibrates your engine remotely.",
      "isPartOf": { "@id": "https://ptebtuning.com/#website" },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3"]
      }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://ptebtuning.com" },
        { "@type": "ListItem", position: 2, name: "Remote Tuning", item: "https://ptebtuning.com/remote-tuning" },
      ],
    },
    {
      "@type": "Service",
      name: "PTEB Warport Remote ECU Tuning",
      description: "Remote OBD2 ECU tuning service available worldwide. The PTEB Warport device delivers a fully custom engine calibration to any location without a workshop visit.",
      provider: {
        "@type": "AutomotiveBusiness",
        name: "PTEB Tuning",
        url: "https://ptebtuning.com",
        telephone: "+61422300859",
        address: { "@type": "PostalAddress", addressLocality: "Melbourne", addressRegion: "VIC", addressCountry: "AU" },
      },
      areaServed: [
        { "@type": "Country", name: "Australia" },
        { "@type": "Country", name: "New Zealand" },
        ...LOCATIONS.map(l => ({ "@type": l.country === "NZ" ? "Country" : "State", name: l.state })),
      ],
      offers: {
        "@type": "Offer",
        price: "499.00",
        priceCurrency: "AUD",
        availability: "https://schema.org/InStock",
        description: "PTEB Warport OBD2 remote tuning device including first calibration file",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is remote ECU tuning?",
          acceptedAnswer: { "@type": "Answer", text: "Remote ECU tuning is the process of recalibrating your car's Engine Control Unit (ECU) without visiting a workshop. Using the PTEB Warport OBD2 device, your vehicle's ECU data is read via our software and sent to PTEB's tuner in Melbourne. A fully custom calibration is built and delivered back to your car — all without you leaving home." },
        },
        {
          "@type": "Question",
          name: "How much does remote ECU tuning cost in Australia?",
          acceptedAnswer: { "@type": "Answer", text: "The PTEB Warport device costs $499 AUD. The custom tune file is priced separately based on your platform and required features. This compares to $800–$2,500+ for a workshop dyno tune, making Warport significantly better value for most platforms." },
        },
        {
          "@type": "Question",
          name: "Do you offer remote ECU tuning in New Zealand?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. PTEB ships the Warport device internationally to New Zealand, with delivery in 10–14 business days. NZ customers access the same full custom calibration as Australian clients. Contact PTEB before ordering to confirm compatibility for NZ-spec vehicles." },
        },
        {
          "@type": "Question",
          name: "Which cars support remote ECU tuning via PTEB Warport?",
          acceptedAnswer: { "@type": "Answer", text: "PTEB Warport supports most modern European turbocharged platforms: Audi (EA888, DAZA, EA825), BMW (B48, B58, N55, S55, S58), Volkswagen Golf R/GTI (EA888), Mercedes-AMG (M133, M177), and Porsche (9A2). Contact PTEB for a free compatibility check before purchasing." },
        },
        {
          "@type": "Question",
          name: "Is remote ECU tuning as good as a dyno tune?",
          acceptedAnswer: { "@type": "Answer", text: "For supported platforms, PTEB's remote tuning delivers calibration quality comparable to an in-person dyno session. PTEB uses live data logging to refine the tune in real-world conditions — boost, fuelling, ignition timing, and thermal management are all adjusted based on your car's actual logs, not a generic map." },
        },
      ],
    },
  ],
};

const AU_LOCATIONS = LOCATIONS.filter(l => l.country === "AU");
const NZ_LOCATIONS = LOCATIONS.filter(l => l.country === "NZ");

export default function RemoteTuningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 border-b border-[#1E1E1E]" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs mb-8" style={{ color: '#6B7280' }} aria-label="Breadcrumb">
            <Link href="/" className="hover:opacity-80 transition-opacity" style={{ color: '#6B7280' }}>Home</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span style={{ color: '#9CA3AF' }}>Remote Tuning</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <p className="eyebrow mb-5">Available Worldwide</p>
              <h1 className="font-black uppercase leading-none mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#ffffff' }}>
                Remote ECU Tuning.<br />
                <span style={{ color: '#FC222D' }}>Anywhere.</span>
              </h1>
              <p className="text-lg leading-relaxed mb-8 max-w-lg" style={{ color: '#9CA3AF' }}>
                The PTEB Warport delivers a fully custom ECU calibration to your door — no workshop visit, no matter where you are. Our Melbourne-based tuner calibrates your engine remotely via OBD2. Available worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/warport" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FC222D] text-white text-sm font-bold tracking-widest uppercase hover:bg-[#CC1B25] transition-colors w-full sm:w-auto">
                  Learn About Warport <ChevronRight size={14} aria-hidden="true" />
                </Link>
                <a href="https://wa.me/61422300859?text=Hi%20PTEB%2C%20I%27d%20like%20to%20check%20compatibility%20for%20remote%20tuning." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white text-sm font-bold tracking-widest uppercase hover:border-white/50 transition-colors w-full sm:w-auto">
                  <Phone size={14} aria-hidden="true" /> Free Compatibility Check
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "$499", label: "AUD device + tune", sub: "vs $800–$2,500+ workshop" },
                { value: "7 days", label: "avg delivery metro AU", sub: "10–14 days New Zealand" },
                { value: "500+", label: "vehicles tuned", sub: "Worldwide" },
                { value: "< 24h", label: "tuner response", sub: "Mon–Sat, fast replies" },
              ].map(({ value, label, sub }) => (
                <div key={label} className="p-6 border border-[#1E1E1E]" style={{ backgroundColor: '#111' }}>
                  <p className="text-3xl font-black font-heading mb-1" style={{ color: '#ffffff' }}>{value}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#FC222D]">{label}</p>
                  <p className="text-xs mt-1" style={{ color: '#6B7280' }}>{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 border-b border-[#1E1E1E]" style={{ backgroundColor: '#111' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="eyebrow mb-4">How it works</p>
          <h2 className="text-3xl font-black uppercase mb-12" style={{ color: '#ffffff' }}>
            From any location to a custom tune in 4 steps
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { n: "01", title: "Order & receive", body: "Order the Warport device online. Ships worldwide — Australia-wide (5–10 days) and internationally. Tracking provided." },
              { n: "02", title: "Connect & read", body: "Plug the Warport into your OBD2 port and pair with our software. It reads your ECU and TCU data securely." },
              { n: "03", title: "Custom calibration", body: "PTEB's tuner builds a fully custom map for your vehicle, mods, and fuel — not a generic off-the-shelf file." },
              { n: "04", title: "Flash & refine", body: "The tune is flashed via your phone. Live logs let us refine boost, timing, and fuelling until it's perfect." },
            ].map(({ n, title, body }) => (
              <div key={n} className="p-6 border border-[#1E1E1E]" style={{ backgroundColor: '#0a0a0a' }}>
                <p className="text-4xl font-black font-heading text-[#FC222D] mb-4">{n}</p>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2">{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location grid — Australia */}
      <section className="py-20 border-b border-[#1E1E1E]" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="eyebrow mb-4">Australia</p>
          <h2 className="text-3xl font-black uppercase mb-3" style={{ color: '#ffffff' }}>
            Remote tuning across every state
          </h2>
          <p className="text-sm mb-10 max-w-2xl" style={{ color: '#9CA3AF' }}>
            PTEB ships the Warport to every Australian state and territory. Select your location for delivery times, local information, and FAQs.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AU_LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/remote-tuning/${loc.slug}`}
                className="group flex items-center justify-between p-5 border border-[#1E1E1E] hover:border-[#FC222D]/50 transition-all"
                style={{ backgroundColor: '#111' }}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={12} className="text-[#FC222D]" aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#FC222D]">{loc.stateShort}</span>
                  </div>
                  <p className="text-white font-bold">{loc.city}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#6B7280' }}>{loc.state}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 justify-end text-xs mb-1" style={{ color: '#6B7280' }}>
                    <Clock size={11} aria-hidden="true" />
                    <span>{loc.deliveryDays} days</span>
                  </div>
                  <ChevronRight size={16} className="text-[#FC222D] ml-auto group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Zealand */}
      <section className="py-20 border-b border-[#1E1E1E]" style={{ backgroundColor: '#111' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="eyebrow mb-4">International</p>
          <h2 className="text-3xl font-black uppercase mb-3" style={{ color: '#ffffff' }}>
            Remote tuning in New Zealand
          </h2>
          <p className="text-sm mb-10 max-w-2xl" style={{ color: '#9CA3AF' }}>
            PTEB ships internationally to New Zealand. The Warport arrives in 10–14 business days and delivers the same full custom calibration available to Australian customers.
          </p>
          {NZ_LOCATIONS.map((loc) => (
            <Link
              key={loc.slug}
              href={`/remote-tuning/${loc.slug}`}
              className="group inline-flex items-center gap-4 p-6 border border-[#1E1E1E] hover:border-[#FC222D]/50 transition-all"
              style={{ backgroundColor: '#0a0a0a' }}
            >
              <MapPin size={20} className="text-[#FC222D]" aria-hidden="true" />
              <div>
                <p className="text-white font-bold text-lg">New Zealand</p>
                <p className="text-xs" style={{ color: '#6B7280' }}>Auckland · Wellington · Christchurch · all NZ · 10–14 day delivery</p>
              </div>
              <ChevronRight size={18} className="text-[#FC222D] ml-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      {/* Compatible platforms */}
      <section className="py-20" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="eyebrow mb-4">Supported platforms</p>
          <h2 className="text-3xl font-black uppercase mb-10" style={{ color: '#ffffff' }}>
            Which cars can be remote-tuned?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { make: "Audi", engines: "EA888 · DAZA · EA825 · EA839", models: "S3, RS3, TT, A3, Golf R (shared)" },
              { make: "BMW", engines: "B48 · N55 · B58 · S55 · S58", models: "M2, M3, M4, 340i, 440i, Z4 M40i" },
              { make: "Volkswagen", engines: "EA888 Gen3/Gen4", models: "Golf GTI, Golf R, Tiguan R, Arteon R" },
              { make: "Mercedes-AMG", engines: "M133 · M177", models: "A45, A45S, CLA45, CLA45S AMG" },
              { make: "Porsche", engines: "9A2 (3.0T flat-six)", models: "911 Carrera 992, Macan Turbo, Cayenne" },
              { make: "Skoda / SEAT / Cupra", engines: "EA888 based", models: "Octavia RS, Cupra Formentor, Leon" },
            ].map(({ make, engines, models }) => (
              <div key={make} className="p-5 border border-[#1E1E1E]" style={{ backgroundColor: '#111' }}>
                <h3 className="text-white font-bold mb-1">{make}</h3>
                <p className="text-[#FC222D] text-xs font-mono mb-1">{engines}</p>
                <p className="text-xs" style={{ color: '#6B7280' }}>{models}</p>
              </div>
            ))}
          </div>
          <p className="text-xs mt-6" style={{ color: '#4B5563' }}>
            Not listed? <Link href="/contact" className="text-[#FC222D] hover:underline">Contact us</Link> — we're expanding platform support regularly.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="py-16 text-center border-t border-[#1E1E1E]" style={{ backgroundColor: '#FC222D' }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-black uppercase mb-4" style={{ color: '#ffffff' }}>Ready to tune remotely?</h2>
          <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>Free compatibility check. No payment until you're confirmed. Ships worldwide.</p>
          <Link href="/warport#apply" className="inline-flex items-center gap-2 px-10 py-4 text-sm font-bold tracking-widest uppercase transition-opacity hover:opacity-90" style={{ backgroundColor: '#000', color: '#fff' }}>
            Check My Compatibility <ChevronRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  );
}
