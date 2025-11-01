# Sidebar Components

This project includes two different sidebar implementations: a comprehensive shadcn/ui sidebar component and a simpler custom sidebar.

## 🎯 Components Overview

### 1. **shadcn/ui Sidebar** (`/components/app-sidebar.tsx`)
A full-featured sidebar built with the official shadcn/ui sidebar component, offering advanced functionality and accessibility.

### 2. **Simple Sidebar** (`/components/simple-sidebar.tsx`)
A lightweight, custom sidebar implementation with basic functionality that's easier to understand and customize.

## 🚀 shadcn/ui Sidebar Features

### **Advanced Functionality:**
- **Collapsible States**: Icon mode and hidden mode
- **Mobile Responsive**: Sheet overlay on mobile devices
- **Keyboard Shortcuts**: Cmd/Ctrl + B to toggle
- **Tooltips**: Show labels when collapsed
- **Nested Navigation**: Sub-menus with expandable items
- **Search Integration**: Built-in search functionality
- **User Profile**: Dropdown menu in footer
- **Badge Notifications**: Visual indicators on menu items
- **Accessibility**: Full ARIA support and keyboard navigation

### **Components Used:**
```tsx
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
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
```

### **Usage:**
```tsx
import { SidebarLayout } from '@/components';

export default function MyPage() {
  return (
    <SidebarLayout>
      <div>Your page content here</div>
    </SidebarLayout>
  );
}
```

## 🔧 Simple Sidebar Features

### **Basic Functionality:**
- **Mobile Responsive**: Slide-out behavior on mobile
- **Active States**: Highlight current page
- **Search Bar**: Filter navigation items
- **Badge Notifications**: Simple badge display
- **User Profile**: Basic user info display
- **Clean Design**: Minimal, easy to understand

### **Usage:**
```tsx
import { SimpleSidebarLayout } from '@/components';

export default function MyPage() {
  return (
    <SimpleSidebarLayout>
      <div>Your page content here</div>
    </SimpleSidebarLayout>
  );
}
```

## 📱 Responsive Behavior

### **Desktop (≥768px):**
- **shadcn/ui Sidebar**: Fixed positioning, collapsible with smooth animations
- **Simple Sidebar**: Static positioning, always visible

### **Mobile (<768px):**
- **shadcn/ui Sidebar**: Sheet overlay with backdrop
- **Simple Sidebar**: Slide-out drawer with backdrop

## 🎨 Navigation Structure

Both sidebars support the following navigation pattern:

```typescript
const navigationData = {
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
      badge: "12", // Optional badge
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: BarChart3,
      items: [ // Sub-navigation (shadcn/ui only)
        {
          title: "Overview",
          url: "/analytics/overview",
        },
        // ...more items
      ],
    },
  ],
  navSecondary: [
    // Secondary navigation items
  ],
};
```

## 🔄 State Management

### **shadcn/ui Sidebar:**
- Uses React Context for sidebar state
- Persistent state with cookies
- Keyboard shortcut handling
- Mobile detection hook

### **Simple Sidebar:**
- Local component state
- Manual mobile handling
- Session-based state (resets on refresh)

## 🎯 When to Use Which

### **Use shadcn/ui Sidebar when:**
- You need advanced features (collapsible, tooltips, keyboard shortcuts)
- Building a complex application with nested navigation
- Accessibility compliance is important
- You want consistent behavior with other shadcn/ui components

### **Use Simple Sidebar when:**
- You need basic navigation functionality
- You want to minimize dependencies
- You need extensive customization
- Building a simple application
- You want to understand the implementation

## 🛠 Customization

### **shadcn/ui Sidebar:**
```tsx
// Customize through CSS variables and Tailwind classes
<Sidebar variant="inset" side="left" collapsible="icon">
  {/* Your content */}
</Sidebar>
```

### **Simple Sidebar:**
```tsx
// Direct prop customization and class modifications
<SimpleSidebar className="w-72 bg-card" />
```

## 📋 Demo Pages

- **shadcn/ui Sidebar**: Visit `/sidebar-demo`
- **Simple Sidebar**: Visit `/simple-sidebar`

## 🔧 Installation Requirements

### **shadcn/ui Sidebar:**
```bash
npx shadcn@latest add sidebar dropdown-menu avatar breadcrumb badge
```

### **Simple Sidebar:**
```bash
npx shadcn@latest add button input badge separator
```

Both implementations are ready to use and can be easily integrated into your application. Choose the one that best fits your project's complexity and requirements!