export type Instructor = "Line" | "Sandra" | "Line og Sandra";

export type Course = {
  slug: string;
  title: string;
  serviceSlug: string;
  startDate: string;
  weekday: string;
  time: string;
  location: string;
  instructor: Instructor;
  durationWeeks: number;
  spotsTotal: number;
  spotsLeft: number;
  description: string;
  image: string;
  accent: "orange" | "purple" | "purple-deep";
};

const NORWEGIAN_MONTHS = [
  "jan",
  "feb",
  "mar",
  "apr",
  "mai",
  "jun",
  "jul",
  "aug",
  "sep",
  "okt",
  "nov",
  "des",
];

export function formatDay(iso: string): string {
  const d = new Date(iso);
  return String(d.getDate()).padStart(2, "0");
}

export function formatMonth(iso: string): string {
  const d = new Date(iso);
  return NORWEGIAN_MONTHS[d.getMonth()];
}

export function formatFullDate(iso: string): string {
  const d = new Date(iso);
  return `${d.getDate()}. ${NORWEGIAN_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

export const courses: Course[] = [
  {
    slug: "valpekurs-bygdoy-aug",
    title: "Valpekurs — kveld",
    serviceSlug: "valpekurs",
    startDate: "2026-08-12",
    weekday: "Torsdager",
    time: "18:00",
    location: "Bygdøy",
    instructor: "Line",
    durationWeeks: 6,
    spotsTotal: 8,
    spotsLeft: 3,
    description:
      "Grunnleggende valpekurs med sosialisering, kall og hverdagsvaner. Perfekt start for valpen din.",
    image: "/line-og-sandra.jpg",
    accent: "orange",
  },
  {
    slug: "sosialiseringskurs-grefsen-aug",
    title: "Sosialiseringskurs",
    serviceSlug: "sosialiseringskurs",
    startDate: "2026-08-19",
    weekday: "Mandager",
    time: "17:30",
    location: "Grefsen",
    instructor: "Sandra",
    durationWeeks: 5,
    spotsTotal: 8,
    spotsLeft: 5,
    description:
      "For hunder som trenger positive erfaringer med mennesker, dyr og ulike miljøer.",
    image: "/line-og-sandra.jpg",
    accent: "purple",
  },
  {
    slug: "passeringskurs-sagene-sep",
    title: "Passeringskurs",
    serviceSlug: "passeringskurs",
    startDate: "2026-09-02",
    weekday: "Lørdager",
    time: "11:00",
    location: "Sagene",
    instructor: "Line",
    durationWeeks: 4,
    spotsTotal: 6,
    spotsLeft: 2,
    description:
      "Rolige passeringer forbi andre hunder, mennesker og forstyrrelser i hverdagen.",
    image: "/line-og-sandra.jpg",
    accent: "purple-deep",
  },
  {
    slug: "beloenningsutvikling-skoyen-sep",
    title: "Belønningsutvikling",
    serviceSlug: "beloenningsutvikling",
    startDate: "2026-09-14",
    weekday: "Søndager",
    time: "13:00",
    location: "Skøyen",
    instructor: "Line og Sandra",
    durationWeeks: 3,
    spotsTotal: 8,
    spotsLeft: 4,
    description:
      "Bygg verdi i belønningen så hunden faktisk vil samarbeide — fundamentet for all trening.",
    image: "/line-og-sandra.jpg",
    accent: "orange",
  },
  {
    slug: "camp-hostferie",
    title: "Camp — høstferie",
    serviceSlug: "camp",
    startDate: "2026-10-04",
    weekday: "Fredag–søndag",
    time: "10:00",
    location: "Sagene",
    instructor: "Line og Sandra",
    durationWeeks: 1,
    spotsTotal: 12,
    spotsLeft: 6,
    description:
      "Intensiv treningssamling over tre dager — teori og praksis i veksling, med masse individuell oppfølging.",
    image: "/line-og-sandra.jpg",
    accent: "purple",
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
