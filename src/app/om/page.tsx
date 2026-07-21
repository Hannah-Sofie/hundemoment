import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Hundemoment drives av Line og Sandra — to hundetrenere med lidenskap for læringsteori og modustrening.",
};

export default function OmPage() {
  return (
    <div>
      <section
        style={{
          background:
            "linear-gradient(180deg, var(--purple-soft), transparent)",
        }}
      >
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-orange">
            Om oss 🧡
          </p>
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            Line &amp; Sandra — to trenere, én filosofi.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">
            Vi tror på trening som varer. Positive metoder, tydelig
            kommunikasjon og respekt for hunden er kjernen i alt vi gjør.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 font-display text-2xl font-extrabold">
              Filosofien
            </h2>
            <p className="text-ink-muted">
              Vi jobber med <strong className="text-ink">modustrening</strong>{" "}
              og læringsteori. I stedet for å bare se på hva hunden gjør, leter
              vi etter grunnen bak atferden — og hvilken følelse den kommer fra.
            </p>
          </div>
          <div>
            <h2 className="mb-4 font-display text-2xl font-extrabold">
              For hvem?
            </h2>
            <p className="text-ink-muted">
              Fra ivrige valper til erfarne turkompiser. Både førstegangseiere
              som trenger grunnleggende trening, og de som vil dypere inn i
              samspillet med hunden sin.
            </p>
          </div>
          <div>
            <h2 className="mb-4 font-display text-2xl font-extrabold">
              Hvor er vi?
            </h2>
            <p className="text-ink-muted">
              Fysiske kurs holdes i Oslo, med kursplasser på Bygdøy, Grefsen,
              Skøyen og Sagene. Online kurs kan du følge hvor som helst.
            </p>
          </div>
          <div>
            <h2 className="mb-4 font-display text-2xl font-extrabold">
              LÆR OM HUND
            </h2>
            <p className="text-ink-muted">
              Podcasten vår slippes ny hver torsdag på Spotify. Sesong 1 heter{" "}
              <strong className="text-ink">FUNDAMENTET</strong> — det vi mener
              alle hundeeiere burde ha kunnskap om.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
