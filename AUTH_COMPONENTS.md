# Authentication Components

This project includes a complete authentication system with login and signup forms built using shadcn/ui components, React Hook Form, Zod validation, and toast notifications.

## 🚀 Components Created

### 1. **LoginForm** (`/components/auth/login-form.tsx`)
- Email and password authentication
- Form validation with Zod
- Password visibility toggle
- Demo credentials auto-fill
- Toast notifications for feedback

### 2. **SignupForm** (`/components/auth/signup-form.tsx`)
- Full registration form with first name, last name, email, and password
- Password confirmation with matching validation
- Strong password requirements
- Email uniqueness checking (against dummy data)
- Demo data auto-fill

### 3. **Auth Schemas** (`/lib/auth.ts`)
- Zod schemas for login and signup validation
- TypeScript types for form data
- Dummy user data for testing
- Password strength requirements

## 🎯 Features

### Form Validation
- **Email**: Required, valid email format
- **Password**: Minimum 6 characters, must contain uppercase, lowercase, and number
- **Name Fields**: Minimum 2 characters each
- **Password Confirmation**: Must match password field

### User Experience
- **Responsive Design**: Works on desktop and mobile
- **Dark Mode Support**: Automatically adapts to theme
- **Loading States**: Shows loading spinners during form submission
- **Error Handling**: Clear error messages for validation failures
- **Success Feedback**: Toast notifications for successful actions

### Demo Features
- **Auto-fill Buttons**: Quickly fill forms with test data
- **Dummy Data**: Pre-configured test accounts
- **Interactive Switching**: Toggle between login and signup
- **Success State**: Shows user profile after successful authentication

## 📖 Usage

### Basic Implementation

```tsx
import { LoginForm, SignupForm } from '@/components/auth';

// Login Form
<LoginForm
  onSuccess={(user) => {
    console.log('User logged in:', user);
    // Handle successful login
  }}
  onSwitchToSignup={() => {
    // Switch to signup form
  }}
/>

// Signup Form  
<SignupForm
  onSuccess={(user) => {
    console.log('User registered:', user);
    // Handle successful registration
  }}
  onSwitchToLogin={() => {
    // Switch to login form
  }}
/>
```

### Complete Auth Page

Visit `/auth` to see the complete implementation with:
- Form switching between login and signup
- Success state management
- Toast notifications
- Responsive layout with dark mode

## 🧪 Test Accounts

The following dummy accounts are available for testing the login form:

| Email | Password | Name |
|-------|----------|------|
| `john@example.com` | `Password123` | John Doe |
| `jane@example.com` | `Password456` | Jane Smith |
| `admin@example.com` | `Admin123` | Admin User |

## 🔧 Dependencies Used

- **@hookform/resolvers**: Zod integration with React Hook Form
- **react-hook-form**: Form state management and validation
- **zod**: Schema validation and TypeScript types
- **sonner**: Toast notifications
- **lucide-react**: Icons for UI elements
- **shadcn/ui**: Form, Button, Input, Card, and Label components

## 📁 File Structure

```
components/
├── auth/
│   ├── index.ts          # Export auth components
│   ├── login-form.tsx    # Login form component
│   └── signup-form.tsx   # Signup form component
├── ui/                   # shadcn/ui components
│   ├── button.tsx
│   ├── card.tsx
│   ├── form.tsx
│   ├── input.tsx
│   ├── label.tsx
│   └── sonner.tsx
└── index.ts             # Export all components

lib/
└── auth.ts              # Auth schemas, types, and dummy data

app/
└── auth/
    └── page.tsx         # Complete auth demo page
```

## 🎨 Styling

All components use:
- **Tailwind CSS** for styling
- **CSS Variables** for theming
- **Dark mode** support via `dark:` prefixes
- **Responsive breakpoints** for mobile compatibility
- **Smooth animations** for interactive elements

## 🚀 Getting Started

1. **Visit the demo**: Navigate to `/auth` to see the forms in action
2. **Use auto-fill**: Click "Fill demo credentials" or "Fill demo data" buttons
3. **Test validation**: Try submitting invalid data to see error handling
4. **Test success flow**: Complete a form to see the success state

The authentication system is ready to integrate with your backend API by replacing the dummy data validation with real API calls!