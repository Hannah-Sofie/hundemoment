import Link from "next/link";

type Props = {
  className?: string;
  size?: number;
};

/**
 * Enkel pote-ikon — brukes som lite grafisk element (favicon, dekorasjon).
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
 * Merkevare-lockup i stamp-sticker-stil: "hunde" + oransje "MOMENT.NO".
 */
export function BrandLockup({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const dims = {
    sm: { pad: "px-2.5 py-1", hunde: "text-xs", moment: "text-sm" },
    md: { pad: "px-3 py-1.5", hunde: "text-sm", moment: "text-lg" },
    lg: { pad: "px-5 py-3", hunde: "text-lg", moment: "text-3xl" },
  }[size];

  return (
    <span
      className={`inline-flex items-baseline gap-1.5 font-display font-black leading-none ${className}`}
    >
      <span className={`${dims.hunde} text-ink tracking-tight`}>hunde</span>
      <span
        className={`${dims.moment} inline-block rounded-md ${dims.pad} tracking-wider text-white`}
        style={{
          background: "var(--orange)",
          boxShadow:
            "inset 0 0 0 2px white, 0 0 0 2px var(--orange), 2px 3px 0 rgba(31,16,53,0.12)",
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
