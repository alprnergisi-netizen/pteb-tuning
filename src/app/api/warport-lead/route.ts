import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { rateLimit, getClientIp } from '@/lib/rate-limit';
import env from '@/env';

const ALLOWED_ORIGINS = new Set(['https://ptebtuning.com', 'http://localhost:3000', 'http://localhost:3001']);

const schema = z.object({
  name:        z.string().min(1).max(100),
  email:       z.string().email().max(254),
  phone:       z.string().min(6).max(30),
  year:        z.string().min(4).max(4),
  make:        z.string().min(1).max(60),
  model:       z.string().min(1).max(100),
  engine:      z.string().max(60).optional(),
  stage:       z.string().min(1).max(60),
  fuel:        z.string().min(1).max(40),
  goals:       z.string().max(500).optional(),
  state:       z.string().max(40).optional(),
});

function esc(s: string) {
  return s
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

function row(label: string, value: string) {
  return `<tr><td style="padding:6px 12px 6px 0;color:#9CA3AF;font-size:12px;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 0;color:#ffffff;font-size:13px;font-weight:600">${value}</td></tr>`;
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin') ?? '';
  if (!ALLOWED_ORIGINS.has(origin)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const ip = getClientIp(req);
  const { allowed, resetAt } = rateLimit(ip, 5);
  if (!allowed) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429, headers: { 'Retry-After': String(Math.ceil((resetAt - Date.now()) / 1000)) } }
    );
  }

  if (!env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Email service not configured' }, { status: 503 });
  }

  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid request data' }, { status: 400 });
  }

  const d = parsed.data;
  const safeName   = esc(d.name);
  const safeEmail  = esc(d.email);
  const safePhone  = esc(d.phone);
  const safeVehicle = esc(`${d.year} ${d.make} ${d.model}${d.engine ? ` (${d.engine})` : ''}`);
  const safeStage  = esc(d.stage);
  const safeFuel   = esc(d.fuel);
  const safeGoals  = d.goals ? esc(d.goals) : '—';
  const safeState  = d.state ? esc(d.state) : '—';

  const resend = new Resend(env.RESEND_API_KEY);

  try {
    await Promise.all([
      // Admin notification
      resend.emails.send({
        from: 'PTEB Warport <noreply@ptebtuning.com>',
        to: env.ADMIN_EMAIL ?? 'prestigeteamhelp@gmail.com',
        subject: `New Warport Lead — ${safeName} · ${safeVehicle}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0A0A0A;color:#9CA3AF">
            <div style="background:#000;padding:20px;border-bottom:3px solid #FC222D">
              <h2 style="color:#fff;margin:0;font-size:18px">New Warport Lead</h2>
              <p style="color:#FC222D;margin:4px 0 0;font-size:12px;text-transform:uppercase;letter-spacing:0.1em">Pre-approval required</p>
            </div>
            <div style="padding:24px">
              <table style="width:100%;border-collapse:collapse">
                ${row('Name', safeName)}
                ${row('Email', safeEmail)}
                ${row('Phone', safePhone)}
                ${row('Location', safeState)}
              </table>
              <div style="height:1px;background:#1E1E1E;margin:16px 0"></div>
              <table style="width:100%;border-collapse:collapse">
                ${row('Vehicle', safeVehicle)}
                ${row('Stage', safeStage)}
                ${row('Fuel', safeFuel)}
                ${row('Goals', safeGoals)}
              </table>
              <div style="margin-top:20px;padding:14px;background:#1E1E1E;border-left:3px solid #FC222D">
                <p style="margin:0;font-size:13px;color:#fff"><strong>Action:</strong> Check vehicle compatibility for Warport, then contact customer with pre-approval result.</p>
              </div>
            </div>
          </div>
        `,
      }),

      // Customer confirmation
      resend.emails.send({
        from: 'PTEB Tuning <noreply@ptebtuning.com>',
        to: safeEmail,
        subject: 'Warport Pre-Approval Request Received — PTEB',
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
            <div style="background:#000;padding:24px;text-align:center;border-bottom:3px solid #FC222D">
              <h1 style="color:#fff;margin:0;font-size:24px;letter-spacing:-0.02em">PTEB Warport</h1>
              <p style="color:#9CA3AF;margin:4px 0 0;font-size:12px">Remote ECU Tuning</p>
            </div>
            <div style="background:#0A0A0A;padding:32px;color:#9CA3AF">
              <h2 style="color:#fff;font-size:20px;margin-top:0">We&apos;ve got your request, ${safeName}.</h2>
              <p style="line-height:1.7">We&apos;re checking compatibility for your <strong style="color:#fff">${safeVehicle}</strong> and will get back to you within <strong style="color:#FC222D">24 hours</strong> with your pre-approval result — no payment needed until you&apos;re confirmed.</p>

              <div style="background:#111;border-left:3px solid #FC222D;padding:16px 20px;margin:24px 0">
                <p style="margin:0 0 4px;font-size:11px;color:#6B7280;text-transform:uppercase;letter-spacing:0.08em">Your submission</p>
                <p style="margin:0;color:#fff;font-size:14px">${safeVehicle} · ${safeStage} · ${safeFuel}</p>
              </div>

              <p style="font-size:13px">While you wait, if you have any questions:</p>
              <a href="https://wa.me/61422300859" style="display:inline-block;background:#25D366;color:#fff;text-decoration:none;padding:12px 24px;font-size:13px;font-weight:bold;letter-spacing:0.05em;text-transform:uppercase;margin-top:4px">
                Message us on WhatsApp
              </a>

              <p style="margin-top:32px;padding-top:20px;border-top:1px solid #1E1E1E;font-size:11px;color:#4B5563">
                &copy; 2026 Prestige Team Euro Boost &nbsp;·&nbsp;
                <a href="https://ptebtuning.com" style="color:#FC222D;text-decoration:none">ptebtuning.com</a>
              </p>
            </div>
          </div>
        `,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch {
    console.error('Warport lead email error');
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
}
