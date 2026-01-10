import { NextRequest, NextResponse } from 'next/server';
import { sendLoginLink } from '@/lib/email';
import { generateToken, storeToken } from '@/lib/auth-tokens';

export async function GET() {
  // Health check endpoint
  return NextResponse.json({ 
    message: 'API is working',
    timestamp: new Date().toISOString()
  });
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    console.log('Login attempt for email:', email);

    if (!email) {
      console.log('No email provided');
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if it's the admin email
    if (email.toLowerCase().trim() === 'amethystngltd@gmail.com') {
      console.log('Admin login detected');
      
      // For admin, redirect immediately - no token generation needed
      return NextResponse.json({
        success: true,
        isAdmin: true,
        redirectTo: '/dashboard'
      });
    }

    console.log('Regular user login:', email);
    // For regular users, generate token and send login link
    const token = generateToken(email);
    await storeToken(token, email);
    
    // Send login link via email
    await sendLoginLink(email, token);

    return NextResponse.json({
      success: true,
      message: 'Login link sent to your email',
      isAdmin: false
    });

  } catch (error) {
    console.error('Login error details:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error instanceof Error ? error.message : 'Unknown error') },
      { status: 500 }
    );
  }
}