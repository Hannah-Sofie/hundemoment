export type ServiceAccent = "orange" | "purple" | "peach" | "purple-deep";

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  audience: string;
  format: string;
  learnPoints: string[];
  accent: ServiceAccent;
  image: string;
};

export const services: Service[] = [
  {
    slug: "valpekurs",
    title: "Valpekurs",
    short:
      "Grunnlaget for et godt hundeliv — sosialisering, gode vaner og en trygg start i familien.",
    intro:
      "Valpetiden legger grunnlaget for alt som kommer etterpå. Vi jobber med sosialisering, håndtering, og de første gode vanene som gjør hverdagen enklere for både valp og familie.",
    audience: "Valper omtrent 10–20 uker.",
    format: "Ukentlige samlinger utendørs over 6 uker · maks 8 valper per gruppe.",
    learnPoints: [
      "Trygg sosialisering med andre valper og mennesker",
      "Grunnleggende innkalling og kobletrening",
      "Håndtering, ro og passivitet i hjemmet",
      "Verktøy for å håndtere vanlige valpe-utfordringer",
    ],
    accent: "orange",
    image: "/line-og-sandra.jpg",
  },
  {
    slug: "sosialiseringskurs",
    title: "Sosialiseringskurs",
    short:
      "For hunder som trenger positive erfaringer med mennesker, dyr og ulike miljøer.",
    intro:
      "Sosialisering handler ikke om å møte flest mulig — det handler om å bygge positive assosiasjoner. Vi hjelper hunden din til å tolke omverdenen med ro og trygghet.",
    audience: "Hunder i alle aldre som trenger et styrket sosialiseringsgrunnlag.",
    format: "5 uker · én økt per uke · små grupper for tett oppfølging.",
    learnPoints: [
      "Positive møter med hunder, mennesker og lyder",
      "Lesing av hundens kroppsspråk og signaler",
      "Bygge trygghet i nye miljøer",
      "Verktøy for å håndtere overveldende situasjoner",
    ],
    accent: "purple",
    image: "/line-og-sandra.jpg",
  },
  {
    slug: "passeringskurs",
    title: "Passeringskurs",
    short:
      "Rolige passeringer forbi andre hunder, mennesker og forstyrrelser i hverdagen.",
    intro:
      "Passeringer er en av de vanligste utfordringene vi jobber med. Vi går gjennom teknikker og øvelser som gir deg og hunden mestring — og en roligere hverdag på tur.",
    audience: "Hunder som blir stresset, urolige eller reaktive ved møter på tur.",
    format: "4 uker · én økt per uke · gruppe med tilsvarende utfordringer.",
    learnPoints: [
      "Forstå hva som utløser reaksjonen",
      "Bygge nye assosiasjoner til passeringer",
      "Konkrete håndteringsverktøy",
      "Progresjon fra enkel til krevende situasjon",
    ],
    accent: "peach",
    image: "/line-og-sandra.jpg",
  },
  {
    slug: "beloenningsutvikling",
    title: "Belønningsutvikling",
    short:
      "Bygg verdi i belønningen så hunden faktisk vil samarbeide — fundamentet for all trening.",
    intro:
      "Belønning er ikke bare mat eller leke — det er verdi. Uten sterk belønning fungerer ingen trening. Vi bygger belønningsverdi som gjør resten av opplæringen mye enklere.",
    audience: "Alle hunder som skal videre i trening — spesielt før mer avansert arbeid.",
    format: "3 uker · én økt per uke · fokus på praktisk håndtering.",
    learnPoints: [
      "Slik bygger du verdi i mat, leke og kontakt",
      "Timing og tydelig belønningskommunikasjon",
      "Bruk av belønning i forskjellige situasjoner",
      "Overgang fra kontinuerlig til variabel belønning",
    ],
    accent: "purple-deep",
    image: "/line-og-sandra.jpg",
  },
  {
    slug: "privattimer",
    title: "Privattimer",
    short:
      "Skreddersydd oppfølging hjemme eller på tur — for konkrete utfordringer og rask fremgang.",
    intro:
      "Privattimer er den mest effektive måten å ta tak i akkurat deres situasjon på. Vi kommer hjem til dere eller møtes der utfordringen skjer, og bygger en plan sammen.",
    audience: "Hundeeiere med konkrete problemstillinger eller som ønsker tett oppfølging.",
    format: "60 min per time · som enkelttime eller klippekort.",
    learnPoints: [
      "Individuell kartlegging av situasjonen",
      "Praktisk trening der utfordringen skjer",
      "Konkret hjemmelekse mellom timene",
      "Rabatt ved kjøp av klippekort",
    ],
    accent: "orange",
    image: "/line-og-sandra.jpg",
  },
  {
    slug: "camp",
    title: "Camp",
    short:
      "Intensive treningssamlinger over flere dager — sosialt, lærerikt og dypt fokusert.",
    intro:
      "Camp er for deg som vil dykke skikkelig ned i trening sammen med hunden din. Flere dager med teori, praktiske økter og god tid til å prøve, feile og lære.",
    audience: "Motiverte hundeeiere som vil løfte samspillet med hunden sin.",
    format: "2–3 dager · overnatting mulig · teori og praksis i veksling.",
    learnPoints: [
      "Dypdykk i valgt tema (varierer per samling)",
      "Praktisk trening i ulike miljøer",
      "Individuelle tilbakemeldinger fra Line og Sandra",
      "Fellesskap med andre hundeentusiaster",
    ],
    accent: "purple",
    image: "/line-og-sandra.jpg",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
