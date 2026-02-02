
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET(req, { params }) {
  try {
    const { service_id } = await params; // await params in Next.js 15+ (project uses 16)
    
    const serviceId = parseInt(service_id);

    if (isNaN(serviceId)) {
        return NextResponse.json(
            { success: false, message: "Invalid service ID" },
            { status: 400 }
        );
    }

    const service = await prisma.service.findUnique({
      where: { id: serviceId },
      include: {
        category: true,
        pricingTiers: true,
        providerServices: {
            include: {
                provider: true
            }
        },
        _count: {
            select: {
                providerServices: true
            }
        }
      }
    });

    if (!service) {
        return NextResponse.json(
            { success: false, message: "Service not found" },
            { status: 404 }
        );
    }

    // Format response
    const data = {
      service_id: service.id,
      name: service.name,
      slug: service.slug,
      description: service.description,
      base_price: parseFloat(service.basePrice),
      duration_minutes: service.durationMinutes,
      image_urls: service.imageUrls,
      requirements: service.requirements,
      category: {
        category_id: service.category.id,
        name: service.category.name
      },
      pricing_tiers: service.pricingTiers.map(tier => ({
        tier_id: tier.id,
        tier_name: tier.tierName,
        price: parseFloat(tier.price),
        duration_minutes: tier.durationMinutes,
        includes: tier.includes
      })),
      provider_count: service._count.providerServices,
      avg_rating: 0, // Placeholder
      review_count: 0, // Placeholder
      is_popular: service.isPopular,
      is_active: service.isActive,
      // "Response: Extended service details with providers list" according to prompt
      // I'll add the providers list here as implied
      providers: service.providerServices.map(ps => ({
          provider_id: ps.provider.id,
          business_name: ps.provider.businessName,
          custom_price: ps.customPrice ? parseFloat(ps.customPrice) : null,
          is_verified: ps.provider.isVerified,
          rating: ps.provider.totalRating
      }))
    };

    return NextResponse.json({
      success: true,
      data
    });

  } catch (error) {
    console.error("Error fetching service details:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
      await prisma.$disconnect();
  }
}
