# Lorenzo Delano — personal wiki

A Wikipedia-style personal profile website: a structured, honest record of one life —
what I am, what I've done, where I'm going. Built with [Next.js](https://nextjs.org/)
(App Router) and Tailwind CSS, deployed on Vercel.

## Structure

| Route | Page |
| --- | --- |
| `/` | Introduction (about, roles, how I can help, why this site) |
| `/inherited-profile` | What I am — legal, cultural, biological |
| `/current-status` | Who I am now — psychological, physical, behavioral, creative, personal |
| `/historical-context` | What I've done — biography timeline, education, employment, business |
| `/future-trajectory` | Where to next — personal growth and social impact |

The right-rail **infobox** (`components/Infobox.tsx`) summarizes the inherited profile,
mirroring the biography box on a real Wikipedia article. Content lives in `content/`
(`site.ts` for navigation, `profile.ts` for the infobox); pages live in `app/`.

> Financial/economic data is intentionally excluded from this public site.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Add a portrait

Drop a photo at `public/portrait.jpg`; the infobox monogram is a placeholder until then.

## Editing content

- **Navigation / page list:** `content/site.ts`
- **Infobox (inherited profile):** `content/profile.ts`
- **Page prose:** the corresponding file under `app/`
- **Citations:** `makeCitations()` in `components/citations.tsx`
