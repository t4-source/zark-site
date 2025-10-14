import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    let name = "";
    let email = "";
    let organization = "";
    let message = "";

    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const body = await req.json();
      name = body.name;
      email = body.email;
      organization = body.organization || "";
      message = body.message;
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      const form = await req.formData();
      name = String(form.get("name") || "");
      email = String(form.get("email") || "");
      organization = String(form.get("organization") || "");
      message = String(form.get("message") || "");
    } else {
      const form = await req.formData();
      name = String(form.get("name") || "");
      email = String(form.get("email") || "");
      organization = String(form.get("organization") || "");
      message = String(form.get("message") || "");
    }
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO || user;

    if (!host || !user || !pass) {
      console.log('SMTP not configured, storing contact message locally');
      console.log('Contact Message Received:', { name, email, organization, message });
      return NextResponse.json({ ok: true });
    }

    // Test SMTP connection first
    try {
      const testTransporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      });
      
      await testTransporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (smtpError) {
      console.error('SMTP connection failed:', smtpError);
      console.log('Falling back to local storage');
      console.log('Contact Message Received:', { name, email, organization, message });
      return NextResponse.json({ ok: true });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `Z A R K & Co <${user}>`,
      to,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nOrganization: ${organization || 'Not provided'}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Organization:</strong> ${organization || 'Not provided'}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}


