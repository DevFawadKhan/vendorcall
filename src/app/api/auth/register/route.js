// // app/api/auth/register/route.js
// // const { prisma } = require("@/lib/prisma");
// import { NextResponse as Response } from "next/server";
// import prisma from "@/app/lib/prisma";
// import { validate, registerSchema } from "@/app/lib/validators.js";
// import { hashPassword, validatePassword } from "@/app/lib/auth";
// import { generateTokens } from "@/app/lib/jwt.js";

// async function POST(request) {
//   try {
//     const body = await request.json();
//     console.log("Register body:", body);
//     // Validate input
//     // const validation = validate(registerSchema, body);
//     // console.log("Validation result:", validation);
//     // if (!validation.success) {
//     //   return Response.json(
//     //     {
//     //       success: false,
//     //       error: {
//     //         code: "VALIDATION_ERROR",
//     //         message: "Validation failed",
//     //         details: validation.errors,
//     //       },
//     //     },
//     //     { status: 422 },
//     //   );
//     // }

//     const {
//       email,
//       phone,
//       password,
//       firstName,
//       lastName,
//       userType,
//       dateOfBirth,
//       gender,
//     } = body;
//     // Check if user already exists
//     const existingUser = await prisma.user.findUnique({
//       where: { email },
//     });

//     if (existingUser) {
//       return Response.json(
//         {
//           success: false,
//           error: {
//             code: "USER_EXISTS",
//             message: "User with this email already exists",
//           },
//         },
//         { status: 409 },
//       );
//     }

//     // Validate password strength
//     // const passwordValidation = validatePassword(password);
//     // if (!passwordValidation.valid) {
//     //   return Response.json(
//     //     {
//     //       success: false,
//     //       error: {
//     //         code: "VALIDATION_ERROR",
//     //         message: passwordValidation.message,
//     //       },
//     //     },
//     //     { status: 422 },
//     //   );
//     // }

//     // Hash password
//     const passwordHash = await hashPassword(password);

//     // Create user
//     const user = await prisma.user.create({
//       data: {
//         email,
//         phone,
//         // passwordHash,
//         // firstName: firstName,
//         // lastName: lastName,
//         // userType: userType,
//         // dateOfBirth: dateOfBirth,
//       },
//     });

//     // Create user profile if additional data provided
//     if (dateOfBirth || gender) {
//       await prisma.userProfile.create({
//         data: {
//           userId: user.id,
//           dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
//           gender: gender || null,
//         },
//       });
//     }

//     // Generate JWT tokens
//     const tokens = generateTokens({
//       userId: user.id,
//       email: user.email,
//       userType: user.userType,
//     });

//     // Prepare response
//     const responseData = {
//       user_id: user.id,
//       email: user.email,
//       first_name: user.firstName,
//       last_name: user.lastName,
//       user_type: user.userType,
//       is_verified: user.isVerified,
//       access_token: tokens.accessToken,
//       refresh_token: tokens.refreshToken,
//       expires_in: 3600,
//     };

//     return Response.json(
//       {
//         success: true,
//         data: responseData,
//       },
//       { status: 201 },
//     );
//   } catch (error) {
//     console.error("Registration error:", error);

//     return Response.json(
//       {
//         success: false,
//         error: {
//           code: "INTERNAL_ERROR",
//           message: "Something went wrong",
//         },
//       },
//       { status: 500 },
//     );
//   }
// }

// export { POST };

// app/api/auth/register/route.js
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { validate, registerSchema } from "@/app/lib/validators";
import { hashPassword, validatePassword } from "@/app/lib/auth";
import { generateTokens } from "@/app/lib/jwt";

export async function POST(request) {
  try {
    // Parse request body
    let body;
    try {
      body = await request.json();
      console.log("Register request body:", body);
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "INVALID_JSON",
            message: "Invalid JSON in request body",
          },
        },
        { status: 400 },
      );
    }

    // Validate input
    const validation = validate(registerSchema, body);
    // console.log("Validation result:", validation);

    if (!validation.success) {
      return NextResponse.json(
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

    // Extract validated data (note: snake_case from validator)
    const {
      email,
      phone,
      password,
      firstName,
      lastName,
      userType,
      dateOfBirth,
      gender,
    } = validation.data;

    // Check if user exists
    const existingUser = await prisma.User.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "USER_EXISTS",
            message: "User with this email already exists",
          },
        },
        { status: 409 },
      );
    }
    // Validate password
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: passwordValidation.message,
          },
        },
        { status: 422 },
      );
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    // Create user and profile in transaction
    let user;
    try {
      // Create user first
      user = await prisma.User.create({
        data: {
          email,
          phone,
          passwordHash,
          firstName: firstName, // Convert to camelCase for Prisma
          lastName: lastName, // Convert to camelCase for Prisma
          userType: userType, // Convert to camelCase for Prisma
        },
      });
      // Create profile if data provided
      // if (dateOfBirth || gender) {
      //   await prisma.userProfiles.create({
      //     data: {
      //       userId: user.id,
      //       dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
      //       gender: gender || null
      //     }
      //   });
      // }
    } catch (dbError) {
      console.error("Database error:", dbError);

      // Handle specific Prisma errors
      if (dbError.code === "P2002") {
        return NextResponse.json(
          {
            success: false,
            error: {
              code: "DUPLICATE_ENTRY",
              message: "User with this email already exists",
            },
          },
          { status: 409 },
        );
      }

      throw dbError;
    }

    // Generate tokens
    // const tokens = generateTokens({
    //   userId: user.id,
    //   email: user.email,
    //   userType: user.userType,
    // });

    // Prepare response
    const responseData = {
      user_id: user.id,
      email: user.email,
      first_name: user.firstName,
      last_name: user.lastName,
      user_type: user.userType,
      is_verified: user.isVerified,
      // access_token: tokens.accessToken,
      // refresh_token: tokens.refreshToken,
      // expires_in: 3600,
    };

    return NextResponse.json(
      {
        success: true,
        data: responseData,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Registration error:", {
      message: error.message,
      code: error.code,
      name: error.name,
      stack: error.stack,
    });

    // Generic error response
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "INTERNAL_ERROR",
          message:
            process.env.NODE_ENV === "development"
              ? error.message
              : "Something went wrong",
        },
      },
      { status: 500 },
    );
  }
}
