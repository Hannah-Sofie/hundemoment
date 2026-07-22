import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";
import { courses } from "@/lib/courses";
import { CourseCard } from "@/components/CourseCard";

const upcomingCourses = courses.slice(0, 3);

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
    icon: "📍",
    accent: "orange",
  },
  {
    q: "Hva koster kursene?",
    a: "Prisene varierer med kurstype og lengde. Ta kontakt for oppdaterte priser og informasjon om faktura — vi svarer innen én arbeidsdag.",
    icon: "💰",
    accent: "purple",
  },
  {
    q: "Hvor gammel må hunden være?",
    a: "Valpekurs passer for valper 10–20 uker. For våre andre kurs varierer aldersgrensen — sjekk detaljene på hvert kurs, eller ta kontakt om du er usikker.",
    icon: "🐶",
    accent: "peach",
  },
  {
    q: "Hvordan betaler jeg?",
    a: "Vi sender faktura per e-post etter påmelding. Betalingsfristen er 14 dager, og plassen din er reservert straks du har meldt deg på.",
    icon: "📮",
    accent: "orange",
  },
  {
    q: "Kan jeg avbestille?",
    a: "Ja — du kan avbestille gratis frem til 7 dager før oppstart. Etter det belastes hele kursavgiften.",
    icon: "↩️",
    accent: "purple",
  },
  {
    q: "Hva om kurset er fullt?",
    a: "Ta kontakt så setter vi deg på venteliste. Vi setter opp nye kull jevnlig og gir dere beskjed så snart det åpner seg plass.",
    icon: "⏳",
    accent: "peach",
  },
] as const;

const faqAccentBorder = {
  orange: "border-l-orange",
  purple: "border-l-purple",
  peach: "border-l-peach",
} as const;

const faqAccentBg = {
  orange: "bg-orange-soft",
  purple: "bg-purple-soft",
  peach: "bg-peach/40",
} as const;

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
          {/* Lettere lilla-wash — beholder ansikter tydelig */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(74,31,130,0.2) 0%, rgba(74,31,130,0.4) 100%)",
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

      {/* Om oss — teaser med bilde ved siden av tekst */}
      <section
        className="border-t border-border"
        style={{
          background:
            "linear-gradient(180deg, var(--orange-soft) 0%, transparent 80%)",
        }}
      >
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-[1fr_1.1fr]">
            <div className="relative mx-auto w-full max-w-md md:mx-0">
              <div
                className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] bg-purple-soft"
                aria-hidden
              />
              <div
                className="absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] bg-orange-soft"
                aria-hidden
              />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[var(--shadow)]">
                <Image
                  src="/line-og-sandra.jpg"
                  alt="Line og Sandra"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover object-[center_20%]"
                />
              </div>
            </div>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-orange">
                Om oss
              </p>
              <h2 className="font-display text-3xl font-extrabold sm:text-4xl md:text-5xl">
                To trenere, én filosofi.
              </h2>
              <p className="mt-6 text-lg text-ink-muted sm:text-xl">
                Line og Sandra bygger trening på{" "}
                <strong className="text-ink">modustrening</strong> og{" "}
                <strong className="text-ink">læringsteori</strong>. Vi vil ikke
                bare endre atferd — vi vil forstå den, og finne grunnen bak det
                hunden gjør.
              </p>
              <Link
                href="/om"
                className="mt-8 inline-flex items-center gap-1 rounded-full border-[1.5px] border-purple px-6 py-3 text-sm font-bold text-purple transition-colors hover:bg-purple-soft"
              >
                Bli bedre kjent med oss →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        className="border-t border-border"
        style={{
          background:
            "linear-gradient(180deg, var(--purple-soft) 0%, transparent 60%)",
        }}
      >
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
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                href={`/tjenester/${service.slug}`}
                key={service.slug}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-sm)] transition hover:-translate-y-0.5 hover:border-border-strong"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-[center_25%] transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${accentBg[service.accent]}`}
                    aria-hidden
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-extrabold">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-ink-muted">
                    {service.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-purple">
                    Les mer{" "}
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
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
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {upcomingCourses.map((course) => (
              <CourseCard key={course.slug} course={course} />
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
      <section
        className="border-t border-border"
        style={{
          background:
            "linear-gradient(180deg, var(--purple-soft) 0%, transparent 60%)",
        }}
      >
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
                className={`group overflow-hidden rounded-2xl border border-border border-l-[6px] bg-surface transition hover:shadow-[var(--shadow-sm)] ${faqAccentBorder[faq.accent]}`}
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 p-5 text-ink">
                  <span
                    aria-hidden
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-lg ${faqAccentBg[faq.accent]}`}
                  >
                    {faq.icon}
                  </span>
                  <span className="flex-1 font-display text-lg font-extrabold">
                    {faq.q}
                  </span>
                  <span
                    aria-hidden
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-surface-soft text-purple transition-transform group-open:rotate-180"
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
                <div className="px-5 pb-6 pl-[70px] text-ink-muted">{faq.a}</div>
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
