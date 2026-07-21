"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "./PawLogo";

const navLinks = [
  { href: "/om", label: "Om oss" },
  { href: "/tjenester", label: "Tjenester" },
  { href: "/kurs", label: "Kurs" },
  { href: "/online", label: "Online kurs" },
  { href: "/podcast", label: "Podcast" },
  { href: "/kontakt", label: "Kontakt" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-8 px-6 py-6">
        <BrandMark />

        <nav className="hidden flex-1 md:block">
          <ul className="flex justify-center gap-8 text-base font-semibold text-ink">
            {navLinks.map((link) => {
              const active = isActivePath(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`
                      group relative inline-block py-1.5 transition-colors
                      ${active ? "text-purple" : "hover:text-purple"}
                    `}
                  >
                    {link.label}
                    <span
                      aria-hidden
                      className={`
                        absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-orange
                        origin-left transition-transform duration-200
                        ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                      `}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <Link
            href="/kontakt"
            className="hidden rounded-full border-[1.5px] border-purple px-5 py-2.5 text-sm font-bold text-purple transition-colors hover:bg-purple-soft sm:inline-block"
          >
            Book time
          </Link>
          <Link
            href="/kurs"
            className="rounded-full bg-orange px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_-8px_var(--orange)] transition-transform hover:-translate-y-0.5"
          >
            Se kurs
          </Link>
        </div>
      </div>
    </header>
  );
}
