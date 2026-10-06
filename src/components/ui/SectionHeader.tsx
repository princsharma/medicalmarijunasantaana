import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  dark,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-14 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Badge variant={dark ? "outline" : "brand"} className={cn("mb-4", dark && "border-white/20 bg-white/10 text-brand-200")}>
          {eyebrow}
        </Badge>
      )}
      <h2
        className={cn(
          "section-heading",
          dark ? "text-white" : "text-neutral-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", dark ? "text-neutral-400" : "text-neutral-600")}>
          {description}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-accent-500",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
