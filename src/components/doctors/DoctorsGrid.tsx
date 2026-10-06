"use client";

import { useState } from "react";
import { doctorSpecialties, doctors } from "@/data/doctors";
import { DoctorCard } from "@/components/doctors/DoctorCard";
import { cn } from "@/lib/utils";

export function DoctorsGrid() {
  const [activeSpecialty, setActiveSpecialty] = useState<(typeof doctorSpecialties)[number]>("All");

  const filtered =
    activeSpecialty === "All"
      ? doctors
      : doctors.filter((doctor) => doctor.specialty === activeSpecialty);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {doctorSpecialties.map((specialty) => (
          <button
            key={specialty}
            type="button"
            onClick={() => setActiveSpecialty(specialty)}
            aria-pressed={activeSpecialty === specialty}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition-all",
              activeSpecialty === specialty
                ? "border-[#123c31] bg-[#123c31] text-white shadow-md shadow-[#123c31]/15"
                : "border-neutral-200 bg-white text-neutral-600 hover:border-brand-300 hover:bg-[#f5f8f4] hover:text-brand-800"
            )}
          >
            {specialty}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((doctor) => (
          <DoctorCard key={doctor.slug} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}
