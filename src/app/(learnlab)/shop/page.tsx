import type { Metadata } from "next";
import { shopSections, type ShopItem } from "@/components/sites/learn-lab/data";
import {
  FlameIcon,
  GemIcon,
  HeartIcon,
  InfinityIcon,
  ShieldIcon,
} from "@/components/sites/learn-lab/icons";
import { PageBody, edgeStyle } from "@/components/sites/learn-lab/ui";

export const metadata: Metadata = {
  title: "Shop — Duolingo",
  description: "Spend gems on power-ups, heart refills, and bundles.",
};

const shopIcon = {
  shield: ShieldIcon,
  heart: HeartIcon,
  infinity: InfinityIcon,
  gem: GemIcon,
  flame: FlameIcon,
};

export default function ShopPage() {
  return (
    <PageBody>
      <div className="mb-6 flex items-center justify-between gap-4 rounded-2xl border-2 border-[var(--ll-line)] bg-[var(--ll-surface)] p-5">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-[var(--ll-ink)]">
            Shop
          </h1>
          <p className="mt-1 text-sm text-[var(--ll-slate)]">
            Power-ups and refills, paid for in gems.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2 rounded-xl bg-[var(--ll-teal)]/12 px-4 py-3">
          <GemIcon className="h-6 w-6 text-[var(--ll-teal)]" />
          <span className="text-lg font-extrabold text-[var(--ll-teal)]">480</span>
        </div>
      </div>

      {shopSections.map((section) => (
        <section key={section.title} className="mb-8 last:mb-0">
          <h2 className="mb-3 text-lg font-extrabold text-[var(--ll-ink)]">
            {section.title}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {section.items.map((item) => (
              <ShopCard key={item.key} item={item} />
            ))}
          </ul>
        </section>
      ))}
    </PageBody>
  );
}

function ShopCard({ item }: { item: ShopItem }) {
  const Icon = shopIcon[item.icon];
  const owned = Boolean(item.owned);

  return (
    <li className="flex flex-col rounded-2xl border-2 border-[var(--ll-line)] bg-[var(--ll-surface)] p-5 text-center">
      <span
        className="mx-auto grid h-16 w-16 place-items-center rounded-2xl text-white"
        style={{ backgroundColor: item.colour, boxShadow: "0 4px 0 0 rgba(0,0,0,.18)" }}
      >
        <Icon className="h-8 w-8" />
      </span>

      <h3 className="mt-3 text-base font-extrabold text-[var(--ll-ink)]">{item.title}</h3>
      <p className="mt-1 flex-1 text-sm text-[var(--ll-slate)]">{item.description}</p>

      <button
        disabled={owned}
        className="ll-3d mt-4 w-full px-4 py-3 text-sm"
        style={edgeStyle(owned ? "var(--ll-locked-dark)" : "var(--ll-primary-dark)", {
          backgroundColor: owned ? "var(--ll-locked)" : "var(--ll-primary)",
          color: "#fff",
        })}
      >
        {owned ? (
          "Full"
        ) : item.price === "free" ? (
          "Try free"
        ) : (
          <span className="inline-flex items-center justify-center gap-1.5">
            <GemIcon className="h-4 w-4" />
            {item.price.toLocaleString()}
          </span>
        )}
      </button>
    </li>
  );
}
