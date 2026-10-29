import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

const trustNotes = ["Quick evaluation", "100% online", "HIPAA-compliant"] as const;

export function GonePage() {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#f4faf6_0%,#eef6f1_55%,#f8faf7_100%)]">
      <div
        className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-[0.38]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(15,118,110,0.08),transparent_60%)]"
        aria-hidden="true"
      />

      <Container className="relative flex min-h-[70vh] flex-col items-center justify-center py-20 text-center sm:py-28">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-700/80">
          Error 410 · Gone
        </p>

        <LinkLogo />

        <p className="mt-3 text-sm font-semibold text-brand-800/80">{siteConfig.address.city}</p>

        <h1 className="mt-8 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-[#123c31] sm:text-5xl lg:text-[3.4rem]">
          This Page Has Been Permanently Removed
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
          The content you are looking for is no longer available and has been removed as
          part of our site update. Your path to a Santa Ana medical marijuana card is still
          right here.
        </p>

        <div className="mt-9 flex w-full max-w-lg flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            href="/#apply"
            variant="secondary"
            size="lg"
            className="w-full rounded-full bg-[#123c31] px-7 hover:bg-[#0d2e26] sm:w-auto"
          >
            Start Your MMJ Consultation
          </Button>
          <Button
            href="/"
            variant="outline"
            size="lg"
            className="w-full rounded-full border-neutral-200 bg-white px-7 text-[#123c31] hover:border-brand-300 hover:bg-white sm:w-auto"
          >
            Go to Homepage
          </Button>
        </div>

        <p className="mt-8 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-medium text-neutral-500 sm:text-sm">
          <ShieldCheck className="size-4 text-brand-600" aria-hidden="true" />
          {trustNotes.map((note, index) => (
            <span key={note} className="inline-flex items-center gap-3">
              {index > 0 ? (
                <span className="text-neutral-300" aria-hidden="true">
                  ·
                </span>
              ) : null}
              {note}
            </span>
          ))}
        </p>
      </Container>
    </section>
  );
}

function LinkLogo() {
  return (
    <Link href="/" className="mt-8 inline-flex flex-col items-center" aria-label={`${siteConfig.name} home`}>
      <Image
        src="/brand-logo.webp"
        alt={siteConfig.name}
        width={1917}
        height={368}
        className="h-auto w-56 sm:w-64"
        sizes="(max-width: 640px) 224px, 256px"
        priority
      />
    </Link>
  );
}
