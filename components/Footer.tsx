export default function Footer() {
  return (
    <footer className="border-t border-ink bg-ink text-paper">
      <div className="mx-auto max-w-screen-2xl px-5 pt-16 pb-8 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <div>
            <p className="font-display text-[clamp(3rem,9vw,7rem)] leading-none font-medium italic">
              Ladylike
            </p>
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-paper/55">
              A dress rental atelier. Gowns by independent houses, measured
              honestly, rented by the night, returned without guilt.
            </p>
          </div>

          <div className="flex gap-14 font-spec text-[11px] tracking-[0.16em] uppercase">
            <ul className="flex flex-col gap-3">
              <li className="text-paper/40">Visit</li>
              <li>
                <a href="#collection" className="link-draw">
                  Collection
                </a>
              </li>
              <li>
                <a href="#fit-room" className="link-draw">
                  Fit room
                </a>
              </li>
              <li>
                <a href="#how" className="link-draw">
                  The service
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li className="text-paper/40">Write</li>
              <li>
                <a href="mailto:atelier@ladylike.fashion" className="link-draw">
                  atelier@ladylike.fashion
                </a>
              </li>
              <li>
                <a href="#" className="link-draw">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="link-draw">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="stitch-h mt-14 text-paper/30" />

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 font-spec text-[10px] tracking-[0.18em] text-paper/40 uppercase">
          <p>© MMXXVI Ladylike Fashion — all gowns insured</p>
          <p className="flex items-center gap-3">
            <span className="tailor-cross" />
            Drafted in the atelier
          </p>
        </div>
      </div>
    </footer>
  );
}
