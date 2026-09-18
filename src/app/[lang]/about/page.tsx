import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { buildMetadata } from "@/lib/metadata";
import { hasLocale } from "@/lib/site";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Audiences from "@/components/Audiences";
import ValueBand from "@/components/ValueBand";
import CtaBand from "@/components/CtaBand";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return buildMetadata(lang, "about");
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <PageShell lang={lang} dict={dict} page="about">
      <PageHero {...dict.pageHero.about} />
      <About dict={dict} lang={lang} />
      <ValueBand dict={dict} />
      <Audiences dict={dict} lang={lang} />
      <CtaBand dict={dict} lang={lang} />
    </PageShell>
  );
}
