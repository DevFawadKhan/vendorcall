// app/api/auth/login/route.js
import { NextResponse as Response } from "next/server";
import prisma from "@/app/lib/prisma";
import { validate, loginSchema } from "@/app/lib/validators.js";
import { comparePassword } from "@/app/lib/auth";
import { generateTokens } from "@/app/lib/jwt.js";

async function POST(request) {
  try {
    const body = await request.json();
    console.log("Login body:", body);
    // Validate input
    const validation = validate(loginSchema, body);
    if (!validation.success) {
      return Response.json(
        {
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Validation failed",
            details: validation.errors,
          },
        },
        { status: 422 },
      );
    }

    const { email, password } = validation.data;

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        profile: true,
      },
    });

    if (!user) {
      return Response.json(
        {
          success: false,
          error: {
            code: "INVALID_CREDENTIALS",
            message: "Invalid email or password",
          },
        },
        { status: 401 },
      );
    }

    // Check if user is active
    if (!user.isActive) {
      return Response.json(
        {
          success: false,
          error: {
            code: "ACCOUNT_DISABLED",
            message: "Account is disabled",
          },
        },
        { status: 403 },
      );
    }

    // Verify password
    const isPasswordValid = await comparePassword(password, user.passwordHash);
    if (!isPasswordValid) {
      return Response.json(
        {
          success: false,
          error: {
            code: "INVALID_CREDENTIALS",
            message: "Invalid email or password",
          },
        },
        { status: 401 },
      );
    }

    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    });

    // Generate JWT tokens
    const tokens = generateTokens({
      userId: user.id,
      email: user.email,
      userType: user.userType,
    });

    // Prepare response
    const responseData = {
      user_id: user.id,
      email: user.email,
      first_name: user.firstName,
      last_name: user.lastName,
      user_type: user.userType,
      is_verified: user.isVerified,
      access_token: tokens.accessToken,
      refresh_token: tokens.refreshToken,
      expires_in: 3600,
    };

    return Response.json(
      {
        success: true,
        data: responseData,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Login error:", error);

    return Response.json(
      {
        success: false,
        error: {
          code: "INTERNAL_ERROR",
          message: "Something went wrong",
        },
      },
      { status: 500 },
    );
  }
}

export { POST };
