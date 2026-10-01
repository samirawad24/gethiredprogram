import type { Dictionary } from "@/dictionaries";
import { pagePath } from "@/lib/routes";
import type { Locale } from "@/lib/site";
import AudienceCard from "./AudienceCard";
import SectionHead from "./SectionHead";

export default function Audiences({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { audiences } = dict;
  const ctaHref = pagePath(lang, "contact");

  return (
    <section id="who" aria-labelledby="who-heading" className="shell">
      <div className="section">
        <SectionHead id="who-heading" eyebrow={audiences.eyebrow} heading={audiences.heading} intro={audiences.intro} />
        <div
          className="columns"
          style={{ "--cols": 2, marginTop: "calc(44 * var(--u))" } as React.CSSProperties}
          data-reveal-stagger
        >
          <AudienceCard id="students" {...audiences.students} ctaHref={ctaHref} />
          <AudienceCard id="career-changers" {...audiences.changers} ctaHref={ctaHref} />
        </div>
      </div>
    </section>
  );
}
