const reasons = [
  {
    title: "Enterprise-grade reliability",
    body: "Reliable infrastructure. Cybersecurity by design.",
  },
  {
    title: "Financial truth, not dashboards",
    body: "One integrated truth across operations and finance. Live and forward-looking.",
  },
  {
    title: "Modular and maturity-driven",
    body: "Start with Prism. Add Propel when you're ready. Scale at your pace.",
  },
  {
    title: "Built for hyperscale",
    body: "Thousands of assets per customer. No hardware. No per-meter pricing.",
  },
];

export function WhyCompanion() {
  return (
    <section id="why" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <p className="ce-eyebrow">Why companion</p>
        <h2 className="ce-display mt-4 max-w-2xl text-[32px] text-[var(--ce-black)] sm:text-[48px]">
          Leading enterprises choose Companion.energy
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-3xl border border-black/5 bg-[var(--ce-offwhite)] p-8"
            >
              <h3 className="ce-display text-xl text-[var(--ce-black)]">{r.title}</h3>
              <p className="mt-3 text-[var(--ce-muted)]">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
