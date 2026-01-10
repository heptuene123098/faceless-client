import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function GET() {
  // temporary fallback key
  const resendKey = process.env.RESEND_API_KEY || "re_dummy_key_for_build";

  const resend = new Resend(resendKey);
  
  return NextResponse.json({
    hasResendKey: !!process.env.RESEND_API_KEY,
    resendKeyPrefix: resendKey.substring(0, 3),
    resendKeyLength: resendKey.length,
    nodeEnv: process.env.NODE_ENV,
  });
}
