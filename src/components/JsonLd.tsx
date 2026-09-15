import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/site";
import { site } from "@/lib/site";

type Props = { lang: Locale; dict: Dictionary };

// Person + ProfessionalService structured data, linked to each other by @id.
export default function JsonLd({ lang, dict }: Props) {
  const pageUrl = `${site.url}/${lang}/`;
  const personId = `${site.url}/#person`;
  const serviceId = `${site.url}/#service`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.coachName,
        jobTitle: dict.schema.jobTitle,
        url: pageUrl,
        image: `${site.url}${site.images.hero}`,
        email: `mailto:${site.email}`,
        knowsLanguage: ["en", "es"],
        sameAs: [site.linkedin, site.instagram],
        worksFor: { "@id": serviceId },
      },
      {
        "@type": "ProfessionalService",
        "@id": serviceId,
        name: site.brand,
        url: pageUrl,
        description: dict.schema.serviceDescription,
        image: `${site.url}/${lang}/og.png`,
        email: site.email,
        founder: { "@id": personId },
        availableLanguage: ["English", "Spanish"],
        areaServed: "US",
        // PLACEHOLDER: confirm business location
        address: {
          "@type": "PostalAddress",
          addressRegion: "OH",
          addressCountry: "US",
        },
        sameAs: [site.instagram],
        inLanguage: lang,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
