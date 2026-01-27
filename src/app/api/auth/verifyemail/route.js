// // app/api/auth/verify-email/route.js
// import { NextResponse } from "next/server";
// import prisma from "@/app/lib/prisma";
// import {
//   verifyEmailToken,
//   createEmailVerificationToken,
// } from "@/app/lib/token";
// // import {  } from "@/app/lib/token";
// import { sendVerificationEmail } from "@/app/lib/email";
// // import { rateLimit } from "@/app/lib/rate-limit";
// import { z } from "zod";

// // Validation schema
// const verifyEmailSchema = z.object({
//   token: z.string().min(1, "Token is required"),
// });

// export async function POST(request) {
//   try {
//     const body = await request.json();

//     // Validate input
//     const validation = verifyEmailSchema.safeParse(body);
//     if (!validation.success) {
//       const errors = validation.error.errors.map((err) => ({
//         field: err.path.join("."),
//         message: err.message,
//       }));

//       return NextResponse.json(
//         {
//           success: false,
//           error: {
//             code: "VALIDATION_ERROR",
//             message: "Invalid input",
//             details: errors,
//           },
//         },
//         { status: 422 },
//       );
//     }

//     const { token } = validation.data;

//     // Verify token
//     const tokenResult = await verifyEmailToken(token, prisma);

//     if (!tokenResult.valid) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: {
//             code: "INVALID_TOKEN",
//             message: tokenResult.error,
//           },
//         },
//         { status: 400 },
//       );
//     }

//     const { user, token: tokenRecord } = tokenResult;

//     // Check if user is already verified
//     if (user.isVerified) {
//       // Delete the token anyway
//       await prisma.emailVerificationToken.delete({
//         where: { id: tokenRecord.id },
//       });

//       return NextResponse.json(
//         {
//           success: false,
//           error: {
//             code: "ALREADY_VERIFIED",
//             message: "Email is already verified",
//           },
//         },
//         { status: 400 },
//       );
//     }

//     // Update user verification status
//     await prisma.$transaction(async (tx) => {
//       // Mark user as verified
//       await tx.user.update({
//         where: { id: user.id },
//         data: { isVerified: true },
//       });

//       // Delete the used token
//       await tx.emailVerificationToken.delete({
//         where: { id: tokenRecord.id },
//       });

//       // Delete any other verification tokens for this user
//       await tx.emailVerificationToken.deleteMany({
//         where: { userId: user.id },
//       });
//     });

//     // Log the verification
//     console.log(`Email verified for user: ${user.email} (${user.id})`);

//     return NextResponse.json(
//       {
//         success: true,
//         data: {
//           message: "Email verified successfully",
//           user_id: user.id,
//           email: user.email,
//           is_verified: true,
//         },
//       },
//       { status: 200 },
//     );
//   } catch (error) {
//     console.error("Email verification error:", error);

//     // Handle specific errors
//     if (error.code === "P2025") {
//       return NextResponse.json(
//         {
//           success: false,
//           error: {
//             code: "TOKEN_NOT_FOUND",
//             message: "Verification token not found",
//           },
//         },
//         { status: 404 },
//       );
//     }

//     return NextResponse.json(
//       {
//         success: false,
//         error: {
//           code: "INTERNAL_ERROR",
//           message: "Failed to verify email",
//         },
//       },
//       { status: 500 },
//     );
//   }
// }

// // Resend verification email
// export async function PUT(request) {
//   try {
//     const body = await request.json();
//     const { email } = body;

//     if (!email) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: {
//             code: "EMAIL_REQUIRED",
//             message: "Email is required",
//           },
//         },
//         { status: 400 },
//       );
//     }

//     // Find user
//     const user = await prisma.user.findUnique({
//       where: { email },
//     });

//     // For security, don't reveal if user exists or not
//     if (!user) {
//       return NextResponse.json(
//         {
//           success: true,
//           data: {
//             message: "If an account exists, a verification email has been sent",
//           },
//         },
//         { status: 200 },
//       );
//     }

//     // Check if already verified
//     if (user.isVerified) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: {
//             code: "ALREADY_VERIFIED",
//             message: "Email is already verified",
//           },
//         },
//         { status: 400 },
//       );
//     }
//     const verificationToken = await createEmailVerificationToken(
//       user.id,
//       prisma,
//     );
//     console.log("Verificationtoken", verificationToken);
//     // Send email
//     const emailResult = await sendVerificationEmail(
//       user.email,
//       `${user.firstName} ${user.lastName}`,
//       verificationToken.token,
//     );

//     if (!emailResult.success) {
//       // Delete the token if email failed
//       await prisma.emailVerificationToken.delete({
//         where: { id: verificationToken.id },
//       });

//       return NextResponse.json(
//         {
//           success: false,
//           error: {
//             code: "EMAIL_SEND_FAILED",
//             message: "Failed to send verification email",
//           },
//         },
//         { status: 500 },
//       );
//     }

//     return NextResponse.json(
//       {
//         success: true,
//         data: {
//           message: "Verification email sent successfully",
//           email: user.email,
//         },
//       },
//       { status: 200 },
//     );
//   } catch (error) {
//     console.error("Resend verification error:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         error: {
//           code: "INTERNAL_ERROR",
//           message: "Failed to resend verification email",
//         },
//       },
//       { status: 500 },
//     );
//   }
// }

// // export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { verifyEmailOTP, createEmailVerificationToken } from "@/app/lib/token";
import { sendVerificationEmail } from "@/app/lib/email";
import { z } from "zod";

// Validation schema for OTP verification - ONLY OTP and userId
const verifyEmailOTPSchema = z.object({
  otp: z
    .string()
    .length(6, "OTP must be 6 digits")
    .regex(/^\d+$/, "OTP must contain only numbers"),
  userId: z.number().int().positive("User ID is required"), // User ID from registration
});

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate input
    const validation = verifyEmailOTPSchema.safeParse(body);
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

    const { otp, userId } = validation.data;

    // Find user by ID (we already know who they are from registration)
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        isVerified: true,
        email: true,
        firstName: true,
        lastName: true,
      },
    });
    // console.log("User found for OTP verification:", user);
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

    // Verify OTP for this specific user
    const otpResult = await verifyEmailOTP(otp, userId, prisma);

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

    // Check if user is already verified
    if (user.isVerified) {
      // Delete the OTP anyway
      await prisma.emailVerificationToken.delete({
        where: { id: tokenRecord.id },
      });

      return NextResponse.json(
        {
          success: false,
          error: {
            code: "ALREADY_VERIFIED",
            message: "Email is already verified",
          },
        },
        { status: 400 },
      );
    }

    // Update user verification status
    await prisma.$transaction(async (tx) => {
      // Mark user as verified
      await tx.user.update({
        where: { id: userId },
        data: { isVerified: true },
      });

      // Delete the used OTP
      await tx.emailVerificationToken.delete({
        where: { id: tokenRecord.id },
      });
    });

    // Log the verification
    console.log(`Email verified for user: ${user.email} (${user.id})`);

    return NextResponse.json(
      {
        success: true,
        data: {
          message: "Email verified successfully",
          user_id: user.id,
          email: user.email,
          is_verified: true,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email verification error:", error);

    // Handle specific errors
    if (error.code === "P2025") {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "OTP_NOT_FOUND",
            message: "Verification OTP not found",
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
          message: "Failed to verify email",
        },
      },
      { status: 500 },
    );
  }
}

// Resend verification OTP - now requires userId, not email
export async function PUT(request) {
  try {
    const body = await request.json();
    const { userId } = body;
    console.log("Resend OTP for userId:", userId);
    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "USER_ID_REQUIRED",
            message: "User ID is required",
          },
        },
        { status: 400 },
      );
    }
    // where: { id: 12 }
    // Find user by ID
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    console.log("User found for resend OTP:", user);
    // For security, don't reveal if user exists or not
    if (!user) {
      return NextResponse.json(
        {
          success: true,
          data: {
            message: "If an account exists, a verification OTP has been resent",
          },
        },
        { status: 200 },
      );
    }
    // Check if already verified
    if (user.isVerified) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "ALREADY_VERIFIED",
            message: "Email is already verified",
          },
        },
        { status: 400 },
      );
    }

    const verificationToken = await createEmailVerificationToken(
      userId,
      prisma,
    );
    console.log("Verification OTP", verificationToken);
    // Send email with OTP
    const emailResult = await sendVerificationEmail(
      user.email, // We have the user's email from the database
      `${user.firstName} ${user.lastName}`,
      verificationToken.otp,
    );

    if (!emailResult.success) {
      // Delete the OTP if email failed
      await prisma.emailVerificationToken.delete({
        where: { id: verificationToken.id },
      });

      return NextResponse.json(
        {
          success: false,
          error: {
            code: "EMAIL_SEND_FAILED",
            message: "Failed to send verification OTP",
          },
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: {
          message: "Verification OTP sent successfully",
          // email: user.email,
          expires_in: 900, // 15 minutes in seconds
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Resend verification error:", error);

    return NextResponse.json(
      {
        success: false,
        error: {
          code: "INTERNAL_ERROR",
          message: "Failed to resend verification OTP",
        },
      },
      { status: 500 },
    );
  }
}
