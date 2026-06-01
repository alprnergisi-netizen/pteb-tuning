import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BuildsGrid } from "@/components/ui/BuildsGrid";

export const metadata: Metadata = {
  title: "Dyno Tuning Results — Audi TT Stage 3 Flex, BMW M4, Audi RS3 | PTEB",
  description: "Real dyno results from PTEB Tuning. Audi TT 2023 Stage 3 Flex: 348.5kW / 592.4Nm. BMW M4 Competition: 334kW (+74kW). Audi RS3 DAZA: 318kW (+68kW). Every result dyno-logged on Dyno Innovations equipment and road-verified — no fabricated numbers.",
  alternates: { canonical: "/our-work" },
  openGraph: {
    title: "Dyno Tuning Results — Audi TT 348.5kW, BMW M4 334kW, Audi RS3 318kW | PTEB",
    description: "Documented dyno results: Audi TT 2023 Stage 3 Flex 348.5kW, BMW M4 Competition 334kW, Audi RS3 318kW. All results logged on Dyno Innovations equipment and road-verified.",
    url: "/our-work",
    images: [{ url: "/builds/audi-tt-dyno.jpg", width: 1200, height: 630, alt: "Audi TT Stage 3 Flex dyno graph — 348.5kW tuned by PTEB" }],
  },
};

const BUILDS = [
  {
    car: "Audi TT 2023",
    variant: "Garret PMAX 2 · Simos 18.1",
    stage: "Stage 3 Flex",
    power: "348.5 kW",
    torque: "592.4 Nm",
    powerRPM: "@6,364 RPM",
    torqueRPM: "@4,788 RPM",
    gain: "Full Stage 3",
    gainTorque: "Flex fuel build",
    mods: [
      "ECU Conversion 18.10 → 18.1",
      "Lambda sensor integrated to new Golf R engine loom",
      "MPI 980cc injectors into new loom",
      "7.5R mechatronic unit conversion",
      "Garrett PMAX 2",
      "WMI",
      "Flex fuel",
      "FBO",
    ],
    highlight: true,
    image: "/builds/audi-tt-dyno.jpg",
    imageAlt: "Audi TT Stage 3 Flex dyno graph — 348.5kW / 592.4Nm tuned by PTEB",
    detailHref: "/our-work/audi-tt-stage-3",
  },
  {
    car: "Volkswagen Tiguan R-Line",
    variant: "EQT Engine · Stage 3 Flex",
    stage: "Stage 3 Flex",
    power: "346.5 kW",
    torque: "553.4 Nm",
    powerRPM: "@6,106 RPM",
    torqueRPM: "@6,070 RPM",
    gain: "EQT 660 build",
    gainTorque: "Full flex fuel",
    mods: [
      "EQT 660 upgrade",
      "Flex fuel calibration",
      "Custom PTEB Stage 3 map",
      "Dyno Innovations verified",
    ],
    highlight: false,
    image: "/builds/tiguan-dyno.jpg",
    imageAlt: "Volkswagen Tiguan R-Line Stage 3 Flex dyno graph — 346.5kW / 553.4Nm tuned by PTEB",
  },
  {
    car: "BMW M4 Competition",
    variant: "F82 · S55 Engine",
    stage: "Stage 1",
    power: "334.3 kW",
    torque: "596.9 Nm",
    powerRPM: "@6,240 RPM",
    torqueRPM: "@3,896 RPM",
    gain: "+74 kW",
    gainTorque: "+96 Nm",
    mods: ["Stock turbochargers", "Custom PTEB map", "OBD logging verified"],
    highlight: false,
    image: "/builds/bmw-m4-dyno.png",
    imageAlt: "BMW M4 Competition F82 dyno graph — 334.3kW / 596.9Nm tuned by PTEB",
  },
  {
    car: "Audi RS3",
    variant: "DAZA Engine · 2.5 TFSI",
    stage: "Stage 2",
    power: "318.3 kW",
    torque: "577.3 Nm",
    powerRPM: "@6,000 RPM",
    torqueRPM: "@3,796 RPM",
    gain: "+68 kW",
    gainTorque: "+77 Nm",
    mods: ["Upgraded intake", "Downpipe", "Custom PTEB calibration", "Dyno Innovations verified"],
    highlight: false,
    image: "/builds/rs3-dyno.png",
    imageAlt: "Audi RS3 DAZA dyno graph — 318.3kW / 577.3Nm tuned by PTEB",
  },
  {
    car: "BMW M4 Competition",
    variant: "2019 · S55 Stock",
    stage: "Stage 1",
    power: "360+ kW",
    torque: "620+ Nm",
    powerRPM: "peak at wheel",
    torqueRPM: "from 2,000 RPM",
    gain: "Stock baseline",
    gainTorque: "No mods required",
    mods: [
      "Stock factory hardware",
      "Stock factory exhaust",
      "Custom PTEB calibration only",
      "Road and dyno verified",
    ],
    highlight: false,
    image: "/builds/bmwdino.jpeg",
    imageAlt: "BMW M4 Competition 2019 Stock Stage 1 — 360kW / 620Nm tuned by PTEB",
  },
];

const CAPABILITIES = [
  { label: "Rolling Anti-Lag", desc: "Keeps boost between shifts for zero throttle lag" },
  { label: "Multi-Map", desc: "Switch between race, street, and valet maps on the fly" },
  { label: "Adjustable Launch", desc: "Tunable launch RPM and slip control for drag starts" },
  { label: "Boost By Gear", desc: "Torque curve shaped to traction limits per gear" },
  { label: "Advanced Traction", desc: "Engine-side traction management beyond factory limits" },
  { label: "Immobiliser Map", desc: "Deactivate factory immobiliser for track and race builds" },
  { label: "True Flex Fuel", desc: "Full E85 and blended ethanol calibration" },
  { label: "Motorsport Driveability", desc: "Flat-foot shifting, no-lift shift, throttle blip" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ptebtuning.com" },
    { "@type": "ListItem", position: 2, name: "Our Work", item: "https://ptebtuning.com/our-work" },
  ],
};

const buildSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "PTEB Tuning — Featured Dyno Results",
  description: "Documented dyno results from PTEB Tuning custom calibrations",
  itemListElement: BUILDS.map((b, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: `${b.car} ${b.variant} — ${b.stage}`,
      description: `${b.power} / ${b.torque} — ${b.gain}. ${b.mods.join(", ")}.`,
    },
  })),
};

export default function OurWorkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema) }}
      />

      {/* ── Page hero ─────────────────────────────────────────────────── */}
      <section
        className="relative border-b border-[#1E1E1E] overflow-hidden h-[70vh] min-h-[380px] sm:min-h-[500px] flex items-end"
        style={{ backgroundColor: '#0a0a0a' }}
        aria-labelledby="ow-hero-heading"
      >
        {/* Image — full width on mobile, 80% anchored right on desktop */}
        <div className="absolute top-0 right-0 w-full sm:w-[80%] h-full" aria-hidden="false">
          <Image
            src="/c63drift.jpeg"
            alt="Mercedes C63 AMG — PTEB tuned, road verified"
            fill
            priority
            quality={60}
            className="object-cover object-[center_45%] [@media(orientation:portrait)]:object-contain [@media(orientation:portrait)]:object-center"
            sizes="(max-width: 640px) 100vw, 80vw"
          />
          {/* Left-edge fade */}
          <div className="absolute inset-y-0 left-0 w-48" style={{ background: 'linear-gradient(to right, #0a0a0a, transparent)' }} aria-hidden="true" />
          {/* Bottom-edge fade */}
          <div className="absolute inset-x-0 bottom-0 h-40" style={{ background: 'linear-gradient(to top, #0a0a0a, transparent)' }} aria-hidden="true" />
        </div>

        {/* Text */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-16 pt-28">
          <nav className="flex items-center gap-2 text-xs text-[#6B7280] mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors" style={{ color: '#6B7280' }}>Home</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span style={{ color: '#9CA3AF' }}>Our Work</span>
          </nav>
          <p className="eyebrow mb-4">
            Dyno-Logged · Road-Verified
          </p>
          <h1
            id="ow-hero-heading"
            className="text-3xl sm:text-5xl md:text-7xl font-black uppercase leading-none"
            style={{ color: '#ffffff' }}
          >
            Our Work
          </h1>
        </div>
      </section>

      {/* ── Build cards ───────────────────────────────────────────────── */}
      <section className="py-12 sm:py-20" style={{ backgroundColor: '#0a0a0a' }} aria-labelledby="builds-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2
            id="builds-heading"
            className="text-3xl font-black uppercase mb-10"
            style={{ color: '#ffffff' }}
          >
            Featured Builds
          </h2>
          <BuildsGrid builds={BUILDS} />
        </div>
      </section>

      {/* ── Capabilities ──────────────────────────────────────────────── */}
      <section className="py-12 sm:py-20 border-t border-[#1E1E1E]" style={{ backgroundColor: '#000000' }} aria-labelledby="caps-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <p className="eyebrow mb-4">
              Calibration Features
            </p>
            <h2
              id="caps-heading"
              className="text-4xl font-black uppercase"
              style={{ color: '#ffffff' }}
            >
              What Your Tune Includes
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {CAPABILITIES.map(({ label, desc }) => (
              <div
                key={label}
                className="p-5 border border-[#1E1E1E] hover:border-[#FC222D]/40 transition-colors"
                style={{ backgroundColor: '#0a0a0a' }}
              >
                <h3 className="text-sm font-bold uppercase text-[#FC222D] mb-1.5">{label}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-20 text-center" style={{ backgroundColor: '#FC222D' }} aria-label="Book your tune">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-5xl font-black uppercase mb-4" style={{ color: '#ffffff' }}>
            Your Build. Next.
          </h2>
          <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Send us your platform details and we will build your custom tune.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#000000', color: '#ffffff' }}
          >
            Enquire Now
            <ChevronRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
