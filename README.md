# Devfinity Frontend Architecture

Devfinity designs and deploys bespoke, type-safe full-stack software tailored to the exact operational blueprints of complex businesses. We eliminate the friction of rigid third-party templates, building clean, secure, and infinitely scalable web platforms that turn fragmented operational chaos into elegant, high-utility automation modules.

## Tech Stack
- Next.js 15 (App Router)
- React 19
- Tailwind CSS
- GSAP (ScrollTrigger & Core)
- TypeScript

## Local Development

```bash
pnpm install
pnpm run dev
```

## Structure
- `/src/app`: App Router structure
- `/src/components`: UI modules and GSAP Client components
- `/public`: Static assets

## Architecture Notes
- Heavy use of GSAP for spatial interactions and pinned layouts
- Semantic SEO and GEO injected using JSON-LD and HTML5 semantic tags
