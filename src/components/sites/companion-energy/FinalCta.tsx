import { img } from "./assets";

export function FinalCta() {
  return (
    <section id="demo" className="px-3 pb-3">
      <div className="relative overflow-hidden rounded-[28px] bg-[var(--ce-hero)] px-6 py-24 text-white sm:px-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 100%, rgba(82,84,210,0.35) 0%, rgba(18,18,18,0) 70%)",
          }}
        />
        <div className="relative mx-auto flex max-w-[1200px] flex-col items-center text-center">
          <p className="ce-eyebrow text-white/45">Let&rsquo;s talk energy</p>
          <h2 className="ce-display mt-4 max-w-2xl text-[32px] text-white sm:text-[48px]">
            Show us your portfolio. We&rsquo;ll show you the value we would unlock.
          </h2>

          <div className="mt-8 flex items-center gap-4">
            <img
              src={img.thomas}
              alt="Thomas Vyncke, co-founder"
              className="h-12 w-12 rounded-full object-cover"
            />
            <p className="text-left text-sm text-white/60">
              Thomas, our co-founder,
              <br />
              can tell you all about it
            </p>
          </div>

          <a
            href="#schedule"
            className="ce-pill mt-8 bg-white px-7 py-3 text-sm font-semibold text-[var(--ce-hero)] hover:bg-white/90"
          >
            Schedule a call
          </a>
        </div>
      </div>
    </section>
  );
}
