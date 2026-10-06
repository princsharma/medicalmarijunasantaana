import Image from "next/image";
import { Shield } from "lucide-react";

export function HeroDoctorVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Glow behind doctor */}
      <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-brand-400/20 to-accent-400/20 blur-2xl" />

      {/* Doctor photo */}
      <div className="relative overflow-hidden rounded-[2rem] border border-white/15 shadow-elevated">
        <div className="relative aspect-[4/5] sm:aspect-[5/6]">
          <Image
            src="/doctors/doctor-image.webp"
            alt="Dr. Johnathan"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 520px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/10 to-transparent" />
        </div>

        {/* Licensed badge */}
        {/* <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
          <BadgeCheck className="size-4 text-brand-300" />
          CA Licensed Physician
        </div> */}

        {/* Bottom caption on photo */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="font-display text-lg font-bold text-white">
            Dr. Johnathan
          </p>
          <p className="text-sm text-brand-100/80">
            Board-Certified · Telehealth
          </p>
        </div>
      </div>

      {/* Floating MMJ card */}
      <div className="absolute -bottom-6 -right-2 z-10 w-[min(78%,18rem)] sm:-right-4 sm:w-72 lg:-right-6">
        <div className="overflow-hidden rounded-xl border border-white/60 bg-brand-900 shadow-elevated sm:rounded-2xl">
          <div className="bg-gradient-to-r from-brand-700 to-brand-900 px-4 py-3 sm:px-5 sm:py-3.5">
            <p className="text-[9px] font-bold uppercase tracking-widest text-brand-100 sm:text-[11px]">
              State of California
            </p>
            <p className="mt-1 font-display text-sm font-bold leading-snug text-white sm:text-base">
              Medical Marijuana ID Card
            </p>
          </div>
        </div>

        <p className="mt-1.5 flex items-center justify-end gap-1 text-[9px] font-semibold leading-tight text-brand-100 sm:mt-2 sm:gap-1.5 sm:text-[11px]">
          <Shield className="size-3 shrink-0 sm:size-3.5" />
          <span>Official recommendation included</span>
        </p>
      </div>

    </div>
  );
}
