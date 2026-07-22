import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";

const upcoming = [
  {
    day: "12",
    month: "Aug",
    title: "Valpekurs — kveld",
    meta: "Torsdager 18:00 · Bygdøy",
    spots: "3 plasser igjen",
    pillColor: "bg-purple",
  },
  {
    day: "19",
    month: "Aug",
    title: "Grunnkurs A",
    meta: "Mandager 17:30 · Grefsen",
    spots: "5 plasser igjen",
    pillColor: "bg-orange",
  },
  {
    day: "02",
    month: "Sep",
    title: "Modustrening for viderekomne",
    meta: "Lørdager 11:00 · Sagene",
    spots: "2 plasser igjen",
    pillColor: "bg-purple-deep",
  },
];

const accentBg = {
  orange: "bg-orange-soft/60",
  purple: "bg-purple-soft",
  peach: "bg-peach/35",
  "purple-deep": "bg-purple-soft",
} as const;

// TODO: erstatt med ekte kundesitater
const testimonials = [
  {
    name: "Mari",
    dog: "Bailey (border collie)",
    service: "Valpekurs",
    quote:
      "Vi kom med en usikker valp og gikk hjem med en trygg og glad hund. Metodikken og tydeligheten deres har vært gull.",
    initial: "M",
    avatarBg: "bg-peach",
  },
  {
    name: "Kristian",
    dog: "Nala (blanding)",
    service: "Passeringskurs",
    quote:
      "Etter tre timer med Line skjønte jeg mer om Nala enn på tre år. Nå går vi endelig turer uten stress.",
    initial: "K",
    avatarBg: "bg-purple-soft",
  },
  {
    name: "Ida",
    dog: "Toppen (labrador)",
    service: "Belønningsutvikling",
    quote:
      "Praktisk, faglig og med masse humor. Sandra viste oss at belønning ikke er lik godbit — det har snudd alt.",
    initial: "I",
    avatarBg: "bg-orange-soft",
  },
];

const faqs = [
  {
    q: "Hvor holdes kursene?",
    a: "Vi har kursplasser på Bygdøy, Grefsen, Skøyen og Sagene i Oslo. Sted varierer med hvilket kurs — det står oppgitt på hvert kurs i kalenderen.",
  },
  {
    q: "Hva koster kursene?",
    a: "Prisene varierer med kurstype og lengde. Ta kontakt for oppdaterte priser og informasjon om faktura — vi svarer innen én arbeidsdag.",
  },
  {
    q: "Hvor gammel må hunden være?",
    a: "Valpekurs passer for valper 10–20 uker. For våre andre kurs varierer aldersgrensen — sjekk detaljene på hvert kurs, eller ta kontakt om du er usikker.",
  },
  {
    q: "Hvordan betaler jeg?",
    a: "Vi sender faktura per e-post etter påmelding. Betalingsfristen er 14 dager, og plassen din er reservert straks du har meldt deg på.",
  },
  {
    q: "Kan jeg avbestille?",
    a: "Ja — du kan avbestille gratis frem til 7 dager før oppstart. Etter det belastes hele kursavgiften.",
  },
  {
    q: "Hva om kurset er fullt?",
    a: "Ta kontakt så setter vi deg på venteliste. Vi setter opp nye kull jevnlig og gir dere beskjed så snart det åpner seg plass.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero — foto som full-bleed bakgrunn, dekker skjermen minus nav */}
      <section className="relative flex min-h-[calc(100dvh-6rem)] overflow-hidden">
        {/* Bakgrunnsbilde */}
        <div className="absolute inset-0">
          <Image
            src="/line-og-sandra.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_25%]"
          />
          {/* Myk lilla-wash over hele bildet — jevn stemning uten å skjule ansikter */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(74,31,130,0.35) 0%, rgba(74,31,130,0.55) 100%)",
            }}
            aria-hidden
          />
        </div>

        <div className="relative mx-auto flex w-full max-w-6xl items-center px-6 py-16 md:py-20">
          <div
            className="max-w-3xl text-white"
            style={{ textShadow: "0 2px 12px rgba(31,16,53,0.55)" }}
          >
            <p className="mb-5 text-base font-bold uppercase tracking-[0.2em] text-peach sm:text-lg">
              Line &amp; Sandra 🧡 hundetrenere
            </p>
            <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
              Vi bygger <span className="text-orange">fundamentet</span> for et godt hundeliv.
            </h1>
            <p className="mt-7 max-w-2xl text-xl text-white/95 sm:text-2xl">
              Positiv trening bygget på modustrening og læringsteori. Kurs,
              privattimer og online opplæring — for valpen, ungdomshunden og
              alt derimellom.
            </p>
            <div
              className="mt-9 flex flex-wrap gap-3"
              style={{ textShadow: "none" }}
            >
              <Link
                href="/kurs"
                className="inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-base font-bold text-white shadow-[0_10px_28px_-10px_var(--orange)] transition-transform hover:-translate-y-0.5"
              >
                Se kommende kurs →
              </Link>
              <Link
                href="/kontakt"
                className="rounded-full border-[1.5px] border-white/80 bg-white/15 px-7 py-3.5 text-base font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/25"
              >
                Book privattime
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Om oss — kort teaser med lenke til /om */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-24">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-orange">
            Om oss
          </p>
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl md:text-5xl">
            To trenere, én filosofi.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-muted sm:text-xl">
            Line og Sandra bygger trening på{" "}
            <strong className="text-ink">modustrening</strong> og{" "}
            <strong className="text-ink">læringsteori</strong>. Vi vil ikke bare
            endre atferd — vi vil forstå den, og finne grunnen bak det hunden
            gjør.
          </p>
          <Link
            href="/om"
            className="mt-8 inline-flex items-center gap-1 rounded-full border-[1.5px] border-purple px-6 py-3 text-sm font-bold text-purple transition-colors hover:bg-purple-soft"
          >
            Bli bedre kjent →
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange">
                Tilbud
              </p>
              <h2 className="max-w-md font-display text-3xl font-extrabold sm:text-4xl">
                Trening som passer dere.
              </h2>
            </div>
            <Link
              href="/tjenester"
              className="hidden text-sm font-bold text-purple sm:block"
            >
              Se alle tjenester →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                href={`/tjenester/${service.slug}`}
                key={service.slug}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-surface-soft p-6 transition hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[var(--shadow-sm)]"
              >
                <span
                  className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${accentBg[service.accent]}`}
                  aria-hidden
                />
                <h3 className="relative mt-1 font-display text-xl font-extrabold">
                  {service.title}
                </h3>
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
        </div>
      </section>

      {/* Kommende kurs */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange">
                Kommende kurs
              </p>
              <h2 className="max-w-md font-display text-3xl font-extrabold sm:text-4xl">
                Snart oppstart.
              </h2>
            </div>
            <Link href="/kurs" className="hidden text-sm font-bold text-purple sm:block">
              Hele kurskalenderen →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {upcoming.map((course) => (
              <Link
                href="/kurs"
                key={course.title}
                className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 transition hover:border-border-strong hover:shadow-[var(--shadow-sm)]"
              >
                <div
                  className={`flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl font-display text-white ${course.pillColor}`}
                >
                  <span className="text-2xl font-extrabold leading-none tabular-nums">
                    {course.day}
                  </span>
                  <span className="mt-0.5 text-[10px] uppercase tracking-widest opacity-90">
                    {course.month}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-display text-base font-bold">
                    {course.title}
                  </h3>
                  <p className="text-xs text-ink-muted">{course.meta}</p>
                  <span className="mt-1.5 inline-block rounded-full bg-orange-soft px-2 py-0.5 text-[11px] font-bold text-orange">
                    {course.spots}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast — hvit bakgrunn med lilla aksenter, ikke gradient */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl border border-border-strong bg-surface-soft p-10 md:p-14">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-orange">
                  🎧 Ny episode hver torsdag
                </p>
                <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
                  LÆR OM HUND —{" "}
                  <span className="text-purple">podcasten vår</span>.
                </h2>
                <p className="mt-4 max-w-xl text-lg text-ink-muted">
                  Vi tar deg med inn i hvordan vi tenker om hund — læringsteori,
                  modustrening og alt vi mener er viktig å snakke om.{" "}
                  <span className="font-bold text-ink">
                    Sesong 1: FUNDAMENTET.
                  </span>
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/podcast"
                  className="rounded-full border-[1.5px] border-purple px-5 py-2.5 text-sm font-bold text-purple transition-colors hover:bg-purple-soft"
                >
                  Om podcasten
                </Link>
                <a
                  href="https://open.spotify.com/search/l%C3%A6r%20om%20hund"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_28px_-10px_var(--orange)] transition-transform hover:-translate-y-0.5"
                >
                  🎧 Lytt på Spotify →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kundeanmeldelser — TODO: erstatt med ekte sitater */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange">
              Kundeanmeldelser
            </p>
            <h2 className="mx-auto max-w-xl font-display text-3xl font-extrabold sm:text-4xl">
              Ord fra dem som har trent med oss.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex h-full flex-col rounded-3xl border border-border bg-surface-soft p-6"
              >
                <div className="mb-3 tracking-widest text-orange">★★★★★</div>
                <blockquote className="flex-1 text-ink">
                  <p>“{t.quote}”</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-full font-display text-sm font-extrabold text-purple-deep ${t.avatarBg}`}
                    aria-hidden
                  >
                    {t.initial}
                  </span>
                  <div className="text-sm">
                    <div className="font-bold text-ink">{t.name}</div>
                    <div className="text-ink-muted">
                      {t.dog} · {t.service}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — vanlige spørsmål */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange">
              Vanlige spørsmål
            </p>
            <h2 className="mx-auto max-w-xl font-display text-3xl font-extrabold sm:text-4xl">
              Fikk du ikke svar på alt?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-ink-muted">
              Her har vi samlet det folk spør om oftest. Er det noe annet — ta
              kontakt, vi svarer gjerne.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-border bg-surface-soft transition open:bg-surface-soft hover:border-border-strong"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-display text-lg font-extrabold text-ink">
                  <span>{faq.q}</span>
                  <span
                    aria-hidden
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-purple-soft text-purple transition-transform group-open:rotate-180"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 8l5 5 5-5" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-ink-muted">{faq.a}</div>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/kontakt"
              className="inline-flex rounded-full bg-orange px-6 py-3 text-sm font-bold text-white shadow-[0_10px_28px_-10px_var(--orange)] transition-transform hover:-translate-y-0.5"
            >
              Kontakt oss →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
