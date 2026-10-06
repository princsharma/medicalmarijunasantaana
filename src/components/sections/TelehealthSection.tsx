import { Clock, Lock, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { telehealthContent } from "@/data/homepage";
import { TelehealthApplyForm } from "@/components/forms/TelehealthApplyForm";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const statIcons = [Clock, Zap, ShieldCheck] as const;

export function TelehealthSection() {
  return (
    <section id="apply" className="relative overflow-hidden py-16 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-35" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50/70 via-white to-accent-50/40" />
      <div className="pointer-events-none absolute -left-28 top-1/4 size-80 rounded-full bg-brand-200/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-72 rounded-full bg-accent-200/30 blur-3xl" />

      <Container className="relative">
        <div className="rounded-[2rem] bg-gradient-to-br from-brand-200/50 via-white/90 to-accent-200/40 p-[1px] shadow-elevated md:rounded-[2.5rem]">
          <div className="overflow-hidden rounded-[calc(2rem-1px)] bg-gradient-to-br from-[#FAFDFC] via-white to-[#FFFBF5] md:rounded-[calc(2.5rem-1px)]">
            <div className="grid items-center gap-10 p-6 sm:p-8 md:gap-12 lg:grid-cols-2 lg:gap-16 lg:p-10 xl:p-12">
              {/* Content */}
              <div className="relative">
                <div className="pointer-events-none absolute -left-16 top-0 size-40 rounded-full bg-brand-100/50 blur-3xl" />

                <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-200/70 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-800 shadow-sm">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-400 opacity-60" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-brand-600" />
                  </span>
                  <Sparkles className="size-3.5 text-brand-600" />
                  {telehealthContent.badge}
                </span>

                <h2 className="section-heading mt-6 text-neutral-900">
                  {telehealthContent.title}
                </h2>

                <div className="mt-5 space-y-4 border-l-[3px] border-brand-300/70 pl-5">
                  {telehealthContent.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 24)}
                      className="text-base leading-relaxed text-neutral-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-8 overflow-hidden rounded-2xl border border-brand-200/60 bg-white/80 shadow-soft backdrop-blur-sm">
                  <ul className="grid divide-y divide-brand-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                    {telehealthContent.stats.map((stat, i) => {
                      const Icon = statIcons[i] ?? Clock;
                      return (
                        <li
                          key={stat.label}
                          className="group flex items-center gap-3 p-4 transition-colors hover:bg-brand-50/50 sm:flex-col sm:items-center sm:p-5 sm:text-center"
                        >
                          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md shadow-brand-600/20 transition-transform duration-300 group-hover:scale-105">
                            <Icon className="size-4" />
                          </span>
                          <div>
                            <p className="font-display text-lg font-extrabold text-brand-800 sm:text-xl">
                              {stat.value}
                            </p>
                            <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-500 sm:text-xs">
                              {stat.label}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* HIPAA trust */}
                <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-brand-200/60 bg-gradient-to-r from-brand-50/80 to-white px-4 py-3 shadow-sm">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 ring-1 ring-brand-200/80">
                    <Lock className="size-4 text-brand-700" />
                  </span>
                  <p className="text-sm font-semibold leading-snug text-neutral-700">
                    Your information is encrypted &amp; HIPAA-compliant
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="relative lg:pl-2">
                <div className="pointer-events-none absolute -inset-3 rounded-[1.75rem] border border-brand-200/40 sm:-inset-4 sm:rounded-[2rem]" />
                <div className="pointer-events-none absolute -inset-6 rounded-[2.25rem] border border-accent-200/20 sm:-inset-8" />
                <TelehealthApplyForm
                  className={cn(
                    "relative rounded-[1.35rem] border-brand-200/70 shadow-elevated sm:rounded-2xl"
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
