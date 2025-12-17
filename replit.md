# Grúa RD - Landing Page

## Overview

Grúa RD is a landing page for a tow truck and roadside assistance marketplace in the Dominican Republic. The platform connects clients needing roadside help with tow truck operators. The project follows a modern SaaS landing page design inspired by Uber and Stripe, with Caribbean-optimized aesthetics for high contrast readability in bright sunlight.

The application is built as a full-stack TypeScript project with a React frontend and Express backend, using a monorepo structure with shared code between client and server.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **State Management**: TanStack React Query for server state
- **Animations**: Framer Motion for page animations
- **Build Tool**: Vite with hot module replacement

The frontend is in the `client/` directory with path aliases configured:
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets` → `attached_assets/`

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Architecture Pattern**: RESTful API with `/api` prefix for routes
- **Storage**: Abstracted storage interface (`IStorage`) with in-memory implementation (`MemStorage`), designed to be swapped for database storage
- **Development Server**: Vite dev server integrated with Express for HMR

The backend is in the `server/` directory with:
- `index.ts` - Main entry point, Express app setup
- `routes.ts` - API route registration
- `storage.ts` - Data persistence abstraction
- `vite.ts` - Vite development server integration
- `static.ts` - Static file serving for production

### Shared Code
The `shared/` directory contains:
- `schema.ts` - Drizzle ORM schema definitions with Zod validation schemas

### Database Schema
Uses Drizzle ORM with PostgreSQL dialect:
- **users** table: id (UUID), username (unique), password

Database migrations are output to `./migrations` directory.

### Build System
- Development: `tsx` for TypeScript execution with Vite for frontend
- Production: Custom build script using esbuild for server bundling and Vite for client
- Output: `dist/` directory with `index.cjs` (server) and `public/` (static assets)

### Design System
Brand colors defined in CSS variables:
- Navy Blue Primary: `#0F2947` - Headers, primary buttons
- Orange Accent: `#F59E0B` - CTAs, highlights, badges
- Typography: Inter font family from Google Fonts

## External Dependencies

### Core Dependencies
- **PostgreSQL**: Database (via Drizzle ORM) - requires `DATABASE_URL` environment variable
- **Google Fonts**: Inter font family loaded via CDN

### Key NPM Packages
- **drizzle-orm** / **drizzle-zod**: Database ORM and schema validation
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **framer-motion**: Animation library
- **react-icons**: Icon library (Google Play, App Store icons)
- **wouter**: Client-side routing
- **express-session** / **connect-pg-simple**: Session management (configured but may not be active)

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development banner

### Development Tools
- **tsx**: TypeScript execution
- **esbuild**: Production bundling for server
- **drizzle-kit**: Database migration tools