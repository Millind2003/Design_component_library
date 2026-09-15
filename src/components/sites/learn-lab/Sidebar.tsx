"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookIcon,
  DumbbellIcon,
  ShopIcon,
  TrophyIcon,
  UserIcon,
  ChestIcon,
} from "./icons";
import { OwlLogo } from "./Mascot";

const nav = [
  { href: "/learn", label: "Learn", Icon: BookIcon, mobile: true },
  { href: "/practice", label: "Practice", Icon: DumbbellIcon, mobile: true },
  { href: "/leagues", label: "Leagues", Icon: TrophyIcon, mobile: true },
  { href: "/quests", label: "Quests", Icon: ChestIcon, mobile: true },
  { href: "/shop", label: "Shop", Icon: ShopIcon, mobile: false },
  { href: "/profile", label: "Profile", Icon: UserIcon, mobile: true },
];

/* Duolingo's selected nav item is the one blue thing in an otherwise green
   app: pale blue fill, mid-blue 2px border, macaw-blue label. */
const ACTIVE =
  "border-[var(--ll-teal-light)] bg-[var(--ll-teal-bg)] text-[var(--ll-teal)]";
const IDLE =
  "border-transparent text-[var(--ll-slate)] hover:bg-[var(--ll-polar)]";

export function Sidebar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      {/* Desktop: fixed left rail */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[88px] flex-col border-r-2 border-[var(--ll-line)] bg-[var(--ll-surface)] px-3 py-6 lg:flex xl:w-[256px] xl:px-4">
        <Link href="/learn" className="mb-8 flex items-center gap-2 px-2">
          <OwlLogo className="h-9 w-9 shrink-0" />
          <span className="hidden text-2xl font-extrabold lowercase tracking-tight text-[var(--ll-primary)] xl:inline">
            duolingo
          </span>
        </Link>

        <nav className="flex flex-1 flex-col gap-1.5">
          {nav.map(({ href, label, Icon }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-3 rounded-xl border-2 px-3 py-3 text-left transition-colors ${
                  active ? ACTIVE : IDLE
                }`}
              >
                <Icon className="h-6 w-6 shrink-0" />
                <span className="hidden text-sm font-extrabold uppercase tracking-wide xl:inline">
                  {label}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile: bottom tab bar — Shop drops out, the rest collapse to icons */}
      <nav className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-around border-t-2 border-[var(--ll-line)] bg-[var(--ll-surface)] py-2 lg:hidden">
        {nav
          .filter((item) => item.mobile)
          .map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              aria-label={label}
              aria-current={isActive(href) ? "page" : undefined}
              className={`rounded-xl border-2 p-3 transition-colors ${
                isActive(href) ? ACTIVE : "border-transparent text-[var(--ll-slate)]"
              }`}
            >
              <Icon className="h-6 w-6" />
            </Link>
          ))}
      </nav>
    </>
  );
}
