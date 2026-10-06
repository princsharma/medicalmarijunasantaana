"use client";

import {
  BadgeCheck,
  ChevronDown,
  Clock,
  FileText,
  HelpCircle,
  RefreshCw,
  Shield,
  UserCheck,
} from "lucide-react";
import { faqItems } from "@/data/homepage";
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
    chip: "bg-brand-100 text-brand-900 ring-brand-200/80",
    accent: "from-brand-500 to-brand-700",
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

export function FaqInteractivePanel() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="space-y-3">
        {faqItems.map((item, index) => (
          <FaqAccordionItem
            key={item.question}
            item={item}
            index={index}
            defaultOpen={index === 0}
          />
        ))}
      </div>
    </div>
  );
}
