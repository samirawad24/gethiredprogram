import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { buildMetadata } from "@/lib/metadata";
import { hasLocale } from "@/lib/site";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Parents from "@/components/Parents";

export async function generateMetadata({ params }: PageProps<"/[lang]/parents">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return buildMetadata(lang, "parents");
}

export default async function ParentsPage({ params }: PageProps<"/[lang]/parents">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <PageShell lang={lang} dict={dict} page="parents">
      <PageHero {...dict.parents.hero} />
      <Parents dict={dict} lang={lang} />
    </PageShell>
  );
}
