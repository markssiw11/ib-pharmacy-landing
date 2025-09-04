# IB Pharmacy Management System

## Overview

IB Pharmacy is a comprehensive pharmaceutical management platform designed specifically for the Vietnamese market. It provides integrated solutions for both pharmacies and distributors through two interconnected platforms, creating a complete supply chain ecosystem. The system features modern web technologies including React with shadcn/ui components, Express.js backend, and PostgreSQL database with Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **UI Library**: shadcn/ui components built on Radix UI primitives for accessible, customizable interfaces
- **Styling**: Tailwind CSS with CSS variables for theming and responsive design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript with ES modules for type safety and modern JavaScript features
- **Build System**: ESBuild for fast production builds and tsx for development
- **Middleware**: Custom logging middleware for API request tracking and error handling

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless PostgreSQL for cloud hosting
- **Schema Management**: Drizzle Kit for migrations and schema synchronization
- **Validation**: Drizzle-Zod integration for runtime schema validation
- **Fallback Storage**: In-memory storage implementation for development/testing

### Database Schema
The system includes two main entities:
- **Users**: Basic user authentication with username/password
- **Contact Requests**: Lead capture system for business inquiries with fields for name, email, phone, business type, and messages

### API Structure
- **Contact Endpoint** (`POST /api/contact`): Handles contact form submissions with validation
- **Admin Endpoint** (`GET /api/contact-requests`): Retrieves contact requests for administrative purposes
- **Error Handling**: Centralized error middleware with proper HTTP status codes and Vietnamese error messages

### Authentication and Authorization
Currently implements a basic user schema foundation. The system is prepared for future authentication implementation with user management infrastructure in place.

### Development Features
- **Hot Module Replacement**: Vite HMR for rapid development
- **Error Overlay**: Replit-specific error modal for development debugging
- **Path Aliases**: TypeScript path mapping for clean imports (@/, @shared/, @assets/)
- **Build Optimization**: Separate client and server builds with proper bundling

## External Dependencies

### Core Framework Dependencies
- **@vitejs/plugin-react**: React support for Vite bundler
- **express**: Web application framework for Node.js
- **typescript**: Type checking and compilation

### Database and ORM
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-kit**: Database migration and schema management tools
- **@neondatabase/serverless**: Serverless PostgreSQL connection driver
- **drizzle-zod**: Schema validation integration

### UI and Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility

### Form and Validation
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for various schema libraries
- **zod**: TypeScript-first schema validation

### State Management and Data Fetching
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight routing library for React

### Development and Build Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit-specific development features

### Utility Libraries
- **date-fns**: Modern date utility library
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel component library
- **lucide-react**: Icon library with React components