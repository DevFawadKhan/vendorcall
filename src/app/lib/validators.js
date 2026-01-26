// app/lib/validators.js - FIXED
import { z } from "zod";

const registerSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  firstName: z.string().min(1, "First name is required"), // snake_case
  lastName: z.string().min(1, "Last name is required"), // snake_case
  userType: z.enum(["customer", "provider", "admin"]).default("customer"), // snake_case
  dateOfBirth: z.string().optional(), // snake_case
  gender: z.enum(["male", "female", "other", "prefer_not_to_say"]).optional(),
});

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, "Password is required"),
});

function validate(schema, data) {
  try {
    const validated = schema.parse(data);
    return { success: true, data: validated };
  } catch (error) {
    console.log("Zod Error:", error);

    if (error.issues) {
      const errors = error.issues.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }));
      return { success: false, errors };
    }

    return {
      success: false,
      errors: [{ field: "unknown", message: "Validation failed" }],
    };
  }
}

export { registerSchema, loginSchema, validate };
