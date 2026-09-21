import type { Dictionary } from "@/dictionaries";
import { site } from "@/lib/site";
import Backdrop from "./Backdrop";
import CalEmbed from "./CalEmbed";

// Just the calendar. The contact page's PageHero carries the heading, so
// repeating it here would say the same thing twice in a row.
export default function Booking({ dict }: { dict: Dictionary }) {
  const { booking } = dict;

  return (
    <section id="booking" aria-label={booking.calendarTitle} className="has-backdrop section">
      <Backdrop scrim="light" watermark />

      <div className="shell">
        <div className="card mx-auto max-w-4xl overflow-hidden p-2 sm:p-4">
          {site.calLink ? (
            <CalEmbed calLink={site.calLink} title={booking.calendarTitle} />
          ) : (
            <p className="px-6 py-16 text-center text-muted">
              {booking.fallback}{" "}
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-11 items-center font-semibold text-navy underline"
              >
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
