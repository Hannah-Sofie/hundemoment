"use client";

import { useEffect, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { type Course, formatFullDate } from "@/lib/courses";

type Props = {
  course: Course;
  onClose: () => void;
};

export function WaitlistModal({ course, onClose }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onEsc);
    };
  }, [onClose]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // TODO: send til /api/waitlist når Supabase er koblet opp
    console.log("Ny venteliste:", { courseSlug: course.slug, ...data });
    await new Promise((r) => setTimeout(r, 500));
    setSubmitting(false);
    setSubmitted(true);
  }

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-title"
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/60 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <div
        className="relative my-8 w-full max-w-lg rounded-3xl bg-surface shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Lukk"
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-surface-soft text-ink-muted transition hover:bg-purple-soft hover:text-purple"
        >
          ✕
        </button>

        {submitted ? (
          <div className="p-8 text-center sm:p-12">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-success text-3xl text-white">
              ✓
            </div>
            <h2 className="mt-6 font-display text-2xl font-extrabold text-ink sm:text-3xl">
              Du er på venteliste!
            </h2>
            <p className="mx-auto mt-3 max-w-md text-ink-muted">
              Vi tar kontakt så snart det åpner seg plass på{" "}
              <strong>{course.title}</strong> — eller når vi setter opp nytt
              kull.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 rounded-full bg-orange px-6 py-3 text-sm font-bold text-white shadow-[0_10px_28px_-10px_var(--orange)] transition-transform hover:-translate-y-0.5"
            >
              Lukk
            </button>
          </div>
        ) : (
          <>
            <div className="rounded-t-3xl bg-danger-soft/60 px-8 py-6">
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-danger">
                Fullt kurs
              </p>
              <h2
                id="waitlist-title"
                className="font-display text-2xl font-extrabold text-ink"
              >
                Sett meg på venteliste
              </h2>
              <p className="mt-2 text-sm text-ink-muted">
                <strong className="text-ink">{course.title}</strong> —{" "}
                {formatFullDate(course.startDate)} på {course.location}.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-8 py-6">
              <p className="text-sm text-ink-muted">
                Skriv inn kontaktinfo, så gir vi beskjed så snart det åpner seg
                plass — eller når vi setter opp nytt kull.
              </p>

              <label className="flex flex-col gap-1.5 text-sm">
                <span className="font-bold text-ink">
                  Navn <span className="text-orange">*</span>
                </span>
                <input
                  name="navn"
                  required
                  className="rounded-xl border border-border-strong bg-surface-soft px-4 py-2.5 outline-none transition focus:border-purple focus:ring-2 focus:ring-purple-soft"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-bold text-ink">
                    E-post <span className="text-orange">*</span>
                  </span>
                  <input
                    type="email"
                    name="epost"
                    required
                    className="rounded-xl border border-border-strong bg-surface-soft px-4 py-2.5 outline-none transition focus:border-purple focus:ring-2 focus:ring-purple-soft"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-bold text-ink">Telefon</span>
                  <input
                    type="tel"
                    name="telefon"
                    className="rounded-xl border border-border-strong bg-surface-soft px-4 py-2.5 outline-none transition focus:border-purple focus:ring-2 focus:ring-purple-soft"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-1.5 text-sm">
                <span className="font-bold text-ink">Kort om hunden</span>
                <input
                  name="hund"
                  placeholder="F.eks. navn, rase, alder"
                  className="rounded-xl border border-border-strong bg-surface-soft px-4 py-2.5 outline-none transition focus:border-purple focus:ring-2 focus:ring-purple-soft"
                />
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 rounded-full bg-orange px-6 py-3 text-sm font-bold text-white shadow-[0_10px_28px_-10px_var(--orange)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {submitting ? "Sender…" : "Meld meg på venteliste →"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body,
  );
}
