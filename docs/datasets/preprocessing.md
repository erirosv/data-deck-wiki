# Cleaning & preprocessing

All preprocessing actions are covered by [Undo](index.md#every-dataset-gets).

## Row-level cleanup

- **Drop rows with missing values**
- **Remove duplicate rows** (exact match — for near-duplicates, see
  [fuzzy duplicate detection](data-quality.md#fuzzy-duplicate-detection))

## Per-column actions

Pick a column and an action:

- **Fill missing** — mean, median, mode, zero, or a custom value
- **Cast to numeric / text**
- **Clean text** — trim whitespace, UPPERCASE, lowercase, Title Case, or
  extract part of a value with a regex pattern (use a capture group `()`
  to keep just part of the match)
- **One-hot encode** — up to 25 unique categories
- **Label encode**
- **Min-max scale** / **z-score standardize**
- **Remove outliers** (IQR method)
- **Extract date parts** — year/month/day/weekday/hour as new numeric
  columns
- **Rename**

## Bulk editing

- **Find & replace a value**, or **set every value in a column to the
  same thing** — fixes many cells in one action instead of clicking
  through them individually
- **Drop multiple columns at once**

## Computed columns

Build a new column from existing ones with a formula:

```
price * quantity
age > 65 ? "Senior" : "Adult"
CONCAT(UPPER(first), " ", last)
```

Arithmetic, comparisons, and ternaries work directly. For text work, use
the helper functions `NUM()`, `STR()`, `UPPER()`, `LOWER()`, `CONCAT()` —
column values keep their original type (number or text), so string
concatenation and comparisons against text work naturally. The resulting
column's type is auto-detected from its computed values.

Only column names, numbers, quoted text, arithmetic/comparison operators,
`?:`, and the helpers above are allowed in a formula — anything else
(attempting to call another function) is rejected before it runs.

## Target column & train/test split

Mark a column as the prediction target (shows class balance or numeric
stats), then split the dataset into train/test datasets by ratio, with
optional shuffling — both feed into the [baseline model](baseline-model.md).
