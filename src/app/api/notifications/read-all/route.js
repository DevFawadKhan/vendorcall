
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

// PUT /api/notifications/read-all
export async function PUT(req) {
  try {
    const userId = req.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

    await prisma.notification.updateMany({
        where: { 
            userId: parseInt(userId),
            isRead: false
        },
        data: {
            isRead: true,
            readAt: new Date()
        }
    });

    return NextResponse.json({ success: true, message: "All notifications marked as read" });

  } catch (error) {
    console.error("Mark All Read Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
