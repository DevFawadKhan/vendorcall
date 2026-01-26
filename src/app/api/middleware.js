import { prisma } from "@/app/lib/prisma";
import { verifyAccessToken } from "@/app/lib/jwt";

// JWT Authentication Middleware
async function authMiddleware(req) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return {
      error: {
        status: 401,
        body: {
          success: false,
          error: {
            code: "AUTH_REQUIRED",
            message: "Authentication token required",
          },
        },
      },
    };
  }

  const token = authHeader.split(" ")[1];
  //   Verify token define function lib/jwt.js
  const payload = verifyAccessToken(token);

  if (!payload) {
    return {
      error: {
        status: 401,
        body: {
          success: false,
          error: {
            code: "INVALID_TOKEN",
            message: "Invalid or expired token",
          },
        },
      },
    };
  }

  // Check if user exists and is active
  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
    select: { id: true, email: true, userType: true, isActive: true },
  });

  if (!user || !user.isActive) {
    return {
      error: {
        status: 401,
        body: {
          success: false,
          error: {
            code: "USER_NOT_FOUND",
            message: "User not found or inactive",
          },
        },
      },
    };
  }

  // Add user to request
  req.user = {
    userId: user.id,
    email: user.email,
    userType: user.userType,
  };

  return { user: req.user };
}

// Role-based middleware
function roleMiddleware(allowedRoles) {
  return (req) => {
    if (!req.user) {
      return {
        error: {
          status: 401,
          body: {
            success: false,
            error: {
              code: "AUTH_REQUIRED",
              message: "Authentication required",
            },
          },
        },
      };
    }

    if (!allowedRoles.includes(req.user.userType)) {
      return {
        error: {
          status: 403,
          body: {
            success: false,
            error: {
              code: "PERMISSION_DENIED",
              message: "Insufficient permissions",
            },
          },
        },
      };
    }

    return { user: req.user };
  };
}

export { authMiddleware, roleMiddleware };
