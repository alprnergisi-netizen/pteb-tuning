import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Phone, CheckCircle, MapPin, Clock } from "lucide-react";
import { LOCATIONS, getLocation } from "@/lib/locations";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ location: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }): Promise<Metadata> {
  const { location: slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};

  const isNZ = loc.country === "NZ";
  const title = isNZ
    ? `Remote ECU Tuning New Zealand — PTEB Warport | BMW, Audi, VW`
    : `Remote ECU Tuning ${loc.city} ${loc.stateShort} — PTEB Warport | $499 AUD`;
  const description = isNZ
    ? `Get a custom ECU tune in New Zealand without visiting a workshop. PTEB ships the Warport OBD2 tuning device to NZ in 10–14 business days. Full custom calibration for BMW, Audi, VW, Mercedes, Porsche — remotely from Melbourne.`
    : `Get a professional custom ECU tune in ${loc.city}, ${loc.stateShort} without travelling to Melbourne. The PTEB Warport OBD2 device ships to ${loc.city} in ${loc.deliveryDays} business days. Full custom calibration for BMW, Audi, VW, Mercedes, Porsche. $499 AUD.`;

  return {
    title,
    description,
    alternates: { canonical: `/remote-tuning/${slug}` },
    openGraph: {
      title,
      description,
      url: `/remote-tuning/${slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ location: string }> }) {
  const { location: slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const isNZ = loc.country === "NZ";
  const h1 = isNZ
    ? "Remote ECU Tuning New Zealand"
    : `Remote ECU Tuning ${loc.city}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ptebtuning.com" },
          { "@type": "ListItem", position: 2, name: "Remote Tuning", item: "https://ptebtuning.com/remote-tuning" },
          { "@type": "ListItem", position: 3, name: loc.city, item: `https://ptebtuning.com/remote-tuning/${slug}` },
        ],
      },
      {
        "@type": "Service",
        name: `Remote ECU Tuning — ${loc.city}`,
        description: `PTEB Warport remote ECU tuning service for ${loc.city}, ${loc.state}. Custom calibration delivered via OBD2 device — no workshop visit required.`,
        provider: {
          "@type": "AutomotiveBusiness",
          name: "PTEB Tuning",
          url: "https://ptebtuning.com",
          telephone: "+61422300859",
        },
        areaServed: {
          "@type": isNZ ? "Country" : "State",
          name: loc.state,
          containedInPlace: { "@type": "Country", name: isNZ ? "New Zealand" : "Australia" },
        },
        offers: {
          "@type": "Offer",
          price: "499.00",
          priceCurrency: "AUD",
          availability: "https://schema.org/InStock",
          deliveryLeadTime: {
            "@type": "QuantitativeValue",
            minValue: loc.deliveryDays.split("–")[0],
            maxValue: loc.deliveryDays.split("–")[1] ?? loc.deliveryDays.split("–")[0],
            unitCode: "DAY",
          },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: loc.faq.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="pt-28 pb-20 md:pt-36 border-b border-[#1E1E1E]" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs mb-8" style={{ color: '#6B7280' }} aria-label="Breadcrumb">
            <Link href="/" style={{ color: '#6B7280' }}>Home</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <Link href="/remote-tuning" style={{ color: '#6B7280' }}>Remote Tuning</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span style={{ color: '#9CA3AF' }}>{loc.city}</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <MapPin size={14} className="text-[#FC222D]" aria-hidden="true" />
            <span className="eyebrow" style={{ marginBottom: 0 }}>
              {loc.stateShort} · {isNZ ? "New Zealand" : "Australia"} · {loc.deliveryDays} day delivery
            </span>
          </div>

          <h1 className="font-black uppercase leading-none mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#ffffff' }}>
            {h1}<br />
            <span style={{ color: '#FC222D' }}>— PTEB Warport</span>
          </h1>

          <p className="text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: '#9CA3AF' }}>
            {loc.intro}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/warport#apply" className="inline-flex items-center gap-2 px-8 py-4 bg-[#FC222D] text-white text-sm font-bold tracking-widest uppercase hover:bg-[#CC1B25] transition-colors">
              Check Compatibility — Free <ChevronRight size={14} aria-hidden="true" />
            </Link>
            <a href="https://wa.me/61422300859" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white text-sm font-bold tracking-widest uppercase hover:border-white/40 transition-colors">
              <Phone size={14} aria-hidden="true" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Delivery info */}
      <section className="py-16 border-b border-[#1E1E1E]" style={{ backgroundColor: '#111' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: `${loc.deliveryDays} business days`, sub: `Delivery to ${loc.city}` },
              { icon: CheckCircle, title: "Free pre-approval", sub: "No payment until confirmed" },
              { icon: Phone, title: "< 24h response", sub: "WhatsApp or enquiry form" },
            ].map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-center gap-4 p-5 border border-[#1E1E1E]" style={{ backgroundColor: '#0a0a0a' }}>
                <Icon size={20} className="text-[#FC222D] shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-white font-bold text-sm">{title}</p>
                  <p className="text-xs" style={{ color: '#6B7280' }}>{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 border-b border-[#1E1E1E]" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="eyebrow mb-4">Process</p>
          <h2 className="text-2xl font-black uppercase mb-8" style={{ color: '#ffffff' }}>
            How remote tuning works from {loc.city}
          </h2>
          <ol className="space-y-4">
            {[
              `Order the PTEB Warport online — ships to ${loc.city} in ${loc.deliveryDays} business days with tracking.`,
              "Plug the Warport into your OBD2 port and pair with the PTEB app on your phone.",
              "PTEB's tuners review your vehicle data and confirm compatibility (free pre-approval).",
              "A fully custom calibration is built for your platform, modifications, and fuel type.",
              "The tune is flashed to your car via the app. Live data logs let us refine until it's perfect.",
            ].map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="text-2xl font-black font-heading text-[#FC222D] shrink-0 leading-tight">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-relaxed pt-1" style={{ color: '#9CA3AF' }}>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      {loc.faq.length > 0 && (
        <section className="py-16 border-b border-[#1E1E1E]" style={{ backgroundColor: '#111' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="text-2xl font-black uppercase mb-8" style={{ color: '#ffffff' }}>
              Remote tuning in {loc.city} — common questions
            </h2>
            <div className="space-y-6">
              {loc.faq.map(({ q, a }) => (
                <div key={q} className="border-b border-[#1E1E1E] pb-6">
                  <h3 className="text-white font-bold mb-2">{q}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other locations */}
      <section className="py-16" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="eyebrow mb-4">Also available</p>
          <h2 className="text-xl font-black uppercase mb-6" style={{ color: '#ffffff' }}>Remote tuning in other locations</h2>
          <div className="flex flex-wrap gap-3">
            {LOCATIONS.filter(l => l.slug !== slug).map(l => (
              <Link key={l.slug} href={`/remote-tuning/${l.slug}`} className="px-4 py-2 border border-[#1E1E1E] text-xs font-medium hover:border-[#FC222D] transition-colors" style={{ color: '#9CA3AF', backgroundColor: '#111' }}>
                {l.city} {l.country === "NZ" ? "🇳🇿" : ""}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
