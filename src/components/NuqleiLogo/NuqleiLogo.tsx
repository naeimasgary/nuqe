// ─── Design source ────────────────────────────────────────────────────────────
// SVG paths extracted directly from the Figma export (node 52596:2770, medium).
// Full logo: viewBox="0 0 205 44"
//   • Symbol (infinity mark): x ≈ 0–72, fill #00A6F4
//   • Wordmark ("Nuqlei"):    x ≈ 80–205, fill #262626
//
// For scaling we render each part in its own <svg> with a cropped viewBox so
// height can be set freely and width follows the natural aspect ratio.

// ─── Symbol ──────────────────────────────────────────────────────────────────
// Cropped viewBox covers just the symbol glyph: 0 0 72.15 44
const SYMBOL_VB_W = 72.15;
const SYMBOL_VB_H = 44;

// ─── Wordmark ─────────────────────────────────────────────────────────────────
// The wordmark paths live at x ≈ 80.34 to 204.37 in the original 205×44 space.
// We shift them left by 80.34 so the cropped viewBox starts at 0.
const WORDMARK_OFFSET = 80.3412;
const WORDMARK_VB_W   = 204.371 - WORDMARK_OFFSET; // ≈ 124.03
const WORDMARK_VB_H   = 44;

// ─── Size table ───────────────────────────────────────────────────────────────
// Height drives all dimensions; widths follow each part's natural aspect ratio.
// Gap between symbol and wordmark matches Figma spacing at each size.
const SIZE_MAP = {
  xs:    { h: 16,  gap: 4  },
  sm:    { h: 24,  gap: 5  },
  md:    { h: 44,  gap: 8  },
  lg:    { h: 72,  gap: 14 },
  xl:    { h: 110, gap: 22 },
  "2xl": { h: 180, gap: 34 },
} as const;

export type LogoSize    = keyof typeof SIZE_MAP;
export type LogoVariant = "default" | "white" | "black";

export interface NuqleiLogoProps {
  /** Visual size */
  size?: LogoSize;
  /** Colour variant — default (blue symbol, dark wordmark), white (all white), black (all dark) */
  variant?: LogoVariant;
  /** Show only the symbol mark */
  symbolOnly?: boolean;
  /** Show only the wordmark */
  wordmarkOnly?: boolean;
  className?: string;
  /** Accessible label */
  label?: string;
}

// ─── Symbol component ─────────────────────────────────────────────────────────
function Symbol({ color, height }: { color: string; height: number }) {
  const width = (height / SYMBOL_VB_H) * SYMBOL_VB_W;
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${SYMBOL_VB_W} ${SYMBOL_VB_H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: "block", flexShrink: 0 }}
    >
      {/* Exact path from Figma export — the Nuqlei infinity-N mark */}
      <path
        d="M45.1105 6.0482C37.6266 4.54392 64.7096 -9.44951 71.0507 11.5044V11.5064C83.1513 91.221 -9.8004 -3.85196 22.3675 19.9537C69.948 55.1666 84.6709 14.0072 45.1105 6.0482ZM1.09412 32.4936C-11.0065 -47.221 81.9452 47.852 49.7773 24.0463C2.19679 -11.1639 -12.5254 29.993 27.0353 37.9518C34.5185 39.4563 7.43511 53.4493 1.09412 32.4956V32.4936Z"
        fill={color}
      />
    </svg>
  );
}

// ─── Wordmark component ───────────────────────────────────────────────────────
function Wordmark({ color, height }: { color: string; height: number }) {
  const width = (height / WORDMARK_VB_H) * WORDMARK_VB_W;
  return (
    <svg
      width={width}
      height={height}
      // Shift the original paths left by WORDMARK_OFFSET so they start at x=0
      viewBox={`${WORDMARK_OFFSET} 0 ${WORDMARK_VB_W} ${WORDMARK_VB_H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: "block", flexShrink: 0 }}
    >
      {/* Exact wordmark paths from Figma export */}
      <path
        d="M149.559 12.135C155.923 12.135 161.122 17.3328 161.122 23.7366V40.2231H155.299V32.5961C154.009 34.2191 151.888 35.2581 149.559 35.2581C143.196 35.2581 137.998 30.1006 137.998 23.7396V23.7366C137.998 17.3328 143.196 12.135 149.559 12.135ZM118.954 23.4895C118.955 26.7735 121.076 28.8536 124.195 28.8536C127.315 28.8536 129.436 26.776 129.437 23.4895V12.011H135.259V23.4895C135.259 30.0602 130.475 34.6769 124.197 34.6769C117.92 34.6767 113.136 30.06 113.136 23.4895H113.131V12.011H118.954V23.4895ZM184.041 11.3867C191.444 11.4298 196.602 17.2497 194.521 25.5673H179.674C179.965 27.5646 182.337 29.4759 185.163 29.4759C186.703 29.5163 189.363 28.8112 190.111 27.7722L194.521 31.1395C192.276 33.6778 188.658 34.6738 184.582 34.6739C177.844 34.6739 173.311 28.7274 173.311 22.9883C173.311 16.9991 177.263 11.3438 184.041 11.3867ZM204.042 34.2597H198.511V12.011H204.042V34.2597ZM109.476 30.7804C109.496 32.3579 108.416 33.6682 107.046 33.6455C106.401 33.6455 105.759 33.3544 105.238 32.8362C98.8844 26.7509 92.6343 21.6237 86.4046 15.4373V33.6475H80.3412V7.40016C80.2982 5.82265 81.3981 4.51497 82.7481 4.53503C83.3929 4.53503 84.0358 4.82628 84.5769 5.32434H84.5789C90.9122 11.4299 97.1625 16.5567 103.392 22.7432V4.53503H109.476V30.7804ZM170.32 33.6455H164.257V5.91858L170.32 4.04984V33.6455ZM149.559 17.9573C146.399 17.9573 143.82 20.5361 143.82 23.7366C143.82 26.8969 146.399 29.4358 149.559 29.4358C152.72 29.4358 155.299 26.8994 155.299 23.7366C155.298 20.574 152.72 17.9573 149.559 17.9573ZM184.251 16.5007C181.174 16.5007 179.634 18.7464 179.634 20.5363H188.824C189.031 19.0397 187.826 16.501 184.251 16.5007ZM201.294 3.77673C202.957 3.77673 204.371 5.19038 204.371 6.85395C204.371 8.51736 202.998 9.97317 201.294 9.97317C199.59 9.97302 198.218 8.47683 198.218 6.85395C198.218 5.19047 199.63 3.77688 201.294 3.77673Z"
        fill={color}
      />
    </svg>
  );
}

// ─── Full logo (symbol + wordmark in one SVG) ─────────────────────────────────
// Used when both parts share the same colour (white / black variants) so we can
// render the original single-SVG with a single currentColor fill.
function FullLogoSvg({ symbolColor, wordmarkColor, height }: {
  symbolColor: string;
  wordmarkColor: string;
  height: number;
}) {
  const width = (height / 44) * 205;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 205 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: "block", flexShrink: 0 }}
    >
      <g clipPath="url(#nuqlei-clip)">
        <path
          d="M45.1105 6.0482C37.6266 4.54392 64.7096 -9.44951 71.0507 11.5044V11.5064C83.1513 91.221 -9.8004 -3.85196 22.3675 19.9537C69.948 55.1666 84.6709 14.0072 45.1105 6.0482ZM1.09412 32.4936C-11.0065 -47.221 81.9452 47.852 49.7773 24.0463C2.19679 -11.1639 -12.5254 29.993 27.0353 37.9518C34.5185 39.4563 7.43511 53.4493 1.09412 32.4956V32.4936Z"
          fill={symbolColor}
        />
        <path
          d="M149.559 12.135C155.923 12.135 161.122 17.3328 161.122 23.7366V40.2231H155.299V32.5961C154.009 34.2191 151.888 35.2581 149.559 35.2581C143.196 35.2581 137.998 30.1006 137.998 23.7396V23.7366C137.998 17.3328 143.196 12.135 149.559 12.135ZM118.954 23.4895C118.955 26.7735 121.076 28.8536 124.195 28.8536C127.315 28.8536 129.436 26.776 129.437 23.4895V12.011H135.259V23.4895C135.259 30.0602 130.475 34.6769 124.197 34.6769C117.92 34.6767 113.136 30.06 113.136 23.4895H113.131V12.011H118.954V23.4895ZM184.041 11.3867C191.444 11.4298 196.602 17.2497 194.521 25.5673H179.674C179.965 27.5646 182.337 29.4759 185.163 29.4759C186.703 29.5163 189.363 28.8112 190.111 27.7722L194.521 31.1395C192.276 33.6778 188.658 34.6738 184.582 34.6739C177.844 34.6739 173.311 28.7274 173.311 22.9883C173.311 16.9991 177.263 11.3438 184.041 11.3867ZM204.042 34.2597H198.511V12.011H204.042V34.2597ZM109.476 30.7804C109.496 32.3579 108.416 33.6682 107.046 33.6455C106.401 33.6455 105.759 33.3544 105.238 32.8362C98.8844 26.7509 92.6343 21.6237 86.4046 15.4373V33.6475H80.3412V7.40016C80.2982 5.82265 81.3981 4.51497 82.7481 4.53503C83.3929 4.53503 84.0358 4.82628 84.5769 5.32434H84.5789C90.9122 11.4299 97.1625 16.5567 103.392 22.7432V4.53503H109.476V30.7804ZM170.32 33.6455H164.257V5.91858L170.32 4.04984V33.6455ZM149.559 17.9573C146.399 17.9573 143.82 20.5361 143.82 23.7366C143.82 26.8969 146.399 29.4358 149.559 29.4358C152.72 29.4358 155.299 26.8994 155.299 23.7366C155.298 20.574 152.72 17.9573 149.559 17.9573ZM184.251 16.5007C181.174 16.5007 179.634 18.7464 179.634 20.5363H188.824C189.031 19.0397 187.826 16.501 184.251 16.5007ZM201.294 3.77673C202.957 3.77673 204.371 5.19038 204.371 6.85395C204.371 8.51736 202.998 9.97317 201.294 9.97317C199.59 9.97302 198.218 8.47683 198.218 6.85395C198.218 5.19047 199.63 3.77688 201.294 3.77673Z"
          fill={wordmarkColor}
        />
      </g>
      <defs>
        <clipPath id="nuqlei-clip">
          <rect width="204.371" height="44" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export function NuqleiLogo({
  size = "sm",
  variant = "default",
  symbolOnly = false,
  wordmarkOnly = false,
  className,
  label = "Nuqlei",
}: NuqleiLogoProps) {
  const { h, gap } = SIZE_MAP[size];

  const symbolColor   = variant === "white" ? "#ffffff" : variant === "black" ? "#111C2D" : "#00A6F4";
  const wordmarkColor = variant === "white" ? "#ffffff" : "#111C2D";

  // When showing full logo, use single SVG so the clip-path works correctly
  const baseClass = ["inline-flex items-center flex-shrink-0 leading-none", className].filter(Boolean).join(" ");

  if (!symbolOnly && !wordmarkOnly) {
    return (
      <span className={baseClass} role="img" aria-label={label}>
        <FullLogoSvg symbolColor={symbolColor} wordmarkColor={wordmarkColor} height={h} />
      </span>
    );
  }

  return (
    <span
      className={baseClass}
      style={{ gap }}
      role="img"
      aria-label={label}
    >
      {!wordmarkOnly && <Symbol color={symbolColor} height={h} />}
      {!symbolOnly && <Wordmark color={wordmarkColor} height={h} />}
    </span>
  );
}
