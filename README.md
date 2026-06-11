# SNO Website

Public portal for the **Silver Night Operator** universe — a weekly cyberpunk
synthwave channel. A grid of 28 operator cards unlocks as their YouTube mixes
go live; each unlocked card opens a classified-style dossier with lore and music.

Live at [silvernightoperator.com](https://silvernightoperator.com). Built with
Astro (static output), deployed on Vercel.

## Commands

```sh
npm install      # install dependencies
npm run dev      # dev server at localhost:4321
npm run build    # production build → dist/ (run before committing)
npm run preview  # preview the production build
```

## Where things live

| Path | Role |
|---|---|
| `src/data/operators.ts` | Single source of truth: all 28 operators + unlock state |
| `src/components/OperatorCard.astro` | Card UI (locked / released / scheduled / unlocked) |
| `src/pages/` | Home, operator grid, dossier wrapper, factions, 404 |
| `public/albums/` | Album art + dossier HTML per operator (real directory, committed) |
| `src/styles/global.css` | Design tokens — source of truth for the design system |

Full project context, card-state model, and the dossier workflow are documented
in [`CLAUDE.md`](./CLAUDE.md). Product vision in [`PRODUCT.md`](./PRODUCT.md),
design system in [`DESIGN.md`](./DESIGN.md), pending work in [`BACKLOG.md`](./BACKLOG.md).
