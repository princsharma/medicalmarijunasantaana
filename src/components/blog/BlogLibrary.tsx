"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { BlogCategory, BlogPost } from "@/data/blog";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { cn } from "@/lib/utils";

export function BlogLibrary({
  posts,
  categories,
}: {
  posts: BlogPost[];
  categories: readonly BlogCategory[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<BlogCategory | "All">("All");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      if (!matchesCategory) return false;
      if (!needle) return true;
      return [post.title, post.excerpt, post.subtitle, post.author]
        .filter(Boolean)
        .some((value) => value!.toLowerCase().includes(needle));
    });
  }, [posts, query, category]);

  return (
    <div>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#15503f]">
            Education library
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#123c31] sm:text-4xl">
            Latest patient guides
          </h2>
        </div>
        <label className="relative block w-full lg:max-w-xs">
          <span className="sr-only">Search guides</span>
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#15503f]"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search guides"
            className="h-12 w-full rounded-full border border-[#dce6dd] bg-white pl-11 pr-4 text-sm text-[#123c31] outline-none ring-[#123c31]/20 placeholder:text-neutral-400 focus:ring-2"
          />
        </label>
      </div>

      <div className="mt-6 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Filter by topic">
        {(["All", ...categories] as const).map((item) => {
          const selected = category === item;
          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setCategory(item)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                selected
                  ? "border-[#123c31] bg-[#123c31] text-white"
                  : "border-[#dce6dd] bg-white text-[#15503f] hover:border-[#123c31]"
              )}
            >
              {item}
            </button>
          );
        })}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-10 rounded-2xl border border-[#dce6dd] bg-white px-5 py-8 text-center text-sm text-neutral-600">
          No guides match that search. Try another topic or clear the search.
        </p>
      )}
    </div>
  );
}
