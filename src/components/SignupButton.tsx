"use client";

import { useState } from "react";
import { type Course } from "@/lib/courses";
import { SignupModal } from "./SignupModal";

export function SignupButton({ course }: { course: Course }) {
  const [open, setOpen] = useState(false);
  const disabled = course.spotsLeft <= 0;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        disabled={disabled}
        className="rounded-full bg-orange px-4 py-2 text-sm font-bold text-white shadow-[0_8px_20px_-8px_var(--orange)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:bg-ink-muted disabled:opacity-50 disabled:shadow-none disabled:hover:translate-y-0"
      >
        {disabled ? "Fullt" : "Meld på"}
      </button>
      {open && <SignupModal course={course} onClose={() => setOpen(false)} />}
    </>
  );
}
