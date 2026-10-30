import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export type HubStat = {
  icon: LucideIcon;
  label: string;
};

type HubPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  badgeIcon?: LucideIcon;
  stats?: HubStat[];
  align?: "center" | "split";
  media?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
};

export function HubPageHero({
  eyebrow,
  title,
  description,
  badgeIcon: BadgeIcon,
  stats,
  align = "center",
  media,
  actions,
  className,
}: HubPageHeroProps) {
  const isSplit = align === "split" && media;

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#f5f6f0] py-16 sm:py-20 lg:py-24",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-5%,rgba(20,184,166,0.12),transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-[0.32]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-0 size-80 rounded-full bg-brand-100/60 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 size-72 rounded-full bg-[#dce9df]/80 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div
          className={cn(
            isSplit
              ? "grid items-center gap-10 lg:grid-cols-[1fr_0.88fr] lg:gap-14 xl:gap-16"
              : "mx-auto max-w-3xl text-center"
          )}
        >
          <div className={cn(isSplit ? "max-w-2xl" : undefined)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-800 shadow-sm backdrop-blur-sm">
              {BadgeIcon ? (
                <BadgeIcon className="size-3.5 text-brand-600" aria-hidden="true" />
              ) : (
                <span className="size-2 rounded-full bg-brand-600" aria-hidden="true" />
              )}
              {eyebrow}
            </span>
            <h1
              className={cn(
                "mt-6 font-display font-bold leading-[1.08] tracking-tight text-[#123c31] sm:text-5xl lg:text-[3.25rem]",
                isSplit ? "text-4xl lg:text-5xl xl:text-6xl" : "text-4xl"
              )}
            >
              {title}
            </h1>
            <p
              className={cn(
                "mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg",
                isSplit ? "max-w-xl" : undefined
              )}
            >
              {description}
            </p>
            {actions ? (
              <div
                className={cn(
                  "mt-8 flex flex-wrap gap-3",
                  !isSplit && "items-center justify-center"
                )}
              >
                {actions}
              </div>
            ) : null}
            {stats && stats.length > 0 ? (
              <div
                className={cn(
                  "mt-8 flex flex-wrap gap-3",
                  !isSplit && "justify-center"
                )}
              >
                {stats.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-[#dce6dd] bg-white/95 px-4 py-2.5 text-sm font-semibold text-[#15503f] shadow-sm"
                  >
                    <Icon className="size-4 text-brand-600" aria-hidden="true" />
                    {label}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
          {isSplit ? <div className="relative mx-auto w-full max-w-lg">{media}</div> : null}
        </div>
      </Container>
    </section>
  );
}

export function HubSectionIntro({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto mb-10 max-w-2xl text-center sm:mb-12", className)}>
      <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand-700">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#123c31] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-neutral-600">{description}</p>
      ) : null}
    </div>
  );
}
