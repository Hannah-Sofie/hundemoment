import type { Metadata } from "next";
import { courses } from "@/lib/courses";
import { CourseCard } from "@/components/CourseCard";

export const metadata: Metadata = {
  title: "Kurskalender",
  description:
    "Se alle kommende hundekurs hos Hundemoment. Meld deg på direkte fra kurset.",
};

export default function KursPage() {
  return (
    <div>
      <section
        style={{
          background:
            "linear-gradient(180deg, var(--purple-soft), transparent)",
        }}
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-orange">
            Kurskalender
          </p>
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            Kommende kurs.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-muted">
            Klikk deg inn på et kurs for detaljer, eller meld på direkte fra
            kortet.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}
