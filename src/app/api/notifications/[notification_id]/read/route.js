
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

// PUT /api/notifications/[notification_id]/read
export async function PUT(req, { params }) {
  try {
    const userId = req.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

    const { notification_id } = await params;
    const notificationId = parseInt(notification_id);

    // Verify ownership
    const existing = await prisma.notification.findUnique({
        where: { id: notificationId }
    });

    if (!existing) {
        return NextResponse.json({ success: false, error: "Notification not found" }, { status: 404 });
    }

    if (existing.userId !== parseInt(userId)) {
        return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 403 });
    }

    const updated = await prisma.notification.update({
        where: { id: notificationId },
        data: {
            isRead: true,
            readAt: new Date()
        }
    });

    return NextResponse.json({ success: true, data: updated, message: "Marked as read" });

  } catch (error) {
    console.error("Mark Read Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
