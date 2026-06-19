import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CheckCircle, Gauge, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Audi TT Stage 3 Flex Fuel — 348.5kW / 592.4Nm Build | PTEB Melbourne",
  description: "Audi TT 2023 Stage 3 Flex Fuel build by PTEB: 348.5kW / 592.4Nm at wheel. Garrett PMAX 2 turbo, Simos 18.1 ECU conversion, MPI 980cc injectors, 7.5R mechatronic, WMI, true flex fuel. Full dyno log included.",
  alternates: { canonical: "/our-work/audi-tt-stage-3" },
  openGraph: {
    title: "Audi TT Stage 3 Flex — 348.5kW / 592.4Nm | PTEB Tuning Melbourne",
    description: "Full Stage 3 Flex Fuel Audi TT 2023 build. 348.5kW / 592.4Nm at wheel. Garrett PMAX 2, Simos 18.1 ECU, 980cc injectors, 7.5R mechatronic. Dyno-logged and road-verified.",
    url: "/our-work/audi-tt-stage-3",
    images: [{ url: "/builds/audi-tt-dyno.jpg", width: 1200, height: 630, alt: "Audi TT Stage 3 Flex dyno graph — 348.5kW tuned by PTEB" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://ptebtuning.com" },
        { "@type": "ListItem", position: 2, name: "Our Work", item: "https://ptebtuning.com/our-work" },
        { "@type": "ListItem", position: 3, name: "Audi TT Stage 3 Flex", item: "https://ptebtuning.com/our-work/audi-tt-stage-3" },
      ],
    },
    {
      "@type": "CreativeWork",
      name: "Audi TT 2023 Stage 3 Flex Fuel — 348.5kW / 592.4Nm",
      description: "Full Stage 3 Flex Fuel build on a 2023 Audi TT by PTEB Tuning Melbourne. ECU converted from Simos 18.10 to 18.1. Garrett PMAX 2 turbocharger. MPI 980cc injectors. 7.5R mechatronic conversion. WMI and full E85 flex fuel system. Result: 348.5kW / 592.4Nm at wheel on Dyno Innovations equipment.",
      author: { "@id": "https://ptebtuning.com/#business" },
      image: "https://ptebtuning.com/builds/audi-tt-dyno.jpg",
    },
  ],
};

const MODS = [
  { title: "ECU Conversion", detail: "Simos 18.10 → Simos 18.1 — required for full Stage 3 calibration access" },
  { title: "Lambda sensor integration", detail: "Integrated to new Golf R engine loom for accurate wideband AFR measurement" },
  { title: "MPI 980cc Injectors", detail: "Port injectors integrated into new Golf R loom — mandatory for E85 fuel flow at Stage 3 power levels" },
  { title: "7.5R Mechatronic Conversion", detail: "Factory DSG unit upgraded to Golf R 7.5 mechatronic for higher torque capacity and TCU tune compatibility" },
  { title: "Garrett PMAX 2", detail: "Larger-than-stock turbocharger — the foundation of the Stage 3 power level" },
  { title: "Water-Methanol Injection (WMI)", detail: "Additional charge cooling and knock suppression — critical for E85 builds at this power level" },
  { title: "True Flex Fuel", detail: "Ethanol content sensor with full blend detection — the car runs any E0–E85 ratio and adapts in real time" },
  { title: "Full bolt-ons (FBO)", detail: "Downpipe, intercooler, intake, exhaust — the hardware foundation for Stage 3" },
];

export default function AudiTTStage3Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="pt-28 pb-0 border-b border-[#1E1E1E] overflow-hidden" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
          <nav className="flex items-center gap-2 text-xs text-white/80 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <Link href="/our-work" className="hover:text-white transition-colors">Our Work</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span className="text-white/90">Audi TT Stage 3 Flex</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div>
              <span className="inline-block text-[10px] font-black tracking-[0.2em] uppercase text-white bg-[#FC222D] px-3 py-1 mb-4">Stage 3 Flex Fuel</span>
              <h1 className="font-black uppercase leading-none mb-4 text-white" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
                Audi TT 2023<br />
                <span className="text-[#FC222D]">Garrett PMAX 2</span>
              </h1>
              <p className="text-white/90 text-sm leading-relaxed mb-8 max-w-lg">
                Full Stage 3 Flex Fuel build — ECU conversion, Garrett PMAX 2 turbo, MPI 980cc injectors, 7.5R mechatronic conversion, WMI, and true E85 flex fuel system. Built and calibrated exclusively by PTEB. Every result logged on Dyno Innovations equipment.
              </p>

              {/* Dyno numbers */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-5 border border-[#FC222D]/40 bg-[#111]">
                  <div className="flex items-center gap-2 mb-2">
                    <Gauge size={14} className="text-[#FC222D]" aria-hidden="true" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Peak Power</span>
                  </div>
                  <p className="text-4xl font-black text-white font-heading">348.5</p>
                  <p className="text-sm text-[#FC222D] font-bold">kW at wheel</p>
                  <p className="text-[10px] text-[#4B5563] mt-1">@ 6,364 RPM</p>
                </div>
                <div className="p-5 border border-[#1E1E1E] bg-[#111]">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={14} className="text-[#FC222D]" aria-hidden="true" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Peak Torque</span>
                  </div>
                  <p className="text-4xl font-black text-white font-heading">592.4</p>
                  <p className="text-sm text-[#FC222D] font-bold">Nm at wheel</p>
                  <p className="text-[10px] text-[#4B5563] mt-1">@ 4,788 RPM</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FC222D] text-white text-sm font-bold tracking-widest uppercase hover:bg-[#CC1B25] transition-colors w-full sm:w-auto"
                >
                  Build My Car <ChevronRight size={14} aria-hidden="true" />
                </Link>
                <Link
                  href="/our-work"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white text-sm font-bold tracking-widest uppercase hover:border-white/50 transition-colors w-full sm:w-auto"
                >
                  See All Builds
                </Link>
              </div>
            </div>

            {/* Dyno graph */}
            <div className="relative aspect-[4/3] bg-[#111] border border-[#1E1E1E] overflow-hidden">
              <Image
                src="/builds/audi-tt-dyno.jpg"
                alt="Audi TT Stage 3 Flex dyno graph — 348.5kW / 592.4Nm tuned by PTEB Melbourne"
                fill
                priority
                quality={85}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-3"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-3" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)" }}>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FC222D]">Dyno Innovations verified</span>
                <span className="w-px h-3 bg-white/20" />
                <span className="text-[10px] text-white/80">Road-validated after session</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build spec */}
      <section className="py-16 border-b border-[#1E1E1E]" style={{ backgroundColor: "#111" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="eyebrow mb-4">Full Specification</p>
          <h2 className="text-3xl font-black uppercase text-white mb-10">What went into this build</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {MODS.map(({ title, detail }) => (
              <div key={title} className="flex items-start gap-4 p-5 border border-[#1E1E1E]" style={{ backgroundColor: "#0a0a0a" }}>
                <CheckCircle size={16} className="text-[#FC222D] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-white font-bold text-sm mb-1">{title}</p>
                  <p className="text-xs text-white/80 leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why this result matters */}
      <section className="py-16 border-b border-[#1E1E1E]" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="eyebrow mb-4">Build Context</p>
          <h2 className="text-3xl font-black uppercase text-white mb-8">What makes this result significant</h2>
          <div className="space-y-5 text-sm text-white/90 leading-relaxed max-w-3xl">
            <p>
              The Audi TT on the <strong className="text-white">Simos 18.1 ECU</strong> (converted from the stock 18.10) opens access to full calibration tables that the factory-locked ECU restricts. The conversion is a non-trivial process — it requires remapping the loom to accept the new engine management, integrating the lambda sensor, and adapting the injector system for MPI fuelling at E85 volumes.
            </p>
            <p>
              The <strong className="text-white">Garrett PMAX 2</strong> turbocharger is a significant step over the factory unit — it supports the airflow required for Stage 3 power targets while maintaining drivability. Combined with 980cc MPI injectors and a true flex fuel system, the car makes peak numbers on any ethanol blend and adjusts automatically.
            </p>
            <p>
              The <strong className="text-white">7.5R mechatronic conversion</strong> ensures the DSG gearbox can handle the torque reliably. A standard DQ200 mechatronic is rated for approximately 350 Nm — well below the 592 Nm this build produces. The 7.5R unit, combined with a matching TCU tune, delivers reliable shifts at full power.
            </p>
            <p>
              348.5kW / 592.4Nm at the wheel represents a <strong className="text-white">full Stage 3 result on a platform</strong> that leaves the factory at approximately 210kW. This is a complete transformation — not a bolt-on tune.
            </p>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 border-b border-[#1E1E1E]" style={{ backgroundColor: "#111" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="eyebrow mb-4">Learn More</p>
          <h2 className="text-3xl font-black uppercase text-white mb-8">Related guides</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "Audi EA888 Tuning Guide", desc: "Stage 1 through Stage 3 power targets, ECU platforms, and flex fuel on the EA888 family.", href: "/tuning-guide#brand-audi" },
              { title: "Flex Fuel & E85 Tuning", desc: "What true flex fuel requires, hardware checklist, and how ethanol changes the calibration.", href: "/tuning-guide#flex-fuel" },
              { title: "DSG Mechatronic Repair", desc: "Understanding the mechatronic conversion — why Stage 3 builds require gearbox upgrades.", href: "/services/dsg-mechatronic-repair" },
            ].map(({ title, desc, href }) => (
              <Link
                key={title}
                href={href}
                className="group p-6 border border-[#1E1E1E] hover:border-[#FC222D]/40 transition-colors block"
                style={{ backgroundColor: "#0a0a0a" }}
              >
                <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-2 group-hover:text-[#FC222D] transition-colors">{title}</h3>
                <p className="text-xs text-white/80 leading-relaxed">{desc}</p>
                <span className="inline-flex items-center gap-1 mt-3 text-[#FC222D] text-xs font-bold uppercase tracking-widest group-hover:gap-2 transition-all">
                  Read more <ChevronRight size={11} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: "#FC222D" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-5xl font-black uppercase mb-4 text-white">Want a build like this?</h2>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
            Tell us your platform, current mods, and power target. We'll pre-approve your vehicle and outline the exact path to get there.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              Start Your Build <ChevronRight size={14} aria-hidden="true" />
            </Link>
            <Link
              href="/tuning-guide"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/40 text-white text-sm font-bold tracking-widest uppercase hover:border-white transition-colors w-full sm:w-auto"
            >
              Read the Tuning Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
