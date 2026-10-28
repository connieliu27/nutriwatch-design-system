# NutriWatch Design System

NutriWatch is an AI food-label analysis product. You point your phone camera at an ingredient panel; three AI agents (Vision Extraction → Information Mining → Scoring) read the label, cross-reference every additive against FDA, EFSA and WHO records, and return a 0–100 health index, a letter grade, points of concern and a parsed ingredient list — with every claim traced to a source document.

**Surfaces**
- **Marketing website** — landing page (hero, how it works, the agents, verified against, live demo) and a web analysis/report view.
- **Mobile app** — Scan (camera viewfinder + shutter), live pipeline, result report, bottom tab bar (Saved / scan FAB / Scan).

**Sources** — built only from five screenshots supplied by the user (`uploads/`): `nutriwatch-home.PNG` (full landing page), `nutriwatch.app_.PNG` (web analysis report), and three iPhone screenshots (Scan screen, result top, result ingredients). No codebase, Figma or font files were provided; all values were measured from pixels.

---

## Content fundamentals

- **Voice:** calm, evidence-first, slightly technical. The product speaks as an auditor, not a coach. It addresses the reader as **you** ("Know what's really in your food", "a regulatory document you can open and read yourself"); the product refers to itself through its agents, never "I".
- **Claims are always sourced.** Copy repeatedly promises traceability: "every claim traced to a source", "no fabricated sources", "every citation verified", "refusing to flag anything it can't cite", "No model hunches."
- **Headlines** pair a light lead-in with a bold payoff: "From shelf to verdict in **14 seconds.**", "Three specialists. **One audit trail.**", "Try it yourself — **tap the shutter.**" Sentence case, ending with a period.
- **Body** is plain and concrete, naming real regulators and numbers: "8g added — 16% of daily limit", "Checks additives vs FDA · EFSA · WHO".
- **Verdicts** are balanced, never alarmist: "A reasonable everyday choice — watch the added sugar." "Good choice overall".
- **Machine voice in mono, lowercase:** status and metadata read like logs — `complete`, `camera live`, `tap to analyze`, `5 ingredients found`, `0 flags · 0 sources`, `RUN · BCFB · 13.5s`, `→ parse_label`, `↳ or upload a photo`. Footer links are lowercase mono (privacy, methodology, contact).
- **Eyebrows** are UPPERCASE mono with wide tracking: AI FOOD-LABEL ANALYSIS, HOW IT WORKS, POINTS OF CONCERN · 2.
- Separators: middot ` · ` and em dash ` — `. Numbers are numerals ("3 expert agents", "14s").
- **No emoji.** Unicode glyphs only (see Iconography).

## Visual foundations

- **Palette:** cool near-white page (`--bg #fafbfc`) with white cards; one deep forest green for actions (`--green-800 #1e5d44`), a brighter green accent for rings, checks, eyebrows and the scan line (`--green-600 #309e6e`), and a single warning hue, orange (`--orange-600 #d9470f`), reserved for flagged ingredients and over-limit nutrients. Device bezels are green-black (`--green-950 #0f2a1f`), never pure black. Text is a cool charcoal (`--ink-900 #1f2629`) with grey body (`--ink-600`) and muted metadata (`--ink-400`).
- **Type:** IBM Plex Sans for everything human; IBM Plex Mono for everything machine (labels, status, metadata, indices, units of process). Display headlines are **Light 300** with **SemiBold 600** emphasis on the final words; tight -0.02em tracking. Big scores and stat figures are also Light. Nutrient values are SemiBold with a small grey unit.
- **Layout:** centered ~1120px container, generous vertical rhythm (~96px between marketing sections), two-column hero / demo, three-up card grids. Sections alternate white / tint (`--bg-tint`) / sunk (`--bg-sunk`) separated by 1px hairlines. In-app, sections are divided by full-width 1px rules with a muted mono eyebrow on top.
- **Backgrounds:** flat colour only. No photography, no gradients. The one texture is a **diagonal-stripe field** (`#eef2f0 / #f6f8f7` at 135°) standing in for the camera feed. The hero uses **concentric pale-green halo rings** (solid `--green-100` disc, a dashed `--green-300` inner ring, a white centre disc).
- **Cards:** white, 1px `--line` border, **no or almost no shadow**, radius 12–20px. Rows/tiles 12–14px; report cards 20px. Agent rows sit on `--bg-tint`. Flagged tiles switch to an orange-50 fill with orange-200 border and orange text.
- **Borders:** hairline 1px everywhere (`#eef0f1`, stronger `#e2e6e8` for controls). Green outline badges use `--green-200`.
- **Shadows:** green-tinted, very low opacity. Only floating things get one: the hero "AGENT 02" callout, the scan FAB (`--shadow-fab`), the phone (`--shadow-device`).
- **Corner radii:** 6 (source chips) · 8 (badges) · 12 (tiles, step cards) · 14 (rows) · 20 (cards, viewfinder) · pill (buttons, FAB) · ~48 (device).
- **Buttons:** pill. Primary = green-800 fill, white text. Secondary = white with hairline border. Utility = mono ghost pill. Full-width block = mono uppercase green-800 on white with green-200 outline, 14px radius.
- **Status language:** green dot/disc/✓ = clear or complete; orange dot / "!" disc = flagged. 9px dots precede ingredient names.
- **Motion:** quiet and functional. Ease-out (`cubic-bezier(.22,.61,.36,1)`), 140–240ms. Health ring fills on load; pipeline steps resolve one by one with a pulsing dot on the running step; scan line sweeps the viewfinder. No bounces.
- **Hover:** primary darkens to `--green-700`; outlined elements strengthen border to `--ink-300`; ingredient row chevron nudges 2px right. **Press:** scale to 0.98 (buttons) / 0.95 (shutter).
- **Transparency/blur:** only the sticky site header (86% `--bg` + 12px backdrop blur).
- **Imagery:** none beyond the striped camera placeholder. If product photography is added it should be cool, neutral, evenly lit.

## Iconography

- No icon font or SVG set appeared in the sources. The product uses **Unicode glyphs** set in Plex Sans/Mono: `⌂` Saved tab, `◎` Scan tab, `✓` complete, `!` concern, `›` row chevron, `‹` back, `↗` external source link, `↻` rescan/reset, `→` agent outputs, `↳` sub-notes, `·` separators, `●` live indicator.
- The **scan glyph** (rounded-square outline) appears in scan buttons and the FAB; it is built with CSS as `ScanGlyph`.
- No emoji. If a richer icon set is needed, use a thin 1.5px-stroke outline set (e.g. Lucide) — **this would be a substitution; none is defined in the source.**
- **Logo:** `assets/logo-mark.png` and `assets/logo-lockup.png` are raster crops from the screenshot (circle with a dot and inner arc; wordmark "Nutri" green-800 + "Watch" ink-900, Plex Sans SemiBold). Replace with vector originals when available.

## Fonts

IBM Plex Sans (300/400/500/600/700) and IBM Plex Mono (400/500/600), loaded from Google Fonts in `tokens/fonts.css`. Identified visually — **confirm or supply font files.**

---

## Index

- `styles.css` — entry point (imports only) → `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css` (spacing, radii, shadows, motion).
- `guidelines/` — foundation specimen cards (colors, type, spacing, radii, shadows, brand).
- `assets/` — logo-mark.png, logo-lockup.png.
- `components/`
  - `core/` — Button, ScanGlyph, Badge (+SourceChip), Eyebrow, Wordmark
  - `data/` — GradeRing (+HealthSummary), NutrientTile (+NutrientGrid), IngredientRow, ConcernItem, StatFigure
  - `pipeline/` — AgentStep, StepCard, AgentRow
  - `navigation/` — SiteHeader, SiteFooter, TabBar
  - `scan/` — Viewfinder, Shutter, PhoneFrame
- `ui_kits/website/` — landing + web analysis click-through.
- `ui_kits/app/` — scan → pipeline → result click-through.
- `SKILL.md` — agent-skill entry.

**Intentional additions:** `ScanGlyph` (CSS version of the scan icon used in buttons/FAB), `PhoneFrame` (brand device bezel shown on the marketing page).
