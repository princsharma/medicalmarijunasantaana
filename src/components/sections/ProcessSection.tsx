import {
  ArrowRight,
  Calendar,
  Clock,
  CreditCard,
  Phone,
  UserRound,
  Video,
} from "lucide-react";
import Link from "next/link";
import { processSectionContent, processSteps } from "@/data/homepage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const iconMap = {
  calendar: Calendar,
  consult: Video,
  card: CreditCard,
} as const;

const accentThemes = {
  amber: {
    icon: "bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-lg shadow-amber-500/30",
    bar: "from-amber-400 to-amber-600",
    cardBorder: "border-amber-100/80 group-hover:border-amber-200/90",
    stepBadge: "bg-gradient-to-br from-amber-500 to-amber-700 shadow-amber-600/35",
  },
  brand: {
    icon: "bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/30",
    bar: "from-brand-500 to-brand-700",
    cardBorder: "border-brand-100/80 group-hover:border-brand-200/90",
    stepBadge: "bg-gradient-to-br from-brand-600 to-brand-800 shadow-brand-700/35",
  },
  orange: {
    icon: "bg-gradient-to-br from-accent-400 to-accent-600 text-white shadow-lg shadow-accent-500/30",
    bar: "from-accent-400 to-accent-600",
    cardBorder: "border-accent-100/80 group-hover:border-accent-200/90",
    stepBadge: "bg-gradient-to-br from-accent-500 to-accent-700 shadow-accent-600/35",
  },
} as const;

function StepHoverShine() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      <div className="absolute -inset-full top-0 block -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}

function highlightText(text: string, highlight: string) {
  const parts = text.split(highlight);
  if (parts.length === 1) return text;

  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && (
        <span className="font-semibold text-brand-700">{highlight}</span>
      )}
    </span>
  ));
}

export function ProcessSection() {
  const { timeline } = processSectionContent;

  return (
    <section id="process" className="relative overflow-hidden py-16 md:py-28">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgb(15 118 110 / 0.14) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-1/4 size-[28rem] rounded-full bg-brand-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 size-96 rounded-full bg-accent-200/20 blur-3xl" />

      <Container className="relative">
        {/* Gradient border shell */}
        <div className="rounded-[2rem] bg-gradient-to-br from-brand-200/60 via-white/80 to-accent-200/50 p-[1px] shadow-elevated md:rounded-[2.5rem]">
          <div className="overflow-hidden rounded-[calc(2rem-1px)] bg-gradient-to-br from-[#FDFCF8] via-white to-[#F8FAF9] md:rounded-[calc(2.5rem-1px)]">
            <div className="grid lg:grid-cols-[minmax(0,42%)_minmax(0,58%)] lg:items-stretch">
              {/* Left column */}
              <div className="relative flex h-full min-h-0 flex-col gap-5 p-8 md:p-10 lg:gap-6 lg:p-10 lg:pb-10 xl:p-12 xl:pb-12">
                <div className="pointer-events-none absolute -left-20 top-0 h-40 w-40 rounded-full bg-brand-100/40 blur-3xl" />

                <Link
                  href="#process"
                  className="group relative inline-flex w-fit items-center gap-2.5 rounded-full border border-brand-200/70 bg-white/90 px-4 py-2 text-sm font-semibold text-brand-800 shadow-sm backdrop-blur-sm transition-all hover:border-brand-300 hover:shadow-md"
                >
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-400 opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-brand-600" />
                  </span>
                  {processSectionContent.badge}
                  <ArrowRight className="size-3.5 text-brand-500 transition-transform group-hover:translate-x-0.5" />
                </Link>

                <h2 className="section-heading relative text-neutral-900">
                  {processSectionContent.title}
                </h2>

                <p className="relative max-w-lg text-base leading-relaxed text-neutral-600">
                  {highlightText(
                    processSectionContent.description,
                    processSectionContent.highlight
                  )}
                </p>

                <div className="relative flex flex-wrap gap-3">
                  <Button href="#apply" size="lg" className="shadow-lg shadow-brand-700/20">
                    {processSectionContent.ctaPrimary.label}
                  </Button>
                  <Button
                    href={processSectionContent.ctaSecondary.href}
                    variant="outline"
                    size="lg"
                    className="border-neutral-200/90 bg-white/80 backdrop-blur-sm hover:bg-white"
                  >
                    {processSectionContent.ctaSecondary.label}
                    <ArrowRight className="size-4" />
                  </Button>
                </div>

                {/* Process time — fills remaining column height, no dead space below */}
                <div className="group relative flex min-h-[8rem] flex-1 flex-col justify-center overflow-hidden rounded-2xl border border-brand-200/80 bg-gradient-to-br from-brand-50/90 via-white to-accent-50/50 p-6 shadow-card transition-shadow duration-300 hover:shadow-elevated md:min-h-[12rem] md:p-7">
                  <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-brand-200/30 blur-2xl" />
                  <div className="relative flex items-start gap-4 sm:gap-5">
                    <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-lg shadow-brand-700/30">
                      <Clock className="size-6" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-lg font-bold leading-snug text-neutral-900 md:text-xl">
                        {processSectionContent.processTime.title}
                      </p>
                      <p className="mt-2.5 text-sm leading-relaxed text-neutral-600 md:text-base">
                        {processSectionContent.processTime.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column — premium step journey */}
              <div className="relative border-t border-neutral-200/50 lg:border-l lg:border-t-0">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.35]"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgb(15 118 110 / 0.05) 1px, transparent 1px),
                      linear-gradient(to bottom, rgb(15 118 110 / 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-50/40 to-transparent" />

                <div className="relative p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
                  {/* Vertical step timeline */}
                  <div className="relative">
                    <div
                      aria-hidden
                      className="absolute bottom-4 left-[1.35rem] top-4 hidden w-0.5 bg-gradient-to-b from-amber-400 via-brand-500 to-accent-500 sm:block"
                    />

                    <ol className="relative space-y-5 sm:space-y-6">
                      {processSteps.map((step, index) => {
                        const StepIcon = iconMap[step.icon] ?? Calendar;
                        const theme = accentThemes[step.accent];
                        const isLast = index === processSteps.length - 1;

                        return (
                          <li key={step.step} className="relative">
                            {/* Timeline node — desktop */}
                            <span
                              aria-hidden
                              className={cn(
                                "absolute left-0 top-7 z-10 hidden size-[2.75rem] items-center justify-center rounded-2xl border-[3px] border-white font-display text-sm font-bold text-white shadow-lg sm:flex",
                                theme.stepBadge
                              )}
                            >
                              {step.step}
                            </span>

                            <article
                              className={cn(
                                "group relative overflow-hidden rounded-[1.35rem] border bg-white/90 p-5 shadow-card backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated sm:ml-[4.25rem] sm:p-6",
                                theme.cardBorder
                              )}
                            >
                              <StepHoverShine />

                              <div
                                aria-hidden
                                className={cn(
                                  "pointer-events-none absolute -right-1 -top-1 select-none font-display text-5xl font-black leading-none opacity-[0.07] transition-opacity duration-500 group-hover:opacity-[0.12] sm:text-8xl",
                                  step.accent === "amber" && "text-amber-600",
                                  step.accent === "brand" && "text-brand-600",
                                  step.accent === "orange" && "text-accent-600"
                                )}
                              >
                                0{step.step}
                              </div>

                              <div
                                className={cn(
                                  "absolute inset-x-0 top-0 h-1 bg-gradient-to-r opacity-80",
                                  theme.bar
                                )}
                              />

                              <div className="relative flex gap-4 sm:gap-5">
                                {/* Mobile step badge + icon */}
                                <div className="flex shrink-0 flex-col items-center gap-2 sm:hidden">
                                  <span
                                    className={cn(
                                      "flex size-8 items-center justify-center rounded-xl font-display text-sm font-bold text-white shadow-md",
                                      theme.stepBadge
                                    )}
                                  >
                                    {step.step}
                                  </span>
                                  <span
                                    className={cn(
                                      "flex size-10 items-center justify-center rounded-xl",
                                      theme.icon
                                    )}
                                  >
                                    {step.step === 1 ? (
                                      <UserRound className="size-4" />
                                    ) : (
                                      <StepIcon className="size-4" />
                                    )}
                                  </span>
                                </div>

                                {/* Desktop icon */}
                                <span
                                  className={cn(
                                    "relative hidden size-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-105 sm:flex",
                                    theme.icon
                                  )}
                                >
                                  {step.step === 1 ? (
                                    <UserRound className="size-5" />
                                  ) : (
                                    <StepIcon className="size-5" />
                                  )}
                                </span>

                                <div className="min-w-0 flex-1">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <h3 className="font-display text-lg font-bold leading-snug text-neutral-900 sm:text-xl">
                                      {step.title}
                                    </h3>
                                    <span
                                      className={cn(
                                        "hidden rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider sm:inline-flex",
                                        step.accent === "amber" && "bg-amber-100 text-amber-800",
                                        step.accent === "brand" && "bg-brand-100 text-brand-800",
                                        step.accent === "orange" && "bg-accent-100 text-accent-800"
                                      )}
                                    >
                                      Step {step.step}
                                    </span>
                                  </div>

                                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:mt-2.5">
                                    {step.description}
                                  </p>

                                  {step.options && (
                                    <div className="mt-4 flex flex-wrap gap-2.5">
                                      {step.options.map((opt) => (
                                        <div
                                          key={opt.label}
                                          className={cn(
                                            "inline-flex items-center gap-2.5 rounded-full border px-3.5 py-2 text-sm font-semibold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
                                            opt.icon === "phone"
                                              ? "border-accent-200 bg-accent-50 text-accent-800"
                                              : "border-brand-200 bg-brand-50 text-brand-800"
                                          )}
                                        >
                                          {opt.icon === "phone" ? (
                                            <Phone className="size-3.5" />
                                          ) : (
                                            <Video className="size-3.5" />
                                          )}
                                          {opt.label}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </article>

                            {!isLast && (
                              <div
                                aria-hidden
                                className="my-3 flex justify-center sm:ml-[4.25rem] sm:justify-start"
                              >
                                <span className="flex flex-col items-center gap-0.5 sm:hidden">
                                  <span className="h-3 w-px bg-brand-300/70" />
                                  <ArrowRight className="size-3.5 rotate-90 text-brand-400" />
                                  <span className="h-3 w-px bg-brand-300/70" />
                                </span>
                              </div>
                            )}
                          </li>
                        );
                      })}
                    </ol>
                  </div>

                  {/* Approval timeline */}
                  <div className="mt-8 sm:mt-10">
                    <div className="overflow-hidden rounded-2xl border border-brand-200/60 bg-gradient-to-br from-brand-50/80 via-white to-accent-50/50 p-5 shadow-soft sm:p-6">
                      <div className="mb-5 flex items-center justify-center gap-2">
                        <Clock className="size-4 text-brand-600" />
                        <p className="text-xs font-bold uppercase tracking-widest text-brand-800">
                          Typical approval timeline
                        </p>
                      </div>

                      <div className="relative">
                        <div
                          aria-hidden
                          className="absolute left-[12.5%] right-[12.5%] top-[0.65rem] h-1 rounded-full bg-gradient-to-r from-brand-300 via-brand-500 to-accent-500"
                        />

                        <div className="relative grid grid-cols-4 gap-2">
                          {timeline.map((point, i) => {
                            const isLast = i === timeline.length - 1;

                            return (
                              <div
                                key={point.label}
                                className="flex flex-col items-center text-center"
                              >
                                <span
                                  className={cn(
                                    "relative z-10 flex size-7 items-center justify-center rounded-full border-[3px] border-white text-[10px] font-bold shadow-md sm:size-8 sm:text-xs",
                                    isLast
                                      ? "bg-accent-500 text-white ring-2 ring-accent-200/80"
                                      : "bg-brand-600 text-white ring-2 ring-brand-200/80"
                                  )}
                                >
                                  {i + 1}
                                </span>
                                <span
                                  className={cn(
                                    "mt-2.5 whitespace-nowrap text-[10px] font-semibold leading-tight sm:text-xs",
                                    isLast ? "text-accent-700" : "text-neutral-600"
                                  )}
                                >
                                  {point.label}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
