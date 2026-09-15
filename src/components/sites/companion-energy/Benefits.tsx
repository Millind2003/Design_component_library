import { img } from "./assets";

const benefits = [
  {
    icon: img.piggyBank,
    title: "Lower energy costs",
    body: "Reduce energy costs by 10–30%, continuously. Across commodity and non-commodity charges.",
    visual: img.card1,
  },
  {
    icon: img.ruler,
    title: "Less manual work",
    body: "Reduce manual effort by 50–80%. No extra headcount needed as complexity grows.",
    visual: img.card2,
  },
  {
    icon: img.cube,
    title: "New revenue streams",
    body: "Monetize asset flexibility across multiple energy markets.",
    visual: img.card3,
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="px-6 pb-24 sm:pb-32">
      <div className="mx-auto max-w-[1200px]">
        <p className="ce-eyebrow">Benefits</p>
        <h2 className="ce-display mt-4 max-w-2xl text-[32px] text-[var(--ce-black)] sm:text-[44px]">
          A single platform to turn energy into your competitive edge
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-[var(--ce-offwhite)]"
            >
              <div className="overflow-hidden">
                <img src={b.visual} alt={b.title} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              </div>
              <div className="p-7">
                <img src={b.icon} alt="" className="h-7 w-7" />
                <h3 className="ce-display mt-4 text-xl text-[var(--ce-black)]">{b.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--ce-muted)]">{b.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
