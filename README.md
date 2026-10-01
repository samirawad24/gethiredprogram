# Get Hired Program

Bilingual (English / Spanish) marketing site for career coach Ana Prato. Four pages per language: Home, About, Services and Contact.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS 4 and the official Cal.com React embed.

The design follows the approved home page mockup (navy, gold, warm off-white, Source Serif 4 + Figtree). See [Design](#design).

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

## Design

There is one design, taken from the approved home page mockup. The preview
themes and the picker that used to live here are gone.

The mockup was drawn 1086px wide, so on desktop every size in
`src/app/globals.css` is a multiple of `--u`, one mockup pixel. At 1086px the
home page lands on the mockup within a few pixels; wider screens scale it up
evenly (capped at 1.2x), and below 768px the layout stacks with its own phone
sizes.

The home page is the mockup's five blocks in order (hero, "How can I help?",
the goals band, the closing band, the footer), with stats, approach, values and
testimonials between the goals band and the closing band in the same style.
The inner pages reuse the same pieces: hairline columns, the warm gray band,
serif headings, gold arrow links.

The hero button keeps the 21st.dev flow effect on hover, and the header links
keep the letter swap. At rest both look exactly like the mockup.

## Motion

`src/components/MotionProvider.tsx` runs one `IntersectionObserver` for the
whole page. Mark a block with `data-reveal` to have it ease in when it scrolls
into view, or a grid with `data-reveal-stagger` to have its children arrive one
after another.

Three things keep it safe: the `.js-motion` class that switches the hidden
state on is added **pre-paint** by the inline script in `[lang]/layout.tsx`, so
nothing flashes; without that script the CSS never hides anything, so a JS
failure leaves a static page rather than a blank one; and
`prefers-reduced-motion` skips the whole thing. There is also a failsafe that
reveals everything if nothing has appeared 2.5 seconds in.

Everything else (components, sections, copy) stays as it is.

## Design system

Colours, type and spacing live in `src/app/globals.css`.

| Token | Used for |
| --- | --- |
| `--color-navy`, `--color-navy-soft` | Buttons and their hover |
| `--color-heading` | Serif headings and the wordmark |
| `--color-gold`, `--color-gold-deep` | Eyebrows and arrow links |
| `--color-paper`, `--color-shell` | Page background and the warm gray band |
| `--color-ink`, `--color-muted`, `--color-faint`, `--color-line` | Body text, small text, captions, hairlines |
| `--u`, `--gutter`, `--shell` | The mockup-pixel unit, side margin and content width |

Shared classes: `.shell`, `.hairline`, `.serif` with `.h-hero` / `.h-page` /
`.h-section` / `.h-band` / `.h-close` / `.h-card`, `.eyebrow`, `.text-lead` /
`.text-body` / `.text-small` / `.text-caption`, `.btn` with `--lg` / `--md` /
`--sm`, `.link-arrow`, `.columns`, `.band` and `.goals`.

Fonts are Source Serif 4 (headings, wordmark, buttons) and Figtree (body),
self-hosted by `next/font` in `src/app/[lang]/layout.tsx`. Source Serif 4 was
picked by measuring Google serifs against the mockup headline: it matches its
width at the same letter height.

## Pages

Every page is `PageShell` (skip link, header, main, footer) wrapped around a
list of section components.

| Page | Route | Sections |
| --- | --- | --- |
| Home | `/[lang]/` | Hero · HelpColumns · GoalsBand · Stats · Approach · ValueBand · Testimonials · CtaBand |
| About | `/[lang]/about/` | PageHero · About · ValueBand · Audiences · CtaBand |
| Services | `/[lang]/services/` | PageHero · Services · Program · PromiseBand · CtaBand |
| Contact | `/[lang]/contact/` | PageHero · Booking · ValueBand |

Home is a full overview rather than a menu, because most visitors never click
past it. Each block links to the page that goes deeper. Sections are not
repeated across pages: `Approach` and `Testimonials` only appear on Home,
`Audiences` only on About, `Program` only on Services, the Cal.com embed only on
Contact.

### Adding a page

1. Add its key to `pages` and a URL segment to `segments` in `src/lib/routes.ts`.
   That alone puts it in the header, the mobile menu, the footer and the sitemap.
2. Add `nav.<key>`, `meta.<key>` (title and description) and `pageHero.<key>` to
   **both** dictionaries. The shared type means the build fails if you forget one.
3. Create `src/app/[lang]/<segment>/page.tsx`, exporting `generateMetadata` that
   returns `buildMetadata(lang, "<key>")`, and render a `PageShell`.

`src/lib/metadata.ts` is the only place that builds title, description, canonical
and hreflang, so those four never drift apart. Language switching preserves the
page: `/en/about/` goes to `/es/about/`, not back to Home.

## Swap in real content

Search the project for `PLACEHOLDER` to find every spot.

| What | Where |
| --- | --- |
| All page text (English) | `src/dictionaries/en.ts` |
| All page text (Spanish) | `src/dictionaries/es.ts` |
| Photos | See [Swap in real photos](#swap-in-real-photos) |
| Image alt text | `hero.imageAlt`, `goals.imageAlt` in both dictionaries |
| Email, LinkedIn, Instagram | `src/lib/site.ts` |
| Testimonials | `testimonials.items` in both dictionaries. Delete `placeholderNote` and its line in `src/components/Testimonials.tsx` when real quotes are in. |
| The four numbers under the hero | `stats.items` in both dictionaries. Keep each `value` to about six characters so it stays large on a phone; longer values shrink, then wrap. Note there is deliberately no client head count — see below. |
| Home service columns | `help.items` in both dictionaries. The full list on Services is `services.items`. |
| How I work | `approach.items` in both dictionaries. |
| Logo | Ana's real badge at `public/images/logo.png`, path in `site.logo`. `src/components/Logo.tsx` just renders it. The favicon (`src/app/favicon.ico`, `src/app/icon.png`) and the social card are generated from the same mark. |
| Colours and fonts | `src/app/globals.css` (colours, sizes) and `src/app/[lang]/layout.tsx` (fonts) |
| Structured data details | `src/components/JsonLd.tsx` |

Both dictionaries share one TypeScript type, so the build fails if you add a string to one language and forget the other.



## What the site is selling

Two things set this coaching apart, and the copy leans on both:

- **The practice is deliberately small.** Ana caps how many clients she takes at
  once so every resume, mock interview and plan gets real attention. The
  `approach` section says this outright, and it is why the stat bar has **no
  client head count**: a volume number argues against the pitch. The four stats
  describe what the coaching *is* instead of how much of it there has been.
- **Clients are not limited to the US.** Coaching is online, in English or
  Spanish, for people inside and outside the United States. This shows up in the
  hero, the stat bar, the `approach` section and the JSON-LD (`areaServed` is
  `Worldwide`, not `US`).

If either changes, both dictionaries and `src/components/JsonLd.tsx` need
updating together.

## Swap in real photos

The two photos on the site are stand-ins cut from the approved mockup, in
`public/images/`. Drop a real photo in, change one path in `src/lib/site.ts`,
and update its alt text in both dictionaries.

| Slot | `site.images` key | Shape | Where it shows |
| --- | --- | --- | --- |
| Portrait | `hero` | about 1:1 (529 x 520) | Home hero and the About page. Delete `hero.imageCaption` and the `figcaption` lines in `Hero.tsx` and `About.tsx` once it is Ana. |
| Desk | `goals` | about 2.3:1 (451 x 197) | The goals band on Home and the promise band on Services |

The cut-outs are only about 530px wide, so they look soft on high-res screens.
Real photos should be at least twice that. JPG or WebP, under about 400 KB each.

The testimonial quotes are still placeholders, so they carry no photos. Stock
headshots next to invented quotes would make fabricated social proof look real.

## Project structure

```
src/
  app/
    [lang]/layout.tsx          html shell, fonts, motion bootstrap
    [lang]/page.tsx            Home
    [lang]/about/page.tsx      About
    [lang]/services/page.tsx   Services
    [lang]/contact/page.tsx    Contact
    [lang]/og.png/route.tsx    generated social share image per language
    sitemap.ts, robots.ts
    globals.css                palette, mockup-pixel scale, shared classes
  components/                  one small component per section
  components/PageShell.tsx     skip link, header, main, footer
  components/PageHero.tsx      masthead and h1 for pages below Home
  components/MobileNav.tsx     the phone menu
  dictionaries/                en.ts, es.ts
  lib/site.ts                  brand, links, env vars, image paths
  lib/routes.ts                the page list and their URL segments
  lib/metadata.ts              title, description, canonical, hreflang
public/images/                 placeholder photos, logo
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
- Unique title, description and canonical per page; hreflang pairs each page with its translation
- Alt text on every image
- Gold text darkened to `--color-gold-deep` so small labels clear WCAG AA on white
- JSON-LD `Person` and `ProfessionalService`, validated at https://validator.schema.org
- `/sitemap.xml` and `/robots.txt`
