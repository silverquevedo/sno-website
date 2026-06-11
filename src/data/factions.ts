import { FACTION_COLORS, FACTION_ORDER } from './operators';

export interface Faction {
  name: string;
  desc: string;
  color: string;
}

const FACTION_DESCS: Record<string, string> = {
  'The Architecture':   'They build the rules. They control the flows. Invisible in power.',
  'The Ritual Network': 'Operate where data becomes ritual. The bridge between the digital and the ancient.',
  'South Bloc':         'Cultural resistance from the south. Stronger than any official map shows.',
  'Iron North':         "Absolute discipline. Calculated cold. They don't negotiate.",
  'The Ghost Layer':    "No official record. No fixed territory. They exist because no one can prove they don't.",
  'Forbidden Zone':     'Banned on every official map. Active on every map that matters.',
  'The Velocity':       "The city in motion. Chaos with direction. You can't keep up.",
  'Unaligned':          'No faction. No network. Operate alone. The most dangerous or the most free. Depends on who you ask.',
};

export const FACTIONS: Faction[] = FACTION_ORDER.map(name => ({
  name,
  desc: FACTION_DESCS[name] ?? '',
  color: FACTION_COLORS[name] ?? '#9e9c94',
}));
