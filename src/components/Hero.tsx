import Image from "next/image";
import type { Dictionary } from "@/dictionaries";
import { site } from "@/lib/site";
import Button from "./Button";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 sm:px-8 md:grid-cols-[1.1fr_1fr] md:gap-14 md:pb-24 md:pt-16">
      <div className="order-2 md:order-1">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
          {dict.hero.eyebrow}
        </p>
        <h1 className="mt-4 font-serif text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
          {site.coachName}
        </h1>
        <p className="mt-3 font-serif text-2xl italic text-muted sm:text-3xl">{dict.hero.role}</p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed sm:text-xl">{dict.hero.promise}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="#booking">{dict.hero.cta}</Button>
          <Button href="#program" variant="secondary">
            {dict.hero.secondaryCta}
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted">{dict.hero.languages}</p>
      </div>

      <div className="order-1 md:order-2">
        {/* PLACEHOLDER image: replace site.images.hero in src/lib/site.ts */}
        <Image
          src={site.images.hero}
          alt={dict.hero.imageAlt}
          width={900}
          height={1100}
          priority
          unoptimized={site.images.hero.endsWith(".svg")}
          sizes="(min-width: 768px) 45vw, 100vw"
          className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[0_30px_60px_-30px_rgba(43,37,33,0.35)]"
        />
      </div>
    </section>
  );
}
