"use client";

import { useMemo, useState } from "react";
import {
  BadgeCheck,
  ChevronDown,
  Clock,
  FileText,
  HelpCircle,
  RefreshCw,
  Search,
  Shield,
  Sparkles,
  UserCheck,
  X,
} from "lucide-react";
import Link from "next/link";
import {
  faqCategories,
  faqHighlights,
  faqItems,
} from "@/data/homepage";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { FaqCategory, FaqItem } from "@/types";

const categoryMeta: Record<
  FaqCategory,
  { label: string; icon: typeof FileText; chip: string; accent: string }
> = {
  "getting-started": {
    label: "Getting Started",
    icon: FileText,
    chip: "bg-brand-100 text-brand-800 ring-brand-200/80",
    accent: "from-brand-500 to-brand-700",
  },
  process: {
    label: "Process & Timing",
    icon: Clock,
    chip: "bg-amber-100 text-amber-900 ring-amber-200/80",
    accent: "from-amber-500 to-amber-700",
  },
  eligibility: {
    label: "Eligibility",
    icon: UserCheck,
    chip: "bg-violet-100 text-violet-900 ring-violet-200/80",
    accent: "from-violet-500 to-violet-700",
  },
  privacy: {
    label: "Privacy & Security",
    icon: Shield,
    chip: "bg-sky-100 text-sky-900 ring-sky-200/80",
    accent: "from-sky-500 to-sky-700",
  },
  benefits: {
    label: "Benefits",
    icon: BadgeCheck,
    chip: "bg-emerald-100 text-emerald-900 ring-emerald-200/80",
    accent: "from-emerald-500 to-emerald-700",
  },
  renewal: {
    label: "Renewal",
    icon: RefreshCw,
    chip: "bg-accent-100 text-accent-900 ring-accent-200/80",
    accent: "from-accent-500 to-accent-700",
  },
};

const highlightAccent = {
  brand: "from-brand-500/10 via-brand-50/80 to-white border-brand-200/70",
  accent: "from-accent-500/10 via-accent-50/80 to-white border-accent-200/70",
} as const;

type FaqInteractivePanelProps = {
  showSidebar?: boolean;
  showViewAllLink?: boolean;
  className?: string;
};

function filterItems(
  items: FaqItem[],
  query: string,
  category: string
): FaqItem[] {
  const normalizedQuery = query.trim().toLowerCase();

  return items.filter((item) => {
    const matchesCategory =
      category === "all" || item.category === category;
    const matchesQuery =
      !normalizedQuery ||
      item.question.toLowerCase().includes(normalizedQuery) ||
      item.answer.toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });
}

function FaqAccordionItem({
  item,
  index,
  defaultOpen,
}: {
  item: FaqItem;
  index: number;
  defaultOpen?: boolean;
}) {
  const meta = item.category ? categoryMeta[item.category] : null;
  const Icon = meta?.icon ?? HelpCircle;

  return (
    <details
      className="group relative overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-sm transition-all duration-300 open:border-brand-300/80 open:shadow-card hover:border-brand-200/80 hover:shadow-md"
      open={defaultOpen}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 w-1 scale-y-0 bg-gradient-to-b opacity-0 transition-all duration-300 group-open:scale-y-100 group-open:opacity-100",
          meta?.accent ?? "from-brand-500 to-brand-700"
        )}
      />

      <summary className="flex cursor-pointer list-none items-start gap-3 px-4 py-4 transition-colors sm:gap-4 sm:px-5 sm:py-5 [&::-webkit-details-marker]:hidden">
        <span
          className={cn(
            "flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md transition-transform duration-300 group-open:scale-105 sm:size-11",
            meta?.accent ?? "from-brand-500 to-brand-700"
          )}
        >
          <Icon className="size-4 sm:size-[18px]" aria-hidden="true" />
        </span>

        <span className="min-w-0 flex-1 pt-0.5">
          <span className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              {String(index + 1).padStart(2, "0")}
            </span>
            {meta ? (
              <span
                className={cn(
                  "inline-flex rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ring-1",
                  meta.chip
                )}
              >
                {meta.label}
              </span>
            ) : null}
          </span>
          <span className="mt-1.5 block font-display text-base font-bold leading-snug text-neutral-900 transition-colors group-open:text-brand-900 sm:text-lg">
            {item.question}
          </span>
        </span>

        <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-all duration-300 group-open:rotate-180 group-open:bg-brand-100">
          <ChevronDown className="size-4" aria-hidden="true" />
        </span>
      </summary>

      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <div className="border-t border-neutral-100 bg-gradient-to-b from-brand-50/40 via-white to-white px-4 pb-5 pt-4 leading-relaxed text-neutral-600 sm:px-5 sm:pb-6 sm:pl-[4.75rem]">
            {item.answer}
          </div>
        </div>
      </div>
    </details>
  );
}

export function FaqInteractivePanel({
  showSidebar = true,
  showViewAllLink = false,
  className,
}: FaqInteractivePanelProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = useMemo(
    () => filterItems(faqItems, query, activeCategory),
    [query, activeCategory]
  );

  const hasFilters = query.trim().length > 0 || activeCategory !== "all";

  return (
    <div className={cn("grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_340px]", className)}>
      <div className="min-w-0">
        {/* Search + filters toolbar */}
        <div className="rounded-2xl border border-neutral-200/70 bg-white/90 shadow-soft backdrop-blur-sm">
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
                placeholder="Search questions..."
                aria-label="Search FAQ questions"
                className="h-11 w-full rounded-xl border border-neutral-200/80 bg-white pl-10 pr-10 text-sm text-neutral-900 shadow-inner shadow-neutral-900/[0.02] outline-none transition-all placeholder:text-neutral-400 focus:border-brand-300 focus:ring-2 focus:ring-brand-500/20"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
                >
                  <X className="size-3.5" />
                </button>
              ) : null}
            </div>
          </div>

          <div className="relative border-t border-neutral-200/60">
            {/* Scroll fade hints — mobile / tablet only */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white via-white/80 to-transparent md:hidden"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white via-white/80 to-transparent md:hidden"
            />

            <div
              role="tablist"
              aria-label="Filter FAQ by category"
              className={cn(
                "flex w-full min-w-0 gap-2 overflow-x-auto overscroll-x-contain scroll-smooth py-3.5",
                "snap-x snap-mandatory px-4 sm:px-5",
                "max-md:scroll-pl-4 max-md:scroll-pr-4",
                "touch-pan-x [-webkit-overflow-scrolling:touch]",
                "[scrollbar-width:thin] [scrollbar-color:rgb(94_234_212_/_0.8)_transparent]",
                "[&::-webkit-scrollbar]:h-1.5",
                "[&::-webkit-scrollbar-track]:bg-transparent",
                "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-brand-300/70",
                "md:flex-wrap md:overflow-x-visible md:snap-none"
              )}
            >
              {faqCategories.map((category) => {
                const isActive = activeCategory === category.id;
                const count =
                  category.id === "all"
                    ? faqItems.length
                    : faqItems.filter((item) => item.category === category.id)
                        .length;

                return (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "inline-flex shrink-0 snap-start items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-bold transition-all duration-200 sm:px-4 sm:py-2.5 sm:text-sm",
                      isActive
                        ? "bg-gradient-to-r from-brand-600 to-brand-700 text-white shadow-md shadow-brand-700/25"
                        : "border border-neutral-200/80 bg-white text-neutral-600 hover:border-brand-200 hover:bg-brand-50/60 hover:text-brand-800"
                    )}
                  >
                    {category.label}
                    <span
                      className={cn(
                        "rounded-full px-1.5 py-0.5 text-[10px] font-bold tabular-nums",
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-neutral-100 text-neutral-500"
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results meta */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-800">
            <Sparkles className="size-3.5" />
            {filteredItems.length} {filteredItems.length === 1 ? "answer" : "answers"}
            {hasFilters ? " found" : " available"}
          </p>
          {hasFilters ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveCategory("all");
              }}
              className="text-xs font-semibold text-brand-700 underline-offset-2 hover:underline"
            >
              Clear filters
            </button>
          ) : null}
        </div>

        {/* Accordion list */}
        <div className="mt-4 space-y-3">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <FaqAccordionItem
                key={item.question}
                item={item}
                index={index}
                defaultOpen={index === 0 && !hasFilters}
              />
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50/80 px-6 py-12 text-center">
              <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-sm ring-1 ring-neutral-200">
                <Search className="size-5" />
              </span>
              <p className="mt-4 font-display text-lg font-bold text-neutral-900">
                No matching questions
              </p>
              <p className="mt-1 text-sm text-neutral-600">
                Try a different keyword or browse all categories.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-5 border-brand-200"
                onClick={() => {
                  setQuery("");
                  setActiveCategory("all");
                }}
              >
                Show all questions
              </Button>
            </div>
          )}
        </div>
      </div>

      {showSidebar ? (
        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          {/* Quick stats */}
          <div className="overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-soft">
            <div className="border-b border-neutral-200/60 bg-gradient-to-r from-brand-50/60 via-white to-accent-50/40 px-5 py-3.5">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-800">
                Quick answers
              </p>
            </div>
            <div className="space-y-3 p-4">
              {faqHighlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className={cn(
                    "rounded-xl border bg-gradient-to-br p-4 transition-transform duration-200 hover:-translate-y-0.5",
                    highlightAccent[highlight.accent]
                  )}
                >
                  <p className="stat-value font-display text-2xl font-bold text-neutral-900">
                    {highlight.value}
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-neutral-600">
                    {highlight.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Browse by topic */}
          <div className="overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-soft">
            <div className="border-b border-neutral-200/60 px-5 py-3.5">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-800">
                Browse by topic
              </p>
            </div>
            <div className="grid gap-2 p-4">
              {faqCategories
                .filter((category) => category.id !== "all")
                .map((category) => {
                  const meta =
                    categoryMeta[category.id as FaqCategory];
                  const Icon = meta.icon;
                  const isActive = activeCategory === category.id;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setActiveCategory(category.id)}
                      className={cn(
                        "flex items-center gap-3 rounded-xl border px-3.5 py-3 text-left text-sm font-semibold transition-all duration-200",
                        isActive
                          ? "border-brand-300 bg-brand-50 text-brand-900 shadow-sm"
                          : "border-neutral-200/80 bg-white text-neutral-700 hover:border-brand-200 hover:bg-brand-50/50"
                      )}
                    >
                      <span
                        className={cn(
                          "flex size-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-white shadow-sm",
                          meta.accent
                        )}
                      >
                        <Icon className="size-3.5" />
                      </span>
                      {category.label}
                    </button>
                  );
                })}
            </div>
          </div>

          {/* Help CTA */}
          <div className="rounded-2xl border border-brand-200/70 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 p-5 text-white shadow-lg shadow-brand-900/20">
            <p className="font-display text-lg font-bold">Still have questions?</p>
            <p className="mt-1 text-sm text-brand-100/90">
              Our patient support team is ready to walk you through the application.
            </p>
            <Button
              href="/contact-us"
              variant="secondary"
              size="sm"
              className="mt-4 w-full bg-white text-brand-800 hover:bg-brand-50"
            >
              Contact Support
            </Button>
            {showViewAllLink ? (
              <Link
                href="/faq"
                className="mt-3 block text-center text-xs font-semibold text-brand-100 underline-offset-2 hover:underline"
              >
                View full FAQ page
              </Link>
            ) : null}
          </div>
        </aside>
      ) : null}
    </div>
  );
}
