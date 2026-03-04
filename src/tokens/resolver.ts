import { lightColors, darkColors } from "./colors";
import type { BaseColorToken, SemanticTokenName, ThemeMode } from "./types";
import { themes } from "./themes";

function parseBaseColorToken(token: BaseColorToken): {
  hue: keyof typeof lightColors;
  tone: string;
} {
  const parts = token.split("-");
  const tone = parts[parts.length - 1];
  const hue = parts.slice(0, -1).join("-") as keyof typeof lightColors;
  return { hue, tone };
}

function resolveBaseToken(
  mode: ThemeMode,
  name: SemanticTokenName
): BaseColorToken | undefined {
  const theme = themes[mode];
  const seen = new Set<SemanticTokenName>();
  let current: SemanticTokenName | undefined = name;

  while (current !== undefined) {
    if (seen.has(current)) return undefined;
    seen.add(current);

    const entry: { base?: BaseColorToken; aliasOf?: SemanticTokenName } | undefined = theme.tokens[current];
    if (!entry) return undefined;
    if (entry.base) return entry.base;
    current = entry.aliasOf;
  }

  return undefined;
}

export function resolveColorHex(
  mode: ThemeMode,
  token: SemanticTokenName
): string | undefined {
  const base = resolveBaseToken(mode, token);
  if (!base) return undefined;

  const { hue, tone } = parseBaseColorToken(base);
  const palette = mode === "light" ? lightColors : darkColors;
  const group = (palette as any)[hue];

  if (typeof group === "string") {
    return group as string;
  }

  return group?.[tone] as string | undefined;
}

