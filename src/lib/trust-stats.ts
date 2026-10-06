import type { TrustStatConfig } from "@/data/homepage";

export type TrustStatTarget = {
  label: string;
  suffix: string;
  target: number;
  format: TrustStatConfig["format"];
};

export function rollTrustStatTargets(config: TrustStatConfig[]): TrustStatTarget[] {
  return config.map((item) => ({
    label: item.label,
    suffix: item.suffix,
    target: Math.floor(Math.random() * (item.max - item.min + 1)) + item.min,
    format: item.format,
  }));
}

export function formatAnimatedStatValue(
  count: number,
  target: number,
  format: TrustStatConfig["format"]
): string {
  if (format === "locale-plus") {
    const formatted = count.toLocaleString();
    return count >= target ? `${formatted}+` : formatted;
  }
  return String(count);
}
