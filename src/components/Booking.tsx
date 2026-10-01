import type { Dictionary } from "@/dictionaries";
import { site } from "@/lib/site";
import CalEmbed from "./CalEmbed";

// Just the calendar. The contact page's PageHero carries the heading.
export default function Booking({ dict }: { dict: Dictionary }) {
  const { booking } = dict;

  return (
    <section id="booking" aria-label={booking.calendarTitle} className="shell">
      <hr className="hairline" />
      <div className="section">
        <div className="border border-line bg-white p-2 sm:p-4">
          {site.calLink ? (
            <CalEmbed calLink={site.calLink} title={booking.calendarTitle} />
          ) : (
            <p className="text-body px-6 py-16 text-center">
              {booking.fallback}{" "}
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-11 items-center font-medium text-navy underline"
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
