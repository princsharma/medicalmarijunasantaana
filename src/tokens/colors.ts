/**
 * Color tokens — Santa Ana theme (warm coral + deep teal, distinct from reference green).
 */
export const colors = {
  brand: {
    50: "#F0FDFA",
    100: "#CCFBF1",
    200: "#99F6E4",
    300: "#5EEAD4",
    400: "#2DD4BF",
    500: "#14B8A6",
    600: "#0D9488",
    700: "#0F766E",
    800: "#115E59",
    900: "#134E4A",
    950: "#042F2E",
  },
  accent: {
    50: "#FFF7ED",
    100: "#FFEDD5",
    200: "#FED7AA",
    300: "#FDBA74",
    400: "#FB923C",
    500: "#F97316",
    600: "#EA580C",
    700: "#C2410C",
    800: "#9A3412",
    900: "#7C2D12",
  },
  neutral: {
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A",
    950: "#020617",
  },
  success: { DEFAULT: "#059669", light: "#D1FAE5" },
  error: { DEFAULT: "#DC2626", light: "#FEE2E2" },
  warning: { DEFAULT: "#D97706", light: "#FEF3C7" },
} as const;

export const semanticColors = {
  background: colors.neutral[50],
  foreground: colors.neutral[900],
  muted: colors.neutral[500],
  border: colors.neutral[200],
  primary: colors.brand[700],
  primaryForeground: "#FFFFFF",
  accent: colors.accent[500],
  accentForeground: "#FFFFFF",
  surface: "#FFFFFF",
  surfaceMuted: colors.neutral[100],
} as const;
