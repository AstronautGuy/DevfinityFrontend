# Phase 1: Foundation

This phase focuses on setting up the project's foundational UI components and global layout.

## Goal Description
The objective is to establish the core layout of the portfolio website. We have already confirmed that `shadcn/ui` and Tailwind v4 are initialized. Now we need to implement the global layout wrapper, including a responsive Header and Footer, to serve as the skeleton for the rest of the pages.

## Proposed Changes

### UI Components

#### `src/components/Header.tsx`
- Build a responsive navigation bar.
- Include a placeholder logo or text for "Devfinity".
- Include desktop navigation links (Home, About, Projects, Contact) and a mobile hamburger menu.
- Incorporate a dark mode toggle (if required).

#### `src/components/Footer.tsx`
- Build a simple footer containing copyright information.
- Include social media icon links (GitHub, LinkedIn, Twitter) using `lucide-react`.

### Layout & App Structure

#### `src/app/layout.tsx`
- Integrate the `<Header />` and `<Footer />` components into the root layout so they appear on every page.
- Wrap the main children content in a semantic `<main>` tag with appropriate padding/margins.

## Verification Plan
- Visually verify the Header and Footer are rendered correctly on desktop and mobile.
- Verify that dark mode variables apply correctly.
