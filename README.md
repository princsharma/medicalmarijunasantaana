# Medical Marijuana Card Santa Ana

Next.js migration of the Santa Ana medical marijuana card website, rebuilt from WordPress with a modern design system, API forms, and technical SEO foundation.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Zod** for form validation

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                  # Routes, API, SEO (sitemap, robots)
├── components/
│   ├── ui/               # Reusable primitives (Button, Input, Card…)
│   ├── layout/           # Header, Footer
│   ├── sections/         # Homepage sections
│   ├── forms/            # Application & contact forms
│   └── seo/              # JSON-LD structured data
├── data/                 # Content & configuration
├── tokens/               # Design tokens (typography, breakpoints, colors)
├── lib/                  # Utilities, SEO helpers, validation
└── types/                # Shared TypeScript types
```

## Design Tokens

| Token file | Purpose |
|---|---|
| `tokens/typography.ts` | Font families, sizes, semantic text styles |
| `tokens/breakpoints.ts` | Responsive breakpoints (xs → 2xl) |
| `tokens/colors.ts` | Brand (teal) + accent (coral) palette |
| `tokens/spacing.ts` | Section spacing, container widths, radius |

Theme colors are also defined as CSS custom properties in `globals.css` and mapped to Tailwind via `@theme inline`.

## Lead Form (Heally Redirect)

The homepage telehealth form matches the [mmjcalifornia](https://github.com/princsharma/mmjcalifornia) flow:

1. Client-side validation (name, email, phone, checkboxes)
2. GTM event `heallyValidatedSubmit` (when `NEXT_PUBLIC_GTM_ID` is set)
3. Redirect to Heally prefill URL with query params:
   - `redirect=sched`
   - `preset` — base64url-encoded patient payload
   - `utm_source` — `utm_{your-site-domain}`

Logic lives in `src/lib/heally.ts` and `src/components/forms/LeadCaptureForm.tsx`.

## SEO

- Per-page metadata via `buildMetadata()` helper
- `sitemap.xml` and `robots.txt` auto-generated
- Organization + FAQ JSON-LD structured data
- Canonical URLs, Open Graph, and Twitter cards

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```
