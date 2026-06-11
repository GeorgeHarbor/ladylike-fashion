import { DRESSES, type Dress, type SizeLabel, type Silhouette, type Stretch } from "./dresses";

export interface Measurements {
  bust: number;
  waist: number;
  hips: number;
}

export type Zone = "bust" | "waist" | "hips";
export type ZoneFit = "snug" | "true" | "relaxed";

export interface DressMatch {
  dress: Dress;
  size: SizeLabel;
  zones: Record<Zone, ZoneFit>;
  /** Lower is better — 0 means dead-centre of the size range on every zone. */
  score: number;
}

export interface FitResult {
  matches: DressMatch[];
  misses: Dress[];
}

/** Garment size chart in cm: [min, max] body measurement each size is cut for. */
const SIZE_CHART: Record<SizeLabel, Record<Zone, [number, number]>> = {
  FR34: { bust: [78, 84], waist: [58, 64], hips: [84, 90] },
  FR36: { bust: [84, 88], waist: [64, 68], hips: [90, 94] },
  FR38: { bust: [88, 93], waist: [68, 73], hips: [94, 99] },
  FR40: { bust: [93, 98], waist: [73, 79], hips: [99, 104] },
  FR42: { bust: [98, 104], waist: [79, 86], hips: [104, 110] },
  FR44: { bust: [104, 111], waist: [86, 94], hips: [110, 117] },
};

/** Extra cm of give above the range before a zone stops closing at all. */
const STRETCH_GIVE: Record<Stretch, number> = {
  rigid: 1,
  low: 2.5,
  high: 5,
};

/**
 * How much a silhouette cares about each zone.
 * 0 = the cut skims past this zone entirely (an empire waist, an A-line hip).
 * 1 = fully fitted. Used to scale both tolerance and penalty.
 */
const ZONE_WEIGHT: Record<Silhouette, Record<Zone, number>> = {
  slip: { bust: 0.8, waist: 0.4, hips: 0.9 },
  column: { bust: 1, waist: 0.9, hips: 1 },
  aline: { bust: 1, waist: 1, hips: 0.15 },
  ballgown: { bust: 1, waist: 1, hips: 0 },
  mermaid: { bust: 1, waist: 1, hips: 1 },
  empire: { bust: 1, waist: 0.1, hips: 0 },
  wrap: { bust: 0.7, waist: 0.3, hips: 0.5 },
  tea: { bust: 1, waist: 0.9, hips: 0.1 },
};

/** Below the range, how many cm of looseness still reads as wearable. */
const RELAXED_ALLOWANCE = 4;

function fitZone(
  value: number,
  range: [number, number],
  give: number,
  weight: number,
): { fit: ZoneFit; penalty: number } | null {
  if (weight === 0) return { fit: "true", penalty: 0 };

  const [min, max] = range;
  // A forgiving cut effectively widens the size's range.
  const slack = (1 - weight) * 6;
  const lo = min - slack;
  const hi = max + slack;

  if (value >= lo && value <= hi) {
    const mid = (lo + hi) / 2;
    return { fit: "true", penalty: Math.abs(value - mid) * weight };
  }
  if (value > hi && value <= hi + give) {
    return { fit: "snug", penalty: (value - hi) * weight * 3 + 2 };
  }
  if (value < lo && value >= lo - RELAXED_ALLOWANCE) {
    return { fit: "relaxed", penalty: (lo - value) * weight * 2 + 1.5 };
  }
  return null;
}

function bestSizeFor(dress: Dress, m: Measurements): DressMatch | null {
  const give = STRETCH_GIVE[dress.stretch];
  const weights = ZONE_WEIGHT[dress.silhouette];
  let best: DressMatch | null = null;

  for (const size of dress.sizes) {
    const chart = SIZE_CHART[size];
    const zones = {} as Record<Zone, ZoneFit>;
    let score = 0;
    let wearable = true;

    for (const zone of ["bust", "waist", "hips"] as const) {
      const z = fitZone(m[zone], chart[zone], give, weights[zone]);
      if (!z) {
        wearable = false;
        break;
      }
      zones[zone] = z.fit;
      score += z.penalty;
    }

    if (wearable && (!best || score < best.score)) {
      best = { dress, size, zones, score };
    }
  }

  return best;
}

export function findFits(m: Measurements): FitResult {
  const matches: DressMatch[] = [];
  const misses: Dress[] = [];

  for (const dress of DRESSES) {
    const match = bestSizeFor(dress, m);
    if (match) matches.push(match);
    else misses.push(dress);
  }

  matches.sort((a, b) => a.score - b.score);
  return { matches, misses };
}

/** The fitter's one-line read of a figure, from simple ratios. */
export function tailorsNote(m: Measurements): string {
  const { bust, waist, hips } = m;
  if (hips - bust >= 7) {
    return "Hips lead your line — bias slips and A-lines will love you; be careful with rigid mermaids.";
  }
  if (bust - hips >= 5) {
    return "Your line leads from the shoulder — columns and empire cuts will sit beautifully.";
  }
  if (bust - waist >= 21 || hips - waist >= 23) {
    return "A defined waist — corsetry, wraps and full skirts were drafted with you in mind.";
  }
  return "A balanced line — nearly every silhouette in the atelier is yours to argue over.";
}
