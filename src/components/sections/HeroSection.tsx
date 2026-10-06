import { CheckCircle2, Clock, DollarSign, Shield, Star } from "lucide-react";
import { heroContent } from "@/data/homepage";
import { HeroDoctorVisual } from "@/components/sections/HeroDoctorVisual";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const featureIcons = [Shield, Clock, DollarSign];

const avatars = ["MG", "JT", "SL", "DR"];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-[#0a3532]" />
      <div className="pointer-events-none absolute -right-20 top-1/4 size-72 rounded-full bg-brand-500/10 blur-3xl" />

      <Container className="relative py-16 md:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Visual */}
          <div className="animate-fade-up relative lg:pr-4">
            <HeroDoctorVisual />
          </div>

          {/* Copy */}
          <div className="animate-fade-up">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-500/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-accent-200 ring-1 ring-accent-400/25">
                <span className="whitespace-nowrap">{heroContent.badge}</span>
              </span>
              <div className="flex items-center gap-2.5 text-sm text-brand-100/90">
                <div className="flex -space-x-2">
                  {avatars.map((initials) => (
                    <span
                      key={initials}
                      className="flex size-7 items-center justify-center rounded-full border-2 border-brand-900 bg-brand-700 text-[10px] font-bold"
                    >
                      {initials}
                    </span>
                  ))}
                </div>
                <span className="flex items-center gap-1 font-medium">
                  <Star className="size-3.5 fill-accent-400 text-accent-400" />
                  <span className="stat-value">4.9 rating</span>
                </span>
              </div>
            </div>

            <div className="max-w-xl">
              <h1 className="font-display text-[2rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
                Apply for a{" "}
                <span className="text-gradient-brand">Santa Ana</span>{" "}
                Medical Marijuana Card Today
              </h1>

              <p className="mt-6 text-base leading-relaxed text-brand-100/85 sm:text-lg">
                {heroContent.subtitle}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Button href={heroContent.ctaPrimary.href} variant="accent" size="lg">
                {heroContent.ctaPrimary.label}
              </Button>
              <Button
                href={heroContent.ctaSecondary.href}
                variant="outline"
                size="lg"
                className="border-white/25 bg-transparent text-white hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                {heroContent.ctaSecondary.label}
              </Button>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-soft">
              <div className="h-0.5 bg-gradient-to-r from-brand-400 to-accent-500" />
              <ul className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {heroContent.stats.map((stat, i) => {
                  const Icon = featureIcons[i] ?? CheckCircle2;
                  return (
                    <li
                      key={stat.label}
                      className={cn(
                        "flex items-center gap-3 p-4 sm:p-5",
                        i === 1 && "sm:border-x sm:border-white/10"
                      )}
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-500/20 text-brand-200">
                        <Icon className="size-4" />
                      </span>
                      <div>
                        <p className="stat-value font-display text-base font-bold leading-tight sm:text-lg">
                          {stat.value}
                        </p>
                        <p className="mt-0.5 text-xs leading-snug text-brand-100/70 sm:text-sm">{stat.label}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
