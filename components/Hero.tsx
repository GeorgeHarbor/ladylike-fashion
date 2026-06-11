import DressSketch from "./DressSketch";

function Annotation({
  className,
  delay,
  children,
}: {
  className?: string;
  delay: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`hero-rise pointer-events-none absolute hidden items-center gap-2 font-spec text-[10px] tracking-[0.16em] text-ink-soft uppercase lg:flex ${className}`}
      style={{ "--d": delay } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-12 gap-y-10 px-5 pb-20 sm:px-8 lg:pb-28">
        {/* ---- Type block ---- */}
        <div className="relative z-10 col-span-12 lg:col-span-8">
          <p
            className="hero-rise mb-6 flex items-center gap-3 font-spec text-[11px] tracking-[0.24em] text-oxblood uppercase"
            style={{ "--d": "0.05s" } as React.CSSProperties}
          >
            <span className="tailor-cross" />
            Couture rental, fitted to the centimetre
          </p>

          <h1 className="font-display leading-[0.92] font-medium tracking-tight">
            <span
              className="hero-rise block text-[clamp(2.9rem,6.9vw,7.5rem)] lg:whitespace-nowrap"
              style={{ "--d": "0.15s" } as React.CSSProperties}
            >
              Own the night,
            </span>
            <span
              className="hero-rise block text-[clamp(2.9rem,6.9vw,7.5rem)] italic text-oxblood lg:whitespace-nowrap"
              style={{ "--d": "0.3s" } as React.CSSProperties}
            >
              return the dress.
            </span>
          </h1>

          <div
            className="hero-rule mt-10 h-px w-full max-w-xl bg-ink/40"
            style={{ "--d": "0.55s" } as React.CSSProperties}
          />

          <div
            className="hero-rise mt-8 flex max-w-xl flex-col gap-8 sm:flex-row sm:items-end"
            style={{ "--d": "0.65s" } as React.CSSProperties}
          >
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-soft">
              Gowns from independent ateliers, rented by the night. Give us
              three measurements and the fit room will tell you — honestly —
              which dresses will love you back.
            </p>
            <a
              href="#fit-room"
              className="group inline-flex w-fit items-center gap-3 border border-ink bg-ink px-6 py-3.5 font-spec text-[11px] tracking-[0.2em] text-paper uppercase shadow-[4px_4px_0_rgba(114,32,48,0.9)] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_rgba(114,32,48,0.9)]"
            >
              Enter the fit room
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* ---- Sketch block ---- */}
        <div className="relative col-span-12 min-h-[420px] lg:col-span-4">
          <div
            className="hero-rise absolute top-6 right-2 w-[58%] max-w-[270px] rotate-[4deg] border border-ink/25 bg-paper-deep p-5 shadow-[8px_10px_0_rgba(36,27,18,0.08)] sm:right-14 lg:right-4"
            style={{ "--d": "0.5s" } as React.CSSProperties}
          >
            <p className="mb-1 font-spec text-[9px] tracking-[0.2em] text-ink-soft uppercase">
              Nº 03 — Gilded Hour
            </p>
            <DressSketch silhouette="ballgown" className="w-full text-ink/65" />
          </div>

          <div
            className="hero-rise absolute top-20 left-2 w-[62%] max-w-[290px] -rotate-[3deg] border border-ink/40 bg-paper p-5 shadow-[10px_12px_0_rgba(114,32,48,0.12)] sm:left-16 lg:left-0"
            style={{ "--d": "0.4s" } as React.CSSProperties}
          >
            <div className="mb-2 flex items-center justify-between font-spec text-[9px] tracking-[0.2em] text-ink-soft uppercase">
              <span>Nº 01 — La Valse</span>
              <span className="text-oxblood">Bias cut</span>
            </div>
            <DressSketch silhouette="slip" className="w-full text-ink" />
            <div className="stitch-h mt-3 text-ink/50" />
            <p className="mt-2 font-spec text-[9px] tracking-[0.14em] text-ink-soft">
              SILK CHARMEUSE — FR34–42
            </p>
          </div>

          <Annotation className="top-2 left-[8%]" delay="0.9s">
            <span>grain line</span>
            <span className="block h-px w-14 bg-current" />
          </Annotation>
          <Annotation className="bottom-10 right-[4%]" delay="1.05s">
            <span className="block h-px w-10 bg-current" />
            <span>hem 302</span>
          </Annotation>
          <Annotation className="top-[46%] right-0" delay="1.2s">
            <span className="tailor-cross" />
            <span>waist 70</span>
          </Annotation>
        </div>
      </div>
    </section>
  );
}
