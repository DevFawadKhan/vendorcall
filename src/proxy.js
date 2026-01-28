import { NextResponse } from "next/server";
import { verifyAccessToken } from "@/app/lib/jwt";

// List of public routes
const publicRoutes = [
  "/api/auth/login",
  "/api/auth/register",
  "/api/auth/forgetpassword",
  "/api/auth/resetpassword",
  "/api/auth/verifyemail",
  // "/api/test",
];

export default function middleware(req) {
  const { pathname } = req.nextUrl;

  // 1️ Skip token check for public routes
  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // 2️ Get token from cookie first
  const cookies = req.cookies;
  let token = cookies.get("token")?.value;

  // 3️⃣ If no token in cookies, check Authorization header as fallback
  if (!token) {
    const authHeader = req.headers.get("authorization");
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    }
  }

  if (!token) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized: Token missing. Please login again.",
      },
      { status: 401 },
    );
  }

  try {
    console.log(
      "Verifying token from cookie/header:",
      token.substring(0, 20) + "...",
    );

    // 4️⃣ Verify token using your JWT utility
    const decoded = verifyAccessToken(token);

    if (!decoded) {
      // Clear invalid token cookie
      const response = NextResponse.json(
        { success: false, message: "Unauthorized: Invalid or expired token" },
        { status: 401 },
      );
      // Remove the invalid token cookie
      response.cookies.delete("token");
      response.cookies.delete("accessToken");
      return response;
    }

    // 5️⃣ Add user info to headers for API routes to access
    const requestHeaders = new Headers(req.headers);
    console.log("requestHeaders", requestHeaders);
    // Add user ID with fallback for different JWT payload structures
    const userId = decoded.userId;
    if (userId) {
      requestHeaders.set("x-user-id", userId.toString());
    }

    // Add user role
    if (decoded.role) {
      requestHeaders.set("x-user-role", decoded.role);
    }

    console.log(`User ${userId} authorized for ${pathname}`);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (err) {
    console.error("Token verification error:", err);

    // Clear invalid token cookie
    const response = NextResponse.json(
      {
        success: false,
        message: "Unauthorized: Token verification failed",
      },
      { status: 401 },
    );
    response.cookies.delete("token");
    response.cookies.delete("accessToken");
    return response;
  }
}

export const config = {
  matcher: ["/api/:path*"],
};
