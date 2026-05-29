import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { WarportHero } from "@/components/warport/WarportHero";
import { WarportFeatures } from "@/components/warport/WarportFeatures";

export const metadata: Metadata = {
  title: "Remote ECU Tuning Worldwide — PTEB Warport OBD2 Tuning Device | $499",
  description: "Get a custom ECU tune without visiting a workshop. The PTEB Warport plugs into your OBD port, connects to our software, and our tuner calibrates your engine remotely — anywhere in the world. Full custom calibration, live data logging. $499 AUD.",
  alternates: { canonical: "/warport" },
  openGraph: {
    title: "Remote ECU Tuning Worldwide — PTEB Warport | $499 AUD",
    description: "Custom ECU tuning delivered remotely anywhere in the world. Plug into OBD, connect via our software, get a full dyno-quality tune without leaving home. $499 device + custom calibration.",
    url: "/warport",
    images: [{ url: "/ptebtunedby.jpg", width: 1200, height: 630, alt: "PTEB Warport — Remote OBD2 ECU Tuning Device" }],
  },
};

const warportSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://ptebtuning.com" },
        { "@type": "ListItem", position: 2, name: "Warport Remote Tuning", item: "https://ptebtuning.com/warport" },
      ],
    },
    {
      "@type": "Product",
      name: "PTEB Warport",
      description: "OBD2 remote ECU tuning device. Plug into your car's OBD port, connect via our software, and our tuner calibrates your engine remotely — anywhere in the world. Includes full custom calibration, live data logging, and ongoing revisions.",
      brand: { "@type": "Brand", name: "PTEB Tuning" },
      sku: "WARPORT-001",
      offers: {
        "@type": "Offer",
        price: "499.00",
        priceCurrency: "AUD",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "PTEB Tuning" },
        areaServed: { "@type": "Place", name: "Worldwide" },
      },
    },
    {
      "@type": "HowTo",
      name: "How remote ECU tuning works with the PTEB Warport",
      description: "Step-by-step guide to getting your car remotely ECU tuned using the PTEB Warport OBD2 device.",
      totalTime: "PT2H",
      estimatedCost: { "@type": "MonetaryAmount", currency: "AUD", value: "499" },
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Order and receive the Warport device",
          text: "Order the PTEB Warport online. It ships worldwide. The device plugs directly into your car's OBD2 port.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Connect to the PTEB app",
          text: "Download the PTEB app and pair it with the Warport device via Bluetooth. The app reads your vehicle's ECU and DSG/TCU data.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Submit for pre-approval",
          text: "PTEB's tuners review your vehicle data, confirm compatibility, and outline exactly what your custom tune will deliver.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Receive your custom calibration",
          text: "PTEB builds a fully custom ECU calibration for your specific vehicle, modifications, and fuel — never an off-the-shelf map. The file is delivered to your device via the app.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Flash and log",
          text: "The tune is flashed from your phone in minutes. Live data logging lets PTEB refine boost, timing, and fuelling in real conditions until the car performs exactly as it should.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does remote ECU tuning work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Remote ECU tuning works via an OBD2 device (PTEB Warport) that plugs into your car's diagnostic port. It reads your ECU data and communicates with PTEB's tuning software via a smartphone app. The tuner builds a custom calibration and delivers it to your car remotely — no workshop visit required.",
          },
        },
        {
          "@type": "Question",
          name: "Is remote ECU tuning as good as a dyno tune?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most supported platforms, PTEB's remote tuning delivers a fully custom calibration comparable in quality to a workshop dyno tune. PTEB uses live data logging to refine the tune in real-world conditions. However, some complex builds or very high-powered setups may still benefit from an in-person dyno session.",
          },
        },
        {
          "@type": "Question",
          name: "What cars are compatible with the PTEB Warport?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The PTEB Warport supports most modern European turbocharged platforms including Audi (EA888, DAZA, EA825), BMW (B48, B58, N55, S55, S58), Volkswagen (EA888 GTI/Golf R), Mercedes-AMG (M133, M177), and Porsche (9A2). Contact PTEB before ordering to confirm your specific vehicle is supported.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get a refund if my car is not compatible?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "PTEB strongly recommends contacting them before purchase to confirm compatibility. Refunds cannot be provided for compatibility issues, which is why a free pre-approval check is offered before you spend anything.",
          },
        },
      ],
    },
  ],
};

export default function WarportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(warportSchema) }} />
      <WarportHero />

      {/* ── How It Works ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#0A0A0A] border-b border-[#1E1E1E]" aria-labelledby="how-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <p className="eyebrow mb-4">
              The Process
            </p>
            <h2
              id="how-heading"
              className="text-4xl md:text-5xl font-black uppercase text-white"
             
            >
              How Warport Works
            </h2>
          </div>

          <div className="prose prose-invert max-w-4xl space-y-8">
            <div className="space-y-4 p-6 border border-[#1E1E1E] bg-[#0D0D0D]">
              <h3 className="text-xl font-bold uppercase text-white">
                Step 1: Connect the Device
              </h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                You plug the Warport device into your car's OBD port and pair it with your phone via the PTEB app. The app communicates securely with your vehicle's ECU and DSG (transmission) modules.
              </p>
            </div>

            <div className="space-y-4 p-6 border border-[#1E1E1E] bg-[#0D0D0D]">
              <h3 className="text-xl font-bold uppercase text-white">
                Step 2: Read Your Vehicle Data
              </h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                Your vehicle's ECU and DSG data can be read and logged directly. We receive detailed information about your car's current configuration, fuel type, hardware, and performance parameters.
              </p>
            </div>

            <div className="space-y-4 p-6 border border-[#1E1E1E] bg-[#0D0D0D]">
              <h3 className="text-xl font-bold uppercase text-white">
                Step 3: Custom Calibration
              </h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                Your file is securely sent to PTEB, where a fully custom calibration is built specifically for your setup — not a generic off-the-shelf map. We tailor boost, timing, fueling, and torque delivery to your exact vehicle and driving style.
              </p>
            </div>

            <div className="space-y-4 p-6 border border-[#1E1E1E] bg-[#0D0D0D]">
              <h3 className="text-xl font-bold uppercase text-white">
                Step 4: Flash & Log
              </h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                Once ready, the file is sent back and flashed from your phone in minutes. Live data logging allows us to refine boost, timing, fueling, and overall performance in real conditions. We continue refining the tune based on your logs until the car performs exactly how it should.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WarportFeatures />

      {/* ── Important Disclaimer ────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#0A0A0A] border-b border-[#1E1E1E]" aria-labelledby="disclaimer-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-4 p-8 border border-yellow-600/40 bg-yellow-500/5">
            <AlertTriangle size={28} className="text-yellow-500 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h2
                id="disclaimer-heading"
                className="text-2xl font-bold text-yellow-500 mb-4 uppercase"
               
              >
                Important Disclaimer
              </h2>
              <div className="space-y-4 text-sm text-[#9CA3AF]">
                <p>
                  <strong className="text-white">Pre-Approval & Diagnostics:</strong> Prior to tuning, PTEB will guide you through remote diagnostics and health checks to assess your vehicle. This is done using available data to ensure suitability for tuning.
                </p>
                <p>
                  <strong className="text-white">Remote Tuning:</strong> All tuning is performed remotely. PTEB is not physically present to inspect the vehicle — tuning is carried out at the owner's own risk.
                </p>
                <p>
                  <strong className="text-white">No Warranty:</strong> No warranty is provided. PTEB is not liable for any mechanical, electrical, or drivetrain damage. While every effort is made for safe and reliable performance, responsibility remains with the owner.
                </p>
                <p>
                  <strong className="text-white">Battery Stabilizer:</strong> A battery stabilizer is strongly recommended during flashing. Voltage drops can corrupt the ECU/TCU ("bricking"), which PTEB is not responsible for.
                </p>
                <p className="pt-2 border-t border-yellow-600/20">
                  <strong className="text-white">Pricing Note:</strong> The $499 charge is <strong>only for the Warport device and app features</strong>. The tune file is a separate payment you will need to make once requested. <strong>Please contact us prior to purchase to confirm vehicle coverage</strong> to ensure your car can be worked on with Warport as refunds cannot be given for compatibility issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
