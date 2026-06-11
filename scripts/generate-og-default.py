#!/usr/bin/env python3
"""Generates public/og-default.png (1200x630) — SNO share card.

Dark HUD layout: brand text block on the left, latest album art fading in
on the right. Interim asset until a designed one replaces it (see BACKLOG).

Usage: python3 scripts/generate-og-default.py [path-to-album-art]
Requires: pillow
"""
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
ART = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / 'public/albums/26 - Chrome Hazard/album.png'
OUT = ROOT / 'public/og-default.png'

W, H = 1200, 630
BG = (9, 9, 14)          # --bg
CYAN = (0, 196, 255)     # --cyan
WHITE = (240, 239, 233)  # --white
DIM = (158, 156, 148)    # --dim

MONO = '/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf'
MONO_BOLD = '/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf'

img = Image.new('RGB', (W, H), BG)

# Right: album art with a left-edge fade into the background
art = Image.open(ART).convert('RGB').resize((H, H), Image.LANCZOS)
fade = Image.new('L', (H, H), 255)
fd = ImageDraw.Draw(fade)
fade_w = 260
for x in range(fade_w):
    fd.line([(x, 0), (x, H)], fill=int(255 * x / fade_w))
img.paste(art, (W - H, 0), fade)

# Faint scanlines over everything
overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
od = ImageDraw.Draw(overlay)
for y in range(0, H, 4):
    od.line([(0, y), (W, y)], fill=(0, 0, 0, 28))
img = Image.alpha_composite(img.convert('RGBA'), overlay).convert('RGB')

d = ImageDraw.Draw(img)
x = 72

# Intercept line
f_small = ImageFont.truetype(MONO, 22)
d.text((x, 150), '▸ FREQUENCY SNO-001 · SIGNAL ACTIVE', font=f_small, fill=CYAN)

# Title
f_title = ImageFont.truetype(MONO_BOLD, 76)
d.text((x, 210), 'SILVER NIGHT', font=f_title, fill=WHITE)
d.text((x, 295), 'OPERATOR', font=f_title, fill=CYAN)

# Cyan rule
d.line([(x, 410), (x + 430, 410)], fill=(*CYAN, 255), width=2)

# Meta line
f_meta = ImageFont.truetype(MONO, 24)
d.text((x, 436), '28 OPERATORS · 8 FACTIONS · ONE MEGACITY', font=f_meta, fill=DIM)

img.save(OUT, 'PNG')
print(f'wrote {OUT} ({OUT.stat().st_size // 1024} KB)')
