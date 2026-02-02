
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function PUT(request) {
  try {
    const userId = request.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

    const body = await request.json();
    if (!body.availability || !Array.isArray(body.availability)) {
        return NextResponse.json({ success: false, error: "Availability array is required" }, { status: 400 });
    }

    // Get Provider ID for this user
    const provider = await prisma.serviceProvider.findUnique({
        where: { userId: parseInt(userId) }
    });

    if (!provider) {
        return NextResponse.json({ success: false, error: "Provider profile not found" }, { status: 404 });
    }

    // Transaction: Delete old availability, insert new
    await prisma.$transaction(async (tx) => {
        await tx.providerAvailability.deleteMany({
            where: { providerId: provider.id }
        });

        for (const slot of body.availability) {
            const startParts = slot.start_time.split(':');
            const endParts = slot.end_time.split(':');
            
            const startDate = new Date();
            startDate.setHours(parseInt(startParts[0]), parseInt(startParts[1]), 0, 0);
            
            const endDate = new Date();
            endDate.setHours(parseInt(endParts[0]), parseInt(endParts[1]), 0, 0);

            await tx.providerAvailability.create({
                data: {
                    providerId: provider.id,
                    dayOfWeek: slot.day_of_week,
                    startTime: startDate,
                    endTime: endDate,
                    isRecurring: slot.is_recurring !== false
                }
            });
        }
    });

    return NextResponse.json({ success: true, message: "Availability updated successfully" });

  } catch (error) {
    console.error("Update Availability Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  } finally {
      await prisma.$disconnect();
  }
}
