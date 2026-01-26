// app/api/auth/reset-password/route.js
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { verifyPasswordResetToken } from "@/app/lib/tokens";
import { hashPassword, validatePassword } from "@/app/lib/auth";
import { rateLimit } from "@/app/lib/rate-limit";
import { z } from "zod";

// Validation schema
const resetPasswordSchema = z.object({
  token: z.string().min(1, "Reset token is required"),
  new_password: z.string().min(8, "Password must be at least 8 characters"),
});

export async function POST(request) {
  try {
    const body = await request.json();

    // Rate limiting by IP
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const rateLimitResult = await rateLimit(
      `reset-password:${ip}`,
      5,
      15 * 60 * 1000,
    );

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "RATE_LIMITED",
            message: "Too many reset attempts. Please try again later.",
          },
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": "5",
            "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
            "X-RateLimit-Reset": Math.ceil(
              rateLimitResult.reset / 1000,
            ).toString(),
          },
        },
      );
    }

    // Validate input
    const validation = resetPasswordSchema.safeParse(body);
    if (!validation.success) {
      const errors = validation.error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }));

      return NextResponse.json(
        {
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Invalid input",
            details: errors,
          },
        },
        { status: 422 },
      );
    }

    const { token, new_password } = validation.data;

    // Validate password strength
    const passwordValidation = validatePassword(new_password);
    if (!passwordValidation.valid) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "WEAK_PASSWORD",
            message: passwordValidation.message,
          },
        },
        { status: 422 },
      );
    }

    // Verify token
    const tokenResult = await verifyPasswordResetToken(token, prisma);

    if (!tokenResult.valid) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "INVALID_TOKEN",
            message: tokenResult.error,
          },
        },
        { status: 400 },
      );
    }

    const { user, token: tokenRecord } = tokenResult;

    // Check if user is active
    if (!user.isActive) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "ACCOUNT_INACTIVE",
            message: "Account is deactivated",
          },
        },
        { status: 403 },
      );
    }

    // Hash new password
    const passwordHash = await hashPassword(new_password);

    // Update password and delete token in transaction
    await prisma.$transaction(async (tx) => {
      // Update user password
      await tx.user.update({
        where: { id: user.id },
        data: { passwordHash },
      });

      // Delete the used token
      await tx.passwordResetToken.delete({
        where: { id: tokenRecord.id },
      });

      // Delete any other reset tokens for this user
      await tx.passwordResetToken.deleteMany({
        where: { userId: user.id },
      });

      // Invalidate all sessions (optional - depends on your session management)
      // await tx.session.deleteMany({
      //   where: { userId: user.id }
      // })
    });

    // Send confirmation email (optional)
    // await sendPasswordChangeConfirmation(user.email, user.firstName)

    // Log for security monitoring
    console.log(`Password reset for user: ${user.email} (${user.id})`);

    return NextResponse.json(
      {
        success: true,
        data: {
          message:
            "Password reset successful. You can now login with your new password.",
          user_id: user.id,
          email: user.email,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Reset password error:", error);

    if (error.code === "P2025") {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "TOKEN_NOT_FOUND",
            message: "Reset token not found or already used",
          },
        },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: {
          code: "INTERNAL_ERROR",
          message: "Failed to reset password",
        },
      },
      { status: 500 },
    );
  }
}

export const dynamic = "force-dynamic";
