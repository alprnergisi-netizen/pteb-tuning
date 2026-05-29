import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Check, AlertTriangle, Shield, Zap, Clock, Users } from "lucide-react";
import { HoodieGallery } from "@/components/ui/HoodieGallery";
import { HoodieCheckout, HoodieCheckoutFallback } from "@/components/ui/HoodieCheckout";
import { WarportProductImage } from "@/components/warport/WarportProductImage";
import { WarportCheckout, WarportCheckoutFallback } from "@/components/warport/WarportCheckout";

const shopifyReady = !!(
  process.env.SHOPIFY_STORE_DOMAIN && process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
);

async function getVariants(handle: string) {
  if (!shopifyReady) return null;
  try {
    const { getProductVariants } = await import("@/lib/shopify");
    return await getProductVariants(handle);
  } catch {
    return null;
  }
}

const HOODIE_HANDLE  = process.env.SHOPIFY_HOODIE_HANDLE  ?? "tuned-by-pteb-hoodie";
const WARPORT_HANDLE = process.env.SHOPIFY_WARPORT_HANDLE ?? "pteb-warport";

export const metadata: Metadata = {
  title: "PTEB Warport — Remote ECU Tuning Device $499 | Shop PTEB",
  description: "Shop PTEB Tuning products. The PTEB Warport ($499 AUD) is an OBD2 remote tuning device that lets our tuners calibrate your engine from anywhere in Australia — no workshop visit needed. Also: Tuned By PTEB hoodie ($89.99 AUD).",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "PTEB Warport $499 — Remote ECU Tuning Device | Shop",
    description: "PTEB Warport: remote OBD2 ECU tuning device, $499 AUD. Full custom calibration delivered anywhere in Australia. Plus official PTEB merchandise.",
    url: "/products",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ptebtuning.com" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://ptebtuning.com/products" },
  ],
};

const productsFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the PTEB Warport and how does it work?",
      acceptedAnswer: { "@type": "Answer", text: "The PTEB Warport is an OBD2 remote tuning device that costs $499 AUD. You plug it into your car's OBD port, pair it with the PTEB app, and our tuners recalibrate your ECU and TCU remotely — from anywhere in Australia. No workshop visit required. The device stays in your car for ongoing data logging and future revisions." },
    },
    {
      "@type": "Question",
      name: "Is the PTEB Warport worth it compared to a dyno tune?",
      acceptedAnswer: { "@type": "Answer", text: "The PTEB Warport at $499 AUD delivers a fully custom calibration comparable to a workshop dyno tune, which typically costs $800–$2,500+. For most modern European platforms, the results are equivalent — and the device remains in your car for future revisions. It's particularly good value for those not in Melbourne or who prefer the convenience of remote tuning." },
    },
    {
      "@type": "Question",
      name: "Does the $499 Warport price include the tune?",
      acceptedAnswer: { "@type": "Answer", text: "The $499 charge covers the PTEB Warport device and app access. The custom tune file is a separate payment arranged after your vehicle is pre-approved. Always contact PTEB before purchasing to confirm your vehicle is supported — refunds cannot be given for compatibility issues." },
    },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "PTEB Tuning Products",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "PTEB Warport",
        description: "Remote OBD2 ECU tuning device. Full custom calibration, live data logging, and ongoing revisions.",
        brand: { "@type": "Brand", name: "PTEB Tuning" },
        offers: { "@type": "Offer", price: "499", priceCurrency: "AUD", availability: "https://schema.org/InStock", url: "https://ptebtuning.com/products#warport" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Tuned By PTEB Hoodie",
        description: "Official PTEB Tuning merchandise. Gildan Heavy Blend hoodie with PTEB logo.",
        brand: { "@type": "Brand", name: "PTEB Tuning" },
        offers: { "@type": "Offer", price: "89.99", priceCurrency: "AUD", availability: "https://schema.org/InStock", url: "https://ptebtuning.com/products#hoodie" },
      },
    },
  ],
};

export default async function ProductsPage() {
  const [hoodieVariants, warportVariants] = await Promise.all([
    getVariants(HOODIE_HANDLE),
    getVariants(WARPORT_HANDLE),
  ]);
  const variants = hoodieVariants;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productsFaqSchema) }} />

      {/* ── WARPORT — first thing on page ────────────────────────────────── */}
      <section id="warport" className="bg-[#0A0A0A] border-b border-[#1E1E1E] pt-24 scroll-mt-0" aria-labelledby="warport-heading" itemScope itemType="https://schema.org/Product">
        {/* Hidden h1 for SEO */}
        <h1 className="sr-only">PTEB Products — Warport Remote Tuning Kit &amp; Merchandise</h1>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-0">

            {/* Image — hover plays animation */}
            <WarportProductImage />

            {/* Content */}
            <div className="py-14 px-6 lg:px-12 flex flex-col justify-center">

              {/* Name + price */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <p className="eyebrow mb-3">Remote Tuning Kit</p>
                  <h2 id="warport-heading" className="text-4xl sm:text-5xl font-black uppercase text-white leading-none" itemProp="name">
                    PTEB Warport
                  </h2>
                </div>
                <div className="text-right shrink-0" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <meta itemProp="priceCurrency" content="AUD" />
                  <meta itemProp="availability" content="https://schema.org/InStock" />
                  <p className="text-4xl font-black text-[#FC222D]" itemProp="price" content="499">
                    $499
                  </p>
                  <p className="text-xs text-[#6B7280]">AUD</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#9CA3AF] leading-relaxed mb-8" itemProp="description">
                The PTEB Warport is an OBD2 device that pairs with our app to allow full remote ECU tuning — from anywhere in Australia. Plug it into your car, connect to the PTEB app, and our tuners calibrate your ECU remotely. The device stays in your car for ongoing data logging and live revision pulls.
              </p>

              {/* Key benefits */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Zap, label: "Instant Data Logging", sub: "Boost, lambda, IATs live" },
                  { icon: Clock, label: "7-Day Delivery", sub: "Metro Australia tracked" },
                  { icon: Shield, label: "Pre-Approved", sub: "Compatibility verified first" },
                  { icon: Users, label: "Direct Support", sub: "Talk to your tuner directly" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex items-start gap-3 p-3 border border-[#1E1E1E] bg-[#111111]">
                    <div className="w-8 h-8 bg-[#FC222D]/10 border border-[#FC222D]/20 flex items-center justify-center shrink-0">
                      <Icon size={14} className="text-[#FC222D]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-white text-xs font-bold">{label}</p>
                      <p className="text-[#6B7280] text-[11px] mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Includes */}
              <div className="mb-8">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#6B7280] mb-4">What&apos;s Included</p>
                <ul className="space-y-2.5">
                  {[
                    "PTEB Warport OBD2 device (S/N stamped)",
                    "PTEB Warport app access (iOS & Android)",
                    "Live data monitoring (boost, lambda, IATs, etc.)",
                    "DTC scan and read capability",
                    "ECU / TCU info and module details",
                    "Remote read/write capability",
                    "Direct support channel",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#9CA3AF]">
                      <Check size={14} className="text-[#FC222D] mt-0.5 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Disclaimer */}
              <div className="flex items-start gap-3 p-4 bg-[#111111] border border-[#2A2A2A] mb-8">
                <AlertTriangle size={14} className="text-yellow-500 mt-0.5 shrink-0" aria-hidden="true" />
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  Tune file is priced separately. Vehicle must be pre-approved for compatibility. Battery stabiliser strongly recommended during flashing.
                </p>
              </div>

              {/* Checkout */}
              {warportVariants
                ? <WarportCheckout variants={warportVariants} />
                : <WarportCheckoutFallback />
              }
            </div>
          </div>
        </div>
      </section>

      {/* Warport 4-step process */}
      <section className="py-20 bg-black border-b border-[#1E1E1E]" aria-labelledby="warport-how-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-4">How It Works</p>
            <h2 id="warport-how-heading" className="text-4xl font-black uppercase text-white">
              Tune Your Car in 4 Steps
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Pre-Approval", desc: "Submit your vehicle platform, mods, and goals. We confirm full compatibility before you spend a cent." },
              { step: "02", title: "Device Delivered", desc: "Your Warport ships within 7 business days with full tracking. Plug-and-play setup — no tools required." },
              { step: "03", title: "Connect & Log", desc: "Install the PTEB app, plug in your Warport, and run a data log. We see everything in real time." },
              { step: "04", title: "Tune Delivered", desc: "We calibrate your ECU remotely and push your custom file. You feel the difference immediately." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative pl-6 border-l border-[#1E1E1E]">
                <div className="text-5xl font-black text-[#FC222D]/15 leading-none mb-4" aria-hidden="true">{step}</div>
                <div className="w-6 h-0.5 bg-[#FC222D] mb-4" aria-hidden="true" />
                <h3 className="text-base font-black uppercase text-white mb-3">{title}</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOODIE ───────────────────────────────────────────────────────── */}
      {/* Sword-slash diagonal divider — black → red slash → white */}
      <div className="relative leading-none overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full">
          {/* black top fill */}
          <polygon points="0,0 1440,0 1440,18 0,62" fill="#000000" />
          {/* red slash band */}
          <polygon points="0,62 1440,18 1440,30 0,74" fill="#FC222D" />
          {/* white bottom fill */}
          <polygon points="0,74 1440,30 1440,80 0,80" fill="#ffffff" />
        </svg>
      </div>

      <section id="hoodie" className="bg-white scroll-mt-20" aria-labelledby="hoodie-heading" itemScope itemType="https://schema.org/Product">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Image gallery — left */}
            <HoodieGallery />

            {/* Details — right */}
            <div className="flex flex-col">

              {/* Category */}
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#6B7280] mb-3">Official Merchandise</p>

              {/* Name */}
              <h2 id="hoodie-heading" className="text-3xl font-black uppercase text-[#111] leading-tight mb-4" itemProp="name">
                Tuned By <span className="text-[#FC222D]">PTEB</span> Hoodie
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill="#111" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-[#6B7280]">38 Reviews</span>
              </div>

              {/* Price */}
              <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <meta itemProp="priceCurrency" content="AUD" />
                <meta itemProp="availability" content="https://schema.org/InStock" />
                <p className="text-2xl font-bold text-[#111] mb-8" itemProp="price" content="89.99">
                  $89.99 <span className="text-sm font-normal text-[#6B7280]">AUD</span>
                </p>
              </div>

              {/* Colour */}
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#111] mb-3">
                  Colour — <span className="font-normal text-[#6B7280]">Black</span>
                </p>
                <button
                  className="w-8 h-8 rounded-full bg-[#111] ring-2 ring-[#111] ring-offset-2"
                  aria-label="Black (selected)"
                />
              </div>

              {/* Size selector + checkout — Shopify if configured, static fallback otherwise */}
              {variants
                ? <HoodieCheckout variants={variants} />
                : <HoodieCheckoutFallback />
              }

              {/* Details */}
              <div className="border-t border-[#E5E7EB] pt-6 space-y-3">
                {[
                  ["Material", "Gildan Heavy Blend 50/50 fleece"],
                  ["Fit",      "Relaxed, double-lined hood"],
                  ["Print",    "PTEB vertical logo — back, red & white"],
                  ["Shipping", "Ships directly from PTEB"],
                ].map(([label, value]) => (
                  <div key={label} className="flex gap-4 text-sm">
                    <span className="w-20 shrink-0 text-[#6B7280]">{label}</span>
                    <span className="text-[#111]">{value}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
