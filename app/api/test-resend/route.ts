import { NextResponse } from 'next/server';
// import { Resend } from 'resend';

export async function GET() {
  // const resend = new Resend(process.env.RESEND_API_KEY);
  
  return NextResponse.json({
    hasResendKey: !!process.env.RESEND_API_KEY,
    resendKeyPrefix: process.env.RESEND_API_KEY?.substring(0, 3),
    resendKeyLength: process.env.RESEND_API_KEY?.length,
    nodeEnv: process.env.NODE_ENV,
  });
}