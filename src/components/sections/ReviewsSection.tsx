import { Quote, Sparkles, Star, Verified } from "lucide-react";
import { reviews } from "@/data/homepage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

function CardShine() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      <div className="absolute -inset-full top-0 block -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const avatarColors = [
  "from-brand-500 to-brand-700",
  "from-accent-500 to-accent-700",
  "from-emerald-500 to-emerald-700",
  "from-brand-500 to-brand-700",
];

function StarRating({ rating, size = "size-4" }: { rating: number; size?: string }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            size,
            i < rating ? "fill-accent-400 text-accent-400" : "fill-neutral-200 text-neutral-200"
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  index,
}: {
  review: (typeof reviews)[number];
  index: number;
}) {
  const accent = index % 2 === 0 ? "brand" : "accent";
  const bar =
    accent === "brand" ? "from-brand-500 to-brand-700" : "from-accent-400 to-accent-600";
  const border =
    accent === "brand" ? "border-brand-200/70 hover:border-brand-300/90" : "border-accent-200/70 hover:border-accent-300/90";
  const surface =
    accent === "brand"
      ? "from-brand-50/60 via-white to-white"
      : "from-accent-50/50 via-white to-white";

  return (
    <blockquote
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border bg-gradient-to-br p-[1px] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card",
        border
      )}
    >
      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-[calc(1rem-1px)] bg-gradient-to-br",
          surface,
          "p-6 sm:p-7"
        )}
      >
        <CardShine />
        <div className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r", bar)} />
        <div
          className={cn(
            "pointer-events-none absolute -right-6 -top-6 size-24 rounded-full blur-2xl",
            accent === "brand" ? "bg-brand-300/25" : "bg-accent-300/25"
          )}
        />

        <Quote
          className={cn(
            "absolute right-5 top-5 opacity-[0.07]",
            "size-8",
            accent === "brand" ? "text-brand-600" : "text-accent-500"
          )}
          aria-hidden
        />

        <StarRating rating={review.rating} size="size-4" />

        <p className="relative mt-4 flex-1 text-sm leading-relaxed text-neutral-700 sm:text-base">
          &ldquo;{review.text}&rdquo;
        </p>

        <footer className="relative mt-6 flex items-center justify-between gap-3 border-t border-neutral-100/80 pt-4">
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-xs font-bold text-white shadow-md",
                avatarColors[index % avatarColors.length]
              )}
            >
              {getInitials(review.name)}
            </span>
            <div>
              <cite className="not-italic font-display text-sm font-bold text-neutral-900 sm:text-base">
                {review.name}
              </cite>
              <p className="mt-0.5 inline-flex items-center gap-1 text-[11px] font-semibold text-brand-700">
                <Verified className="size-3" />
                Verified patient
              </p>
            </div>
          </div>
          <span className="stat-value shrink-0 text-xs font-medium text-neutral-400 sm:text-sm">
            {review.date}
          </span>
        </footer>
      </div>
    </blockquote>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="relative overflow-hidden py-16 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FAFAF7] via-white to-brand-50/25" />
      <div className="pointer-events-none absolute -left-24 top-1/4 size-72 rounded-full bg-brand-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-64 rounded-full bg-accent-200/20 blur-3xl" />

      <Container className="relative">
        <div className="rounded-[2rem] bg-gradient-to-br from-brand-200/40 via-white/90 to-accent-200/30 p-[1px] shadow-elevated md:rounded-[2.5rem]">
          <div className="rounded-[calc(2rem-1px)] bg-gradient-to-br from-[#FAFDFC] via-white to-[#FAFAF7] p-6 sm:p-8 md:p-10 lg:p-12 md:rounded-[calc(2.5rem-1px)]">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-800 shadow-sm">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-400 opacity-60" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-brand-600" />
                  </span>
                  <Sparkles className="size-3.5 text-brand-600" />
                  Patient Reviews
                </span>
              </div>

              <h2 className="section-heading mt-5 text-neutral-900">
                What Our Patients Are{" "}
                <span className="text-gradient-brand">Saying</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">
                Hear from real patients who completed their medical marijuana evaluation with us.
              </p>

              <div className="mx-auto mt-7 flex max-w-xl flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-2xl border border-brand-200/70 bg-white/80 px-5 py-4 shadow-soft">
                <span className="stat-value font-display text-3xl font-extrabold tracking-tight text-neutral-900">
                  4.9
                </span>
                <StarRating rating={5} size="size-4" />
                <span className="text-sm font-semibold text-neutral-700">
                  Excellent rating · <span className="stat-value">450+</span> reviews
                </span>
                <Button href="/reviews" variant="outline" className="border-brand-200">
                  View All Reviews
                </Button>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5">
              {reviews.map((review, index) => (
                <ReviewCard key={review.name} review={review} index={index} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
