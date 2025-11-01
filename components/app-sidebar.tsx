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
    Mail,
    Calendar,
    Search,
    Plus,
    MoreHorizontal,
    ChevronUp,
    User2,
    CreditCard,
    LogOut,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInput,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
    SidebarSeparator,
} from "@/components/ui/sidebar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Navigation data structure
const navigationData = {
    user: {
        name: "John Doe",
        email: "john@example.com",
        avatar: "/avatars/john-doe.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "/",
            icon: Home,
        },
        {
            title: "Users",
            url: "/users",
            icon: Users,
            badge: "12",
        },
        {
            title: "Analytics",
            url: "/analytics",
            icon: BarChart3,
            items: [
                {
                    title: "Overview",
                    url: "/analytics/overview",
                },
                {
                    title: "Reports",
                    url: "/analytics/reports",
                },
                {
                    title: "Metrics",
                    url: "/analytics/metrics",
                },
            ],
        },
        {
            title: "Content",
            url: "/content",
            icon: FileText,
            items: [
                {
                    title: "Posts",
                    url: "/content/posts",
                },
                {
                    title: "Pages",
                    url: "/content/pages",
                },
                {
                    title: "Media",
                    url: "/content/media",
                },
            ],
        },
        {
            title: "Communications",
            url: "/communications",
            icon: Mail,
            items: [
                {
                    title: "Messages",
                    url: "/communications/messages",
                },
                {
                    title: "Notifications",
                    url: "/communications/notifications",
                },
                {
                    title: "Email Templates",
                    url: "/communications/templates",
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Calendar",
            url: "/calendar",
            icon: Calendar,
        },
        {
            title: "Notifications",
            url: "/notifications",
            icon: Bell,
            badge: "5",
        },
        {
            title: "Settings",
            url: "/settings",
            icon: Settings,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname();

    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <Home className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">My App</span>
                                    <span className="truncate text-xs">Enterprise</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                {/* Search */}
                <SidebarGroup className="group-data-[collapsible=icon]:hidden">
                    <SidebarGroupContent>
                        <SidebarInput
                            type="search"
                            placeholder="Search..."
                            className="pl-8"
                        />
                        <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Main Navigation */}
                <SidebarGroup>
                    <SidebarGroupLabel>Platform</SidebarGroupLabel>
                    <SidebarGroupAction asChild>
                        <button>
                            <Plus />
                            <span className="sr-only">Add Project</span>
                        </button>
                    </SidebarGroupAction>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navigationData.navMain.map((item) => {
                                const Icon = item.icon;
                                const isActive = pathname === item.url;

                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild isActive={isActive}>
                                            <Link href={item.url}>
                                                <Icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                        {item.badge && (
                                            <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                                        )}
                                        {item.items && (
                                            <SidebarMenuAction asChild showOnHover>
                                                <button>
                                                    <MoreHorizontal />
                                                    <span className="sr-only">More</span>
                                                </button>
                                            </SidebarMenuAction>
                                        )}
                                        {item.items && (
                                            <SidebarMenuSub>
                                                {item.items.map((subItem) => (
                                                    <SidebarMenuSubItem key={subItem.title}>
                                                        <SidebarMenuSubButton
                                                            asChild
                                                            isActive={pathname === subItem.url}
                                                        >
                                                            <Link href={subItem.url}>
                                                                <span>{subItem.title}</span>
                                                            </Link>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        )}
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarSeparator />

                {/* Secondary Navigation */}
                <SidebarGroup>
                    <SidebarGroupLabel>Tools</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navigationData.navSecondary.map((item) => {
                                const Icon = item.icon;
                                const isActive = pathname === item.url;

                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild isActive={isActive}>
                                            <Link href={item.url}>
                                                <Icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                        {item.badge && (
                                            <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                                        )}
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size="lg"
                                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                >
                                    <Avatar className="h-8 w-8 rounded-lg">
                                        <AvatarImage
                                            src={navigationData.user.avatar}
                                            alt={navigationData.user.name}
                                        />
                                        <AvatarFallback className="rounded-lg">
                                            {navigationData.user.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">
                                            {navigationData.user.name}
                                        </span>
                                        <span className="truncate text-xs">
                                            {navigationData.user.email}
                                        </span>
                                    </div>
                                    <ChevronUp className="ml-auto size-4" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                                side="bottom"
                                align="end"
                                sideOffset={4}
                            >
                                <DropdownMenuItem>
                                    <User2 />
                                    Account
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <CreditCard />
                                    Billing
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Bell />
                                    Notifications
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <LogOut />
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}