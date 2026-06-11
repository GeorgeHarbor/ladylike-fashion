import Image from "next/image";

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
            Couture za iznajmljivanje — po meri do centimetra
          </p>

          <h1 className="font-display leading-[0.92] font-medium tracking-tight">
            <span
              className="hero-rise block text-[clamp(2.9rem,6.9vw,7.5rem)] lg:whitespace-nowrap"
              style={{ "--d": "0.15s" } as React.CSSProperties}
            >
              Noć je tvoja,
            </span>
            <span
              className="hero-rise block text-[clamp(2.9rem,6.9vw,7.5rem)] italic text-oxblood lg:whitespace-nowrap"
              style={{ "--d": "0.3s" } as React.CSSProperties}
            >
              haljina se vraća.
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
              Večernje haljine nezavisnih ateljea, na iznajmljivanje po noći.
              Daj nam tri mere, a probna soba će ti iskreno reći koje će te
              haljine voleti.
            </p>
            <a
              href="#fit-room"
              className="group inline-flex w-fit items-center gap-3 border border-ink bg-ink px-6 py-3.5 font-spec text-[11px] tracking-[0.2em] text-paper uppercase shadow-[4px_4px_0_rgba(114,32,48,0.9)] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_rgba(114,32,48,0.9)]"
            >
              Uđi u probnu sobu
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* ---- Photo block ---- */}
        <div className="relative col-span-12 min-h-[440px] lg:col-span-4">
          <div
            className="hero-rise absolute top-6 right-2 w-[58%] max-w-[260px] rotate-[4deg] border border-ink/25 bg-paper-deep p-3 shadow-[8px_10px_0_rgba(36,27,18,0.08)] sm:right-14 lg:right-4"
            style={{ "--d": "0.5s" } as React.CSSProperties}
          >
            <p className="mb-2 font-spec text-[9px] tracking-[0.2em] text-ink-soft uppercase">
              Nº 03 — Gilded Hour
            </p>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/dresses/gilded-hour.jpg"
                alt="Balska haljina Gilded Hour od satena dišes"
                fill
                sizes="(max-width: 1024px) 50vw, 20vw"
                className="object-cover"
              />
            </div>
          </div>

          <div
            className="hero-rise absolute top-24 left-2 w-[62%] max-w-[280px] -rotate-[3deg] border border-ink/40 bg-paper p-3 shadow-[10px_12px_0_rgba(114,32,48,0.12)] sm:left-16 lg:left-0"
            style={{ "--d": "0.4s" } as React.CSSProperties}
          >
            <div className="mb-2 flex items-center justify-between font-spec text-[9px] tracking-[0.2em] text-ink-soft uppercase">
              <span>Nº 01 — La Valse</span>
              <span className="text-oxblood">Kosi kroj</span>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/dresses/la-valse.jpg"
                alt="Bordo slip haljina La Valse od svilenog šarmeza"
                fill
                sizes="(max-width: 1024px) 60vw, 22vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="stitch-h mt-3 text-ink/50" />
            <p className="mt-2 font-spec text-[9px] tracking-[0.14em] text-ink-soft">
              SVILENI ŠARMEZ — FR 34–42
            </p>
          </div>

          <Annotation className="top-2 left-[8%]" delay="0.9s">
            <span>pravac niti</span>
            <span className="block h-px w-14 bg-current" />
          </Annotation>
          <Annotation className="bottom-2 right-[4%]" delay="1.05s">
            <span className="block h-px w-10 bg-current" />
            <span>porub 302</span>
          </Annotation>
          <Annotation className="top-[48%] right-0" delay="1.2s">
            <span className="tailor-cross" />
            <span>struk 70</span>
          </Annotation>
        </div>
      </div>
    </section>
  );
}
