# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Source root**: `src/` with path alias `@/*` → `src/*`

### App Router structure

All routes live under `src/app/`. Each route is a directory containing:
- `page.tsx` — the route's UI (required to make a route publicly accessible)
- `layout.tsx` — shared layout wrapping child routes
- `loading.tsx`, `error.tsx` — optional loading/error UI

The root layout (`src/app/layout.tsx`) wraps the entire app and is the right place for global providers, fonts, and metadata.

### Adding new routes

Create `src/app/<route-name>/page.tsx` for a new page. Nested routes follow the folder hierarchy (e.g. `src/app/dashboard/settings/page.tsx` → `/dashboard/settings`).

### Styling

Tailwind CSS v4 is configured via `postcss.config.mjs`. Global styles are in `src/app/globals.css`.
