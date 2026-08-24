# Branding & export

## Logo

Upload an image (under 2MB) in Report settings. It appears in the
automatic header by default, and/or can be placed anywhere via a
dedicated [Logo block](advanced-mode.md#block-types) with its own size and
alignment.

## Accent color

A single color picker controls heading underlines and table header
borders throughout the generated report — set it to match your
organization's brand color instead of the default teal.

## PDF export

- Paginated automatically, with forced breaks respected wherever a **Page
  break** block is placed
- Every page gets a **"Page X of N"** footer
- If a logo is set, the export waits for it to finish decoding before
  rendering, so it's never captured half-loaded

## Typst export

A plain-text `.typ` source file for the [Typst](https://typst.app)
typesetting system. If a table of contents is enabled, Typst's built-in
`#outline()` generates a real, page-numbered, linked TOC automatically
from the section headings — no manual page-number tracking needed.

Charts aren't embedded as images in the Typst export (there's no rendered
image to embed at that point) — chart blocks are noted with a pointer to
the PDF version instead.

## CSV export of underlying data

Separate from the formatted report: **"Export underlying data (CSV)"**
exports the raw Source rows within the report's date range, and — if the
report includes any Dataset summary blocks — each referenced dataset's
full data as its own CSV file too.
