import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Award, Wrench, MapPin, Car } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team — Besim Dani & Paras Ionnou | PTEB Tuning Melbourne",
  description: "Meet the PTEB co-founders: Besim Dani (ECU tuning specialist) and Paras Ionnou (head of mechanical repairs). Melbourne's dedicated European performance workshop.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Our Team — Besim Dani & Paras Ionnou | PTEB Tuning Melbourne",
    description: "Meet the PTEB co-founders: Besim Dani, expert in V.A.G diagnostics & ECU calibration, and Paras Ionnou, heading mechanical repairs for European performance vehicles.",
    url: "/team",
    images: [{ url: "/ourteam.jpg", width: 1200, height: 630, alt: "PTEB Team — Besim Dani & Paras Ionnou, Co-Founders Melbourne" }],
  },
};

const besimSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://ptebtuning.com/#besim",
  name: "Besim Dani",
  jobTitle: "Co-Founder & Tuner",
  description: "Co-Founder & Tuner of PTEB, Besim Dani is an expert in V.A.G diagnostics and has been specialising in VW/Audi software for years. Besim is your go-to for all your racing needs.",
  url: "https://ptebtuning.com/team",
  image: "https://ptebtuning.com/ourteam.jpg",
  worksFor: { "@id": "https://ptebtuning.com/#business" },
  knowsAbout: [
    "ECU tuning",
    "TCU remapping",
    "Dyno calibration",
    "Flex fuel tuning",
    "Anti-lag systems",
    "Launch control",
    "Boost by gear mapping",
    "Audi TFSI tuning",
    "BMW M-series tuning",
    "Volkswagen EA888 tuning",
    "Mercedes AMG calibration",
    "Porsche flat-six tuning",
    "Bosch MED17 ECU",
    "Bosch MG1CS ECU",
    "Continental Simos 18",
    "Continental Simos 19",
    "Remote OBD2 tuning",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "ECU Calibration Specialist",
    occupationLocation: { "@type": "City", name: "Melbourne" },
    skills: "ECU tuning, dyno calibration, flex fuel mapping, anti-lag, launch control, boost by gear",
  },
  sameAs: [
    "https://instagram.com/ptebtuning",
    "https://www.tiktok.com/@prestigeteameuroboost",
  ],
};

const parasSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://ptebtuning.com/#paras",
  name: "Paras Ionnou",
  jobTitle: "Co-Founder & Head of Mechanical Repairs",
  description: "Co-Founder of PTEB and head of the mechanical repairs department. Paras leads all hands-on mechanical work for European performance vehicles — from pre-tune health inspections to full hardware builds.",
  url: "https://ptebtuning.com/team",
  worksFor: { "@id": "https://ptebtuning.com/#business" },
  knowsAbout: [
    "European vehicle mechanical repairs",
    "Performance hardware installation",
    "Turbocharger upgrades",
    "Intercooler installation",
    "Downpipe fitting",
    "Exhaust system fabrication",
    "Engine rebuilds",
    "Brake system upgrades",
    "Suspension setup",
    "Pre-tune vehicle inspections",
    "Audi mechanical servicing",
    "BMW mechanical servicing",
    "Volkswagen mechanical servicing",
    "Mercedes mechanical servicing",
    "Porsche mechanical servicing",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Mechanical Repairs Specialist",
    occupationLocation: { "@type": "City", name: "Melbourne" },
    skills: "European vehicle mechanical repairs, hardware installation, turbo upgrades, engine rebuilds, pre-tune inspections",
  },
  sameAs: [
    "https://instagram.com/ptebtuning",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ptebtuning.com" },
    { "@type": "ListItem", position: 2, name: "Team", item: "https://ptebtuning.com/team" },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://ptebtuning.com/team#webpage",
  "url": "https://ptebtuning.com/team",
  "name": "Our Team — Besim Dani & Paras Ionnou | PTEB Tuning Melbourne",
  "description": "Meet the PTEB co-founders: Besim Dani (ECU tuning specialist) and Paras Ionnou (head of mechanical repairs). Melbourne's dedicated European performance workshop.",
  "isPartOf": { "@id": "https://ptebtuning.com/#website" },
  "about": [
    { "@id": "https://ptebtuning.com/#besim" },
    { "@id": "https://ptebtuning.com/#paras" },
  ],
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2", "h3"]
  }
};

const PLATFORMS = [
  { brand: "BMW", engines: "B48, B58, S55, S58, N54, N55", logo: "/bmwlogo.png" },
  { brand: "Audi", engines: "EA888 Gen3/4, DAZA, EA825, EA839", logo: "/audilogo.png" },
  { brand: "Volkswagen", engines: "EA888 GTI, Golf R, Arteon", logo: "/volkswagenlogo.svg" },
  { brand: "Mercedes", engines: "M133, M177, M157, M256", logo: "/mercedeslogo.png" },
  { brand: "Porsche", engines: "9A1, 9A2 flat-six, EA839 V6", logo: "/porschelogo.png" },
];

const CREDENTIALS = [
  { icon: Award, label: "Years of Experience", sub: "specialising in VW/Audi software" },
  { icon: Car, label: "500+ vehicles", sub: "custom-mapped and road-verified" },
  { icon: Wrench, label: "MQB Specialist", sub: "VW, Audi, Golf R, Tiguan R, RS3, TT" },
  { icon: MapPin, label: "Melbourne-based", sub: "Dyno Innovations certified equipment" },
];

const ECU_PLATFORMS = [
  "Bosch MED17",
  "Bosch MG1CS",
  "Continental Simos 18",
  "Continental Simos 19",
  "Siemens/VDO SDI",
];

export default function TeamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(besimSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(parasSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Hero */}
      <section className="pt-28 pb-20 md:pt-36 border-b border-[#1E1E1E]" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs mb-8 text-white/80" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span className="text-white/90">Team</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">Co-Founder & Tuner</p>
              <h1 className="font-black uppercase leading-none mb-6 text-white" style={{ fontSize: "clamp(2.2rem, 7vw, 5.5rem)" }}>
                Besim Dani
              </h1>
              <p className="text-lg leading-relaxed mb-8 text-white/90 max-w-xl">
                Co-Founder & Tuner of PTEB, Besim is an expert in V.A.G diagnostics & has been specialising in VW/Audi software for years. Besim is your go to for all your racing needs with remote support available too.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#FC222D] text-white text-sm font-bold tracking-widest uppercase hover:bg-[#CC1B25] transition-colors w-full sm:w-auto"
                >
                  Book a Tune <ChevronRight size={14} aria-hidden="true" />
                </Link>
                <a
                  href="https://wa.me/61422300859"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white text-sm font-bold tracking-widest uppercase hover:border-white/40 transition-colors w-full sm:w-auto"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/5] bg-[#111] border border-[#1E1E1E] overflow-hidden">
              <Image
                src="/ourteam.jpg"
                alt="PTEB Illyrian Racing — Besim Dani, Founder & Tuner"
                fill
                priority
                quality={70}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, #0a0a0a 0%, transparent 40%)" }}
                aria-hidden="true"
              />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white font-black text-xl uppercase">Besim Dani</p>
                <p className="text-[#FC222D] text-xs font-semibold tracking-widest uppercase mt-0.5">Co-Founder & Tuner · PTEB</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 border-b border-[#1E1E1E]" style={{ backgroundColor: "#111" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CREDENTIALS.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-start gap-4 p-5 border border-[#1E1E1E]" style={{ backgroundColor: "#0a0a0a" }}>
                <Icon size={20} className="text-[#FC222D] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-white font-black text-lg leading-none mb-1">{label}</p>
                  <p className="text-xs text-white/80 leading-snug">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paras Ionnou — Co-Founder */}
      <section className="py-14 sm:py-20 border-b border-[#1E1E1E]" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="eyebrow mb-4">Co-Founder & Head of Mechanical Repairs</p>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mb-6 leading-tight">
                Paras Ionnou
              </h2>
              <div className="space-y-5 text-white/90 text-sm leading-relaxed">
                <p>
                  Paras co-founded PTEB alongside Besim to bring a complete performance solution under one roof — tuning and mechanical, handled by the same team that understands the full picture. As head of the mechanical repairs department, Paras leads all hands-on hardware work: from pre-tune health inspections and bolt-on upgrades to full turbo builds and engine rebuilds.
                </p>
                <p>
                  His approach is simple — every car that goes on the dyno needs to be mechanically sound first. That means thorough inspections, correct torque specs, and OEM-quality fitment on every component. Whether it&apos;s fitting a downpipe, swapping an intercooler, or rebuilding an engine for a Stage 3 build, Paras ensures the hardware side is right before a single map is loaded.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-8">
                {[
                  { label: "Hardware Builds", sub: "Turbo, intercooler, exhaust & intake upgrades" },
                  { label: "Transmission Repair Specialist", sub: "DSG, S-tronic & mechatronic diagnostics and rebuilds" },
                  { label: "Engine Rebuilds", sub: "Bottom-end and top-end rebuilds for high-power builds" },
                  { label: "European Specialist", sub: "Audi, BMW, VW, Mercedes & Porsche" },
                ].map(({ label, sub }) => (
                  <div key={label} className="p-4 border border-[#1E1E1E]" style={{ backgroundColor: "#111" }}>
                    <Wrench size={14} className="text-[#FC222D] mb-2" aria-hidden="true" />
                    <p className="text-white font-bold text-xs uppercase tracking-wide mb-1">{label}</p>
                    <p className="text-white/80 text-[10px] leading-relaxed">{sub}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/5] bg-[#111] border border-[#1E1E1E] overflow-hidden order-1 lg:order-2">
              <Image
                src="/ourteam.jpg"
                alt="PTEB Team — Paras Ionnou, Co-Founder & Head of Mechanical Repairs"
                fill
                quality={70}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, #0a0a0a 0%, transparent 40%)" }}
                aria-hidden="true"
              />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white font-black text-xl uppercase">Paras Ionnou</p>
                <p className="text-[#FC222D] text-xs font-semibold tracking-widest uppercase mt-0.5">Co-Founder · Mechanical Repairs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-14 sm:py-20 border-b border-[#1E1E1E]" style={{ backgroundColor: "#111" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <p className="eyebrow mb-4">Background</p>
              <h2 className="text-3xl font-black uppercase text-white mb-8">Built on the dyno, not in theory</h2>
              <div className="space-y-5 text-white/90 text-sm leading-relaxed">
                <p>
                  Besim founded PTEB Tuning as Melbourne's home for serious VW/Audi group performance work. His background is in V.A.G diagnostics — the software, the platforms, and the hardware inside every MQB build. From Golf R mechatronic conversions to full Stage 3 flex fuel builds on the Tiguan and Audi TT, every job gets the same level of hands-on attention.
                </p>
                <p>
                  The approach at PTEB is data-first. Every tune starts with a baseline dyno pull, full data log review, and a pre-health inspection. No calibration leaves the dyno until repeatability is confirmed across multiple consecutive runs — then it is road-validated before the customer takes delivery.
                </p>
              </div>
            </div>
            <div>
              <p className="eyebrow mb-4">ECU Platforms</p>
              <h2 className="text-3xl font-black uppercase text-white mb-8">Hardware expertise</h2>
              <p className="text-sm text-white/90 leading-relaxed mb-6">
                Hands-on experience across the ECU platforms that power the most common European performance vehicles on the road.
              </p>
              <div className="flex flex-wrap gap-2">
                {ECU_PLATFORMS.map((p) => (
                  <span
                    key={p}
                    className="px-3 py-1.5 border border-[#1E1E1E] text-xs font-medium text-white/90"
                    style={{ backgroundColor: "#111" }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform coverage */}
      <section className="py-14 sm:py-20 border-b border-[#1E1E1E]" style={{ backgroundColor: "#111" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="eyebrow mb-4">Vehicle Platforms</p>
          <h2 className="text-3xl font-black uppercase text-white mb-12">Specialist marques</h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4">
            {PLATFORMS.map(({ brand, engines, logo }) => (
              <div key={brand} className="p-5 border border-[#1E1E1E] text-center" style={{ backgroundColor: "#0a0a0a" }}>
                <div className="flex justify-center mb-4">
                  <Image src={logo} alt={`${brand} logo`} width={40} height={40} className="object-contain opacity-80" unoptimized={logo.endsWith(".svg")} />
                </div>
                <p className="text-white font-bold text-sm mb-2">{brand}</p>
                <p className="text-white/80 text-[10px] leading-relaxed">{engines}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialisations */}
      <section className="py-14 sm:py-20 border-b border-[#1E1E1E]" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="eyebrow mb-4">Calibration Specialisations</p>
          <h2 className="text-3xl font-black uppercase text-white mb-12">What Besim builds</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Full custom ECU maps", desc: "Boost, fuelling, ignition — all tables built from scratch for your specific vehicle, mods, and fuel." },
              { title: "Flex fuel", desc: "True dual-fuel calibrations with ethanol content detection. Consistent power on any ethanol blend." },
              { title: "Rolling anti-lag", desc: "Closed-throttle boost retention between shifts. Calibrated to stay within safe exhaust temperature limits." },
              { title: "Adjustable launch control", desc: "Allows you to launch at any RPM you desire from the click of a button, mapped to your steering wheel." },
              { title: "Boost by gear", desc: "Smoother boost delivery per gear. Full boost by 3rd." },
            ].map(({ title, desc }) => (
              <div key={title} className="p-6 border border-[#1E1E1E]" style={{ backgroundColor: "#111" }}>
                <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-2">{title}</h3>
                <p className="text-xs text-white/80 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12 border-b border-[#1E1E1E]" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-wrap gap-6 justify-center">
          <Link href="/our-work" className="inline-flex items-center gap-1 text-sm font-bold text-white/80 uppercase tracking-widest hover:text-white transition-colors">
            See Our Work <ChevronRight size={13} aria-hidden="true" />
          </Link>
          <Link href="/services/dsg-mechatronic-repair" className="inline-flex items-center gap-1 text-sm font-bold text-white/80 uppercase tracking-widest hover:text-white transition-colors">
            DSG & Mechatronic Repair <ChevronRight size={13} aria-hidden="true" />
          </Link>
          <Link href="/melbourne-tuning" className="inline-flex items-center gap-1 text-sm font-bold text-white/80 uppercase tracking-widest hover:text-white transition-colors">
            Melbourne Tuning <ChevronRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: "#FC222D" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-5xl font-black uppercase mb-4 text-white">Book with the PTEB Team</h2>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
            Tell us your platform, modifications, and goals — Besim handles the calibration, Paras handles the mechanical work, and your car gets the full attention of both co-founders.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              Book a Tune <ChevronRight size={14} aria-hidden="true" />
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
