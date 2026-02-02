
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function POST(req) {
  try {
    const userId = req.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

    const body = await req.json();

    if (!body.booking_id || !body.rating) {
        return NextResponse.json({ success: false, error: "Booking ID and rating are required" }, { status: 400 });
    }

    if (body.rating < 1 || body.rating > 5) {
        return NextResponse.json({ success: false, error: "Rating must be between 1 and 5" }, { status: 400 });
    }

    // 1. Verify Booking
    const booking = await prisma.booking.findUnique({
        where: { id: parseInt(body.booking_id) },
        include: { review: true }
    });

    if (!booking) {
        return NextResponse.json({ success: false, error: "Booking not found" }, { status: 404 });
    }

    // 2. Authorization Check: Only the customer who made the booking can review
    if (booking.customerId !== parseInt(userId)) {
        return NextResponse.json({ success: false, error: "Unauthorized: only the booking customer can review" }, { status: 403 });
    }

    // 3. Status Check: Only completed bookings
    // Assuming 'completed' is the final status.
    if (booking.bookingStatus !== 'completed') {
       return NextResponse.json({ success: false, error: "Only completed bookings can be reviewed" }, { status: 400 });
    }

    // 4. Duplicate Check
    if (booking.review) {
        return NextResponse.json({ success: false, error: "Booking already reviewed" }, { status: 400 });
    }

    // 5. Create Review
    if (!booking.providerId) {
        // Should not happen for completed booking, but safe check
        return NextResponse.json({ success: false, error: "Booking has no provider assigned" }, { status: 400 });
    }

    const review = await prisma.review.create({
        data: {
            bookingId: booking.id,
            reviewerId: parseInt(userId),
            providerId: booking.providerId,
            rating: body.rating,
            comment: body.comment,
            media: {
                create: (body.media_urls || []).map((url, index) => ({
                    mediaUrl: url,
                    sortOrder: index
                }))
            }
        },
        include: {
            media: true
        }
    });

    // 6. Update Provider Aggregates (Async or here)
    // Recalculate average rating for provider
    // Fetch all reviews for provider
    const aggregates = await prisma.review.aggregate({
        where: { providerId: booking.providerId },
        _avg: { rating: true },
        _count: { rating: true }
    });

    await prisma.serviceProvider.update({
        where: { id: booking.providerId },
        data: {
            totalRating: aggregates._avg.rating || 0,
            reviewCount: aggregates._count.rating || 0
        }
    });

    return NextResponse.json({
        success: true,
        data: review,
        message: "Review submitted successfully"
    }, { status: 201 });

  } catch (error) {
    console.error("Submit Review Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
