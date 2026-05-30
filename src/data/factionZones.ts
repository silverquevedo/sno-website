/**
 * GeoJSON faction zone polygons for the SNO megacity map.
 *
 * Coordinate space is centered on a dense urban area (Shinjuku, Tokyo).
 * All real-world labels are hidden via MapLibre style overrides.
 * The underlying street grid provides authentic urban texture.
 *
 * Projection math:
 *   Center: [139.6917, 35.6895]
 *   Bounds: lng 139.6500–139.7350, lat 35.6550–35.7250
 *   SVG 800×450 → lng range 0.0850, lat range 0.0700
 */

export type FactionId =
  | 'The Architecture'
  | 'The Ritual Network'
  | 'The Ghost Layer'
  | 'South Bloc'
  | 'Iron North'
  | 'Forbidden Zone'
  | 'The Velocity'
  | 'Unaligned';

export interface FactionZoneProps {
  faction: FactionId;
  label: string;
  color: string;
  /** Approx operator count (for map label) */
  count: number;
  /** Label anchor coordinates [lng, lat] */
  labelCoord: [number, number];
}

// Faction zone GeoJSON feature collection
export const FACTION_ZONES: GeoJSON.FeatureCollection<GeoJSON.Polygon, FactionZoneProps> = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { faction: 'Iron North', label: 'IRON NORTH', color: '#ff9a5a', count: 2, labelCoord: [139.6925, 35.7210] },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [139.6500, 35.7250], [139.7350, 35.7250], [139.7350, 35.7157],
          [139.7084, 35.7125], [139.6766, 35.7125], [139.6500, 35.7157],
          [139.6500, 35.7250],
        ]],
      },
    },
    {
      type: 'Feature',
      properties: { faction: 'The Architecture', label: 'THE ARCHITECTURE', color: '#00c4ff', count: 3, labelCoord: [139.6925, 35.6970] },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [139.6766, 35.7125], [139.7084, 35.7125], [139.7074, 35.6814],
          [139.6776, 35.6814], [139.6766, 35.7125],
        ]],
      },
    },
    {
      type: 'Feature',
      properties: { faction: 'The Ritual Network', label: 'RITUAL NETWORK', color: '#b87aff', count: 6, labelCoord: [139.6636, 35.6960] },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [139.6500, 35.7157], [139.6766, 35.7125], [139.6776, 35.6814],
          [139.6500, 35.6768], [139.6500, 35.7157],
        ]],
      },
    },
    {
      type: 'Feature',
      properties: { faction: 'The Velocity', label: 'THE VELOCITY', color: '#40e0d0', count: 3, labelCoord: [139.7214, 35.6960] },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [139.7084, 35.7125], [139.7350, 35.7157], [139.7350, 35.6768],
          [139.7074, 35.6814], [139.7084, 35.7125],
        ]],
      },
    },
    {
      type: 'Feature',
      properties: { faction: 'South Bloc', label: 'SOUTH BLOC', color: '#6bdf5a', count: 4, labelCoord: [139.6636, 35.6680] },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [139.6500, 35.6768], [139.6776, 35.6814], [139.6781, 35.6549],
          [139.6500, 35.6549], [139.6500, 35.6768],
        ]],
      },
    },
    {
      type: 'Feature',
      properties: { faction: 'Forbidden Zone', label: 'FORBIDDEN ZONE', color: '#ff6060', count: 3, labelCoord: [139.6925, 35.6680] },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [139.6776, 35.6814], [139.7074, 35.6814], [139.7068, 35.6549],
          [139.6781, 35.6549], [139.6776, 35.6814],
        ]],
      },
    },
    {
      type: 'Feature',
      properties: { faction: 'Unaligned', label: 'UNALIGNED', color: '#c9a84c', count: 2, labelCoord: [139.7209, 35.6680] },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [139.7074, 35.6814], [139.7350, 35.6768], [139.7350, 35.6549],
          [139.7068, 35.6549], [139.7074, 35.6814],
        ]],
      },
    },
  ],
};

/** Ghost Layer: scattered nodes (no territory polygon) */
export const GHOST_NODES: GeoJSON.FeatureCollection<GeoJSON.Point> = {
  type: 'FeatureCollection',
  features: [
    { type: 'Feature', properties: {}, geometry: { type: 'Point', coordinates: [139.6638, 35.6904] } },
    { type: 'Feature', properties: {}, geometry: { type: 'Point', coordinates: [139.7222, 35.7029] } },
    { type: 'Feature', properties: {}, geometry: { type: 'Point', coordinates: [139.6925, 35.7020] } },
    { type: 'Feature', properties: {}, geometry: { type: 'Point', coordinates: [139.6827, 35.6703] } },
    { type: 'Feature', properties: {}, geometry: { type: 'Point', coordinates: [139.7116, 35.6688] } },
  ],
};

// Pre-built label features for MapLibre symbol layer
export const FACTION_LABELS: GeoJSON.FeatureCollection<GeoJSON.Point, FactionZoneProps> = {
  type: 'FeatureCollection',
  features: FACTION_ZONES.features.map(f => ({
    type: 'Feature' as const,
    properties: f.properties,
    geometry: {
      type: 'Point' as const,
      coordinates: f.properties.labelCoord,
    },
  })),
};
