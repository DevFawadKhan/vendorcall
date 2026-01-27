import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { verifyPasswordResetOTP } from "@/app/lib/token";
import bcrypt from "bcryptjs";
import { z } from "zod";

// Validation schema
const resetPasswordSchema = z
  .object({
    otp: z
      .string()
      .length(6, "OTP must be 6 digits")
      .regex(/^\d+$/, "OTP must contain only numbers"),
    email: z.string().email("Invalid email address"),
    newPassword: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Confirm password must be at least 8 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate input
    const validation = resetPasswordSchema.safeParse(body);
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
            message: "Invalid input",
            details: errors,
          },
        },
        { status: 422 },
      );
    }

    const { otp, email, newPassword } = validation.data;

    // console.log("RESET PASSWORD REQUEST RECEIVED", { email, otp, newPassword });
    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });
    // console.log("USER FOUND IN RESET PASSWORD", user);
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "USER_NOT_FOUND",
            message: "User not found",
          },
        },
        { status: 404 },
      );
    }

    // Verify OTP
    const otpResult = await verifyPasswordResetOTP(otp, user.id, prisma);

    if (!otpResult.valid) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "INVALID_OTP",
            message: otpResult.error,
          },
        },
        { status: 400 },
      );
    }

    const { token: tokenRecord } = otpResult;
    // console.log("OTP VERIFIED IN RESET PASSWORD", tokenRecord);
    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    // console.log("HASHED PASSWORD", hashedPassword);
    // Update password and delete OTP in transaction
    await prisma.$transaction(async (tx) => {
      // Update user password
      await tx.user.update({
        where: { id: user.id },
        data: {
          passwordHash: hashedPassword,
        },
      });

      // Delete the used OTP
      await tx.PasswordResetToken.delete({
        where: { id: tokenRecord.id },
      });
    });

    // Log for security monitoring
    console.log(
      `Password reset successful for user: ${user.email} (${user.id})`,
    );

    return NextResponse.json(
      {
        success: true,
        data: {
          message:
            "Password reset successful. You can now login with your new password.",
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Reset password error:", error);

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
