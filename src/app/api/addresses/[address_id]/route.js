
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

// PUT /api/addresses/[address_id] - Update Address
export async function PUT(req, { params }) {
  try {
    const userId = req.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

    const { address_id } = await params;
    const addressId = parseInt(address_id);
    const body = await req.json();

    // Verify ownership
    const existing = await prisma.userAddress.findUnique({ where: { id: addressId } });
    if (!existing || existing.userId !== parseInt(userId)) {
        return NextResponse.json({ success: false, error: "Address not found" }, { status: 404 });
    }

    // Handle Default Address logic
    if (body.is_default) {
        await prisma.userAddress.updateMany({
            where: { 
                userId: parseInt(userId),
                id: { not: addressId }
            },
            data: { isDefault: false }
        });
    }

    const updatedAddress = await prisma.userAddress.update({
        where: { id: addressId },
        data: {
            addressType: body.address_type, // Optional updates
            label: body.label,
            addressLine1: body.address_line1,
            addressLine2: body.address_line2,
            city: body.city,
            state: body.state,
            postalCode: body.postal_code,
            country: body.country,
            latitude: body.latitude,
            longitude: body.longitude,
            isDefault: body.is_default,
        }
    });

    return NextResponse.json({ success: true, data: updatedAddress, message: "Address updated successfully" });

  } catch (error) {
    console.error("Update Address Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}

// DELETE /api/addresses/[address_id] - Delete Address
export async function DELETE(req, { params }) {
  try {
    const userId = req.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

    const { address_id } = await params;
    const addressId = parseInt(address_id);

    // Verify ownership
    const existing = await prisma.userAddress.findUnique({ where: { id: addressId } });
    if (!existing || existing.userId !== parseInt(userId)) {
        return NextResponse.json({ success: false, error: "Address not found" }, { status: 404 });
    }

    await prisma.userAddress.delete({ where: { id: addressId } });

    return NextResponse.json({ success: true, message: "Address deleted successfully" });

  } catch (error) {
    console.error("Delete Address Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
