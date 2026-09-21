import type { Dictionary } from "@/dictionaries";
import type { PageKey } from "@/lib/routes";
import type { Locale } from "@/lib/site";
import Header from "./Header";
import MotionProvider from "./MotionProvider";
import Footer from "./Footer";
import ThemeSwitcher from "./ThemeSwitcher";

type Props = {
  lang: Locale;
  dict: Dictionary;
  page: PageKey;
  children: React.ReactNode;
};

// Skip link, header, main and footer: the chrome every page shares.
export default function PageShell({ lang, dict, page, children }: Props) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-navy focus:px-4 focus:py-3 focus:text-white"
      >
        {dict.skipLink}
      </a>
      <MotionProvider />
      <Header lang={lang} dict={dict} page={page} />
      <main id="main">{children}</main>
      <Footer dict={dict} lang={lang} />
      {/* PREVIEW TOOL: remove this line and ThemeSwitcher.tsx once a design
          direction is picked. */}
      <ThemeSwitcher dict={dict} />
    </>
  );
}
