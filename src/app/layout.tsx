import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import dynamic from "next/dynamic";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { VideoIntro } from "@/components/VideoIntro";
import { ScrollRevealManager } from "@/components/providers/ScrollRevealManager";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const SmoothScrollProvider = dynamic(
  () => import("@/components/providers/SmoothScrollProvider").then((m) => m.SmoothScrollProvider)
);

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["700", "900"],
  style: ["normal"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600"],
  display: "swap",
  preload: true,
});

import env from "@/env";

const BASE_URL = env.NEXT_PUBLIC_APP_URL;

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ECU Tuning Melbourne | Custom Dyno Tune & Remapping — PTEB",
    template: "%s | PTEB Tuning",
  },
  description:
    "PTEB Tuning is Melbourne's specialist for custom ECU & TCU remapping on European cars. 500+ vehicles dyno-tuned. BMW, Audi, VW, Mercedes, Porsche. Anti-lag, flex fuel, boost-by-gear — all results dyno-logged and road-verified.",
  authors: [
    { name: "Besim — PTEB Tuning", url: BASE_URL },
  ],
  creator: "PTEB Tuning",
  publisher: "PTEB Tuning",
  category: "Automotive Performance",
  openGraph: {
    type: "website",
    siteName: "PTEB Tuning",
    locale: "en_AU",
    url: BASE_URL,
    title: "ECU Tuning Melbourne — Custom Dyno Remapping | PTEB",
    description:
      "Melbourne's specialist for custom ECU tuning. BMW, Audi, VW, Mercedes, Porsche — dyno-logged results, road-verified. 500+ cars tuned. Anti-lag, flex fuel, launch control.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PTEB Tuning — ECU Remapping & Dyno Tuning Melbourne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ptebtuning",
    creator: "@ptebtuning",
    title: "ECU Tuning Melbourne — PTEB Custom Dyno Remapping",
    description: "Melbourne's performance specialist. 500+ cars tuned. Custom ECU maps — dyno-logged, road-verified. BMW · Audi · VW · Mercedes · Porsche.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: env.GOOGLE_SITE_VERIFICATION,
  },
};

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // ── Primary business entity ─────────────────────────────────────
    {
      "@type": "AutomotiveBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "PTEB Tuning",
      alternateName: ["Prestige Team Euro Boost", "Tuned By PTEB"],
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
      image: `${BASE_URL}/og-image.png`,
      description:
        "PTEB Tuning is Melbourne's specialist in custom ECU and TCU remapping for European performance vehicles. Led by founder Besim, the workshop delivers data-driven dyno tuning, flex fuel calibration, rolling anti-lag, launch control, and remote tuning via the PTEB Warport OBD2 device — all results dyno-logged and road-verified.",
      telephone: "+61422300859",
      email: "prestigeteamhelp@gmail.com",
      priceRange: "$$",
      currenciesAccepted: "AUD",
      paymentAccepted: "Cash, Credit Card, Bank Transfer",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+61422300859",
          contactType: "customer service",
          contactOption: "TollFree",
          availableLanguage: "English",
          areaServed: "AU",
        },
        {
          "@type": "ContactPoint",
          url: "https://wa.me/61422300859",
          contactType: "sales",
          availableLanguage: "English",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "168 McIntyre Rd",
        addressLocality: "Sunshine North",
        addressRegion: "VIC",
        postalCode: "3020",
        addressCountry: "AU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -37.7591,
        longitude: 144.8299,
      },
      areaServed: [
        { "@type": "City",    name: "Melbourne" },
        { "@type": "State",   name: "Victoria" },
        { "@type": "State",   name: "New South Wales" },
        { "@type": "State",   name: "Queensland" },
        { "@type": "State",   name: "South Australia" },
        { "@type": "State",   name: "Western Australia" },
        { "@type": "State",   name: "Tasmania" },
        { "@type": "State",   name: "Australian Capital Territory" },
        { "@type": "State",   name: "Northern Territory" },
        { "@type": "Country", name: "Australia" },
        { "@type": "Country", name: "New Zealand" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          opens: "08:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "09:00",
          closes: "14:00",
        },
      ],
      // E-E-A-T: named founder with expertise
      founder: {
        "@type": "Person",
        "@id": `${BASE_URL}/#besim`,
        name: "Besim",
        jobTitle: "Lead Tuner & Founder",
        worksFor: { "@id": `${BASE_URL}/#business` },
        knowsAbout: [
          "ECU tuning", "TCU remapping", "Dyno calibration", "Flex fuel tuning",
          "Anti-lag systems", "Launch control", "Audi TFSI tuning", "BMW M-series tuning",
          "Volkswagen EA888 tuning", "Mercedes AMG calibration", "Bosch ECU remapping",
        ],
      },
      employee: [{ "@id": `${BASE_URL}/#besim` }],
      // Topical authority signals
      knowsAbout: [
        "Custom ECU tuning", "Dyno tuning Melbourne", "ECU remapping Australia",
        "Flex fuel ethanol tuning", "Rolling anti-lag", "Boost by gear mapping",
        "Launch control calibration", "Audi tuning", "BMW tuning", "Volkswagen tuning",
        "Mercedes AMG tuning", "Porsche tuning", "Remote ECU tuning", "OBD2 tuning",
        "Stage 1 tune", "Stage 2 tune", "B58 tuning", "EA888 tuning", "S55 tuning",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "48",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          datePublished: "2025-01-15",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: "Speed Safe" },
          reviewBody:
            "Very professional and friendly. After almost 6 months of the tune on our cars, the power difference was and still is incredible all while reliability and safety for the cars were their highest priority.",
        },
        {
          "@type": "Review",
          datePublished: "2024-12-20",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: "Andrew Marzolo" },
          reviewBody:
            "My car is an absolute beast. I would definitely recommend going to PTEB for a tune on your European car, they truly know how to turn your car into a rocket.",
        },
        {
          "@type": "Review",
          datePublished: "2024-12-10",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: "Deigo Delavega" },
          reviewBody:
            "There is no words to describe PTEB beside they are by far the best tuners and mechanic. My car has transformed into a weapon.",
        },
      ],
      sameAs: [
        "https://instagram.com/ptebtuning",
        "https://tiktok.com/@ptebtuning",
        "https://wa.me/61422300859",
        "https://www.facebook.com/permalink.php?story_fbid=pfbid02USJdKfm1fMy5NCbSU3U6szY5LNmP8NdobuZm4PxPkbPLWw1AdSGGgHkf6E8X5iQwl&id=61552644926281",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "ECU Tuning & Performance Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${BASE_URL}/#service-dyno`,
              name: "Custom Dyno Tuning",
              description: "Full custom ECU calibration on a rolling road dynamometer. Includes pre-health checks, baseline pull, iterative calibration, repeatability verification, and road validation. All results logged and provided to the customer.",
              provider: { "@id": `${BASE_URL}/#business` },
              areaServed: { "@type": "City", name: "Melbourne" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${BASE_URL}/#service-warport`,
              name: "PTEB Warport Remote ECU Tuning",
              description: "Remote OBD2 ECU tuning via the PTEB Warport device. Plug into your OBD port, connect via app, and PTEB tuners recalibrate your engine remotely. Available worldwide. Includes full custom calibration, live data logging, and ongoing revisions.",
              provider: { "@id": `${BASE_URL}/#business` },
              areaServed: { "@type": "Place", name: "Worldwide" },
              offers: { "@type": "Offer", price: "499.00", priceCurrency: "AUD", availability: "https://schema.org/InStock" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${BASE_URL}/#service-flex`,
              name: "Flex Fuel / Ethanol (E85) Tuning",
              description: "True flex fuel calibration for E85 ethanol or blended fuels. Supports automatic blend detection via ethanol content sensor. Typical power gains of 15-25% over 98 RON equivalent tune.",
              provider: { "@id": `${BASE_URL}/#business` },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${BASE_URL}/#service-engine`,
              name: "Engine Rebuilding & Performance Upgrades",
              description: "Full performance engine builds and rebuilds for European vehicles. From routine maintenance to complete Stage 3+ builds including turbo upgrades, fuelling systems, and supporting hardware.",
              provider: { "@id": `${BASE_URL}/#business` },
            },
          },
        ],
      },
    },

    // ── Website entity ──────────────────────────────────────────────
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      name: "PTEB Tuning",
      url: BASE_URL,
      description: "Custom dyno tuning, ECU remapping, and performance calibration — worldwide.",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${barlow.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon.svg" sizes="32x32" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      {/* GA4 */}
      {env.NEXT_PUBLIC_GA4_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${env.NEXT_PUBLIC_GA4_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${env.NEXT_PUBLIC_GA4_ID}');`}
          </Script>
        </>
      )}
      {/* Microsoft Clarity */}
      {env.NEXT_PUBLIC_CLARITY_ID && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","${env.NEXT_PUBLIC_CLARITY_ID}");`}
        </Script>
      )}
      <body className="pb-[72px] md:pb-0">
        {/* Always dark mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute('data-theme','dark')`,
          }}
        />
        <VideoIntro />
        <ThemeProvider>
        <SmoothScrollProvider>
          <Navbar />
          <main id="main" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>

        <ScrollRevealManager />
        <FloatingCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}
