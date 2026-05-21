import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { rateLimit, getClientIp } from '@/lib/rate-limit';
import env from '@/env';

const VALID_EVENT_TYPE_IDS = new Set([1, 2, 3, 4, 5]);

const slotsSchema = z.object({
  eventTypeId: z.number().int().refine((id) => VALID_EVENT_TYPE_IDS.has(id), 'Invalid event type'),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  const { allowed, resetAt } = rateLimit(ip, 30);
  if (!allowed) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429, headers: { 'Retry-After': String(Math.ceil((resetAt - Date.now()) / 1000)) } },
    );
  }

  try {
    const body = await req.json();
    const parsed = slotsSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid request data' },
        { status: 400 }
      );
    }
    const { eventTypeId, date } = parsed.data;

    const apiKey = env.CALCOM_API_KEY;
    const apiUrl = env.CALCOM_API_URL;

    const response = await fetch(`${apiUrl}/event-types/${eventTypeId}/available-slots`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ startDate: date, endDate: date }),
    });

    if (!response.ok) {
      throw new Error(`Cal.com API error: ${response.statusText}`);
    }

    const data = await response.json();

    const slots = (data.data?.slots ?? []).flatMap((day: { times?: string[] }) =>
      (day.times ?? []).map((time) => time.split('T')[1]?.slice(0, 5) ?? '')
    ).filter(Boolean);

    return NextResponse.json({ slots: [...new Set<string>(slots)] });
  } catch (error) {
    console.error('Slots API error');
    return NextResponse.json(
      { error: 'Failed to fetch available slots' },
      { status: 500 }
    );
  }
}
