import { trustBadges } from "@/data/homepage";
import { Shield } from "lucide-react";

const items = [...trustBadges, ...trustBadges];

export function TrustMarquee() {
  return (
    <div className="overflow-hidden border-y border-neutral-200/80 bg-white py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((badge, i) => (
          <span
            key={`${badge}-${i}`}
            className="mx-6 inline-flex items-center gap-2 text-sm font-semibold text-neutral-600"
          >
            <Shield className="size-4 text-brand-600" />
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
