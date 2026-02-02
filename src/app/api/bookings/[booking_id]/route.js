
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

// GET /api/bookings/[booking_id]
export async function GET(req, { params }) {
  try {
    const userId = req.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

    const { booking_id } = await params;
    const bookingId = parseInt(booking_id);

    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      include: {
        service: true,
        provider: {
            include: { user: true } // for phone/contact
        },
        addons: true,
        customer: true // Verify ownership
      }
    });

    if (!booking) {
        return NextResponse.json({ success: false, error: "Booking not found" }, { status: 404 });
    }

    // Access control: Only owner or assigned provider (or admin)
    const isOwner = booking.customerId === parseInt(userId);
    // Provider check tricky without looking up provider profile of current user.
    // For simplicity, strict owner check + provider check if needed.
    // Let's assume Owner check is sufficient for 'Get Booking Details' context unless it's the provider app.
    // If provider, we should check `booking.provider.userId === userId`.
    
    let isProvider = false;
    if (booking.provider && booking.provider.userId === parseInt(userId)) {
        isProvider = true;
    }

    if (!isOwner && !isProvider) {
        return NextResponse.json({ success: false, error: "Unauthorized access to this booking" }, { status: 403 });
    }

    return NextResponse.json({
        success: true,
        data: {
            booking_id: booking.id,
            booking_number: booking.bookingNumber,
            scheduled_date: booking.scheduledDate.toISOString().split('T')[0],
            scheduled_time_start: booking.scheduledTimeStart.toTimeString().slice(0, 5),
            scheduled_time_end: booking.scheduledTimeEnd ? booking.scheduledTimeEnd.toTimeString().slice(0, 5) : null,
            status: booking.bookingStatus,
            payment_status: booking.paymentStatus,
            total_amount: booking.totalAmount,
            base_price: booking.basePrice,
            tax_amount: booking.taxAmount,
            discount_amount: booking.discountAmount,
            service_address: booking.serviceAddress,
            special_instructions: booking.specialInstructions,
            provider: booking.provider ? {
                provider_id: booking.provider.id,
                business_name: booking.provider.businessName,
                phone: booking.provider.user.phone
            } : null,
            service: {
                name: booking.service.name,
                duration_minutes: booking.service.durationMinutes
            },
            addons: booking.addons
        }
    });

  } catch (error) {
    console.error("Get Booking Details Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
