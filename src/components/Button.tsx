import Link from "next/link";
import { ArrowRightIcon } from "./Icons";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "navy" | "outline" | "cta" | "flow";
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

  // The flow variant needs its own innards: two arrows that slide through, a
  // label that shifts across, and a circle that grows to fill the pill. All of
  // it is decorative, so only the label is left in the accessible name.
  const content =
    variant === "flow" ? (
      <>
        <ArrowRightIcon className="btn-flow__arrow btn-flow__arrow--in" />
        <span className="btn-flow__label">{children}</span>
        <span aria-hidden="true" className="btn-flow__fill" />
        <ArrowRightIcon className="btn-flow__arrow btn-flow__arrow--out" />
      </>
    ) : (
      children
    );

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {content}
    </a>
  );
}
