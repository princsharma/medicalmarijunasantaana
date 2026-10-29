import Image from "next/image";
import { cn } from "@/lib/utils";

type ContributorAvatarProps = {
  name: string;
  photo?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const sizeClasses = {
  sm: "size-16 text-lg",
  md: "size-24 text-2xl",
  lg: "size-32 text-3xl",
  xl: "size-40 text-4xl sm:size-44",
};

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function ContributorAvatar({
  name,
  photo,
  size = "md",
  className,
}: ContributorAvatarProps) {
  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 font-display font-bold text-white shadow-lg shadow-brand-900/25 ring-2 ring-white/80",
        sizeClasses[size],
        className
      )}
      role="img"
      aria-label={`${name} portrait`}
    >
      {photo ? (
        <Image
          src={photo}
          alt=""
          fill
          sizes={
            size === "xl"
              ? "176px"
              : size === "lg"
                ? "128px"
                : size === "md"
                  ? "96px"
                  : "64px"
          }
          className="object-cover object-top"
        />
      ) : (
        getInitials(name)
      )}
    </div>
  );
}
