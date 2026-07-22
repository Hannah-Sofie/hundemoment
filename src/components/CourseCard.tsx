import Image from "next/image";
import Link from "next/link";
import {
  type Course,
  formatDay,
  formatMonth,
  getSpotStatus,
} from "@/lib/courses";
import { SignupButton } from "./SignupButton";

const pillColor = {
  orange: "bg-orange",
  purple: "bg-purple",
  "purple-deep": "bg-purple-deep",
} as const;

export function CourseCard({ course }: { course: Course }) {
  const status = getSpotStatus(course);
  const badgeStyle =
    status === "full"
      ? "bg-danger text-white"
      : status === "limited"
        ? "bg-orange text-white"
        : "bg-success text-white";
  const badgeText = status === "full" ? "Fullt" : `${course.spotsLeft} plasser igjen`;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-sm)] transition hover:-translate-y-0.5 hover:border-border-strong">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-[center_25%]"
        />
        <div
          className={`absolute left-4 top-4 flex h-14 w-14 flex-col items-center justify-center rounded-2xl font-display text-white shadow-lg ${pillColor[course.accent]}`}
        >
          <span className="text-lg font-extrabold leading-none tabular-nums">
            {formatDay(course.startDate)}
          </span>
          <span className="mt-0.5 text-[9px] uppercase tracking-widest opacity-90">
            {formatMonth(course.startDate)}
          </span>
        </div>
        <div className="absolute right-4 top-4">
          <span
            className={`rounded-full px-3 py-1 text-[11px] font-bold shadow-sm ${badgeStyle}`}
          >
            {badgeText}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-extrabold">{course.title}</h3>

        <ul className="mt-4 flex flex-col gap-2 text-sm text-ink-muted">
          <li className="flex items-center gap-2">
            <span aria-hidden>🗓</span>
            <span>
              {course.weekday} {course.time} · {course.durationWeeks}{" "}
              {course.durationWeeks === 1 ? "helg" : "uker"}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden>📍</span>
            <span>{course.location}</span>
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden>👤</span>
            <span>Instruktør: {course.instructor}</span>
          </li>
        </ul>

        <p className="mt-4 flex-1 text-sm text-ink-muted line-clamp-2">
          {course.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <SignupButton course={course} status={status} />
          <Link
            href={`/kurs/${course.slug}`}
            className="rounded-full border-[1.5px] border-purple px-4 py-2 text-sm font-bold text-purple transition-colors hover:bg-purple-soft"
          >
            Les mer
          </Link>
        </div>
      </div>
    </article>
  );
}
