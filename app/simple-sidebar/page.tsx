"use client";

import { SimpleSidebarLayout } from "@/components/simple-sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function SimpleSidebarDemo() {
    return (
        <SimpleSidebarLayout>
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Simple Sidebar Demo</h1>
                    <p className="text-muted-foreground">
                        This demonstrates the simple sidebar implementation built with basic components
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Simple Sidebar Features</CardTitle>
                            <CardDescription>
                                A basic but functional sidebar implementation
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <h3 className="font-semibold">Features:</h3>
                                <ul className="space-y-1 text-sm">
                                    <li className="flex items-center gap-2">
                                        <Badge variant="outline">✓</Badge>
                                        Mobile-responsive with slide-out behavior
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Badge variant="outline">✓</Badge>
                                        Active state highlighting
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Badge variant="outline">✓</Badge>
                                        Search functionality
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Badge variant="outline">✓</Badge>
                                        Badge notifications
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Badge variant="outline">✓</Badge>
                                        User profile display
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Badge variant="outline">✓</Badge>
                                        Clean, minimal design
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Comparison</CardTitle>
                            <CardDescription>
                                Simple vs shadcn/ui sidebar component
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-medium">Simple Sidebar:</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Easier to customize and understand</li>
                                        <li>• Less dependencies</li>
                                        <li>• Basic functionality</li>
                                        <li>• Manual responsive handling</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium">shadcn/ui Sidebar:</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Advanced features (collapsible, tooltips)</li>
                                        <li>• Built-in accessibility</li>
                                        <li>• Complex state management</li>
                                        <li>• More configuration options</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Navigation</CardTitle>
                        <CardDescription>
                            Try both sidebar implementations
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-4">
                            <Button asChild>
                                <Link href="/sidebar-demo">
                                    View shadcn/ui Sidebar
                                </Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="/">
                                    Back to Home
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </SimpleSidebarLayout>
    );
}