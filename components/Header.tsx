export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/15 bg-paper/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-6 px-5 py-3 sm:px-8">
        <a href="#top" className="group flex items-baseline gap-3">
          <span className="font-display text-xl font-semibold tracking-[0.18em] uppercase">
            Ladylike
          </span>
          <span className="hidden font-spec text-[10px] tracking-[0.22em] text-ink-soft sm:inline">
            ATELJE I IZNAJMLJIVANJE — EST. MMXXVI
          </span>
        </a>

        <nav className="flex items-center gap-5 sm:gap-8">
          <a
            href="#collection"
            className="link-draw hidden font-spec text-[11px] tracking-[0.18em] uppercase sm:inline"
          >
            Kolekcija
          </a>
          <a
            href="#how"
            className="link-draw hidden font-spec text-[11px] tracking-[0.18em] uppercase md:inline"
          >
            Usluga
          </a>
          <a
            href="#fit-room"
            className="border border-ink bg-oxblood px-4 py-2 font-spec text-[11px] tracking-[0.18em] uppercase text-paper shadow-[3px_3px_0_rgba(36,27,18,0.3)] transition-all duration-200 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_rgba(36,27,18,0.3)]"
          >
            Pronađi svoj kroj
          </a>
        </nav>
      </div>
    </header>
  );
}
