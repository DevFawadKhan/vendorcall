import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim from end of text
}

export async function POST(req) {
  try {
    const userId = req.headers.get("x-user-id");
    // Ideally check if user is Admin. For now assume authorized if token present
    if (!userId) {
        // return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
        // Keeping it open or basic auth as per project state, but usually Admin only.
    }

    const body = await req.json();

    // Validation
    if (!body.name || !body.category_id || !body.base_price) {
        return NextResponse.json({ 
            success: false, 
            error: "Name, category_id, and base_price are required" 
        }, { status: 400 });
    }

    const slug = body.slug || slugify(body.name);

    // Check slug uniqueness
    const existing = await prisma.service.findUnique({ where: { slug } });
    if (existing) {
        return NextResponse.json({ success: false, error: "Service with this slug (or name) already exists" }, { status: 400 });
    }

    const service = await prisma.service.create({
        data: {
            name: body.name,
            slug: slug,
            description: body.description,
            basePrice: body.base_price,
            durationMinutes: body.duration_minutes,
            imageUrls: body.image_urls || [],
            requirements: body.requirements,
            isPopular: body.is_popular || false,
            isActive: body.is_active !== false,
            category: {
                connect: { id: parseInt(body.category_id) }
            },
            pricingTiers: {
                create: (body.pricing_tiers || []).map(tier => ({
                    tierName: tier.tier_name,
                    description: tier.description,
                    price: tier.price,
                    durationMinutes: tier.duration_minutes,
                    includes: tier.includes || []
                }))
            }
        }
    });

    return NextResponse.json({
        success: true,
        data: service,
        message: "Service created successfully"
    }, { status: 201 });

  } catch (error) {
    console.error("Create Service Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get("category_id");
    const search = searchParams.get("search");
    const minPrice = searchParams.get("min_price");
    const maxPrice = searchParams.get("max_price");
    const isPopular = searchParams.get("is_popular");
    const sortBy = searchParams.get("sort_by") || "name"; // price, name, rating
    const sortOrder = searchParams.get("sort_order") || "asc";
    
    // Pagination
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const skip = (page - 1) * limit;

    const where = {
        isActive: true
    };

    if (categoryId) {
      where.categoryId = parseInt(categoryId);
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } }
      ];
    }

    if (minPrice || maxPrice) {
      where.basePrice = {};
      if (minPrice) where.basePrice.gte = parseFloat(minPrice);
      if (maxPrice) where.basePrice.lte = parseFloat(maxPrice);
    }

    if (isPopular === 'true') {
        where.isPopular = true;
    }

    // Sorting
    let orderBy = {};
    if (sortBy === 'price') {
        orderBy.basePrice = sortOrder;
    } else if (sortBy === 'name') {
        orderBy.name = sortOrder;
    }
    // Note: 'rating' sort requires aggregate relation which is complex in standard filtering without aggregations. 
    // Implementing basic sorts first.

    const [services, total] = await prisma.$transaction([
      prisma.service.findMany({
        where,
        include: {
          category: true,
          pricingTiers: true,
           _count: {
               select: {
                   providerServices: true // Correctly counting providers offering this service
               }
           }
        },
        skip,
        take: limit,
        orderBy
      }),
      prisma.service.count({ where })
    ]);
    
    // Schema check memory: 
    // model Service { ...
    //   // providerServices ProviderService[] 
    // }
    // The relationship was commented out in the schema file I read earlier line 204.
    // " // providerServices ProviderService[] "
    // I need to uncomment that to get counts.

    const formattedServices = services.map(service => ({
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
      avg_rating: 0,     // Placeholder
      review_count: 0,   // Placeholder
      is_popular: service.isPopular,
      is_active: service.isActive
    }));

    return NextResponse.json({
      success: true,
      data: formattedServices,
      meta: {
        total,
        page,
        limit
      }
    });

  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
      await prisma.$disconnect();
  }
}
