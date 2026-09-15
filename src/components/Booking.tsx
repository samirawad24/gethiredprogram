import type { Dictionary } from "@/dictionaries";
import { site } from "@/lib/site";
import CalEmbed from "./CalEmbed";

export default function Booking({ dict }: { dict: Dictionary }) {
  const { booking } = dict;

  return (
    <section id="booking" aria-labelledby="booking-heading" className="bg-teal-soft">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="booking-heading" className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            {booking.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/80">{booking.intro}</p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] bg-cream p-2 shadow-[0_30px_60px_-40px_rgba(10,71,68,0.5)] sm:p-4">
          {site.calLink ? (
            <CalEmbed calLink={site.calLink} title={booking.calendarTitle} />
          ) : (
            <p className="px-6 py-16 text-center text-muted">
              {booking.fallback}{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-teal underline">
                {site.email}
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
