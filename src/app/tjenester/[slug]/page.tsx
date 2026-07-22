import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getService, services } from "@/lib/services";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Ikke funnet" };
  return {
    title: service.title,
    description: service.short,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div>
      <section
        style={{
          background:
            "linear-gradient(180deg, var(--purple-soft), transparent)",
        }}
      >
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Link
            href="/tjenester"
            className="mb-6 inline-flex items-center gap-1 text-sm font-bold text-purple hover:underline"
          >
            ← Alle tjenester
          </Link>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-orange">
            Tilbud
          </p>
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-muted">
            {service.intro}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface-soft p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-orange">
              For hvem
            </p>
            <p className="mt-2 text-ink">{service.audience}</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface-soft p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-orange">
              Format
            </p>
            <p className="mt-2 text-ink">{service.format}</p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="font-display text-2xl font-extrabold">
            Hva dere lærer
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {service.learnPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-ink">
                <span
                  aria-hidden
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-wrap gap-3 rounded-3xl border border-border bg-surface-soft p-8">
          <div className="flex-1 min-w-[200px]">
            <h3 className="font-display text-xl font-extrabold">
              Interessert?
            </h3>
            <p className="mt-1 text-sm text-ink-muted">
              Ta kontakt for oppstartsdatoer og pris — vi svarer innen én
              arbeidsdag.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="rounded-full bg-orange px-6 py-3 text-sm font-bold text-white shadow-[0_10px_28px_-10px_var(--orange)] transition-transform hover:-translate-y-0.5"
            >
              Ta kontakt →
            </Link>
            <Link
              href="/kurs"
              className="rounded-full border-[1.5px] border-purple px-6 py-3 text-sm font-bold text-purple transition-colors hover:bg-purple-soft"
            >
              Se kurskalender
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <h2 className="mb-6 font-display text-2xl font-extrabold">
            Andre tjenester
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link
                href={`/tjenester/${r.slug}`}
                key={r.slug}
                className="group rounded-2xl border border-border bg-surface p-5 transition hover:border-border-strong hover:shadow-[var(--shadow-sm)]"
              >
                <h3 className="font-display text-lg font-extrabold">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-ink-muted line-clamp-2">
                  {r.short}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-purple">
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
    </div>
  );
}
