import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

// Validation schemas
const createCategorySchema = z.object({
  name: z.string().min(2).max(100),
  slug: z
    .string()
    .regex(/^[a-z0-9-]+$/)
    .min(2)
    .max(100),
  description: z.string().optional().nullable(),
  iconUrl: z.string().url().optional().nullable(),
  parentCategoryId: z.number().int().positive().optional().nullable(),
  sortOrder: z.number().int().min(0).default(0),
  isActive: z.boolean().default(true),
});

// const updateCategorySchema = createCategorySchema.partial();

// GET /api/categories
// export async function GET(request) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const includeSubcategories =
//       searchParams.get("includeSubcategories") === "true";
//     const includeServices = searchParams.get("includeServices") === "true";
//     const parentOnly = searchParams.get("parentOnly") === "true";
//     const isActive = searchParams.get("isActive")
//       ? searchParams.get("isActive") === "true"
//       : undefined;

//     const where = {
//       ...(parentOnly ? { parentCategoryId: null } : {}),
//       ...(isActive !== undefined ? { isActive } : {}),
//     };

//     const categories = await prisma.serviceCategory.findMany({
//       where,
//       include: {
//         subCategories: includeSubcategories,
//         services: includeServices
//           ? {
//               where: { isActive: true },
//               take: 10, // Limit included services
//             }
//           : false,
//         parentCategory: includeSubcategories,
//       },
//       orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
//     });

//     return NextResponse.json({
//       success: true,
//       data: categories,
//       count: categories.length,
//     });
//   } catch (error) {
//     console.error("GET /api/categories error:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         error: "Failed to fetch categories",
//         code: "FETCH_ERROR",
//       },
//       { status: 500 },
//     );
//   }
// }

// POST /api/categories
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

    // Validate input
    const validatedData = createCategorySchema.parse(body);

    // Check if slug already exists
    const existingCategory = await prisma.serviceCategory.findUnique({
      where: { slug: validatedData.slug },
    });

    if (existingCategory) {
      return NextResponse.json(
        {
          success: false,
          error: "Category with this slug already exists",
          code: "DUPLICATE_SLUG",
        },
        { status: 409 },
      );
    }

    // Check parent category exists if provided
    if (validatedData.parentCategoryId) {
      const parentCategory = await prisma.serviceCategory.findUnique({
        where: { id: validatedData.parentCategoryId },
      });

      if (!parentCategory) {
        return NextResponse.json(
          {
            success: false,
            error: "Parent category not found",
            code: "PARENT_NOT_FOUND",
          },
          { status: 404 },
        );
      }
    }
    const category = await prisma.serviceCategory.create({
      data: {
        ...validatedData,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: category,
        message: "Category created successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("POST /api/categories error:", error);

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
        error: "Failed to create category",
        code: "CREATE_ERROR",
      },
      { status: 500 },
    );
  }
}
