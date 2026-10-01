import Link from "next/link";
import { ArrowRightIcon } from "./Icons";

type Props = {
  href: string;
  children: React.ReactNode;
  size?: "lg" | "md" | "sm";
  /** The hero's button: same look at rest, the 21st.dev flow effect on hover. */
  flow?: boolean;
  className?: string;
};

// The solid navy button from the mockup. Internal paths route through
// next/link; anchors and mailto stay plain.
export default function Button({ href, children, size = "md", flow = false, className = "" }: Props) {
  const classes = `btn btn--${size} ${flow ? "btn--flow" : ""} ${className}`;

  // The flow innards are decorative, so only the label stays in the
  // accessible name.
  const content = flow ? (
    <>
      <ArrowRightIcon className="btn-flow__arrow" />
      <span className="btn-flow__label">{children}</span>
      <span aria-hidden="true" className="btn-flow__fill" />
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
