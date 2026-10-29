import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgeCheck } from "lucide-react";
import type { Doctor } from "@/data/doctors";
import { doctorDisplayName } from "@/data/doctors";
import { DoctorAvatar } from "@/components/doctors/DoctorAvatar";
import { Card } from "@/components/ui/Card";

type DoctorCardProps = {
  doctor: Doctor;
};

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card
      hover
      className="group flex h-full min-h-full flex-col overflow-hidden rounded-3xl border-[#e3e9e2] p-0 shadow-md hover:shadow-xl"
    >
      <div className="relative h-64 shrink-0 overflow-hidden bg-[#eaf1e9] sm:h-72 md:h-80">
        {doctor.photo ? (
          <Image
            src={doctor.photo}
            alt={`${doctor.name}, ${doctor.credential}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <DoctorAvatar
              name={doctor.name}
              size="lg"
              className="rounded-full bg-gradient-to-br from-[#1d705a] to-[#123c31] ring-4 ring-white shadow-md shadow-[#123c31]/15"
            />
          </div>
        )}
      </div>
      <div className="flex min-h-[19rem] flex-1 flex-col p-7 sm:min-h-[20rem] sm:p-8">
        <div className="flex min-h-[1.75rem] flex-wrap items-center justify-between gap-2">
          <span className="rounded-full bg-[#f0f5f0] px-3.5 py-1.5 text-xs font-semibold text-[#15503f] sm:text-sm">
            {doctor.specialty}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500">
            <BadgeCheck className="size-4 shrink-0 text-brand-700" aria-hidden="true" />
            California licensed
          </span>
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-[#123c31] sm:text-[1.75rem]">
          {doctorDisplayName(doctor)}
        </h3>
        <p className="mt-2 text-base font-medium text-brand-700">{doctor.licenseLabel}</p>
        <p className="mt-1.5 min-h-[1.25rem] text-sm text-neutral-500">
          {doctor.experience ? `${doctor.experience} of experience` : "\u00A0"}
        </p>
        <p className="mt-5 line-clamp-4 flex-1 text-base leading-relaxed text-neutral-600">
          {doctor.bio}
        </p>
        <Link
          href={`/doctors/${doctor.slug}`}
          className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#123c31] px-6 text-base font-semibold text-white transition-colors hover:bg-[#0c3027] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123c31]"
        >
          View physician profile
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </Card>
  );
}
