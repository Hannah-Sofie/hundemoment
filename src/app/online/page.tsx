import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online kurs",
  description: "Videokurs du kan følge i eget tempo.",
};

export default function OnlinePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24 text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-orange">
        Kommer snart
      </p>
      <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
        Online kurs bygges ut.
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-lg text-ink-muted">
        Videokursene lanseres i etappe 4. Meld deg på nyhetsbrev om du vil ha
        beskjed når de er klare.
      </p>
      <Link
        href="/kontakt"
        className="mt-8 inline-flex rounded-full bg-orange px-6 py-3 text-sm font-bold text-white shadow-[0_10px_28px_-10px_var(--orange)] transition-transform hover:-translate-y-0.5"
      >
        Si fra ved lansering
      </Link>
    </div>
  );
}
