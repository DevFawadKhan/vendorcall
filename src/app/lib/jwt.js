// lib/jwt.js
// const jwt = require("jsonwebtoken");
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "##$#$@3231!@#";
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "121@12121";

// Generate tokens
export function generateTokens(payload) {
  const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
  const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
}

// Verify access token
export function verifyAccessToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

// Verify refresh token
export function verifyRefreshToken(token) {
  try {
    return jwt.verify(token, JWT_REFRESH_SECRET);
  } catch (error) {
    return null;
  }
}
