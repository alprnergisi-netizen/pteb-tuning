import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, CheckCircle, AlertTriangle, Wrench, Gauge } from "lucide-react";

export const metadata: Metadata = {
  title: "DSG Mechatronic Repair & TCU Tuning Melbourne — VW Audi | PTEB",
  description: "Specialist DSG mechatronic unit repair, replacement and TCU remapping in Melbourne. DQ200, DQ250, DQ381 DSG gearboxes serviced by PTEB — genuine diagnosis before any parts replaced. Call 0422 300 859.",
  alternates: { canonical: "/services/dsg-mechatronic-repair" },
  openGraph: {
    title: "DSG Mechatronic Repair Melbourne — VW Group Specialist | PTEB",
    description: "Specialist DSG mechatronic unit repair, replacement, and TCU remapping. DQ200, DQ250, DQ381. Melbourne's VW Group DSG specialist.",
    url: "/services/dsg-mechatronic-repair",
    images: [{ url: "/dynoimage.jpg", width: 1200, height: 630, alt: "DSG mechatronic repair and TCU remapping — PTEB Melbourne" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://ptebtuning.com/services/dsg-mechatronic-repair#webpage",
      "url": "https://ptebtuning.com/services/dsg-mechatronic-repair",
      "name": "DSG Mechatronic Repair & TCU Tuning Melbourne — VW Audi | PTEB",
      "description": "Specialist DSG mechatronic unit repair, replacement and TCU remapping in Melbourne. DQ200, DQ250, DQ381 DSG gearboxes serviced by PTEB — genuine diagnosis before any parts replaced.",
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
        { "@type": "ListItem", position: 2, name: "Services", item: "https://ptebtuning.com/services" },
        { "@type": "ListItem", position: 3, name: "DSG Mechatronic Repair", item: "https://ptebtuning.com/services/dsg-mechatronic-repair" },
      ],
    },
    {
      "@type": "Service",
      name: "DSG Mechatronic Unit Repair & TCU Remapping Melbourne",
      description: "Specialist repair, rebuild, and replacement of DSG mechatronic units for VW Group vehicles. Covers DQ200, DQ250, DQ381 gearboxes. Genuine diagnosis before parts replacement. TCU remapping available after repair.",
      provider: { "@id": "https://ptebtuning.com/#business" },
      areaServed: { "@type": "City", name: "Melbourne", addressRegion: "VIC", addressCountry: "AU" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a DSG mechatronic unit?",
          acceptedAnswer: { "@type": "Answer", text: "The mechatronic unit is the combined hydraulic and electronic control module inside a DSG (Direct Shift Gearbox). It controls clutch engagement, gear selection, and all shift logic. When it fails, the gearbox typically enters limp mode or develops harsh/jerky shifting behaviour." },
        },
        {
          "@type": "Question",
          name: "How do I know if my DSG mechatronic unit needs replacing?",
          acceptedAnswer: { "@type": "Answer", text: "Common symptoms include harsh or jerky shifting, delayed gear engagement, gearbox warning lights, the car jumping into limp mode, or complete loss of forward/reverse gears. A full diagnostic scan is required to confirm mechatronic failure vs other gearbox faults." },
        },
        {
          "@type": "Question",
          name: "What DSG gearboxes does PTEB service in Melbourne?",
          acceptedAnswer: { "@type": "Answer", text: "PTEB services DQ200 (7-speed dry clutch), DQ250 (6-speed wet clutch), and DQ381 (7-speed wet clutch high-torque) units — covering the majority of Volkswagen, Audi, SEAT, and Skoda DSG-equipped vehicles." },
        },
        {
          "@type": "Question",
          name: "Can PTEB remap a DSG gearbox after repair?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. After any mechatronic repair or replacement, PTEB offers optional TCU remapping to improve shift speed, raise torque limits, enable launch control, and integrate with the ECU tune. TCU tuning is especially beneficial on higher-power Stage 2+ builds." },
        },
      ],
    },
  ],
};

const DSG_UNITS = [
  {
    code: "DQ200",
    name: "7-Speed Dry Clutch",
    models: "Golf GTI Mk7/7.5, Polo GTI, Scirocco, A3 1.4/1.8 TFSI, Octavia, Leon",
    torque: "Up to 350 Nm",
    notes: "Most commonly problematic unit in the VW Group lineup. Known for judder at low speed and harsh cold engagement. Mechatronic failures are frequent on high-output variants from 60,000 km.",
  },
  {
    code: "DQ250",
    name: "6-Speed Wet Clutch",
    models: "Golf R Mk6/Mk7, GTI Performance, TT 2.0 TFSI, S3, Leon Cupra, Tiguan 2.0 TSI",
    torque: "Up to 450 Nm modified",
    notes: "More robust than the DQ200. Used on higher-power applications. Responds extremely well to TCU tuning — faster shifts, launch control, and anti-lag integration.",
  },
  {
    code: "DQ381",
    name: "7-Speed Wet Clutch (High-Torque)",
    models: "Golf R Mk8, Tiguan R, Arteon R, Cupra Formentor VZ5",
    torque: "Up to 600+ Nm modified",
    notes: "Current-generation high-torque unit found in the latest VW Group performance models. TCU tuning delivers significant shift speed improvement and better launch behaviour.",
  },
];

export default function DSGMechatronicPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 border-b border-[#1E1E1E]" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-[#6B7280] mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span className="text-[#6B7280]">Services</span>
            <ChevronRight size={12} aria-hidden="true" />
            <span className="text-[#9CA3AF]">DSG Mechatronic Repair</span>
          </nav>
          <p className="eyebrow mb-4">VW Group Specialist</p>
          <h1 className="font-black uppercase leading-none mb-6 text-white" style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}>
            DSG Mechatronic<br />
            <span className="text-[#FC222D]">Repair & Service</span>
          </h1>
          <p className="text-lg text-[#9CA3AF] max-w-2xl leading-relaxed mb-8">
            Melbourne's VW Group DSG specialist. PTEB repairs, rebuilds, and replaces mechatronic units for DQ200, DQ250, and DQ381 gearboxes — with genuine diagnosis before any parts are recommended.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FC222D] text-white text-sm font-bold tracking-widest uppercase hover:bg-[#CC1B25] transition-colors w-full sm:w-auto"
            >
              Book a Diagnostic <ChevronRight size={14} aria-hidden="true" />
            </Link>
            <a
              href="https://wa.me/61422300859?text=Hi%20PTEB%2C%20I%27m%20having%20DSG%20gearbox%20issues%20and%20need%20a%20diagnostic."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white text-sm font-bold tracking-widest uppercase hover:border-white/50 transition-colors w-full sm:w-auto"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 border-b border-[#1E1E1E]" style={{ backgroundColor: "#111" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Gauge, title: "Full DSG Diagnostic", desc: "Complete VCDS and proprietary scan before any recommendation. We find the root cause — not just replace parts." },
              { icon: Wrench, title: "Mechatronic Repair & Replacement", desc: "Supply and fit genuine and OEM-spec mechatronic units. Full adaptation and coding post-installation." },
              { icon: CheckCircle, title: "TCU Remapping", desc: "After repair, optional TCU tune: faster shifts, higher torque limits, launch control, and anti-lag integration." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 border border-[#1E1E1E]" style={{ backgroundColor: "#0a0a0a" }}>
                <Icon size={24} className="text-[#FC222D] mb-4" aria-hidden="true" />
                <h3 className="text-white font-black uppercase text-sm tracking-widest mb-2">{title}</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DSG units */}
      <section className="py-16 border-b border-[#1E1E1E]" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="eyebrow mb-4">Supported Gearboxes</p>
          <h2 className="text-3xl font-black uppercase text-white mb-10">DSG Units We Service</h2>
          <div className="space-y-4">
            {DSG_UNITS.map((unit) => (
              <div key={unit.code} className="p-6 border border-[#1E1E1E]" style={{ backgroundColor: "#111" }}>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-2xl font-black text-[#FC222D] font-heading">{unit.code}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] px-2 py-0.5 border border-[#2A2A2A]">{unit.name}</span>
                  <span className="text-xs text-[#4B5563]">Max torque: {unit.torque}</span>
                </div>
                <p className="text-xs text-[#9CA3AF] mb-2">
                  <strong className="text-white">Compatible vehicles: </strong>{unit.models}
                </p>
                <p className="text-xs text-[#6B7280] leading-relaxed">{unit.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Symptoms + Process */}
      <section className="py-16 border-b border-[#1E1E1E]" style={{ backgroundColor: "#111" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="eyebrow mb-4">Warning Signs</p>
              <h2 className="text-3xl font-black uppercase text-white mb-8">Mechatronic failure symptoms</h2>
              <ul className="space-y-4">
                {[
                  "Harsh or jerky shifting, especially when cold",
                  "Gearbox warning light or 'gearbox malfunction' message",
                  "Car stuck in limp mode — reduced power, limited gears",
                  "Delayed engagement when selecting Drive or Reverse",
                  "Shuddering or vibration at low speed / crawling",
                  "Complete loss of forward or reverse gears",
                  "DSG oil temperature warnings during normal driving",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-[#9CA3AF]">
                    <AlertTriangle size={14} className="text-yellow-500 mt-0.5 shrink-0" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">Our Process</p>
              <h2 className="text-3xl font-black uppercase text-white mb-8">How we diagnose DSG faults</h2>
              <ol className="space-y-6">
                {[
                  { n: "01", title: "Full scan", body: "We run a comprehensive VCDS and OBD scan covering all gearbox modules, fault codes, and live data before touching anything." },
                  { n: "02", title: "Live data review", body: "Clutch wear values, oil temperature, adaptation values, and mechatronic sensor data are reviewed in detail to pinpoint the fault." },
                  { n: "03", title: "Honest recommendation", body: "We confirm the root cause — mechatronic, clutch pack, internal fault, or software — before any parts are quoted or ordered." },
                  { n: "04", title: "Repair & adaptation", body: "After repair, the unit is adapted using OEM-level software. Optional TCU tune available to complete the build." },
                ].map(({ n, title, body }) => (
                  <li key={n} className="flex gap-4">
                    <span className="text-2xl font-black text-[#FC222D]/40 font-heading shrink-0">{n}</span>
                    <div>
                      <p className="text-white font-bold text-sm mb-1">{title}</p>
                      <p className="text-xs text-[#6B7280] leading-relaxed">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-16 border-b border-[#1E1E1E]" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="eyebrow mb-4">Related Services</p>
          <h2 className="text-3xl font-black uppercase text-white mb-8">Also from PTEB</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Custom ECU Tuning", desc: "Full dyno-mapped calibrations for Audi, BMW, VW, Mercedes, Porsche.", href: "/tuning-guide" },
              { title: "Our Work — Dyno Results", desc: "Real dyno results from Stage 1 through Stage 3 Flex builds.", href: "/our-work" },
            ].map(({ title, desc, href }) => (
              <Link
                key={title}
                href={href}
                className="group p-6 border border-[#1E1E1E] hover:border-[#FC222D]/40 transition-colors block"
                style={{ backgroundColor: "#111" }}
              >
                <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-2 group-hover:text-[#FC222D] transition-colors">{title}</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">{desc}</p>
                <span className="inline-flex items-center gap-1 mt-3 text-[#FC222D] text-xs font-bold uppercase tracking-widest group-hover:gap-2 transition-all">
                  Learn more <ChevronRight size={11} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: "#FC222D" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-5xl font-black uppercase mb-4 text-white">DSG issues? Talk to PTEB.</h2>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
            Describe your symptoms and we'll give you an honest assessment. No unnecessary parts recommended.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              Book a Diagnostic <ChevronRight size={14} aria-hidden="true" />
            </Link>
            <a
              href="tel:+61422300859"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/40 text-white text-sm font-bold tracking-widest uppercase hover:border-white transition-colors w-full sm:w-auto"
            >
              Call 0422 300 859
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
