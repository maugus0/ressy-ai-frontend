# RessyAI Promotional Website

Promotional website for RessyAI — an AI-powered voice receptionist for restaurants, salons, dental clinics, and service businesses.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 5** — build tool & dev server
- **Tailwind CSS** — styling
- **shadcn/ui** (Radix UI) — components
- **React Router v6** — routing
- **Framer Motion** — animations
- **embla-carousel-react** — carousels
- **TanStack Query** — data fetching

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone the repo and navigate to the project:
   ```bash
   cd ressy-ai-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Start the dev server:

```bash
npm run dev
```

The site runs at [http://localhost:8080](http://localhost:8080).

## Build & Preview

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Linting & Formatting

Run ESLint (warnings treated as errors):

```bash
npm run lint
```

Generate ESLint SARIF for GitHub code scanning:

```bash
npm run lint:sarif
```

Format with Prettier:

```bash
npm run format        # write changes
npm run format:check  # check only (CI)
```

## Testing

Uses **Vitest** and **@testing-library/react** for unit and integration tests.

Run tests in watch mode:

```bash
npm run test
```

Run tests once with coverage (CI):

```bash
npm run test:ci
```

Tests live in `src/__tests__/` and cover pages, hooks, config, types, and shared logic.

## Deployment

The site is deployed to **GitHub Pages**:

```bash
npm run predeploy   # builds the project
npm run deploy      # publishes to gh-pages branch
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── components/ui/  # shadcn/ui primitives
├── config/         # App config (e.g. API endpoints)
├── data/           # Static content (FAQ, blog, onboarding steps)
├── hooks/          # Custom React hooks
├── lib/            # Utilities
├── pages/          # Route-level page components
├── types/          # Shared TypeScript types
├── __tests__/      # Vitest + Testing Library tests
├── test/           # Test utilities
└── assets/         # Images, audio, integrations
```

## Pages & Routes

| Route            | Page                      |
| ---------------- | ------------------------- |
| `/`              | Home                      |
| `/restaurants`   | Restaurants (industry)    |
| `/salons`        | Salons & Spas (industry)  |
| `/dental`        | Dental Clinics (industry) |
| `/schedule-demo` | Schedule Demo             |
| `/blog`          | Blog listing              |
| `/blog/:slug`    | Blog post detail          |
| `/onboarding`    | Getting Started guide     |
| `/help-center`   | FAQ & support             |
| `/system-status` | Live service status       |
| `/privacy`       | Privacy Policy            |
| `/terms`         | Terms of Service          |
| `/cookies`       | Cookie Policy             |

**Redirects (backward-compatible):** `/status` → `/system-status`, `/docs` and `/api-reference` → `/help-center`

## Scripts Reference

| Script                 | Description                    |
| ---------------------- | ------------------------------ |
| `npm run dev`          | Start dev server               |
| `npm run build`        | Production build               |
| `npm run build:dev`    | Development build              |
| `npm run preview`      | Preview production build       |
| `npm run lint`         | Run ESLint                     |
| `npm run lint:sarif`   | Generate ESLint SARIF          |
| `npm run format`       | Format with Prettier           |
| `npm run format:check` | Check formatting               |
| `npm run test`         | Vitest (watch mode)            |
| `npm run test:ci`      | Vitest (single run + coverage) |
| `npm run predeploy`    | Alias for `build`              |
| `npm run deploy`       | Deploy to GitHub Pages         |

---

## Credits

Developed by the RessyAI Team.
