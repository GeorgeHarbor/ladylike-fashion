import type { Dress } from "@/lib/dresses";
import DressSketch from "./DressSketch";

export default function DressCard({ dress }: { dress: Dress }) {
  return (
    <article className="dress-card group relative flex h-full flex-col border border-ink/30 bg-paper-deep/70 transition-colors duration-300 hover:border-ink">
      <div className="flex items-center justify-between border-b border-ink/20 px-4 py-2.5 font-spec text-[10px] tracking-[0.18em] text-ink-soft uppercase">
        <span>{dress.no}</span>
        <span>{dress.house}</span>
      </div>

      <div
        className="paper-grid relative flex items-center justify-center px-8 py-6"
        style={{
          backgroundColor: `color-mix(in srgb, ${dress.color} 7%, transparent)`,
        }}
      >
        <DressSketch
          silhouette={dress.silhouette}
          className="sketch h-56 text-ink/85"
        />
        <span
          className="absolute top-3 right-3 size-4 rounded-full border border-ink/40"
          style={{ backgroundColor: dress.color }}
          title={dress.colorName}
        />
        <span className="pointer-events-none absolute bottom-3 left-3 font-spec text-[9px] tracking-[0.16em] text-ink-soft uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {dress.colorName} — {dress.fabric}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 border-t border-ink/20 px-4 pt-3 pb-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-2xl font-medium italic">
            {dress.name}
          </h3>
          <p className="font-spec text-[11px] whitespace-nowrap text-oxblood">
            €{dress.pricePerNight}{" "}
            <span className="text-ink-soft">/ night</span>
          </p>
        </div>
        <p className="text-[13px] leading-snug text-ink-soft">{dress.blurb}</p>
        <div className="mt-auto flex items-center justify-between pt-2 font-spec text-[10px] tracking-[0.14em] text-ink-soft uppercase">
          <span>{dress.silhouetteLabel}</span>
          <span>
            {dress.sizes[0].replace("FR", "FR ")}–
            {dress.sizes[dress.sizes.length - 1].replace("FR", "")}
          </span>
        </div>
      </div>
    </article>
  );
}
