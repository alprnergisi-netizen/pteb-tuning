import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { rateLimit, getClientIp } from '@/lib/rate-limit';
import env from '@/env';

const ADMIN_EMAIL = env.ADMIN_EMAIL;

const submitSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(254),
  phone: z.string().min(6).max(30),
  carMakeModel: z.string().min(1).max(200),
  serviceType: z.string().min(1).max(100),
  preferredDate: z.string().max(50).optional(),
  message: z.string().max(2000).optional(),
});

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  const { allowed, resetAt } = rateLimit(ip, 5);
  if (!allowed) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429, headers: { 'Retry-After': String(Math.ceil((resetAt - Date.now()) / 1000)) } },
    );
  }

  try {
    if (!env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 503 }
      );
    }

    const body = await req.json();
    const parsed = submitSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid request data' },
        { status: 400 }
      );
    }

    const { name, email, phone, carMakeModel, serviceType, preferredDate, message } = parsed.data;

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeVehicle = escapeHtml(carMakeModel);
    const safeService = escapeHtml(serviceType);
    const safeDate = preferredDate ? escapeHtml(preferredDate) : null;
    const safeMessage = message
      ? escapeHtml(message).replace(/\n/g, '<br>')
      : null;

    const resend = new Resend(env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'PTEB Tuning <noreply@ptebtuning.com>',
      to: safeEmail,
      subject: 'Your Booking Request Received — PTEB Tuning',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #000; padding: 20px; text-align: center; border-bottom: 3px solid #FC222D;">
            <h1 style="color: #fff; margin: 0; font-size: 28px;">PTEB Tuning</h1>
            <p style="color: #9CA3AF; margin: 5px 0 0 0;">Custom Dyno Tuning &amp; ECU Remapping</p>
          </div>
          <div style="padding: 30px; background: #0A0A0A; color: #9CA3AF;">
            <h2 style="color: #fff; font-size: 24px; margin-top: 0;">Booking Request Received</h2>
            <p>Hi ${safeName},</p>
            <p>Thank you for submitting your booking request! We&apos;ve received your details and will contact you within <strong>24 hours</strong> to confirm your appointment.</p>
            <div style="background: #1E1E1E; padding: 20px; border-left: 3px solid #FC222D; margin: 20px 0;">
              <h3 style="color: #fff; margin-top: 0;">Your Booking Details</h3>
              <p><strong>Service:</strong> ${safeService}</p>
              <p><strong>Vehicle:</strong> ${safeVehicle}</p>
              ${safeDate ? `<p><strong>Preferred Date:</strong> ${safeDate}</p>` : ''}
              <p><strong>Phone:</strong> ${safePhone}</p>
            </div>
            <p style="margin-top: 20px;">
              <strong>Need a faster response?</strong><br>
              <a href="https://wa.me/61422300859" style="color: #FC222D; text-decoration: none; font-weight: bold;">Message us on WhatsApp</a> for immediate assistance.
            </p>
            <p style="color: #6B7280; margin-top: 30px; padding-top: 20px; border-top: 1px solid #2A2A2A;">
              &copy; 2026 Prestige Team Euro Boost. All rights reserved.<br>
              <a href="https://ptebtuning.com" style="color: #FC222D; text-decoration: none;">ptebtuning.com</a>
            </p>
          </div>
        </div>
      `,
    });

    await resend.emails.send({
      from: 'PTEB Bookings <noreply@ptebtuning.com>',
      to: ADMIN_EMAIL,
      subject: `New Booking Request — ${safeName} (${safeService})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #000; padding: 20px; border-bottom: 3px solid #FC222D;">
            <h2 style="color: #fff; margin: 0;">New Booking Request</h2>
          </div>
          <div style="padding: 20px; background: #0A0A0A; color: #9CA3AF;">
            <h3 style="color: #fff;">Customer Details</h3>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Phone:</strong> ${safePhone}</p>
            <h3 style="color: #fff; margin-top: 20px;">Service Details</h3>
            <p><strong>Service:</strong> ${safeService}</p>
            <p><strong>Vehicle:</strong> ${safeVehicle}</p>
            ${safeDate ? `<p><strong>Preferred Date:</strong> ${safeDate}</p>` : ''}
            ${safeMessage ? `<p><strong>Message:</strong><br>${safeMessage}</p>` : ''}
            <p style="margin-top: 20px; padding: 15px; background: #1E1E1E; border-left: 3px solid #FC222D;">
              <strong>Action:</strong> Contact customer to confirm appointment
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Booking submission error');
    return NextResponse.json(
      { error: 'Failed to submit booking request' },
      { status: 500 }
    );
  }
}
