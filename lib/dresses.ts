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
  slip: "Slip kosog kroja",
  column: "Kolona",
  aline: "A-linija",
  ballgown: "Balska s korsetom",
  mermaid: "Sirena",
  empire: "Empir linija",
  wrap: "Na preklop",
  tea: "Midi krug",
};

export const DRESSES: Dress[] = [
  {
    id: "la-valse",
    no: "Nº 01",
    name: "La Valse",
    house: "Maison Vireo",
    silhouette: "slip",
    silhouetteLabel: SILHOUETTE_LABELS.slip,
    fabric: "Svileni šarmez, kosi kroj",
    color: "#722030",
    colorName: "Bordo",
    stretch: "low",
    sizes: ["FR34", "FR36", "FR38", "FR40", "FR42"],
    pricePerNight: 68,
    retail: 1480,
    blurb: "Sliva se niz bokove i prašta gotovo sve ispod struka.",
  },
  {
    id: "hepburn",
    no: "Nº 02",
    name: "Hepburn",
    house: "Atelier Lune",
    silhouette: "column",
    silhouetteLabel: SILHOUETTE_LABELS.column,
    fabric: "Dupli krep, izrez čamac",
    color: "#241b12",
    colorName: "Mastilo",
    stretch: "rigid",
    sizes: ["FR34", "FR36", "FR38", "FR40"],
    pricePerNight: 74,
    retail: 1690,
    blurb: "Stroga kolona. Kad stane, ništa u prostoriji ne stoji bolje.",
  },
  {
    id: "gilded-hour",
    no: "Nº 03",
    name: "Gilded Hour",
    house: "Roussel Paris",
    silhouette: "ballgown",
    silhouetteLabel: SILHOUETTE_LABELS.ballgown,
    fabric: "Saten dišes, korsetni gornji deo",
    color: "#ad8a56",
    colorName: "Staro zlato",
    stretch: "rigid",
    sizes: ["FR36", "FR38", "FR40", "FR42", "FR44"],
    pricePerNight: 120,
    retail: 3900,
    blurb: "Strog korset gore, balska dvorana dole. Struk mora biti iskren.",
  },
  {
    id: "solstice",
    no: "Nº 04",
    name: "Solstice",
    house: "Casa di Seta",
    silhouette: "empire",
    silhouetteLabel: SILHOUETTE_LABELS.empire,
    fabric: "Svileni šifon, nabran ispod grudi",
    color: "#9a7b9f",
    colorName: "Glicinija",
    stretch: "low",
    sizes: ["FR34", "FR36", "FR38", "FR40", "FR42", "FR44"],
    pricePerNight: 58,
    retail: 1150,
    blurb: "Pripijena samo na grudima — ostalo je vetar. Najblaža haljina koju čuvamo.",
  },
  {
    id: "vermeer",
    no: "Nº 05",
    name: "Vermeer",
    house: "Atelier Lune",
    silhouette: "aline",
    silhouetteLabel: SILHOUETTE_LABELS.aline,
    fabric: "Vuna i svila, strukturirana suknja",
    color: "#27425c",
    colorName: "Delft plava",
    stretch: "rigid",
    sizes: ["FR34", "FR36", "FR38", "FR40", "FR42"],
    pricePerNight: 82,
    retail: 2100,
    blurb: "Slikarska i arhitektonska. Suknja nikada ne pita za bokove.",
  },
  {
    id: "night-bloom",
    no: "Nº 06",
    name: "Night Bloom",
    house: "Maison Vireo",
    silhouette: "mermaid",
    silhouetteLabel: SILHOUETTE_LABELS.mermaid,
    fabric: "Elastični kadi, riblji rep",
    color: "#3b2231",
    colorName: "Crna orhideja",
    stretch: "high",
    sizes: ["FR34", "FR36", "FR38", "FR40", "FR42", "FR44"],
    pricePerNight: 96,
    retail: 2450,
    blurb: "Uz telo od grudi do kolena, a onda procveta. Elastični kadi je milostiv.",
  },
  {
    id: "letter-to-jane",
    no: "Nº 07",
    name: "Letter to Jane",
    house: "Hartwood & Daughters",
    silhouette: "wrap",
    silhouetteLabel: SILHOUETTE_LABELS.wrap,
    fabric: "Prani svileni kepar, pravi preklop",
    color: "#5c5236",
    colorName: "Maslinasto mastilo",
    stretch: "high",
    sizes: ["FR34", "FR36", "FR38", "FR40", "FR42", "FR44"],
    pricePerNight: 54,
    retail: 980,
    blurb: "Pravi preklop se vezuje po tebi, a ne obrnuto. Divno putuje.",
  },
  {
    id: "tuileries",
    no: "Nº 08",
    name: "Tuileries",
    house: "Roussel Paris",
    silhouette: "tea",
    silhouetteLabel: SILHOUETTE_LABELS.tea,
    fabric: "Pamučni faj, puna midi suknja",
    color: "#b04a3a",
    colorName: "Cigla",
    stretch: "low",
    sizes: ["FR34", "FR36", "FR38", "FR40", "FR42"],
    pricePerNight: 49,
    retail: 760,
    blurb: "Korektna za baštensku svečanost. Njiše se oko lista, velikodušna u suknji.",
  },
  {
    id: "oyster",
    no: "Nº 09",
    name: "Oyster",
    house: "Casa di Seta",
    silhouette: "slip",
    silhouetteLabel: SILHOUETTE_LABELS.slip,
    fabric: "Biserni saten, drapirani izrez",
    color: "#c9b8a3",
    colorName: "Biser",
    stretch: "low",
    sizes: ["FR34", "FR36", "FR38", "FR40"],
    pricePerNight: 62,
    retail: 1290,
    blurb: "Svetlost sveće u obliku haljine. Kosi kroj — senke šiju ostalo.",
  },
  {
    id: "cigarette",
    no: "Nº 10",
    name: "Cigarette",
    house: "Hartwood & Daughters",
    silhouette: "column",
    silhouetteLabel: SILHOUETTE_LABELS.column,
    fabric: "Elastični krep, šlic do članka",
    color: "#4a4440",
    colorName: "Dim",
    stretch: "high",
    sizes: ["FR34", "FR36", "FR38", "FR40", "FR42", "FR44"],
    pricePerNight: 66,
    retail: 1340,
    blurb: "Lakša sestra Hepburn — ista linija, s elastinom tamo gde ti treba.",
  },
  {
    id: "sable",
    no: "Nº 11",
    name: "Sablé",
    house: "Maison Vireo",
    silhouette: "tea",
    silhouetteLabel: SILHOUETTE_LABELS.tea,
    fabric: "Svilena mešavina, smokovani gornji deo",
    color: "#d8a8a0",
    colorName: "Rumeni pesak",
    stretch: "high",
    sizes: ["FR34", "FR36", "FR38", "FR40", "FR42", "FR44"],
    pricePerNight: 45,
    retail: 690,
    blurb: "Smok od grudi do struka. Staje i utorak-tebi i subota-tebi.",
  },
  {
    id: "comete",
    no: "Nº 12",
    name: "Comète",
    house: "Roussel Paris",
    silhouette: "mermaid",
    silhouetteLabel: SILHOUETTE_LABELS.mermaid,
    fabric: "Tečne šljokice na krutoj mrežici",
    color: "#6e7d6a",
    colorName: "Srebro vermuta",
    stretch: "rigid",
    sizes: ["FR36", "FR38", "FR40"],
    pricePerNight: 110,
    retail: 3200,
    blurb: "Šljokice na mrežici nemaju ni milosti ni premca. Meri dvaput.",
  },
];
