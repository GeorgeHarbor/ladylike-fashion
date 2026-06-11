"use client";

import { useMemo, useState } from "react";
import { findFits, tailorsNote, type Measurements, type Zone, type ZoneFit } from "@/lib/fit";
import DressSketch from "./DressSketch";

const SLIDERS: {
  zone: Zone;
  label: string;
  hint: string;
  min: number;
  max: number;
}[] = [
  { zone: "bust", label: "Grudi", hint: "najpunija tačka, pantljika ravno", min: 75, max: 115 },
  { zone: "waist", label: "Struk", hint: "najuža tačka, izdahni", min: 55, max: 100 },
  { zone: "hips", label: "Bokovi", hint: "najšira tačka, stopala spojena", min: 80, max: 125 },
];

const ZONE_LABEL: Record<Zone, string> = {
  bust: "grudi",
  waist: "struk",
  hips: "bokovi",
};

const ZONE_FIT_LABEL: Record<ZoneFit, string> = {
  snug: "usko",
  true: "tačno",
  relaxed: "komotno",
};

function FitChip({ zone, fit }: { zone: Zone; fit: ZoneFit }) {
  return (
    <span
      className={`border px-1.5 py-0.5 font-spec text-[9px] tracking-[0.12em] uppercase ${
        fit === "true"
          ? "border-ink bg-ink text-paper"
          : fit === "snug"
            ? "border-oxblood text-oxblood"
            : "border-ink/40 text-ink-soft"
      }`}
    >
      {ZONE_LABEL[zone]} · {ZONE_FIT_LABEL[fit]}
    </span>
  );
}

export default function FitFinder() {
  const [m, setM] = useState<Measurements>({ bust: 90, waist: 70, hips: 98 });
  const { matches, misses } = useMemo(() => findFits(m), [m]);
  const note = useMemo(() => tailorsNote(m), [m]);

  const set = (zone: Zone, value: number) =>
    setM((prev) => ({ ...prev, [zone]: value }));

  return (
    <section
      id="fit-room"
      className="border-y border-ink bg-ink text-paper"
    >
      <div className="mx-auto max-w-screen-2xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 flex items-center gap-3 font-spec text-[11px] tracking-[0.24em] text-blush uppercase">
              <span className="tailor-cross" />
              Probna soba
            </p>
            <h2 className="font-display text-5xl font-medium tracking-tight sm:text-7xl">
              Tri broja,
              <br />
              <span className="italic text-blush">nula nagađanja.</span>
            </h2>
          </div>
          <p className="max-w-xs text-[14px] leading-relaxed text-paper/65">
            Meri se u centimetrima, preko lagane odeće. Upoređujemo te sa
            stvarnim krojem svake haljine — njenom tkaninom, elastinom,
            milošću.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-x-10 gap-y-14">
          {/* ---- Measurement panel ---- */}
          <div className="col-span-12 lg:col-span-5">
            <div className="border border-paper/30 bg-paper p-6 text-ink shadow-[8px_8px_0_rgba(216,168,160,0.35)] sm:p-8">
              <p className="mb-8 flex items-center justify-between font-spec text-[10px] tracking-[0.2em] text-ink-soft uppercase">
                <span>Merna karta klijentkinje</span>
                <span className="text-oxblood">cm</span>
              </p>

              <div className="flex flex-col gap-9">
                {SLIDERS.map(({ zone, label, hint, min, max }) => (
                  <div key={zone}>
                    <div className="mb-1 flex items-baseline justify-between">
                      <label
                        htmlFor={`slider-${zone}`}
                        className="font-display text-2xl font-medium italic"
                      >
                        {label}
                      </label>
                      <span className="font-spec text-xl text-oxblood tabular-nums">
                        {m[zone]}
                        <span className="ml-1 text-[11px] text-ink-soft">cm</span>
                      </span>
                    </div>
                    <input
                      id={`slider-${zone}`}
                      type="range"
                      min={min}
                      max={max}
                      step={1}
                      value={m[zone]}
                      onChange={(e) => set(zone, Number(e.target.value))}
                      className="tape-slider"
                      aria-label={`${label} u centimetrima`}
                    />
                    <p className="mt-1 font-spec text-[10px] tracking-[0.12em] text-ink-soft uppercase">
                      {hint}
                    </p>
                  </div>
                ))}
              </div>

              <div className="stitch-h mt-9 text-ink/40" />
              <p className="mt-5 text-[13px] leading-relaxed text-ink-soft">
                <span className="font-spec text-[10px] tracking-[0.18em] text-oxblood uppercase">
                  Beleška krojačice —{" "}
                </span>
                {note}
              </p>
            </div>
          </div>

          {/* ---- Results ---- */}
          <div className="col-span-12 lg:col-span-7">
            <div className="mb-6 flex items-baseline justify-between border-b border-paper/25 pb-3">
              <p className="font-display text-2xl italic">
                {matches.length === 0
                  ? "Na štenderu ništa — još."
                  : `Staće ti ${matches.length} od ${matches.length + misses.length} haljina.`}
              </p>
              <p className="hidden font-spec text-[10px] tracking-[0.18em] text-paper/55 uppercase sm:block">
                poređano po bliskosti kroja
              </p>
            </div>

            {matches.length === 0 ? (
              <p className="max-w-md text-[14px] leading-relaxed text-paper/65">
                Ove mere su van našeg trenutnog asortimana veličina. Piši
                ateljeu — prepravke i šivenje po meri su nam omiljeni zimski
                posao.
              </p>
            ) : (
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {matches.map(({ dress, size, zones }, i) => (
                  <li
                    key={dress.id}
                    className="group flex gap-4 border border-paper/25 bg-paper/[0.04] p-4 transition-colors duration-300 hover:border-blush hover:bg-paper/[0.08]"
                  >
                    <div className="w-16 shrink-0">
                      <DressSketch
                        silhouette={dress.silhouette}
                        className="w-full text-paper/80 transition-colors duration-300 group-hover:text-blush"
                        strokeWidth={3}
                      />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="truncate font-display text-xl font-medium italic">
                          {dress.name}
                        </h3>
                        <span className="font-spec text-[10px] text-paper/55">
                          €{dress.pricePerNight}/noć
                        </span>
                      </div>
                      <p className="font-spec text-[10px] tracking-[0.16em] text-blush uppercase">
                        {i === 0 && "Najbolji kroj — "}
                        Vel. {size.replace("FR", "FR ")} · {dress.silhouetteLabel}
                      </p>
                      <div className="mt-1 flex flex-wrap gap-1.5">
                        {(Object.keys(zones) as Zone[]).map((zone) => (
                          <FitChip key={zone} zone={zone} fit={zones[zone]} />
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {misses.length > 0 && matches.length > 0 && (
              <p className="mt-6 font-spec text-[10px] leading-relaxed tracking-[0.14em] text-paper/45 uppercase">
                Nisu u tvojim merama:{" "}
                {misses.map((d) => d.name).join(" · ")} — pitaj atelje za
                prepravku.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
