import { Fragment } from "react";
import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import { pagePath } from "@/lib/routes";
import { site, type Locale } from "@/lib/site";

type Props = { text: string; dict: Dictionary; lang: Locale };

// Swaps the {tokens} in policy and consent copy for links and settings, so the
// dictionaries never hard-code an email address or a URL.
export default function TokenText({ text, dict, lang }: Props) {
  const tokens: Record<string, React.ReactNode> = {
    email: (
      <a href={`mailto:${site.email}`} className="underline">
        {site.email}
      </a>
    ),
    legalName: site.legalName,
    location: site.location,
    privacy: (
      <Link href={pagePath(lang, "privacy")} className="underline">
        {dict.legal.privacy.heading}
      </Link>
    ),
    terms: (
      <Link href={pagePath(lang, "terms")} className="underline">
        {dict.legal.terms.heading}
      </Link>
    ),
    cookies: (
      <Link href={pagePath(lang, "cookies")} className="underline">
        {dict.legal.cookies.heading}
      </Link>
    ),
  };

  return text.split(/(\{\w+\})/).map((part, i) => {
    const key = part.match(/^\{(\w+)\}$/)?.[1];
    return <Fragment key={i}>{key && key in tokens ? tokens[key] : part}</Fragment>;
  });
}
