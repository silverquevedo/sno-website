# Silver Night Operator — Design System

## Color tokens

```
--bg:        #09090e   /* near-black, blue-tinted */
--bg-card:   #0d0d14   /* card background */
--white:     #f0efe9   /* warm white */
--body:      #d2d0c5   /* body text */
--dim:       #7e7c74   /* secondary text */
--dimmer:    #5a5855   /* tertiary text */
--cyan:      #00c4ff   /* primary accent */
--cyan-dim:  #004d63
--gold:      #c9a84c   /* Unaligned faction / dossier accents */
--nav-h:     52px      /* fixed nav height */
```

## Faction color map

| Faction | Color |
|---|---|
| The Architecture | #00c4ff (cyan) |
| The Ritual Network | #b87aff (purple) |
| South Bloc | #6bdf5a (green) |
| Iron North | #ff9a5a (orange) |
| The Ghost Layer | #8ab4d4 (blue-grey) |
| Forbidden Zone | #ff6060 (red) |
| The Velocity | #40e0d0 (teal) |
| Unaligned | #c9a84c (gold) |

## Typography

- **Display:** Bebas Neue — card names, section headers, hero titles
- **Body:** Inter — descriptions, metadata
- **Mono:** system monospace — codes, classifications, data fields, badges

## Components

### Operator card
- Aspect ratio 4:5
- Art fills full card, gradient overlay (bottom-heavy)
- Corner brackets appear on hover
- Faction color glow on hover border
- Number badge top-left (cyan bordered)
- Faction dot top-right
- Name (Bebas Neue) + faction label bottom-left
- "View Operator" CTA reveals on hover as card-body slides up

### Card states
- **Locked:** desaturated art, dark overlay, CLASSIFIED badge centered, name dimmed
- **Released:** full art, no CTA link
- **Scheduled:** countdown timer overlay
- **Unlocked:** full card, hover effects active

### Faction filter chips
- Monospace, small caps, colored dot indicator
- Active state: cyan border + background tint

### Navigation
- Fixed top, blur backdrop
- Logo + nav links + external links (Bandcamp, YouTube, Ko-fi)

## Motion principles

- Card entrance: translateY + opacity, staggered by index
- Hover: scale(1.015) + translateY(-3px), art scale(1.06)
- CTA reveal: card-body translateY(-10px) on hover
- No bounce, no elastic, ease-out-quart

## Spacing

- Grid: 4-column on desktop, 3 on tablet, 2 on mobile
- Card gap: tight (1-2px visual gap via grid)
- Padding inside cards: 1rem
