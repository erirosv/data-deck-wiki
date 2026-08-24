# Exploring data

## Column summary

A table with one row per column: type, missing count, unique count,
min/max/mean/std (numeric) or top value (categorical), and a free-text
description field.

Drag the **⠿** handle to reorder columns — this changes the actual column
order used everywhere, including CSV/XLSX export.

Click the type dropdown to override a column's detected type; its values
are re-parsed to match and the override is remembered (it won't get
silently reset by later edits).

## Correlation matrix

A Pearson correlation heatmap across all numeric columns. Computed in a
background thread so it doesn't block the UI — recalculates automatically
after any edit.

## Distributions

Histogram for a numeric column, or a bar chart of top categories for a
text column.

## Pair plots

A scatter-matrix across 2–5 numeric columns, for spotting relationships
between several variables at once.

## Boxplot by category

A numeric column's spread, split out per category of a chosen
categorical column.

## Scatter with regression

Two numeric columns plotted against each other, with a fitted linear
regression line and R² shown below.

## Raw data table

Search, sort (click a header; **Shift+click** another for a secondary
sort), select which columns are visible (useful on wide datasets), and
edit:

- **Click any cell** to edit it directly
- **"Edit row"** to edit every column in a row at once, with Save/Cancel
- **Checkboxes + "Delete selected"** for bulk row removal
- All of the above are covered by [Undo](index.md#every-dataset-gets)
