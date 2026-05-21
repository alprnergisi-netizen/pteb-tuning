import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { rateLimit, getClientIp } from '@/lib/rate-limit';
import env from '@/env';

const bookSchema = z.object({
  eventTypeId: z.number().int().refine((id) => Number.isInteger(id) && id > 0, 'Invalid event type'),
  start: z.string().datetime(),
  attendee: z.object({
    name: z.string().max(100).optional(),
    email: z.string().email().max(254),
    phone: z.string().max(30).optional(),
  }),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export async function POST(req: NextRequest) {
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
    const parsed = bookSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid request data' },
        { status: 400 }
      );
    }
    const { eventTypeId, start, attendee, metadata } = parsed.data;

    const apiKey = env.CALCOM_API_KEY;
    const apiUrl = env.CALCOM_API_URL;

    // Create booking via Cal.com
    const response = await fetch(`${apiUrl}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        eventTypeId,
        start,
        attendees: [
          {
            name: attendee.name || 'Guest',
            email: attendee.email,
            phone: attendee.phone || undefined,
          },
        ],
        metadata: metadata || {},
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Cal.com booking error');
      throw new Error(`Cal.com API error: ${response.statusText}`);
    }

    const data = await response.json();

    // Return booking confirmation
    return NextResponse.json({
      uid: data.data?.uid || data.id,
      eventTypeId,
      start,
      attendee,
      confirmationUrl: data.data?.url || '',
    });
  } catch (error) {
    console.error('Booking API error');
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}
