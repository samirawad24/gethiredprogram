import type { Dictionary } from "@/dictionaries";
import { pagePath } from "@/lib/routes";
import type { Locale } from "@/lib/site";
import ArrowLink from "./ArrowLink";

// "How can I help?": four short columns split by hairlines, then one link to
// the program. Ana wants them read as one program, not four things to buy.
export default function HelpColumns({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { help } = dict;
  const href = pagePath(lang, "services");

  return (
    <section aria-labelledby="help-heading" className="shell">
      <hr className="hairline" />
      <div className="help">
        <h2 id="help-heading" className="serif h-section text-center" data-reveal>
          {help.heading}
        </h2>
        <ul className="columns columns--help" style={{ marginTop: "calc(36 * var(--u))" }} data-reveal-stagger>
          {help.items.map((item) => (
            <li key={item.title}>
              <h3 className="serif h-card">{item.title}</h3>
              <p className="text-body" style={{ marginTop: "calc(12 * var(--u))" }}>
                {item.text}
              </p>
            </li>
          ))}
        </ul>
        <p className="help__more" data-reveal>
          <ArrowLink href={href}>{help.link}</ArrowLink>
        </p>
      </div>
    </section>
  );
}
