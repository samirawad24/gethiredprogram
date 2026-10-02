import type { Dictionary } from "@/dictionaries";
import type { LegalPageKey } from "@/lib/routes";
import type { Locale } from "@/lib/site";
import PageShell from "./PageShell";
import PageHero from "./PageHero";
import TokenText from "./TokenText";

type Props = { lang: Locale; dict: Dictionary; page: LegalPageKey };

// Privacy, Terms and Cookies: the page hero, the date, then the sections at
// reading width.
export default function LegalPage({ lang, dict, page }: Props) {
  const { legal } = dict;
  const copy = legal[page];

  return (
    <PageShell lang={lang} dict={dict} page={page}>
      <PageHero eyebrow={copy.eyebrow} heading={copy.heading} lead={copy.lead} />
      <div className="shell">
        <hr className="hairline" />
        <div className="legal section">
          <p className="text-small">
            {legal.updatedLabel}: {legal.updated}
          </p>
          {copy.sections.map((section) => (
            <section key={section.heading} className="legal__section">
              <h2 className="serif h-card">{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-body">
                  <TokenText text={paragraph} dict={dict} lang={lang} />
                </p>
              ))}
              {section.list && (
                <ul className="tick-list text-body">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
