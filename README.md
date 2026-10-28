# nutriwatch-design-system

Design tokens and React components for NutriWatch, the AI food-label analysis product.

## Install

```bash
npm install nutriwatch-design-system
```

Peer dependencies: `react` and `react-dom` 17 or later.

## Usage

Import the stylesheet once at the app root. It loads IBM Plex Sans and IBM Plex Mono from Google Fonts and defines every CSS custom property the components use.

```jsx
import 'nutriwatch-design-system/styles.css';
import { Button, ScanGlyph, HealthSummary, NutrientGrid, IngredientRow } from 'nutriwatch-design-system';

export default function Result() {
  return (
    <div style={{ background: 'var(--bg)', padding: 24 }}>
      <HealthSummary grade="B+" score={78} verdict="Good choice overall" />
      <NutrientGrid items={[{ value: 190, unit: 'kcal', label: 'Calories' }, { value: 12, unit: 'g', label: 'Sugar', flagged: true }]} />
      <IngredientRow name="Honey" note="added sugar" status="flag" />
      <Button icon={<ScanGlyph />}>Scan another label</Button>
    </div>
  );
}
```

## Components

- **Core:** Button, ScanGlyph, Badge, SourceChip, Eyebrow, Wordmark
- **Data:** GradeRing, HealthSummary, NutrientTile, NutrientGrid, IngredientRow, ConcernItem, StatFigure
- **Pipeline:** AgentStep, StepCard, AgentRow
- **Navigation:** SiteHeader, SiteFooter, TabBar
- **Scan:** Viewfinder, Shutter, PhoneFrame

Logos are exported as data URIs (`logoMark`, `logoLockup`). PNG files are also in `assets/`.

## Tokens

All tokens are CSS custom properties on `:root`:

- Color: `--green-800` (primary), `--green-600` (accent), `--orange-600` (flag), `--ink-900`, `--bg`
- Type: `--font-sans`, `--font-mono`
- Shape: `--radius-m`, `--radius-l`, `--radius-pill`
- Elevation: `--shadow-fab`, `--shadow-device`

Individual files are in `tokens/`. GUIDELINES.md has the full design guide: voice, color, type, layout, motion and iconography.

## Publish

```bash
cd nutriwatch-design-system
npm login
npm publish
```

If the name is taken, rename it in package.json (for example `@your-scope/nutriwatch-design-system`) and run `npm publish --access public`.

## Notes

- Fonts were identified from screenshots and load from Google Fonts.
- The logo is a raster crop from a product screenshot. Replace it with the vector original when available.
- `src/` contains the original JSX. `dist/` contains compiled ES modules (classic React runtime, `import React from 'react'`).
