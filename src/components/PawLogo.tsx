import Link from "next/link";

type Props = {
  className?: string;
  size?: number;
};

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

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 font-display font-extrabold text-purple text-lg tracking-tight ${className}`}
    >
      <PawIcon className="text-orange" />
      Hundemoment
    </Link>
  );
}
