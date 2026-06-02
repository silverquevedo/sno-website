# SNO Website — Context

The SNO website is the public portal for the Silver Night Operator universe. It shows a grid of 28 operator cards that unlock one by one as their YouTube albums go live. Built with Astro 4, deploys to Vercel.

See the root `../CLAUDE.md` for the full project context and production pipeline.

---

## Central Data File

**`src/data/operators.ts`** — the single source of truth for all 28 operators.

Every unlock, every dossier addition, every scheduled card touches this file.

### Card states (4 total)

```ts
// LOCKED — YouTube not yet released (shows CLASSIFIED badge)
{ released: false, lore: null, slug: null, unlocksAt: null }

// RELEASED — YouTube mix is live, dossier not built yet (full art, no link)
{ released: true, lore: null, slug: null, unlocksAt: null }

// SCHEDULED — dossier ready, YouTube video scheduled (countdown timer, auto-flips)
{ released: true, lore: 'Lore/slug.html', slug: 'NN-slug', unlocksAt: '2026-06-06T20:00:00-05:00' }

// UNLOCKED — dossier live, YouTube public (full card, "View Operator" link)
{ released: true, lore: 'Lore/slug.html', slug: 'NN-slug', unlocksAt: null }
```

`unlocksAt` is ISO 8601 with Colombia timezone offset (`-05:00`). Match it to the YouTube scheduled publish time exactly.

---

## Asset Strategy

`public/albums/` is a **real directory** committed to this repo — not a symlink. Vercel only deploys `website/`, so all album art and dossier HTML must live here.

```
public/albums/
  [folder]/
    album.png              ← operator card art (1000×1000)
    KoFi/                  ← special art if it exists (only Velvet Marquee currently)
    Lore/
      [NN]-[slug].html     ← dossier page (iframe-embedded in [slug].astro)
```

Folder names must match the `folder` field in `operators.ts` exactly — including spacing and trailing spaces (e.g. `"22 - Inescapable Vortex "` has a trailing space).

---

## How to Add a New Dossier (per operator)

1. Create `public/albums/[folder]/Lore/[NN]-[slug].html`
   - Template: `public/albums/27 - Velvet Marquee/Lore/27-velvet-marquee.html`
   - Source content: `../Lore/Operators/[NN]-[slug].md`
   - Faction accent color replaces Velvet Marquee's gold (`#c9a84c`):
     - The Architecture: `#00c4ff` · Ghost Layer: `#8ab4d4` · Ritual Network: `#b87aff`
     - South Bloc: `#6bdf5a` · Iron North: `#ff9a5a` · Forbidden Zone: `#ff6060`

2. Update `src/data/operators.ts`:
   ```ts
   { ..., lore: 'Lore/NN-slug.html', slug: 'NN-slug', unlocksAt: null }
   ```
   Use `unlocksAt: 'YYYY-MM-DDTHH:MM:SS-05:00'` if the YouTube video is scheduled but not yet public.

3. Verify locally:
   ```bash
   npm run build
   npm run dev
   # Check http://localhost:4321/operators/NN-slug
   ```

4. Commit and push → Vercel auto-deploys.

---

## Key Components

| File | Role |
|---|---|
| `src/data/operators.ts` | All operator data + lock state |
| `src/components/OperatorCard.astro` | Card UI — handles locked/scheduled/unlocked states + countdown timer |
| `src/pages/operators/index.astro` | Operator grid with faction chip filter |
| `src/pages/operators/[slug].astro` | Dossier wrapper page (nav bar + full-viewport iframe) |
| `src/pages/index.astro` | Home — hero, featured operators (currently hardcoded indices 26, 27, 24) |
| `src/layouts/Base.astro` | Nav: SNO logo, Home, Operators, Bandcamp, YouTube, Ko-fi |
| `src/styles/global.css` | Design tokens: `--cyan: #00c4ff`, `--gold: #c9a84c`, `--bg: #09090e` |

---

## Countdown & Auto-Flip

The card countdown is entirely **client-side** — no server needed. `OperatorCard.astro` reads `unlocksAt`, runs `setInterval` every second, and at the exact unlock time removes `.scheduled`, adds `.just-unlocked` (cyan flash animation), and re-enables pointer events. No page refresh needed.

Once the video is live and you're done with the countdown UX, set `unlocksAt: null` to make the card permanently unlocked.

---

## Dev Commands

```bash
npm run dev      # localhost:4321
npm run build    # → dist/  (always run before committing)
```

---

## Current Standards (updated 2026-06-02)

All 28 operator dossiers follow these standards. See root `../CLAUDE.md` for full spec.
- Split hero layout, 16:9 cover images, Record labels
- Expanded movement descriptions (4-6 sentences each)
- The Encounter (bard-voice, monospace, above Sound Signature)
- Track durations (not cumulative timestamps)
- Identity deep-dive merging unique section
- Audio player with mute button in navbar
- Zero em dashes in visible content

## Backlog

See `BACKLOG.md` for prioritized tasks.
