import { Check, ShieldCheck, Sparkles, Star, Zap } from "lucide-react";
import { pricingPlans } from "@/data/homepage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const planThemes = {
  basic: {
    bar: "from-brand-400 to-brand-700",
    badge: "bg-brand-50 text-brand-800 ring-brand-200/80",
    price: "text-brand-700",
    priceBg: "border-brand-100/80 bg-brand-50/50",
    check: "bg-brand-600 text-white",
    featureRow: "border-brand-100/70 bg-white",
    button: "primary" as const,
  },
  gold: {
    bar: "from-accent-400 to-accent-600",
    badge: "bg-accent-50 text-accent-800 ring-accent-200/80",
    price: "text-accent-600",
    priceBg: "border-accent-200/80 bg-accent-50/60",
    check: "bg-accent-500 text-white",
    featureRow: "border-accent-100/80 bg-white",
    button: "accent" as const,
  },
  platinum: {
    bar: "from-brand-700 to-brand-950",
    badge: "bg-brand-50 text-brand-900 ring-brand-200/80",
    price: "text-brand-900",
    priceBg: "border-brand-200/80 bg-brand-50/60",
    check: "bg-brand-800 text-white",
    featureRow: "border-brand-100/70 bg-white",
    button: "primary" as const,
  },
} as const;

function CardShine() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      <div className="absolute -inset-full top-0 block -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="relative overflow-hidden py-16 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-brand-50/25 to-accent-50/20" />
      <div className="pointer-events-none absolute -left-24 top-1/3 size-72 rounded-full bg-brand-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-accent-200/25 blur-3xl" />

      <Container className="relative">
        <div className="rounded-[2rem] bg-gradient-to-br from-brand-200/45 via-white/90 to-accent-200/35 p-[1px] shadow-elevated md:rounded-[2.5rem]">
          <div className="rounded-[calc(2rem-1px)] bg-gradient-to-br from-[#FAFDFC] via-white to-[#FFFBF7] p-6 sm:p-8 md:p-10 lg:p-12 md:rounded-[calc(2.5rem-1px)]">
            {/* Header */}
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-800 shadow-sm">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-400 opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-brand-600" />
                </span>
                <Sparkles className="size-3.5 text-brand-600" />
                Pricing &amp; Plans
              </span>
              <h2 className="section-heading mt-5 text-neutral-900">
                Transparent{" "}
                <span className="text-gradient-brand">Pricing</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
                Fair pricing for a medical marijuana card with no hidden or unexpected costs.
              </p>
            </div>

            {/* Value props strip */}
            <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3 sm:mt-12">
              {[
                { icon: Zap, label: "Same-day approval", accent: "brand" },
                { icon: ShieldCheck, label: "No hidden fees", accent: "emerald" },
                { icon: Star, label: "Money-back guarantee", accent: "accent" },
              ].map(({ icon: Icon, label, accent }) => (
                <div
                  key={label}
                  className={cn(
                    "flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-xs font-bold uppercase tracking-wide sm:text-sm",
                    accent === "brand" && "border-brand-200/70 bg-brand-50/50 text-brand-800",
                    accent === "emerald" && "border-emerald-200/70 bg-emerald-50/50 text-emerald-900",
                    accent === "accent" && "border-accent-200/70 bg-accent-50/50 text-accent-900"
                  )}
                >
                  <Icon className="size-4 shrink-0" />
                  {label}
                </div>
              ))}
            </div>

            {/* Plans — overflow-visible so recommendation badge is not clipped */}
            <div className="mt-12 grid items-end gap-6 md:mt-14 lg:grid-cols-3 lg:gap-6">
              {pricingPlans.map((plan) => {
                const theme = planThemes[plan.id as keyof typeof planThemes] ?? planThemes.basic;

                return (
                  <div
                    key={plan.id}
                    className={cn("relative", plan.highlighted && "lg:pt-4")}
                  >
                    {plan.highlighted && (
                      <div className="mb-3 flex justify-center lg:absolute lg:-top-1 lg:left-0 lg:right-0 lg:z-20 lg:mb-0">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-accent-500/40 ring-4 ring-white">
                          <Star className="size-3.5 fill-white text-white" />
                          Our Recommendation
                        </span>
                      </div>
                    )}

                    <article
                      className={cn(
                        "group relative flex flex-col overflow-hidden rounded-[1.35rem] border bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-elevated sm:rounded-2xl",
                        plan.highlighted
                          ? "border-accent-300 ring-2 ring-accent-500/20 lg:scale-[1.02]"
                          : "border-neutral-200/80"
                      )}
                    >
                      <CardShine />
                      {plan.highlighted ? (
                        <div className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-accent-400/15 blur-2xl" />
                      ) : null}
                      <div className={cn("h-1.5 rounded-t-[inherit] bg-gradient-to-r", theme.bar)} />

                      <div className="flex flex-1 flex-col p-6 sm:p-7">
                        <span
                          className={cn(
                            "inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ring-1",
                            theme.badge
                          )}
                        >
                          {plan.badge}
                        </span>

                        <h3 className="mt-4 font-display text-2xl font-bold text-neutral-900">
                          {plan.name}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                          {plan.description}
                        </p>

                        {/* Price block */}
                        <div
                          className={cn(
                            "mt-6 rounded-2xl border p-5",
                            theme.priceBg
                          )}
                        >
                          <div className="flex items-baseline gap-0.5">
                            <span className="text-xl font-bold text-neutral-500">$</span>
                            <span
                              className={cn(
                                "stat-value font-display text-4xl font-extrabold leading-none tracking-tight sm:text-5xl",
                                theme.price
                              )}
                            >
                              {plan.price}
                            </span>
                          </div>
                          <p className="mt-2 text-sm font-semibold text-neutral-600">
                            One-time payment
                          </p>
                        </div>

                        {/* Features */}
                        <ul className="mt-6 flex-1 space-y-2.5">
                          {plan.features.map((feature) => (
                            <li
                              key={feature}
                              className={cn(
                                "flex items-start gap-3 rounded-xl border px-3.5 py-3 text-sm font-medium text-neutral-800 shadow-sm",
                                theme.featureRow
                              )}
                            >
                              <span
                                className={cn(
                                  "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full shadow-sm",
                                  theme.check
                                )}
                              >
                                <Check className="size-3.5" strokeWidth={3} />
                              </span>
                              <span className="leading-snug">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-8">
                        <Button href="#apply" variant={theme.button} fullWidth size="lg">
                          Get Started
                        </Button>
                          <p className="mt-3 text-center text-xs font-medium text-neutral-500">
                            One-time fee · No recurring charges
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
