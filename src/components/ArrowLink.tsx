import Link from "next/link";
import { ArrowUpRightIcon } from "./Icons";

type Props = { href: string; children: React.ReactNode; underline?: boolean; className?: string };

// Gold text link with the up-right arrow: "Explore service", "Meet Ana".
export default function ArrowLink({ href, children, underline = false, className = "" }: Props) {
  return (
    <Link href={href} className={`link-arrow ${underline ? "link-arrow--underline" : ""} ${className}`}>
      <span>{children}</span>
      <ArrowUpRightIcon />
    </Link>
  );
}
