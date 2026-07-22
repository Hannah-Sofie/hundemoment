"use client";

import { useEffect, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { type Course, formatFullDate } from "@/lib/courses";

type Mode = "guest" | "login" | "register";

type Props = {
  course: Course;
  onClose: () => void;
};

export function SignupModal({ course, onClose }: Props) {
  const [mode, setMode] = useState<Mode>("guest");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onEsc);
    };
  }, [onClose]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // TODO: send til /api/signups når Supabase er koblet opp
    console.log("Ny påmelding:", { courseSlug: course.slug, ...data });
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setSubmitted(true);
  }

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="signup-title"
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/60 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <div
        className="relative my-8 w-full max-w-2xl rounded-3xl bg-surface shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Lukk"
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-surface-soft text-ink-muted transition hover:bg-purple-soft hover:text-purple"
        >
          ✕
        </button>

        {submitted ? (
          <SuccessView course={course} onClose={onClose} />
        ) : (
          <>
            <CourseSummary course={course} />

            <div className="border-t border-border px-8 py-6">
              <ModeTabs mode={mode} setMode={setMode} />

              {mode === "login" ? (
                <LoginForm />
              ) : mode === "register" ? (
                <SignupForm course={course} onSubmit={handleSubmit} submitting={submitting} withPassword />
              ) : (
                <SignupForm course={course} onSubmit={handleSubmit} submitting={submitting} />
              )}
            </div>
          </>
        )}
      </div>
    </div>,
    document.body,
  );
}

function CourseSummary({ course }: { course: Course }) {
  return (
    <div className="rounded-t-3xl bg-purple-soft/60 px-8 py-6">
      <p className="mb-1 text-xs font-bold uppercase tracking-widest text-orange">
        Meld på
      </p>
      <h2 id="signup-title" className="font-display text-2xl font-extrabold text-ink">
        {course.title}
      </h2>
      <p className="mt-2 text-sm text-ink-muted">{course.description}</p>
      <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
        <Info label="Oppstart" value={formatFullDate(course.startDate)} />
        <Info label="Tid" value={`${course.weekday} kl. ${course.time}`} />
        <Info label="Sted" value={course.location} />
        <Info
          label="Varighet"
          value={
            course.durationWeeks === 1
              ? "1 helg"
              : `${course.durationWeeks} uker`
          }
        />
        <Info label="Instruktør" value={course.instructor} />
        <Info label="Plasser igjen" value={`${course.spotsLeft} av ${course.spotsTotal}`} />
      </dl>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] font-bold uppercase tracking-widest text-ink-muted">
        {label}
      </dt>
      <dd className="mt-0.5 font-semibold text-ink">{value}</dd>
    </div>
  );
}

function ModeTabs({ mode, setMode }: { mode: Mode; setMode: (m: Mode) => void }) {
  const tabs: { key: Mode; label: string }[] = [
    { key: "guest", label: "Fortsett som gjest" },
    { key: "login", label: "Logg inn" },
    { key: "register", label: "Registrer bruker" },
  ];
  return (
    <div className="mb-6 flex flex-wrap gap-2 rounded-full bg-surface-soft p-1">
      {tabs.map((t) => (
        <button
          key={t.key}
          type="button"
          onClick={() => setMode(t.key)}
          className={`flex-1 whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition ${
            mode === t.key
              ? "bg-purple text-white shadow-sm"
              : "text-ink-muted hover:text-ink"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

function LoginForm() {
  return (
    <form className="flex flex-col gap-4">
      <Field name="epost" label="E-post" type="email" required />
      <Field name="passord" label="Passord" type="password" required />
      <button
        type="submit"
        className="mt-2 rounded-full bg-orange px-6 py-3 text-sm font-bold text-white shadow-[0_10px_28px_-10px_var(--orange)] transition-transform hover:-translate-y-0.5"
      >
        Logg inn og fortsett →
      </button>
      <p className="text-center text-xs text-ink-muted">
        Har du glemt passordet?{" "}
        <a href="#" className="text-purple hover:underline">
          Nullstill her
        </a>
      </p>
    </form>
  );
}

function SignupForm({
  course,
  onSubmit,
  submitting,
  withPassword = false,
}: {
  course: Course;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  submitting: boolean;
  withPassword?: boolean;
}) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <Section title="Om deg">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field name="fornavn" label="Fornavn" required />
          <Field name="etternavn" label="Etternavn" required />
          <Field name="epost" label="E-post" type="email" required />
          <Field name="telefon" label="Telefon" type="tel" required />
          <Field name="adresse" label="Adresse" required className="sm:col-span-2" />
          {withPassword && (
            <Field
              name="passord"
              label="Velg passord"
              type="password"
              required
              hint="Minst 8 tegn"
              className="sm:col-span-2"
            />
          )}
        </div>
      </Section>

      <Section title="Om hunden">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field name="hundenavn" label="Hundens navn" required />
          <Field name="rase" label="Rase" required />
          <Field name="alder" label="Alder" placeholder="F.eks. 4 måneder" required />
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-bold text-ink">Kjønn</span>
            <div className="flex gap-3">
              <RadioChip name="kjonn" value="tispe" label="Tispe" />
              <RadioChip name="kjonn" value="hann" label="Hannhund" defaultChecked />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <span className="text-sm font-bold text-ink">Kastrert / sterilisert</span>
            <div className="flex gap-3">
              <RadioChip name="kastrert" value="ja" label="Ja" />
              <RadioChip name="kastrert" value="nei" label="Nei" defaultChecked />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Noe vi bør vite?">
        <Field
          name="annet"
          label="Annen relevant informasjon"
          type="textarea"
          placeholder="Utfordringer, spesielle behov, allergier — det du tenker er nyttig for oss å vite på forhånd."
        />
      </Section>

      <div className="rounded-2xl border border-border bg-orange-soft/60 p-4 text-sm">
        <p className="font-bold text-ink">📮 Betaling via faktura</p>
        <p className="mt-1 text-ink-muted">
          Du betaler ikke nå. Vi sender faktura per e-post senest 14 dager før
          kursoppstart. Plassen din er reservert straks du melder deg på.
        </p>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="rounded-full bg-orange px-6 py-3.5 text-base font-bold text-white shadow-[0_10px_28px_-10px_var(--orange)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {submitting ? "Sender…" : `Meld på ${course.title} →`}
      </button>
    </form>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-orange">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  placeholder,
  hint,
  className = "",
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  hint?: string;
  className?: string;
}) {
  const inputClasses =
    "rounded-xl border border-border-strong bg-surface-soft px-4 py-2.5 text-ink outline-none transition focus:border-purple focus:ring-2 focus:ring-purple-soft";

  return (
    <label className={`flex flex-col gap-1.5 text-sm ${className}`}>
      <span className="font-bold text-ink">
        {label} {required && <span className="text-orange">*</span>}
      </span>
      {type === "textarea" ? (
        <textarea
          name={name}
          rows={3}
          placeholder={placeholder}
          className={inputClasses}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={inputClasses}
        />
      )}
      {hint && <span className="text-xs text-ink-muted">{hint}</span>}
    </label>
  );
}

function RadioChip({
  name,
  value,
  label,
  defaultChecked,
}: {
  name: string;
  value: string;
  label: string;
  defaultChecked?: boolean;
}) {
  return (
    <label className="flex-1 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        className="peer sr-only"
      />
      <span className="block rounded-full border border-border-strong px-4 py-2 text-center text-sm font-bold text-ink-muted transition peer-checked:border-purple peer-checked:bg-purple peer-checked:text-white">
        {label}
      </span>
    </label>
  );
}

function SuccessView({ course, onClose }: { course: Course; onClose: () => void }) {
  return (
    <div className="p-8 text-center sm:p-12">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-orange text-3xl text-white">
        ✓
      </div>
      <h2 className="mt-6 font-display text-2xl font-extrabold text-ink sm:text-3xl">
        Du er meldt på!
      </h2>
      <p className="mx-auto mt-3 max-w-md text-ink-muted">
        Vi har mottatt påmeldingen til <strong>{course.title}</strong>. Du får en
        bekreftelse på e-post nå, og faktura senest 14 dager før kursoppstart.
      </p>
      <button
        type="button"
        onClick={onClose}
        className="mt-8 rounded-full bg-orange px-6 py-3 text-sm font-bold text-white shadow-[0_10px_28px_-10px_var(--orange)] transition-transform hover:-translate-y-0.5"
      >
        Lukk
      </button>
    </div>
  );
}
