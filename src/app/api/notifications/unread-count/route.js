
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

// GET /api/notifications/unread-count
export async function GET(req) {
  try {
    const userId = req.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

    const count = await prisma.notification.count({
        where: {
            userId: parseInt(userId),
            isRead: false
        }
    });

    return NextResponse.json({ success: true, count });

  } catch (error) {
    console.error("Get Unread Count Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
