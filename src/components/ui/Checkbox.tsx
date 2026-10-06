import { cn } from "@/lib/utils";

type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: React.ReactNode;
  error?: string;
};

export function Checkbox({ label, error, className, id, ...props }: CheckboxProps) {
  const inputId = id ?? props.name;

  return (
    <div className="space-y-1">
      <label htmlFor={inputId} className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          id={inputId}
          className={cn(
            "mt-0.5 size-4 shrink-0 rounded border-neutral-300 text-brand-700",
            "focus:ring-2 focus:ring-brand-500/20 focus:ring-offset-0",
            className
          )}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        <span className="text-sm leading-relaxed text-neutral-600">{label}</span>
      </label>
      {error && (
        <p id={`${inputId}-error`} className="text-xs text-error pl-7" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
