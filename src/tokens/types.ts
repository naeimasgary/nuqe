export type HueFamily =
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "skyBrand"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose"
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"; // brand hue is modeled via skyBrand-*

export type Tone =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

// Base color token name, e.g. "blue-500", "neutral-50", "pk-600"
export type BaseColorToken = `${HueFamily}-${Tone}`;

// Semantic token categories as seen in Figma (bg/text/fill/icon/outline)
export type SemanticCategory = "bg" | "text" | "fill" | "icon" | "outline";

// High-level domains
export type SemanticDomain =
  | "neutral"
  | "primary"
  | "error"
  | "warning"
  | "success"
  | "brand";

// State / usage suffix
export type SemanticState =
  | "white"
  | "black"
  | "surface"
  | "container"
  | "low"
  | "default"
  | "secondary"
  | "hover"
  | "pressed"
  | "disabled"
  | "focused"
  | "default-secondary";

// Full semantic token name, e.g. "bg-primary-default", "outline-neutral-focused"
export type SemanticTokenName =
  | "bg-neutral-white"
  | "bg-neutral-black"
  | "bg-neutral-surface"
  | "bg-neutral-disabled"
  | "bg-neutral-container"
  | "bg-neutral-low"
  | "bg-primary-default"
  | "bg-primary-hover"
  | "bg-primary-pressed"
  | "bg-primary-disabled"
  | "bg-primary-container"
  | "bg-error-default"
  | "bg-error-hover"
  | "bg-error-pressed"
  | "bg-error-disabled"
  | "bg-error-container"
  | "bg-warning-default"
  | "bg-warning-hover"
  | "bg-warning-pressed"
  | "bg-warning-disabled"
  | "bg-warning-container"
  | "bg-success-default"
  | "bg-success-hover"
  | "bg-success-pressed"
  | "bg-success-disabled"
  | "bg-success-container"
  | "bg-brand-default"
  | "bg-brand-hover"
  | "bg-brand-pressed"
  | "bg-brand-disabled"
  | "bg-brand-container"
  | "text-neutral-default"
  | "text-neutral-secondary"
  | "text-neutral-white"
  | "text-neutral-disabled"
  | "text-primary-default"
  | "text-primary-hover"
  | "text-primary-pressed"
  | "text-primary-disabled"
  | "text-primary-container"
  | "text-error-default"
  | "text-error-hover"
  | "text-error-pressed"
  | "text-error-disabled"
  | "text-error-container"
  | "text-warning-default"
  | "text-warning-hover"
  | "text-warning-pressed"
  | "text-warning-disabled"
  | "text-warning-container"
  | "text-success-default"
  | "text-success-hover"
  | "text-success-pressed"
  | "text-success-disabled"
  | "text-success-container"
  | "text-brand-default"
  | "text-brand-hover"
  | "text-brand-pressed"
  | "text-brand-disabled"
  | "text-brand-container"
  | "fill-neutral-white"
  | "fill-neutral-black"
  | "fill-neutral-disabled"
  | "fill-primary-default"
  | "fill-primary-hover"
  | "fill-primary-pressed"
  | "fill-primary-disabled"
  | "fill-error-default"
  | "fill-error-hover"
  | "fill-error-pressed"
  | "fill-error-disabled"
  | "fill-error-container"
  | "fill-warning-default"
  | "fill-warning-hover"
  | "fill-warning-pressed"
  | "fill-warning-disabled"
  | "fill-warning-container"
  | "fill-primary-container"
  | "fill-success-default"
  | "fill-success-hover"
  | "fill-success-pressed"
  | "fill-success-disabled"
  | "fill-success-container"
  | "fill-brand-default"
  | "fill-brand-hover"
  | "fill-brand-pressed"
  | "fill-brand-disabled"
  | "fill-brand-container"
  | "icon-neutral-white"
  | "icon-neutral-black"
  | "icon-neutral-disabled"
  | "icon-primary-default"
  | "icon-primary-hover"
  | "icon-error-default"
  | "icon-error-hover"
  | "icon-warning-default"
  | "icon-warning-hover"
  | "icon-success-default"
  | "icon-success-hover"
  | "icon-brand-default"
  | "icon-brand-hover"
  | "outline-neutral-default"
  | "outline-neutral-default-secondary"
  | "outline-neutral-hover"
  | "outline-neutral-focused"
  | "outline-neutral-white"
  | "outline-neutral-black"
  | "outline-primary-default"
  | "outline-primary-hover"
  | "outline-primary-disabled"
  | "outline-error-default"
  | "outline-error-hover"
  | "outline-error-disabled"
  | "outline-warning-default"
  | "outline-warning-hover"
  | "outline-warning-disabled"
  | "outline-success-default"
  | "outline-success-hover"
  | "outline-success-disabled"
  | "outline-brand-default"
  | "outline-brand-hover"
  | "outline-brand-disabled";

export type ThemeMode = "light" | "dark";

// Mapping from semantic token to a base token or another semantic token (for chained aliases).
export type TokenAlias = {
  // Name of the base color token this resolves to, e.g. "blue-500"
  base?: BaseColorToken;
  // Optional semantic indirection, e.g. outline-neutral-focused -> bg-primary-pressed
  aliasOf?: SemanticTokenName;
};

export type ThemeDefinition = {
  mode: ThemeMode;
  tokens: Record<SemanticTokenName, TokenAlias>;
};

// Typography tokens (from Figma "typeface" collection)

export type FontWeightName = "regular" | "medium" | "semibold" | "bold";

export type TextStyleName =
  | "display2xl"
  | "displayXl"
  | "displayLg"
  | "displayMd"
  | "displaySm"
  | "displayXs"
  | "textXl"
  | "textLg"
  | "textMd"
  | "textSm"
  | "textXs";

export interface TextStyleToken {
  fontFamily: string;
  fontWeight: FontWeightName;
  fontSize: number; // in px
}


