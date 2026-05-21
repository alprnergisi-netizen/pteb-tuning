import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { rateLimit, getClientIp } from '@/lib/rate-limit';
import env from '@/env';

const ALLOWED_ORIGINS = new Set(['https://ptebtuning.com', 'http://localhost:3000']);

const rescheduleSchema = z.object({
  bookingUid: z.string().regex(/^[0-9a-f-]{8,36}$/i, 'Invalid booking ID'),
  start: z.string().datetime(),
});

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin') ?? '';
  if (!ALLOWED_ORIGINS.has(origin)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const ip = getClientIp(req);
  const { allowed, resetAt } = rateLimit(ip, 10);
  if (!allowed) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429, headers: { 'Retry-After': String(Math.ceil((resetAt - Date.now()) / 1000)) } },
    );
  }

  try {
    const body = await req.json();
    const parsed = rescheduleSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid request data' }, { status: 400 });
    }
    const { bookingUid, start } = parsed.data;

    const apiKey = env.CALCOM_API_KEY;
    const apiUrl = env.CALCOM_API_URL;

    const response = await fetch(`${apiUrl}/bookings/${bookingUid}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ start, reschedulingReason: 'User requested reschedule' }),
    });

    if (!response.ok) {
      throw new Error('Cal.com reschedule failed');
    }

    const data = await response.json();
    return NextResponse.json({ success: true, booking: data.data || data });
  } catch (error) {
    console.error('Reschedule API error');
    return NextResponse.json({ error: 'Failed to reschedule booking' }, { status: 500 });
  }
}
