# Get Hired Program

Single-page bilingual (English / Spanish) marketing site for career coach Ana Prato.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS 4 and the official Cal.com React embed.

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
| Colours and fonts | `src/app/globals.css` (colours) and `src/app/[lang]/layout.tsx` (fonts) |
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
    globals.css                brand colours
  components/                  one small component per section
  dictionaries/                en.ts, es.ts
  lib/site.ts                  brand, links, env vars, image paths
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
- JSON-LD `Person` and `ProfessionalService`, validated at https://validator.schema.org
- `/sitemap.xml` and `/robots.txt`
