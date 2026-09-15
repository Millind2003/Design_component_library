import { img } from "./assets";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[var(--ce-hero)] px-6 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <p className="ce-eyebrow text-white/45">How it works</p>
        <h2 className="ce-display mt-4 max-w-2xl text-[32px] text-white sm:text-[48px]">
          See first. Steer second.
        </h2>
        <p className="mt-5 max-w-xl text-lg text-white/60">
          We turn complex energy data into real-time decisions.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="flex items-center gap-2">
              <img src={img.aperture} alt="" className="h-5 w-5 brightness-0 invert" />
              <span className="ce-eyebrow text-white/45">Prism</span>
            </div>
            <h3 className="ce-display mt-4 text-2xl text-white">Built for transparency.</h3>
            <p className="mt-3 text-white/60">
              Prism models your operational and financial energy data and surfaces where to
              improve.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
              <img src={img.visualTab1} alt="Prism" className="w-full" loading="lazy" />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="flex items-center gap-2">
              <img src={img.windmill} alt="" className="h-5 w-5 brightness-0 invert" />
              <span className="ce-eyebrow text-white/45">Propel</span>
            </div>
            <h3 className="ce-display mt-4 text-2xl text-white">Built for action.</h3>
            <p className="mt-3 text-white/60">
              Propel turns forecasts into autonomous decisions that steer your assets in real
              time.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
              <img src={img.visualTab4} alt="Propel" className="w-full" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#demo"
            className="ce-pill bg-white px-6 py-3 text-sm font-semibold text-[var(--ce-hero)] hover:bg-white/90"
          >
            Discover the platform
          </a>
        </div>
      </div>
    </section>
  );
}
