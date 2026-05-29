import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, BookOpen, AlertTriangle, CheckCircle } from "lucide-react";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "ECU Tuning Guide: How Dyno Tuning Works, Stage 1 vs Stage 2 vs Stage 3 | PTEB",
  description: "What is ECU tuning and how does it work? This guide explains dyno tuning step-by-step, Stage 1 vs Stage 2 vs Stage 3, flex fuel (E85) tuning, anti-lag, launch control, and performance calibration — written by PTEB's professional tuner.",
  alternates: { canonical: "/tuning-guide" },
  openGraph: {
    title: "ECU Tuning Guide: Stage 1 vs Stage 2 vs Stage 3 & How It Works | PTEB",
    description: "Step-by-step guide to ECU remapping, dyno tuning, flex fuel, and performance calibration — with real dyno results from PTEB. Written by professional tuners.",
    url: "/tuning-guide",
  },
};

const TOC = [
  { id: "what-is-tuning", label: "What Is ECU Tuning?" },
  { id: "how-dyno-works", label: "How Dyno Tuning Works" },
  { id: "stages", label: "Stage 1 vs Stage 2 vs Stage 3" },
  { id: "flex-fuel", label: "Flex Fuel & Ethanol Tuning" },
  { id: "features", label: "Anti-Lag, Launch Control & More" },
  { id: "safety", label: "Safety Considerations" },
  { id: "choosing-tuner", label: "How to Choose a Tuner" },
  { id: "brand-audi", label: "Audi Tuning Guide" },
  { id: "brand-bmw", label: "BMW Tuning Guide" },
  { id: "brand-mercedes", label: "Mercedes Tuning Guide" },
  { id: "brand-volkswagen", label: "Volkswagen Tuning Guide" },
  { id: "brand-porsche", label: "Porsche Tuning Guide" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const BRAND_GUIDES = [
  {
    id: "brand-audi",
    brand: "Audi",
    logo: "/audilogo.jpg",
    tagline: "Precision-engineered for tuning headroom",
    intro:
      "Audi's turbocharged lineup — especially the EA888, DAZA, and EA825 families — are among the most tuner-friendly platforms in Europe. Factory calibrations leave substantial headroom, and the shared architecture across multiple power variants means the hardware is ready; only the software holds them back.",
    platforms: [
      {
        engine: "EA888 Gen3/Gen4",
        models: "A3, S3 8V/8Y, TT, Q3",
        stage1: "240–310 kW",
        stage2: "300–370 kW",
        notes: "Most popular Audi platform. Excellent Stage 1 gains with zero hardware changes.",
      },
      {
        engine: "DAZA (2.5 TFSI)",
        models: "RS3 8V/8Y, TTRS",
        stage1: "290–310 kW",
        stage2: "310–360 kW",
        notes: "5-cylinder unit with enormous turbo. Responds exceptionally well to boost and fuel strategy.",
      },
      {
        engine: "EA825 (4.0 TFSI)",
        models: "RS6, RS7, S8, RSQ8",
        stage1: "480–530 kW",
        stage2: "550–650+ kW",
        notes: "Twin-turbo V8. Responds exceptionally well to E85 fuelling.",
      },
      {
        engine: "EA839 (3.0 TFSI)",
        models: "S4, S5, A6, A7",
        stage1: "290–330 kW",
        stage2: "360–420 kW",
        notes: "Single-scroll turbo inline-6. Great drivability gains, excellent torque curve.",
      },
    ],
    features: ["Boost by gear", "Launch control", "Multi-map", "True flex fuel", "Rolling anti-lag (RS platforms)"],
    ecu: "Bosch MED17 / MG1CS / Continental Simos 18/19",
    color: "#FC222D",
  },
  {
    id: "brand-bmw",
    brand: "BMW",
    logo: "/bmwlogo.png",
    tagline: "Track DNA meets tuning potential",
    intro:
      "BMW's modular engine family — from the B48 in the 330i to the S58 in the M4 Competition — shares engineering DNA that makes every turbocharged BMW a compelling tuning candidate. The B58 in particular has earned its reputation as one of the best production turbo engines ever built.",
    platforms: [
      {
        engine: "B48 (2.0T)",
        models: "120i, 230i, 330i, X3 20i",
        stage1: "180–225 kW",
        stage2: "240–290 kW",
        notes: "Extremely underrated from factory. Stage 1 transforms daily driving character.",
      },
      {
        engine: "N55 / B58 (3.0T)",
        models: "340i, 440i, M240i, M440i, Z4 M40i",
        stage1: "270–320 kW",
        stage2: "370–450+ kW",
        notes: "B58 is one of the most responsive turbo engines to tuning. Stock turbos support enormous power.",
      },
      {
        engine: "S55 (3.0 Twin Turbo)",
        models: "M3 F80, M4 F82/F83",
        stage1: "330–360 kW",
        stage2: "400–450 kW",
        notes: "Great throttle response gains on stock turbos.",
      },
      {
        engine: "S58 (3.0 Twin Turbo)",
        models: "M3 G80, M4 G82/G83, M3 CS",
        stage1: "390–430 kW",
        stage2: "470–550+ kW",
        notes: "Next-gen M engine. Massive turbochargers that reward aggressive fuelling strategy.",
      },
    ],
    features: ["Launch control", "Boost by gear", "Multi-map (Race/Street/Valet)", "Rev limiter lift", "True flex fuel"],
    ecu: "Bosch DME MSD80 / MSD87 / MG1",
    color: "#FC222D",
  },
  {
    id: "brand-mercedes",
    brand: "Mercedes",
    logo: "/mercedeslogo.png",
    tagline: "AMG performance unlocked",
    intro:
      "Mercedes-AMG vehicles are engineered to extreme performance standards from the factory — but still leave measurable headroom. From the screaming M133 4-cylinder in the A45 to the sonorous M157 twin-turbo V8 in the C63, every AMG platform responds to precision calibration.",
    platforms: [
      {
        engine: "M133 (2.0T)",
        models: "A45 AMG, CLA45 AMG",
        stage1: "300–340 kW",
        stage2: "370–420 kW",
        notes: "Excellent gains on stock hardware.",
      },
      {
        engine: "M139 (2.0T)",
        models: "A45S AMG, CLA45S AMG",
        stage1: "340–380 kW",
        stage2: "410–470 kW",
        notes: "Factory output leaves real headroom. Responds aggressively to boost and fuel strategy.",
      },
      {
        engine: "M156 (6.2 NA V8)",
        models: "C63 AMG, E63 AMG (W204/W212)",
        stage1: "380–420 kW",
        stage2: "430–470 kW",
        notes: "Naturally aspirated V8. Throttle response, camshaft strategy, and rev limiters transformed.",
      },
      {
        engine: "M157 (5.5 BiTurbo V8)",
        models: "C63 S, E63, S63 AMG",
        stage1: "420–480 kW",
        stage2: "530–620+ kW",
        notes: "Twin-turbo V8 with enormous low-end torque. Exceptional response across the rev range.",
      },
    ],
    features: ["Launch control", "Multi-map", "Boost by gear", "Race throttle calibration", "Rev limit adjustment", "Torque management per gear"],
    ecu: "Bosch ME9.7 / MED17 / Continental EMS",
    color: "#FC222D",
  },
  {
    id: "brand-volkswagen",
    brand: "Volkswagen",
    logo: "/volkswagenlogo.png",
    tagline: "The EA888 platform — built for gains",
    intro:
      "Volkswagen's EA888 engine architecture underpins some of the most popular tuning platforms in the world — Golf GTI, Golf R, Tiguan R, Arteon R. The shared hardware across a wide power range means every EA888 variant has been engineered to handle more than it's given.",
    platforms: [
      {
        engine: "EA888 Gen3 (2.0 TSI)",
        models: "Golf GTI Mk7/7.5, Tiguan 162TSI",
        stage1: "200–240 kW",
        stage2: "260–310 kW",
        notes: "The global benchmark for affordable turbo tuning. Incredible Stage 1 return on investment.",
      },
      {
        engine: "EA888 Gen3B / Gen4 (2.0 TSI)",
        models: "Golf R Mk7/7.5/8, Arteon R, Tiguan R",
        stage1: "260–310 kW",
        stage2: "320–380 kW",
        notes: "AWD platform with exceptional traction for power deployment.",
      },
      {
        engine: "EA113 (2.0 TSI)",
        models: "Golf 5 GTI, Golf 6 GTI",
        stage1: "175–210 kW",
        stage2: "230–270 kW",
        notes: "Older iron-block 2.0T. Proven platform with strong aftermarket support and cost-effective gains.",
      },
    ],
    features: ["Launch control", "Boost by gear", "Rolling anti-lag (R/GTI platforms)", "Multi-map", "DSG tune available", "True flex fuel"],
    ecu: "Bosch MED17 / Simos 18.1 / Continental",
    color: "#FC222D",
  },
  {
    id: "brand-porsche",
    brand: "Porsche",
    logo: "/porschelogo.png",
    tagline: "Precision engineering, precision tuning",
    intro:
      "Porsche builds some of the world's most capable performance cars from the factory — and still leaves room for the calibrator. From the MA1.21 flat-four in the 718 to the 9A2 twin-turbo flat-six in the 992, every modern Porsche turbo platform responds to precision calibration — and with PDK transmission tuning available alongside engine work, the results are exceptional.",
    platforms: [
      {
        engine: "MA1.21 (2.5T flat-four)",
        models: "718 Cayman S/GTS, 718 Boxster S/GTS",
        stage1: "260–295 kW",
        stage2: "310–360 kW",
        notes: "Controversial 4-cylinder but brilliant to tune. High-revving with strong mid-range response.",
      },
      {
        engine: "9A2 (3.0T flat-six)",
        models: "911 Carrera (992), Macan Turbo, Cayenne",
        stage1: "330–380 kW",
        stage2: "420–490 kW",
        notes: "3.0 twin-turbo flat-six. Exceptional response across the full RPM range.",
      },
      {
        engine: "M96 / M97 (NA flat-six)",
        models: "997 Carrera, 987 Boxster/Cayman",
        stage1: "230–270 kW",
        stage2: "260–300 kW",
        notes: "Naturally aspirated. Throttle mapping, variable cam strategy and rev limit work.",
      },
      {
        engine: "EA839 (3.0 TFSI)",
        models: "Macan S, Cayenne S",
        stage1: "300–340 kW",
        stage2: "370–430 kW",
        notes: "Shared with Audi/VW Group. Excellent platform response.",
      },
    ],
    features: ["PDK gearbox tune", "Launch control", "Multi-map", "Throttle response calibration", "Sport Chrono optimisation", "Boost by gear"],
    ecu: "Bosch Motronic ME9.1 / ME9.8 / MED17 / Continental",
    color: "#FC222D",
  },
];

const FAQ_GUIDE = [
  {
    q: "Will tuning void my car's warranty?",
    a: "In most cases, yes. Modifying the factory ECU calibration constitutes a modification that most manufacturer warranties do not cover. In Australia, however, the ACCC and Australian Consumer Law provide some protections — a dealer must prove that the modification directly caused the fault to deny a warranty claim. Consult your dealer or a consumer rights specialist before tuning a vehicle still under warranty.",
  },
  {
    q: "Can any car be tuned?",
    a: "Any car with an electronically controlled engine can technically be tuned. However, not all ECU platforms have widely available tuning tools. The best platforms for significant gains are modern turbocharged engines: 2.0 TFSI (EA888), N55/S55/B58/S58 (BMW), 2JZ-GTE, EJ20/EJ25 (Subaru), FA20 (Subaru/Toyota), and most modern VAG turbo-petrol and diesel engines.",
  },
  {
    q: "Is ethanol (E85) better than 98 RON for tuning?",
    a: "E85 ethanol has a higher octane rating (~105 RON equivalent), significantly better heat capacity for charge cooling, and allows tuners to run more aggressive ignition advance and boost. On the right platform with appropriate hardware (higher-flow injectors and fuel pump), E85 typically yields 15–25% more power than 98 RON on the same turbo. However, E85 consumes roughly 30–35% more fuel by volume, so running costs increase.",
  },
  {
    q: "What should I do before getting a tune?",
    a: "Before any tune: service the car (fresh oil, plugs, filters), fix all fault codes, check for boost leaks and exhaust leaks, verify the intercooler and hoses are in good condition, and ensure the car has no mechanical issues. A professional tuner like PTEB will perform a pre-health check — but arriving with a well-maintained vehicle speeds up the process and protects the result.",
  },
];

const guideSchema = {
  "name": "How to Get Your Car Tuned — A Complete Guide",
  "description":
    "A step-by-step guide to understanding ECU tuning, choosing the right stage, preparing your vehicle, and selecting a professional tuner.",
  "step": [
    {
      "@type": "HowToStep",
      name: "Understand your goals",
      text: "Determine whether you want more daily-driver power, track performance, or specific features like flex fuel or anti-lag. This determines your tune stage.",
    },
    {
      "@type": "HowToStep",
      name: "Assess your hardware",
      text: "Stage 1 requires no hardware changes. Stage 2 requires downpipe, intercooler, or intake upgrades. Determine your current modification level.",
    },
    {
      "@type": "HowToStep",
      name: "Service and pre-check your vehicle",
      text: "Fresh oil, spark plugs, air filter, and a clean bill of health mechanically. Fix any fault codes before booking.",
    },
    {
      "@type": "HowToStep",
      name: "Choose a qualified tuner",
      text: "Verify the tuner uses a rolling road dyno, provides logging data, and offers road validation. Ask for previous dyno results on your platform.",
    },
    {
      "@type": "HowToStep",
      name: "Book and tune",
      text: "Allow a full day for a custom dyno tune. Expect multiple dyno pulls, fuel and ignition mapping, and road testing.",
    },
  ],
};

const faqSchema = {
  "mainEntity": FAQ_GUIDE.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const articleSchema = {
  "headline": "Complete Car Tuning Guide — ECU Remapping, Dyno Tuning & More",
  "description":
    "Comprehensive guide to ECU tuning, dyno remapping, flex fuel, and performance calibration for turbocharged vehicles.",
  "author": {
    "@type": "Organization",
    name: "PTEB Tuning",
    url: "https://ptebtuning.com",
  },
  publisher: {
    "@type": "Organization",
    name: "PTEB Tuning",
    url: "https://ptebtuning.com",
  },
  about: [
    { "@type": "Thing", name: "ECU tuning" },
    { "@type": "Thing", name: "Engine remapping" },
    { "@type": "Thing", name: "Dyno tuning" },
    { "@type": "Thing", name: "Flex fuel tuning" },
    { "@type": "Thing", name: "Turbo performance" },
  ],
};

const vehiclePlatformsSchema = {
  "@type": "ItemList",
  "name": "Supported ECU Tuning Platforms — PTEB Melbourne",
  "description": "Vehicle makes, models, and engine platforms supported for custom ECU tuning, dyno remapping, and performance calibration at PTEB (Prestige Team Euro Boost), Melbourne, Australia.",
  "numberOfItems": BRAND_GUIDES.reduce((n, b) => n + b.platforms.length, 0),
  "itemListElement": BRAND_GUIDES.flatMap((brand, bi) =>
    brand.platforms.map((p, pi) => ({
      "@type": "ListItem",
      "position": BRAND_GUIDES.slice(0, bi).reduce((n, b) => n + b.platforms.length, 0) + pi + 1,
      "name": `${brand.brand} ${p.engine} ECU Tune — Stage 1: ${p.stage1} / Stage 2: ${p.stage2}`,
      "item": {
        "@type": "Service",
        "name": `${brand.brand} ${p.engine} Custom ECU Tune Melbourne`,
        "serviceType": "ECU Tuning",
        "description": `Custom dyno ECU tuning for ${brand.brand} ${p.engine}. Compatible vehicles: ${p.models}. Stage 1 output: ${p.stage1}. Stage 2 output: ${p.stage2}. ${p.notes}`,
        "provider": {
          "@type": "AutoRepair",
          "name": "Prestige Team Euro Boost",
          "url": "https://ptebtuning.com",
        },
        "areaServed": { "@type": "City", "name": "Melbourne", "addressRegion": "VIC", "addressCountry": "AU" },
        "url": `https://ptebtuning.com/tuning-guide#${brand.id}`,
      },
    }))
  ),
};

const unifiedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ptebtuning.com" },
        { "@type": "ListItem", "position": 2, "name": "Tuning Guide", "item": "https://ptebtuning.com/tuning-guide" },
      ],
    },
    {
      "@type": "TechArticle",
      "headline": articleSchema.headline,
      "description": articleSchema.description,
      "url": "https://ptebtuning.com/tuning-guide",
      "author": articleSchema.author,
      "publisher": articleSchema.publisher,
      "about": articleSchema.about,
    },
    {
      "@type": "HowTo",
      "name": guideSchema.name,
      "description": guideSchema.description,
      "step": guideSchema.step,
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqSchema.mainEntity,
    },
    {
      "@type": "AutoRepair",
      "name": "Prestige Team Euro Boost",
      "image": "https://ptebtuning.com/images/pteb-workshop.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Melbourne",
        "addressRegion": "VIC",
        "addressCountry": "AU"
      }
    }
  ]
};

export default function TuningGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedSchema) }} />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="border-b border-[#2a2a2a] overflow-hidden" style={{ backgroundColor: '#0a0a0a' }} aria-labelledby="guide-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-0 items-center min-h-[560px]">

          {/* Left — text */}
          <div className="pt-32 pb-12 lg:py-28 lg:pr-16" data-animate="fade-up">
            <nav className="flex items-center gap-2 text-xs mb-8" style={{ color: '#6B7280' }} aria-label="Breadcrumb">
              <Link href="/" className="hover:opacity-80 transition-opacity" style={{ color: '#6B7280' }}>Home</Link>
              <ChevronRight size={12} aria-hidden="true" />
              <span style={{ color: '#9CA3AF' }}>Tuning Guide</span>
            </nav>
            <div className="eyebrow mb-4" style={{ color: '#e63946' }}>
              <BookOpen size={12} aria-hidden="true" />
              Complete reference
            </div>
            <h1
              id="guide-hero-heading"
              className="text-6xl sm:text-7xl md:text-8xl font-black uppercase text-white leading-tight mb-6"
            >
              Car Tuning
              <br />
              <span className="text-[#e63946]">Guide</span>
            </h1>
            <p className="text-lg text-[#9CA3AF] max-w-lg leading-relaxed">
              Everything you need to know about ECU tuning, dyno remapping, flex fuel, and performance
              calibration — written by professional tuners with real dyno results to back it up.
            </p>
          </div>

          {/* Right — image */}
          <div className="hidden lg:flex items-center justify-end py-16">
            <div className="relative w-full max-w-[580px] xl:max-w-[640px] aspect-[3/2] overflow-hidden">
              <Image
                src="/teslaui.jpg"
                alt="ECU tuning interface — PTEB performance calibration"
                fill
                priority
                quality={90}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 0vw, 640px"
              />
              {/* Fade all four edges into the page background */}
              <div className="absolute inset-y-0 left-0 w-32" style={{ background: 'linear-gradient(to right, #0a0a0a, transparent)' }} aria-hidden="true" />
              <div className="absolute inset-y-0 right-0 w-32" style={{ background: 'linear-gradient(to left, #0a0a0a, transparent)' }} aria-hidden="true" />
              <div className="absolute inset-x-0 top-0 h-16" style={{ background: 'linear-gradient(to bottom, #0a0a0a, transparent)' }} aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 h-16" style={{ background: 'linear-gradient(to top, #0a0a0a, transparent)' }} aria-hidden="true" />
            </div>
          </div>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid lg:grid-cols-[280px_1fr] gap-12">

        {/* ── Table of Contents (sticky sidebar) ──────────────────────── */}
        <aside aria-label="Table of contents" className="hidden lg:block">
          <div className="sticky top-24">
            <h2
              className="text-xs font-bold tracking-[0.2em] uppercase text-[#9CA3AF] mb-4"
             
            >
              Contents
            </h2>
            <nav>
              <ol className="space-y-1" role="list">
                {TOC.map(({ id, label }, i) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="flex items-center gap-2 text-sm text-[#6B7280] hover:text-white transition-colors py-1 group"
                    >
                      <span className="text-[10px] text-[#e63946] font-bold w-5 shrink-0 group-hover:text-[#e63946]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </aside>

        {/* ── Guide content ────────────────────────────────────────────── */}
        <article className="prose-custom max-w-none" itemScope itemType="https://schema.org/TechArticle" data-animate="stagger">

          {/* Section 1 */}
          <section id="what-is-tuning" className="mb-16 scroll-mt-24" aria-labelledby="s1-heading" data-animate="fade-up">
            <div className="w-10 h-0.5 bg-[#e63946] mb-4" aria-hidden="true" />
            <h2
              id="s1-heading"
              className="text-3xl sm:text-4xl font-black uppercase text-white mb-6"
             
            >
              What Is ECU Tuning?
            </h2>
            <div className="space-y-4 text-sm text-[#9CA3AF] leading-relaxed">
              <p>
                <strong className="text-white">ECU tuning</strong> (also called engine remapping,
                chip tuning, or custom calibration) is the process of modifying the software inside
                your car&apos;s Engine Control Unit (ECU) to alter how the engine operates.
                Every modern turbocharged car leaves the factory with conservative calibration —
                manufacturers account for different fuel quality markets, emissions regulations,
                and reliability margins that protect them across a global fleet.
              </p>
              <p>
                A professional tuner unlocks this headroom by rewriting key parameters: boost
                pressure targets, fuel injection timing and quantity, ignition advance, rev limiters,
                turbo wastegate duty cycles, and dozens of other maps that govern engine behaviour.
                The result is an engine running closer to its mechanical potential — more power,
                more torque, and often improved throttle response.
              </p>
              <p>
                <strong className="text-white">ECU remapping is not the same as a generic chip tune.</strong>{" "}
                Off-the-shelf files apply fixed modifications without accounting for your car&apos;s
                specific wear, fuel quality, ambient conditions, or hardware. A custom dyno tune —
                like those performed by PTEB — is calibrated specifically for your vehicle on the
                day, verified under real load on a rolling road.
              </p>
              <div className="p-4 border-l-4 border-[#e63946] bg-[#111111] my-6">
                <p className="text-white font-medium mb-1">Key fact</p>
                <p>
                  Modern turbocharged engines — particularly from Audi, BMW, and Volkswagen — are
                  engineered with significant factory headroom. The 2.0 TFSI EA888 engine, for
                  example, shares core architecture across vehicles rated from 150 hp to 310+ hp.
                  The hardware is largely identical; the calibration determines the output.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="how-dyno-works" className="mb-16 scroll-mt-24" aria-labelledby="s2-heading" data-animate="fade-up">
            <div className="w-10 h-0.5 bg-[#e63946] mb-4" aria-hidden="true" />
            <h2
              id="s2-heading"
              className="text-3xl sm:text-4xl font-black uppercase text-white mb-6"
             
            >
              How Dyno Tuning Works
            </h2>
            <div className="space-y-4 text-sm text-[#9CA3AF] leading-relaxed">
              <p>
                A <strong className="text-white">rolling road dynamometer (dyno)</strong> measures
                the power and torque your engine delivers to the wheels in real time. The car sits
                on rollers that simulate road load — the tuner can safely run the car at full
                throttle across the RPM range while logging and modifying the calibration in real
                time via an OBD2 or JTAG connection.
              </p>
              <h3
                className="text-xl font-bold uppercase text-white mt-6 mb-3"
               
              >
                The PTEB Dyno Tuning Process
              </h3>
              <ol className="space-y-3 list-none">
                {[
                  { n: "1", title: "Pre-Health Check", text: "Before touching the calibration, we check for fault codes, boost and exhaust leaks, injector condition, fuel pressure, and overall mechanical health. Tuning a sick engine compounds problems." },
                  { n: "2", title: "Baseline Run", text: "A stock (or current tune) pull establishes the starting point. We log boost, lambda (air-fuel ratio), timing, and intake air temperature (IAT) across the full RPM range." },
                  { n: "3", title: "Calibration Iteration", text: "The tuner adjusts boost targets, fuel tables, and ignition maps incrementally. Each change is followed by a dyno pull to measure the effect. This is repeated until the map is optimised." },
                  { n: "4", title: "Repeatability Verification", text: "Multiple back-to-back pulls confirm the tune is consistent — not a one-time result that degrades due to heat soak or timing pull. Lambda stability and knock margin are verified." },
                  { n: "5", title: "Road Validation", text: "The car is driven on real roads to confirm the tune behaves correctly under variable conditions — partial throttle, transient loads, cold starts, and temperature cycling." },
                ].map(({ n, title, text }) => (
                  <li key={n} className="flex gap-4">
                    <span
                      className="text-2xl font-black text-[#e63946]/40 shrink-0 leading-none"
                     
                      aria-hidden="true"
                    >
                      {n}
                    </span>
                    <div>
                      <strong className="text-white">{title}</strong>
                      <p className="mt-1">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Section 3 */}
          <section id="stages" className="mb-16 scroll-mt-24" aria-labelledby="s3-heading" data-animate="fade-up">
            <div className="w-10 h-0.5 bg-[#e63946] mb-4" aria-hidden="true" />
            <h2
              id="s3-heading"
              className="text-3xl sm:text-4xl font-black uppercase text-white mb-6"
             
            >
              Stage 1 vs Stage 2 vs Stage 3
            </h2>
            <div className="space-y-4 text-sm text-[#9CA3AF] leading-relaxed">
              <p>
                The &quot;stage&quot; system describes the level of supporting hardware modifications
                a tune requires. There is no universal industry standard — different tuning companies
                define stages differently — but the following is the broadly accepted framework.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 my-6">
                {[
                  {
                    stage: "Stage 1",
                    colour: "#e63946",
                    mods: "Software only",
                    gains: "+20–30% power",
                    req: "Stock hardware, 98 RON fuel",
                    notes: "No hardware changes required. Safest and simplest. Most turbocharged European cars see 20–30% power gains on stock hardware alone.",
                  },
                  {
                    stage: "Stage 2",
                    colour: "#e63946",
                    mods: "Performance hardware",
                    gains: "+30–40% power",
                    req: "Downpipe, intercooler, intake",
                    notes: "Requires a high-flow downpipe (removes or replaces the catalytic converter), upgraded intercooler, and typically an intake upgrade. Opens up significantly more headroom.",
                  },
                  {
                    stage: "Stage 3+",
                    colour: "#e63946",
                    mods: "Turbo / fuelling upgrade",
                    gains: "+45–65% power",
                    req: "Upgraded turbo, injectors, fuel pump",
                    notes: "Larger turbo, high-flow injectors, upgraded fuel pump, and often supporting cooling and drivetrain upgrades. Significant expense but transformative results.",
                  },
                ].map(({ stage, gains, req, notes }) => (
                  <div key={stage} className="p-5 border border-[#1E1E1E] bg-[#0D0D0D]">
                    <h3
                      className="text-xl font-black uppercase text-[#e63946] mb-2"
                     
                    >
                      {stage}
                    </h3>
                    <p className="text-white font-semibold text-base mb-1">{gains}</p>
                    <p className="text-[10px] text-[#6B7280] mb-3 uppercase tracking-wider">{req}</p>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed">{notes}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#111111] border border-[#2A2A2A]">
                <AlertTriangle size={15} className="text-yellow-500 mt-0.5 shrink-0" aria-hidden="true" />
                <p className="text-xs text-[#9CA3AF]">
                  <strong className="text-white">Stage definitions are platform-dependent.</strong>{" "}
                  A &quot;Stage 2&quot; on an Audi S3 means something different from a Stage 2 on a
                  BMW M3. Always discuss your specific platform with your tuner before purchasing
                  hardware.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="flex-fuel" className="mb-16 scroll-mt-24" aria-labelledby="s4-heading" data-animate="fade-up">
            <div className="w-10 h-0.5 bg-[#e63946] mb-4" aria-hidden="true" />
            <h2
              id="s4-heading"
              className="text-3xl sm:text-4xl font-black uppercase text-white mb-6"
             
            >
              Flex Fuel &amp; Ethanol Tuning
            </h2>
            <div className="space-y-4 text-sm text-[#9CA3AF] leading-relaxed">
              <p>
                <strong className="text-white">Ethanol (E85)</strong> is a high-octane fuel blend
                of 85% ethanol and 15% petrol. Its effective octane rating (~105 RON equivalent)
                is significantly higher than 98 RON petrol, allowing tuners to advance ignition
                timing more aggressively, run higher boost, and extract substantially more power
                from the same turbo.
              </p>
              <p>
                Ethanol also acts as a charge cooler. When injected, it absorbs heat from the
                intake charge (due to its high latent heat of vaporisation — approximately 5× that
                of petrol), lowering intake temperatures and reducing knock susceptibility. This is
                a major advantage on track and in hot Australian conditions.
              </p>
              <h3
                className="text-xl font-bold uppercase text-white mt-6 mb-3"
               
              >
                Hardware Requirements for E85
              </h3>
              <ul className="space-y-2">
                {[
                  "High-flow fuel injectors (E85 requires ~30% more fuel volume than petrol)",
                  "Upgraded fuel pump (to maintain pressure and flow at higher duty cycles)",
                  "Ethanol-compatible fuel lines and seals (most modern cars use compatible materials)",
                  "Ethanol content sensor (for true flex fuel operation across blend ratios)",
                  "Supporting tune calibrated specifically for E85 or the blend range",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle size={13} className="text-[#e63946] mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                <strong className="text-white">True flex fuel</strong> allows the ECU to
                automatically adjust calibration based on the ethanol content detected in the fuel
                tank — meaning you can run anything from E20 to E85 and the engine adapts in real
                time. This requires an ethanol content sensor and a calibration that covers the full
                blend range, not just pure E85.
              </p>
              <div className="p-4 border-l-4 border-[#e63946] bg-[#111111] my-6">
                <p className="text-white font-medium mb-1">E85 power gains</p>
                <p>
                  On a Stage 2 platform with flex fuel, gains of 20–30% over the equivalent
                  98 RON tune are common. On the right platform (e.g. 2.0 TFSI, S55, B58), an
                  E85 tune can add 80–120 kW over factory power on a stock or mildly modified
                  turbocharger.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="features" className="mb-16 scroll-mt-24" aria-labelledby="s5-heading" data-animate="fade-up">
            <div className="w-10 h-0.5 bg-[#e63946] mb-4" aria-hidden="true" />
            <h2
              id="s5-heading"
              className="text-3xl sm:text-4xl font-black uppercase text-white mb-6"
             
            >
              Anti-Lag, Launch Control &amp; Advanced Features
            </h2>
            <div className="space-y-6 text-sm text-[#9CA3AF] leading-relaxed">
              {[
                {
                  title: "Rolling Anti-Lag (RAL)",
                  text: "Rolling anti-lag allows the turbo to maintain full boost while you are on throttle without the car accelerating — at a specific RPM threshold, the turbo is held at peak boost pressure while driving. When you release the RAL button, the car slingshots forward with instant boost already fully built. Unlike stationary anti-lag used in rally racing, RAL is a driving feature that eliminates turbo lag between shifts and delivers instant response on demand.",
                },
                {
                  title: "Adjustable Launch Control",
                  text: "Adjustable launch control allows you to preset the RPM limiter you want to launch at. The system holds the engine at that target RPM while building maximum boost. When you release the clutch, the car launches at full acceleration from a pre-charged, fully-spooled state. The adjustable RPM lets you optimise for traction conditions on the day.",
                },
                {
                  title: "Boost By Gear",
                  text: "Boost by gear limits the boost you make in 1st and 2nd gear so each gear shift doesn't require the turbo to rebuild from zero. Instead of boost dropping and climbing again after every shift, it's already at peak as soon as you change gear — you're constantly at maximum boost through the entire run. This protects the drivetrain in lower gears where forces are highest, and delivers faster acceleration at every gear change.",
                },
                {
                  title: "Multi-Map Switching",
                  text: "Multiple calibration maps stored in the ECU allow the driver to switch between different tune modes — for example, a full-power race map on 98 RON, a conservative street map, an E85 map, and a valet/economy map. Switching is typically done via a specific button sequence, cruise control stalk, or optional multi-map switch.",
                },
              ].map(({ title, text }) => (
                <div key={title}>
                  <h3
                    className="text-xl font-bold uppercase text-white mb-2"
                   
                  >
                    {title}
                  </h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7 */}
          <section id="safety" className="mb-16 scroll-mt-24" aria-labelledby="s7-heading" data-animate="fade-up">
            <div className="w-10 h-0.5 bg-[#e63946] mb-4" aria-hidden="true" />
            <h2
              id="s7-heading"
              className="text-3xl sm:text-4xl font-black uppercase text-white mb-6"
             
            >
              Safety Considerations
            </h2>
            <div className="space-y-4 text-sm text-[#9CA3AF] leading-relaxed">
              <p>
                A tune on your vehicle can and will increase cylinder pressure, and it may expose
                weaknesses that were not visible before. A tune demands every component and every
                sensor to be working at its optimal peak performance to deliver the result it is
                calibrated for. Components with existing wear or tear that you don&apos;t see beforehand
                can and may fail after a tune — that doesn&apos;t mean the tune is bad. It means the car
                could not keep up with what the tune requires. A professionally built calibration
                manages this within the mechanical limits of the platform.
              </p>
              <h3
                className="text-xl font-bold uppercase text-white mt-6 mb-4"
               
              >
                What a Professional Tune Controls
              </h3>
              <ul className="space-y-3">
                {[
                  { title: "Knock protection", desc: "Knock (engine ping) is the primary cause of piston and bearing damage. A proper tune uses real-time knock sensor feedback and conservative ignition timing margins to prevent this — especially at high loads." },
                  { title: "Lambda (AFR) safety", desc: "Running lean (too little fuel relative to air) causes catastrophic overheating and engine damage. Every PTEB tune verifies stable, safe lambda values across the full load map — richer on boost for safety margin." },
                  { title: "Boost pressure limits", desc: "Overboosting beyond the turbocharger's safe operating map or the intercooler's capacity causes heat soak, compressor surge, and bearing wear. Boost targets are set within turbo efficiency maps." },
                  { title: "Thermal management", desc: "IAT limits are monitored. Maps automatically pull timing or boost if intake temperatures exceed safe thresholds, protecting the engine under demanding conditions." },
                  { title: "Torque limiters by gear", desc: "Boost-by-gear and torque management protect the gearbox, driveshafts, and differentials by limiting torque output in lower gears where multiplication forces are highest." },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-[#e63946] mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <strong className="text-white">{title}:</strong>{" "}{desc}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section id="choosing-tuner" className="mb-16 scroll-mt-24" aria-labelledby="s8-heading" data-animate="fade-up">
            <div className="w-10 h-0.5 bg-[#e63946] mb-4" aria-hidden="true" />
            <h2
              id="s8-heading"
              className="text-3xl sm:text-4xl font-black uppercase text-white mb-6"
             
            >
              How to Choose a Tuner
            </h2>
            <div className="space-y-4 text-sm text-[#9CA3AF] leading-relaxed">
              <p>
                Choosing the wrong tuner is more damaging than no tune. The ECU calibration
                directly controls your engine&apos;s fuelling, timing, and boost. A poorly executed
                tune can destroy an engine that would otherwise last hundreds of thousands of
                kilometres.
              </p>
              <h3
                className="text-xl font-bold uppercase text-white mt-6 mb-4"
               
              >
                What to Ask Before Booking
              </h3>
              <ul className="space-y-3">
                {[
                  "What type of dyno do you use?",
                  "Can I see previous dyno results on my specific platform? (BMW S55, Audi DAZA, etc.)",
                  "Do you provide full data logs? (Lambda, timing, boost, IATs — not just a power curve.)",
                  "Is there a road validation phase after the dyno session? (Depends on the car, platform, and what you're after.)",
                  "What happens if I'm not satisfied or need revisions?",
                  "Do you perform a pre-health check before tuning?",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-2">
                    <ChevronRight size={13} className="text-[#e63946] mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-5 border border-[#e63946]/30 bg-[#e63946]/5">
                <h3
                  className="text-base font-black uppercase text-white mb-2"
                 
                >
                  PTEB Tuning Standards
                </h3>
                <p className="text-xs leading-relaxed">
                  At PTEB, every tune includes: pre-health check, multiple dyno pulls with full
                  data logging (boost, lambda, timing, IATs), road validation, and a dyno graph
                  provided with your results. We tune on Dyno Innovations rolling road equipment
                  and log via OBD and proprietary tools depending on the platform.
                </p>
              </div>
            </div>
          </section>

          {/* Brand Guides */}
          {BRAND_GUIDES.map((brand) => (
            <section key={brand.id} id={brand.id} className="mb-16 scroll-mt-24" aria-labelledby={`${brand.id}-heading`} data-animate="fade-up">
              <div className="w-10 h-0.5 bg-[#e63946] mb-4" aria-hidden="true" />
              <div className="flex items-center gap-5 mb-2">
                <Image
                  src={brand.logo}
                  alt={`${brand.brand} logo`}
                  width={64}
                  height={64}
                  className="h-12 w-auto object-contain opacity-90"
                />
                <h2
                  id={`${brand.id}-heading`}
                  className="text-3xl sm:text-4xl font-black uppercase text-white"
                 
                >
                  {brand.brand} Tuning Guide
                </h2>
              </div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#e63946] mb-6">{brand.tagline}</p>
              <p className="text-sm text-[#9CA3AF] leading-relaxed mb-8">{brand.intro}</p>

              {/* Platform table */}
              <h3 className="text-xl font-black uppercase text-white mb-4">
                Supported Platforms &amp; Power Targets
              </h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <caption className="sr-only">{brand.brand} tuning platforms and expected power gains</caption>
                  <thead>
                    <tr className="border-b border-[#2A2A2A]">
                      {["Engine", "Models", "Notes"].map((h) => (
                        <th key={h} scope="col" className="text-left py-3 px-3 text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1A1A1A]">
                    {brand.platforms.map((p) => (
                      <tr key={p.engine} className="hover:bg-[#111111] transition-colors">
                        <td className="py-3 px-3 text-xs text-white font-semibold whitespace-nowrap">{p.engine}</td>
                        <td className="py-3 px-3 text-xs text-[#9CA3AF]">{p.models}</td>
                        <td className="py-3 px-3 text-xs text-[#6B7280]">{p.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Features + ECU */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-5 border border-[#1E1E1E] bg-[#0D0D0D]">
                  <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#9CA3AF] mb-3">
                    Available Tuning Features
                  </h4>
                  <ul className="space-y-2">
                    {brand.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                        <CheckCircle size={12} className="text-[#e63946] shrink-0" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-5 border border-[#1E1E1E] bg-[#0D0D0D]">
                  <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#9CA3AF] mb-3">
                    ECU Platforms
                  </h4>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed">{brand.ecu}</p>
                  <div className="mt-4 pt-4 border-t border-[#1E1E1E]">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e63946] hover:gap-3 transition-all"
                    >
                      Enquire about your {brand.brand} <ChevronRight size={12} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* FAQ */}
          <section id="faq" className="mb-8 scroll-mt-24" aria-labelledby="guide-faq-heading" data-animate="fade-up">
            <div className="w-10 h-0.5 bg-[#e63946] mb-4" aria-hidden="true" />
            <h2
              id="guide-faq-heading"
              className="text-3xl sm:text-4xl font-black uppercase text-white mb-8"
             
            >
              Frequently Asked Questions
            </h2>
            <FaqAccordion items={FAQ_GUIDE} />
          </section>

          {/* CTA */}
          <section className="mt-12 p-8 border border-[#e63946]/30 bg-[#0D0D0D] text-center" data-animate="fade-up">
            <h2
              className="text-3xl font-black uppercase text-white mb-3"
             
            >
              Ready to Tune Your Car?
            </h2>
            <p className="text-sm text-[#9CA3AF] mb-6">
              Talk to us about your platform. We will pre-approve your vehicle and outline exactly
              what your tune will deliver.
            </p>
            <Link
              href="/contact"
              className="btn-primary"
            >
              Get Your Quote
              <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </section>
        </article>
      </div>
    </>
  );
}
