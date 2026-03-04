## Nuqlei Design Tokens & Figma Variables

### 1. High-level architecture

- **Base palettes (Color variables)**: Numeric color scales (e.g. `red-50`…`red-800`, `blue-50`…`blue-800`, `neutral-50`…`neutral-800`, plus `pk-*` for brand) live in a **Colors** collection. These are the raw hues used everywhere else.
- **Semantic tokens (Theme variables)**: UI-facing tokens (e.g. `bg-primary-default`, `text-neutral-secondary`, `outline-error-default`) live in a **Theme** collection, grouped by role (backgrounds, text, fills, icons, outlines) and by domain (neutral, primary, error, warning, success, brand).
- **Themes / modes**: At least two themes exist as sections: **`Default Light`** and **`Default Dark`**. Each theme is a *mode* that re-aliases the same semantic tokens to different base color variables.
- **Code export**: A Tailwind-style `theme.extend.colors` block maps design tokens directly into CSS custom properties, e.g. `bg-primary-default: var(--blue-500)`, `text-brand-default: var(--pk-600)`, etc.

### 2. Base color collections

- **Collection: Colors**
  - **Hue families** (as seen in the left-side list under `Default Light`):
    - `Red`, `Orange`, `Amber`, `Yellow`, `Lime`, `Green`, `Emerald`, `Teal`, `Cyan`, `Sky`, `Blue`, `Indigo`, `Violet`, `Purple`, `Fuchsia`, `Pink`, `Rose`
    - Neutral families: `Slate`, `Gray`, `Zinc`, `Neutral`, `Stone`
  - **Structure**:
    - Each hue has a numeric scale (e.g. `blue-50`, `blue-100`, …, `blue-800`) exposed as Figma variables and surfaced to code as CSS vars (e.g. `--blue-500`).
    - Brand colors are represented as `pk-*` variables (e.g. `--pk-50`, `--pk-600`, `--pk-900`) and treated as another hue family.

These base variables are **never theme-specific**: they are shared across all themes/modes and form the foundation for semantic tokens.

### 3. Semantic theme tokens

The big theme snippet on the `Colors & Themes` canvas defines semantic tokens, grouped as:

- **Background tokens** (prefix `bg-`):
  - **Neutrals**: `bg-neutral-white`, `bg-neutral-black`, `bg-neutral-surface`, `bg-neutral-disabled`, `bg-neutral-container`, `bg-neutral-low`
  - **Primary**: `bg-primary-default`, `bg-primary-hover`, `bg-primary-pressed`, `bg-primary-disabled`, `bg-primary-container`
  - **Error**: `bg-error-default`, `bg-error-hover`, `bg-error-pressed`, `bg-error-disabled`, `bg-error-container`
  - **Warning**: `bg-warning-default`, `bg-warning-hover`, `bg-warning-pressed`, `bg-warning-disabled`, `bg-warning-container`
  - **Success**: `bg-success-default`, `bg-success-hover`, `bg-success-pressed`, `bg-success-disabled`, `bg-success-container`
  - **Brand**: `bg-brand-default`, `bg-brand-hover`, `bg-brand-pressed`, `bg-brand-disabled`, `bg-brand-container`

- **Text tokens** (prefix `text-`):
  - **Neutrals**: `text-neutral-default`, `text-neutral-secondary`, `text-neutral-white`, `text-neutral-disabled`
  - **Primary**: `text-primary-*` (default/hover/pressed/disabled/container)
  - **Error**: `text-error-*` (default/hover/pressed/disabled/container)
  - **Warning**: `text-warning-*` (default/hover/pressed/disabled/container)
  - **Success**: `text-success-*` (default/hover/pressed/disabled/container)
  - **Brand**: `text-brand-*` (default/hover/pressed/disabled/container)

- **Fill tokens** (prefix `fill-`):
  - Neutrals, primary, error, warning, success, brand, each with default/hover/pressed/disabled/container variants.

- **Icon tokens** (prefix `icon-`):
  - Neutrals: `icon-neutral-white`, `icon-neutral-black`, `icon-neutral-disabled`
  - Primary, error, warning, success, brand: `*-default` and often `*-hover`.

- **Outline tokens** (prefix `outline-`):
  - Neutrals: `outline-neutral-default`, `outline-neutral-default-secondary`, `outline-neutral-hover`, `outline-neutral-focused`, `outline-neutral-white`, `outline-neutral-black`
  - Primary, error, warning, success, brand: `outline-*-default`, `outline-*-hover`, `outline-*-disabled`.

These semantic tokens are how components should reference color: components **never** reach directly for base scales like `blue-500` or `neutral-50`.

### 4. Connection between Colors and Theme collections

- **Alias pattern**:
  - Each semantic token is an alias to a base color variable, expressed in code as:
    - `bg-primary-default: var(--blue-500)`
    - `bg-neutral-white: var(--neutral-50)`
    - `text-brand-default: var(--pk-600)`
    - `outline-error-default: var(--red-500)`
  - This means:
    - **Colors collection** defines **base variables** like `--blue-500`, `--neutral-100`, `--red-600`, `--pk-600`.
    - **Theme collection** defines **semantic variables** like `bg-primary-default`, and those **point to** (alias) the base variables.

- **Chained aliases**:
  - Some semantic tokens alias *other semantic tokens* instead of base colors directly, e.g.:
    - `outline-neutral-focused: var(--bg-primary-pressed)`
  - In Figma variables this corresponds to a **semantic-to-semantic reference**, improving consistency (outline focus uses the same color as primary pressed background).

- **Themes / modes as the switching layer**:
  - Sections `Default Light` and `Default Dark` in the `Colors & Themes` canvas represent different **modes** of the same semantic token set.
  - In **Default Light**, mappings look like:
    - `bg-neutral-white → neutral-50`
    - `bg-neutral-black → neutral-800`
    - `bg-primary-default → blue-500`
    - `bg-error-default → red-500`
    - `bg-warning-default → orange-500`
    - `bg-success-default → green-500`
    - `bg-brand-default → pk-600`
  - In **Default Dark**, the same semantic tokens exist, but their aliases point to darker/lighter tones in the same hue families (e.g. `blue-300`/`blue-400` for backgrounds, higher `neutral-*` values for surfaces).

**Key connection point:**  
The **Theme collection** is a thin semantic layer sitting on top of the **Colors collection**. All theme tokens (`bg-*`, `text-*`, `fill-*`, `icon-*`, `outline-*`) are defined **only as aliases** to base hue scales (`neutral-*`, `blue-*`, `red-*`, `orange-*`, `green-*`, `pk-*`). Theme modes (Default Light/Dark) simply **change which base variable each semantic token points to**, enabling theming without touching components.

### 5. How to extend safely

- **To add a new brand or category**:
  - Add base colors to the **Colors** collection (e.g. `newbrand-50`…`newbrand-800`).
  - Add a matching set of semantic tokens in the **Theme** collection (e.g. `bg-newbrand-*`, `text-newbrand-*`, `icon-newbrand-*`, `outline-newbrand-*`).
  - For each mode (Default Light, Default Dark, future themes), alias those semantics to appropriate steps in the new hue scale.

- **To tweak a theme**:
  - Do **not** change the base scales.
  - Instead, update the alias for the relevant semantic token in the specific theme mode (e.g. change `bg-primary-default` from `blue-500` to `blue-600` in **Default Dark** only).

- **To ensure consistency**:
  - Components should consume **only semantic tokens**.
  - When adjusting contrast or behavior across themes, do it by updating the mappings in the Theme collection, keeping the semantic token names stable.

