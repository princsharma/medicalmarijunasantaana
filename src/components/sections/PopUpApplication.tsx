"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { ApplicationPopupForm } from "@/components/forms/ApplicationPopupForm";
import { useApplicationPopup } from "@/context/ApplicationPopupContext";

export function PopUpApplication() {
  const { isOpen, closeApplication } = useApplicationPopup();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    if (isOpen) setFormKey((key) => key + 1);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeApplication();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeApplication]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-neutral-950/60 backdrop-blur-sm"
        aria-label="Close application popup"
        onClick={closeApplication}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="application-popup-title"
        className="relative z-10 max-h-[95dvh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-brand-100 bg-white shadow-2xl sm:rounded-3xl"
      >
        <div className="h-1.5 bg-gradient-to-r from-brand-500 via-brand-600 to-accent-500" />
        <button
          type="button"
          onClick={closeApplication}
          className="absolute right-4 top-5 z-20 flex size-9 items-center justify-center rounded-full border border-brand-100 bg-white text-neutral-500 shadow-sm transition-colors hover:border-brand-200 hover:text-brand-800"
          aria-label="Close"
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        <div className="px-6 pb-8 pt-10 sm:px-10 sm:pb-10 sm:pt-12">
          <header className="mb-8 pr-8 text-center">
            <h2
              id="application-popup-title"
              className="font-display text-2xl font-bold leading-tight text-neutral-900 sm:text-3xl"
            >
              Get Your Medical Marijuana Card
            </h2>
            <p className="mt-1 font-display text-2xl font-bold text-brand-700 sm:text-3xl">
              In Just A Few Minutes
            </p>
          </header>

          <ApplicationPopupForm key={formKey} onClose={closeApplication} />
        </div>
      </div>
    </div>
  );
}
