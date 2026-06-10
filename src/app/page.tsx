import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ChevronRight, Phone, Search, BarChart2, ShieldCheck, FileText } from "lucide-react";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ReviewsCarousel } from "@/components/home/ReviewsCarousel";

const SocialFeed = dynamic(
  () => import("@/components/home/SocialFeed").then((m) => m.SocialFeed),
  { loading: () => <div className="h-64 bg-[#0D0D0D] animate-pulse rounded" /> }
);

export const metadata: Metadata = {
  title: "ECU Tuning Melbourne | Custom Dyno Tune — PTEB",
  description: "Melbourne's specialist ECU tuning workshop. Custom dyno-mapped tunes for Audi, BMW, VW, Mercedes & Porsche — all results logged and road-verified.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "ECU Tuning Melbourne | Prestige Team Euro Boost",
    description: "Custom ECU & TCU remapping, flex fuel, anti-lag, launch control. 500+ cars dyno-tuned in Melbourne. Book a free pre-approval today.",
    url: "/",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ptebtuning.com/#organization",
      "name": "Prestige Team Euro Boost",
      "alternateName": "PTEB Tuning",
      "url": "https://ptebtuning.com",
      "logo": "https://ptebtuning.com/logo.png",
      "description": "Melbourne's specialist ECU and TCU tuning workshop. PTEB delivers fully custom dyno-mapped calibrations for European performance vehicles — Audi, BMW, Volkswagen, Mercedes-AMG, and Porsche. 4.9 Google rating.",
      "areaServed": { "@type": "Place", "name": "Worldwide" },
      "address": { "@type": "PostalAddress", "streetAddress": "168 McIntyre Rd", "addressLocality": "Sunshine North", "addressRegion": "VIC", "postalCode": "3020", "addressCountry": "AU" },
      "contactPoint": { "@type": "ContactPoint", "telephone": "+61422300859", "contactType": "customer service", "availableLanguage": "English" },
      "sameAs": [
        "https://instagram.com/ptebtuning",
        "https://www.tiktok.com/@prestigeteameuroboost"
      ],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "48", "bestRating": "5" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does ECU tuning cost in Melbourne?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing depends on your platform, modification level, and tune complexity. Stage 1 software-only remaps are the most affordable entry point. Stage 2 and Stage 3 tunes require supporting hardware and are priced accordingly. Contact us for a free pre-approval and exact quote with no obligation."
          }
        },
        {
          "@type": "Question",
          "name": "Which cars does PTEB Tuning specialise in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PTEB Tuning specialises in European turbocharged vehicles: Audi (EA888, DAZA, EA825, EA839), BMW (B48, B58, N55, S55, S58), Volkswagen (Golf GTI, Golf R, Tiguan R), Mercedes-AMG (A45, CLA45, C63), and Porsche (911, Macan, Cayenne). Contact us to confirm your specific platform and engine code."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between Stage 1, Stage 2, and Stage 3 tuning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Stage 1 is a software-only ECU remap — no hardware changes needed, typically delivers 20–30% power gains on a stock car. Stage 2 requires a downpipe, upgraded intercooler, and/or intake to unlock further gains (30–40% increase). Stage 3 involves a full hardware build: upgraded turbocharger, high-flow injectors, fuelling system upgrades, and flex fuel capability — delivering maximum power potential."
          }
        }
      ]
    }
  ]
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://ptebtuning.com/#webpage",
  url: "https://ptebtuning.com",
  name: "ECU Tuning Melbourne — Custom Dyno Tune | PTEB",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "#speakable-about", "#homepage-faq"],
  },
};

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "PTEB Tuning — Melbourne's ECU Remapping Specialist",
  description: "PTEB Tuning showcase: custom ECU and TCU remapping for European performance vehicles in Melbourne. Audi, BMW, Volkswagen, Mercedes-AMG, Porsche — all results dyno-logged and road-verified.",
  thumbnailUrl: "https://ptebtuning.com/og-image.png",
  contentUrl: "https://ptebtuning.com/hero.mp4",
  uploadDate: "2025-01-01",
  duration: "PT0M30S",
  publisher: { "@id": "https://ptebtuning.com/#business" },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      {/* Hero Section */}
      <section className="hero h-[100dvh] relative flex items-center overflow-hidden bg-[#0a0a0a]">
        <Image
          src="/golfr-hero.jpg"
          alt=""
          fill
          priority
          quality={60}
          className="object-cover [@media(orientation:portrait)]:object-contain brightness-[0.35]"
          aria-hidden="true"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 50%, rgba(0,0,0,0.9) 100%)' }} aria-hidden="true" />


        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <p className="eyebrow mb-6" style={{ color: '#ffffff', opacity: 0.5 }}>
              <span className="block w-5 h-px bg-white shrink-0" aria-hidden="true" />
              Melbourne, Victoria
            </p>

            <h1
              className="text-white mb-6 font-black leading-none"
              style={{ fontSize: 'clamp(2.2rem, 8vw, 6.5rem)' }}
            >
              Prestige Team<br />
              <span className="text-[#FC222D]">Euro Boost</span>
            </h1>

            <p className="text-base text-[#9CA3AF] mb-6 sm:mb-10 max-w-lg leading-relaxed" style={{ letterSpacing: '0.01em' }}>
              Melbourne&apos;s specialist for custom ECU & TCU remapping on European performance cars.
              BMW, Audi, VW, Mercedes, Porsche — every result dyno-logged and road-verified.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FC222D] text-white text-sm font-bold tracking-widest uppercase hover:bg-[#CC1B25] transition-colors w-full sm:w-auto"
              >
                Book Your Tune
                <ChevronRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="/tuning-guide"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-bold tracking-widest uppercase hover:bg-white/10 hover:border-white/60 transition-all w-full sm:w-auto"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40" aria-hidden="true">
          <ChevronRight className="rotate-90" size={32} />
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-[#111] border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-row md:flex-wrap md:items-center md:justify-between gap-2 sm:gap-3 md:gap-x-8 md:gap-y-2 py-3">
            {[
              { icon: "★", text: "Rated Top ECU Tuner in Melbourne", href: "https://share.google/llErYNUiUHo3MqDS2" },
              { icon: "✓", text: "Every Car Dyno-Logged & Road-Verified", href: undefined },
              { icon: "◎", text: "Fully Custom Maps — Never Off-the-Shelf", href: undefined },
              { icon: "⟳", text: "Reply Within 24 Hours", href: undefined },
            ].map(({ icon, text, href }) => (
              <div key={text} className="flex items-center gap-2 shrink-0">
                <span className="text-[#FC222D] text-xs" aria-hidden="true">{icon}</span>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-[10px] font-medium tracking-wide text-[#9CA3AF] whitespace-nowrap hover:text-white transition-colors underline underline-offset-2">{text}</a>
                ) : (
                  <span className="text-[10px] font-medium tracking-wide text-[#9CA3AF] whitespace-nowrap">{text}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Car Brand Expertise Section */}
      <section className="py-12 sm:py-20 bg-black border-y border-[#2a2a2a]" data-scroll-reveal aria-labelledby="brands-heading">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-16" data-reveal-child>
            <h2
              id="brands-heading"
              className="text-white mb-4 text-3xl sm:text-4xl font-black uppercase"
             
            >
              Our Expertise
            </h2>
            <p className="text-[#888888]">Trusted by Europe&apos;s finest. Specializing in precision tuning for the world&apos;s best automotive brands.</p>
          </div>

          <div className="grid grid-cols-5 gap-2 sm:gap-6 items-center max-w-5xl mx-auto">
            {[
              { name: "Audi", logo: "/audilogo.jpg", href: "/tuning-guide#brand-audi" },
              { name: "BMW", logo: "/bmwlogo.png", href: "/tuning-guide#brand-bmw" },
              { name: "Mercedes", logo: "/mercedeslogo.png", href: "/tuning-guide#brand-mercedes" },
              { name: "VW", logo: "/volkswagenlogo.svg", href: "/tuning-guide#brand-volkswagen" },
              { name: "Porsche", logo: "/porschelogo.png", href: "/tuning-guide#brand-porsche" },
            ].map((brand) => (
              <Link
                key={brand.name}
                href={brand.href}
                className="group flex flex-col items-center gap-2 p-2 sm:p-4 bg-[#0a0a0a] border border-[#2a2a2a] hover:border-[#FC222D] hover:bg-[#111111] transition-all duration-300"
                title={`${brand.name} ECU Tuning & Performance Services`}
              >
                <div className="h-10 sm:h-16 flex items-center justify-center w-full">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={80}
                    height={48}
                    className="h-8 sm:h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    unoptimized={brand.logo.endsWith(".svg")}
                  />
                </div>
                <span className="text-[9px] sm:text-xs font-bold text-[#6B7280] group-hover:text-[#FC222D] transition-colors uppercase tracking-wider text-center leading-tight">
                  {brand.name}
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Services Overview */}
      <section className="py-14 sm:py-24 bg-[#111111]" data-scroll-reveal aria-labelledby="services-heading">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-12" data-reveal-child>
            <h2
              id="services-heading"
              className="text-white text-3xl sm:text-4xl font-black uppercase"
            >
              ECU Tuning Services &amp; Performance Calibration
            </h2>
            <p className="text-[#888888] mt-3 max-w-xl">Custom dyno tuning, engine rebuilding, and advanced performance parts for European vehicles.</p>
          </div>

          <div className="divide-y divide-[#1a1a1a]" data-reveal-child>
            {[
              {
                num: "01",
                title: "Custom ECU & TCU Tuning",
                desc: "Precision remapping on our in-house dyno — boost, fuelling, ignition, launch control, anti-lag, flex fuel. Every result logged and road-verified.",
                href: "/tuning-guide",
                cta: "View Services",
              },
              {
                num: "02",
                title: "DSG & Transmission Service",
                desc: "Specialist repair and calibration of VW Group dual-clutch transmissions — DQ200, DQ250, DQ381 and beyond. Mechatronic replacement, software flash, and full drivetrain diagnostics.",
                href: "/services/dsg-mechatronic-repair",
                cta: "View Service",
              },
              {
                num: "03",
                title: "Mechatronic Repair",
                desc: "DSG mechatronic unit rebuild and replacement. We stock and service units for the full VW Group range. Genuine diagnosis before any part is replaced.",
                href: "/services/dsg-mechatronic-repair",
                cta: "View Service",
              },
              {
                num: "04",
                title: "Engine Rebuilding",
                desc: "From routine maintenance to full Stage 3+ performance builds, every engine is treated with the same obsessive attention to detail.",
                href: "/contact",
                cta: "Enquire",
              },
            ].map(({ num, title, desc, href, cta }) => (
              <div key={title} className="group grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr_auto] gap-x-6 gap-y-2 py-8 items-start hover:bg-[#0a0a0a] -mx-4 px-4 sm:-mx-6 sm:px-6 transition-colors duration-300">
                <span className="text-2xl font-black text-[#FC222D] font-heading tabular-nums pt-0.5" aria-hidden="true">{num}</span>
                <div>
                  <h3 className="text-white uppercase font-black text-xl mb-2">{title}</h3>
                  <p className="text-[#888888] text-sm leading-relaxed max-w-lg">{desc}</p>
                </div>
                <Link
                  href={href}
                  className="col-start-2 md:col-start-auto text-[#FC222D] uppercase text-xs font-bold tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all mt-3 md:mt-1 self-center shrink-0"
                >
                  {cta} <ChevronRight size={14} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Tuning Features */}
      <section className="py-16 sm:py-32" style={{ background: 'linear-gradient(to bottom, #0a0a0a, #111111)' }} data-scroll-reveal aria-labelledby="features-heading">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-20" data-reveal-child>
            <h2
              id="features-heading"
              className="text-white mb-6 leading-tight font-black font-heading"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              MQB Race Features
            </h2>
            <p className="text-[#9CA3AF] text-lg leading-relaxed">
              Every PTEB tune includes access to our full suite of advanced ECU mapping capabilities, engineered for performance, reliability, and precision.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
            {[
              { num: "01", name: "Rolling Anti Lag", desc: "Anti-lag system for drag racing & trackdays" },
              { num: "02", name: "Multi Map", desc: "Multiple tune maps for different conditions" },
              { num: "03", name: "Adjustable Launch Control", desc: "Allows you to launch at any RPM you desire from the click of a button, mapped to your steering wheel." },
              { num: "04", name: "Boost By Gear", desc: "Smoother boost delivery per gear. Full boost by 3rd." },
              { num: "05", name: "Advanced Traction", desc: "Traction control optimization & tuning" },
              { num: "06", name: "Immobilizer Map", desc: "Security system integration & coding" },
              { num: "07", name: "True Flex Fuel", desc: "Ethanol & blended fuel calibration" },
              { num: "08", name: "Motorsport Driveability", desc: "Track-focused calibration & feedback" },
            ].map((feature) => (
              <div key={feature.num} className="group relative overflow-hidden">
                <div className="relative p-4 sm:p-6 bg-[#111111] border border-[#1a1a1a] hover:border-[#FC222D]/50 transition-all duration-300 h-full">
                  <div
                    className="text-3xl font-black text-[#FC222D] mb-3 font-heading tabular-nums"
                    aria-hidden="true"
                  >
                    {feature.num}
                  </div>
                  <h3
                    className="text-white font-black text-sm uppercase tracking-widest mb-3"
                   
                  >
                    {feature.name}
                  </h3>
                  <p className="text-[#888888] text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FC222D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>

          {/* Every Tune Includes */}
          <div className="mt-10 pt-10 sm:mt-16 sm:pt-16 border-t border-[#2a2a2a]">
            <h3
              className="text-white text-xl font-black uppercase tracking-widest mb-10 text-center"
             
            >
              Every Tune Includes
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {[
                { title: "Pre Health Checks", icon: Search },
                { title: "Custom Dyno + Road", icon: BarChart2 },
                { title: "Safety First Approach", icon: ShieldCheck },
                { title: "Complete Logs & Data", icon: FileText },
              ].map(({ title, icon: Icon }) => (
                <div key={title} className="flex flex-col items-center text-center p-6 border border-[#1a1a1a] bg-[#0a0a0a]">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#FC222D]/10 border border-[#FC222D]/20 mb-4">
                    <Icon size={22} className="text-[#FC222D]" aria-hidden="true" />
                  </div>
                  <h4
                    className="text-white font-black uppercase tracking-wider text-sm"
                   
                  >
                    {title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-14 sm:py-24 bg-[#0a0a0a]" data-scroll-reveal aria-labelledby="about-heading">
        <div className="container mx-auto px-4 sm:px-6">

          {/* Top — image + intro */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-10 sm:mb-20">
            <div data-reveal-child>
              <div className="w-12 h-1 bg-[#FC222D] mb-6" aria-hidden="true" />
              <p className="text-[11px] font-black tracking-[0.3em] uppercase text-[#FC222D] mb-3">About Us</p>
              <h2
                id="about-heading"
                className="text-white mb-6 uppercase text-3xl sm:text-4xl font-black leading-tight"
              >
                Melbourne&apos;s Specialist<br />ECU Tuning Workshop
              </h2>

              {/* SEO/AEO paragraph — answers "who is PTEB?" for AI engines */}
              <div id="speakable-about" className="space-y-5 text-white text-base leading-[1.85] max-w-[65ch]">
                <p>
                  <strong className="text-[#FC222D]">Prestige Team Euro Boost (PTEB)</strong> is Melbourne&apos;s dedicated European performance tuning workshop, staffed by specialists with years of hands-on ECU calibration experience. Based in Melbourne, Victoria, PTEB delivers fully custom ECU and TCU remapping for Audi, BMW, Volkswagen, Mercedes-AMG, and Porsche. Every result is dyno-logged and road-verified before delivery.
                </p>
                <p>
                  Unlike generic tuning shops that flash off-the-shelf maps, PTEB builds each calibration from scratch. Custom boost curves, bespoke fuelling tables, and precision ignition timing are tailored to your specific vehicle, modifications, and fuel grade. The reputation speaks for itself — built entirely on results, not promises.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/team" className="inline-flex items-center gap-2 text-sm font-bold text-[#FC222D] uppercase tracking-widest hover:underline underline-offset-4 transition-colors">
                  Meet the tuner <ChevronRight size={13} aria-hidden="true" />
                </Link>
                <Link href="/our-work" className="inline-flex items-center gap-2 text-sm font-bold text-white/60 uppercase tracking-widest hover:text-white transition-colors">
                  See our work <ChevronRight size={13} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <a
              href="https://www.instagram.com/p/DXERj67D6WU/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full block group"
              aria-label="View this build on Instagram"
              data-reveal-child
            >
              <Image
                src="/audi-tt.jpg"
                alt="Audi TT on the PTEB dyno — Melbourne professional ECU tuning"
                width={1200}
                height={800}
                quality={70}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto object-contain brightness-90 group-hover:brightness-75 transition-all duration-300"
              />
              {/* Instagram hover badge */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="flex items-center gap-2 bg-black/80 border border-white/20 px-4 py-2.5 backdrop-blur-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                  <span className="text-white text-xs font-bold tracking-widest uppercase">View on Instagram</span>
                </div>
              </div>
            </a>
          </div>

          {/* Why PTEB — differentiator grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]" data-reveal-child>
            {[
              {
                label: "Founder-Led",
                detail: "You deal directly with the calibrators, not a junior technician. Every car gets the full attention of the PTEB team.",
              },
              {
                label: "100% Custom Maps",
                detail: "Every calibration is built from scratch for your vehicle, mods, and fuel. Never an off-the-shelf file.",
              },
              {
                label: "Dyno + Road Verified",
                detail: "Every tune is validated on our in-house dyno and confirmed on road before it leaves the workshop.",
              },
            ].map(({ label, detail }) => (
              <div key={label} className="bg-[#0a0a0a] p-5 sm:p-8">
                <div className="w-6 h-0.5 bg-[#FC222D] mb-4" aria-hidden="true" />
                <h3 className="text-white font-black uppercase text-sm tracking-widest mb-3">{label}</h3>
                <p className="text-[#6B7280] text-xs leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Google Reviews — auto-scroll carousel */}
      <section className="py-12 sm:py-20 bg-[#0a0a0a] border-y border-[#1a1a1a]" data-scroll-reveal aria-labelledby="reviews-heading">
        {/* Header */}
        <div className="container mx-auto px-4 sm:px-6 mb-12" data-reveal-child>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <svg width="22" height="22" viewBox="0 0 24 24" aria-label="Google" role="img">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#9CA3AF]">Google Reviews</span>
              </div>
              <h2 id="reviews-heading" className="text-3xl sm:text-4xl font-black uppercase text-white">
                What Our Customers Say
              </h2>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#FBBC05" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-white font-bold text-sm">4.9</span>
                <span className="text-[#6B7280] text-xs">· 48 reviews · Google</span>
              </div>
            </div>
            <a
              href="https://share.google/llErYNUiUHo3MqDS2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#2a2a2a] text-white text-xs font-bold tracking-widest uppercase hover:border-[#FC222D] hover:bg-[#FC222D]/5 transition-all shrink-0"
            >
              See All Reviews <ChevronRight size={12} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Carousel */}
        <ReviewsCarousel />
      </section>

      {/* Social Feed Section */}
      <section className="py-14 sm:py-24 bg-[#111111] border-y border-[#1a1a1a]" data-scroll-reveal aria-labelledby="social-heading">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12" data-reveal-child>
            <div>
              <h2
                id="social-heading"
                className="text-3xl sm:text-4xl font-black uppercase text-white"
              >
                Latest From PTEB
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/ptebtuning" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9CA3AF] hover:text-white transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                @ptebtuning
              </a>
              <a href="https://www.tiktok.com/@prestigeteameuroboost" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9CA3AF] hover:text-white transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z"/></svg>
                TikTok
              </a>
            </div>
          </div>
          <SocialFeed />
        </div>
      </section>

      {/* Trust + Contact Section */}
      <section className="bg-[#0a0a0a] border-y border-[#1a1a1a] py-12 sm:py-20" data-scroll-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Trust grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-[#1a1a1a] mb-16" data-reveal-child>
            {[
              { value: "Top Rated", sub: "On Google",      detail: "Melbourne's most trusted ECU tuner" },
              { value: "Every Car", sub: "Dyno Verified",  detail: "Logged and road-confirmed before delivery" },
              { value: "Always",    sub: "Custom Maps",    detail: "Never an off-the-shelf file" },
              { value: "Fast",      sub: "Response Time",  detail: "We reply same day, always" },
            ].map(({ value, sub, detail }) => (
              <div key={sub} className="bg-[#0a0a0a] p-5 sm:p-8 text-center">
                <p className="text-3xl font-black text-white font-heading mb-1">{value}</p>
                <p className="text-[#FC222D] text-xs font-bold uppercase tracking-widest mb-1">{sub}</p>
                <p className="text-[#6B7280] text-xs">{detail}</p>
              </div>
            ))}
          </div>

          {/* Contact cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto" data-reveal-child>
            {/* WhatsApp */}
            <TrackedLink
              href="https://wa.me/61422300859?text=Hi%20PTEB%2C%20I%27d%20like%20to%20enquire%20about%20a%20tune%20for%20my%20car."
              target="_blank"
              rel="noopener noreferrer"
              trackAs="whatsapp"
              trackLabel="homepage_contact_section"
              className="group flex items-center gap-5 p-6 bg-[#111] border border-[#1a1a1a] hover:border-[#25D366] transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-base mb-0.5">Message on WhatsApp</p>
                <p className="text-[#6B7280] text-sm">Fastest way to reach us — we reply within the hour</p>
              </div>
            </TrackedLink>

            {/* Phone */}
            <a
              href="tel:+61422300859"
              className="group flex items-center gap-5 p-6 bg-[#111] border border-[#1a1a1a] hover:border-[#FC222D] transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-[#FC222D]/10 border border-[#FC222D]/30 flex items-center justify-center shrink-0 group-hover:bg-[#FC222D]/20 transition-colors">
                <Phone size={20} className="text-[#FC222D]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-white font-bold text-base mb-0.5">Call 0422 300 859</p>
                <p className="text-[#6B7280] text-sm">Talk to the team directly — Mon–Fri 8am–5pm, Sat 9am–2pm</p>
              </div>
            </a>
          </div>

          <p className="text-center text-xs text-[#4B5563] mt-8">Free pre-approval check · No obligation · We'll tell you exactly what your car will make</p>
        </div>
      </section>

      {/* FAQ — visible HTML for AEO/AI answer engines */}
      <section id="homepage-faq" className="py-14 sm:py-20 bg-[#0a0a0a] border-t border-[#1a1a1a]" data-scroll-reveal aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="eyebrow mb-4" data-reveal-child>Common Questions</p>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-black uppercase text-white mb-10" data-reveal-child>
            ECU Tuning — FAQ
          </h2>
          <div data-reveal-child>
            <FaqAccordion items={[
              {
                q: "How much does ECU tuning cost in Melbourne?",
                a: "Pricing depends on your platform, modification level, and tune complexity. Stage 1 software-only remaps are the most affordable entry point. Stage 2 and Stage 3 tunes require supporting hardware and are priced accordingly. Contact us for a free pre-approval and exact quote with no obligation.",
              },
              {
                q: "Which cars does PTEB Tuning specialise in?",
                a: "PTEB Tuning specialises in European turbocharged vehicles: Audi (EA888, DAZA, EA825, EA839), BMW (B48, B58, N55, S55, S58), Volkswagen (Golf GTI, Golf R, Tiguan R), Mercedes-AMG (A45, CLA45, C63), and Porsche (911, Macan, Cayenne). Contact us to confirm your specific platform and engine code.",
              },
              {
                q: "What is the difference between Stage 1, Stage 2, and Stage 3 tuning?",
                a: "Stage 1 is a software-only ECU remap — no hardware changes needed, typically delivers 20–30% power gains on a stock car. Stage 2 requires a downpipe, upgraded intercooler, and/or intake to unlock further gains (30–40% increase). Stage 3 involves a full hardware build: upgraded turbocharger, high-flow injectors, fuelling system upgrades, and flex fuel capability — delivering maximum power potential.",
              },
            ]} />
          </div>
          <div className="mt-8" data-reveal-child>
            <Link href="/tuning-guide" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FC222D] hover:opacity-80 transition-opacity">
              Read the full tuning guide <ChevronRight size={12} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 sm:py-20 bg-gradient-to-r from-[#FC222D] to-[#CC1B25] text-center" data-scroll-reveal aria-label="Book your tune">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-white/80 text-sm font-medium tracking-widest uppercase mb-3">Melbourne&apos;s trusted tuning specialists</p>
          <h2 className="text-white mb-6 uppercase text-2xl sm:text-4xl md:text-5xl font-black font-heading">
            Ready to Unlock Your Vehicle&apos;s Full Potential?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <TrackedLink
              href="https://wa.me/61422300859?text=Hi%20PTEB%2C%20I%27d%20like%20to%20enquire%20about%20a%20tune%20for%20my%20car."
              target="_blank"
              rel="noopener noreferrer"
              trackAs="whatsapp"
              trackLabel="homepage_cta_banner"
              className="px-10 py-4 bg-[#25D366] text-white uppercase text-sm font-bold tracking-widest hover:bg-[#1ebe5d] transition-colors shadow-xl flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </TrackedLink>
            <TrackedLink
              href="tel:+61422300859"
              trackAs="phone"
              trackLabel="homepage_cta_banner"
              className="px-10 py-4 bg-black text-white uppercase text-sm font-bold tracking-widest hover:bg-[#111] transition-colors shadow-xl flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <Phone size={18} aria-hidden="true" /> Call: 0422 300 859
            </TrackedLink>
          </div>
        </div>
      </section>
    </>
  );
}
