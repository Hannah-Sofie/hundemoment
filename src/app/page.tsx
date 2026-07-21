import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Valpekurs",
    description:
      "Grunnlaget for et godt hundeliv. Sosialisering, kall og de første gode vanene i familien.",
    price: "Fra 3 200 kr",
    accent: "orange" as const,
  },
  {
    title: "Grunnkurs",
    description:
      "For hunder fra 6 måneder. Lydighet, passivitet og hverdagsutfordringer — bygget på læringsteori.",
    price: "Fra 3 500 kr",
    accent: "purple" as const,
  },
  {
    title: "Privattimer",
    description:
      "Skreddersydd oppfølging hjemme eller på tur. Vi finner grunnen bak atferden, ikke bare symptomene.",
    price: "850 kr / time",
    accent: "peach" as const,
  },
];

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
};

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

        <div className="relative mx-auto flex w-full max-w-6xl items-end px-6 pb-16 pt-32 md:pb-20 md:pt-40">
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
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="relative overflow-hidden rounded-3xl border border-border bg-surface-soft p-6"
              >
                <span
                  className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${accentBg[service.accent]}`}
                  aria-hidden
                />
                <h3 className="relative mt-1 font-display text-xl font-extrabold">
                  {service.title}
                </h3>
                <p className="relative mt-2 text-sm text-ink-muted">
                  {service.description}
                </p>
                <p className="relative mt-4 font-display font-extrabold text-purple">
                  {service.price}
                </p>
              </article>
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

      {/* Upcoming */}
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
    </div>
  );
}
