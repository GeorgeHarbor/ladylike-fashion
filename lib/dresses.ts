export type Silhouette =
  | "slip"
  | "column"
  | "aline"
  | "ballgown"
  | "mermaid"
  | "empire"
  | "wrap"
  | "tea";

export type Stretch = "rigid" | "low" | "high";

export type SizeLabel = "FR34" | "FR36" | "FR38" | "FR40" | "FR42" | "FR44";

export interface Dress {
  id: string;
  no: string;
  name: string;
  house: string;
  silhouette: Silhouette;
  silhouetteLabel: string;
  fabric: string;
  color: string;
  colorName: string;
  stretch: Stretch;
  sizes: SizeLabel[];
  pricePerNight: number;
  retail: number;
  blurb: string;
}

export const SILHOUETTE_LABELS: Record<Silhouette, string> = {
  slip: "Bias-cut slip",
  column: "Column",
  aline: "A-line",
  ballgown: "Corseted ballgown",
  mermaid: "Mermaid",
  empire: "Empire line",
  wrap: "Wrap",
  tea: "Tea length",
};

export const DRESSES: Dress[] = [
  {
    id: "la-valse",
    no: "Nº 01",
    name: "La Valse",
    house: "Maison Vireo",
    silhouette: "slip",
    silhouetteLabel: SILHOUETTE_LABELS.slip,
    fabric: "Silk charmeuse, cut on the bias",
    color: "#722030",
    colorName: "Oxblood",
    stretch: "low",
    sizes: ["FR34", "FR36", "FR38", "FR40", "FR42"],
    pricePerNight: 68,
    retail: 1480,
    blurb: "Pours over the hips and forgives almost everything below the waist.",
  },
  {
    id: "hepburn",
    no: "Nº 02",
    name: "Hepburn",
    house: "Atelier Lune",
    silhouette: "column",
    silhouetteLabel: SILHOUETTE_LABELS.column,
    fabric: "Double crepe, boat neck",
    color: "#241b12",
    colorName: "Ink",
    stretch: "rigid",
    sizes: ["FR34", "FR36", "FR38", "FR40"],
    pricePerNight: 74,
    retail: 1690,
    blurb: "An exacting column. When it fits, nothing in the room fits better.",
  },
  {
    id: "gilded-hour",
    no: "Nº 03",
    name: "Gilded Hour",
    house: "Roussel Paris",
    silhouette: "ballgown",
    silhouetteLabel: SILHOUETTE_LABELS.ballgown,
    fabric: "Duchesse satin, boned bodice",
    color: "#ad8a56",
    colorName: "Antique gold",
    stretch: "rigid",
    sizes: ["FR36", "FR38", "FR40", "FR42", "FR44"],
    pricePerNight: 120,
    retail: 3900,
    blurb: "A strict corset above, a ballroom below. The waist must be honest.",
  },
  {
    id: "solstice",
    no: "Nº 04",
    name: "Solstice",
    house: "Casa di Seta",
    silhouette: "empire",
    silhouetteLabel: SILHOUETTE_LABELS.empire,
    fabric: "Silk chiffon, gathered underbust",
    color: "#9a7b9f",
    colorName: "Wisteria",
    stretch: "low",
    sizes: ["FR34", "FR36", "FR38", "FR40", "FR42", "FR44"],
    pricePerNight: 58,
    retail: 1150,
    blurb: "Fitted only at the bust — the rest is weather. Kindest dress we keep.",
  },
  {
    id: "vermeer",
    no: "Nº 05",
    name: "Vermeer",
    house: "Atelier Lune",
    silhouette: "aline",
    silhouetteLabel: SILHOUETTE_LABELS.aline,
    fabric: "Bonded wool-silk, structured skirt",
    color: "#27425c",
    colorName: "Delft blue",
    stretch: "rigid",
    sizes: ["FR34", "FR36", "FR38", "FR40", "FR42"],
    pricePerNight: 82,
    retail: 2100,
    blurb: "Painterly and architectural. The skirt never asks about your hips.",
  },
  {
    id: "night-bloom",
    no: "Nº 06",
    name: "Night Bloom",
    house: "Maison Vireo",
    silhouette: "mermaid",
    silhouetteLabel: SILHOUETTE_LABELS.mermaid,
    fabric: "Stretch cady, fishtail hem",
    color: "#3b2231",
    colorName: "Black orchid",
    stretch: "high",
    sizes: ["FR34", "FR36", "FR38", "FR40", "FR42", "FR44"],
    pricePerNight: 96,
    retail: 2450,
    blurb: "Close from bust to knee, then it blooms. Stretch cady keeps it merciful.",
  },
  {
    id: "letter-to-jane",
    no: "Nº 07",
    name: "Letter to Jane",
    house: "Hartwood & Daughters",
    silhouette: "wrap",
    silhouetteLabel: SILHOUETTE_LABELS.wrap,
    fabric: "Washed silk twill, true wrap",
    color: "#5c5236",
    colorName: "Olive ink",
    stretch: "high",
    sizes: ["FR34", "FR36", "FR38", "FR40", "FR42", "FR44"],
    pricePerNight: 54,
    retail: 980,
    blurb: "A true wrap ties to you, not the other way round. Travels beautifully.",
  },
  {
    id: "tuileries",
    no: "Nº 08",
    name: "Tuileries",
    house: "Roussel Paris",
    silhouette: "tea",
    silhouetteLabel: SILHOUETTE_LABELS.tea,
    fabric: "Cotton faille, full tea-length skirt",
    color: "#b04a3a",
    colorName: "Garden brick",
    stretch: "low",
    sizes: ["FR34", "FR36", "FR38", "FR40", "FR42"],
    pricePerNight: 49,
    retail: 760,
    blurb: "Garden-party correct. Swings at the calf, generous through the skirt.",
  },
  {
    id: "oyster",
    no: "Nº 09",
    name: "Oyster",
    house: "Casa di Seta",
    silhouette: "slip",
    silhouetteLabel: SILHOUETTE_LABELS.slip,
    fabric: "Pearl satin, cowl neck",
    color: "#c9b8a3",
    colorName: "Pearl",
    stretch: "low",
    sizes: ["FR34", "FR36", "FR38", "FR40"],
    pricePerNight: 62,
    retail: 1290,
    blurb: "Candlelight in dress form. Bias drape, shadows do the tailoring.",
  },
  {
    id: "cigarette",
    no: "Nº 10",
    name: "Cigarette",
    house: "Hartwood & Daughters",
    silhouette: "column",
    silhouetteLabel: SILHOUETTE_LABELS.column,
    fabric: "Stretch crepe, ankle slit",
    color: "#4a4440",
    colorName: "Smoke",
    stretch: "high",
    sizes: ["FR34", "FR36", "FR38", "FR40", "FR42", "FR44"],
    pricePerNight: 66,
    retail: 1340,
    blurb: "The Hepburn's easier sister — same line, with give where you want it.",
  },
  {
    id: "sable",
    no: "Nº 11",
    name: "Sablé",
    house: "Maison Vireo",
    silhouette: "tea",
    silhouetteLabel: SILHOUETTE_LABELS.tea,
    fabric: "Smocked silk-blend, shirred bodice",
    color: "#d8a8a0",
    colorName: "Blush sand",
    stretch: "high",
    sizes: ["FR34", "FR36", "FR38", "FR40", "FR42", "FR44"],
    pricePerNight: 45,
    retail: 690,
    blurb: "Shirring from bust to waist. Fits Tuesday-you and Saturday-you alike.",
  },
  {
    id: "comete",
    no: "Nº 12",
    name: "Comète",
    house: "Roussel Paris",
    silhouette: "mermaid",
    silhouetteLabel: SILHOUETTE_LABELS.mermaid,
    fabric: "Liquid sequin on rigid net",
    color: "#6e7d6a",
    colorName: "Vermouth silver",
    stretch: "rigid",
    sizes: ["FR36", "FR38", "FR40"],
    pricePerNight: 110,
    retail: 3200,
    blurb: "Sequins on net have no mercy and no equal. Measure twice.",
  },
];
