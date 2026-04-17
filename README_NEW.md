# SGIntern - Internship Management Platform

## 📋 Project Overview

**SGIntern** is a modern web-based internship management platform designed to streamline the process of managing intern applications, job postings, and user profiles. The platform enables companies to post internship opportunities, manage applications, and track intern progress while providing interns with a comprehensive job discovery and application management experience.

**Key Features:**
- User authentication and role-based access control (User, Admin)
- Company and internship job management
- User profile and application tracking
- Secure credential-based authentication
- RESTful API endpoints for core operations

---

## 🛠️ Tech Stack

### Core
- **Next.js** `16.2.3` - React framework with built-in API routes and SSR
- **React** `19.2.4` - UI library for building interactive components
- **TypeScript** `5.x` - Static type checking for JavaScript

### Database & ORM
- **Prisma** `7.7.0` - Type-safe ORM for database management
- **PostgreSQL** - Relational database via `pg` `8.20.0`
- **Prisma Adapter for PostgreSQL** `7.7.0` - PostgreSQL adapter for Prisma

### Authentication & Security
- **NextAuth.js** `4.24.14` - Authentication library with session management
- **Bcrypt** `6.0.0` - Password hashing and encryption
- **Credentials Provider** - Email/password-based authentication

### Validation
- **Zod** `4.3.6` - TypeScript-first schema validation

### Styling & UI
- **Tailwind CSS** `4` - Utility-first CSS framework
- **PostCSS** `4` - CSS transformation tool

### Development & Tooling
- **ESLint** `9` - Code linting and quality assurance
- **Node.js Types** `20` - TypeScript definitions for Node.js API

---

## 📁 Project Structure

```
sgintern/
├── app/                          # Next.js App Router (main application)
│   ├── api/                      # API routes
│   │   ├── auth/                 # Authentication endpoints
│   │   │   └── [...nextauth]/    # NextAuth.js dynamic route
│   │   ├── test/                 # Test endpoint
│   │   └── user/                 # User management endpoints
│   ├── types/                    # TypeScript type definitions
│   │   └── next-auth.d.ts        # NextAuth type augmentation
│   ├── layout.tsx                # Root layout component
│   ├── page.tsx                  # Home page
│   ├── provider.tsx              # Global providers wrapper
│   └── globals.css               # Global styles
│
├── component/                    # Reusable React components
│   ├── forms/                    # Form components
│   ├── layout/                   # Layout components
│   └── ui/                       # UI components
│
├── feature/                      # Feature modules (business logic)
│   ├── applications/             # Application management
│   ├── auth/                     # Authentication logic
│   ├── companies/                # Company management
│   ├── intern/                   # Intern management
│   ├── jobs/                     # Job posting management
│   ├── profile/                  # User profile management
│   └── users/                    # User services
│       ├── user.repository.ts    # Database queries
│       ├── user.schema.ts        # Zod schema validations
│       └── user.services.ts      # Business logic
│
├── lib/                          # Utility functions and helpers
│   ├── auth.ts                   # NextAuth configuration
│   ├── prisma.ts                 # Prisma client instance
│   └── generated/                # Generated types (Prisma)
│
├── prisma/                       # Database schema and migrations
│   ├── schema.prisma             # Prisma data model definition
│   └── migrations/               # Database migration history
│
├── utils/                        # Global utility functions
│   └── response-api.ts           # API response formatting utilities
│
├── public/                       # Static assets
├── package.json                  # Project dependencies
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
├── eslint.config.mjs             # ESLint configuration
├── postcss.config.mjs            # PostCSS configuration
└── README.md                     # Project documentation
```

---

## 🚀 Setup & Installation

### Prerequisites
- **Node.js** `18.x` or higher
- **npm** or **yarn** package manager
- **PostgreSQL** database instance
- Git version control

### Step 1: Clone and Install Dependencies

```bash
# Clone the repository
git clone <repository-url>
cd sgintern

# Install dependencies
npm install
# or
yarn install
```

### Step 2: Setup Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/sgintern

# NextAuth Configuration
NEXTAUTH_SECRET=<your-secret-key-here>
NEXTAUTH_URL=http://localhost:3000

# Optional: OAuth Providers (if implementing)
# GOOGLE_CLIENT_ID=<your-google-client-id>
# GOOGLE_CLIENT_SECRET=<your-google-client-secret>
```

**Note:** Generate `NEXTAUTH_SECRET` using: `openssl rand -base64 32`

### Step 3: Setup Database

```bash
# Create and run migrations
npx prisma migrate dev --name init

# (Optional) Seed database with initial data
npx prisma db seed
```

### Step 4: Run the Application

```bash
# Development mode
npm run dev
# or
yarn dev

# The application will be available at http://localhost:3000
```

### Step 5: Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

---

## 📐 Coding Conventions

### Directory & File Naming
- **Components**: Use `PascalCase` for component files (e.g., `UserProfile.tsx`)
- **Utilities & Services**: Use `camelCase` for utility files (e.g., `user.services.ts`, `response-api.ts`)
- **API Routes**: Use `camelCase` with directory structure matching the route path
- **Folders**: Use `kebab-case` for multi-word folder names or `camelCase` for feature folders

### TypeScript Standards
- Always use **explicit type annotations** for function parameters and return types
- Use **interfaces** for object shapes and component props
- Leverage **Zod schemas** for runtime validation of API inputs and database operations
- Avoid using `any` type; use `unknown` or generic types instead

### React & Component Best Practices
- Use **functional components** with hooks (no class components)
- Extract reusable logic into custom hooks
- Keep components focused on a single responsibility
- Use `React.FC<Props>` type annotation for component definitions
- Memoize expensive computations with `useMemo` and `useCallback` when needed

### API Routes & Backend
- Organize API routes by feature domain (e.g., `/api/user/`, `/api/auth/`)
- Use consistent **response format** with proper HTTP status codes
- Implement error handling with try-catch blocks
- Validate all incoming requests using **Zod schemas**
- Use **repository pattern** for database queries (see `user.repository.ts`)

### Database & Prisma
- Model names should be **PascalCase** (e.g., `User`, `Job`, `Application`)
- Use descriptive field names with appropriate data types
- Always include `id` and `createdAt`/`updatedAt` timestamps
- Use **enums** for fixed value sets (e.g., `Role`, `Status`)
- Run migrations with descriptive names: `npx prisma migrate dev --name <feature-description>`

### Styling
- Use **Tailwind CSS utility classes** for styling (no custom CSS unless necessary)
- Group related utilities together for readability
- Use CSS modules or Tailwind's `@apply` for complex component styles
- Follow mobile-first responsive design approach

### Code Quality
- Run **ESLint** before committing: `npm run lint`
- Write meaningful commit messages following **Conventional Commits**
- Keep functions small and focused (aim for <50 lines)
- Add comments for complex logic or non-obvious implementations

---

## ⚙️ Environment Variables & Configuration

### Required Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@localhost:5432/sgintern` |
| `NEXTAUTH_SECRET` | Encryption key for NextAuth sessions | (generate with openssl) |
| `NEXTAUTH_URL` | Application URL for NextAuth | `http://localhost:3000` |

### Optional Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | (from Google Cloud Console) |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret | (from Google Cloud Console) |

### Configuration Files

- **`next.config.ts`** - Next.js build and runtime configuration
- **`tsconfig.json`** - TypeScript compiler options
- **`eslint.config.mjs`** - ESLint rules and extensions
- **`postcss.config.mjs`** - PostCSS plugins for CSS processing
- **`prisma/schema.prisma`** - Database schema definition

---

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload

# Production
npm run build        # Build optimized production bundle
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint and check code quality

# Database
npx prisma migrate dev --name <name>  # Create and run database migration
npx prisma studio                     # Open Prisma Studio UI for data viewing
npx prisma generate                   # Regenerate Prisma client
```

---

## 📚 Key File Descriptions

### Authentication
- **`lib/auth.ts`** - NextAuth.js configuration with Credentials provider
- **`app/api/auth/[...nextauth]/route.ts`** - NextAuth.js API route handler

### Database
- **`prisma/schema.prisma`** - Prisma data model (User, Jobs, Applications, etc.)
- **`lib/prisma.ts`** - Singleton Prisma client instance
- **`feature/users/user.repository.ts`** - Database queries abstraction layer

### API
- **`app/api/user/route.ts`** - User management endpoints
- **`utils/response-api.ts`** - Standardized API response formatting

### Types
- **`app/types/next-auth.d.ts`** - TypeScript type augmentation for NextAuth session

---

## 🔐 Security Best Practices

1. **Never commit** `.env.local` or `.env` files (already in `.gitignore`)
2. **Use environment variables** for all sensitive data (keys, secrets, database URLs)
3. **Validate all inputs** using Zod schemas on API routes
4. **Hash passwords** using bcrypt before storing (never store plaintext passwords)
5. **Protect API routes** with NextAuth authentication where required
6. **Use HTTPS** in production (enforced by Vercel and most hosting platforms)
7. **Regenerate** `NEXTAUTH_SECRET` for production deployments

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Push to GitHub repository
git push origin main

# Connect repository to Vercel and deploy
# Set environment variables in Vercel project settings
```

### Other Platforms
- Ensure PostgreSQL database is accessible from your hosting provider
- Set all required environment variables in the hosting platform
- Run database migrations after deployment if needed

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Commit changes with clear messages: `git commit -m "feat: add new feature"`
3. Push to branch: `git push origin feature/your-feature-name`
4. Create Pull Request with detailed description
5. Ensure all tests pass and code is linted: `npm run lint`

---

## 📖 Useful Resources

- **[Next.js Documentation](https://nextjs.org/docs)** - Official Next.js guide
- **[Prisma Documentation](https://www.prisma.io/docs/)** - ORM and database guide
- **[NextAuth.js Documentation](https://next-auth.js.org/)** - Authentication setup
- **[Tailwind CSS Documentation](https://tailwindcss.com/docs)** - Utility CSS framework
- **[TypeScript Handbook](https://www.typescriptlang.org/docs/)** - TypeScript language reference
- **[Zod Documentation](https://zod.dev/)** - Schema validation library

---

## 📞 Support & Questions

For questions or issues, please:
1. Check existing documentation and code comments
2. Review the project's issue tracker
3. Contact the development team lead

---

## 📄 License

This project is private and proprietary. Unauthorized copying or distribution is not permitted.

---

**Last Updated:** April 2026  
**Version:** 0.1.0
