import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Tjenester",
  description:
    "Kurs, privattimer og camp — se hva Line og Sandra tilbyr hos Hundemoment.",
};

const accentBg = {
  orange: "bg-orange-soft/60",
  purple: "bg-purple-soft",
  peach: "bg-peach/35",
  "purple-deep": "bg-purple-soft",
} as const;

export default function TjenesterPage() {
  return (
    <div>
      <section
        style={{
          background:
            "linear-gradient(180deg, var(--purple-soft), transparent)",
        }}
      >
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-orange">
            Tjenester
          </p>
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            Kurs og trening som passer dere.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-muted">
            Fra første valpetime til dedikerte camps. Klikk deg inn på det som
            passer for å lese mer.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              href={`/tjenester/${service.slug}`}
              key={service.slug}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-sm)] transition hover:-translate-y-0.5 hover:border-border-strong"
            >
              <span
                className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${accentBg[service.accent]}`}
                aria-hidden
              />
              <h2 className="relative font-display text-xl font-extrabold">
                {service.title}
              </h2>
              <p className="relative mt-2 flex-1 text-sm text-ink-muted">
                {service.short}
              </p>
              <span className="relative mt-5 inline-flex items-center gap-1 text-sm font-bold text-purple">
                Les mer{" "}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
