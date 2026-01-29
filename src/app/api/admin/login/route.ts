export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const username = String(body?.username || '');
		const password = String(body?.password || '');

		if (!username || !password) {
			return NextResponse.json({ error: 'Missing credentials' }, { status: 400 });
		}

		const configuredUsername = process.env.ADMIN_USERNAME || 'admin';
		const configuredPasswordHash = process.env.ADMIN_PASSWORD_HASH || '';
		const hasValidBcryptHash = /^\$2[aby]\$\d{2}\$[./A-Za-z0-9]{53}$/.test(configuredPasswordHash);

		let passwordValid = false;
		if (hasValidBcryptHash) {
			passwordValid = await bcrypt.compare(password, configuredPasswordHash);
		} else {
			// Dev fallback when no valid hash configured
			passwordValid = process.env.NODE_ENV !== 'production' && (password === 'admin' || password === 'admin123');
		}

		if (username !== configuredUsername || !passwordValid) {
			return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
		}

		const token = jwt.sign(
			{ username, role: 'admin' },
			process.env.JWT_SECRET || 'fallback-secret',
			{ expiresIn: '24h' }
		);

		// Set cookie on the response to ensure it persists in all runtimes
		const res = NextResponse.json({ ok: true });
		res.cookies.set('admin-token', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'strict',
			maxAge: 24 * 60 * 60,
			path: '/',
		});
		return res;
	} catch (e) {
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
}
