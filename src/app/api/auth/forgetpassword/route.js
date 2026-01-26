// app/api/auth/forgot-password/route.js
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { createPasswordResetToken } from "@/app/lib/tokens";
import { sendPasswordResetEmail } from "@/app/lib/email";
import { rateLimit } from "@/app/lib/rate-limit";
import { z } from "zod";

// Validation schema
const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function POST(request) {
  try {
    const body = await request.json();

    // Rate limiting by email
    const rateLimitResult = await rateLimit(
      `forgot-password:${body.email}`,
      3,
      60 * 60 * 1000,
    ); // 3 attempts per hour

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "RATE_LIMITED",
            message:
              "Too many password reset attempts. Please try again later.",
          },
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": "3",
            "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
            "X-RateLimit-Reset": Math.ceil(
              rateLimitResult.reset / 1000,
            ).toString(),
          },
        },
      );
    }

    // Validate input
    const validation = forgotPasswordSchema.safeParse(body);
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
            message: "Invalid email address",
            details: errors,
          },
        },
        { status: 422 },
      );
    }

    const { email } = validation.data;

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        isActive: true,
      },
    });

    // For security, always return success even if user doesn't exist
    if (!user) {
      return NextResponse.json(
        {
          success: true,
          data: {
            message:
              "If an account exists with this email, you will receive a password reset link shortly.",
          },
        },
        { status: 200 },
      );
    }

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

    // Create reset token
    const resetToken = await createPasswordResetToken(user.id, prisma);

    // Send reset email
    const emailResult = await sendPasswordResetEmail(
      user.email,
      `${user.firstName} ${user.lastName}`,
      resetToken.token,
    );

    if (!emailResult.success) {
      // Delete the token if email failed
      await prisma.passwordResetToken.delete({
        where: { id: resetToken.id },
      });

      return NextResponse.json(
        {
          success: false,
          error: {
            code: "EMAIL_SEND_FAILED",
            message: "Failed to send reset email. Please try again.",
          },
        },
        { status: 500 },
      );
    }

    // Log for security monitoring
    console.log(
      `Password reset requested for user: ${user.email} (${user.id})`,
    );

    return NextResponse.json(
      {
        success: true,
        data: {
          message:
            "If an account exists with this email, you will receive a password reset link shortly.",
          expires_in: 3600, // 1 hour in seconds
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Forgot password error:", error);

    return NextResponse.json(
      {
        success: false,
        error: {
          code: "INTERNAL_ERROR",
          message: "Failed to process password reset request",
        },
      },
      { status: 500 },
    );
  }
}

export const dynamic = "force-dynamic";
