import type { ThemeDefinition } from "./types";

// NOTE:
// - These mappings are derived from the Figma "Colors & Themes" canvas snippet.
// - We only encode what we explicitly know from that snippet; you can extend it
//   easily by adding or tweaking TokenAlias entries below.

export const lightTheme: ThemeDefinition = {
  mode: "light",
  tokens: {
    // Backgrounds - neutrals
    "bg-neutral-white": { base: "neutral-50" },
    "bg-neutral-black": { base: "neutral-800" },
    "bg-neutral-surface": { base: "neutral-200" },
    "bg-neutral-disabled": { base: "neutral-200" },
    "bg-neutral-container": { base: "neutral-100" },
    "bg-neutral-low": { base: "neutral-700" },

    // Backgrounds - primary (uses skyBrand scale in Figma)
    "bg-primary-default": { base: "skyBrand-500" },
    "bg-primary-hover": { base: "skyBrand-600" },
    "bg-primary-pressed": { base: "skyBrand-800" },
    "bg-primary-disabled": { base: "skyBrand-200" },
    "bg-primary-container": { base: "skyBrand-50" },

    // Backgrounds - error
    "bg-error-default": { base: "red-500" },
    "bg-error-hover": { base: "red-600" },
    "bg-error-pressed": { base: "red-800" },
    "bg-error-disabled": { base: "red-200" },
    "bg-error-container": { base: "red-50" },

    // Backgrounds - warning
    "bg-warning-default": { base: "orange-500" },
    "bg-warning-hover": { base: "orange-600" },
    "bg-warning-pressed": { base: "orange-800" },
    "bg-warning-disabled": { base: "orange-200" },
    "bg-warning-container": { base: "orange-50" },

    // Backgrounds - success
    "bg-success-default": { base: "green-500" },
    "bg-success-hover": { base: "green-600" },
    "bg-success-pressed": { base: "green-800" },
    "bg-success-disabled": { base: "green-200" },
    "bg-success-container": { base: "green-50" },

    // Backgrounds - brand (also uses skyBrand scale, but with different steps)
    "bg-brand-default": { base: "skyBrand-500" },
    "bg-brand-hover": { base: "skyBrand-700" },
    "bg-brand-pressed": { base: "skyBrand-800" },
    "bg-brand-disabled": { base: "skyBrand-200" },
    "bg-brand-container": { base: "skyBrand-50" },

    // Text - neutrals
    "text-neutral-default": { base: "neutral-800" },
    // Figma: theme.text.neutral.secondary -> colors.neutral/500
    "text-neutral-secondary": { base: "neutral-500" },
    "text-neutral-white": { base: "neutral-50" },
    "text-neutral-disabled": { base: "neutral-500" },

    // Text - primary (Figma theme.text.primary.*)
    "text-primary-default": { base: "skyBrand-500" },
    "text-primary-hover": { base: "skyBrand-600" },
    "text-primary-pressed": { base: "skyBrand-800" },
    "text-primary-disabled": { base: "skyBrand-200" },
    "text-primary-container": { base: "skyBrand-50" },

    // Text - error
    "text-error-default": { base: "red-600" },
    "text-error-hover": { base: "red-500" },
    "text-error-pressed": { base: "red-800" },
    "text-error-disabled": { base: "red-200" },
    "text-error-container": { base: "red-50" },

    // Text - warning
    "text-warning-default": { base: "orange-500" },
    "text-warning-hover": { base: "orange-600" },
    "text-warning-pressed": { base: "orange-800" },
    "text-warning-disabled": { base: "orange-200" },
    "text-warning-container": { base: "orange-50" },

    // Text - success
    "text-success-default": { base: "green-500" },
    "text-success-hover": { base: "green-600" },
    "text-success-pressed": { base: "green-800" },
    "text-success-disabled": { base: "green-200" },
    "text-success-container": { base: "green-50" },

    // Text - brand (Figma theme.text.brand.*)
    "text-brand-default": { base: "skyBrand-600" },
    "text-brand-hover": { base: "skyBrand-800" },
    "text-brand-pressed": { base: "skyBrand-900" },
    "text-brand-disabled": { base: "skyBrand-200" },
    "text-brand-container": { base: "skyBrand-50" },

    // Fills - neutrals
    "fill-neutral-white": { base: "neutral-50" },
    "fill-neutral-black": { base: "neutral-800" },
    "fill-neutral-disabled": { base: "neutral-200" },

    // Fills - primary (Figma theme.fill.primary.*)
    "fill-primary-default": { base: "skyBrand-600" },
    "fill-primary-hover": { base: "skyBrand-500" },
    "fill-primary-pressed": { base: "skyBrand-800" },
    "fill-primary-disabled": { base: "skyBrand-200" },
    "fill-primary-container": { base: "skyBrand-50" },

    // Fills - error
    "fill-error-default": { base: "red-600" },
    "fill-error-hover": { base: "red-500" },
    "fill-error-pressed": { base: "red-800" },
    "fill-error-disabled": { base: "red-200" },
    "fill-error-container": { base: "red-50" },

    // Fills - warning
    "fill-warning-default": { base: "orange-600" },
    "fill-warning-hover": { base: "orange-500" },
    "fill-warning-pressed": { base: "orange-800" },
    "fill-warning-disabled": { base: "orange-200" },
    "fill-warning-container": { base: "orange-50" },

    // Fills - success
    "fill-success-default": { base: "green-500" },
    "fill-success-hover": { base: "green-600" },
    "fill-success-pressed": { base: "green-800" },
    "fill-success-disabled": { base: "green-200" },
    "fill-success-container": { base: "green-50" },

    // Fills - brand (Figma theme.fill.brand.*)
    "fill-brand-default": { base: "skyBrand-600" },
    "fill-brand-hover": { base: "skyBrand-500" },
    "fill-brand-pressed": { base: "skyBrand-900" },
    "fill-brand-disabled": { base: "skyBrand-200" },
    "fill-brand-container": { base: "skyBrand-50" },

    // Icons
    "icon-neutral-white": { base: "neutral-50" },
    "icon-neutral-black": { base: "neutral-800" },
    "icon-neutral-disabled": { base: "neutral-300" },
    "icon-primary-default": { base: "skyBrand-500" },
    "icon-primary-hover": { base: "skyBrand-600" },
    "icon-error-default": { base: "red-500" },
    "icon-error-hover": { base: "red-600" },
    "icon-warning-default": { base: "orange-500" },
    "icon-warning-hover": { base: "orange-600" },
    "icon-success-default": { base: "green-500" },
    "icon-success-hover": { base: "green-600" },
    "icon-brand-default": { base: "skyBrand-500" },
    "icon-brand-hover": { base: "skyBrand-800" },

    // Outlines - neutrals
    "outline-neutral-default": { base: "neutral-400" },
    "outline-neutral-default-secondary": { base: "neutral-200" },
    "outline-neutral-hover": { base: "neutral-600" },
    // Chained alias: outline-neutral-focused uses bg-primary-pressed
    "outline-neutral-focused": { aliasOf: "bg-primary-pressed" },
    "outline-neutral-white": { base: "neutral-50" },
    "outline-neutral-black": { base: "neutral-800" },

    // Outlines - primary
    "outline-primary-default": { base: "skyBrand-500" },
    "outline-primary-hover": { base: "skyBrand-600" },
    "outline-primary-disabled": { base: "skyBrand-200" },

    // Outlines - error
    "outline-error-default": { base: "red-500" },
    "outline-error-hover": { base: "red-600" },
    "outline-error-disabled": { base: "red-200" },

    // Outlines - warning
    "outline-warning-default": { base: "orange-500" },
    "outline-warning-hover": { base: "orange-600" },
    "outline-warning-disabled": { base: "orange-200" },

    // Outlines - success
    "outline-success-default": { base: "green-500" },
    "outline-success-hover": { base: "green-600" },
    "outline-success-disabled": { base: "green-200" },

    // Outlines - brand
    "outline-brand-default": { base: "skyBrand-600" },
    "outline-brand-hover": { base: "skyBrand-800" },
    "outline-brand-disabled": { base: "skyBrand-200" }
  }
};

// For now we stub the dark theme as identical to light.
// Once we have the exact dark aliases from Figma, you can
// adjust only the `base` values here, keeping keys identical.
export const darkTheme: ThemeDefinition = {
  mode: "dark",
  tokens: {
    ...lightTheme.tokens
  }
};

export const themes = {
  light: lightTheme,
  dark: darkTheme
};

