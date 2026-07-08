# 🐾 Hundemoment

Nettside for hundetrening — kurskatalog, påmelding, online kurs og adminpanel.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS 4** med custom designtokens
- **Supabase** — database, auth, fillagring _(kommer i etappe 2)_
- **Vercel** — hosting _(kommer i etappe 5)_

## Utviklingsplan

| Etappe | Hva | Status |
|--------|-----|--------|
| 1 | Hjemmeside og info-sider | ✅ Ferdig |
| [2](https://github.com/Hannah-Sofie/hundemoment/issues/1) | Database og adminpanel | 🚧 I arbeid |
| [3](https://github.com/Hannah-Sofie/hundemoment/issues/2) | Kurskalender, påmelding, faktura-varsel | ⏳ Ikke startet |
| [4](https://github.com/Hannah-Sofie/hundemoment/issues/3) | Online kurs med video + "min side" | ⏳ Ikke startet |
| [5](https://github.com/Hannah-Sofie/hundemoment/issues/4) | Polering, SEO, deploy | ⏳ Ikke startet |

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
└── app/globals.css # Designtokens (farger, typografi)

design/             # Design-mockup som referanse
```

## Design

- **Farger:** Kongelig lilla `#6B2FBA`, varm oransje `#FF6B35`, fersken, krem, plomme
- **Typografi:** Nunito (display) + Inter (brød)
- **Full mockup:** [`design/mockups.html`](./design/mockups.html)

## Branching

- `main` — produksjonsklar kode
- `etappe-N-navn` — feature-branches per etappe, merges via PR
