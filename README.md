# Get Hired Program

Single-page bilingual (English / Spanish) marketing site for career coach Ana Prato.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS 4 and the official Cal.com React embed.

The navy-and-gold design ships in **three variants** you can flip between on the live site. See [Choosing a theme](#choosing-a-theme).

## Run it locally

Requires Node.js 20 or newer.

```bash
npm install
cp .env.example .env.local   # then edit the values
npm run dev
```

Open http://localhost:3000/en/ or http://localhost:3000/es/. The button in the header switches languages. On the live site, the root URL sends visitors to `/en/` or `/es/` based on browser language.

Other commands:

```bash
npm run build   # static export into out/
npm run lint
npx serve out   # preview the exported files
```

## Environment variables

| Variable | Example | What it does |
| --- | --- | --- |
| `NEXT_PUBLIC_CAL_LINK` | `anaprato/free-consultation` | Cal.com event shown in the booking section. Use the part of your Cal.com URL after `cal.com/`. |
| `NEXT_PUBLIC_SITE_URL` | `https://gethiredprogram.com` | Public URL including any subfolder, no trailing slash. Used for canonical URLs, hreflang, sitemap, robots and Open Graph. |
| `NEXT_PUBLIC_BASE_PATH` | `/gethiredprogram` | Subfolder the site lives in. Empty locally and on a custom domain. |

- **Locally:** put them in `.env.local` (git ignores it). Restart `npm run dev` after changing them.
- **On GitHub Pages:** repo Settings > Secrets and variables > Actions > Variables tab. Add a variable with the same name, then re-run the deploy (Actions tab > Deploy to GitHub Pages > Run workflow). Values get baked in at build time, so a change only shows up after a new deploy. Without variables, the workflow builds for `https://samirawad24.github.io/gethiredprogram`.

If `NEXT_PUBLIC_CAL_LINK` is empty, the booking section shows the contact email instead of the calendar.

## Choosing a theme

The three design directions from the boards are all built, sharing one set of
components and one palette. The active one is an attribute on `<html>`:

| Theme | `data-theme` | Look |
| --- | --- | --- |
| 1 · Clean & classic | `classic` | Light sections, serif headline with a gold second line, soft cards, navy CTA bands. The default. |
| 2 · Modern & bold | `bold` | Photo hero behind a navy scrim, uppercase headings, tighter spacing, heavier gold. |
| 3 · Elevated & minimal | `minimal` | Wide margins, light serif, hairline dividers instead of cards, navy header button. |

Two ways to switch:

- The **Design preview** panel in the bottom-right corner of the page.
- A query string: `/en/?theme=bold`, `/es/?theme=minimal`. Good for sharing one
  direction with someone without explaining where to click.

The choice is stored in `localStorage` and survives reloads and the language
toggle. `src/lib/theme.ts` holds the list, the storage key and the inline script
that sets `data-theme` before the page paints, so there is no flash of the wrong
design.

### Once a direction is picked

1. Set `defaultTheme` in `src/lib/theme.ts` to the winner.
2. Delete `src/components/ThemeSwitcher.tsx` and its `<ThemeSwitcher />` line in
   `src/app/[lang]/page.tsx`.
3. Delete the `themePicker` block from `src/dictionaries/en.ts` and `es.ts`.
4. In `src/app/globals.css`, keep the winning theme's variables and delete the
   two `[data-theme="..."]` blocks you do not need.

Everything else (components, sections, copy) stays as it is.

## Design system

Colours, type and spacing are CSS variables in `src/app/globals.css`, not
utility classes scattered through components, so a theme can restyle the whole
site at once.

| Token | Used for |
| --- | --- |
| `--color-navy`, `--color-navy-deep` | Section bands, footer, dark cards |
| `--color-gold`, `--color-gold-dark`, `--color-gold-deep` | Buttons, rules, icons, small gold text |
| `--fg`, `--fg-muted`, `--accent` | Text colours. A `.on-dark` wrapper flips all three, so the same component works on white and on navy. |
| `--display-font`, `--display-weight`, `--display-transform` | The `.display` heading style each theme redefines |
| `--section-py`, `--radius-card`, `--card-shadow` | Rhythm and card chrome |

Shared classes: `.shell` (centred container), `.section` / `.section--alt` /
`.section--navy`, `.display`, `.eyebrow`, `.lead`, `.rule`, `.btn` with
`--primary` / `--navy` / `--outline` / `--cta`, and `.card`.

Fonts are Playfair Display (headings) and Figtree (body), self-hosted by
`next/font` in `src/app/[lang]/layout.tsx`.

## Page sections

`src/app/[lang]/page.tsx` assembles them in this order:

Header · Hero · Stats · Services · About · ValueBand · Audiences · Program ·
Testimonials · CtaBand · Booking · Footer

## Swap in real content

Search the project for `PLACEHOLDER` to find every spot.

| What | Where |
| --- | --- |
| All page text (English) | `src/dictionaries/en.ts` |
| All page text (Spanish) | `src/dictionaries/es.ts` |
| Photos | Add files to `public/images/`, then update `images` in `src/lib/site.ts` |
| Image alt text | `hero.imageAlt` and `about.imageAlt` in both dictionaries |
| Email, LinkedIn, Instagram | `src/lib/site.ts` |
| Testimonials | `testimonials.items` in both dictionaries. Delete `placeholderNote` and its line in `src/components/Testimonials.tsx` when real quotes are in. |
| The four numbers under the hero | `stats.items` in both dictionaries. One is still a dash. Delete `placeholderNote` and its line in `src/components/Stats.tsx` when they are all real. |
| Service cards | `services.items` in both dictionaries. `icon` picks from `src/components/Icons.tsx`. |
| Logo | `src/components/Logo.tsx` draws the badge in SVG. Replace with a real file when one exists. |
| Colours and fonts | `src/app/globals.css` (colours, themes) and `src/app/[lang]/layout.tsx` (fonts) |
| Structured data details | `src/components/JsonLd.tsx` |

Both dictionaries share one TypeScript type, so the build fails if you add a string to one language and forget the other.

Photo tips: hero works best as a portrait around 900 x 1100 px, about photo as a square around 700 x 700 px. JPG or WebP; Next.js optimizes them.

## Project structure

```
src/
  app/
    [lang]/layout.tsx          html shell, fonts, metadata, Open Graph, hreflang
    [lang]/page.tsx            assembles the sections
    [lang]/og.png/route.tsx    generated social share image per language
    sitemap.ts, robots.ts
    globals.css                palette, the three themes, shared classes
  components/                  one small component per section
  dictionaries/                en.ts, es.ts
  lib/site.ts                  brand, links, env vars, image paths
  lib/theme.ts                 theme list and the pre-paint init script
public/index.html              root redirect to /en/ or /es/
.github/workflows/deploy.yml   builds and publishes to GitHub Pages
```

## Deploy (GitHub Pages)

Repository: https://github.com/samirawad24/gethiredprogram
Live site: https://samirawad24.github.io/gethiredprogram/

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the static site and publishes it. Watch progress in the repo's Actions tab.

```bash
git add -A
git commit -m "Describe the change"
git push
```

### Connect gethiredprogram.com

1. Repo Settings > Pages > Custom domain: enter `gethiredprogram.com` and save. Follow GitHub's DNS instructions at your domain registrar.
2. Settings > Secrets and variables > Actions > Variables: set `NEXT_PUBLIC_BASE_PATH` to `/` and `NEXT_PUBLIC_SITE_URL` to `https://gethiredprogram.com`.
3. Re-run the deploy workflow, then tick "Enforce HTTPS" in Settings > Pages.
4. Submit `https://gethiredprogram.com/sitemap.xml` in Google Search Console.

The site is plain static files in `out/`, so Vercel, Netlify or any static host also works.

## SEO checklist

- Title, description, canonical and hreflang per language
- Open Graph and Twitter card with a generated share image
- One `h1` per page, `h2` per section, `h3` for cards and steps
- Alt text on every image
- Gold text darkened to `--color-gold-deep` so small labels clear WCAG AA on white
- JSON-LD `Person` and `ProfessionalService`, validated at https://validator.schema.org
- `/sitemap.xml` and `/robots.txt`
