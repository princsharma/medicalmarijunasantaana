"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionItem = {
  question: string;
  answer: string;
  category?: string;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
  variant?: "grouped" | "cards";
};

export function Accordion({ items, className, variant = "grouped" }: AccordionProps) {
  if (variant === "cards") {
    return (
      <div className={cn("space-y-3", className)}>
        {items.map((item, index) => (
          <details
            key={item.question}
            className="group overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-sm transition-all duration-300 open:border-brand-200/80 open:shadow-card"
            open={index === 0}
          >
            <summary className="flex cursor-pointer list-none items-start gap-4 px-5 py-4 transition-colors sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-100 font-display text-xs font-bold text-brand-800 ring-1 ring-brand-200/80">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0 flex-1 pt-1 font-display text-base font-bold leading-snug text-neutral-900 group-open:text-brand-900 sm:text-lg">
                {item.question}
              </span>
              <ChevronDown
                className="mt-1 size-5 shrink-0 text-brand-500 transition-transform duration-300 group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <div className="border-t border-neutral-100 bg-gradient-to-b from-brand-50/30 to-white px-5 pb-5 pt-4 leading-relaxed text-neutral-600 sm:px-6 sm:pb-6">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white",
        className
      )}
    >
      {items.map((item, index) => (
        <details key={item.question} className="group" open={index === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-neutral-900 transition-colors hover:text-brand-700 [&::-webkit-details-marker]:hidden">
            {item.question}
            <ChevronDown
              className="size-5 shrink-0 text-neutral-400 transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <div className="px-6 pb-5 leading-relaxed text-neutral-600">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
