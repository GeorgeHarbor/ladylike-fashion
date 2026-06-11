import { DRESSES } from "@/lib/dresses";
import DressCard from "./DressCard";
import Reveal from "./Reveal";

export default function Collection() {
  return (
    <section id="collection" className="mx-auto max-w-screen-2xl px-5 py-20 sm:px-8 lg:py-28">
      <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="mb-3 flex items-center gap-3 font-spec text-[11px] tracking-[0.24em] text-oxblood uppercase">
            <span className="tailor-cross" />
            The rail — FW26
          </p>
          <h2 className="font-display text-5xl font-medium tracking-tight sm:text-7xl">
            Twelve dresses,
            <br />
            <span className="italic text-oxblood">no strangers.</span>
          </h2>
        </div>
        <p className="max-w-xs text-[14px] leading-relaxed text-ink-soft">
          Every gown is sketched, measured and re-measured after each rental.
          What you see on the chart is what arrives in the box.
        </p>
      </Reveal>

      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {DRESSES.map((dress, i) => (
          <Reveal
            as="li"
            key={dress.id}
            delay={(i % 4) * 0.08}
            className={i % 4 === 1 || i % 4 === 3 ? "lg:translate-y-10" : ""}
          >
            <DressCard dress={dress} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
