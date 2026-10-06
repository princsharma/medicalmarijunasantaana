/**
 * Breakpoint tokens — single source of truth for responsive design.
 * Values align with Tailwind @theme and can be used in JS media queries.
 */
export const breakpoints = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export type BreakpointKey = keyof typeof breakpoints;

export const breakpointPx = {
  xs: `${breakpoints.xs}px`,
  sm: `${breakpoints.sm}px`,
  md: `${breakpoints.md}px`,
  lg: `${breakpoints.lg}px`,
  xl: `${breakpoints.xl}px`,
  "2xl": `${breakpoints["2xl"]}px`,
} as const;

/** Min-width media query strings for use in styled-components or JS */
export const mediaQueries = {
  xs: `(min-width: ${breakpointPx.xs})`,
  sm: `(min-width: ${breakpointPx.sm})`,
  md: `(min-width: ${breakpointPx.md})`,
  lg: `(min-width: ${breakpointPx.lg})`,
  xl: `(min-width: ${breakpointPx.xl})`,
  "2xl": `(min-width: ${breakpointPx["2xl"]})`,
} as const;

/** Max-width helpers (mobile-first complement) */
export const maxMediaQueries = {
  xs: `(max-width: ${breakpoints.xs - 1}px)`,
  sm: `(max-width: ${breakpoints.sm - 1}px)`,
  md: `(max-width: ${breakpoints.md - 1}px)`,
  lg: `(max-width: ${breakpoints.lg - 1}px)`,
  xl: `(max-width: ${breakpoints.xl - 1}px)`,
} as const;
