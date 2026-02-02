
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

// POST /api/reviews/[review_id]/respond
export async function POST(req, { params }) {
  try {
    const userId = req.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

    const { review_id } = await params;
    const reviewId = parseInt(review_id);
    const body = await req.json();

    if (!body.response) {
        return NextResponse.json({ success: false, error: "Response text is required" }, { status: 400 });
    }

    const review = await prisma.review.findUnique({
        where: { id: reviewId },
        include: { provider: true } // Need to check if user owns provider profile
    });

    if (!review) {
        return NextResponse.json({ success: false, error: "Review not found" }, { status: 404 });
    }

    // Verify Ownership
    // The authenticated user must be the 'userId' of the review's provider.
    // review.provider.userId === userId
    if (review.provider.userId !== parseInt(userId)) {
        return NextResponse.json({ success: false, error: "Unauthorized: You can only respond to reviews on your own profile" }, { status: 403 });
    }

    const updatedReview = await prisma.review.update({
        where: { id: reviewId },
        data: {
            response: body.response,
            responseAt: new Date()
        }
    });

    return NextResponse.json({
        success: true,
        data: updatedReview,
        message: "Response added successfully"
    });

  } catch (error) {
    console.error("Respond Review Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
