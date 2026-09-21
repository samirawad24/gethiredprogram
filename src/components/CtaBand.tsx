import type { Dictionary } from "@/dictionaries";
import { pagePath } from "@/lib/routes";
import type { Locale } from "@/lib/site";
import Backdrop from "./Backdrop";
import Button from "./Button";

export default function CtaBand({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  return (
    <section aria-labelledby="cta-heading" className="on-dark has-backdrop grain section section--navy-deep">
      <Backdrop scrim="navy-deep" watermark />

      <div className="shell text-center" data-reveal>
        <h2 id="cta-heading" className="display display--section">
          {dict.cta.heading}
        </h2>
        <p className="lead mt-4 text-lg">{dict.cta.sub}</p>
        <Button href={pagePath(lang, "contact")} className="mt-8">
          {dict.cta.button}
        </Button>
      </div>
    </section>
  );
}
