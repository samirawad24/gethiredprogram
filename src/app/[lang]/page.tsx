import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { buildMetadata } from "@/lib/metadata";
import { pagePath } from "@/lib/routes";
import { hasLocale } from "@/lib/site";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import AboutTeaser from "@/components/AboutTeaser";
import ValueBand from "@/components/ValueBand";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";

export async function generateMetadata({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return buildMetadata(lang, "home");
}

// Home is a full overview that sells on its own, because most visitors never
// click through. Each block links to the page that goes deeper.
export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <JsonLd lang={lang} dict={dict} />
      <PageShell lang={lang} dict={dict} page="home">
        <Hero dict={dict} lang={lang} />
        <Stats dict={dict} />
        <Services dict={dict} moreHref={pagePath(lang, "services")} />
        <Approach dict={dict} />
        <AboutTeaser dict={dict} lang={lang} />
        <ValueBand dict={dict} />
        <Testimonials dict={dict} />
        <CtaBand dict={dict} lang={lang} />
      </PageShell>
    </>
  );
}
