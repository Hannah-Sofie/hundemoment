# 🐾 Hundemoment

Nettside for hundetrening — kurskatalog, påmelding, online kurs og adminpanel.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS 4** med custom designtokens
- **Supabase** — database, auth, fillagring
- **Vercel** — hosting

## Status

- ✅ Hjemmeside og info-sider
- 🚧 [Database og adminpanel](https://github.com/Hannah-Sofie/hundemoment/issues/1)
- ⏳ [Kurskalender, påmelding og faktura-varsel](https://github.com/Hannah-Sofie/hundemoment/issues/2)
- ⏳ [Online kurs med video og "min side"](https://github.com/Hannah-Sofie/hundemoment/issues/3)
- ⏳ [Polering, SEO og deploy](https://github.com/Hannah-Sofie/hundemoment/issues/4)

Se alle [åpne issues](https://github.com/Hannah-Sofie/hundemoment/issues) for full oversikt.

## Kjør lokalt

```bash
npm install
npm run dev
```

Åpne [http://localhost:3000](http://localhost:3000).

## Prosjektstruktur

```
src/
├── app/            # Next.js App Router — én mappe per rute
│   ├── page.tsx    # Hjemmeside
│   ├── om/         # /om
│   ├── tjenester/  # /tjenester
│   ├── kurs/       # /kurs (kurskatalog)
│   ├── online/     # /online (online kurs)
│   └── kontakt/    # /kontakt
├── components/     # Delte komponenter (SiteNav, SiteFooter, m.fl.)
├── lib/            # Klienter og hjelpere (Supabase, m.m.)
└── app/globals.css # Designtokens (farger, typografi)

supabase/           # SQL-skjema og migreringer
design/             # Design-mockup som referanse
```

## Design

- **Farger:** Kongelig lilla `#6B2FBA`, varm oransje `#FF6B35`, fersken, krem, plomme
- **Typografi:** Nunito (display) + Inter (brød)
- **Full mockup:** [`design/mockups.html`](./design/mockups.html)

## Branching og commits

Følger [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Når |
|--------|-----|
| `feat/` | Ny funksjonalitet |
| `fix/` | Bugfix |
| `chore/` | Rydding, oppgraderinger |
| `docs/` | Kun dokumentasjon |
| `refactor/` | Kode-restrukturering |
| `style/` | Kun formatering/CSS |

- `main` — produksjonsklar kode. Alle endringer via PR.
- Branchnavn: `feat/kort-beskrivelse`, `fix/kort-beskrivelse`, osv.
- Commit-meldinger: `feat: kort beskrivelse av endring` (samme prefiks som branchen).
