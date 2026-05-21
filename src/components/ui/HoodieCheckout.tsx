"use client";

import { useState } from "react";
import Link from "next/link";
import type { ShopifyVariant } from "@/lib/shopify";

interface Props {
  variants: ShopifyVariant[];
}

export function HoodieCheckout({ variants }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selected = variants.find((v) => v.id === selectedId);

  async function handleBuyNow() {
    if (!selectedId) {
      setError("Please select a size.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/shopify/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ variantId: selectedId, quantity: 1 }),
      });
      const data = await res.json();
      if (!res.ok || !data.checkoutUrl) throw new Error(data.error ?? "Checkout failed");
      window.location.href = data.checkoutUrl;
    } catch {
      setError("Something went wrong. Please try WhatsApp to order.");
      setLoading(false);
    }
  }

  return (
    <div>
      {/* Size selector */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#111]">Size</p>
          <span className="text-xs text-[#6B7280] underline underline-offset-2 cursor-pointer">Size guide</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {variants.map((v) => (
            <button
              key={v.id}
              onClick={() => { setSelectedId(v.id); setError(null); }}
              disabled={!v.availableForSale}
              className={`w-14 py-2 border text-xs font-medium transition-colors
                ${!v.availableForSale
                  ? "border-[#E5E7EB] text-[#D1D5DB] cursor-not-allowed line-through"
                  : selectedId === v.id
                    ? "border-[#111] bg-[#111] text-white"
                    : "border-[#E5E7EB] text-[#111] hover:border-[#111]"
                }`}
              aria-label={v.availableForSale ? v.title : `${v.title} — out of stock`}
            >
              {v.title}
            </button>
          ))}
        </div>
        {error && <p className="mt-2 text-xs text-[#FC222D]">{error}</p>}
      </div>

      {/* CTAs */}
      <button
        onClick={handleBuyNow}
        disabled={loading}
        className="w-full text-center py-4 bg-[#111] text-white text-sm font-bold tracking-widest uppercase hover:bg-[#FC222D] transition-colors mb-3 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Redirecting to checkout…" : selected ? `Buy Now — $89.99 AUD` : "Buy Now"}
      </button>

      <a
        href="https://wa.me/61422300859"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full block text-center py-4 border border-[#E5E7EB] text-[#111] text-sm font-bold tracking-widest uppercase hover:border-[#111] transition-colors mb-8"
      >
        WhatsApp Us
      </a>
    </div>
  );
}

// Fallback when Shopify is not configured — keeps static buttons + enquire flow
export function HoodieCheckoutFallback() {
  const sizes = ["XS","S","M","L","XL","2XL","3XL","4XL","5XL","6XL"];
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#111]">Size</p>
          <span className="text-xs text-[#6B7280] underline underline-offset-2 cursor-pointer">Size guide</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {sizes.map((sz) => (
            <button
              key={sz}
              onClick={() => setSelected(sz)}
              className={`w-14 py-2 border text-xs font-medium transition-colors
                ${selected === sz
                  ? "border-[#111] bg-[#111] text-white"
                  : "border-[#E5E7EB] text-[#111] hover:border-[#111]"
                }`}
            >
              {sz}
            </button>
          ))}
        </div>
      </div>
      <Link
        href="/contact"
        className="w-full block text-center py-4 bg-[#111] text-white text-sm font-bold tracking-widest uppercase hover:bg-[#FC222D] transition-colors mb-3"
      >
        Enquire to Order
      </Link>
      <a
        href="https://wa.me/61422300859"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full block text-center py-4 border border-[#E5E7EB] text-[#111] text-sm font-bold tracking-widest uppercase hover:border-[#111] transition-colors mb-8"
      >
        WhatsApp Us
      </a>
    </div>
  );
}
