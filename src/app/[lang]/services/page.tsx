import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { buildMetadata } from "@/lib/metadata";
import { hasLocale } from "@/lib/site";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import Program from "@/components/Program";
import PromiseBand from "@/components/PromiseBand";
import CtaBand from "@/components/CtaBand";

export async function generateMetadata({ params }: PageProps<"/[lang]/services">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return buildMetadata(lang, "services");
}

export default async function ServicesPage({ params }: PageProps<"/[lang]/services">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <PageShell lang={lang} dict={dict} page="services">
      <PageHero {...dict.pageHero.services} />
      <Services dict={dict} />
      <Program dict={dict} />
      <PromiseBand dict={dict} lang={lang} />
      <CtaBand dict={dict} lang={lang} />
    </PageShell>
  );
}
