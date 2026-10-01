import { notFound } from "next/navigation";
import { Figtree, Source_Serif_4 } from "next/font/google";
import { hasLocale, locales } from "@/lib/site";
import "../globals.css";

// Source Serif 4 carries the headings, wordmark and buttons. Of the Google
// serifs it lands closest to the mockup's headline: same width at the same
// letter height. The optical-size axis tightens the big sizes.
const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

// Added before paint so scroll reveals hide their elements only when the
// observer in MotionProvider is going to show them again.
const motionInitScript = `try{if(!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("js-motion")}catch(e){}`;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      data-scroll-behavior="smooth"
      // The inline script below adds a class to <html> before hydration.
      suppressHydrationWarning
      className={`${sourceSerif.variable} ${figtree.variable} antialiased`}
    >
      <body className="min-h-screen font-sans">
        <script dangerouslySetInnerHTML={{ __html: motionInitScript }} />
        {children}
      </body>
    </html>
  );
}
