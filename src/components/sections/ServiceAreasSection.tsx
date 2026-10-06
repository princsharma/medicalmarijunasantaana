"use client";

import { useMemo, useState } from "react";
import {
  ChevronDown,
  Globe,
  MapPin,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { serviceAreas } from "@/data/homepage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const INITIAL_COUNT = 24;

const regionHighlights = [
  { label: "Orange County", value: "Santa Ana HQ", accent: "brand" as const },
  { label: "Southern CA", value: "40+ cities", accent: "accent" as const },
  { label: "Statewide", value: "Telehealth", accent: "brand" as const },
];

const highlightStyles = {
  brand: "from-brand-500/10 via-brand-50/80 to-white border-brand-200/70",
  accent: "from-accent-500/10 via-accent-50/80 to-white border-accent-200/70",
};

export function ServiceAreasSection() {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return serviceAreas;
    return serviceAreas.filter((city) => city.toLowerCase().includes(normalized));
  }, [query]);

  const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <section id="areas" className="relative overflow-hidden py-16 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FAFAF7] via-white to-brand-50/30" />
      <div className="pointer-events-none absolute -left-20 top-1/4 size-72 rounded-full bg-brand-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 size-80 rounded-full bg-accent-200/20 blur-3xl" />

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
                California Coverage
              </span>
              <h2 className="section-heading mt-5 text-neutral-900">
                Medical Marijuana Services{" "}
                <span className="text-gradient-brand">Across California</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
                Licensed medical marijuana evaluations and support for patients throughout
                Santa Ana and surrounding cities.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-10 md:mt-14">
              {/* Cities panel */}
              <div className="overflow-hidden rounded-2xl border border-neutral-200/70 bg-white/90 shadow-soft backdrop-blur-sm">
                <div className="border-b border-neutral-200/60 bg-gradient-to-r from-brand-50/60 via-white to-accent-50/40 px-4 py-4 sm:px-5">
                  <div className="relative">
                    <Search
                      className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-brand-500"
                      aria-hidden="true"
                    />
                    <input
                      type="search"
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Search cities..."
                      aria-label="Search service area cities"
                      className="h-11 w-full rounded-xl border border-neutral-200/80 bg-white pl-10 pr-10 text-sm text-neutral-900 shadow-inner outline-none transition-all placeholder:text-neutral-400 focus:border-brand-300 focus:ring-2 focus:ring-brand-500/20"
                    />
                    {query ? (
                      <button
                        type="button"
                        onClick={() => setQuery("")}
                        aria-label="Clear search"
                        className="absolute right-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-lg text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700"
                      >
                        <X className="size-3.5" />
                      </button>
                    ) : null}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200/60 px-5 py-3.5 sm:px-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-800">
                    Service areas
                  </p>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-100 px-3 py-1 text-[11px] font-bold text-brand-800 ring-1 ring-brand-200/80">
                    <MapPin className="size-3" />
                    <span className="stat-value">
                      {filtered.length} {query ? "found" : "cities"}
                    </span>
                  </span>
                </div>

                {visible.length > 0 ? (
                  <div className="grid grid-cols-2 gap-2.5 p-4 sm:grid-cols-3 sm:gap-3 sm:p-5 md:grid-cols-4">
                    {visible.map((city) => {
                      const isHome = city === "Santa Ana";

                      return (
                        <span
                          key={city}
                          className={cn(
                            "group relative inline-flex min-h-[2.85rem] items-center justify-center gap-1.5 overflow-hidden rounded-xl border px-2.5 py-2 text-center text-xs font-semibold leading-tight transition-all duration-200 sm:min-h-[3rem] sm:px-3 sm:py-2.5 sm:text-sm",
                            isHome
                              ? "border-brand-300 bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-md shadow-brand-700/25 hover:-translate-y-0.5"
                              : "border-neutral-200/80 bg-white text-neutral-700 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50/50 hover:text-brand-800 hover:shadow-sm"
                          )}
                        >
                          {!isHome ? (
                            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-brand-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                          ) : null}
                          <MapPin
                            className={cn(
                              "relative size-5 shrink-0",
                              isHome ? "text-brand-100" : "text-brand-500"
                            )}
                          />
                          <span className="relative">{city}</span>
                          {isHome ? (
                            <span className="absolute right-1 top-1.5 rounded-full bg-accent-500 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-white shadow-sm">
                              HQ
                            </span>
                          ) : null}
                        </span>
                      );
                    })}
                  </div>
                ) : (
                  <div className="px-6 py-12 text-center">
                    <p className="font-display text-lg font-bold text-neutral-900">No cities found</p>
                    <p className="mt-1 text-sm text-neutral-600">Try a different search term.</p>
                  </div>
                )}

                {filtered.length > INITIAL_COUNT && !query ? (
                  <div className="border-t border-neutral-200/60 bg-neutral-50/50 px-5 py-4 text-center sm:px-6">
                    <Button
                      variant="outline"
                      onClick={() => setExpanded((prev) => !prev)}
                      className="border-brand-200 bg-white hover:bg-brand-50"
                    >
                      {expanded ? "Show Less" : "Load More Cities"}
                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform duration-300",
                          expanded && "rotate-180"
                        )}
                      />
                    </Button>
                  </div>
                ) : null}
              </div>

              {/* Sidebar */}
              <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
                <div className="overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-soft">
                  <div className="border-b border-neutral-200/60 bg-gradient-to-r from-brand-50/60 via-white to-accent-50/40 px-5 py-3.5">
                    <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-800">
                      <Globe className="size-4" />
                      Coverage map
                    </p>
                  </div>
                  <div className="space-y-3 p-4">
                    {regionHighlights.map((item) => (
                      <div
                        key={item.label}
                        className={cn(
                          "rounded-xl border bg-gradient-to-br p-4",
                          highlightStyles[item.accent]
                        )}
                      >
                        <p className="text-xs font-bold uppercase tracking-wide text-neutral-500">
                          {item.label}
                        </p>
                        <p className="mt-0.5 font-display text-lg font-bold text-neutral-900">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-brand-200/70 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 p-5 text-white shadow-lg shadow-brand-900/20">
                  <p className="font-display text-lg font-bold">Not in the list?</p>
                  <p className="mt-1 text-sm text-brand-100/90">
                    Telehealth evaluations are available statewide for California residents.
                  </p>
                  <Button
                    href="#apply"
                    variant="secondary"
                    size="sm"
                    className="mt-4 w-full bg-white text-brand-800 hover:bg-brand-50"
                  >
                    Apply From Any City
                  </Button>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
