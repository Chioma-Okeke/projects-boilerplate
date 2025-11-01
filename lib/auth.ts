import { z } from "zod";

// Login form schema
export const loginSchema = z.object({
    email: z
        .string()
        .min(1, "Email is required")
        .email("Please enter a valid email address"),
    password: z
        .string()
        .min(1, "Password is required")
        .min(6, "Password must be at least 6 characters long"),
});

// Signup form schema
export const signupSchema = z
    .object({
        firstName: z
            .string()
            .min(1, "First name is required")
            .min(2, "First name must be at least 2 characters long"),
        lastName: z
            .string()
            .min(1, "Last name is required")
            .min(2, "Last name must be at least 2 characters long"),
        email: z
            .string()
            .min(1, "Email is required")
            .email("Please enter a valid email address"),
        password: z
            .string()
            .min(1, "Password is required")
            .min(6, "Password must be at least 6 characters long")
            .regex(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                "Password must contain at least one uppercase letter, one lowercase letter, and one number"
            ),
        confirmPassword: z.string().min(1, "Please confirm your password"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });

// Type definitions
export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;

// Dummy user data for authentication simulation
export const DUMMY_USERS = [
    {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        password: "Password123",
    },
    {
        id: "2",
        firstName: "Jane",
        lastName: "Smith",
        email: "jane@example.com",
        password: "Password456",
    },
    {
        id: "3",
        firstName: "Admin",
        lastName: "User",
        email: "admin@example.com",
        password: "Admin123",
    },
] as const;

export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
};
