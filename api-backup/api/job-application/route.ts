import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const experience = formData.get('experience') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const position = formData.get('position') as string;
    const location = formData.get('location') as string;
    const type = formData.get('type') as string;
    const resume = formData.get('resume') as File;

    // Validate required fields
    if (!name || !email || !phone || !experience) {
      return NextResponse.json({ 
        error: 'Missing required fields. Please fill in all required information.' 
      }, { status: 400 });
    }

    // Check if SMTP is configured and working
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log('SMTP not configured, storing application locally');
      // In development, just log the application
      console.log('Job Application Received:', {
        name,
        email,
        phone,
        experience,
        coverLetter,
        position,
        location,
        type,
        resumeName: resume?.name || 'No resume'
      });
      
      return NextResponse.json({ 
        message: 'Application submitted successfully (stored locally)' 
      });
    }

    // Test SMTP connection first
    try {
      const testTransporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
      
      await testTransporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (smtpError) {
      console.error('SMTP connection failed:', smtpError);
      console.log('Falling back to local storage');
      console.log('Job Application Received:', {
        name,
        email,
        phone,
        experience,
        coverLetter,
        position,
        location,
        type,
        resumeName: resume?.name || 'No resume'
      });
      
      return NextResponse.json({ 
        message: 'Application submitted successfully (stored locally - email service unavailable)' 
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || 'raghav@kraca.in',
      subject: `Job Application: ${position} - ${name}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        ${coverLetter ? `<p><strong>Cover Letter:</strong></p><p>${coverLetter}</p>` : ''}
      `,
      attachments: resume ? [
        {
          filename: resume.name,
          content: Buffer.from(await resume.arrayBuffer()),
          contentType: resume.type,
        },
      ] : [],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Job application error:', error);
    
    // Handle error with proper type checking
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        name: error.name,
        stack: error.stack
      });
    } else {
      console.error('Unknown error type:', error);
    }
    
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}