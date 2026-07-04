# Portfolio

Personal portfolio and blog built with Next.js (App Router), Tailwind CSS, Framer Motion, and a local MDX blog.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

- `RESEND_API_KEY` — from [resend.com](https://resend.com)
- `CONTACT_TO_EMAIL` — the inbox that should receive contact form enquiries
- `CONTACT_FROM_EMAIL` — a sending address on a domain verified in Resend (use Resend's sandbox address for local development)

Without these, the contact form will show a friendly "not configured yet" error instead of sending.

## Editing your content

This site ships with realistic placeholder copy so you can see the real layout before writing your own words. Replace it here:

- **Name, tagline, nav links, socials, bio facets** — [`lib/site-config.ts`](lib/site-config.ts)
- **Projects shown in "Featured work"** — [`lib/projects.ts`](lib/projects.ts)
- **Blog posts** — add/edit `.mdx` files in [`content/blog/`](content/blog/) (filename becomes the URL slug). Each post needs frontmatter: `title`, `date`, `summary`, `tags`.
- **Section-specific prose** (hero intro, skills list) — inline in [`components/home/`](components/home/), marked with `PLACEHOLDER COPY` comments. Find them all with:
  ```bash
  grep -rn "PLACEHOLDER" components lib content
  ```
- **Colors** — all light/dark theme colors are CSS variables in [`app/globals.css`](app/globals.css) (`:root` for light, `.dark` for dark). Change them there and every component updates automatically.
- **Fonts** — loaded in [`app/layout.tsx`](app/layout.tsx) via `next/font/google` (currently Space Grotesk for headings, Work Sans for body).

## Deploying

Push to GitHub and import the repo into [Vercel](https://vercel.com/new). Add the three environment variables above to the Vercel project (Production and Preview), then deploy.
