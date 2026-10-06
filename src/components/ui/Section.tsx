import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: "default" | "muted" | "brand" | "dark";
  narrow?: boolean;
};

const bgMap = {
  default: "bg-background",
  muted: "bg-surface-muted",
  brand: "bg-brand-50",
  dark: "bg-neutral-900 text-white",
};

export function Section({
  id,
  children,
  className,
  containerClassName,
  background = "default",
  narrow,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", bgMap[background], className)}>
      <Container className={containerClassName} narrow={narrow}>
        {children}
      </Container>
    </section>
  );
}
