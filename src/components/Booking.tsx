import type { Dictionary } from "@/dictionaries";
import { site } from "@/lib/site";
import Backdrop from "./Backdrop";
import CalEmbed from "./CalEmbed";

export default function Booking({ dict }: { dict: Dictionary }) {
  const { booking } = dict;

  return (
    <section id="booking" aria-labelledby="booking-heading" className="has-backdrop section section--alt">
      <Backdrop scrim="light" />

      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{booking.eyebrow}</p>
          <h2 id="booking-heading" className="display mt-3 text-4xl sm:text-5xl">
            {booking.heading}
          </h2>
          <p className="lead mt-4 text-lg">{booking.intro}</p>
        </div>

        <div className="card mx-auto mt-12 max-w-4xl overflow-hidden p-2 sm:p-4">
          {site.calLink ? (
            <CalEmbed calLink={site.calLink} title={booking.calendarTitle} />
          ) : (
            <p className="px-6 py-16 text-center text-muted">
              {booking.fallback}{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-navy underline">
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
