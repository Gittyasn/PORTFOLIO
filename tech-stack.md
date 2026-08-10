# Portfolio Project Technology Stack Specification

This document lists the required technology stack and tools for our project, detailing the role and usage of each element.

---

## 1. Core Stack
* **Next.js**: The overall framework. We will use the App Router (`/src/app`) for structure, server components, layouts, and page routing.
* **React**: Component library for UI composition, states, hooks, and lifecycle management.
* **TypeScript**: Type checking and safety for interfaces, props, states, and client/server-side utility functions.
* **Tailwind CSS**: Utility-first CSS framework for styles, layout structure, responsive grids, and responsive design.
* **Framer Motion**: Core animation engine for page transitions, interactive hover effects, timeline animations, and reveal-on-scroll.

## 2. Content
* **MDX**: Markdown with JSX. Used for writing, displaying, and dynamic rendering of blog posts, allowing rich components to be embedded directly inside articles.

## 3. UI Components & Theming
* **Lucide React**: Icon library providing modern, clean icons for navigation links, project tags, and contacts.
* **next-themes**: Dark and Light theme integration, preventing server-side rendering mismatch or flash of unthemed content.

## 4. Forms & Validation
* **React Hook Form**: Form state manager to handle inputs, submissions, and status without unnecessary page re-renders.
* **Zod**: Schema declaration and validation library to validate form field inputs (e.g. contact form name, email length, message validation).
* **EmailJS or Resend**: Mailing integration to send messages from the contact form. (We'll use **Resend** or client-side **EmailJS** depending on preference).

## 5. Code Quality
* **ESLint**: Linter to enforce coding standards, syntax rules, and error prevention.
* **Prettier**: Formatter to enforce consistent code styling and readability automatically.

## 6. Development & Deployment
* **Git**: Version control system to manage files and tracks development history.
* **GitHub**: Remote repository host for source code backups and automated deployments.
* **Vercel**: Cloud hosting platform for instantaneous deployments and production builds.

## 7. Performance & Optimization
* **next/image**: Component for optimized image loading, automatically serving modern image formats (WebP/AVIF) and preventing layout shifts.
* **next/font**: Layout-shift-free font loading, locally caching and serving custom Google fonts.
* **Metadata API**: SEO management, defining static and dynamic page titles, descriptions, and OpenGraph/social preview tags.
* **Vercel Analytics & Speed Insights**: Real-time website visitor tracking, loading speeds, and Core Web Vitals profiling.
