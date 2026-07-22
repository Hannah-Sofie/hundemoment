"use client";

import { useState } from "react";
import { type Course, type SpotStatus, getSpotStatus } from "@/lib/courses";
import { SignupModal } from "./SignupModal";
import { WaitlistModal } from "./WaitlistModal";

type Props = {
  course: Course;
  status?: SpotStatus;
};

export function SignupButton({ course, status }: Props) {
  const [open, setOpen] = useState(false);
  const s = status ?? getSpotStatus(course);
  const full = s === "full";

  const buttonStyle =
    s === "full"
      ? "bg-danger text-white shadow-[0_8px_20px_-8px_var(--danger)]"
      : s === "limited"
        ? "bg-orange text-white shadow-[0_8px_20px_-8px_var(--orange)]"
        : "bg-success text-white shadow-[0_8px_20px_-8px_var(--success)]";

  const label = full ? "Sett meg på venteliste" : "Meld på";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`rounded-full px-4 py-2 text-sm font-bold transition-transform hover:-translate-y-0.5 ${buttonStyle}`}
      >
        {label}
      </button>
      {open && !full && (
        <SignupModal course={course} onClose={() => setOpen(false)} />
      )}
      {open && full && (
        <WaitlistModal course={course} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
