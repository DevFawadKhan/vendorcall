import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { createPasswordResetToken } from "@/app/lib/token";
import { sendPasswordResetEmail } from "@/app/lib/email";
import { z } from "zod";

// Validation schema
const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate input
    const validation = forgotPasswordSchema.safeParse(body);
    if (!validation.success) {
      const errors = validation.error.issues.map((err) => ({
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
              "If an account exists with this email, you will receive a password reset OTP shortly.",
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

    // Create reset OTP
    const resetToken = await createPasswordResetToken(user.id, prisma);

    // Send reset email with OTP
    const emailResult = await sendPasswordResetEmail(
      user.email,
      `${user.firstName} ${user.lastName}`,
      resetToken.otp,
    );

    if (!emailResult.success) {
      // Delete the OTP if email failed
      await prisma.passwordResetToken.delete({
        where: { id: resetToken.id },
      });

      return NextResponse.json(
        {
          success: false,
          error: {
            code: "EMAIL_SEND_FAILED",
            message: "Failed to send reset OTP. Please try again.",
          },
        },
        { status: 500 },
      );
    }

    // Log for security monitoring
    console.log(`Password reset OTP sent for user: ${user.email} (${user.id})`);

    return NextResponse.json(
      {
        success: true,
        data: {
          message:
            "If an account exists with this email, you will receive a password reset OTP shortly.",
          expires_in: 900, // 15 minutes in seconds
          user_id: user.id, // Return user ID for OTP verification
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
