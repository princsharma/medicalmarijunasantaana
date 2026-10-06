/**
 * Typography tokens — font families, sizes, weights, line-heights, letter-spacing.
 */
export const fontFamilies = {
  display: "var(--font-display)",
  body: "var(--font-body)",
  mono: "var(--font-mono)",
} as const;

export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

export const fontSizes = {
  "2xs": { size: "0.6875rem", lineHeight: "1rem" }, // 11px
  xs: { size: "0.75rem", lineHeight: "1.125rem" }, // 12px
  sm: { size: "0.875rem", lineHeight: "1.375rem" }, // 14px
  base: { size: "1rem", lineHeight: "1.625rem" }, // 16px
  lg: { size: "1.125rem", lineHeight: "1.75rem" }, // 18px
  xl: { size: "1.25rem", lineHeight: "1.875rem" }, // 20px
  "2xl": { size: "1.5rem", lineHeight: "2rem" }, // 24px
  "3xl": { size: "1.875rem", lineHeight: "2.375rem" }, // 30px
  "4xl": { size: "2.25rem", lineHeight: "2.75rem" }, // 36px
  "5xl": { size: "3rem", lineHeight: "3.5rem" }, // 48px
  "6xl": { size: "3.75rem", lineHeight: "4.25rem" }, // 60px
  "7xl": { size: "4.5rem", lineHeight: "5rem" }, // 72px
} as const;

export const letterSpacing = {
  tighter: "-0.04em",
  tight: "-0.02em",
  normal: "0em",
  wide: "0.02em",
  wider: "0.04em",
  widest: "0.08em",
} as const;

/** Semantic text styles mapped to Tailwind utility classes */
export const textStyles = {
  displayHero: "font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight",
  displaySection: "font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight",
  displayCard: "font-display text-xl sm:text-2xl font-semibold tracking-tight",
  bodyLg: "font-body text-lg leading-relaxed",
  bodyBase: "font-body text-base leading-relaxed",
  bodySm: "font-body text-sm leading-relaxed",
  label: "font-body text-sm font-medium tracking-wide uppercase",
  caption: "font-body text-xs leading-normal text-muted",
} as const;

export type FontSizeKey = keyof typeof fontSizes;
export type TextStyleKey = keyof typeof textStyles;
