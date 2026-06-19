# Phase 3: Details & Contact

This phase focuses on building out the detailed project views and implementing a robust contact form.

## Goal Description
The objective is to provide dedicated pages for individual projects (e.g., `/projects/[id]`) to improve SEO and deep-linking, and to build a functional, validated Contact section on the landing page. We will use `react-hook-form` and `zod` for form validation to ensure a seamless and robust user experience.

## Proposed Changes

### Dependencies
- Run `pnpm install react-hook-form zod @hookform/resolvers`.
- Run `pnpm dlx shadcn@latest add form input textarea label`.

### UI Components & Routes

#### [NEW] `src/app/projects/[id]/page.tsx`
- Create a dynamic route for project details.
- Implement a layout to display the project's title, description, screenshots/images, and technologies used.
- For now, use mock data based on the `[id]` parameter.

#### [NEW] `src/components/ContactSection.tsx`
- Build a dedicated Contact section component.
- Implement a form with `Name`, `Email`, and `Message` fields.
- Integrate `react-hook-form` with a `zod` schema for robust client-side validation.
- Display validation error messages clearly using shadcn `form` components.

#### [NEW] `src/app/api/contact/route.ts`
- Create a Next.js API route to handle `POST` requests from the contact form.
- Validate the incoming payload server-side.
- Mock a successful submission response (e.g., logging the message and returning a 200 OK status).

#### [MODIFY] `src/app/page.tsx`
- Import and append the `<ContactSection />` to the bottom of the landing page, just above the Footer.

## Verification Plan
- Visually verify the `/projects/[id]` route renders correctly for a mock ID.
- Manually test the Contact form:
  - Attempt to submit empty fields to trigger `zod` validation errors.
  - Enter valid data and ensure the form submits successfully to the API route.
  - Verify the API route responds with success.
