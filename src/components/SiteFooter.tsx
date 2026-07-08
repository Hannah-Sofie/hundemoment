import Link from "next/link";
import { BrandMark } from "./PawLogo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <BrandMark />
          <p className="mt-4 max-w-sm text-sm text-ink-muted">
            Positiv hundetrening for hverdagen. Kurs, privattimer og online
            opplæring for hele hundelivet.
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-ink-muted">
            Utforsk
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link href="/om" className="hover:text-purple">
                Om oss
              </Link>
            </li>
            <li>
              <Link href="/tjenester" className="hover:text-purple">
                Tjenester
              </Link>
            </li>
            <li>
              <Link href="/kurs" className="hover:text-purple">
                Kurskalender
              </Link>
            </li>
            <li>
              <Link href="/online" className="hover:text-purple">
                Online kurs
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-ink-muted">
            Kontakt
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a href="mailto:post@hundemoment.no" className="hover:text-purple">
                post@hundemoment.no
              </a>
            </li>
            <li className="text-ink-muted">Oslo</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-xs text-ink-muted">
          <span>© {new Date().getFullYear()} Hundemoment</span>
          <span>Laget med varme og pote-avtrykk</span>
        </div>
      </div>
    </footer>
  );
}
