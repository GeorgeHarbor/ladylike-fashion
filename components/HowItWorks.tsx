import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Measure",
    body: "Bust, waist, hips — three numbers, one borrowed tape measure. Our fit room does the rest, against the true cut of every gown.",
    note: "takes 4 minutes",
  },
  {
    n: "02",
    title: "Match",
    body: "We show you only what will fit, with an honest word on where it runs snug or easy. No size roulette, no hopeful ordering.",
    note: "to the centimetre",
  },
  {
    n: "03",
    title: "Wear & return",
    body: "Couriered pressed and insured, yours for four nights. Drop it in the box that it came in — cleaning is our problem, gladly.",
    note: "four nights, all in",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-screen-2xl px-5 py-20 sm:px-8 lg:py-28">
      <Reveal className="mb-14">
        <p className="mb-3 flex items-center gap-3 font-spec text-[11px] tracking-[0.24em] text-oxblood uppercase">
          <span className="tailor-cross" />
          The service
        </p>
        <h2 className="font-display text-5xl font-medium tracking-tight sm:text-7xl">
          Cut, <span className="italic text-oxblood">not luck.</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {STEPS.map((step, i) => (
          <Reveal
            key={step.n}
            delay={i * 0.12}
            className={`relative px-0 py-8 md:px-10 md:py-2 ${
              i > 0 ? "md:border-l-0" : ""
            } ${i === 0 ? "md:pl-0" : ""} ${i === 2 ? "md:pr-0" : ""}`}
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
