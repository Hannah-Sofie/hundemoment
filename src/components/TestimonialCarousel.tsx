"use client";

import { useEffect, useState } from "react";

export type Testimonial = {
  name: string;
  dog: string;
  service: string;
  quote: string;
  initial: string;
  avatarBg: string;
};

const ROTATE_MS = 6000;

export function TestimonialCarousel({
  testimonials,
}: {
  testimonials: readonly Testimonial[];
}) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, testimonials.length]);

  const next = () =>
    setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <div
      className="relative mx-auto max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <button
        type="button"
        aria-label="Forrige anmeldelse"
        onClick={prev}
        className="absolute left-0 top-1/2 z-10 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-surface text-purple shadow-[var(--shadow-sm)] transition hover:bg-purple hover:text-white sm:h-12 sm:w-12"
      >
        <svg
          viewBox="0 0 20 20"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 15l-5-5 5-5" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Neste anmeldelse"
        onClick={next}
        className="absolute right-0 top-1/2 z-10 grid h-11 w-11 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-surface text-purple shadow-[var(--shadow-sm)] transition hover:bg-purple hover:text-white sm:h-12 sm:w-12"
      >
        <svg
          viewBox="0 0 20 20"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 5l5 5-5 5" />
        </svg>
      </button>

      <figure className="rounded-3xl border border-border bg-surface p-8 shadow-[var(--shadow-sm)] sm:p-12">
        <div className="mb-4 text-2xl tracking-widest text-orange">★★★★★</div>
        <blockquote>
          <p className="font-display text-xl font-extrabold leading-snug text-ink sm:text-2xl">
            “{t.quote}”
          </p>
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
          <span
            className={`grid h-12 w-12 place-items-center rounded-full font-display text-base font-extrabold text-purple-deep ${t.avatarBg}`}
            aria-hidden
          >
            {t.initial}
          </span>
          <div>
            <div className="font-bold text-ink">{t.name}</div>
            <div className="text-sm text-ink-muted">
              {t.dog} · {t.service}
            </div>
          </div>
        </figcaption>
      </figure>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Vis anmeldelse ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current ? "w-8 bg-orange" : "w-2 bg-border-strong"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
