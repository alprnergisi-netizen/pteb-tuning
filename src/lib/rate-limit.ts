import type { NextRequest } from "next/server";

const requests = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;

/**
 * Extract the real client IP from trusted platform headers.
 * x-nf-client-connection-ip  → Netlify (set by the edge, not spoofable by client)
 * x-real-ip                  → Vercel / nginx (set by reverse proxy, not spoofable)
 * Falls back to "unknown" — never trusts x-forwarded-for from the client.
 */
export function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-nf-client-connection-ip") ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

export function rateLimit(
  ip: string,
  limit: number,
): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const entry = requests.get(ip);

  if (!entry || now >= entry.resetAt) {
    const resetAt = now + WINDOW_MS;
    requests.set(ip, { count: 1, resetAt });
    return { allowed: true, remaining: limit - 1, resetAt };
  }

  if (entry.count >= limit) {
    return { allowed: false, remaining: 0, resetAt: entry.resetAt };
  }

  entry.count += 1;
  return { allowed: true, remaining: limit - entry.count, resetAt: entry.resetAt };
}
