import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, UserRound } from "lucide-react";
import type { BlogPost } from "@/data/blog";
import { formatBlogDate } from "@/data/blog";

export function BlogPostCard({ post }: { post: BlogPost }) {
  const image = post.image ?? post.authorFeatureImage;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#dce6dd] bg-white shadow-sm transition-shadow hover:shadow-md">
      {image ? (
        <Link
          href={`/blog/${post.slug}`}
          aria-label={post.title}
          className="relative block aspect-[16/10] overflow-hidden bg-[#eaf1e9]"
        >
          <Image
            src={image}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </Link>
      ) : null}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3 text-xs font-semibold text-[#15503f]">
          <span className="rounded-full border border-[#dce6dd] bg-[#f5f8f4] px-3 py-1">
            {post.category}
          </span>
          <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-500">
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="size-3.5 text-[#15503f]" aria-hidden="true" />
            {post.readTime}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <UserRound className="size-3.5 text-[#15503f]" aria-hidden="true" />
            {post.author}
          </span>
        </div>
        <h3 className="mt-4 font-display text-xl font-bold leading-snug text-[#123c31]">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#123c31] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0c3027]"
        >
          Read Article
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
