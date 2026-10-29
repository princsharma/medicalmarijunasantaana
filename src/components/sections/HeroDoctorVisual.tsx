import Image from "next/image";

export function HeroDoctorVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none lg:h-full">
      <div className="absolute inset-4 rounded-[1.75rem] bg-gradient-to-br from-brand-400/20 to-accent-400/20 blur-2xl sm:rounded-[2rem]" />

      <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-white/15 shadow-elevated sm:rounded-[2rem]">
        {/*
          Mobile: wide 16/10 so the laptop + patient stay in frame.
          Desktop: taller 4/3 that still matches a landscape photo (5/4 was cropping the patient).
        */}
        <div className="relative aspect-[16/10] w-full sm:aspect-[3/2] lg:aspect-[4/3] xl:min-h-[28rem]">
          <Image
            src="/hero/telehealth consultation with a doctor through a laptop video call.webp"
            alt="Patient having a secure telehealth video visit with a California-licensed doctor on a laptop"
            fill
            priority
            className="object-cover object-[58%_42%] sm:object-[55%_40%] lg:object-[52%_38%]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 640px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/75 via-brand-950/10 to-transparent" />
        </div>

        <div className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5">
          <p className="font-display text-base font-bold text-white sm:text-lg">
            Same-day telehealth visit
          </p>
          <p className="text-xs text-brand-100/80 sm:text-sm">
            Licensed CA physician · HIPAA-compliant
          </p>
        </div>
      </div>
    </div>
  );
}
