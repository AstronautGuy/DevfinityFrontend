# Phase 3 Context: Details & Contact

## Implementation Decisions

### 1. Project Detailed Views
- **Approach:** We will implement a separate dynamic route (`src/app/projects/[id]/page.tsx`).
- **Reasoning:** Allows for detailed, sharable, and SEO-friendly pages for each individual project instead of modals.

### 2. Contact Section
- **Approach:** A working contact form built into the application.
- **Backend:** We will create a simple Next.js API route (`src/app/api/contact/route.ts`) to handle the form submission (e.g., logging it or mocking a success response for now, to be integrated with a real service later).

### 3. Form Validation
- **Approach:** We will use `react-hook-form` paired with `zod` schema validation.
- **Reasoning:** Ensures robust, client-side validation for form fields (Name, Email, Message) with a clean developer experience. We will need to install `@hookform/resolvers`, `react-hook-form`, and `zod`. We should also pull in the `form` component from `shadcn/ui`.

## Next Steps for Planning
- Plan the addition of required dependencies (`zod`, `react-hook-form`, `shadcn form`).
- Plan the dynamic route `projects/[id]`.
- Plan the API route and the Contact form component.
