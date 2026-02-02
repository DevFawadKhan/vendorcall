
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

// GET /api/providers/[provider_id]/reviews
export async function GET(req, { params }) {
  try {
    const { provider_id } = await params;
    const providerId = parseInt(provider_id);
    
    const { searchParams } = new URL(req.url);
    const rating = searchParams.get("rating");
    const sortBy = searchParams.get("sort_by") || "date"; // 'date' or 'rating'
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    const where = {
        providerId: providerId
    };

    if (rating) {
        where.rating = parseInt(rating);
    }

    let orderBy = {};
    if (sortBy === 'rating') {
        orderBy = { rating: 'desc' };
    } else {
        orderBy = { createdAt: 'desc' };
    }

    const [reviews, total] = await prisma.$transaction([
        prisma.review.findMany({
            where,
            include: {
                reviewer: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        avatarUrl: true
                    }
                },
                media: true
            },
            orderBy,
            skip,
            take: limit
        }),
        prisma.review.count({ where })
    ]);

    return NextResponse.json({
        success: true,
        data: reviews.map(review => ({
            review_id: review.id,
            reviewer: {
                name: `${review.reviewer.firstName || ''} ${review.reviewer.lastName || ''}`.trim() || 'Anonymous',
                avatar_url: review.reviewer.avatarUrl
            },
            rating: review.rating,
            comment: review.comment,
            response: review.response,
            response_at: review.responseAt,
            media_urls: review.media.map(m => m.mediaUrl),
            created_at: review.createdAt
        })),
        meta: {
            total,
            page,
            limit
        }
    });

  } catch (error) {
    console.error("Get Provider Reviews Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
