import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { hasLocale } from "@/lib/site";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import About from "@/components/About";
import ValueBand from "@/components/ValueBand";
import Audiences from "@/components/Audiences";
import PromiseBand from "@/components/PromiseBand";
import Program from "@/components/Program";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <JsonLd lang={lang} dict={dict} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        {dict.skipLink}
      </a>
      <Header lang={lang} dict={dict} />
      <main id="main">
        <Hero dict={dict} />
        <Stats dict={dict} />
        <Services dict={dict} />
        <Approach dict={dict} />
        <About dict={dict} />
        <ValueBand dict={dict} />
        <Audiences dict={dict} />
        <PromiseBand dict={dict} />
        <Program dict={dict} />
        <Testimonials dict={dict} />
        <CtaBand dict={dict} />
        <Booking dict={dict} />
      </main>
      <Footer dict={dict} />
      {/* PREVIEW TOOL: remove this line and ThemeSwitcher.tsx once a design
          direction is picked. */}
      <ThemeSwitcher dict={dict} />
    </>
  );
}
