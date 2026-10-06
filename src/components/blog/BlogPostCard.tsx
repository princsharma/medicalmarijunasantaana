import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import type { BlogPost } from "@/data/blog";
import { formatBlogDate } from "@/data/blog";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type BlogPostCardProps = {
  post: BlogPost;
  featured?: boolean;
};

export function BlogPostCard({ post, featured }: BlogPostCardProps) {
  return (
    <Card
      hover
      className={featured ? "border-brand-300/60 bg-gradient-to-b from-white to-brand-50/30 ring-1 ring-brand-500/10" : undefined}
    >
      <Badge variant="brand">{post.category}</Badge>
      <h2 className="mt-4 font-display text-xl font-bold text-neutral-900 sm:text-2xl">
        <Link href={`/blog/${post.slug}`} className="hover:text-brand-800">
          {post.title}
        </Link>
      </h2>
      {post.subtitle ? (
        <p className="mt-1 text-sm font-medium text-brand-700">{post.subtitle}</p>
      ) : null}
      <p className="mt-3 text-neutral-600 leading-relaxed">{post.excerpt}</p>
      <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-neutral-500">
        <span>{formatBlogDate(post.date)}</span>
        <span className="inline-flex items-center gap-1">
          <Clock className="size-3.5" />
          {post.readTime}
        </span>
      </div>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
      >
        Read Article
        <ArrowUpRight className="size-4" />
      </Link>
    </Card>
  );
}
