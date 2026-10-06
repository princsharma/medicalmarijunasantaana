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
      className="group flex h-full flex-col overflow-hidden rounded-2xl border-[#e3e9e2] p-0 shadow-sm hover:shadow-lg"
    >
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#eaf1e9]">
        {doctor.photo ? (
          <Image
            src={doctor.photo}
            alt={`${doctor.name}, ${doctor.credential}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <DoctorAvatar
            name={doctor.name}
            size="lg"
            className="rounded-full bg-gradient-to-br from-[#1d705a] to-[#123c31] ring-4 ring-white shadow-md shadow-[#123c31]/15"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-full bg-[#f0f5f0] px-3 py-1 text-xs font-semibold text-[#15503f]">
            {doctor.specialty}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-500">
            <BadgeCheck className="size-3.5 text-brand-700" aria-hidden="true" />
            California licensed
          </span>
        </div>
        <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-[#123c31]">
          {doctorDisplayName(doctor)}
        </h3>
        <p className="mt-1 text-sm font-medium text-brand-700">{doctor.licenseLabel}</p>
        {doctor.experience ? (
          <p className="mt-1 text-xs text-neutral-500">{doctor.experience} of experience</p>
        ) : null}
        <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-600">{doctor.bio}</p>
        <Link
          href={`/doctors/${doctor.slug}`}
          className="mt-6 inline-flex min-h-11 items-center capitalize justify-center gap-2 rounded-full bg-[#123c31] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#0c3027] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123c31]"
        >
          View physician profile
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </Card>
  );
}
