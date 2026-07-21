import Link from "next/link";

type Props = {
  className?: string;
  size?: number;
};

/**
 * Enkel pote-ikon — brukes som lite grafisk element (footer, favicon).
 */
export function PawIcon({ className, size = 26 }: Props) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <ellipse cx="20" cy="26" rx="10" ry="8" />
      <ellipse cx="9" cy="15" rx="4" ry="5" transform="rotate(-15 9 15)" />
      <ellipse cx="31" cy="15" rx="4" ry="5" transform="rotate(15 31 15)" />
      <circle cx="3" cy="22" r="3" />
      <circle cx="37" cy="22" r="3" />
    </svg>
  );
}

/**
 * To små hundesilhuetter — henter det fra det faktiske Instagram-logoen.
 */
function DogSilhouettes({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 32"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Hund 1 (venstre) — sittende sett fra siden */}
      <path d="M4 26 L4 14 Q4 8 9 8 Q11 4 13 4 L13 8 Q17 8 17 14 L20 14 Q22 14 22 16 L22 26 L18 26 L18 20 L12 20 L12 26 Z" />
      {/* Hund 2 (høyre) — litt større, stående */}
      <path d="M28 26 L28 12 Q28 6 34 6 Q36 2 39 2 L39 7 Q45 7 45 13 L48 13 Q52 13 52 16 L52 26 L47 26 L47 22 L34 22 L34 26 Z" />
      {/* Halene */}
      <path d="M22 14 Q26 10 25 6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M52 13 Q56 8 55 4" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Fullt merkevare-lockup i stamp-sticker-stil som Instagram-logoen:
 * to hundesilhuetter, "hunde" i mørk tekst, "MOMENT.NO" i oransje stamp.
 */
export function BrandLockup({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const dims = {
    sm: { pad: "px-2.5 py-1", hunde: "text-xs", moment: "text-sm", dog: "h-3" },
    md: { pad: "px-3 py-1.5", hunde: "text-sm", moment: "text-lg", dog: "h-4" },
    lg: { pad: "px-5 py-3", hunde: "text-lg", moment: "text-3xl", dog: "h-7" },
  }[size];

  return (
    <span
      className={`inline-flex items-baseline gap-1.5 font-display font-black leading-none ${className}`}
    >
      <DogSilhouettes className={`${dims.dog} text-ink self-end mb-0.5`} />
      <span className={`${dims.hunde} text-ink tracking-tight`}>hunde</span>
      <span
        className={`${dims.moment} inline-block rounded-md ${dims.pad} tracking-wider text-white`}
        style={{
          background: "var(--orange)",
          boxShadow:
            "inset 0 0 0 2px white, 0 0 0 2px var(--orange), 2px 3px 0 rgba(31,16,53,0.15)",
          transform: "rotate(-2deg)",
        }}
      >
        MOMENT.NO
      </span>
    </span>
  );
}

/**
 * Nav-versjon: bruker brand lockup pakket i en Link.
 */
export function BrandMark({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <Link href="/" className={`inline-block ${className}`} aria-label="Hundemoment — til forsiden">
      <BrandLockup size={size} />
    </Link>
  );
}
