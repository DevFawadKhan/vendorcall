
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function POST(request) {
  try {
    const userId = request.headers.get("x-user-id");

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized. User ID not found." },
        { status: 401 }
      );
    }

    const body = await request.json();

    if (!body.business_name || !body.description) {
      return NextResponse.json(
        { success: false, error: "Business name and description are required" },
        { status: 400 }
      );
    }

    // Check user and existing provider
    const user = await prisma.user.findUnique({ where: { id: parseInt(userId) } });
    if (!user) return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });

    const existingProvider = await prisma.serviceProvider.findUnique({ where: { userId: parseInt(userId) } });
    if (existingProvider) {
      return NextResponse.json({ 
          success: false, 
          error: "Provider profile already exists", 
          data: { providerId: existingProvider.id } 
      }, { status: 400 });
    }

    const result = await prisma.$transaction(async (tx) => {
      // 1. Create Provider
      const provider = await tx.serviceProvider.create({
        data: {
          userId: parseInt(userId),
          businessName: body.business_name,
          businessRegistrationNumber: body.business_registration_number,
          description: body.description,
          yearsExperience: body.years_experience,
          serviceAreas: body.service_areas || [],
          radiusKm: body.radius_km,
          isInsured: body.is_insured || false,
          verificationStatus: "pending",
          isAcceptingNewJobs: true,
          // Defaults handled by schema
        }
      });

      // 2. Services
      if (body.services && Array.isArray(body.services)) {
        for (const service of body.services) {
            const serviceId = typeof service.service_id === 'string' ? parseInt(service.service_id) : service.service_id;
            
            // Check if service exists first
            const serviceExists = await tx.service.findUnique({
                where: { id: serviceId }
            });

            if (!serviceExists) {
                throw new Error(`Service with ID ${serviceId} does not exist.`);
            }

            await tx.providerService.create({
                data: {
                    providerId: provider.id,
                    serviceId: serviceId,
                    customPrice: service.custom_price,
                    isAvailable: true
                }
            });
        }
      }

      // 3. Documents
      if (body.documents && Array.isArray(body.documents)) {
         await tx.providerDocument.createMany({
             data: body.documents.map(doc => ({
                 providerId: provider.id,
                 documentType: doc.document_type,
                 documentUrl: doc.document_url,
                 documentName: doc.document_name,
                 expirationDate: doc.expiration_date ? new Date(doc.expiration_date) : null
             }))
         });
      }

      // 4. Availability
      if (body.availability && Array.isArray(body.availability)) {
          /* 
             Issue: Prisma DateTime @db.Time handling.
             If inputs are "09:00", we need to create a Date object with that time.
             Date component doesn't matter for Time type usually, but safer to use epoch.
          */
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
      }

      // 5. Update User Role
      // Enum UserType: customer, provider, admin (lowercase in schema)
      // Prompt logic had "PROVIDER" (uppercase).
      // Schema enum: customer, provider, admin.
      // I should use "provider".
      await tx.user.update({
          where: { id: parseInt(userId) },
          data: { userType: "provider" }
      });

      return provider;
    });

    return NextResponse.json({
        success: true,
        data: result,
        message: "Provider application submitted successfully"
    }, { status: 201 });

  } catch (error) {
    console.error("Provider Apply Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  } finally {
      await prisma.$disconnect();
  }
}
