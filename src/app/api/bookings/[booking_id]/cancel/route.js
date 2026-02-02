
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

// POST /api/bookings/[booking_id]/cancel
export async function POST(req, { params }) {
  try {
    const userId = req.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

    const { booking_id } = await params;
    const body = await req.json();
    const reason = body.reason;

    const booking = await prisma.booking.findUnique({
        where: { id: parseInt(booking_id) }
    });

    if (!booking) return NextResponse.json({ success: false, error: "Booking not found" }, { status: 404 });

    // Validate Status
    if (['completed', 'cancelled', 'refunded'].includes(booking.bookingStatus)) {
        return NextResponse.json({ success: false, error: "Booking cannot be cancelled in current status" }, { status: 400 });
    }

    // Update
    await prisma.booking.update({
        where: { id: parseInt(booking_id) },
        data: {
            bookingStatus: 'cancelled',
            cancellationReason: reason,
            cancelledBy: parseInt(userId),
            cancelledAt: new Date()
        }
    });

    return NextResponse.json({ success: true, message: "Booking cancelled successfully" });

  } catch (error) {
    console.error("Cancel Booking Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
