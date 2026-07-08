import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tjenester",
  description:
    "Kurs, privattimer og online opplæring — se hva Hundemoment tilbyr.",
};

const services = [
  {
    title: "Valpekurs",
    price: "Fra 3 200 kr",
    duration: "6 uker · 60 min",
    description:
      "Grunnlaget for et godt hundeliv. Vi jobber med sosialisering, innkalling, kobletrening og gode vaner i hjemmet.",
    perks: [
      "For valper 10–20 uker",
      "Maks 8 valper per gruppe",
      "Ukentlige samlinger utendørs",
    ],
  },
  {
    title: "Grunnkurs",
    price: "Fra 3 500 kr",
    duration: "8 uker · 60 min",
    description:
      "For hunder fra 6 måneder. Fokus på lydighet, passivitet, kontakt og hverdagsutfordringer som forbipasseringer og kø.",
    perks: [
      "For hunder fra 6 måneder",
      "Individuelle tilpasninger",
      "Hjemmelekser mellom timene",
    ],
  },
  {
    title: "Privattimer",
    price: "850 kr / time",
    duration: "60 min",
    description:
      "Skreddersydd oppfølging hjemme, på tur eller på kursplassen. Perfekt for konkrete utfordringer eller de som vil ha rask fremgang.",
    perks: [
      "Timen tilpasses deres behov",
      "Kan holdes hjemme hos deg",
      "Rabatt på klippekort",
    ],
  },
  {
    title: "Trikstrening",
    price: "Fra 2 800 kr",
    duration: "5 uker · 60 min",
    description:
      "Kreativ og morsom trening som bygger samarbeid mellom deg og hunden. Passer alle hunder som mestrer grunnleggende signal.",
    perks: [
      "For hunder som kan grunnleggende",
      "Nye triks hver uke",
      "Filming av fremgang",
    ],
  },
  {
    title: "Nose work",
    price: "Fra 2 400 kr",
    duration: "4 uker · 60 min",
    description:
      "Aktiviser hunden mentalt gjennom målrettet søk. Sliten hund er lykkelig hund — nose work er balsam for hodet.",
    perks: [
      "Passer alle hundetyper",
      "Både innendørs og ute",
      "Gode øvelser å ta med hjem",
    ],
  },
  {
    title: "Online kurs",
    price: "Fra 490 kr",
    duration: "I eget tempo",
    description:
      "Videokurs du kjøper én gang og har for alltid. Se og øv når det passer deg — perfekt supplement eller helt for seg selv.",
    perks: [
      "Livstidstilgang",
      "Se på mobil, TV eller pc",
      "Sjekklister og øvelser",
    ],
  },
];

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
            Alt vi tilbyr — under ett tak.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-muted">
            Fra første valpetime til avansert nose work. Velg det som passer
            dere.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-border bg-surface p-7 shadow-[var(--shadow-sm)]"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="font-display text-2xl font-extrabold">
                  {service.title}
                </h2>
                <span className="rounded-full bg-purple-soft px-3 py-1 text-xs font-bold text-purple">
                  {service.duration}
                </span>
              </div>
              <p className="mt-3 text-sm text-ink-muted">{service.description}</p>
              <ul className="mt-4 flex flex-col gap-1.5 text-sm">
                {service.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                    {perk}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <span className="font-display text-lg font-extrabold text-purple">
                  {service.price}
                </span>
                <Link
                  href="/kontakt"
                  className="text-sm font-bold text-orange hover:underline"
                >
                  Bestill →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
