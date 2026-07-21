import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Podcast — LÆR OM HUND",
  description:
    "Line og Sandra tar deg med inn i hvordan de tenker om hund. Ny episode hver torsdag på Spotify.",
};

export default function PodcastPage() {
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
            🎧 Ny episode hver torsdag
          </p>
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            LÆR OM HUND — <span className="text-purple">podcasten vår</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">
            Vi tar deg med inn i hvordan vi tenker om hund. Læringsteori,
            modustrening og alt vi mener er viktig å snakke om — pakket inn i
            samtaler du kan høre på tur, i bilen eller mens du løser
            hverdagsutfordringer med hunden din.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://open.spotify.com/search/l%C3%A6r%20om%20hund"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-bold text-white shadow-[0_10px_28px_-10px_var(--orange)] transition-transform hover:-translate-y-0.5"
            >
              🎧 Lytt på Spotify →
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange">
              Sesong 1
            </p>
            <h2 className="mb-4 font-display text-2xl font-extrabold">
              FUNDAMENTET
            </h2>
            <p className="text-ink-muted">
              Det vi mener alle som eier hund burde ha mer kunnskap om — og vår
              måte å se, tenke og jobbe med hund på.
            </p>
          </div>
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange">
              Hvorfor lytte?
            </p>
            <h2 className="mb-4 font-display text-2xl font-extrabold">
              Kunnskap som fungerer i hverdagen
            </h2>
            <p className="text-ink-muted">
              Vi går i dybden på temaer vi selv brenner for. Målet er å lage et
              oppslagsverk du kan komme tilbake til når hverdagen med hund
              trenger et nytt perspektiv.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 rounded-3xl border border-border bg-surface-soft p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-xl font-extrabold">
              Vil du snakke med oss direkte?
            </h3>
            <p className="mt-1 text-sm text-ink-muted">
              Book en privattime eller meld deg på et kurs.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="rounded-full border-[1.5px] border-purple px-6 py-3 text-sm font-bold text-purple transition-colors hover:bg-purple-soft"
          >
            Ta kontakt →
          </Link>
        </div>
      </section>
    </div>
  );
}
