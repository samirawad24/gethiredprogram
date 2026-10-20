import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { buildMetadata } from "@/lib/metadata";
import { hasLocale } from "@/lib/site";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import HelpColumns from "@/components/HelpColumns";
import GoalsBand from "@/components/GoalsBand";
import QuoteRotator from "@/components/QuoteRotator";
import Approach from "@/components/Approach";
import ValueBand from "@/components/ValueBand";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";

export async function generateMetadata({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return buildMetadata(lang, "home");
}

// Hero, then Ana's real client quotes one at a time so they are in view on
// landing, then the rest of the approved mockup. Approach and values sit
// between the goals band and the closing band, in the same style.
export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <JsonLd lang={lang} dict={dict} />
      <PageShell lang={lang} dict={dict} page="home">
        <Hero dict={dict} lang={lang} />
        <QuoteRotator testimonials={dict.testimonials} />
        <HelpColumns dict={dict} lang={lang} />
        <GoalsBand dict={dict} lang={lang} />
        <Approach dict={dict} />
        <ValueBand dict={dict} />
        <CtaBand dict={dict} lang={lang} divider />
      </PageShell>
    </>
  );
}
