import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { z } from "zod";

// Validation schema for profile update
const updateProfileSchema = z.object({
  firstName: z.string().min(1, "First name is required").optional(),
  lastName: z.string().min(1, "Last name is required").optional(),
  phone: z.string().optional().nullable(),
  dateOfBirth: z.string().optional().nullable(),
  gender: z
    .enum(["male", "female", "other", "prefer_not_to_say"])
    .optional()
    .nullable(),
  bio: z
    .string()
    .max(500, "Bio must be less than 500 characters")
    .optional()
    .nullable(),
  languages: z.array(z.string()).optional().nullable(),
  notificationPreferences: z
    .object({
      email: z.boolean().optional(),
      sms: z.boolean().optional(),
      push: z.boolean().optional(),
      marketing: z.boolean().optional(),
    })
    .optional()
    .nullable(),
});

function getUserFromRequest(request) {
  if (request.user) {
    return request.user;
  }

  // Alternative: check headers if middleware sets them
  const userId = request.headers.get("x-user-id");
  const userrole = request.headers.get("x-user-role");

  if (userId) {
    return {
      userId: parseInt(userId),
      userrole,
    };
  }

  return null;
}

// GET: Get user profile
export async function GET(request) {
  try {
    // Get user from request (set by middleware)
    const user = getUserFromRequest(request);

    console.log("USER", user);
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "UNAUTHORIZED",
            message: "Authentication required",
          },
        },
        { status: 401 },
      );
    }

    // Fetch user with profile from database
    const dbUser = await prisma.user.findUnique({
      where: {
        id: user.userId,
        isActive: true,
      },
      include: {
        profile: true,
      },
    });

    if (!dbUser) {
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

    const profileData = {
      user_id: dbUser.id,
      email: dbUser.email,
      phone: dbUser.phone,
      first_name: dbUser.firstName,
      last_name: dbUser.lastName,
      user_type: dbUser.userType,
      avatar_url: dbUser.avatarUrl,
      date_of_birth:
        dbUser.profile?.dateOfBirth?.toISOString().split("T")[0] || null,
      gender: dbUser.profile?.gender || null,
      bio: dbUser.profile?.bio || null,
      languages: dbUser.profile?.languages || [],
      notification_preferences: dbUser.profile?.notificationPreferences || {
        email: true,
        sms: true,
        push: true,
        marketing: false,
      },
      created_at: dbUser.createdAt.toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        data: profileData,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Get profile error:", error);

    return NextResponse.json(
      {
        success: false,
        error: {
          code: "INTERNAL_ERROR",
          message: "Failed to fetch profile",
        },
      },
      { status: 500 },
    );
  }
}

// PUT: Update user profile
export async function PUT(request) {
  try {
    // Get user from request (set by middleware)
    const user = getUserFromRequest(request);

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "UNAUTHORIZED",
            message: "Authentication required",
          },
        },
        { status: 401 },
      );
    }

    const body = await request.json();

    // Validate input
    const validation = updateProfileSchema.safeParse(body);
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

    const data = validation.data;

    // Check if user exists and is active
    const dbUser = await prisma.user.findUnique({
      where: {
        id: user.userId,
        isActive: true,
      },
      include: {
        profile: true,
      },
    });

    if (!dbUser) {
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

    // Prepare user update data
    const userUpdateData = {};
    if (data.firstName !== undefined) userUpdateData.firstName = data.firstName;
    if (data.lastName !== undefined) userUpdateData.lastName = data.lastName;
    if (data.phone !== undefined) userUpdateData.phone = data.phone;

    // Prepare profile update data
    const profileUpdateData = {};
    if (data.dateOfBirth !== undefined) {
      profileUpdateData.dateOfBirth = data.dateOfBirth
        ? new Date(data.dateOfBirth)
        : null;
    }
    if (data.gender !== undefined) profileUpdateData.gender = data.gender;
    if (data.bio !== undefined) profileUpdateData.bio = data.bio;
    if (data.languages !== undefined)
      profileUpdateData.languages = data.languages;
    if (data.notificationPreferences !== undefined) {
      profileUpdateData.notificationPreferences = data.notificationPreferences;
    }

    // Update user and profile in transaction
    const updatedUser = await prisma.$transaction(async (tx) => {
      // Update user if there's data to update
      let userUpdatePromise;
      if (Object.keys(userUpdateData).length > 0) {
        userUpdatePromise = tx.user.update({
          where: { id: user.userId },
          data: userUpdateData,
        });
      } else {
        userUpdatePromise = Promise.resolve(dbUser);
      }

      // Update or create profile
      let profileUpdatePromise;
      if (Object.keys(profileUpdateData).length > 0) {
        if (dbUser.profile) {
          profileUpdatePromise = tx.userProfile.update({
            where: { userId: user.userId },
            data: profileUpdateData,
          });
        } else {
          profileUpdatePromise = tx.userProfile.create({
            data: {
              userId: user.userId,
              ...profileUpdateData,
            },
          });
        }
      } else {
        profileUpdatePromise = Promise.resolve(dbUser.profile);
      }

      const [updatedUser, updatedProfile] = await Promise.all([
        userUpdatePromise,
        profileUpdatePromise,
      ]);

      return {
        ...updatedUser,
        profile: updatedProfile,
      };
    });

    // Format response
    const profileData = {
      user_id: updatedUser.id,
      email: updatedUser.email,
      phone: updatedUser.phone,
      first_name: updatedUser.firstName,
      last_name: updatedUser.lastName,
      user_type: updatedUser.userType,
      avatar_url: updatedUser.avatarUrl,
      date_of_birth:
        updatedUser.profile?.dateOfBirth?.toISOString().split("T")[0] || null,
      gender: updatedUser.profile?.gender || null,
      bio: updatedUser.profile?.bio || null,
      languages: updatedUser.profile?.languages || [],
      notification_preferences: updatedUser.profile
        ?.notificationPreferences || {
        email: true,
        sms: true,
        push: true,
        marketing: false,
      },
      created_at: updatedUser.createdAt.toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        data: profileData,
        message: "Profile updated successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Update profile error:", error);

    return NextResponse.json(
      {
        success: false,
        error: {
          code: "INTERNAL_ERROR",
          message: "Failed to update profile",
        },
      },
      { status: 500 },
    );
  }
}

// PATCH: Partial update
// export async function PATCH(request) {
//   // PATCH can use the same logic as PUT
//   return PUT(request);
// }
