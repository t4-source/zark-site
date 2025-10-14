import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

// Rate limiting store (in production, use Redis)
const loginAttempts = new Map<string, { count: number; lastAttempt: number }>();

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
  const now = Date.now();
  
  // Rate limiting: max 5 attempts per 15 minutes
  const attempts = loginAttempts.get(ip) || { count: 0, lastAttempt: 0 };
  if (attempts.count >= 5 && now - attempts.lastAttempt < 15 * 60 * 1000) {
    return NextResponse.json(
      { error: 'Too many login attempts. Please try again later.' },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const username = body.username;
    const password = body.password;

    if (!username || !password) {
      return NextResponse.json({ error: 'Missing credentials' }, { status: 400 });
    }

    // In production, get from database
    const adminUser = {
      username: process.env.ADMIN_USERNAME || 'admin',
      password: process.env.ADMIN_PASSWORD_HASH || '$2b$10$yhEjB8uRvbpwVTftARnsaOyKsPmD8F63YyIsE.YYvt6ELisj/edUK'
    };

    const isValid = await bcrypt.compare(password, adminUser.password);
    
    if (!isValid || username !== adminUser.username) {
      // Increment failed attempts
      loginAttempts.set(ip, { count: attempts.count + 1, lastAttempt: now });
      
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Reset attempts on successful login
    loginAttempts.delete(ip);

    // Generate JWT token
    const token = jwt.sign(
      { username, role: 'admin' },
      process.env.JWT_SECRET || 'fallback-secret',
      { expiresIn: '24h' }
    );

    // Set secure cookie
    const cookieStore = await cookies();
    cookieStore.set('admin-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 // 24 hours
    });

    return NextResponse.redirect(new URL('/admin', req.url));
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
