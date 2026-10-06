import Image from "next/image";
import {
  BadgeCheck,
  Percent,
  Scale,
  ShieldCheck,
  Sprout,
  Store,
} from "lucide-react";
import { benefits, benefitsSectionContent } from "@/data/homepage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const tax = benefits.find((b) => b.id === "tax")!;
const dispensary = benefits.find((b) => b.id === "dispensary")!;
const possession = benefits.find((b) => b.id === "possession")!;
const cultivation = benefits.find((b) => b.id === "cultivation")!;

const cardHover =
  "group transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-elevated";

function CardShine() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      <div className="absolute -inset-full top-0 block -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}

export function BenefitsSection() {
  return (
    <section id="benefits" className="relative overflow-hidden py-16 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-35" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-50/50 via-white to-accent-50/25" />
      <div className="pointer-events-none absolute -right-24 top-20 size-80 rounded-full bg-brand-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 size-72 rounded-full bg-accent-200/25 blur-3xl" />

      <Container className="relative">
        <div className="rounded-[2rem] bg-gradient-to-br from-brand-200/45 via-white/90 to-accent-200/35 p-[1px] shadow-elevated md:rounded-[2.5rem]">
          <div className="overflow-hidden rounded-[calc(2rem-1px)] bg-gradient-to-br from-[#FAFDFC] via-white to-[#FFFBF7] p-6 sm:p-8 md:p-10 lg:p-12 md:rounded-[calc(2.5rem-1px)]">
            {/* Header */}
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-800 shadow-sm">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-400 opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-brand-600" />
                </span>
                MMJ Advantages
              </span>
              <h2 className="section-heading mt-5 text-neutral-900">
                {benefitsSectionContent.title.replace("Santa Ana", "")}
                <span className="text-gradient-brand">Santa Ana</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
                {benefitsSectionContent.description}
              </p>
            </div>

            <div className="mt-12 space-y-5 md:mt-14 md:space-y-6">
              {/* Featured — Tax savings banner */}
              <article
                className={cn(
                  cardHover,
                  "relative overflow-hidden rounded-[1.35rem] border border-brand-200/70 bg-white p-6 shadow-card sm:rounded-2xl sm:p-8"
                )}
              >
                <CardShine />
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 to-brand-700" />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-[7rem] font-black leading-none text-brand-100 sm:text-[9rem]"
                >
                  %
                </div>

                <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/25">
                      <Percent className="size-6" />
                    </span>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-brand-600">
                        Savings
                      </span>
                      <p className="stat-value mt-1 font-display text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
                        {tax.stat}
                      </p>
                    </div>
                  </div>
                  <div className="max-w-xl lg:text-right">
                    <h3 className="font-display text-xl font-bold text-neutral-900">{tax.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
                      {tax.description}
                    </p>
                  </div>
                </div>
              </article>

              {/* Three benefit cards */}
              <div className="grid auto-rows-fr gap-5 md:grid-cols-3 md:gap-6">
                {/* Dispensary */}
                <article
                  className={cn(
                    cardHover,
                    "relative min-h-[260px] overflow-hidden rounded-[1.35rem] border border-neutral-200/70 shadow-card sm:min-h-[300px] sm:rounded-2xl"
                  )}
                >
                  <Image
                    src="/benefits/dispensary.webp"
                    alt="Certified medical dispensary products"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/50 to-neutral-900/20" />
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 to-accent-500" />

                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-800 shadow-md backdrop-blur-sm">
                    <Store className="size-3.5" />
                    {dispensary.stat}
                  </span>

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                      {dispensary.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/85">
                      {dispensary.description}
                    </p>
                    <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-sm">
                      <ShieldCheck className="size-3.5" />
                      Medical-only inventory
                    </p>
                  </div>
                </article>

                {/* Possession */}
                <article
                  className={cn(
                    cardHover,
                    "relative overflow-hidden rounded-[1.35rem] border border-brand-200/70 bg-white p-6 shadow-card sm:rounded-2xl sm:p-7"
                  )}
                >
                  <CardShine />
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 to-brand-700" />
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/25 transition-transform duration-500 group-hover:scale-105">
                    <Scale className="size-5" />
                  </span>
                  <p className="stat-value mt-5 font-display text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
                    {possession.stat}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold text-neutral-900">
                    {possession.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {possession.description}
                  </p>
                  <div className="mt-5 flex items-end gap-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <span
                        key={n}
                        className={cn(
                          "w-2 rounded-t-sm bg-gradient-to-t from-brand-700 to-brand-400 transition-all duration-300 group-hover:opacity-100",
                          n <= 4 ? "opacity-40" : "opacity-100"
                        )}
                        style={{ height: `${12 + n * 4}px` }}
                      />
                    ))}
                    <span className="ml-1 text-[10px] font-bold uppercase tracking-wide text-brand-700">
                      vs rec
                    </span>
                  </div>
                </article>

                {/* Cultivation */}
                <article
                  className={cn(
                    cardHover,
                    "relative overflow-hidden rounded-[1.35rem] border border-accent-200/70 bg-white p-6 shadow-card sm:rounded-2xl sm:p-7"
                  )}
                >
                  <CardShine />
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-400 to-accent-600" />
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/25 transition-transform duration-500 group-hover:scale-105">
                    <Sprout className="size-5" />
                  </span>
                  <p className="stat-value mt-5 font-display text-3xl font-extrabold tracking-tight text-accent-700 sm:text-4xl">
                    {cultivation.stat}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold text-neutral-900">
                    {cultivation.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {cultivation.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <span
                        key={i}
                        className="flex size-8 items-center justify-center rounded-lg bg-accent-100 text-accent-700 transition-transform duration-300 group-hover:scale-105"
                        style={{ transitionDelay: `${i * 35}ms` }}
                      >
                        <Sprout className="size-3.5" />
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="mt-10 flex flex-col items-center gap-4 border-t border-brand-100/80 pt-10 text-center md:mt-12">
              <p className="inline-flex items-center gap-2 rounded-2xl border border-brand-200/60 bg-white/90 px-4 py-2.5 text-sm font-semibold text-neutral-700 shadow-sm">
                <BadgeCheck className="size-4 text-brand-600" />
                All benefits apply statewide for valid MMJ cardholders
              </p>
              <Button href="#apply" variant="accent" size="lg">
                Get MMJ Card Now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
