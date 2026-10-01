import type { Dictionary } from "@/dictionaries";
import { pagePath } from "@/lib/routes";
import type { Locale } from "@/lib/site";
import Button from "./Button";

// The closing line and button that sit right above the footer on every page.
export default function CtaBand({ dict, lang, divider = false }: { dict: Dictionary; lang: Locale; divider?: boolean }) {
  return (
    <section aria-labelledby="cta-heading" className="shell">
      {divider && <hr className="hairline" />}
      <div className="closing" data-reveal>
        <h2 id="cta-heading" className="serif h-close">
          {dict.cta.heading}
        </h2>
        <Button href={pagePath(lang, "contact")} size="md">
          {dict.cta.button}
        </Button>
      </div>
    </section>
  );
}
