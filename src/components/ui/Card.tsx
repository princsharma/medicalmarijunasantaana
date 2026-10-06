import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
  hover?: boolean;
};

export function Card({ children, className, highlighted, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-white p-6 md:p-8",
        hover && "transition-all duration-300 hover:-translate-y-1 hover:shadow-card",
        highlighted
          ? "relative border-brand-300/60 bg-gradient-to-b from-white to-brand-50/30 shadow-soft ring-1 ring-brand-500/20 lg:scale-[1.03]"
          : "border-neutral-200/80 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
