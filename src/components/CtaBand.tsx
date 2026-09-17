import type { Dictionary } from "@/dictionaries";
import Backdrop from "./Backdrop";
import Button from "./Button";

export default function CtaBand({ dict }: { dict: Dictionary }) {
  return (
    <section aria-labelledby="cta-heading" className="on-dark has-backdrop grain section section--navy-deep">
      <Backdrop scrim="navy-deep" watermark />

      <div className="shell text-center">
        <h2 id="cta-heading" className="display text-4xl sm:text-5xl">
          {dict.cta.heading}
        </h2>
        <p className="lead mt-4 text-lg">{dict.cta.sub}</p>
        <Button href="#booking" className="mt-8">
          {dict.cta.button}
        </Button>
      </div>
    </section>
  );
}
