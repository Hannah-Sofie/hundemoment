import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Hundemoment er en Oslo-basert hundetrener som jobber med positiv trening for hverdagen.",
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
            Om Hundemoment
          </p>
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            Trening som starter med tillit.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">
            Hundemoment er drevet av lidenskap for gode hundeliv. Vi bruker
            positive metoder som fungerer i den ekte hverdagen — ikke bare på
            kursplassen.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 font-display text-2xl font-extrabold">
              Vår filosofi
            </h2>
            <p className="text-ink-muted">
              Vi bygger på moderne, forskningsbasert hundetrening. Belønning,
              tydelig kommunikasjon og respekt for hundens behov er kjernen i
              alt vi gjør.
            </p>
          </div>
          <div>
            <h2 className="mb-4 font-display text-2xl font-extrabold">
              For hvem?
            </h2>
            <p className="text-ink-muted">
              Fra ivrige valper til erfarne turkompiser. Vi hjelper både
              førstegangseiere som trenger grunnleggende trening, og de som vil
              utfordre seg videre med triks eller nose work.
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
              Sertifisering
            </h2>
            <p className="text-ink-muted">
              Instruktøren er utdannet gjennom anerkjente hundefaglige
              utdanninger og oppdaterer seg kontinuerlig.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
