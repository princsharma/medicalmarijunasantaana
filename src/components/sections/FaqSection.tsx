import { MessageCircle, Sparkles } from "lucide-react";
import { FaqInteractivePanel } from "@/components/sections/FaqInteractivePanel";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FaqSection() {
  return (
    <section id="faq" className="relative overflow-hidden py-16 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-brand-50/20 to-[#FAFAF7]" />
      <div className="pointer-events-none absolute -left-24 top-1/3 size-72 rounded-full bg-brand-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-64 rounded-full bg-accent-200/20 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgb(20 184 166 / 0.08), transparent 40%), radial-gradient(circle at 80% 80%, rgb(249 115 22 / 0.06), transparent 35%)",
        }}
      />

      <Container className="relative">
        <div className="rounded-[2rem] bg-gradient-to-br from-brand-200/40 via-white/90 to-accent-200/30 p-[1px] shadow-elevated md:rounded-[2.5rem]">
          <div className="rounded-[calc(2rem-1px)] bg-gradient-to-br from-[#FAFDFC] via-white to-[#FAFAF7] p-6 sm:p-8 md:p-10 lg:p-12 md:rounded-[calc(2.5rem-1px)]">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-800 shadow-sm">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-400 opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-brand-600" />
                </span>
                <Sparkles className="size-3.5 text-brand-600" />
                FAQ
              </span>
              <h2 className="section-heading mt-5 text-neutral-900">
                Frequently Asked{" "}
                <span className="text-gradient-brand">Questions</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
                Everything about getting your Santa Ana medical marijuana card online — pricing,
                timing, privacy, and what happens after approval.
              </p>
            </div>

            <div className="mt-12 md:mt-14">
              <FaqInteractivePanel />
            </div>

            <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-brand-200/60 bg-gradient-to-r from-brand-50/50 via-white to-accent-50/30 px-5 py-5 text-center sm:flex-row sm:text-left sm:px-6 md:mt-12">
              <div className="flex items-center gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 ring-1 ring-brand-200/80">
                  <MessageCircle className="size-5" />
                </span>
                <div>
                  <p className="font-display text-base font-bold text-neutral-900 sm:text-lg">
                    Ready to get started?
                  </p>
                  <p className="text-sm text-neutral-600">
                    All your questions answered — start your application in minutes.
                  </p>
                </div>
              </div>
              <Button href="#apply" variant="primary" className="shrink-0">
                Start Application
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
