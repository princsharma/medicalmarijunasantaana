"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Heading = {
  id: string;
  text: string;
};

export function BlogTableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (headings.length === 0) return;

    const update = () => {
      const marker = 140;
      let current = "";
      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (!element) continue;
        if (element.getBoundingClientRect().top <= marker) {
          current = heading.id;
        }
      }
      setActiveId(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div className="lg:sticky lg:top-28 lg:self-start">
      <nav
        aria-label="Table of contents"
        className="w-full overflow-hidden rounded-l-none rounded-r-[2rem] bg-[#123c31] py-5 pl-5 pr-5 text-white sm:py-6 sm:pl-6 sm:pr-7 lg:pl-8"
      >
        <button
          type="button"
          className="flex w-full items-center justify-between gap-3 text-left lg:hidden"
          aria-expanded={open}
          aria-controls="blog-toc-list"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="font-display text-xl font-semibold">Table of Contents</span>
          <ChevronDown
            className={cn("size-5 shrink-0 transition-transform", open && "rotate-180")}
            aria-hidden="true"
          />
        </button>
        <h2 className="hidden font-display text-2xl font-semibold tracking-tight lg:block">
          Table of Contents
        </h2>
        <div className="mt-4 hidden h-px bg-white/25 lg:block" aria-hidden="true" />
        <ul id="blog-toc-list" className={cn("mt-4 space-y-3.5", open ? "block" : "hidden lg:block")}>
          {headings.map((heading) => {
            const active = heading.id === activeId;
            return (
              <li key={heading.id} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-2 size-2 shrink-0 rounded-full",
                    active ? "bg-[#d7ebe0]" : "bg-white/40"
                  )}
                />
                <a
                  href={`#${heading.id}`}
                  onClick={() => {
                    setActiveId(heading.id);
                    setOpen(false);
                  }}
                  aria-current={active ? "location" : undefined}
                  className={cn(
                    "text-sm leading-snug font-medium transition-colors sm:text-[0.95rem]",
                    active ? "text-[#d7ebe0]" : "text-white/90 hover:text-white"
                  )}
                >
                  {heading.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
