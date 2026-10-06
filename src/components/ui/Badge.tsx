import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "brand" | "accent" | "outline";
  className?: string;
};

const variants = {
  default: "bg-neutral-100 text-neutral-700",
  brand: "bg-brand-100 text-brand-800",
  accent: "bg-accent-100 text-accent-800",
  outline: "border border-neutral-200 text-neutral-600 bg-white",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
