import type { Dictionary } from "@/dictionaries";
import { site, type Locale } from "@/lib/site";
import CalEmbed from "./CalEmbed";
import TokenText from "./TokenText";

// The calendar and the consent line under it. The contact page's PageHero
// carries the heading.
export default function Booking({ dict, lang }: { dict: Dictionary; lang: Locale }) {
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
        <p className="text-small" style={{ marginTop: "calc(16 * var(--u))" }}>
          <TokenText text={booking.consent} dict={dict} lang={lang} />
        </p>
      </div>
    </section>
  );
}
