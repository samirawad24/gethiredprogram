# Get Hired Program

Bilingual (English / Spanish) marketing site for career coach Ana Prato. Four pages per language: Home, About, Services and Contact.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS 4 and the official Cal.com React embed.

The navy-and-gold design ships in **six variants** you can flip between on the live site. See [Choosing a theme](#choosing-a-theme).

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
| 4 · Editorial luxury | `editorial` | A consultancy monograph: oversized light serif, very deep whitespace, hairlines instead of boxes, wide-tracked labels, gold only as a thread. |
| 5 · Modern polish | `product` | Tight sans, rounded cards with soft depth and a hairline highlight, a warm glow behind the hero, cool light surface. |
| 6 · Bold statement | `statement` | Scale as the idea: enormous tight uppercase across the full width, image as a band beneath, nothing rounded, heavy rules. |

Each theme only redefines CSS variables. Headings carry **no size utilities** —
they use `.display--hero`, `--page`, `--section`, `--band`, `--value`, `--card`
and `--step`, whose sizes come from the theme. That is why switching theme
changes the whole typographic system and not just its colours. A few themes add
structural rules too (the editorial hero widens its text column, the statement
hero goes full width), all in `globals.css` under their own heading.

Two ways to switch:

- The **Design preview** panel in the bottom-right corner of the page.
- A query string: `/en/?theme=bold`, `/es/?theme=minimal`. Good for sharing one
  direction with someone without explaining where to click.

The choice is stored in `localStorage` and survives reloads and the language
toggle. `src/lib/theme.ts` holds the list, the storage key and the inline script
that sets `data-theme` before the page paints, so there is no flash of the wrong
design.

### Once a direction is picked

1. Set `defaultTheme` in `src/lib/theme.ts` to the winner, and trim `themes`
   and `themeGroups` to just that one.
2. Delete `src/components/ThemeSwitcher.tsx` and its `<ThemeSwitcher />` line in
   `src/components/PageShell.tsx`.
3. Delete the `themePicker` block from `src/dictionaries/en.ts` and `es.ts`.
4. In `src/app/globals.css`, keep the winning theme's variable block and its
   structural rules, and delete the other five.

## Motion

`src/components/MotionProvider.tsx` runs one `IntersectionObserver` for the
whole page. Mark a block with `data-reveal` to have it ease in when it scrolls
into view, or a grid with `data-reveal-stagger` to have its children arrive one
after another.

Three things keep it safe: the `.js-motion` class that switches the hidden
state on is added **pre-paint** by the inline script in `lib/theme.ts`, so
nothing flashes; without that script the CSS never hides anything, so a JS
failure leaves a static page rather than a blank one; and
`prefers-reduced-motion` skips the whole thing. There is also a failsafe that
reveals everything if nothing has appeared 2.5 seconds in.

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

## Pages

Every page is `PageShell` (skip link, header, main, footer) wrapped around a
list of section components.

| Page | Route | Sections |
| --- | --- | --- |
| Home | `/[lang]/` | Hero · Stats · Services · Approach · AboutTeaser · ValueBand · Testimonials · CtaBand |
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
| Image alt text | `hero.imageAlt`, `about.imageAlt` and `promise.imageAlt` in both dictionaries |
| Email, LinkedIn, Instagram | `src/lib/site.ts` |
| Testimonials | `testimonials.items` in both dictionaries. Delete `placeholderNote` and its line in `src/components/Testimonials.tsx` when real quotes are in. |
| The four numbers under the hero | `stats.items` in both dictionaries. Keep each `value` to about six characters so it stays large on a phone; longer values shrink, then wrap. Note there is deliberately no client head count — see below. |
| Service cards | `services.items` in both dictionaries. `icon` picks from `src/components/Icons.tsx`. |
| How I work | `approach.items` in both dictionaries, same icon set. |
| Logo | Ana's real badge at `public/images/logo.png`, path in `site.logo`. `src/components/Logo.tsx` just renders it. The favicon (`src/app/favicon.ico`, `src/app/icon.png`) and the social card are generated from the same mark. |
| Colours and fonts | `src/app/globals.css` (colours, themes) and `src/app/[lang]/layout.tsx` (fonts) |
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

Every picture on the site is brand art drawn in SVG, living in
`public/images/art/`. Each one is a slot: drop a real photo into
`public/images/`, change one path in `src/lib/site.ts`, and update its alt text
in both dictionaries. Nothing else moves.

| Slot | `site.images` key | Shape | Where it shows | What to shoot or buy |
| --- | --- | --- | --- | --- |
| Hero portrait | `hero` | 4:5, ~1200 x 1500 | Beside the headline in the classic and minimal themes | Ana at her desk, or a bright workspace. Leave the left third calm — the headline sits next to it. |
| Hero wide | `heroWide` | 16:9, ~1920 x 1080 | Fills the hero in the bold theme, behind a navy scrim | Something with depth and a horizon: a city at dusk, an open office. Detail is lost under the scrim, so mood matters more than sharpness. |
| About | `about` | 1:1, ~1100 x 1100 | Next to "Hi, I'm Ana" | **Ana's real portrait.** This is the one photo a stock image cannot do. |
| Promise band | `notebook` | 7:5, ~1400 x 1000 | The full-width band mid-page | A desk detail: notebook and pen, coffee, hands writing. Shot close. |
| Section backdrop | `backdrop` | 16:9, ~1920 x 1080 | Behind the closing call to action and the booking section, under a heavy scrim | Anything soft and out of focus. It is 90% covered; it only adds depth. |

JPG or WebP. Keep each file under about 400 KB — the site is a static export, so
nothing compresses them for you at runtime.

Two judgement calls worth keeping:

- **The testimonial cards use initials, not faces.** The quotes are still
  placeholders. Putting stock headshots next to invented quotes makes fabricated
  social proof look real, which is both dishonest and, for a business making
  claims about results, a legal problem. Once real clients give real quotes,
  their own photos can replace the initials.
- **No stock photo should stand in for Ana.** The art in the `about` slot shows a
  workspace rather than a person for exactly this reason.

### Backgrounds

`src/components/Backdrop.tsx` puts an image behind a section. The section needs
`.has-backdrop` and its content needs to be in a `.shell`:

```tsx
<section className="has-backdrop section">
  <Backdrop scrim="navy-deep" watermark />
  <div className="shell">...</div>
</section>
```

`scrim` is `navy`, `navy-deep` or `light` — how hard the image is knocked back.
`watermark` adds the ghosted badge in the corner. Use it once per stretch of
page; two in a row reads as a mistake. `.section--wash` adds a soft colour
gradient to a light section, and `.grain` adds paper texture.

## Project structure

```
src/
  app/
    [lang]/layout.tsx          html shell, fonts, theme bootstrap
    [lang]/page.tsx            Home
    [lang]/about/page.tsx      About
    [lang]/services/page.tsx   Services
    [lang]/contact/page.tsx    Contact
    [lang]/og.png/route.tsx    generated social share image per language
    sitemap.ts, robots.ts
    globals.css                palette, the three themes, shared classes
  components/                  one small component per section
  components/PageShell.tsx     skip link, header, main, footer
  components/PageHero.tsx      masthead and h1 for pages below Home
  components/MobileNav.tsx     the phone menu
  components/Backdrop.tsx      background image + scrim + badge watermark
  dictionaries/                en.ts, es.ts
  lib/site.ts                  brand, links, env vars, image paths
  lib/routes.ts                the page list and their URL segments
  lib/metadata.ts              title, description, canonical, hreflang
  lib/theme.ts                 theme list and the pre-paint init script
public/images/art/             brand art, one file per photo slot
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
