// D:\vendorcall\middleware.js
import { NextResponse } from "next/server";

// This runs for every request that matches the "matcher"
export function middleware(req) {
  console.log("Middleware hit!", req.url); // <-- Should log in terminal
  return NextResponse.next(); // Important to continue the request
}

// Apply middleware only to API routes
export const config = {
  matcher: ["/api/:path*"], // <-- ensures /api/test triggers this
};
