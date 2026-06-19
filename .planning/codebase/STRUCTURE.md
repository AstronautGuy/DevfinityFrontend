# Codebase Structure

## Directories

- `.github/` - GitHub Actions or other GitHub config.
- `src/app/` - Next.js App Router routes and layouts.
  - `globals.css` - Global CSS styles and Tailwind directives.
  - `layout.tsx` - Root layout wrapper for the application.
  - `page.tsx` - Homepage component.
- `src/components/` - Reusable UI components.
  - `Header.tsx`, `Footer.tsx`
- `src/lib/` - Shared utility functions.
  - `utils.ts` - Contains `cn()` utility for merging tailwind classes.

## Configuration Files
- `package.json` - Dependencies and scripts.
- `tsconfig.json` - TypeScript configuration.
- `next.config.ts` - Next.js settings.
- `eslint.config.mjs` - ESLint 9 Flat Config.
- `postcss.config.mjs` - PostCSS setup (Tailwind 4).
- `components.json` - shadcn/ui configuration file.
