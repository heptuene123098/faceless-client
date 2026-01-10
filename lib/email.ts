// In lib/email.ts
export async function sendLoginLink(email: string, token: string) {
  const loginUrl = `${process.env.NEXTAUTH_URL}/api/auth/verify?token=${token}`;
  
  console.log('📧 Login URL (also check your email):', loginUrl);
  
  try {
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'FacelessCon <onboarding@resend.dev>',
      to: email,
      subject: 'Your FacelessCon Login Link',
      html: `...your email html...`
    });
    
    console.log('✅ Email sent to:', email);
    return true;
  } catch (error) {
    console.error('❌ Email failed, use this URL:', loginUrl,error);
    return false;
  }
}