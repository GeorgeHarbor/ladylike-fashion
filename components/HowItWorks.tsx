import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Izmeri se",
    body: "Grudi, struk, bokovi — tri broja i jedan pozajmljen krojački metar. Naša probna soba radi ostalo, prema stvarnom kroju svake haljine.",
    note: "traje 4 minuta",
  },
  {
    n: "02",
    title: "Uporedi",
    body: "Pokazujemo ti samo ono što će ti stati, uz iskrenu reč gde je usko, a gde komotno. Bez ruleta veličina, bez poručivanja u nadi.",
    note: "do centimetra",
  },
  {
    n: "03",
    title: "Ponesi i vrati",
    body: "Stiže kurirom, ispeglana i osigurana, tvoja na četiri noći. Vrati je u kutiji u kojoj je došla — čišćenje je naša briga, i to rado.",
    note: "četiri noći, sve uključeno",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-screen-2xl px-5 py-20 sm:px-8 lg:py-28">
      <Reveal className="mb-14">
        <p className="mb-3 flex items-center gap-3 font-spec text-[11px] tracking-[0.24em] text-oxblood uppercase">
          <span className="tailor-cross" />
          Usluga
        </p>
        <h2 className="font-display text-5xl font-medium tracking-tight sm:text-7xl">
          Kroj, <span className="italic text-oxblood">ne sreća.</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {STEPS.map((step, i) => (
          <Reveal
            key={step.n}
            delay={i * 0.12}
            className={`relative px-0 py-8 md:px-10 md:py-2 ${
              i === 0 ? "md:pl-0" : ""
            } ${i === 2 ? "md:pr-0" : ""}`}
          >
            {i > 0 && (
              <span className="stitch-v absolute top-0 left-0 hidden h-full text-ink/40 md:block" />
            )}
            {i > 0 && (
              <span className="stitch-h absolute top-0 left-0 w-full text-ink/40 md:hidden" />
            )}
            <p className="font-display text-7xl font-light text-oxblood/85 italic">
              {step.n}
            </p>
            <h3 className="mt-4 font-display text-3xl font-medium">
              {step.title}
            </h3>
            <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-ink-soft">
              {step.body}
            </p>
            <p className="mt-5 font-spec text-[10px] tracking-[0.2em] text-ink-soft uppercase">
              — {step.note}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
