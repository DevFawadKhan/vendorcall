
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET(req, { params }) {
  try {
    const { provider_id } = await params;
    const providerId = parseInt(provider_id);

    if (isNaN(providerId)) {
        return NextResponse.json({ success: false, error: "Invalid provider ID" }, { status: 400 });
    }

    const provider = await prisma.serviceProvider.findUnique({
      where: { id: providerId },
      include: {
        providerServices: {
            include: { service: true }
        },
        availabilities: true,
        documents: true,
        user: {
            select: {
                firstName: true, 
                lastName: true, 
                avatarUrl: true
            }
        }
      }
    });

    if (!provider) {
        return NextResponse.json({ success: false, error: "Provider not found" }, { status: 404 });
    }

    const data = {
        provider_id: provider.id,
        business_name: provider.businessName,
        description: provider.description,
        years_experience: provider.yearsExperience,
        service_areas: provider.serviceAreas,
        total_rating: provider.totalRating,
        review_count: provider.reviewCount,
        completed_jobs: provider.completedJobs,
        is_verified: provider.isVerified,
        is_insured: provider.isInsured,
        is_background_checked: provider.isBackgroundChecked,
        // Added user info which might be useful
        owner_name: `${provider.user.firstName || ''} ${provider.user.lastName || ''}`.trim(),
        avatar_url: provider.user.avatarUrl,
        
        services: provider.providerServices.map(ps => ({
            service_id: ps.service.id,
            name: ps.service.name,
            base_price: parseFloat(ps.service.basePrice),
            custom_price: ps.customPrice ? parseFloat(ps.customPrice) : null
        })),
        
        availability: provider.availabilities.map(av => ({
            day_of_week: av.dayOfWeek,
            // day_name: ... (helper needed? 0=Sunday)
            start_time: av.startTime.toTimeString().slice(0, 5), // 'HH:MM'
            end_time: av.endTime.toTimeString().slice(0, 5)
        })),

        documents: provider.documents.map(doc => ({
            document_type: doc.documentType,
            document_name: doc.documentName,
            is_verified: doc.isVerified
        }))
    };

    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error("Get Provider Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  } finally {
      await prisma.$disconnect();
  }
}
