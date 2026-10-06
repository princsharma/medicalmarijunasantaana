import Image from "next/image";
import { BadgeCheck, Shield } from "lucide-react";
import { siteConfig } from "@/data/site";

export function HeroDoctorVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Glow behind doctor */}
      <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-brand-400/20 to-accent-400/20 blur-2xl" />

      {/* Doctor photo */}
      <div className="relative overflow-hidden rounded-[2rem] border border-white/15 shadow-elevated">
        <div className="relative aspect-[4/5] sm:aspect-[5/6]">
          <Image
            src="/hero/professional_doctor_advertisement.webp"
            alt="Licensed California medical marijuana doctor holding a patient recommendation card"
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
            Dr. James Anderson
          </p>
          <p className="text-sm text-brand-100/80">Board-Certified · Telehealth</p>
        </div>
      </div>

      {/* Floating MMJ card */}
      <div className="absolute -bottom-6 -right-2 w-[min(100%,14rem)] rotate-3 transition-transform duration-500 hover:rotate-0 sm:-right-6 sm:w-60 lg:-right-8">
        <div className="overflow-hidden rounded-2xl border border-white/30 bg-white shadow-elevated">
          {/* Card header */}
          <div className="bg-gradient-to-r from-brand-700 to-brand-900 px-4 py-2.5">
            <p className="text-[9px] font-bold uppercase tracking-widest text-brand-100">
              State of California
            </p>
            <p className="font-display text-xs font-bold text-white">
              Medical Marijuana ID
            </p>
          </div>

          {/* Card body */}
          {/* <div className="relative bg-gradient-to-br from-white to-brand-50/40 p-4">
            <div className="flex gap-3">
              <div className="size-14 shrink-0 overflow-hidden rounded-lg border-2 border-brand-200 bg-brand-100">
                <Image
                  src="/hero/card-photo.webp"
                  alt=""
                  width={56}
                  height={56}
                  className="size-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-display text-sm font-bold text-neutral-900">
                  Jane Patient
                </p>
                <p className="mt-0.5 text-[10px] text-neutral-500">ID #CA-92701-4821</p>
                <p className="mt-1 text-[10px] font-medium text-brand-700">
                  {siteConfig.address.city}, CA
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-brand-100 pt-2.5">
              <div>
                <p className="text-[8px] uppercase tracking-wider text-neutral-400">Valid Thru</p>
                <p className="text-[11px] font-bold text-neutral-800">09/2026</p>
              </div>
              <div className="flex size-8 items-center justify-center rounded-md bg-brand-700 text-[8px] font-bold text-white">
                MMJ
              </div>
            </div>
          </div> */}
        </div>

        <p className="mt-2 flex items-center justify-end gap-1 text-[10px] font-medium text-brand-200/90">
          <Shield className="size-3" />
          Official recommendation included
        </p>
      </div>

    </div>
  );
}
