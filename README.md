# Design Component Library

A clean, standalone codebase and showcase containing modern, production-ready frontend components extracted and organized for creating new websites.

---

## ⚡ Quick Start

To preview and interact with all the components:

```bash
# Install dependencies (if not already installed)
npm install

# Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎨 Component Collections & Previews

| Collection | Preview Route | Key Components |
| :--- | :--- | :--- |
| **Companion Energy** | `/` | Hero, Navbar, Platform Showcase, Benefits, Testimonials, Automation, How It Works, Final CTA, Footer |
| **Clay** | `/clay` | Hero, Prompt Bar, Flow Diagrams, Feature Grid, Logo Wall, Closing CTA, Primitives |
| **Clay for Marketing** | `/clay/clay-for-marketing` | Persona Switcher (dropdown), Two-tone Hero, Hover-Testimonial Logo Wall, Feature Cards, Alternating Video Bands, Case-Study Tabs |
| **Sculpt (Conference)** | `/sculpt` | Video Hero + Animated Wordmark, Stacked Colour Sections, Speaker Marquee Rails, Filterable Agenda + Dialogs, Ticket Card, FAQ Accordion, Sponsor Wall, Live Countdown |
| **Minerva AI** | `/minerva` | Hero, Terminal / Code Preview, Autonomous Agent Cards, Context Engine, Stories Slider, Security, Footer |
| **Pallet** | `/pallet` | Hero, Animated Reveal Sections, Badge Grids, Community CTA |
| **Planhat** | `/planhat` | SaaS Hero, Feature Showcase Rows, Newsletter Signup Form, Enterprise CTA |
| **LearnLab (Gamification)** | `/learn` | Duolingo-style Sidebar, Gamified Stats Bar, Lesson Path with Units, Quiz Engine, Mascot, Right Rail Widgets |

---

## 📂 Project Structure

```
D:\Design_component_library/
├── src/
│   ├── app/                    # Next.js routes & showcase pages
│   │   ├── (learnlab)/         # Gamified app pages (learn, quests, shop, etc.)
│   │   ├── clay/               # Clay clone page & layout (+ clay-for-marketing)
│   │   ├── minerva/            # Minerva page & layout
│   │   ├── pallet/             # Pallet page & layout
│   │   ├── planhat/            # Planhat page & layout
│   │   ├── sculpt/             # Sculpt conference page
│   │   ├── globals.css         # OKLCH color tokens, typography & animations
│   │   ├── layout.tsx          # Root font definitions & styling
│   │   └── page.tsx            # Main showcase home (Companion Energy)
│   ├── components/
│   │   ├── sites/              # Modular site-specific component suites
│   │   │   ├── clay/           # 10 Clay components & data
│   │   │   │   └── marketing/  # 7 Clay-for-Marketing components & data
│   │   │   ├── companion-energy/# 12 Companion Energy components
│   │   │   ├── learn-lab/      # 9 Gamification components & icons
│   │   │   ├── minerva/        # 13 Minerva components & utilities
│   │   │   ├── pallet/         # 6 Pallet components & hooks
│   │   │   └── planhat/        # 6 Planhat components & forms
│   │   └── ui/                 # Base UI primitives (button, etc.)
│   └── lib/
│       └── utils.ts            # 'cn' class merging helper
└── public/
    └── sites/                  # High-res images, SVGs, logos, posters & videos
```

---

## 🧩 How to Reuse Components in New Projects

1. **Grab the Component:** Copy the component file (e.g. `src/components/sites/clay/Hero.tsx`) into your new project.
2. **Grab Assets:** If the component references `/sites/<name>/...`, copy the matching assets from `public/sites/<name>/` into your new project's `public/` folder.
3. **Styles & Tokens:** Check `src/app/globals.css` for any required OKLCH color variables or utility classes used by the component.
4. **Utility:** Ensure you have the `cn()` helper from `src/lib/utils.ts`.

---

## 🎛️ Design Tokens by Collection

Each collection namespaces its tokens in `src/app/globals.css` so suites can sit
in one app without colliding:

| Prefix | Collection |
| :--- | :--- |
| `ce-` | Companion Energy |
| `cy-` | Clay (incl. Clay for Marketing) |
| `mv-` | Minerva |
| `ph-` | Planhat |
| `pl-` | Pallet |
| `sc-` | Sculpt |

Sculpt also ships its own utility layer (`.sc-container`, `.sc-h1`…`.sc-h3`,
`.sc-text-*`, `.sc-eyebrow`, `.sc-btn`, `.sc-marquee-y`), so most Sculpt
components only need `globals.css` plus their own file.

### Notes on the newer suites

- **Clay for Marketing** reuses Clay's `Nav`, `Footer`, `Button` and `Container`.
  `Nav` takes an optional `offsetTop` (for pages that stack a banner above it)
  and `Footer` an optional `primaryCta` — both default to the original
  behaviour, so the existing `/clay` page is unchanged.
- **Sculpt** substitutes the proprietary Roobert family with Plus Jakarta Sans
  and JetBrains Mono, which the Clay suite already loads — it adds no new font
  payload.
- Both suites use Webflow's breakpoints (992 / 768 / 480) via Tailwind
  arbitrary variants rather than the default scale. Note Tailwind v4 compiles
  `max-[N]` to *below* N, so a `max-width: 991px` rule is written `max-[992px]:`.
