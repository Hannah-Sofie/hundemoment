import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { courses, getCourse, formatFullDate } from "@/lib/courses";
import { getService } from "@/lib/services";
import { SignupButton } from "@/components/SignupButton";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: "Kurs ikke funnet" };
  return {
    title: `${course.title} — ${course.location}`,
    description: course.description,
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const service = getService(course.serviceSlug);
  const otherCourses = courses.filter((c) => c.slug !== course.slug).slice(0, 3);

  return (
    <div>
      {/* Hero med bilde */}
      <section className="relative">
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_25%]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(74,31,130,0.35) 0%, rgba(31,16,53,0.75) 100%)",
            }}
            aria-hidden
          />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-5xl px-6 pb-10 text-white">
              <Link
                href="/kurs"
                className="mb-4 inline-flex items-center gap-1 text-sm font-bold text-peach hover:underline"
              >
                ← Alle kurs
              </Link>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-peach">
                Kurs · {course.location}
              </p>
              <h1 className="font-display text-4xl font-extrabold sm:text-5xl md:text-6xl">
                {course.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Info + påmelding */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-lg text-ink">{course.description}</p>

            {service && (
              <div className="mt-8">
                <h2 className="font-display text-2xl font-extrabold">
                  Hva dere lærer
                </h2>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {service.learnPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-ink"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8 rounded-2xl border border-border bg-orange-soft/60 p-5 text-sm">
              <p className="font-bold text-ink">📮 Betaling via faktura</p>
              <p className="mt-1 text-ink-muted">
                Du betaler ikke ved påmelding. Vi sender faktura per e-post
                senest 14 dager før kursoppstart. Plassen din er reservert
                straks du melder deg på.
              </p>
            </div>
          </div>

          {/* Sidepanel: fakta + påmelding */}
          <aside className="rounded-3xl border border-border-strong bg-surface-soft p-6 shadow-[var(--shadow-sm)] md:sticky md:top-28 md:self-start">
            <dl className="flex flex-col gap-4">
              <Fact label="Oppstart" value={formatFullDate(course.startDate)} />
              <Fact label="Tid" value={`${course.weekday} kl. ${course.time}`} />
              <Fact label="Sted" value={course.location} />
              <Fact
                label="Varighet"
                value={
                  course.durationWeeks === 1
                    ? "1 helg"
                    : `${course.durationWeeks} uker`
                }
              />
              <Fact label="Instruktør" value={course.instructor} />
              <Fact
                label="Plasser igjen"
                value={`${course.spotsLeft} av ${course.spotsTotal}`}
                highlight={course.spotsLeft <= 2}
              />
            </dl>
            <div className="mt-6">
              <SignupButton course={course} />
            </div>
          </aside>
        </div>
      </section>

      {/* Andre kurs */}
      {otherCourses.length > 0 && (
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <h2 className="mb-6 font-display text-2xl font-extrabold">
              Andre kurs
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              {otherCourses.map((c) => (
                <Link
                  href={`/kurs/${c.slug}`}
                  key={c.slug}
                  className="group rounded-2xl border border-border bg-surface p-5 transition hover:border-border-strong hover:shadow-[var(--shadow-sm)]"
                >
                  <h3 className="font-display text-lg font-extrabold">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs text-ink-muted">
                    {c.weekday} {c.time} · {c.location}
                  </p>
                  <p className="mt-3 text-sm text-ink-muted line-clamp-2">
                    {c.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-purple">
                    Se kurset{" "}
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function Fact({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div>
      <dt className="text-[10px] font-bold uppercase tracking-widest text-ink-muted">
        {label}
      </dt>
      <dd
        className={`mt-0.5 font-semibold ${
          highlight ? "text-orange" : "text-ink"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}
