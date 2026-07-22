import Link from "next/link";
import { BrandMark } from "./PawLogo";

const utforsk = [
  { href: "/om", label: "Om oss" },
  { href: "/tjenester", label: "Tjenester" },
  { href: "/kurs", label: "Kurskalender" },
  { href: "/online", label: "Online kurs" },
  { href: "/podcast", label: "Podcast" },
  { href: "/kontakt", label: "Kontakt" },
];

const sosiale = [
  {
    href: "https://www.instagram.com/hundemoment.no/",
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    href: "https://www.tiktok.com/@hundemoment.no",
    label: "TikTok",
    icon: TikTokIcon,
  },
  {
    href: "https://www.facebook.com/hundemoment",
    label: "Facebook",
    icon: FacebookIcon,
  },
  {
    href: "https://snapchat.com/add/hundemoment",
    label: "Snapchat",
    icon: SnapchatIcon,
  },
  {
    href: "https://open.spotify.com/search/l%C3%A6r%20om%20hund",
    label: "Spotify",
    icon: SpotifyIcon,
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-soft">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        {/* Kolonne 1: Brand + intro + sosiale */}
        <div>
          <BrandMark />
          <p className="mt-4 max-w-sm text-sm text-ink-muted">
            Positiv hundetrening for hverdagen. Kurs, privattimer og online
            opplæring for hele hundelivet.
          </p>
          <div className="mt-6">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-ink-muted">
              Følg oss
            </h3>
            <div className="flex flex-wrap gap-2">
              {sosiale.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-surface text-ink transition hover:-translate-y-0.5 hover:bg-purple hover:text-white"
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Kolonne 2: Utforsk */}
        <div>
          <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-ink-muted">
            Utforsk
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            {utforsk.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-ink transition-colors hover:text-purple"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolonne 3: Kontakt */}
        <div>
          <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-ink-muted">
            Kontakt
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2">
              <span aria-hidden className="mt-0.5">📮</span>
              <a
                href="mailto:post@hundemoment.no"
                className="text-ink hover:text-purple"
              >
                post@hundemoment.no
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden className="mt-0.5">📞</span>
              <a
                href="tel:+4700000000"
                className="text-ink hover:text-purple"
              >
                +47 000 00 000
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden className="mt-0.5">📍</span>
              <span className="text-ink">
                Oslo — Bygdøy, Grefsen, Sagene og Skøyen
              </span>
            </li>
          </ul>
        </div>

        {/* Kolonne 4: Nyhetsbrev */}
        <div>
          <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-ink-muted">
            Hold deg oppdatert
          </h3>
          <p className="mb-4 text-sm text-ink-muted">
            Få beskjed når nye kurs settes opp og når vi slipper nye episoder av
            LÆR OM HUND.
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="din@epost.no"
              aria-label="E-post for nyhetsbrev"
              className="rounded-full border border-border-strong bg-surface px-4 py-2.5 text-sm text-ink outline-none transition focus:border-purple focus:ring-2 focus:ring-purple-soft"
            />
            <button
              type="submit"
              className="rounded-full bg-orange px-4 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_-8px_var(--orange)] transition-transform hover:-translate-y-0.5"
            >
              Meld meg på nyhetsbrev
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-6 py-5 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Hundemoment</span>
          <div className="flex flex-wrap gap-4">
            <Link href="/personvern" className="hover:text-purple">
              Personvern
            </Link>
            <Link href="/vilkar" className="hover:text-purple">
              Vilkår
            </Link>
            <span>Laget med varme og pote-avtrykk</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.1z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function SnapchatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.166.008C9.037-.16 5.887 2.048 4.941 5.03c-.323 1.017-.281 2.717-.239 4.079.005.199.011.395.014.578-.283.157-.596.219-.895.219-.482 0-.919-.157-1.145-.312-.108-.074-.223-.111-.34-.111-.156 0-.311.068-.418.199-.145.176-.183.437-.096.678.157.436.717.828 1.635 1.137.194.065.401.128.596.19.096.031.235.075.32.115.086.077.079.187.036.336-.05.174-.65 2.271-3.088 2.66-.311.05-.542.324-.519.638.007.093.031.184.078.267.408.712 1.746.997 3.024 1.152.056.109.11.291.148.416.043.144.086.286.145.42.191.4.517.577.87.577.147 0 .308-.024.478-.049.223-.033.474-.07.795-.07.223 0 .453.02.696.061.522.09.981.42 1.484.795.649.484 1.386 1.033 2.507 1.033.089 0 .18-.005.269-.014.043-.005.116-.011.174-.011.061 0 .142.008.196.014.089.009.181.014.269.014 1.122 0 1.858-.549 2.508-1.034.502-.375.961-.704 1.484-.795.242-.041.472-.061.696-.061.323 0 .573.037.795.07.171.025.322.049.478.049.353 0 .679-.177.87-.577.06-.134.104-.276.148-.42.038-.125.091-.307.147-.416 1.278-.155 2.617-.44 3.024-1.152.048-.083.072-.174.079-.267.023-.314-.208-.588-.519-.639-2.438-.388-3.038-2.485-3.089-2.659-.042-.15-.05-.259.036-.336.086-.04.224-.084.32-.115.196-.062.402-.125.596-.19.918-.309 1.478-.701 1.635-1.137.087-.241.049-.502-.096-.678-.107-.131-.263-.199-.418-.199-.117 0-.232.037-.34.111-.226.155-.663.312-1.145.312-.299 0-.612-.062-.895-.219.003-.183.009-.379.014-.578.042-1.362.084-3.062-.239-4.079C18.113 2.048 14.963-.16 11.834.008h.332z" />
    </svg>
  );
}

function SpotifyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.301.421-1.021.599-1.561.3z" />
    </svg>
  );
}
