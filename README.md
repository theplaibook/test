# template-premium

Premium dark/gold marketing-site template for local service businesses.
Next.js + Tailwind 4, Bebas Neue + Outfit, sharp edges (no border-radius),
noise textures, gold shimmer, scroll reveals.

Pages: Home, Services & Pricing, Gallery, About, Book (step-by-step booking flow).

## Rebranding — one file

Everything brand-related lives in **`src/lib/brand.ts`**. Change the values
there and the entire site follows: nav, footer, every heading's gold word,
hero copy, contact links, service areas, hours, SEO metadata, and the
LocalBusiness JSON-LD schema.

Key fields:

| Field | Drives |
|---|---|
| `name` | The big gold brand word in every heading, nav, and footer |
| `descriptor` | The secondary line ("Mobile Detailing") in nav/hero/footer |
| `legalName` | Copyright line, metadata, JSON-LD |
| `heroEyebrow` / `heroSubtitle` | Homepage hero copy |
| `city` / `state` / `metro` / `metroNickname` | All location references |
| `serviceAreas` | Coverage chips on home + footer list |
| `phone` / `phoneHref` / `email` / `url` | Every contact link |
| `hours` | Footer hours + JSON-LD opening hours |
| `rating` / `reviewCount` | Trust badge + JSON-LD aggregate rating |
| `seoTitle` / `seoDescription` / `seoKeywords` | Metadata in layout.tsx |

Industry-specific sample content (service packages, gallery items, reviews,
timeline) lives in each page's local arrays — swap that content per project.

## Run

```
npm install
npm run dev
```
