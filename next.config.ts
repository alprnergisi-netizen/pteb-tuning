import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// unsafe-eval is needed by React in development for call-stack reconstruction.
// It is intentionally excluded from production.
const scriptSrc = isDev
  ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://app.cal.com https://www.googletagmanager.com https://www.clarity.ms"
  : "script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' https://app.cal.com https://www.googletagmanager.com https://www.clarity.ms";

const CSP = [
  "default-src 'self'",
  scriptSrc,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self' https://fonts.gstatic.com",
  "connect-src 'self' https://api.cal.com https://app.cal.com https://api.resend.com https://www.google-analytics.com https://region1.google-analytics.com https://www.clarity.ms",
  "frame-src https://www.google.com https://www.instagram.com https://www.tiktok.com https://www.facebook.com https://app.cal.com https://cal.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Content-Security-Policy", value: CSP },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
