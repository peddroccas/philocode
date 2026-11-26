# Design: Philocode

The locked system. Every Hallmark run reads this first and pages share it. Change it on purpose; the file is the rule.

## System
- Genre: modern-minimal
- Shape of the first page: Feature Stack (/); Bento Grid (/criacao-de-sites), Narrative Workflow (/shopify), Workbench (/sistema-catequese)
- Theme: brand (Philocode, rebranding 2026: monochrome, the anchor, Sora and Inter)
- Axes: light/geometric-sans/neutral · posture: restrained (the ink is the action colour)

## Tokens
`src/app/tokens.css` is the source of truth (Tailwind 4 `@theme static`). The Hallmark roles map onto the project's names:
```css
:root {
  --color-paper: var(--color-canvas) /* #fafafa */;  --color-paper-2: var(--color-well) /* #f4f4f5 */;  --color-paper-3: var(--color-surface) /* #fff */;
  --color-ink: #09090b;  --color-ink-2: var(--color-graphite) /* #18181b */;  --color-muted: #52525b;  --color-rule: var(--color-line) /* #e4e4e7 */;
  --color-accent: var(--color-ink);  --color-accent-ink: var(--color-snow);  --color-focus: var(--color-ink) /* snow on night bands */;
  --font-display: "Sora", Inter, ui-sans-serif, system-ui, sans-serif;  --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;  --font-outlier: var(--font-body);
  --radius-card: 16px;  --radius-pill: 999px;  --rule-hair: 1px;  --shadow-card: none (frames on screenshots only: --shadow-frame);
}
```
Night bands (`--color-night`, `--color-night-2`) open and close every page: the hero, the contact close and the footer. Text on them is snow and mist. The spacing scale, the type scale (`text-display`, `text-display-s`, `text-section`, `text-title`, `text-lead`), the section gaps (56 / 64 / 80px of padding per section at 1440, mixed; reduced at the owner's request) and the container (1440px, 64px gutter) live in `tokens.css`.

## Controls
- Primary: the WhatsApp action, ink fill (snow on night bands) · pill · 52px (44px in the nav)
- Secondary: an underlined link in the body face, same height, never a second filled button beside the primary

## Chrome
- Nav: edge-aligned. The wordmark at the left; Sites, Shopify, Catequese Hub and the WhatsApp action at the right. Every other destination lives in the footer.
- Footer: colophon block. The wordmark, one paragraph with the legal name, the city, the WhatsApp and the e-mail, then the page links.

## Motion
- Character: calm, with one hero moment per page. The headline rises word by word, the construction grid answers the cursor and takes one pass of light, and each hero has its own entrance: the anchor draws on /, the formats sweep in on /criacao-de-sites, the custom Liquid section slides into the theme on /shopify, the real screen settles on /catequese-hub. One reveal per page below the hero (a 16px rise, staggered). No loops. Under reduced motion everything ends at once.

## Exports
`src/app/tokens.css` and `src/app/base.css` (imported in `globals.css`, base in `layer(base)`). Tailwind utilities come from the same names: `bg-canvas`, `text-ink`, `text-section`, `font-display`, `rounded-card`.
