"use client";

import { useEffect, useRef, useState } from "react";
import {
  BadgeCheck,
  ClipboardCheck,
  CircleDollarSign,
  Clock,
  Lock,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TrendingUp,
  Users,
  Video,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { trustBadges, trustStatConfig } from "@/data/homepage";
import {
  formatAnimatedStatValue,
  rollTrustStatTargets,
  type TrustStatTarget,
} from "@/lib/trust-stats";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const statIcons: LucideIcon[] = [Users, TrendingUp, Clock, ShieldCheck];
const statMarkerIcons: LucideIcon[] = [BadgeCheck, ClipboardCheck, Zap];
const statMarkerLabels = ["Verified", "Reviewed", "Same-day"];

const statHints = [
  "Across California",
  "Physician-reviewed",
  "Same-day consults",
  "Always here for you",
];

const cardThemes = [
  {
    bar: "from-brand-400 via-brand-600 to-brand-800",
    icon: "from-brand-500 to-brand-700 shadow-brand-600/30",
    glow: "bg-brand-400/20",
    ring: "stroke-brand-500",
    chip: "bg-brand-50 text-brand-800 ring-brand-200/80",
    surface: "from-brand-50/80 via-white to-white",
    border: "border-brand-200/70 hover:border-brand-300/90",
  },
  {
    bar: "from-emerald-400 via-emerald-600 to-emerald-800",
    icon: "from-emerald-500 to-emerald-700 shadow-emerald-600/30",
    glow: "bg-emerald-400/20",
    ring: "stroke-emerald-500",
    chip: "bg-emerald-50 text-emerald-900 ring-emerald-200/80",
    surface: "from-emerald-50/80 via-white to-white",
    border: "border-emerald-200/70 hover:border-emerald-300/90",
  },
  {
    bar: "from-amber-400 via-amber-500 to-amber-700",
    icon: "from-amber-500 to-amber-700 shadow-amber-600/30",
    glow: "bg-amber-400/20",
    ring: "stroke-amber-500",
    chip: "bg-amber-50 text-amber-900 ring-amber-200/80",
    surface: "from-amber-50/80 via-white to-white",
    border: "border-amber-200/70 hover:border-amber-300/90",
  },
  {
    bar: "from-accent-400 via-accent-500 to-accent-700",
    icon: "from-accent-500 to-accent-700 shadow-accent-600/30",
    glow: "bg-accent-400/20",
    ring: "stroke-accent-500",
    chip: "bg-accent-50 text-accent-900 ring-accent-200/80",
    surface: "from-accent-50/80 via-white to-white",
    border: "border-accent-200/70 hover:border-accent-300/90",
  },
] as const;

const badgeMeta: Record<string, { icon: LucideIcon; accent: string }> = {
  "HIPAA Compliant": {
    icon: ShieldCheck,
    accent: "from-brand-500 to-brand-700",
  },
  "CA Licensed Physicians": {
    icon: Stethoscope,
    accent: "from-emerald-500 to-emerald-700",
  },
  "Secure Telehealth": {
    icon: Video,
    accent: "from-sky-500 to-sky-700",
  },
  "Money-Back Guarantee": {
    icon: CircleDollarSign,
    accent: "from-accent-500 to-accent-700",
  },
};

function CardHoverShine() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      <div className="absolute -inset-full top-0 block -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}

function useCountUp(target: number, active: boolean, duration = 2200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }

    let startTime: number | null = null;
    let frameId = 0;

    const tick = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(eased * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [target, active, duration]);

  return count;
}

function AnimatedStatCard({
  stat,
  active,
  index,
}: {
  stat: TrustStatTarget;
  active: boolean;
  index: number;
}) {
  const count = useCountUp(stat.target, active);
  const Icon = statIcons[index] ?? Users;
  const theme = cardThemes[index % cardThemes.length];
  const display = formatAnimatedStatValue(count, stat.target, stat.format);
  const hasPlusSuffix = stat.format === "locale-plus" && display.endsWith("+");
  const isSupport = stat.label === "Support Available";
  const MarkerIcon = statMarkerIcons[index] ?? BadgeCheck;
  const markerLabel = statMarkerLabels[index] ?? "Verified";

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-gradient-to-br p-[1px] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card",
        theme.border
      )}
    >
      <div
        className={cn(
          "relative h-full overflow-hidden rounded-[calc(1rem-1px)] bg-gradient-to-br",
          theme.surface
        )}
      >
        <CardHoverShine />

        <div
          className={cn(
            "pointer-events-none absolute -right-6 -top-6 size-28 rounded-full blur-2xl transition-opacity duration-300 group-hover:opacity-100",
            theme.glow,
            "opacity-60"
          )}
        />

        <div
          className={cn(
            "absolute inset-x-0 top-0 h-1 bg-gradient-to-r opacity-80",
            theme.bar
          )}
        />

        <div className="relative flex h-full flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <span
              className={cn(
                "flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:scale-105 sm:size-[3.25rem]",
                theme.icon
              )}
            >
              <Icon className="size-5 sm:size-[1.35rem]" />
            </span>

            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ring-1",
                theme.chip
              )}
            >
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-current opacity-40" />
                <span className="relative inline-flex size-1.5 rounded-full bg-current" />
              </span>
              Live
            </span>
          </div>

          <div className="mt-5 flex items-end justify-between gap-3">
            <div className="min-w-0">
              <p className="stat-value font-display text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-[2.15rem]">
                {hasPlusSuffix ? display.slice(0, -1) : display}
                {hasPlusSuffix ? (
                  <span className="text-lg font-bold text-brand-700 sm:text-xl">+</span>
                ) : stat.format !== "locale-plus" ? (
                  <span className="text-lg font-bold text-brand-700 sm:text-xl">
                    {stat.suffix}
                  </span>
                ) : null}
              </p>
              <p className="mt-1 font-display text-sm font-bold text-neutral-800 sm:text-base">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-neutral-500">{statHints[index]}</p>
            </div>

            {isSupport ? (
              <div className="flex shrink-0 flex-col items-end gap-0.5">
                <Lock className="size-4 text-accent-600" />
                <span className="text-[10px] font-bold uppercase tracking-wide text-neutral-400">
                  Secure
                </span>
              </div>
            ) : (
              <div className="flex shrink-0 flex-col items-end gap-0.5">
                <MarkerIcon className="size-4 text-brand-500" />
                <span className="text-[10px] font-bold uppercase tracking-wide text-neutral-400">
                  {markerLabel}
                </span>
              </div>
            )}
          </div>

          <div className="mt-5 h-1 overflow-hidden rounded-full bg-neutral-100">
            <div
              className={cn(
                "h-full rounded-full bg-gradient-to-r transition-[width] duration-[2200ms] ease-out",
                theme.bar
              )}
              style={{ width: active ? `${Math.min(55 + index * 12, 100)}%` : "0%" }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export function TrustSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [targets, setTargets] = useState<TrustStatTarget[]>(() =>
    trustStatConfig.map((item) => ({
      label: item.label,
      suffix: item.suffix,
      target: 0,
      format: item.format,
    }))
  );
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setTargets(rollTrustStatTargets(trustStatConfig));
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden py-16 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-50/60 via-white to-[#FAFAF7]" />
      <div className="pointer-events-none absolute -left-24 top-0 size-72 rounded-full bg-brand-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-64 rounded-full bg-accent-200/25 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 25%, rgb(20 184 166 / 0.08), transparent 42%), radial-gradient(circle at 85% 75%, rgb(249 115 22 / 0.06), transparent 38%)",
        }}
      />

      <Container className="relative">
        <div className="rounded-[2rem] bg-gradient-to-br from-brand-200/40 via-white/90 to-accent-200/30 p-[1px] shadow-elevated md:rounded-[2.5rem]">
          <div className="rounded-[calc(2rem-1px)] bg-gradient-to-br from-[#FAFDFC] via-white to-[#FAFAF7] p-6 sm:p-8 md:p-10 lg:p-12 md:rounded-[calc(2.5rem-1px)]">
            {/* Header */}
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-800 shadow-sm">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-400 opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-brand-600" />
                </span>
                <Sparkles className="size-3.5 text-brand-600" />
                Trusted By Patients
              </span>
              <h2 className="section-heading mt-5 text-neutral-900">
                Why Patients in Santa Ana{" "}
                <span className="text-gradient-brand">Trust Us</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
                Backed by the standards that matter most to your care — verified
                stats, licensed physicians, and secure telehealth from start to finish.
              </p>
            </div>

            {/* Stats bento grid */}
            <div ref={gridRef} className="mt-12 md:mt-14">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-neutral-200/60 bg-white/80 px-5 py-4 shadow-soft backdrop-blur-sm sm:px-6">
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-800">
                  <TrendingUp className="size-4" />
                  By the numbers
                </p>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-[11px] font-bold text-brand-800 ring-1 ring-brand-200/80">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-500 opacity-50" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-brand-600" />
                  </span>
                  Updated live on scroll
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {targets.map((stat, i) => (
                  <AnimatedStatCard
                    key={stat.label}
                    stat={stat}
                    active={animate}
                    index={i}
                  />
                ))}
              </div>
            </div>

            {/* Trust commitment cards */}
            <div className="mt-10 sm:mt-12">
              <div className="mb-5 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                  Our commitments
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  Every evaluation follows California compliance standards
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
                {trustBadges.map((badge) => {
                  const meta = badgeMeta[badge] ?? {
                    icon: BadgeCheck,
                    accent: "from-brand-500 to-brand-700",
                  };
                  const BadgeIcon = meta.icon;

                  return (
                    <div
                      key={badge}
                      className="group relative overflow-hidden rounded-2xl border border-neutral-200/70 bg-white p-[1px] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200/80 hover:shadow-md"
                    >
                      <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-gradient-to-br from-white via-white to-brand-50/30 p-4 sm:p-5">
                        <CardHoverShine />
                        <div className="pointer-events-none absolute -right-4 -top-4 size-16 rounded-full bg-brand-200/20 blur-xl transition-opacity group-hover:opacity-100" />

                        <div className="relative flex items-start gap-3">
                          <span
                            className={cn(
                              "flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md transition-transform duration-300 group-hover:scale-105",
                              meta.accent
                            )}
                          >
                            <BadgeIcon className="size-[18px]" />
                          </span>
                          <div className="min-w-0 pt-0.5">
                            <p className="font-display text-sm font-bold leading-snug text-neutral-900 sm:text-base">
                              {badge}
                            </p>
                            <p className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-brand-700">
                              <BadgeCheck className="size-3 shrink-0" />
                              Verified standard
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
