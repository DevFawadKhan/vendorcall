import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import sharp from "sharp";
import prisma from "@/app/lib/prisma";

// Helper function to handle file upload
async function saveAvatarFile(file, userId) {
  try {
    // Create uploads directory if it doesn't exist
    const uploadDir = path.join(process.cwd(), "public", "uploads", "avatars");
    await mkdir(uploadDir, { recursive: true });

    // Generate unique filename
    const uniqueId = uuidv4();
    const fileName = `avatar_${userId}_${uniqueId}.jpg`;
    const filePath = path.join(uploadDir, fileName);

    // Convert buffer to image and process with sharp
    const buffer = Buffer.from(await file.arrayBuffer());

    // Process image: resize, compress, convert to JPEG
    const processedImage = await sharp(buffer)
      .resize(500, 500, {
        fit: "cover",
        position: "center",
      })
      .jpeg({ quality: 80 })
      .toBuffer();

    // Save to file system
    await writeFile(filePath, processedImage);

    // Return relative path for database storage
    return `/uploads/avatars/${fileName}`;
  } catch (error) {
    console.error("Error saving avatar:", error);
    throw new Error("Failed to save avatar file");
  }
}

export async function POST(request) {
  try {
    const userIdStr = request.headers.get("x-user-id");
    const userId = parseInt(userIdStr, 10);
    console.log("userId after parsing (number):", userId);
    console.log("Type after parsing:", typeof userId);
    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized: User not authenticated",
        },
        { status: 401 },
      );
    }

    // Parse form data
    const formData = await request.formData();
    const avatarFile = formData.get("avatar");

    if (!avatarFile || typeof avatarFile === "string") {
      return NextResponse.json(
        {
          success: false,
          message: "No avatar file provided",
        },
        { status: 400 },
      );
    }

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!allowedTypes.includes(avatarFile.type)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid file type. Only JPEG, PNG, GIF, and WebP are allowed.",
        },
        { status: 400 },
      );
    }
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (avatarFile.size > maxSize) {
      return NextResponse.json(
        {
          success: false,
          message: "File too large. Maximum size is 5MB.",
        },
        { status: 400 },
      );
    }
    // Save the file
    const avatarPath = await saveAvatarFile(avatarFile, userId);
    // Update user in database
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { avatarUrl: avatarPath },
      select: {
        id: true,
        email: true,
        firstName: true,
        avatarUrl: true,
        userType: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return NextResponse.json({
      success: true,
      message: "Avatar uploaded successfully",
      user: updatedUser,
      //   avatarUrl: avatarPath,
    });
  } catch (error) {
    console.error("Avatar upload error:", error);

    if (error.code === "P2025") {
      // Prisma: Record not found
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Internal server error",
      },
      { status: 500 },
    );
  }
}
