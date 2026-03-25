DO — a full digital office platform (Next.js App Router + Tailwind v4 + shadcn/ui).

## Getting Started

Install deps and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## What’s in place

- Warm-dark theme tokens live in `src/app/globals.css` (base `#0c0b09`, surfaces, parchment/tan text, sage/terracotta/slate accents).
- Fonts are set up via `next/font` in `src/app/layout.tsx` (Fraunces for display, Geist for UI).
- App shell routes:
  - `/` (Virtual Office)
  - `/channels` + `/channels/*`
  - `/projects` (Kanban shell)
  - `/docs`
  - `/whiteboard`
  - `/calendar`

## UI components

shadcn/ui is initialized (base-nova) and components live in `src/components/ui`.

Add more components with:

```bash
npx shadcn@latest add <component>
```

## Next steps

- Clerk auth + workspace scoping
- Convex realtime data layer (presence, chat, kanban, notifications)
- LiveKit rooms (always-on + scheduled meetings + video calls)
- make tldraw whiteboard collaborative + BlockNote docs editor
