import { notFound } from "next/navigation";
import { Figtree, Playfair_Display } from "next/font/google";
import { hasLocale, locales } from "@/lib/site";
import { defaultTheme, themeInitScript } from "@/lib/theme";
import "../globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

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
      data-theme={defaultTheme}
      // The inline script below rewrites data-theme before paint.
      suppressHydrationWarning
      className={`${playfair.variable} ${figtree.variable} antialiased`}
    >
      <body className="min-h-screen font-sans">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
      </body>
    </html>
  );
}
