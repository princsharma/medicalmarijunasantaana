import Image from "next/image";
import { cn } from "@/lib/utils";

type DoctorAvatarProps = {
  name: string;
  photo?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "size-16 text-lg",
  md: "size-24 text-2xl",
  lg: "size-32 text-3xl",
};

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function DoctorAvatar({ name, photo, size = "md", className }: DoctorAvatarProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 font-display font-bold text-white shadow-lg shadow-brand-800/25 ring-2 ring-brand-200/60",
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
          sizes={size === "lg" ? "128px" : size === "md" ? "96px" : "64px"}
          className="object-cover object-top"
        />
      ) : (
        getInitials(name)
      )}
    </div>
  );
}
