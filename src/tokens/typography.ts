import type { FontWeightName, TextStyleName, TextStyleToken } from "./types";

// Typography tokens derived from the Figma "typeface" collection.
// Sizes are in px and names are camelCased versions of the Figma labels.

export const fontFamily = {
  primary: "Roboto"
} as const;

export const fontWeights: Record<FontWeightName, number> = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
};

export const textStyles: Record<TextStyleName, TextStyleToken> = {
  // Display
  display2xl: {
    fontFamily: fontFamily.primary,
    fontWeight: "semibold",
    fontSize: 72 // Figma: "Display-2xl"
  },
  displayXl: {
    fontFamily: fontFamily.primary,
    fontWeight: "semibold",
    fontSize: 60 // Figma: "Display-xl"
  },
  displayLg: {
    fontFamily: fontFamily.primary,
    fontWeight: "semibold",
    fontSize: 48 // Figma: "Display-lg"
  },
  displayMd: {
    fontFamily: fontFamily.primary,
    fontWeight: "semibold",
    fontSize: 36 // Figma: "Display-md"
  },
  displaySm: {
    fontFamily: fontFamily.primary,
    fontWeight: "semibold",
    fontSize: 30 // Figma: "Display-sm"
  },
  displayXs: {
    fontFamily: fontFamily.primary,
    fontWeight: "semibold",
    fontSize: 24 // Figma: "Display-xs"
  },

  // Body / text
  textXl: {
    fontFamily: fontFamily.primary,
    fontWeight: "regular",
    fontSize: 20 // Figma: "Text-xl"
  },
  textLg: {
    fontFamily: fontFamily.primary,
    fontWeight: "regular",
    fontSize: 18 // Figma: "Text-lg"
  },
  textMd: {
    fontFamily: fontFamily.primary,
    fontWeight: "regular",
    fontSize: 16 // Figma: "Text-md"
  },
  textSm: {
    fontFamily: fontFamily.primary,
    fontWeight: "regular",
    fontSize: 14 // Figma: "Text-sm"
  },
  textXs: {
    fontFamily: fontFamily.primary,
    fontWeight: "regular",
    fontSize: 12 // Figma: "Text-xs"
  }
};

