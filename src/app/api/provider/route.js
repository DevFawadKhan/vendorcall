import { NextResponse } from "next/server";
// import { PrismaClient } from '@prisma/client';
import prisma from "@/app/lib/prisma";

// export async function POST(request) {
//   try {
//     // Get user ID from your middleware (x-user header)
//     const userId =
//       request.headers.get("x-user-id") || request.headers.get("x-user");

//     if (!userId) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: "Unauthorized. User ID not found in token.",
//         },
//         { status: 401 },
//       );
//     }

//     // Parse the request body
//     const body = await request.json();

//     // Validate required fields
//     if (!body.business_name || !body.description) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: "Business name and description are required",
//         },
//         { status: 400 },
//       );
//     }

//     // Check if user exists
//     const user = await prisma.user.findUnique({
//       where: { id: parseInt(userId) },
//     });

//     if (!user) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: "User not found",
//         },
//         { status: 404 },
//       );
//     }

//     // Check if user already has a provider profile
//     const existingProvider = await prisma.serviceProvider.findFirst({
//       where: { userId: parseInt(userId) },
//     });

//     if (existingProvider) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: "You already have a provider profile",
//           data: { providerId: existingProvider.id },
//         },
//         { status: 400 },
//       );
//     }

//     // Start transaction for creating provider with all related data
//     const result = await prisma.$transaction(async (tx) => {
//       // 1. Create the main provider profile
//       const provider = await tx.serviceProvider.create({
//         data: {
//           userId: parseInt(userId),
//           businessName: body.business_name,
//           businessRegistrationNumber: body.business_registration_number,
//           description: body.description,
//           yearsExperience: body.years_experience,
//           serviceAreas: body.service_areas || [],
//           radiusKm: body.radius_km,
//           isInsured: body.is_insured || false,
//           isBackgroundChecked: false,
//           verificationStatus: "pending",
//           isAcceptingNewJobs: true,
//           totalRating: 0,
//           reviewCount: 0,
//           completedJobs: 0,
//           isVerified: false,
//         },
//       });

//       // 2. Add provider services if provided
//       if (body.services && Array.isArray(body.services)) {
//         const servicePromises = body.services.map(async (service) => {
//           // Check if service exists
//           // const serviceExists = await tx.service.findUnique({
//           //   where: { id: service.service_id }
//           // });

//           // if (!serviceExists) {
//           //   throw new Error(`Service with ID ${service.service_id} not found`);
//           // }

//           return tx.providerService.create({
//             data: {
//               providerId: provider.id,
//               // serviceId: service.service_id,
//               customPrice: service.custom_price,
//               isAvailable: true,
//             },
//           });
//         });

//         await Promise.all(servicePromises);
//       }

//       // 3. Add provider documents if provided
//       if (body.documents && Array.isArray(body.documents)) {
//         const documentPromises = body.documents.map((doc) =>
//           tx.providerDocument.create({
//             data: {
//               providerId: provider.id,
//               documentType: doc.document_type,
//               documentUrl: doc.document_url,
//               documentName: doc.document_name,
//               expirationDate: doc.expiration_date
//                 ? new Date(doc.expiration_date)
//                 : null,
//               isVerified: false,
//             },
//           }),
//         );

//         await Promise.all(documentPromises);
//       }

//       // 4. Add availability slots if provided
//       if (body.availability && Array.isArray(body.availability)) {
//         const availabilityPromises = body.availability.map((slot) => {
//           // Convert time strings to DateTime objects for Prisma
//           const startTime = new Date(`1970-01-01T${slot.start_time}`);
//           const endTime = new Date(`1970-01-01T${slot.end_time}`);

//           return tx.providerAvailability.create({
//             data: {
//               providerId: provider.id,
//               dayOfWeek: slot.day_of_week,
//               startTime: startTime,
//               endTime: endTime,
//               isRecurring: slot.is_recurring !== false,
//               validFrom: slot.valid_from
//                 ? new Date(slot.valid_from)
//                 : new Date(),
//               validUntil: slot.valid_until ? new Date(slot.valid_until) : null,
//             },
//           });
//         });

//         await Promise.all(availabilityPromises);
//       }

//       // 5. Update user type to PROVIDER
//       await tx.user.update({
//         where: { id: parseInt(userId) },
//         data: { userType: "PROVIDER" },
//       });

//       // Return the created provider with all relations
//       return await tx.serviceProvider.findUnique({
//         where: { id: provider.id },
//         include: {
//           user: {
//             select: {
//               id: true,
//               firstName: true,
//               lastName: true,
//               email: true,
//               phone: true,
//               userType: true,
//             },
//           },
//           providerServices: {
//             include: {
//               service: true,
//             },
//           },
//           documents: true,
//           availabilities: true,
//         },
//       });
//     });

//     return NextResponse.json(
//       {
//         success: true,
//         data: result,
//         message:
//           "Provider application submitted successfully! Your application is under review.",
//       },
//       { status: 201 },
//     );
//   } catch (error) {
//     console.error("Error submitting provider application:", error);

//     // Handle specific errors
//     if (error.message.includes("Service with ID")) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: error.message,
//         },
//         { status: 400 },
//       );
//     }

//     if (error.code === "P2002") {
//       return NextResponse.json(
//         {
//           success: false,
//           error: "Provider profile already exists for this user",
//         },
//         { status: 400 },
//       );
//     }

//     return NextResponse.json(
//       {
//         success: false,
//         error: "Failed to submit provider application",
//         details:
//           process.env.NODE_ENV === "development" ? error.message : undefined,
//       },
//       { status: 500 },
//     );
//   } finally {
//     await prisma.$disconnect();
//   }
// }

export async function POST(request) {
  try {
    // Get user ID from your middleware (x-user header)
    const userId =
      request.headers.get("x-user-id") || request.headers.get("x-user");

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized. User ID not found in token.",
        },
        { status: 401 },
      );
    }

    // Parse the request body
    const body = await request.json();

    // Validate required fields
    if (!body.business_name || !body.description) {
      return NextResponse.json(
        {
          success: false,
          error: "Business name and description are required",
        },
        { status: 400 },
      );
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: parseInt(userId) },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "User not found",
        },
        { status: 404 },
      );
    }

    // Check if user already has a provider profile
    const existingProvider = await prisma.serviceProvider.findFirst({
      where: { userId: parseInt(userId) },
    });

    if (existingProvider) {
      return NextResponse.json(
        {
          success: false,
          error: "You already have a provider profile",
          data: { providerId: existingProvider.id },
        },
        { status: 400 },
      );
    }

    // Start transaction for creating provider with all related data
    const result = await prisma.$transaction(async (tx) => {
      // 1. Create the main provider profile
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
          isBackgroundChecked: false,
          verificationStatus: "pending",
          isAcceptingNewJobs: true,
          totalRating: 0,
          reviewCount: 0,
          completedJobs: 0,
          isVerified: false,
        },
      });

      // 2. Add provider services if provided - FIXED RELATION SYNTAX
      if (body.services && Array.isArray(body.services)) {
        const servicePromises = body.services.map(async (service) => {
          // Check if service exists
          const serviceExists = await tx.service.findUnique({
            where: { id: parseInt(service.service_id) },
          });

          if (!serviceExists) {
            throw new Error(`Service with ID ${service.service_id} not found`);
          }

          // Use nested connect syntax for relations
          return tx.providerService.create({
            data: {
              provider: {
                connect: { id: provider.id },
              },
              service: {
                connect: { id: parseInt(service.service_id) },
              },
              customPrice: service.custom_price,
              isAvailable: true,
            },
          });
        });

        await Promise.all(servicePromises);
      }

      // 3. Add provider documents if provided
      if (body.documents && Array.isArray(body.documents)) {
        const documentPromises = body.documents.map((doc) =>
          tx.providerDocument.create({
            data: {
              provider: {
                connect: { id: provider.id },
              },
              documentType: doc.document_type,
              documentUrl: doc.document_url,
              documentName: doc.document_name,
              expirationDate: doc.expiration_date
                ? new Date(doc.expiration_date)
                : null,
              isVerified: false,
            },
          }),
        );

        await Promise.all(documentPromises);
      }

      // 4. Add availability slots if provided
      if (body.availability && Array.isArray(body.availability)) {
        const availabilityPromises = body.availability.map((slot) => {
          // Convert time strings to DateTime objects for Prisma
          // Note: For TIME fields, we need to use a specific format
          const startTime = slot.start_time; // Keep as string "09:00"
          const endTime = slot.end_time; // Keep as string "17:00"

          return tx.providerAvailability.create({
            data: {
              provider: {
                connect: { id: provider.id },
              },
              dayOfWeek: slot.day_of_week,
              startTime: startTime, // Prisma will handle the conversion
              endTime: endTime, // Prisma will handle the conversion
              isRecurring: slot.is_recurring !== false,
              validFrom: slot.valid_from
                ? new Date(slot.valid_from)
                : new Date(),
              validUntil: slot.valid_until ? new Date(slot.valid_until) : null,
            },
          });
        });

        await Promise.all(availabilityPromises);
      }

      // 5. Update user type to PROVIDER
      await tx.user.update({
        where: { id: parseInt(userId) },
        data: { userType: "PROVIDER" },
      });

      // Return the created provider with all relations
      return await tx.serviceProvider.findUnique({
        where: { id: provider.id },
        include: {
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true,
              phone: true,
              userType: true,
            },
          },
          providerServices: {
            include: {
              service: true,
            },
          },
          documents: true,
          availabilities: true,
        },
      });
    });

    return NextResponse.json(
      {
        success: true,
        data: result,
        message:
          "Provider application submitted successfully! Your application is under review.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error submitting provider application:", error);

    // Handle specific errors
    if (error.message.includes("Service with ID")) {
      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 400 },
      );
    }

    if (error.code === "P2002") {
      return NextResponse.json(
        {
          success: false,
          error: "Provider profile already exists for this user",
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit provider application",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 },
    );
  }
}
