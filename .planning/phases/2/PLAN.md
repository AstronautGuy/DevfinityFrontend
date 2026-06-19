# Phase 2: Landing Page

This phase focuses on building the core content sections of the landing page.

## Goal Description
The objective is to create a compelling landing page that immediately communicates value and showcases past work. We will implement three main sections: Hero, About, and Featured Projects.

## Proposed Changes

### Dependencies
- Run `npx shadcn@latest add button card` to install necessary UI components for the Hero Call-to-Action and Project Cards.

### UI Components

#### `src/components/HeroSection.tsx` (NEW)
- Build a full-height or large hero banner.
- Include an attention-grabbing headline and subheadline.
- Add primary and secondary CTA (Call to Action) buttons using the shadcn `Button` component.

#### `src/components/AboutSection.tsx` (NEW)
- Create a section detailing "Who We Are" or "About Me".
- Include a descriptive paragraph and potentially an image placeholder.

#### `src/components/FeaturedProjectsSection.tsx` (NEW)
- Build a grid layout for showcasing projects.
- Use the shadcn `Card` component to display individual project previews (Title, Description, placeholder image).

### Page Updates

#### `src/app/page.tsx` (MODIFY)
- Remove the default Next.js template content.
- Import and stack the `<HeroSection />`, `<AboutSection />`, and `<FeaturedProjectsSection />` components.

## Verification Plan
- Visually verify all sections are rendered correctly and are responsive across mobile and desktop viewports.
- Ensure the shadcn components function as expected (e.g., hover states on buttons and cards).
