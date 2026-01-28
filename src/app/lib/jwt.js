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

// Verify access token with better error handling
export function verifyAccessToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    return null;
  }
}

// Verify refresh token
export function verifyRefreshToken(token) {
  try {
    return jwt.verify(token, JWT_REFRESH_SECRET);
  } catch (error) {
    console.error("Refresh Token Verification Error:", error.message);
    return null;
  }
}

// Optional: Generate access token from refresh token
export function refreshAccessToken(refreshToken) {
  const decoded = verifyRefreshToken(refreshToken);
  if (!decoded) return null;

  // Remove iat and exp from decoded payload
  const { iat, exp, ...payload } = decoded;

  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
}
