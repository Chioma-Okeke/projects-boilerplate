"use client";

import { SidebarLayout } from "@/components/sidebar-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Users, 
  BarChart3, 
  FileText, 
  Mail, 
  Calendar, 
  Bell, 
  Settings,
  TrendingUp,
  Activity,
  Clock
} from "lucide-react";

export default function SidebarDemo() {
  return (
    <SidebarLayout>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        {/* Overview Cards */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Users
            </CardTitle>
            <CardDescription>Total registered users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 inline mr-1" />
              +20.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Revenue
            </CardTitle>
            <CardDescription>Monthly recurring revenue</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 inline mr-1" />
              +12.5% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Activity
            </CardTitle>
            <CardDescription>Active sessions today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">
              <Clock className="h-3 w-3 inline mr-1" />
              +5.2% from yesterday
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Area */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Sidebar Component Demo</CardTitle>
            <CardDescription>
              This page demonstrates the shadcn/ui Sidebar component with various features
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Features Showcased:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">✓</Badge>
                    Collapsible sidebar with icon mode
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">✓</Badge>
                    Mobile-responsive design with sheet overlay
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">✓</Badge>
                    Nested navigation with sub-items
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">✓</Badge>
                    Search functionality in header
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">✓</Badge>
                    User profile dropdown in footer
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">✓</Badge>
                    Badge notifications on menu items
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">✓</Badge>
                    Keyboard shortcuts (Cmd/Ctrl + B)
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Navigation Structure:</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Dashboard
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Users
                    <Badge variant="secondary" className="text-xs">12</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Analytics
                    <span className="text-xs text-muted-foreground">(with sub-items)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Content
                    <span className="text-xs text-muted-foreground">(with sub-items)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Communications
                    <span className="text-xs text-muted-foreground">(with sub-items)</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common actions and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              View Calendar
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Bell className="mr-2 h-4 w-4" />
              Check Notifications
              <Badge variant="destructive" className="ml-auto text-xs">5</Badge>
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Mail className="mr-2 h-4 w-4" />
              Messages
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>How to Use</CardTitle>
          <CardDescription>
            Instructions for interacting with the sidebar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="font-semibold">Desktop Features:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Click the sidebar trigger to collapse/expand</li>
                <li>• Use Cmd/Ctrl + B to toggle with keyboard</li>
                <li>• Hover over collapsed items to see tooltips</li>
                <li>• Click navigation items to navigate (demo)</li>
                <li>• Use the search bar to find items</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Mobile Features:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Sidebar automatically becomes a slide-out sheet</li>
                <li>• Tap outside to close the mobile sidebar</li>
                <li>• All navigation features work the same way</li>
                <li>• Touch-friendly interaction areas</li>
                <li>• Responsive design for all screen sizes</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </SidebarLayout>
  );
}