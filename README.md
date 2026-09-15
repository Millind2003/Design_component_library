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
│   │   ├── clay/               # Clay clone page & layout
│   │   ├── minerva/            # Minerva page & layout
│   │   ├── pallet/             # Pallet page & layout
│   │   ├── planhat/            # Planhat page & layout
│   │   ├── globals.css         # OKLCH color tokens, typography & animations
│   │   ├── layout.tsx          # Root font definitions & styling
│   │   └── page.tsx            # Main showcase home (Companion Energy)
│   ├── components/
│   │   ├── sites/              # Modular site-specific component suites
│   │   │   ├── clay/           # 10 Clay components & data
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
