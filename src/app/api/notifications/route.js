
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

// GET /api/notifications
export async function GET(req) {
  try {
    const userId = req.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

    const { searchParams } = new URL(req.url);
    const isRead = searchParams.get("is_read"); // 'true' or 'false'
    const type = searchParams.get("type");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const skip = (page - 1) * limit;

    const where = {
        userId: parseInt(userId)
    };

    if (isRead !== null && isRead !== undefined) {
        where.isRead = isRead === 'true';
    }

    if (type) {
        where.notificationType = type;
    }

    const [notifications, total] = await prisma.$transaction([
        prisma.notification.findMany({
            where,
            orderBy: { createdAt: 'desc' },
            skip,
            take: limit
        }),
        prisma.notification.count({ where })
    ]);

    return NextResponse.json({
        success: true,
        data: notifications,
        meta: {
            total,
            page,
            limit
        }
    });

  } catch (error) {
    console.error("Get Notifications Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
