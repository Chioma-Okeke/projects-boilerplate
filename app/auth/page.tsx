"use client";

import { useState } from "react";
import { Toaster } from "sonner";
import { LoginForm, SignupForm } from "@/components/auth";
import { Navbar } from "@/components";
import type { User } from "@/lib/auth";

export default function AuthPage() {
    const [currentForm, setCurrentForm] = useState<"login" | "signup">("login");
    const [user, setUser] = useState<User | null>(null);

    const handleAuthSuccess = (userData: User) => {
        setUser(userData);
    };

    const handleLogout = () => {
        setUser(null);
        setCurrentForm("login");
    };

    if (user) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <Navbar />
                <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4">
                    <div className="max-w-md w-full text-center space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-green-600 dark:text-green-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>

                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                Welcome! 🎉
                            </h1>

                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                You have successfully logged in to your account.
                            </p>

                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    User Information
                                </h3>
                                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
                                    <p><strong>Email:</strong> {user.email}</p>
                                    <p><strong>User ID:</strong> {user.id}</p>
                                </div>
                            </div>

                            <button
                                onClick={handleLogout}
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
                <Toaster />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
            <Navbar />

            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4">
                <div className="w-full max-w-md">
                    {/* Form Toggle */}
                    <div className="flex mb-6 bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
                        <button
                            onClick={() => setCurrentForm("login")}
                            className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${currentForm === "login"
                                    ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
                                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                                }`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setCurrentForm("signup")}
                            className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${currentForm === "signup"
                                    ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
                                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                                }`}
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Forms */}
                    {currentForm === "login" ? (
                        <LoginForm
                            onSuccess={handleAuthSuccess}
                            onSwitchToSignup={() => setCurrentForm("signup")}
                        />
                    ) : (
                        <SignupForm
                            onSuccess={handleAuthSuccess}
                            onSwitchToLogin={() => setCurrentForm("login")}
                        />
                    )}
                </div>

                {/* Additional Info */}
                <div className="mt-8 text-center max-w-md">
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 text-sm">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                            🚀 Demo Features
                        </h3>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                            <li>• Form validation with Zod schemas</li>
                            <li>• Password strength requirements</li>
                            <li>• Toast notifications for feedback</li>
                            <li>• Responsive design with dark mode</li>
                            <li>• Demo data auto-fill buttons</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Toaster />
        </div>
    );
}