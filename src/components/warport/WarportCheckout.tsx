"use client";

import { useState } from "react";
import type { ShopifyVariant } from "@/lib/shopify";
import { ShoppingCart, MessageCircle, Loader2, AlertCircle } from "lucide-react";

interface Props {
  variants: ShopifyVariant[];
}

export function WarportCheckout({ variants }: Props) {
  const available = variants.filter((v) => v.availableForSale);
  const defaultVariant = available[0] ?? variants[0];
  const [selectedId, setSelectedId] = useState<string>(defaultVariant?.id ?? "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleBuyNow() {
    if (!selectedId) return;
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
      setError("Something went wrong. WhatsApp us to order.");
      setLoading(false);
    }
  }

  const selected = variants.find((v) => v.id === selectedId);
  const price = selected ? `$${parseFloat(selected.price.amount).toFixed(2)} AUD` : "$499.00 AUD";
  const inStock = selected?.availableForSale ?? false;

  return (
    <div className="space-y-5">
      {/* Variant selector — only show if multiple variants */}
      {variants.length > 1 && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] mb-3">Select option</p>
          <div className="flex flex-wrap gap-2">
            {variants.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => { setSelectedId(v.id); setError(null); }}
                disabled={!v.availableForSale}
                className={`px-4 py-2 border text-xs font-medium transition-colors ${
                  !v.availableForSale
                    ? "border-[#2A2A2A] text-[#4B5563] cursor-not-allowed line-through"
                    : selectedId === v.id
                    ? "border-[#FC222D] bg-[#FC222D]/10 text-white"
                    : "border-[#2A2A2A] text-[#9CA3AF] hover:border-[#FC222D]/50"
                }`}
              >
                {v.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2 p-3 border border-red-500/30 bg-red-500/5 text-red-400 text-xs">
          <AlertCircle size={13} aria-hidden="true" />
          {error}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={handleBuyNow}
          disabled={loading || !inStock}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#FC222D] text-white text-sm font-black tracking-widest uppercase hover:bg-[#CC1B25] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <><Loader2 size={15} className="animate-spin" aria-hidden="true" /> Redirecting…</>
          ) : (
            <><ShoppingCart size={15} aria-hidden="true" /> {inStock ? `Buy Now — ${price}` : "Out of Stock"}</>
          )}
        </button>

        <a
          href="https://wa.me/61422300859?text=Hi%2C%20I%27d%20like%20to%20order%20a%20PTEB%20Warport"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 px-6 border border-[#2A2A2A] text-[#9CA3AF] text-sm font-semibold hover:border-[#FC222D] hover:text-white transition-all"
        >
          <MessageCircle size={15} aria-hidden="true" />
          Order via WhatsApp
        </a>
      </div>

      <p className="text-xs text-[#4B5563] leading-relaxed">
        Pre-approval required before purchase. Contact us first if you haven&apos;t confirmed compatibility.
        Secure checkout via Shopify. Ships worldwide.
      </p>
    </div>
  );
}

export function WarportCheckoutFallback() {
  return (
    <div className="space-y-3">
      <a
        href="https://wa.me/61422300859?text=Hi%2C%20I%27d%20like%20to%20order%20a%20PTEB%20Warport"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-4 bg-[#FC222D] text-white text-sm font-black tracking-widest uppercase hover:bg-[#CC1B25] transition-colors"
      >
        <MessageCircle size={15} aria-hidden="true" />
        Order via WhatsApp — $499 AUD
      </a>
      <a
        href="/contact"
        className="flex items-center justify-center w-full py-4 border border-[#2A2A2A] text-[#9CA3AF] text-sm font-semibold hover:border-[#FC222D] hover:text-white transition-all"
      >
        Enquire via Contact Form
      </a>
      <p className="text-xs text-[#4B5563]">Pre-approval required. Ships worldwide within 7 business days.</p>
    </div>
  );
}
