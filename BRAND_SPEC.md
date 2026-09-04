# BRAND SPEC — Lorenzo Delano

Global brand identity for everything Lorenzo produces: website, favicon,
letterhead, email, stamps, slides, documents, taxonomies, video titles.
Not Autaxonomy-specific; Autaxonomy is one product of the brand.

Companion documents: `DESIGN_SPEC.md` (site typography and layout),
`KNOWLEDGE_SPEC.md` (taxonomy content structure). This document governs
identity; those govern implementation.

Status: v0.3 (2026-09-04). Symbol ratified: the Ranked Table (§1.1), a
ruled 3×3 with the three ranks in its header row, replacing the LD cell
(v0.1) and the diagonal (v0.2); the initials appear in no mark. Inks
ratified (§2.2) with contrast ratios recorded.

---

## 0. Thesis

**The brand is the taxonomy.** Lorenzo is an applied taxonomist; his
signature artifact is the tabled taxonomy, whose atom is the cell. Grids
change shape (3×3 classic, 3×2 on the site, facets > matrix > other in the
template) — the cell is invariant. The identity is built from that atom.

Three principles, in rank order:

1. **Structure over ornament.** Every element earns its place by function.
2. **Color ranks; it never decorates.** Hue encodes hierarchy, in spectrum
   order, always. Emphasis is done with weight and italics, not color.
3. **Specificity over hype.** The voice states, measures, and cites.

Permitted rule-bends (the "uniquely me" allowances): the parenthetical
gloss as a typographic device; uppercase serif wordmark (encyclopedic,
not corporate); a red seal as a signature mark.

---

## 1. Marks

Three interchangeable forms, one system: symbol, wordmark, lockups. Any
form may stand alone. No initials anywhere in the marks: the wordmark
names, the symbol means.

### 1.1 The Symbol: the Ranked Table (emblem)

A square ruled into nine equal cells, with the three ranks filling the
header row, left to right, in spectrum order: red, green, violet. It is
the matrix's own column bar, and it encodes three of the six taxonomy
elements in one shape: *tabled* (the rules), *3×3* (the matrix),
*triadic* (three ranked cells). A table with its header: the symbol is
the artifact, not an abstraction of it.

- Geometry: square. Rule = side ÷ 30 (1 px minimum); inner rules equal
  the border; cells equal. No rounding, no ornament (a table, not a
  badge; the current header circle is retired).
- **Primary**: ink rules, paper cells, triad header. Every size,
  including the 16 px favicon (4 px cells stay legible).
- **Monochrome**: ink rules, paper cells, ink header: one tone, an ink
  band over six paper cells. Wherever color is unavailable or forbidden:
  embossing, engraving, single-color print, stamps.
- **On ink**: paper rules, ink cells; the header keeps the triad (the
  hues survive on dark grounds) or goes paper for the monochrome form.
- **Seal**: rules and header in `red-ink`, paper cells (§1.4).
- Minimum size: 16 px. Clear space: one grid cell (side ÷ 3) on all
  sides.
- The three hues are legitimate here only because they mark rank
  (columns one to three, as in every matrix). They are never reordered,
  never spread below the header, never graded.
- Retired candidates, for the record (canvas board "Record"): the LD
  monogram cell (v0.1: initials); the diagonal (v0.2: a pattern the table
  never shows, dice-like in monochrome); "ld" pixel tiles (the filled bowl
  erases the d; three tones in monochrome; initials again); nine separated
  squares (cells without rules; collapses at 16 px; two tones in
  monochrome).
- **Triad row**: the same three ranks flattened into one row of small
  squares (red, green, violet) beside a URL or running foot. A device,
  never a substitute for the symbol.

### 1.2 The Wordmark

**LORENZO DELANO** in Newsreader, semibold, uppercase, tracking 0.02em
(site header) to 0.055em (large/print, as on the resume). Optical size
axis on (`opsz`). One line; never stacked except in the vertical lockup
(§1.3). Ink on paper; paper on ink or on a solid rank hue.

Secondary wordmark: **Autaxonomy** and other product names set the same
way, never larger than the primary wordmark when both appear.

### 1.3 Lockups

- **Horizontal** (default): symbol side = 1.43× the wordmark's font size
  (about twice its cap height), centered on the cap height, gap = half a
  symbol side, wordmark right. Site header on mobile: 26 px symbol
  centered on the wordmark's cap height.
- **Vertical**: symbol side = 4× the wordmark's font size, centered above
  it, gap = one font size; for square avatars and stamps.
- **Gloss lockup**: wordmark followed by a parenthetical gloss in
  Newsreader italic, regular weight, sentence case:
  `LORENZO DELANO (Applied Taxonomist)` · `LORENZO DELANO (Autaxonomy)`.
  The gloss names the context of use, exactly as glosses name branches on
  the site. This is the brand's one deliberate rule-bend and its most
  recognizable device.
- **Tagline lockup**: wordmark with the tagline beneath in Newsreader
  italic: *Designing the technologies of personal transformation.* With
  the symbol, it spans exactly from the wordmark's cap line to the
  tagline's baseline, so the mark and the two text lines share top and
  bottom edges (site header from 1024 px: 31 px symbol, 64 px header).

### 1.4 The Seal (secondary mark)

The symbol in solid `red-ink` (rules and header red, cells paper), used
as a stamp: signatures, certificate corners, document footers, the 404
page. Square, never rotated, and reads as a chop. Optional tertiary
variant for personal (non-commercial) use: a solid red cell carrying the
character 龍 or Lorenzo's Chinese name in seal script — the dragon's
place in the system, earned by the Mandarin distinction, kept off the
professional surfaces. Never combined with the wordmark in the same
lockup; the seal signs, the wordmark names.

### 1.5 Don'ts

No rounded symbol. No gradients. No drop shadows. No rotation. No
shuffled ranks (the header is always red, green, violet from the left).
No fills below the header. No hue on the wordmark. No initials in any
mark. No dragon on the primary emblem. Never more than one seal per
surface.

---

## 2. Color

### 2.1 Neutrals (the paper and the ink)

| Token | Value | Use |
| --- | --- | --- |
| `ink` | `#1b1c1d` | Text, rules on white, solid cell, title bands |
| `ink-2` | `#3a3d3f` | Secondary solid surfaces |
| `muted` | `#5a5f66` | Secondary text, glosses in UI |
| `rule` | `#c8ccd1` | Table rules, cell borders |
| `rule-soft` | `#e6e8eb` | Interior hairlines |
| `band-neutral` | `#e8eaed` | Unranked bands (infobox headers) |
| `surface` | `#f4f5f6` | App ground |
| `paper` | `#ffffff` | Page, cell fill |
| `mark` | `#fef6e7` | Highlight only |

### 2.2 The hierarchy palette (six ranks, spectrum order)

Every ranked structure colors its levels in this order, first level red.
Tints are the site's existing band colors (backgrounds, ink text on
them). Inks are the saturated counterparts for marks, lines, and text on
paper. Ratified 2026-09-04 against WCAG contrast: every ink clears AA
(≥ 4.5:1) on paper, which also clears paper text on the ink (the ratio is
symmetric), and the neutral ink clears every tint by a wide margin.

| Rank | Hue | Tint (bg) | Ink (fg) | Ink on paper | Neutral ink on tint | Ink on own tint |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | red | `#ecccc9` | `#ba0000` | 6.80 | 11.42 | 4.55 |
| 2 | orange | `#f0d9c0` | `#b45309` | 5.02 | 12.51 | 3.68 |
| 3 | yellow | `#efe3b8` | `#7a5c00` | 6.25 | 13.29 | 4.87 |
| 4 | green | `#c8e0c4` | `#2e7d32` | 5.13 | 12.12 | 3.64 |
| 5 | blue | `#c8daee` | `#3366cc` | 5.37 | 11.96 | 3.76 |
| 6 | violet | `#d9cfe8` | `#5e35b1` | 8.02 | 11.41 | 5.36 |

The last column governs one rule: a rank ink on its own tint (orange,
green, blue fall between 3:1 and 4.5:1) is permitted only for large or
bold text and for rules and fills, never for body text. Tables never need
it: keywords in rank hue sit on paper, and tinted bands carry neutral ink.
Blue stays identical to the site's link color on purpose.

Functional colors that live outside rank: `link #3366cc` (also blue ink),
`link-visited #6b4ba1`, `focus #0b57d0`, `danger = red-ink`.

### 2.3 The identity triad

For identity surfaces (banner, letterhead accents, slide title bars,
three-level structures), the palette compresses to three stops spanning
the spectrum: **red · green · violet** — ranks 1, 4, 6: the beginning,
middle, and end of every page; the arc from given to chosen.

### 2.4 Rules

1. Hue count = level count. Six levels → ROYGBV. Three → red/green/violet.
   Two → red/violet (the ends). One → ink only.
2. Spectrum order is hierarchy order, top-down or left-to-right. Never
   shuffle hues for aesthetics.
3. Text on tints is ink. Text on inks is paper. Never tint-on-tint.
4. Hue is never used for emphasis, decoration, mood, or "brand splash."
   The one exception is the seal.
5. Neutrals carry ≥ 80% of any surface; hue is the legend, not the page.

---

## 3. Typography

| Role | Face | Weights | Notes |
| --- | --- | --- | --- |
| Display, headings, wordmark | **Newsreader** (variable, `opsz`) | 600 (semibold), 400 italic | Encyclopedic register; italics for leads, glosses, taglines |
| Body, UI, tables, letters | **Inter** | 400, 500, 600 | 14–16 px UI; 9.4–11 pt print |
| Data, IDs, code, hashes | **JetBrains Mono** | 400 | Disambiguates 0/O, 1/l/I |

Scale (site tokens): h1 1.75–2.25 rem · h2 1.375–1.625 rem · h3 1.125–1.25
rem · lead 1.06–1.125 rem · body 1 rem · small 0.875 rem · xs 0.8125 rem
(floor) · wordmark 1.125 rem. Print (resume): body 9.4 pt, h2 10.5 pt
italic semibold, h1 21 pt uppercase 0.055em tracking.

Devices:
- **The gloss**: `Label (gloss)` — label bold (or bold italic in
  taxonomies), gloss regular in parentheses, sentence case. Names the
  function of the label. Used in headings, lockups, table cells, slide
  titles.
- **Uppercase serif** for titles and bands; sentence case everywhere else.
- **No trailing periods** on labels, cells, or list rows; full sentences
  in prose only.

---

## 4. The Taxonomy Table (the brand's core artifact)

The tabled taxonomy is the brand's signature deliverable; its anatomy is
constant even as its grid changes.

Structure (classic): **Title band → FACETS → MATRIX → other sections
(e.g., INSTRUCTIONS)**. Grid shape follows the taxonomy's function: 3×3
(classic), 3×2 (the site's page anatomy), n×m as the domain demands.
The cell is the constant.

Anatomy, top-down:
1. **Title band**: ink fill, paper text, uppercase bold, glossed:
   `TEMPLATE (MAP)`.
2. **Section bands**: `ink-2` fill, paper text, uppercase bold italic:
   `FACETS`, `MATRIX`, `INSTRUCTIONS`.
3. **Column headers**: `band-neutral` fill, ink bold, glossed:
   `Learning (Plan)`.
4. **Ranked heading rows**: rank tints in spectrum order down the table;
   rank inks for column-header fills when the columns themselves are
   ranked (the template's red/green/blue column bar is the triad rule in
   action; standardize to red/green/violet).
5. **Cells**: paper, 1 unit `rule` border, bullets; sub-labels bold italic
   with glosses; nested lists indent once.
6. **Leads**: unlabelled italic first row of a category, first person,
   one line.

Digital tables follow `DESIGN_SPEC.md`; printed/Docs tables follow this
section with the same tokens.

---

## 5. Voice

First person. US English. Specificity over hype: numbers, instruments,
dates, receipts. Colons lead lists and elaborations; parentheses hold
asides; semicolons balance; em dashes only where nothing else does the
job (structural separators, glossary term—definition). No exclamation
marks. Every claim links to its evidence.

---

## 6. Applications (specs to produce)

| Surface | Form | Spec |
| --- | --- | --- |
| Favicon / app icons | Primary symbol | 16, 32, 180, 512 on paper · SVG source |
| Site header | Primary symbol + wordmark (horizontal lockup) | Replaces the current LD circle |
| Social avatars | Primary symbol | Square crop, paper ground, clear space one grid cell; no wordmark |
| LinkedIn banner (1584×396) | Gloss lockup + tagline + triad row with URL | Paper ground; left 420 px kept clear for the photo |
| YouTube channel art (2560×1440) | Gloss lockup + tagline in the 1546×423 safe area | Surface ground; triad bar along the top edge |
| Letterhead | Gloss lockup top-left | Contact top-right in Inter xs; seal beside the signature; running foot with triad row |
| Email signature | Primary symbol 48 px, rule, gloss lockup + tagline + links | Links in site blue only |
| Resume | Existing type system; symbol may sit beside the name | Closing line unchanged |
| Cover letters (table) | Title band per §4 | Already conformant |
| Slides | Title master: ink title band with glossed title, triad bar beneath; symbol + wordmark in the foot | Body Inter; data JetBrains Mono |
| Stamp / seal | Red symbol (or 龍 personal variant) | Physical: 20–25 mm square |
| Video titles / thumbnails | Wordmark on paper or ink; single rank hue as accent bar | Never a hued background |
| Documents / taxonomies (Docs, PDF) | §4 anatomy | Tints for bands, inks for column bars |

---

## 7. Deliverables and next steps

1. ~~Canvas explorations~~ Done (v0.3): the Ranked Table with the header
   row ratified as the symbol after four candidates; construction, forms,
   size ladder, don'ts, the record board, and all application mockups on
   the brand canvas.
2. ~~Ratify inks~~ Done: all six pass AA on paper unchanged, so no site
   token moved; ratios in §2.2.
3. ~~Export~~ Done: `public/brand/` — `symbol.svg`, `symbol-mono.svg`,
   `symbol-on-ink.svg`, `symbol-on-ink-mono.svg`, `seal.svg`,
   `wordmark.svg` (Newsreader 600 at opsz 72, outlined, tracking 0.055em),
   `lockup-horizontal.svg`, `lockup-vertical.svg`; favicons `app/icon.svg`
   (16-unit grid so the rule is 1 px at 16 px) and `app/apple-icon.png`
   (180). The symbol is drawn from one construction wherever it appears:
   `components/BrandSymbol.tsx` on the site, the export scripts for the
   files.
4. Wire: ~~site header symbol, favicon~~ done; LinkedIn banner and avatar,
   YouTube channel art, letterhead template (Docs), email signature,
   slide master.
5. Version this document at each ratification.
