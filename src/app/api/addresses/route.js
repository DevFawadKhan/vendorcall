
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

// GET /api/addresses - Get User Addresses
export async function GET(req) {
  try {
    const userId = req.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

    const addresses = await prisma.userAddress.findMany({
      where: { userId: parseInt(userId) },
      orderBy: { isDefault: 'desc' } // Default address first
    });

    return NextResponse.json({ success: true, data: addresses });

  } catch (error) {
    console.error("Get Addresses Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}

// POST /api/addresses - Add Address
export async function POST(req) {
  try {
    const userId = req.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

    const body = await req.json();

    // Validation
    if (!body.address_line1 || !body.city || !body.country) {
        return NextResponse.json({ success: false, error: "Address line 1, city, and country are required" }, { status: 400 });
    }

    // Handle Default Address logic: If this is new default, unset others
    if (body.is_default) {
        await prisma.userAddress.updateMany({
            where: { userId: parseInt(userId) },
            data: { isDefault: false }
        });
    }

    const address = await prisma.userAddress.create({
        data: {
            userId: parseInt(userId),
            addressType: body.address_type || 'home',
            label: body.label,
            addressLine1: body.address_line1,
            addressLine2: body.address_line2,
            city: body.city,
            state: body.state,
            postalCode: body.postal_code,
            country: body.country || 'US',
            latitude: body.latitude,
            longitude: body.longitude,
            isDefault: body.is_default || false
        }
    });

    return NextResponse.json({
        success: true,
        data: address,
        message: "Address added successfully"
    }, { status: 201 });

  } catch (error) {
    console.error("Create Address Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
