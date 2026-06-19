# Architecture

## Overview
This is a frontend Next.js App Router application.

## Key Patterns
- **Server Components (RSC):** The default in Next.js App Router.
- **Client Components:** Used when interactivity or client state is needed (identified by `"use client"`).
- **Utility Functions:** Global utilities in `src/lib/` (e.g., `utils.ts` for cn/clsx).
- **Component Design:** Components reside in `src/components/`, using composition and variants.
