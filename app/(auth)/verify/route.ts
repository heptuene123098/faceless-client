import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, deleteToken, generateSessionToken } from '@/lib/auth-tokens';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 400 }
      );
    }

    const tokenData = await verifyToken(token);
    
    if (!tokenData) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 400 }
      );
    }

    // Delete the used token
    await deleteToken(token);

    // Create session for the user
    const sessionToken = generateSessionToken(tokenData.email);
    
    // Redirect to dashboard with session
    const response = NextResponse.redirect(new URL('/dashboard', request.url));
    response.cookies.set('session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7 // 1 week
    });

    return response;

  } catch (error) {
    console.error('Token verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}