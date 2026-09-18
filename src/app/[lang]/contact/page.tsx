import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { buildMetadata } from "@/lib/metadata";
import { hasLocale } from "@/lib/site";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Booking from "@/components/Booking";
import ValueBand from "@/components/ValueBand";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return buildMetadata(lang, "contact");
}

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <PageShell lang={lang} dict={dict} page="contact">
      <PageHero {...dict.pageHero.contact} />
      <Booking dict={dict} />
      <ValueBand dict={dict} />
    </PageShell>
  );
}
