import Image from "next/image";
import type { Dress } from "@/lib/dresses";
import DressSketch from "./DressSketch";

export default function DressCard({ dress }: { dress: Dress }) {
  return (
    <article className="dress-card group relative flex h-full flex-col border border-ink/30 bg-paper-deep/70 transition-colors duration-300 hover:border-ink">
      <div className="flex items-center justify-between border-b border-ink/20 px-4 py-2.5 font-spec text-[10px] tracking-[0.18em] text-ink-soft uppercase">
        <span>{dress.no}</span>
        <span>{dress.house}</span>
      </div>

      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={dress.image}
          alt={`${dress.name} — ${dress.silhouetteLabel.toLowerCase()}, ${dress.colorName.toLowerCase()}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {/* Tracing-paper overlay: the atelier sketch slides over the photo */}
        <div className="paper-grid pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 bg-paper/90 p-6 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
          <DressSketch
            silhouette={dress.silhouette}
            className="sketch h-[78%] text-ink/85"
          />
          <p className="font-spec text-[9px] tracking-[0.16em] text-ink-soft uppercase">
            {dress.colorName} — {dress.fabric}
          </p>
        </div>
        <span
          className="absolute top-3 right-3 size-4 rounded-full border border-ink/40"
          style={{ backgroundColor: dress.color }}
          title={dress.colorName}
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 border-t border-ink/20 px-4 pt-3 pb-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-2xl font-medium italic">
            {dress.name}
          </h3>
          <p className="font-spec text-[11px] whitespace-nowrap text-oxblood">
            €{dress.pricePerNight} <span className="text-ink-soft">/ noć</span>
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
