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

Open http://localhost:3000. You land on `/en` or `/es` depending on your browser language. The button in the header switches languages.

Other commands:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint
```

## Environment variables

| Variable | Example | What it does |
| --- | --- | --- |
| `NEXT_PUBLIC_CAL_LINK` | `anaprato/free-consultation` | Cal.com event shown in the booking section. Use the part of your Cal.com URL after `cal.com/`. |
| `NEXT_PUBLIC_SITE_URL` | `https://gethiredprogram.com` | Live domain, no trailing slash. Used for canonical URLs, hreflang, sitemap, robots and Open Graph. |

- **Locally:** put them in `.env.local` (git ignores it). Restart `npm run dev` after changing them.
- **On Vercel:** Project Settings > Environment Variables. Add both for Production and Preview, then redeploy. `NEXT_PUBLIC_` values get baked in at build time, so a change only shows up after a new deploy.

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
    [lang]/opengraph-image.tsx generated social share image per language
    sitemap.ts, robots.ts
    globals.css                brand colours
  components/                  one small component per section
  dictionaries/                en.ts, es.ts
  lib/site.ts                  brand, links, env vars, image paths
  proxy.ts                     redirects / to /en or /es
```

## Deploy

### 1. Push to GitHub

Create an empty repository on GitHub (no README), then:

```bash
git remote add origin https://github.com/YOUR-USERNAME/gethiredprogram.git
git push -u origin main
```

### 2. Import into Vercel

1. Go to https://vercel.com/new and import the GitHub repository.
2. Vercel detects Next.js. Leave the build settings as they are.
3. Add `NEXT_PUBLIC_CAL_LINK` and `NEXT_PUBLIC_SITE_URL` under Environment Variables.
4. Click Deploy.

After that, every push to `main` deploys production, and every other branch or pull request gets its own live preview URL.

### 3. Connect the domain

In Vercel: Project > Settings > Domains, add `gethiredprogram.com` and follow the DNS instructions. Then submit `https://gethiredprogram.com/sitemap.xml` in Google Search Console.

## SEO checklist

- Title, description, canonical and hreflang per language
- Open Graph and Twitter card with a generated share image
- One `h1` per page, `h2` per section, `h3` for cards and steps
- Alt text on every image
- JSON-LD `Person` and `ProfessionalService`, validated at https://validator.schema.org
- `/sitemap.xml` and `/robots.txt`
