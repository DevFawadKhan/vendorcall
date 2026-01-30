import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

// Validation schemas
const createServiceSchema = z.object({
  categoryId: z.number().int().positive(),
  name: z.string().min(2).max(200),
  slug: z
    .string()
    .regex(/^[a-z0-9-]+$/)
    .min(2)
    .max(200),
  description: z.string().optional().nullable(),
  basePrice: z
    .number()
    .positive()
    .or(z.string().regex(/^\d+(\.\d{1,2})?$/)),
  durationMinutes: z.number().int().positive().optional().nullable(),
  imageUrls: z.array(z.string().url()).default([]),
  requirements: z.string().optional().nullable(),
  isPopular: z.boolean().default(false),
  isActive: z.boolean().default(true),
  sortOrder: z.number().int().min(0).default(0),
  pricingTiers: z
    .array(
      z.object({
        tierName: z.string().min(1).max(100),
        description: z.string().optional().nullable(),
        price: z.number().positive(),
        durationMinutes: z.number().int().positive(),
        includes: z.array(z.string()).default([]),
        sortOrder: z.number().int().min(0).default(0),
      }),
    )
    .optional()
    .default([]),
});

// const updateServiceSchema = createServiceSchema.partial().omit({ categoryId: true })

// GET /api/services
// export async function GET(request) {
//   try {
//     const { searchParams } = new URL(request.url)
//     const categoryId = searchParams.get('categoryId')
//     const isActive = searchParams.get('isActive') === 'true'
//     const isPopular = searchParams.get('isPopular') === 'true'
//     const includeCategory = searchParams.get('includeCategory') === 'true'
//     const includePricing = searchParams.get('includePricing') === 'true'
//     const search = searchParams.get('search')
//     const minPrice = parseFloat(searchParams.get('minPrice') || '0')
//     const maxPrice = parseFloat(searchParams.get('maxPrice') || '999999')
//     const page = parseInt(searchParams.get('page') || '1')
//     const limit = parseInt(searchParams.get('limit') || '20')
//     const skip = (page - 1) * limit

//     const where = {
//       ...(categoryId ? { categoryId: parseInt(categoryId) } : {}),
//       ...(isActive !== undefined ? { isActive } : {}),
//       ...(isPopular !== undefined ? { isPopular } : {}),
//       basePrice: {
//         gte: minPrice,
//         lte: maxPrice
//       },
//       ...(search ? {
//         OR: [
//           { name: { contains: search, mode: 'insensitive' } },
//           { description: { contains: search, mode: 'insensitive' } }
//         ]
//       } : {})
//     }

//     const [services, total] = await Promise.all([
//       prisma.service.findMany({
//         where,
//         include: {
//           category: includeCategory ? {
//             select: { id: true, name: true, slug: true }
//           } : false,
//           pricingTiers: includePricing ? {
//             where: { service: { isActive: true } },
//             orderBy: { sortOrder: 'asc' }
//           } : false
//         },
//         orderBy: [
//           { sortOrder: 'asc' },
//           { createdAt: 'desc' }
//         ],
//         skip,
//         take: limit
//       }),
//       prisma.service.count({ where })
//     ])

//     return NextResponse.json({
//       success: true,
//       data: services,
//       pagination: {
//         total,
//         page,
//         limit,
//         totalPages: Math.ceil(total / limit),
//         hasNextPage: page * limit < total,
//         hasPrevPage: page > 1
//       }
//     })
//   } catch (error) {
//     console.error('GET /api/services error:', error)
//     return NextResponse.json(
//       { success: false, error: 'Failed to fetch services', code: 'FETCH_ERROR' },
//       { status: 500 }
//     )
//   }
// }

// POST /api/services
export async function POST(request) {
  try {
    const userId = request.headers.get("x-user-id");

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized", code: "UNAUTHORIZED" },
        { status: 401 },
      );
    }

    const body = await request.json();
    const validatedData = createServiceSchema.parse({
      ...body,
      basePrice: parseFloat(body.basePrice),
    });

    // Check if category exists and is active
    const category = await prisma.serviceCategory.findUnique({
      where: {
        id: validatedData.categoryId,
        isActive: true,
      },
    });

    if (!category) {
      return NextResponse.json(
        {
          success: false,
          error: "Category not found or inactive",
          code: "CATEGORY_NOT_FOUND",
        },
        { status: 404 },
      );
    }

    // Check if slug already exists
    const existingService = await prisma.service.findUnique({
      where: { slug: validatedData.slug },
    });

    if (existingService) {
      return NextResponse.json(
        {
          success: false,
          error: "Service with this slug already exists",
          code: "DUPLICATE_SLUG",
        },
        { status: 409 },
      );
    }

    // Create service with pricing tiers in transaction
    const service = await prisma.$transaction(async (tx) => {
      const newService = await tx.service.create({
        data: {
          categoryId: validatedData.categoryId,
          name: validatedData.name,
          slug: validatedData.slug,
          description: validatedData.description,
          basePrice: validatedData.basePrice,
          durationMinutes: validatedData.durationMinutes,
          imageUrls: validatedData.imageUrls,
          requirements: validatedData.requirements,
          isPopular: validatedData.isPopular,
          isActive: validatedData.isActive,
          sortOrder: validatedData.sortOrder,
        },
      });

      // Create pricing tiers if provided
      if (validatedData.pricingTiers && validatedData.pricingTiers.length > 0) {
        await tx.servicePricingTier.createMany({
          data: validatedData.pricingTiers.map((tier) => ({
            serviceId: newService.id,
            tierName: tier.tierName,
            description: tier.description,
            price: tier.price,
            durationMinutes: tier.durationMinutes,
            includes: tier.includes,
            sortOrder: tier.sortOrder,
          })),
        });
      }

      // Fetch the complete service with pricing tiers
      return tx.service.findUnique({
        where: { id: newService.id },
        include: {
          category: {
            select: { id: true, name: true, slug: true },
          },
          pricingTiers: true,
        },
      });
    });

    return NextResponse.json(
      {
        success: true,
        data: service,
        message: "Service created successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("POST /api/services error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: error.errors,
          code: "VALIDATION_ERROR",
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "Failed to create service",
        code: "CREATE_ERROR",
      },
      { status: 500 },
    );
  }
}
