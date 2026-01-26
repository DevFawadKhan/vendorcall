// app/lib/tokens.js
import crypto from "crypto";
import { addMinutes, addHours } from "date-fns";

// Generate secure random token
export function generateToken(length = 32) {
  return crypto.randomBytes(length).toString("hex");
}

// Generate email verification token
export async function createEmailVerificationToken(userId, prisma) {
  const token = generateToken();
  const expiresAt = addHours(new Date(), 24); // 24 hours expiry
  // console.log("USERID IN createEmailVerificationToken", userId);
  // Delete any existing tokens for this user
  await prisma.emailVerificationToken.deleteMany({
    where: { userId },
  });

  // Create new token
  const verificationToken = await prisma.emailVerificationToken.create({
    data: {
      userId,
      token,
      expiresAt,
    },
  });

  return verificationToken;
}

// Verify email token
export async function verifyEmailToken(token, prisma) {
  const verificationToken = await prisma.emailVerificationToken.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!verificationToken) {
    return { valid: false, error: "Invalid token" };
  }

  if (new Date() > verificationToken.expiresAt) {
    // Delete expired token
    await prisma.emailVerificationToken.delete({
      where: { id: verificationToken.id },
    });
    return { valid: false, error: "Token expired" };
  }

  return {
    valid: true,
    token: verificationToken,
    user: verificationToken.user,
  };
}

// Generate password reset token
export async function createPasswordResetToken(userId, prisma) {
  const token = generateToken();
  const expiresAt = addHours(new Date(), 1); // 1 hour expiry

  // Delete any existing tokens
  await prisma.passwordResetToken.deleteMany({
    where: { userId },
  });

  // Create new token
  const resetToken = await prisma.passwordResetToken.create({
    data: {
      userId,
      token,
      expiresAt,
    },
  });

  return resetToken;
}
// Verify password reset token
export async function verifyPasswordResetToken(token, prisma) {
  const resetToken = await prisma.passwordResetToken.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!resetToken) {
    return { valid: false, error: "Invalid token" };
  }

  if (new Date() > resetToken.expiresAt) {
    // Delete expired token
    await prisma.passwordResetToken.delete({
      where: { id: resetToken.id },
    });
    return { valid: false, error: "Token expired" };
  }

  return {
    valid: true,
    token: resetToken,
    user: resetToken.user,
  };
}

// Cleanup expired tokens (can be run as cron job)
export async function cleanupExpiredTokens(prisma) {
  const now = new Date();

  await prisma.emailVerificationToken.deleteMany({
    where: { expiresAt: { lt: now } },
  });

  await prisma.passwordResetToken.deleteMany({
    where: { expiresAt: { lt: now } },
  });

  return { cleaned: true };
}
