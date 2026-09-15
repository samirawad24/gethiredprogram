import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { hasLocale } from "@/lib/site";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Audiences from "@/components/Audiences";
import Program from "@/components/Program";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <JsonLd lang={lang} dict={dict} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-teal focus:px-4 focus:py-2 focus:text-cream"
      >
        {dict.skipLink}
      </a>
      <Header lang={lang} dict={dict} />
      <main id="main">
        <Hero dict={dict} />
        <About dict={dict} />
        <Audiences dict={dict} />
        <Program dict={dict} />
        <Testimonials dict={dict} />
        <Booking dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
