import type { Metadata } from "next";
import { HoodieGallery } from "@/components/ui/HoodieGallery";
import { HoodieCheckout, HoodieCheckoutFallback } from "@/components/ui/HoodieCheckout";

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

const HOODIE_HANDLE = process.env.SHOPIFY_HOODIE_HANDLE ?? "tuned-by-pteb-hoodie";

export const metadata: Metadata = {
  title: "Tuned By PTEB Hoodie — Official Merchandise | Shop PTEB",
  description: "Shop official PTEB Tuning merchandise. The Tuned By PTEB hoodie ($89.99 AUD) — Gildan Heavy Blend fleece with the PTEB logo, shipped directly from the workshop.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Tuned By PTEB Hoodie $89.99 | Shop Official Merchandise",
    description: "Official PTEB Tuning merchandise — Tuned By PTEB hoodie, $89.99 AUD. Gildan Heavy Blend fleece, PTEB logo print.",
    url: "/products",
    images: [{ url: "/ptebtunedby.jpg", width: 1200, height: 630, alt: "Tuned By PTEB Hoodie" }],
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
        name: "Tuned By PTEB Hoodie",
        description: "Official PTEB Tuning merchandise. Gildan Heavy Blend hoodie with PTEB logo.",
        brand: { "@type": "Brand", name: "PTEB Tuning" },
        offers: { "@type": "Offer", price: "89.99", priceCurrency: "AUD", availability: "https://schema.org/InStock", url: "https://ptebtuning.com/products#hoodie" },
      },
    },
  ],
};

export default async function ProductsPage() {
  const variants = await getVariants(HOODIE_HANDLE);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      {/* Hidden h1 for SEO */}
      <h1 className="sr-only">PTEB Products — Official Merchandise</h1>

      <section id="hoodie" className="bg-white scroll-mt-20 pt-24" aria-labelledby="hoodie-heading" itemScope itemType="https://schema.org/Product">
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
