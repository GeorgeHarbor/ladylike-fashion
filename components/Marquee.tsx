const ITEMS = [
  "FW26 Collection",
  "Fitted to the centimetre",
  "Four-night rentals",
  "Cleaned, pressed & couriered",
  "Independent ateliers only",
  "Insurance included",
];

export default function Marquee() {
  const row = (ariaHidden: boolean) => (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-8 pr-8"
    >
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center gap-8 whitespace-nowrap">
          <span className="font-display text-lg italic">{item}</span>
          <span className="tailor-cross text-paper/60" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden border-y border-ink bg-oxblood py-3.5 text-paper">
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
