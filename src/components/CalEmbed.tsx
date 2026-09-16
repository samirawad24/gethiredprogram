"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

type Props = { calLink: string; title: string };

const namespace = "consultation";

// Inline Cal.com calendar, themed with the site's navy.
export default function CalEmbed({ calLink, title }: Props) {
  useEffect(() => {
    getCalApi({ namespace }).then((cal) => {
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: { light: { "cal-brand": "#12294a" }, dark: { "cal-brand": "#e0a43a" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    });
  }, []);

  return (
    <div aria-label={title} className="min-h-[640px]">
      <Cal
        namespace={namespace}
        calLink={calLink}
        style={{ width: "100%", height: "100%", overflow: "auto" }}
        config={{ layout: "month_view", theme: "light" }}
      />
    </div>
  );
}
