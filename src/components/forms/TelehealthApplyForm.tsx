import { telehealthContent } from "@/data/homepage";
import { ApplicationForm } from "@/components/forms/ApplicationForm";
import { cn } from "@/lib/utils";

export function TelehealthApplyForm({ className }: { className?: string }) {
  const { form } = telehealthContent;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-elevated",
        className
      )}
    >
      <div className="h-1.5 bg-gradient-to-r from-brand-600 via-brand-400 to-accent-400" />

      <div
        className="pointer-events-none absolute right-0 top-1.5 h-24 w-32 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgb(15 118 110 / 0.35) 1.5px, transparent 1.5px)",
          backgroundSize: "10px 10px",
        }}
      />

      <div className="relative p-6 md:p-8">
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-800">
            {form.eyebrow}
          </p>
          <p className="mt-1 font-display text-xl font-bold text-neutral-900 md:text-2xl">
            {form.priceLine}{" "}
            <span className="text-brand-700">{form.price}</span> {form.priceSuffix}
          </p>
        </div>
        <ApplicationForm showHeader={false} embedded />
      </div>
    </div>
  );
}
