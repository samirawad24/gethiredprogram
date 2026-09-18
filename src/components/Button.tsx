import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "navy" | "outline" | "cta";
  size?: "md" | "sm";
  className?: string;
};

// The .btn classes live in globals.css so each theme restyles every button at
// once. Internal paths route through next/link; anchors and mailto stay plain.
export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: Props) {
  const classes = `btn btn--${variant} ${size === "sm" ? "btn--sm" : ""} ${className}`;

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
