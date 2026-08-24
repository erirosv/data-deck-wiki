# Data quality & validation

## Data quality scorecard

A single 0–100 score combining:

- Completeness (share of non-missing cells)
- Duplicate row count
- Number of columns with more than 20% missing values
- Number of numeric columns with detected outliers (IQR method)

Columns dragging the score down are listed explicitly, so you know exactly
what to fix rather than just seeing a number.

## Validation rules

Define your own expectations per column and see how many rows currently
break them:

- **Numeric columns** — a min and/or max bound
- **Text columns** — a regex pattern values must match

Violation counts update live as you adjust the rule.

## Fuzzy duplicate detection

Finds values that are *nearly* identical but not exact matches — typos,
inconsistent spacing or casing (e.g. `"Acme Inc"` vs. `"Acme, Inc."`).

1. Pick a column and a similarity threshold (50–99%)
2. Click **"Find similar values"**

Uses Levenshtein (edit) distance under the hood. Because it's a pairwise
comparison, it's capped at 2,000 rows to stay responsive — run it on a
smaller extract if your dataset is larger than that.
