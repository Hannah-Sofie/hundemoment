import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Ta kontakt med Hundemoment for spørsmål eller å bestille time.",
};

export default function KontaktPage() {
  return (
    <div>
      <section
        style={{
          background:
            "linear-gradient(180deg, var(--orange-soft), transparent)",
        }}
      >
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-orange">
            Kontakt
          </p>
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            Vi svarer gjerne på det du lurer på.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-muted">
            Send oss en melding om kurs, privattimer eller online kurs — vi tar
            kontakt innen én arbeidsdag.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <form className="flex flex-col gap-4 rounded-3xl border border-border bg-surface p-8 shadow-[var(--shadow-sm)]">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-sm">
                <span className="font-bold text-ink">Navn</span>
                <input
                  type="text"
                  name="navn"
                  required
                  className="rounded-xl border border-border-strong bg-surface-soft px-4 py-2.5 outline-none transition focus:border-purple focus:ring-2 focus:ring-purple-soft"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm">
                <span className="font-bold text-ink">E-post</span>
                <input
                  type="email"
                  name="epost"
                  required
                  className="rounded-xl border border-border-strong bg-surface-soft px-4 py-2.5 outline-none transition focus:border-purple focus:ring-2 focus:ring-purple-soft"
                />
              </label>
            </div>
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-bold text-ink">Emne</span>
              <select
                name="emne"
                className="rounded-xl border border-border-strong bg-surface-soft px-4 py-2.5 outline-none transition focus:border-purple focus:ring-2 focus:ring-purple-soft"
              >
                <option>Spørsmål om kurs</option>
                <option>Bestille privattime</option>
                <option>Online kurs</option>
                <option>Annet</option>
              </select>
            </label>
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-bold text-ink">Melding</span>
              <textarea
                name="melding"
                rows={5}
                required
                className="rounded-xl border border-border-strong bg-surface-soft px-4 py-2.5 outline-none transition focus:border-purple focus:ring-2 focus:ring-purple-soft"
              />
            </label>
            <button
              type="submit"
              className="mt-2 self-start rounded-full bg-orange px-6 py-3 text-sm font-bold text-white shadow-[0_10px_28px_-10px_var(--orange)] transition-transform hover:-translate-y-0.5"
            >
              Send melding
            </button>
          </form>

          <aside className="flex flex-col gap-6 rounded-3xl border border-border bg-surface-soft p-8">
            <div>
              <h2 className="font-display text-lg font-extrabold">E-post</h2>
              <a
                href="mailto:post@hundemoment.no"
                className="mt-1 block text-purple hover:underline"
              >
                post@hundemoment.no
              </a>
            </div>
            <div>
              <h2 className="font-display text-lg font-extrabold">Sted</h2>
              <p className="mt-1 text-ink-muted">
                Oslo — Bygdøy, Grefsen, Sagene og Skøyen.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-extrabold">Åpningstid</h2>
              <p className="mt-1 text-ink-muted">
                Vi svarer på henvendelser innen én arbeidsdag.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
