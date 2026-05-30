export interface Operator {
  id: number;
  folder: string;
  name: string;
  faction: string;
  art: string;
  /**
   * true  = YouTube mix is live. Card shows full art + name, no CLASSIFIED badge.
   * false = not yet released. Card shows CLASSIFIED.
   * Card states:
   *   released=false, lore=null, slug=null           → LOCKED (CLASSIFIED)
   *   released=true,  lore=null, slug=null           → RELEASED (no dossier yet)
   *   released=true,  lore set,  slug set, unlocksAt → SCHEDULED (countdown)
   *   released=true,  lore set,  slug set, no unlocksAt → UNLOCKED (full link)
   */
  released: boolean;
  /** relative path inside the album folder, e.g. "Lore/27-velvet-marquee.html" */
  lore: string | null;
  /** URL slug for the dossier page, e.g. "27-velvet-marquee" */
  slug: string | null;
  /** ISO 8601 timestamp matching YouTube scheduled publish time — drives client-side countdown */
  unlocksAt: string | null;
}

export const FACTION_COLORS: Record<string, string> = {
  'The Architecture':   '#00c4ff',
  'The Ritual Network': '#b87aff',
  'South Bloc':         '#6bdf5a',
  'Iron North':         '#ff9a5a',
  'The Ghost Layer':    '#8ab4d4',
  'Forbidden Zone':     '#ff6060',
  'The Velocity':       '#40e0d0',
  'Unaligned':          '#c9a84c',
};

export const FACTION_ORDER = [
  'The Architecture',
  'The Ritual Network',
  'The Ghost Layer',
  'South Bloc',
  'Iron North',
  'Forbidden Zone',
  'The Velocity',
  'Unaligned',
] as const;

export const OPERATORS: Operator[] = [
  { id:  1, folder: '1-Machine Control',         name: 'Machine Control',      faction: 'The Architecture',   art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id:  2, folder: '2-Carbon Chamber',          name: 'Carbon Chamber',       faction: 'The Velocity',       art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id:  3, folder: '3-Neural Sands',            name: 'Neural Sands',         faction: 'The Ghost Layer',    art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id:  4, folder: '4-NightControl',            name: 'NightControl',         faction: 'The Ghost Layer',    art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id:  5, folder: '5-Midnight Runes',          name: 'Midnight Runes',       faction: 'The Ritual Network', art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id:  6, folder: '6-Ritual Circuits',         name: 'Ritual Circuits',      faction: 'The Ritual Network', art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id:  7, folder: '7-Neon Shrine',             name: 'Neon Shrine',          faction: 'The Ritual Network', art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id:  8, folder: '8-Tribal Circuits',         name: 'Tribal Circuits',      faction: 'South Bloc',         art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id:  9, folder: '9-EchoChamber',             name: 'EchoChamber',          faction: 'The Velocity',       art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id: 10, folder: '10-EchoSlam',               name: 'EchoSlam',             faction: 'The Velocity',       art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id: 11, folder: '11-RedZoneEchoes',          name: 'RedZoneEchoes',        faction: 'Forbidden Zone',     art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id: 12, folder: '12-UnderCityRage',          name: 'UnderCityRage',        faction: 'Forbidden Zone',     art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id: 13, folder: '13-Coastal Ascendancy',     name: 'Coastal Ascendancy',   faction: 'South Bloc',         art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id: 14, folder: '14-ConcreteDrums',          name: 'ConcreteDrums',        faction: 'South Bloc',         art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id: 15, folder: '15-Unbroken Legion',        name: 'Unbroken Legion',      faction: 'Iron North',         art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id: 16, folder: '16-TropicMadness',          name: 'TropicMadness',        faction: 'South Bloc',         art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id: 17, folder: '17-Sacred Protocol',        name: 'Sacred Protocol',      faction: 'The Ritual Network', art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id: 18, folder: '18 - Dojo Ascendance',      name: 'Dojo Ascendance',      faction: 'The Ritual Network', art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id: 19, folder: '19 - Pilgrimage Orchestra', name: 'Pilgrimage Orchestra', faction: 'The Ghost Layer',    art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id: 20, folder: '20 - Skuldr Accord',        name: 'Skuldr Accord',        faction: 'The Ritual Network', art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id: 21, folder: '21 - Astral Ascension',     name: 'Astral Ascension',     faction: 'Unaligned',          art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id: 22, folder: '22 - Inescapable Vortex ',  name: 'Inescapable Vortex',   faction: 'The Architecture',   art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id: 23, folder: '23 - Ghost Signal',         name: 'Ghost Signal',         faction: 'The Ghost Layer',    art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id: 24, folder: '24 - VEX',                  name: 'VEX',                  faction: 'Forbidden Zone',     art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id: 25, folder: '25 - Ferro Reign',          name: 'Ferro Reign',          faction: 'Iron North',         art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id: 26, folder: '26 - Chrome Hazard',        name: 'Chrome Hazard',        faction: 'The Architecture',   art: 'album.png',                      released: true,  lore: null,                        slug: null,               unlocksAt: null },
  { id: 27, folder: '27 - Velvet Marquee',       name: 'Velvet Marquee',       faction: 'Unaligned',          art: 'KoFi/velvet-marquee-square.png', released: true,  lore: 'Lore/27-velvet-marquee.html', slug: '27-velvet-marquee', unlocksAt: null },
  { id: 28, folder: '28 - Static Bloom',         name: 'Static Bloom',         faction: 'The Ghost Layer',    art: 'album.png',                      released: false, lore: null,                        slug: null,               unlocksAt: null },
];

/** Returns the public-facing art URL for an operator */
export function artUrl(op: Operator): string {
  return `/albums/${op.folder}/${op.art}`;
}

/** Returns the dossier URL for an operator (null if locked or not yet unlocked at build time) */
export function loreUrl(op: Operator): string | null {
  if (op.slug) return `/operators/${op.slug}`;
  return null;
}

/** Returns the raw HTML lore path (for embedding in the dossier page) */
export function loreHtmlPath(op: Operator): string | null {
  return op.lore ? `/albums/${op.folder}/${op.lore}` : null;
}
