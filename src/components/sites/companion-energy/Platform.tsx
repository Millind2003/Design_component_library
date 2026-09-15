import { img } from "./assets";

export function Platform() {
  return (
    <section id="platform" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <p className="ce-eyebrow">Meet companion</p>
        <h2 className="ce-display mt-4 max-w-3xl text-[32px] text-[var(--ce-black)] sm:text-[48px]">
          One energy platform.
          <br />
          Autonomous from data to action.
        </h2>
        <p className="mt-5 max-w-xl text-lg text-[var(--ce-muted)]">
          Spreadsheets got you this far. Autonomy goes further.
        </p>

        {/* big platform visual */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-black/5 bg-[var(--ce-offwhite)]">
          <img
            src={img.products}
            alt="Companion platform overview"
            className="w-full"
            loading="lazy"
          />
        </div>

        {/* See it / Steer it */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <PlatformCard
            eyebrow="See it"
            icon={img.aperture}
            title="See every cent accounted for"
            body="Volume, price: modeled across your portfolio."
            visual={img.visualTab1}
          />
          <PlatformCard
            eyebrow="Steer it"
            icon={img.windmill}
            title="Steer every asset on autopilot"
            body="Cost, flexibility: steered across your assets."
            visual={img.visualTab3}
          />
        </div>
      </div>
    </section>
  );
}

function PlatformCard({
  eyebrow,
  icon,
  title,
  body,
  visual,
}: {
  eyebrow: string;
  icon: string;
  title: string;
  body: string;
  visual: string;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-[var(--ce-offwhite)] p-8">
      <div className="flex items-center gap-2">
        <img src={icon} alt="" className="h-5 w-5" />
        <span className="ce-eyebrow">{eyebrow}</span>
      </div>
      <h3 className="ce-display mt-4 text-2xl text-[var(--ce-black)]">{title}</h3>
      <p className="mt-3 text-[var(--ce-muted)]">{body}</p>
      <div className="mt-8 overflow-hidden rounded-2xl">
        <img src={visual} alt={title} className="w-full" loading="lazy" />
      </div>
    </div>
  );
}
