# Datasets — overview

The **Datasets** workspace is a general-purpose home for any tabular
data — no time dimension required. Each uploaded file becomes its own
dataset; nothing is merged automatically (unless you explicitly
[join or append](combining.md) two of them).

This is the workspace for data-science and light-ML work: column
statistics, correlation, distributions, cleaning, feature engineering,
dimensionality reduction, clustering, and a baseline model.

## Sidebar sections

- **[Importing data](import.md)** — CSV/XLSX/JSON, multi-sheet Excel,
  custom delimiters, import preview
- **[Exploring data](explore.md)** — column summary, correlation matrix,
  distributions, pair plots, boxplots by category
- **[Cleaning & preprocessing](preprocessing.md)** — missing values,
  duplicates, outliers, encoding, scaling, computed columns, bulk editing
- **[Joining & appending](combining.md)** — combine two datasets by key or
  by stacking rows
- **[PCA & clustering](pca-clustering.md)** — dimensionality reduction and
  k-means, computed in a background thread
- **[Baseline model](baseline-model.md)** — quick linear/logistic
  regression sanity check
- **[Data quality & validation](data-quality.md)** — the quality
  scorecard, custom validation rules, and fuzzy duplicate detection

## Every dataset gets

- **Undo** — a per-dataset history covering edits, deletions, and
  preprocessing actions (skipped automatically on very large datasets to
  stay responsive)
- **Column type override** — force a column's detected type if
  auto-detection got it wrong
- **Column descriptions** — free text per column, included in the
  [data dictionary](../project/data-dictionary.md)
