import Link from "next/link";
import { HappyDog } from "@/components/HappyDog";

const services = [
  {
    title: "Valpekurs",
    description:
      "Grunnlaget for et godt hundeliv. Sosialisering, kall, kobletrening og god start i familielivet.",
    price: "Fra 3 200 kr",
    accent: "orange" as const,
  },
  {
    title: "Grunnkurs",
    description:
      "For hunder fra 6 måneder. Vi jobber med lydighet, passivitet og hverdagsutfordringer.",
    price: "Fra 3 500 kr",
    accent: "purple" as const,
  },
  {
    title: "Privattimer",
    description:
      "Skreddersydd oppfølging hjemme eller på tur. For konkrete utfordringer og rask fremgang.",
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
    title: "Trikstrening for viderekomne",
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
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 90% 20%, var(--orange-soft), transparent 55%), radial-gradient(circle at 10% 90%, var(--purple-soft), transparent 55%), var(--surface)",
        }}
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.15fr_1fr] md:items-center md:py-28">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-orange">
              Positiv trening · Oslo &amp; online
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-5xl md:text-6xl">
              Sammen bygger vi trygge,{" "}
              <span className="relative inline-block text-orange">
                glade hunder
                <span
                  className="absolute inset-x-0 -z-10 h-3 rounded-xl bg-peach opacity-60"
                  style={{ bottom: "0.25rem" }}
                />
              </span>
              .
            </h1>
            <p className="mt-6 max-w-lg text-lg text-ink-muted">
              Kurs, privattimer og online opplæring for valpen, ungdomshunden og
              den erfarne firbeinte. Trening som fungerer i hverdagen — for hund
              og eier.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/kurs"
                className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-bold text-white shadow-[0_10px_28px_-10px_var(--orange)] transition-transform hover:-translate-y-0.5"
              >
                Se kommende kurs →
              </Link>
              <Link
                href="/kontakt"
                className="rounded-full border-[1.5px] border-purple px-6 py-3 text-sm font-bold text-purple transition-colors hover:bg-purple-soft"
              >
                Bok privattime
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-4 text-sm text-ink-muted">
              <div className="flex">
                <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-surface bg-peach text-xs font-bold text-purple-deep">
                  M
                </span>
                <span className="-ml-2 grid h-8 w-8 place-items-center rounded-full border-2 border-surface bg-purple-soft text-xs font-bold text-purple-deep">
                  L
                </span>
                <span className="-ml-2 grid h-8 w-8 place-items-center rounded-full border-2 border-surface bg-orange-soft text-xs font-bold text-purple-deep">
                  K
                </span>
              </div>
              <div>
                <div className="tracking-widest text-orange">★★★★★</div>
                <div>240+ fornøyde hundeeiere</div>
              </div>
            </div>
          </div>
          <HappyDog className="mx-auto w-full max-w-sm" />
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
                Kurs og trening som passer dere.
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

      {/* CTA band */}
      <section
        className="border-t border-border"
        style={{
          background:
            "linear-gradient(135deg, var(--purple), var(--purple-deep))",
        }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-peach">
              Trening du kan følge når du vil
            </p>
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
              Online kurs — se, øv og repeter.
            </h2>
          </div>
          <Link
            href="/online"
            className="rounded-full bg-orange px-6 py-3 text-sm font-bold text-white shadow-[0_10px_28px_-10px_var(--orange)] transition-transform hover:-translate-y-0.5"
          >
            Utforsk online kurs →
          </Link>
        </div>
      </section>
    </div>
  );
}
