import { img, partners } from "./assets";

export function Hero() {
  return (
    <header
      id="top"
      className="relative w-full overflow-hidden bg-[var(--ce-hero)] text-white"
    >
      {/* soft radial gradient behind the headline */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[640px] opacity-70"
        style={{
          background:
            "radial-gradient(55% 55% at 50% 0%, rgba(82,84,210,0.38) 0%, rgba(18,18,18,0) 70%)",
        }}
      />
      {/* grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `url(${img.gridBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* first screen — headline block, centered, covers the viewport */}
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 pb-16 pt-28 text-center sm:px-10">
        <h1 className="ce-display max-w-4xl text-[44px] leading-[1.03] tracking-[-0.045em] text-white sm:text-[68px] md:text-[80px]">
          The platform for
          <br />
          power pioneers
        </h1>
        <p className="mt-6 text-base text-white/70 sm:text-lg">
          Turn energy into your competitive edge.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#demo"
            className="ce-pill bg-white px-6 py-3 text-sm font-semibold text-[var(--ce-hero)] hover:bg-white/90"
          >
            Get started
          </a>
          <a
            href="#platform"
            className="ce-pill border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            See the platform
          </a>
        </div>
      </div>

      {/* product visual + trusted-by strip, still inside the dark hero */}
      <div className="relative mx-auto -mt-4 flex w-full max-w-[1200px] flex-col items-center px-6 pb-20 sm:px-10">
        <div className="w-full max-w-[1040px]">
          <img
            src={img.heroVisual}
            alt="Companion.energy platform dashboard"
            className="w-full rounded-2xl"
            loading="eager"
          />
        </div>

        <p className="ce-eyebrow mt-16 text-white/45">Trusted by leading enterprises</p>
        <div className="mt-6 flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70">
          {partners.slice(0, 6).map((p) => (
            <img
              key={p.name}
              src={p.src}
              alt={p.name}
              className="h-6 w-auto object-contain brightness-0 invert"
            />
          ))}
        </div>
      </div>
    </header>
  );
}
