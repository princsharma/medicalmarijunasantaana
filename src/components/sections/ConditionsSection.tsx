import {
  Activity,
  Bone,
  Brain,
  CheckCircle2,
  Dna,
  Eye,
  Frown,
  HeartPulse,
  Info,
  Scale,
  Shield,
  Sparkles,
  Stethoscope,
  UtensilsCrossed,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { conditionsSectionContent, qualifyingConditions } from "@/data/homepage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const conditionIcons: Record<string, LucideIcon> = {
  Arthritis: Bone,
  Cancer: Dna,
  "Chronic Pain": Zap,
  Glaucoma: Eye,
  "HIV/AIDS": Shield,
  Migraine: Brain,
  Seizures: Activity,
  "Severe Nausea": Frown,
  "Muscle Spasms": HeartPulse,
  Cachexia: Scale,
  Anorexia: UtensilsCrossed,
  Fibromyalgia: Stethoscope,
};

const conditionThemes = [
  {
    icon: "from-brand-500 to-brand-700 shadow-brand-600/25",
    bar: "from-brand-500 to-brand-700",
    chip: "bg-brand-50 text-brand-800 ring-brand-200/80",
    surface: "from-brand-50/50 via-white to-white",
    border: "border-brand-200/70 hover:border-brand-300/90",
  },
  {
    icon: "from-accent-400 to-accent-600 shadow-accent-500/25",
    bar: "from-accent-400 to-accent-600",
    chip: "bg-accent-50 text-accent-800 ring-accent-200/80",
    surface: "from-accent-50/40 via-white to-white",
    border: "border-accent-200/70 hover:border-accent-300/90",
  },
  {
    icon: "from-emerald-500 to-emerald-700 shadow-emerald-600/25",
    bar: "from-emerald-500 to-emerald-700",
    chip: "bg-emerald-50 text-emerald-900 ring-emerald-200/80",
    surface: "from-emerald-50/40 via-white to-white",
    border: "border-emerald-200/70 hover:border-emerald-300/90",
  },
] as const;

function CardShine() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      <div className="absolute -inset-full top-0 block -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}

export function ConditionsSection() {
  return (
    <section id="conditions" className="relative overflow-hidden py-16 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FAFAF7] via-white to-brand-50/30" />
      <div className="pointer-events-none absolute -left-32 top-20 size-96 rounded-full bg-brand-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 size-80 rounded-full bg-accent-200/20 blur-3xl" />

      <Container className="relative">
        <div className="rounded-[2rem] bg-gradient-to-br from-brand-200/40 via-white/90 to-accent-200/30 p-[1px] shadow-elevated md:rounded-[2.5rem]">
          <div className="overflow-hidden rounded-[calc(2rem-1px)] bg-gradient-to-br from-[#FAFDFC] via-white to-[#FAFAF7] p-6 sm:p-8 md:p-10 lg:p-12 md:rounded-[calc(2.5rem-1px)]">
            <div className="mx-auto max-w-4xl text-center">
              <div className="flex justify-center">
                <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-200/70 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-800 shadow-sm">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-400 opacity-60" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-brand-600" />
                  </span>
                  <Sparkles className="size-3.5 text-brand-600" />
                  {conditionsSectionContent.badge}
                </span>
              </div>

              <h2 className="section-heading mt-5 text-neutral-900">
                {conditionsSectionContent.title.replace("Santa Ana", "")}
                <span className="text-gradient-brand">Santa Ana</span>
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                {conditionsSectionContent.description}
              </p>
            </div>

            <div className="mt-10 md:mt-12">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-neutral-200/60 bg-white/80 px-5 py-4 shadow-soft backdrop-blur-sm sm:px-6">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-800">
                  Covered conditions
                </p>
                <span className="stat-value rounded-full bg-brand-100 px-3 py-1 text-[11px] font-bold text-brand-800 ring-1 ring-brand-200/80">
                  {qualifyingConditions.length} listed
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
                {qualifyingConditions.map((condition, index) => {
                  const Icon = conditionIcons[condition] ?? Stethoscope;
                  const theme = conditionThemes[index % conditionThemes.length];

                  return (
                    <article
                      key={condition}
                      className={cn(
                        "group relative h-full overflow-hidden rounded-2xl border bg-gradient-to-br p-[1px] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
                        theme.border
                      )}
                    >
                      <div
                        className={cn(
                          "relative flex h-full min-h-24 items-center gap-3.5 overflow-hidden rounded-[calc(1rem-1px)] bg-gradient-to-br p-4 sm:gap-4 sm:p-5",
                          theme.surface
                        )}
                      >
                        <CardShine />
                        <div
                          className={cn(
                            "absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r opacity-80",
                            theme.bar
                          )}
                        />

                        <span
                          className={cn(
                            "relative flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md transition-transform duration-300 group-hover:scale-105",
                            theme.icon
                          )}
                        >
                          <Icon className="size-5" strokeWidth={2.25} />
                        </span>

                        <div className="min-w-0 flex-1">
                          <h3 className="font-display text-sm font-bold leading-snug text-neutral-900 sm:text-base">
                            {condition}
                          </h3>
                          <span
                            className={cn(
                              "mt-1.5 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ring-1",
                              theme.chip
                            )}
                          >
                            <CheckCircle2 className="size-2.5" />
                            Qualifies
                          </span>
                        </div>

                        <span
                          aria-hidden
                          className="stat-value hidden font-display text-xl font-black text-neutral-100 transition-colors group-hover:text-brand-100 sm:block"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="relative mt-6 overflow-hidden rounded-2xl border border-brand-200/60 bg-gradient-to-br from-brand-50/80 via-white to-white p-6 shadow-soft md:p-7">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 to-accent-500" />
              <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-brand-100/50 blur-2xl" />

              <div className="relative flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-lg shadow-brand-700/25">
                  <Info className="size-5" />
                </span>
                <p className="min-w-0 flex-1 text-sm leading-relaxed text-neutral-700 sm:text-base">
                  {conditionsSectionContent.infoCard}
                </p>
                <Button href="#apply" size="lg" className="w-full sm:w-auto sm:min-w-[200px]">
                  {conditionsSectionContent.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
