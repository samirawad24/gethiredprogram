type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "navy" | "outline" | "cta";
  size?: "md" | "sm";
  className?: string;
};

// In-page anchor styled as a button. The .btn classes live in globals.css so
// each theme can restyle every button at once. Smooth scrolling is global too.
export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: Props) {
  return (
    <a
      href={href}
      className={`btn btn--${variant} ${size === "sm" ? "btn--sm" : ""} ${className}`}
    >
      {children}
    </a>
  );
}
