import {
  ArrowRight,
  BadgeCheck,
  Calendar,
  Clock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const trustPoints = [
  { icon: Clock, label: "15–30 min avg. approval" },
  { icon: ShieldCheck, label: "HIPAA-compliant platform" },
  { icon: BadgeCheck, label: "100% money-back guarantee" },
];

function CardShine() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      <div className="absolute -inset-full top-0 block -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-50/40 via-white to-[#FAFAF7]" />

      <Container className="relative">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-800 via-brand-900 to-neutral-950 p-[1px] shadow-elevated md:rounded-[2.5rem]">
          <div className="relative overflow-hidden rounded-[calc(2rem-1px)] md:rounded-[calc(2.5rem-1px)]">
            <div className="bg-grid-pattern absolute inset-0 opacity-25" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(45,212,191,0.18),transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(249,115,22,0.14),transparent_45%)]" />
            <div className="pointer-events-none absolute -left-20 top-0 size-72 rounded-full bg-brand-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 bottom-0 size-64 rounded-full bg-accent-500/10 blur-3xl" />

            <div className="relative grid gap-8 p-6 sm:p-8 md:p-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-12 lg:p-12 xl:p-14">
              {/* Left — copy & CTAs */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-100 backdrop-blur-sm">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-300 opacity-60" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-brand-300" />
                  </span>
                  <Sparkles className="size-3.5 text-accent-300" />
                  Start Today
                </span>

                <h2 className="section-heading mt-5 text-white">
                  Ready to Get Your{" "}
                  <span className="bg-gradient-to-r from-brand-200 to-accent-300 bg-clip-text text-transparent">
                    Medical Marijuana Card?
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-100/90 sm:text-lg">
                  Book your appointment today and talk to a licensed California doctor within{" "}
                  <span className="stat-value font-semibold text-white">24–48 hours</span> — with a{" "}
                  <span className="stat-value font-semibold text-white">100%</span> money-back
                  guarantee if you&apos;re not approved.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button href="#apply" variant="accent" size="lg" className="shadow-lg shadow-accent-600/30">
                    Book My Appointment
                    <ArrowRight className="size-4" />
                  </Button>
                  <Button
                    href="/faq"
                    variant="outline"
                    size="lg"
                    className="border-white/25 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                  >
                    Read FAQ
                  </Button>
                </div>

                <ul className="mt-8 flex flex-wrap gap-3">
                  {trustPoints.map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-brand-100/90 backdrop-blur-sm"
                    >
                      <Icon className="size-3.5 shrink-0 text-brand-300" />
                      {label}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — appointment card */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.07] p-[1px] backdrop-blur-md">
                <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 sm:p-7">
                  <CardShine />
                  <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-accent-400/15 blur-2xl" />

                  <div className="relative flex items-start justify-between gap-4">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 text-white shadow-lg shadow-accent-600/30">
                      <Calendar className="size-5" />
                    </span>
                    <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-200 ring-1 ring-emerald-400/30">
                      Same-day slots
                    </span>
                  </div>

                  <p className="relative mt-5 font-display text-xl font-bold text-white sm:text-2xl">
                    Your evaluation in 3 simple steps
                  </p>
                  <p className="relative mt-2 text-sm leading-relaxed text-brand-100/80">
                    Apply online, meet your doctor via secure telehealth, and receive your
                    recommendation digitally — often the same day.
                  </p>

                  <ol className="relative mt-6 space-y-3">
                    {[
                      "Complete the online application",
                      "Video consult with a CA-licensed doctor",
                      "Download your MMJ recommendation",
                    ].map((step, index) => (
                      <li
                        key={step}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/90"
                      >
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-500/30 font-display text-xs font-bold text-brand-100">
                          {index + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>

                  <div className="relative mt-6 rounded-xl border border-brand-400/20 bg-brand-500/10 px-4 py-3.5">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-200">
                      Plans starting at
                    </p>
                    <p className="stat-value mt-0.5 font-display text-3xl font-extrabold text-white">
                      $55
                    </p>
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
