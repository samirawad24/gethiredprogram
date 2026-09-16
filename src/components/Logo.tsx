type Props = { className?: string; title?: string };

// Circular badge mark from the design boards. Draws in currentColor, so it
// works on white and on navy. Swap for a real logo file when one exists.
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
        <path id="logo-arc-bottom" d="M 22 50 A 28 28 0 0 0 78 50" />
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
        fontSize="6.4"
        fontWeight="600"
        letterSpacing="1.2"
        fontFamily="var(--font-sans)"
      >
        <textPath href="#logo-arc-bottom" startOffset="50%" textAnchor="middle">
          STUDENT SUCCESS
        </textPath>
      </text>

      <path d="M30 42h40" stroke="currentColor" strokeWidth="0.9" opacity="0.5" />
      <path d="M30 62h40" stroke="currentColor" strokeWidth="0.9" opacity="0.5" />
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
