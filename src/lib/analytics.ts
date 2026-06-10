type GTag = (...args: unknown[]) => void;

function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return;
  const w = window as typeof window & { gtag?: GTag };
  if (typeof w.gtag === "function") w.gtag(...args);
}

function trackEvent(name: string, params?: Record<string, string>) {
  gtag("event", name, params);
}

export const trackWhatsApp = (label = "page_cta") =>
  trackEvent("whatsapp_click", { event_category: "contact", event_label: label });

export const trackPhone = (label = "page_cta") =>
  trackEvent("phone_click", { event_category: "contact", event_label: label });

export const trackCTA = (label: string) =>
  trackEvent("cta_click", { event_category: "conversion", event_label: label });
