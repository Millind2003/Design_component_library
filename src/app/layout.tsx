import type { Metadata } from "next";
import {
  Geist_Mono,
  Inter_Tight,
  JetBrains_Mono,
  Manrope,
  Nunito,
  Archivo,
  Inter,
  Plus_Jakarta_Sans,
  Space_Mono,
} from "next/font/google";
import "./globals.css";

// ES Schwarzweiss (proprietary on minerva.io) → Inter Tight, the closest free
// grotesque with a usable 200 weight for the site's large extralight headings.
// Geist Mono is the original's mono face and is available on Google Fonts, so
// the micro-labels are an exact match.
const mvSans = Inter_Tight({
  variable: "--font-mv-sans-brand",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const mvMono = Geist_Mono({
  variable: "--font-mv-mono-brand",
  subsets: ["latin"],
  display: "swap",
});

// Roobert VF (proprietary on clay.com) → Plus Jakarta Sans, the closest free
// variable grotesque — Clay sets weight through the variable axis (575 for h1,
// 500 for h2/h3), so a variable substitute matters. Roobert Mono → JetBrains Mono.
const cySans = Plus_Jakarta_Sans({
  variable: "--font-cy-sans-brand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cyMono = JetBrains_Mono({
  variable: "--font-cy-mono-brand",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

// Geigy LL Duplex Var (proprietary on planhat.com) → Archivo, the closest free
// variable grotesque for the display sizes. Body is Inter, which Planhat itself
// uses; its small uppercase label face (ABC Diatype Medium) maps to Inter 500.
const phDisplay = Archivo({
  variable: "--font-ph-display-brand",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const phSans = Inter({
  variable: "--font-ph-sans-brand",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Feather Bold / din-round (proprietary on Duolingo) → Nunito, the closest
// free rounded geometric sans. Used by the LearnLab screens only.
const round = Nunito({
  variable: "--font-round",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

// Aspekta (proprietary on the original site) → Manrope, the closest free
// geometric sans. Tg Frekuent Mono → Space Mono for the uppercase eyebrow labels.
const sans = Manrope({
  variable: "--font-sans-brand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const mono = Space_Mono({
  variable: "--font-mono-brand",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Companion.energy | Smarter Energy Management for Complex Environments",
  description:
    "Turn energy into your competitive edge. One autonomous energy platform — from data to action.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${round.variable} ${mvSans.variable} ${mvMono.variable} ${cySans.variable} ${cyMono.variable} ${phDisplay.variable} ${phSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
