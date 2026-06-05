import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { createCheckout } from "@/lib/shopify";

const ALLOWED_ORIGINS = new Set([
  "https://ptebtuning.com",
  "https://inspiring-starlight-2aa4d7.netlify.app",
  "http://localhost:3000",
  "http://localhost:3001",
]);

const schema = z.object({
  variantId: z.string().min(1).max(200),
  quantity: z.number().int().min(1).max(10).default(1),
});

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin") ?? "";
  if (!ALLOWED_ORIGINS.has(origin)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const ip = getClientIp(req);
  const { allowed, resetAt } = rateLimit(ip, 20);
  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": String(Math.ceil((resetAt - Date.now()) / 1000)) } }
    );
  }

  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid request data" }, { status: 400 });
    }

    const checkoutUrl = await createCheckout(parsed.data.variantId, parsed.data.quantity);
    return NextResponse.json({ checkoutUrl });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("Shopify checkout error:", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
