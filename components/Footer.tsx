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
              Atelje za iznajmljivanje haljina. Haljine nezavisnih kuća,
              iskreno izmerene, iznajmljene po noći, vraćene bez griže
              savesti.
            </p>
          </div>

          <div className="flex gap-14 font-spec text-[11px] tracking-[0.16em] uppercase">
            <ul className="flex flex-col gap-3">
              <li className="text-paper/40">Poseti</li>
              <li>
                <a href="#collection" className="link-draw">
                  Kolekcija
                </a>
              </li>
              <li>
                <a href="#fit-room" className="link-draw">
                  Probna soba
                </a>
              </li>
              <li>
                <a href="#how" className="link-draw">
                  Usluga
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li className="text-paper/40">Piši</li>
              <li>
                <a href="mailto:atelje@ladylike.fashion" className="link-draw">
                  atelje@ladylike.fashion
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
          <p>© MMXXVI Ladylike Fashion — sve haljine su osigurane</p>
          <p>Fotografije: Wikimedia Commons (MET, DPLA, Rijksmuseum)</p>
          <p className="flex items-center gap-3">
            <span className="tailor-cross" />
            Nacrtano u ateljeu
          </p>
        </div>
      </div>
    </footer>
  );
}
