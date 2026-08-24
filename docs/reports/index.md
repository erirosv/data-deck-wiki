# Reports — overview

The report builder has two modes, sharing the same underlying engine and
export pipeline:

- **[Simple mode](simple-mode.md)** — a few plain-language questions
  generate a complete report automatically. No need to understand blocks,
  chart types, or layouts. This is the default.
- **[Advanced mode](advanced-mode.md)** — full block-based control: add,
  remove, and freely reorder any combination of text, tables, and charts
  from both [Sources](../sources/index.md) and [Datasets](../datasets/index.md)
  in one document.

Switch between them with the tabs at the top of the Report page — content
built in one is visible and editable in the other.

## Output formats

- **PDF** — with page numbers, a logo, an accent color, and smart
  page-break handling
- **Typst (`.typ`)** — a plain-text source file for the
  [Typst](https://typst.app) typesetting system; a table of contents here
  becomes a real, page-numbered, linked one automatically
- **CSV** — the underlying data behind the report (source rows in the
  report's date range, and/or any datasets referenced by
  [Dataset summary](advanced-mode.md#dataset-summary) blocks), separate
  from the formatted report itself

See [Branding & export](branding-export.md) for logo, color, and export
details.
