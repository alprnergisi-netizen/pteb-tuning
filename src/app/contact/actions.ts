'use server';

import { z } from 'zod';

const schema = z.object({
  name:  z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  car:   z.string().min(1, 'Vehicle details required'),
  mods:  z.string().optional(),
  fuel:  z.string().optional(),
  goals: z.string().min(10, 'Please describe your goals (at least 10 characters)'),
});

export type EnquiryState =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error'; message: string };

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const parsed = schema.safeParse({
    name:  formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    car:   formData.get('car'),
    mods:  formData.get('mods'),
    fuel:  formData.get('fuel'),
    goals: formData.get('goals'),
  });

  if (!parsed.success) {
    return { status: 'error', message: parsed.error.issues[0].message };
  }

  const { name, email, phone, car, mods, fuel, goals } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[Contact] RESEND_API_KEY not set — enquiry from', email);
    return { status: 'error', message: 'Email service not configured. Please call or WhatsApp 0422 300 859 directly.' };
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);
    const adminEmail = process.env.ADMIN_EMAIL ?? 'prestigeteamhelp@gmail.com';

    await resend.emails.send({
      from: `PTEB Enquiries <${process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev'}>`,
      to: adminEmail,
      replyTo: email,
      subject: `New Tune Enquiry — ${car}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;color:#111">
          <h2 style="margin:0 0 20px;color:#FC222D;font-size:20px;">New Tune Enquiry</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:8px 12px 8px 0;color:#555;white-space:nowrap;vertical-align:top;">Name</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:8px 12px 8px 0;color:#555;white-space:nowrap;vertical-align:top;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#FC222D;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding:8px 12px 8px 0;color:#555;white-space:nowrap;vertical-align:top;">Phone</td><td style="padding:8px 0;">${phone}</td></tr>` : ''}
            <tr><td style="padding:8px 12px 8px 0;color:#555;white-space:nowrap;vertical-align:top;">Vehicle</td><td style="padding:8px 0;font-weight:600;">${car}</td></tr>
            ${mods ? `<tr><td style="padding:8px 12px 8px 0;color:#555;white-space:nowrap;vertical-align:top;">Mods</td><td style="padding:8px 0;">${mods}</td></tr>` : ''}
            ${fuel ? `<tr><td style="padding:8px 12px 8px 0;color:#555;white-space:nowrap;vertical-align:top;">Fuel</td><td style="padding:8px 0;">${fuel}</td></tr>` : ''}
            <tr><td style="padding:8px 12px 8px 0;color:#555;white-space:nowrap;vertical-align:top;">Goals</td><td style="padding:8px 0;">${goals.replace(/\n/g, '<br/>')}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
          <p style="color:#999;font-size:11px;margin:0">Sent from ptebtuning.com — reply to this email to respond directly to the customer.</p>
        </div>
      `,
    });

    return { status: 'success' };
  } catch (err) {
    console.error('[Contact] Resend error:', err);
    return { status: 'error', message: 'Failed to send. Please call or WhatsApp 0422 300 859.' };
  }
}
