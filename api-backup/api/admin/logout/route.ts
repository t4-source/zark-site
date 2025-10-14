import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    cookieStore.delete('admin-token');
    
    // Redirect to home page instead of returning JSON
    return NextResponse.redirect(new URL('/', req.url));
  } catch (error) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }
}