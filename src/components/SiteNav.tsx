import Link from "next/link";
import { BrandMark } from "./PawLogo";

const navLinks = [
  { href: "/om", label: "Om oss" },
  { href: "/tjenester", label: "Tjenester" },
  { href: "/kurs", label: "Kurs" },
  { href: "/online", label: "Online kurs" },
  { href: "/podcast", label: "Podcast" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-8 px-6 py-4">
        <BrandMark />
        <nav className="hidden flex-1 md:block">
          <ul className="flex justify-center gap-7 text-sm font-medium text-ink">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-purple"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <Link
            href="/kontakt"
            className="hidden rounded-full border border-purple px-4 py-2 text-sm font-bold text-purple transition-colors hover:bg-purple-soft sm:inline-block"
          >
            Book time
          </Link>
          <Link
            href="/kurs"
            className="rounded-full bg-orange px-4 py-2 text-sm font-bold text-white shadow-[0_8px_20px_-8px_var(--orange)] transition-transform hover:-translate-y-0.5"
          >
            Se kurs
          </Link>
        </div>
      </div>
    </header>
  );
}
