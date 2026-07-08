export function HappyDog({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 380 380"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="200" cy="200" r="170" fill="var(--peach)" opacity="0.5" />
      <g fill="var(--purple)" opacity="0.35">
        <g transform="translate(40,80) scale(0.35)">
          <ellipse cx="20" cy="26" rx="10" ry="8" />
          <circle cx="9" cy="15" r="4" />
          <circle cx="31" cy="15" r="4" />
          <circle cx="3" cy="22" r="3" />
          <circle cx="37" cy="22" r="3" />
        </g>
        <g transform="translate(310,110) scale(0.28) rotate(20)">
          <ellipse cx="20" cy="26" rx="10" ry="8" />
          <circle cx="9" cy="15" r="4" />
          <circle cx="31" cy="15" r="4" />
          <circle cx="3" cy="22" r="3" />
          <circle cx="37" cy="22" r="3" />
        </g>
        <g transform="translate(340,300) scale(0.32) rotate(-20)">
          <ellipse cx="20" cy="26" rx="10" ry="8" />
          <circle cx="9" cy="15" r="4" />
          <circle cx="31" cy="15" r="4" />
          <circle cx="3" cy="22" r="3" />
          <circle cx="37" cy="22" r="3" />
        </g>
      </g>
      <g transform="translate(90,120)">
        <ellipse cx="110" cy="150" rx="95" ry="60" fill="var(--purple)" />
        <rect x="45" y="180" width="22" height="45" rx="10" fill="var(--purple-deep)" />
        <rect x="80" y="185" width="22" height="45" rx="10" fill="var(--purple-deep)" />
        <rect x="130" y="185" width="22" height="45" rx="10" fill="var(--purple-deep)" />
        <rect x="165" y="180" width="22" height="45" rx="10" fill="var(--purple-deep)" />
        <path
          d="M195 130 Q 230 100 220 65"
          stroke="var(--purple)"
          strokeWidth="20"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="55" cy="95" r="52" fill="var(--purple)" />
        <path d="M20 60 Q 5 30 30 25 Q 45 40 40 75 Z" fill="var(--purple-deep)" />
        <path d="M90 60 Q 105 30 80 25 Q 65 40 70 75 Z" fill="var(--purple-deep)" />
        <ellipse cx="55" cy="115" rx="28" ry="20" fill="var(--peach)" />
        <ellipse cx="55" cy="103" rx="6" ry="4" fill="var(--ink)" />
        <circle cx="35" cy="85" r="4" fill="var(--ink)" />
        <circle cx="75" cy="85" r="4" fill="var(--ink)" />
        <circle cx="36" cy="83" r="1.5" fill="white" />
        <circle cx="76" cy="83" r="1.5" fill="white" />
        <path
          d="M50 120 Q 55 128 60 120"
          stroke="var(--ink)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <ellipse cx="55" cy="126" rx="4" ry="6" fill="var(--orange)" />
        <path
          d="M15 130 Q 55 145 95 130"
          stroke="var(--orange)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="55" cy="150" r="9" fill="var(--orange)" stroke="white" strokeWidth="1.5" />
        <text
          x="55"
          y="153"
          textAnchor="middle"
          fontSize="8"
          fontWeight="800"
          fill="white"
          fontFamily="var(--font-display)"
        >
          HM
        </text>
      </g>
    </svg>
  );
}
