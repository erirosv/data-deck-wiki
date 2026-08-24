# Advanced mode

Build a report from independent blocks — add, remove, and freely reorder
any combination in any order.

## Reordering

Every block has a grip handle (**⠿**). Drag it to reorder — this works
with both mouse (native drag-and-drop) and touch (manual touch handling,
since native drag-and-drop isn't supported on most mobile browsers).

## Block types

| Block | What it shows |
|---|---|
| **Heading / text** | A section title and optional free text |
| **Logo** | The uploaded logo, positioned and sized independently of the automatic header — place it anywhere |
| **Summary** | Auto-generated overview (source/parameter/measurement counts) for the report's period |
| **Source table** | A table of selected sources |
| **Stats table** | Min/max/mean/etc. per parameter, laid out per-parameter, per-source, or as a grid |
| **Data table** | A raw sample of rows (configurable row limit) |
| **Chart** | Any Sources chart type/layout, same options as the Charts tab |
| **Dataset summary** | Column stats and/or correlation matrix for a chosen dataset |
| **Dataset chart** | Distribution, scatter, boxplot-by-category, or the dataset's last-run PCA/clustering result |
| **Page break** | Forces a new PDF page (and `#pagebreak()` in Typst) at that point |

### Dataset summary

Pick a dataset, and toggle whether to include its column summary table,
its correlation matrix, or both.

### Dataset chart

Pick a dataset and a chart kind. PCA and clustering options reuse the
**last result you ran** in the [Datasets tab](../datasets/pca-clustering.md)
for that dataset, rather than recomputing — if you haven't run one yet,
the block tells you to go run it first instead of showing a blank chart.

## Mixing Sources and Datasets content

Nothing stops you from combining source-based blocks (chart, source
table) and dataset-based blocks (dataset summary, dataset chart) in the
same report, in any order — they're just entries in the same block list.

## Report settings

- **Title, description, author, date range**
- **Logo upload** — used automatically in the header (unless disabled,
  see below), and/or placed anywhere via a Logo block
- **Accent color** — controls heading underlines and table borders
  throughout the report
- **Cover page** — puts the title/author/period on their own page
- **Table of contents** — lists every numbered section; in the Typst
  export this becomes a real, page-numbered, linked outline automatically
- **Show the automatic title header** — turn this off to build your own
  header from scratch using Heading and Logo blocks, positioned wherever
  you want
