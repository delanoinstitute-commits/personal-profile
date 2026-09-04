# BRAND SPEC — Lorenzo Delano

Global brand identity for everything Lorenzo produces: website, favicon,
letterhead, email, stamps, slides, documents, taxonomies, video titles.
Not Autaxonomy-specific; Autaxonomy is one product of the brand.

Companion documents: `DESIGN_SPEC.md` (site typography and layout),
`KNOWLEDGE_SPEC.md` (taxonomy content structure). This document governs
identity; those govern implementation.

Status: v0.1 (draft, 2026-09-03). Canvas explorations pending; ink values
marked *draft* are tuned on canvas before ratification.

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

Three interchangeable forms, one system. Any form may stand alone.

### 1.1 The Cell (emblem)

A single table cell containing the monogram **LD** — the atom of the
taxonomy holding the initials of its author.

- Geometry: square. Border = 1 unit rule (matches the site's table rule);
  monogram set in Newsreader, semibold, uppercase, optically centered,
  cap height ≈ 50% of cell side. No rounding (a cell, not a badge; the
  current header circle is retired).
- **Outline cell** (default): ink rule, paper fill, ink monogram.
- **Solid cell**: ink fill, paper monogram. For dark grounds and favicons
  at small sizes.
- **Hued cell**: fill in a rank hue with paper monogram — used ONLY where
  the cell sits inside a ranked context (e.g., a red cell as the seal;
  triad cells on a banner). Never a hued cell as the default emblem.
- Minimum size: 16 px (favicon) — at 16 and 32 px, drop the border and use
  the solid cell; at ≥ 48 px, the outline cell.
- Clear space: one cell-side on all sides.

### 1.2 The Wordmark

**LORENZO DELANO** in Newsreader, semibold, uppercase, tracking 0.02em
(site header) to 0.055em (large/print, as on the resume). Optical size
axis on (`opsz`). One line; never stacked except in the vertical lockup
(§1.3). Ink on paper; paper on ink or on a solid rank hue.

Secondary wordmark: **Autaxonomy** and other product names set the same
way, never larger than the primary wordmark when both appear.

### 1.3 Lockups

- **Horizontal** (default): Cell at cap-height of the wordmark, gap = half
  a cell side, wordmark right.
- **Vertical**: Cell above, wordmark below, centered; for square avatars
  and stamps.
- **Gloss lockup**: wordmark followed by a parenthetical gloss in
  Newsreader italic, regular weight, sentence case:
  `LORENZO DELANO (Applied Taxonomist)` · `LORENZO DELANO (Autaxonomy)`.
  The gloss names the context of use, exactly as glosses name branches on
  the site. This is the brand's one deliberate rule-bend and its most
  recognizable device.
- **Tagline lockup**: wordmark with the tagline beneath in Newsreader
  italic: *Designing the technologies of personal transformation.*

### 1.4 The Seal (secondary mark)

The solid **red** cell with the LD monogram, used as a stamp: signatures,
certificate corners, document footers, the 404 page. It is the hued-cell
variant in `red-ink`, square, and reads as a chop. Optional tertiary
variant for personal (non-commercial) use: the same red seal carrying the
character 龍 or Lorenzo's Chinese name in seal script — the dragon's
place in the system, earned by the Mandarin distinction, kept off the
professional surfaces. Never combined with the wordmark in the same
lockup; the seal signs, the wordmark names.

### 1.5 Don'ts

No rounded cell. No gradients. No drop shadows. No hue on the wordmark.
No dragon on the primary emblem. Never more than one seal per surface.
Never distort, rotate, or outline the monogram separately from its cell.

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
paper (*draft — tune on canvas; targets ≥ 4.5:1 on paper*).

| Rank | Hue | Tint (bg) | Ink (fg, draft) |
| --- | --- | --- | --- |
| 1 | red | `#ecccc9` | `#ba0000` |
| 2 | orange | `#f0d9c0` | `#b45309` |
| 3 | yellow | `#efe3b8` | `#7a5c00` |
| 4 | green | `#c8e0c4` | `#2e7d32` |
| 5 | blue | `#c8daee` | `#3366cc` |
| 6 | violet | `#d9cfe8` | `#5e35b1` |

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
| Favicon / app icons | Solid cell | 16, 32 (no border) · 180, 512 (outline on paper) · SVG source |
| Site header | Outline cell + wordmark | Replaces the current LD circle |
| Social avatars | Solid or outline cell | Square crop; no wordmark |
| LinkedIn banner | Wordmark + tagline lockup | Paper ground; triad as three thin rank bars |
| Letterhead | Horizontal lockup top-left; gloss `(Applied Taxonomist)` | Contact line bottom in Inter xs; seal bottom-right on signed pages |
| Email signature | Text: wordmark line + tagline italic + site link | Optional 32 px solid cell image; no hue |
| Resume | Existing type system; cell may sit beside the name | Closing line unchanged |
| Cover letters (table) | Title band per §4 | Already conformant |
| Slides | Title master: ink title band with glossed title; rank bars for sections | Body Inter; data JetBrains Mono |
| Stamp / seal | Red solid cell, LD (or 龍 personal variant) | Physical: 20–25 mm square |
| Video titles / thumbnails | Wordmark on paper or ink; single rank hue as accent bar | Never a hued background |
| Documents / taxonomies (Docs, PDF) | §4 anatomy | Tints for bands, inks for column bars |

---

## 7. Deliverables and next steps

1. Canvas explorations (Claude Design): cell construction (border weight,
   monogram optical center, letterform at 16/32/180/512), lockups, seal,
   ink ramp tuning against paper and tints.
2. Ratify inks (§2.2) after contrast checks; update site tokens if any
   value changes.
3. Export: `public/brand/` — `cell-outline.svg`, `cell-solid.svg`,
   `seal.svg`, `wordmark.svg`, `lockup-horizontal.svg`,
   `lockup-vertical.svg`, favicons (`app/icon.svg`, `apple-icon.png`).
4. Wire: site header cell, favicon, LinkedIn banner and avatar,
   letterhead template (Docs), email signature, slide master.
5. Version this document at each ratification.
