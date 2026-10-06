import { MapPin } from "lucide-react";
import { contactPageContent } from "@/data/contact";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getFullAddress, getGoogleMapsEmbedUrl, getGoogleMapsSearchUrl } from "@/lib/maps";
import { cn } from "@/lib/utils";

type OfficeMapSectionProps = {
  className?: string;
};

export function OfficeMapSection({ className }: OfficeMapSectionProps) {
  const { map } = contactPageContent;
  const address = getFullAddress();

  return (
    <section className={cn("relative overflow-hidden py-16 md:py-24", className)}>
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-50/60 via-white to-brand-50/40" />

      <Container className="relative">
        <SectionHeader
          eyebrow={map.eyebrow}
          title={map.title}
          description={map.description}
        />

        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-3xl border border-brand-200/60 bg-white shadow-elevated">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brand-100 bg-gradient-to-r from-brand-50/80 to-white px-5 py-4 sm:px-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-neutral-900 sm:text-base">
                    {address}
                  </p>
                  <p className="mt-0.5 text-xs text-neutral-500 sm:text-sm">
                    {contactPageContent.methods.find((m) => m.title === "Office")?.description}
                  </p>
                </div>
              </div>
              <a
                href={getGoogleMapsSearchUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-white px-4 py-2 text-xs font-semibold text-brand-800 transition-colors hover:border-brand-300 hover:bg-brand-50 sm:text-sm"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="relative aspect-[16/10] w-full sm:aspect-[16/9] lg:aspect-[21/9]">
              <iframe
                title={`Map showing ${address}`}
                src={getGoogleMapsEmbedUrl()}
                className="absolute inset-0 size-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
