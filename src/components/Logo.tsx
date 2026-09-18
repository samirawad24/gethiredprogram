import Image from "next/image";
import { asset, site } from "@/lib/site";

type Props = { className?: string; title?: string };

// Ana's badge. This is her real mark, not a redrawing of it: navy and gold
// rings, four gold diamonds, and the arrow standing in for the H in "Hired".
// Sized by the className the caller passes.
export default function Logo({ className = "", title }: Props) {
  return (
    <Image
      src={asset(site.logo)}
      alt={title ?? ""}
      aria-hidden={title ? undefined : true}
      width={512}
      height={512}
      className={className}
    />
  );
}
