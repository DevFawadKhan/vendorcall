
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

// PUT /api/bookings/[booking_id]/reschedule
export async function PUT(req, { params }) {
  try {
    const userId = req.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

    const { booking_id } = await params;
    const body = await req.json();
    
    if (!body.scheduled_date || !body.scheduled_time) {
        return NextResponse.json({ success: false, error: "New date and time required" }, { status: 400 });
    }

    const booking = await prisma.booking.findUnique({
        where: { id: parseInt(booking_id) },
        include: { service: true }
    });

    if (!booking) return NextResponse.json({ success: false, error: "Booking not found" }, { status: 404 });

    // Re-calculate times
    const dateParts = body.scheduled_date.split('-');
    const timeParts = body.scheduled_time.split(':');
    
    const newScheduledDate = new Date(body.scheduled_date);
    const newStartTime = new Date();
    newStartTime.setHours(parseInt(timeParts[0]), parseInt(timeParts[1]), 0, 0);
    
    const durationMinutes = booking.service.durationMinutes || 60;
    const newEndTime = new Date(newStartTime.getTime() + durationMinutes * 60000);

    await prisma.booking.update({
        where: { id: parseInt(booking_id) },
        data: {
            scheduledDate: newScheduledDate,
            scheduledTimeStart: newStartTime,
            scheduledTimeEnd: newEndTime,
            // Maybe set status back to pending if it was dispatched?
            // keeping simple for now.
        }
    });

    return NextResponse.json({ success: true, message: "Booking rescheduled successfully" });

  } catch (error) {
    console.error("Reschedule Booking Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
