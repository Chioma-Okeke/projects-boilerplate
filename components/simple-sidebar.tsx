"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Home,
    Users,
    Settings,
    Bell,
    FileText,
    BarChart3,
    Search,
    Menu,
    X,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// Simple navigation data for the basic sidebar
const navigationItems = [
    {
        title: "Dashboard",
        href: "/",
        icon: Home,
    },
    {
        title: "Users",
        href: "/users",
        icon: Users,
        badge: "12",
    },
    {
        title: "Analytics",
        href: "/analytics",
        icon: BarChart3,
    },
    {
        title: "Content",
        href: "/content",
        icon: FileText,
    },
    {
        title: "Settings",
        href: "/settings",
        icon: Settings,
    },
];

interface SimpleSidebarProps {
    className?: string;
}

export function SimpleSidebar({ className }: SimpleSidebarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            {/* Mobile menu button */}
            <Button
                variant="outline"
                size="icon"
                className="fixed top-4 left-4 z-50 md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>

            {/* Backdrop for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed left-0 top-0 z-40 h-screen w-64 bg-background border-r transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:h-auto",
                    isOpen ? "translate-x-0" : "-translate-x-full",
                    className
                )}
            >
                <div className="flex h-full flex-col">
                    {/* Header */}
                    <div className="p-6 border-b">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                <Home className="h-4 w-4" />
                            </div>
                            <span className="text-lg font-semibold">My App</span>
                        </Link>
                    </div>

                    {/* Search */}
                    <div className="p-4">
                        <div className="relative">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search..."
                                className="pl-8"
                            />
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-2 p-4">
                        <div className="space-y-1">
                            {navigationItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = pathname === item.href;

                                return (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                                            isActive
                                                ? "bg-accent text-accent-foreground"
                                                : "text-muted-foreground"
                                        )}
                                    >
                                        <Icon className="h-4 w-4" />
                                        <span className="flex-1">{item.title}</span>
                                        {item.badge && (
                                            <Badge variant="secondary" className="text-xs">
                                                {item.badge}
                                            </Badge>
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        <Separator className="my-4" />

                        {/* Secondary items */}
                        <div className="space-y-1">
                            <Link
                                href="/notifications"
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                                    pathname === "/notifications"
                                        ? "bg-accent text-accent-foreground"
                                        : "text-muted-foreground"
                                )}
                            >
                                <Bell className="h-4 w-4" />
                                <span className="flex-1">Notifications</span>
                                <Badge variant="destructive" className="text-xs">
                                    5
                                </Badge>
                            </Link>
                        </div>
                    </nav>

                    {/* Footer */}
                    <div className="p-4 border-t">
                        <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-accent">
                            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                                <span className="text-sm font-medium">JD</span>
                            </div>
                            <div className="flex-1 text-sm">
                                <div className="font-medium">John Doe</div>
                                <div className="text-xs text-muted-foreground">john@example.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}

interface SimpleSidebarLayoutProps {
    children: React.ReactNode;
}

export function SimpleSidebarLayout({ children }: SimpleSidebarLayoutProps) {
    return (
        <div className="flex h-screen bg-background">
            <SimpleSidebar />
            <main className="flex-1 overflow-auto md:ml-64">
                <div className="p-6 pt-16 md:pt-6">
                    {children}
                </div>
            </main>
        </div>
    );
}