import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import type { Contributor } from "@/data/contributors";
import { contributorDisplayName, getPostsForContributor } from "@/data/contributors";
import { ContributorAvatar } from "@/components/authors/ContributorAvatar";
import { Card } from "@/components/ui/Card";

type ContributorCardProps = {
  contributor: Contributor;
};

export function ContributorCard({ contributor }: ContributorCardProps) {
  const articleCount = getPostsForContributor(contributor.slug).length;

  return (
    <Card
      hover
      className="group flex h-full min-h-full flex-col overflow-hidden rounded-3xl border-[#e3e9e2] p-0 shadow-md hover:shadow-xl"
    >
      <div className="relative h-64 shrink-0 overflow-hidden bg-[#eaf1e9] sm:h-72 md:h-80">
        {contributor.photo ? (
          <Image
            src={contributor.photo}
            alt={contributorDisplayName(contributor)}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <ContributorAvatar
              name={contributor.name}
              size="lg"
              className="rounded-full bg-gradient-to-br from-[#1d705a] to-[#123c31] ring-4 ring-white shadow-md shadow-[#123c31]/15"
            />
          </div>
        )}
      </div>
      <div className="flex min-h-[19rem] flex-1 flex-col p-7 sm:min-h-[20rem] sm:p-8">
        <div className="flex min-h-[1.75rem] flex-wrap items-center justify-between gap-2">
          <span className="rounded-full bg-[#f0f5f0] px-3.5 py-1.5 text-xs font-semibold text-[#15503f] sm:text-sm">
            {contributor.role}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500">
            <BookOpen className="size-4 shrink-0 text-brand-700" aria-hidden="true" />
            {articleCount} {articleCount === 1 ? "article" : "articles"}
          </span>
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-[#123c31] sm:text-[1.75rem]">
          {contributorDisplayName(contributor)}
        </h3>
        <p className="mt-2 text-base font-medium text-brand-700">
          {contributor.credentialLine ?? contributor.tagline}
        </p>
        <p className="mt-5 line-clamp-4 flex-1 text-base leading-relaxed text-neutral-600">
          {contributor.shortBio}
        </p>
        <Link
          href={`/our-authors/${contributor.slug}`}
          className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#123c31] px-6 text-base font-semibold text-white transition-colors hover:bg-[#0c3027] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123c31]"
        >
          View author profile
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </Card>
  );
}
