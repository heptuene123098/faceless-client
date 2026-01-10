import { v4 as uuidv4 } from 'uuid';

// In a real app, use a proper database like Redis, PostgreSQL, etc.
// This is a simple in-memory store for demonstration
const tokenStore = new Map<string, { email: string; expiresAt: Date }>();

export function generateToken(email: string): string {
  const token = uuidv4();
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes
  
  tokenStore.set(token, {
    email,
    expiresAt
  });

  return token;
}

export async function verifyToken(token: string): Promise<{ email: string } | null> {
  const tokenData = tokenStore.get(token);
  
  if (!tokenData) {
    return null;
  }

  if (new Date() > tokenData.expiresAt) {
    tokenStore.delete(token);
    return null;
  }

  return { email: tokenData.email };
}

export async function storeToken(token: string, email: string): Promise<void> {
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes
  tokenStore.set(token, { email, expiresAt });
}

export async function deleteToken(token: string): Promise<void> {
  tokenStore.delete(token);
}

export function generateSessionToken(email: string): string {
  const sessionToken = uuidv4();
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
  
  // Store session token (in production, use a proper session store)
  tokenStore.set(`session_${sessionToken}`, {
    email,
    expiresAt
  });

  return sessionToken;
}

export async function verifySessionToken(token: string): Promise<{ email: string } | null> {
  const tokenData = tokenStore.get(`session_${token}`);
  
  if (!tokenData) {
    return null;
  }

  if (new Date() > tokenData.expiresAt) {
    tokenStore.delete(`session_${token}`);
    return null;
  }

  return { email: tokenData.email };
}