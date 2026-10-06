import { Star } from "lucide-react";

type StarsProps = {
  size?: string;
  rating?: number;
  label?: string;
};

export function Stars({ size = "size-4", rating = 5, label }: StarsProps) {
  const starsLabel = label ?? `${rating} out of 5 stars`;

  return (
    <div className="flex items-center gap-0.5 text-amber-500" role="img" aria-label={starsLabel}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${size} fill-current`} aria-hidden="true" />
      ))}
    </div>
  );
}
