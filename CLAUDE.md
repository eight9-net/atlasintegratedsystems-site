# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for Atlas Integrated Systems, Inc. — a SCADA/industrial automation company. Built as a Vue 3 SPA deployed to GitHub Pages.

## Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Production build (outputs to `dist/`)
- `npm run preview` — Preview production build locally

No test runner or linter is configured.

## Tech Stack

- **Vue 3** (Composition API) with **JavaScript** (no TypeScript)
- **Vite 7** build tool
- **Vue Router 5** with hash history (`createWebHashHistory`) for GitHub Pages compatibility
- **Pinia 3** for state management
- **Tailwind CSS 4** + **DaisyUI 5** (theme: `corporate`) for styling
- **SCSS** (sass-embedded) for global styles
- **Axios** for HTTP requests to AWS Lambda backend
- **Font Awesome 7** via `@fortawesome/vue-fontawesome`
- **VueUse 14** for composition utilities

## Architecture

### Routing & Layout

All routes are children of `MainLayout.vue`, which provides the shared Navbar/Footer shell. Only the Home view is eagerly loaded; all other views (`Projects`, `Services`, `Contact`, `Sample`) are lazy-loaded via dynamic imports. Routes are defined in `src/router/index.js`.

### Global Components

Four components are registered globally in `src/main.js` and available in all templates without import: `ContentLeftSection`, `ContentRightSection`, `ContentFullSection`, `ContactButton`.

### Global Properties

Company info is available on all component instances via `this.$companyName`, `this.$contactEmail`, `this.$contactPhone`, `this.$companyAddress`, `this.$companyLicense`, `this.$companyACO` (set in `src/main.js`).

### API Layer

`src/https.js` exports an Axios-based client with a single endpoint — `sendContactForm()` POSTs to an AWS API Gateway Lambda at a hardcoded URL with `app_key: 'scada'`. The Pinia store in `src/stores/contact.js` wraps this call and manages form/loading state.

### Composables

`src/composables/utils.js` provides `useGetImageUrl(path)`, `useGetFileUrl(path)`, and `useFormatPhone(str)` for asset URL resolution and phone formatting.

### Styling Conventions

- Use Tailwind utility classes and DaisyUI component classes (e.g., `btn`, `card`, `modal`)
- DaisyUI 5 reference is in `.github/instructions/daisyui.instructions.md`
- Headlines use the `headline` class (Noto Serif Georgian font, defined in `src/style.scss`)
- Parallax backgrounds use the `fixed-bg` class
- Anchor scroll targets use the `scroll-target` class (offset for fixed navbar)

### Static Content

Project data and service descriptions live in `site_files/` as static content directories.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/pages.yml`) which builds with Node 22 and deploys `dist/` to GitHub Pages.
