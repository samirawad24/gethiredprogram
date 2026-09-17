import Image from "next/image";
import { asset, site } from "@/lib/site";
import Logo from "./Logo";

type Props = {
  /** How hard to knock the image back so text stays readable on top. */
  scrim: "navy" | "navy-deep" | "light";
  /** The translucent badge from the boards, bottom-right. */
  watermark?: boolean;
  src?: string;
};

// A full-bleed image layer for a section. The parent needs .has-backdrop, and
// its content needs to sit in a .shell so it lands above this.
export default function Backdrop({ scrim, watermark = false, src }: Props) {
  return (
    <div className="backdrop" aria-hidden="true">
      <Image
        src={asset(src ?? site.images.backdrop)}
        alt=""
        width={1920}
        height={1080}
        sizes="100vw"
        className="backdrop__img"
      />
      <span className={`backdrop__scrim backdrop__scrim--${scrim}`} />
      {watermark && <Logo className="backdrop__watermark" />}
    </div>
  );
}
