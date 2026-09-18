import { site } from "@/lib/site";

type Props = { className?: string; title?: string };

// Circular badge mark. Draws in currentColor, so it works on white and on
// navy. The bottom arc carries Ana's name rather than a tagline: the practice
// is an extension of her, not a brand standing on its own. It reads from
// site.coachName so the two can never disagree.
// Swap for a real logo file when one exists.
export default function Logo({ className = "", title }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      className={className}
      fill="none"
    >
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="50" cy="50" r="41.5" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />

      <defs>
        <path id="logo-arc-top" d="M 17 50 A 33 33 0 0 1 83 50" />
        <path id="logo-arc-bottom" d="M 18 50 A 32 32 0 0 0 82 50" />
      </defs>

      <text
        fill="currentColor"
        fontSize="7.2"
        fontWeight="600"
        letterSpacing="1.4"
        fontFamily="var(--font-sans)"
      >
        <textPath href="#logo-arc-top" startOffset="50%" textAnchor="middle">
          CAREER COACH
        </textPath>
      </text>

      <text
        fill="currentColor"
        fontSize="7"
        fontWeight="600"
        letterSpacing="2"
        fontFamily="var(--font-sans)"
      >
        <textPath href="#logo-arc-bottom" startOffset="50%" textAnchor="middle">
          {site.coachName.toUpperCase()}
        </textPath>
      </text>

      <path d="M30 42h40" stroke="currentColor" strokeWidth="0.9" opacity="0.5" />
      <path d="M33 62h34" stroke="currentColor" strokeWidth="0.9" opacity="0.5" />
      <text
        x="50"
        y="56"
        textAnchor="middle"
        fill="currentColor"
        fontSize="16"
        fontWeight="600"
        fontFamily="var(--font-serif)"
      >
        Get Hired
      </text>
    </svg>
  );
}
