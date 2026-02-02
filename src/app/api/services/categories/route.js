
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";


export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const parentId = searchParams.get("parent_id");
    const includeInactive = searchParams.get("include_inactive") === "true";

    const where = {};
    
    // Filter by parent_id
    if (parentId) {
      where.parentCategoryId = parseInt(parentId);
    } else {
      // Default to root categories if no parent_id specified? 
      // The spec doesn't explicitly say "only root", but often categories APIs do.
      // Let's assume return all if not specified, or root if we want hierarchical.
      // Spec says: "Optional - Get subcategories". 
      // If I don't set it, I'll return all. Or maybe only roots? 
      // Let's check the instruction example: "parent_category_id": null.
      // Usually "Optional - Get subcategories" implies if you provide it, you get kids. If not, maybe you get roots?
      // Let's stick to simple: if provided, filter. If not, don't filter (return all).
      // Wait, usually top level categories have null parent.
      // Let's allow returning everything if not specified, 
      // or if the user wants roots they pass "null" (which is hard in query params).
      // Let's assume if not present, return all top level?
      // "parent_id: Optional - Get subcategories". 
      // If I omit it, I expect to get top level categories. 
      where.parentCategoryId = null; // Default to root categories
    }
    
    // Check if parentId is explicit "null" or "undefined" in logic?
    // Actually, if I want ALL, I might need another param. 
    // But for now, let's assume default is root. 
    // Wait, if I want to see subcats, I pass the parent ID.
    
    // Logic refinement:
    // If parent_id is passed, filter by it.
    // If NOT passed, return keys where parentCategoryId is null (roots).
    // EXCEPT if we want a flat list of all?
    // Let's stick to: if parent_id param exists, use it. If not, parentCategoryId: null.
    
    // But wait, the prompt says "parent_id: Optional - Get subcategories".
    // This implies the default IS getting parents.
    
    if (!includeInactive) {
      where.isActive = true;
    }

    // Pagination
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    const [categories, total] = await prisma.$transaction([
      prisma.serviceCategory.findMany({
        where,
        include: {
          _count: {
            select: { services: true }
          }
        },
        skip,
        take: limit,
        orderBy: {
          sortOrder: 'asc'
        }
      }),
      prisma.serviceCategory.count({ where })
    ]);

    const formattedCategories = categories.map(cat => ({
      category_id: cat.id,
      name: cat.name,
      slug: cat.slug,
      description: cat.description,
      icon_url: cat.iconUrl,
      parent_category_id: cat.parentCategoryId,
      services_count: cat._count.services,
      is_active: cat.isActive
    }));

    return NextResponse.json({
      success: true,
      data: formattedCategories,
      meta: {
        total,
        page,
        limit
      }
    });

  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
      await prisma.$disconnect();
  }
}
