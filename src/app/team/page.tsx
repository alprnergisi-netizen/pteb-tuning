import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Award, Wrench, MapPin, Car } from "lucide-react";

export const metadata: Metadata = {
  title: "Besim — Lead Tuner & Founder | PTEB Tuning Melbourne",
  description: "Besim is the founder and lead ECU tuner at PTEB Tuning Melbourne. 15+ years of hands-on calibration experience across BMW, Audi, Volkswagen, Mercedes-AMG, and Porsche. Specialist in Bosch MED17, MG1CS, Continental Simos platforms.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Besim — Lead Tuner & Founder | PTEB Tuning Melbourne",
    description: "Meet Besim, the founder and lead tuner behind PTEB Tuning. 15+ years calibrating European performance cars on the dyno. 500+ custom ECU tunes delivered.",
    url: "/team",
    images: [{ url: "/dynoimage.jpg", width: 1200, height: 630, alt: "Besim — PTEB Tuning Lead Tuner Melbourne" }],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://ptebtuning.com/#besim",
  name: "Besim",
  jobTitle: "Lead Tuner & Founder",
  description: "Besim is the founder and lead ECU calibration specialist at PTEB Tuning, Melbourne. With over 15 years of hands-on experience on European performance vehicles, Besim has calibrated 500+ custom ECU maps across BMW, Audi, Volkswagen, Mercedes-AMG, and Porsche platforms. He specialises in Bosch MED17, MG1CS, and Continental Simos ECU platforms, and leads the development of the PTEB Warport remote tuning device.",
  url: "https://ptebtuning.com/team",
  image: "https://ptebtuning.com/dynoimage.jpg",
  worksFor: {
    "@type": "AutomotiveBusiness",
    "@id": "https://ptebtuning.com/#business",
    name: "PTEB Tuning",
  },
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ptebtuning.com" },
    { "@type": "ListItem", position: 2, name: "Team", item: "https://ptebtuning.com/team" },
  ],
};

const PLATFORMS = [
  { brand: "BMW", engines: "B48, B58, S55, S58, N54, N55", logo: "/bmwlogo.png" },
  { brand: "Audi", engines: "EA888 Gen3/4, DAZA, EA825, EA839", logo: "/audilogo.png" },
  { brand: "Volkswagen", engines: "EA888 GTI, Golf R, Arteon", logo: "/volkswagenlogo.png" },
  { brand: "Mercedes", engines: "M133, M177, M157, M256", logo: "/mercedeslogo.png" },
  { brand: "Porsche", engines: "9A1, 9A2 flat-six, EA839 V6", logo: "/porschelogo.png" },
];

const CREDENTIALS = [
  { icon: Award, label: "15+ years", sub: "hands-on ECU calibration experience" },
  { icon: Car, label: "500+ vehicles", sub: "custom-mapped and road-verified" },
  { icon: Wrench, label: "5 platforms", sub: "BMW, Audi, VW, Mercedes, Porsche" },
  { icon: MapPin, label: "Melbourne-based", sub: "Dyno Innovations certified equipment" },
];

const ECU_PLATFORMS = [
  "Bosch MED17",
  "Bosch MG1CS",
  "Bosch ME17.9",
  "Continental Simos 18",
  "Continental Simos 19",
  "Continental EMS3155",
  "Delphi MT86",
  "Siemens/VDO SDI",
];

export default function TeamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="pt-28 pb-20 md:pt-36 border-b border-[#1E1E1E]" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs mb-8 text-[#6B7280]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span className="text-[#9CA3AF]">Team</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">Lead Tuner & Founder</p>
              <h1 className="font-black uppercase leading-none mb-6 text-white" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
                Besim
              </h1>
              <p className="text-lg leading-relaxed mb-8 text-[#9CA3AF] max-w-xl">
                Founder of PTEB Tuning and the lead calibration specialist behind every custom ECU map that leaves the workshop. 15+ years building power on European platforms — all results dyno-logged and road-verified before delivery.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FC222D] text-white text-sm font-bold tracking-widest uppercase hover:bg-[#CC1B25] transition-colors"
                >
                  Book a Tune <ChevronRight size={14} aria-hidden="true" />
                </Link>
                <a
                  href="https://wa.me/61422300859"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-sm font-bold tracking-widest uppercase hover:border-white/40 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Photo placeholder — replace src with real photo */}
            <div className="relative aspect-[4/5] bg-[#111] border border-[#1E1E1E] overflow-hidden">
              <Image
                src="/dynoimage.jpg"
                alt="PTEB Tuning workshop — Besim, lead ECU tuner Melbourne"
                fill
                priority
                quality={90}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, #0a0a0a 0%, transparent 40%)" }}
                aria-hidden="true"
              />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white font-black text-xl uppercase">Besim</p>
                <p className="text-[#FC222D] text-xs font-semibold tracking-widest uppercase mt-0.5">Lead Tuner & Founder · PTEB</p>
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
                  <p className="text-xs text-[#6B7280] leading-snug">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 border-b border-[#1E1E1E]" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="eyebrow mb-4">Background</p>
              <h2 className="text-3xl font-black uppercase text-white mb-8">Built on the dyno, not in theory</h2>
              <div className="space-y-5 text-[#9CA3AF] text-sm leading-relaxed">
                <p>
                  Besim founded PTEB Tuning after more than a decade of calibrating European performance vehicles across Melbourne. Every system, process, and result standard at PTEB reflects what he learned working hands-on with Bosch and Continental ECU platforms before the tools to do it safely were widely available.
                </p>
                <p>
                  The approach at PTEB is data-first. Every tune starts with a baseline dyno pull, full data log review, and a pre-health inspection. No calibration leaves the dyno until repeatability is confirmed across at least three consecutive runs — then it is road-validated before the customer takes delivery.
                </p>
                <p>
                  Besim also designed the <strong className="text-white">PTEB Warport</strong> — a remote OBD2 tuning device that brings the same full custom calibration process to customers anywhere in Australia and New Zealand, without requiring a workshop visit.
                </p>
              </div>
            </div>
            <div>
              <p className="eyebrow mb-4">ECU Platforms</p>
              <h2 className="text-3xl font-black uppercase text-white mb-8">Hardware expertise</h2>
              <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                Hands-on experience across the ECU platforms that power the most common European performance vehicles on Australian roads.
              </p>
              <div className="flex flex-wrap gap-2">
                {ECU_PLATFORMS.map((p) => (
                  <span
                    key={p}
                    className="px-3 py-1.5 border border-[#1E1E1E] text-xs font-medium text-[#9CA3AF]"
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
      <section className="py-20 border-b border-[#1E1E1E]" style={{ backgroundColor: "#111" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="eyebrow mb-4">Vehicle Platforms</p>
          <h2 className="text-3xl font-black uppercase text-white mb-12">Specialist marques</h2>
          <div className="grid sm:grid-cols-5 gap-4">
            {PLATFORMS.map(({ brand, engines, logo }) => (
              <div key={brand} className="p-5 border border-[#1E1E1E] text-center" style={{ backgroundColor: "#0a0a0a" }}>
                <div className="flex justify-center mb-4">
                  <Image src={logo} alt={`${brand} logo`} width={40} height={40} className="object-contain opacity-80" />
                </div>
                <p className="text-white font-bold text-sm mb-2">{brand}</p>
                <p className="text-[#6B7280] text-[10px] leading-relaxed">{engines}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialisations */}
      <section className="py-20 border-b border-[#1E1E1E]" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="eyebrow mb-4">Calibration Specialisations</p>
          <h2 className="text-3xl font-black uppercase text-white mb-12">What Besim builds</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Full custom ECU maps", desc: "Boost, fuelling, ignition — all tables built from scratch for your specific vehicle, mods, and fuel." },
              { title: "Flex fuel & E85", desc: "True dual-fuel calibrations with ethanol content detection. Consistent power on any blend from 98 RON to E85." },
              { title: "Rolling anti-lag", desc: "Closed-throttle boost retention between shifts. Calibrated to stay within safe exhaust temperature limits." },
              { title: "Launch control", desc: "Tunable launch RPM with wheelspin and torque management. Road-tested for consistency across runs." },
              { title: "Boost by gear", desc: "Independent torque limits per gear to match tyre traction capability at each stage of a run." },
              { title: "Remote tuning via Warport", desc: "Full custom calibration delivered anywhere in Australia or New Zealand through the PTEB Warport OBD2 device." },
            ].map(({ title, desc }) => (
              <div key={title} className="p-6 border border-[#1E1E1E]" style={{ backgroundColor: "#111" }}>
                <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-2">{title}</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: "#FC222D" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-5xl font-black uppercase mb-4 text-white">Book with Besim</h2>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
            Tell us your platform, modifications, and goals — we will pre-approve your vehicle and confirm exactly what your tune will deliver.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-opacity"
            >
              Book a Tune <ChevronRight size={14} aria-hidden="true" />
            </Link>
            <Link
              href="/tuning-guide"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/40 text-white text-sm font-bold tracking-widest uppercase hover:border-white transition-colors"
            >
              Read the Tuning Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
