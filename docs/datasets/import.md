# Importing data

Drag a CSV, XLSX, or JSON file onto the Datasets tab. Each file becomes
its own separate dataset — nothing is merged automatically.

## Supported formats

- **CSV** — auto-detected delimiter, or set one manually (comma,
  semicolon, tab, pipe) if a file doesn't parse correctly
- **XLSX / XLS** — including multi-sheet workbooks, which prompt a sheet
  picker
- **JSON** — accepts a top-level array of objects, or `{"data": [...]}` /
  `{"rows": [...]}` wrappers. Nested objects are flattened one level deep
  (`address.city` becomes its own column)

## Import preview

Every import — successful auto-detection or not — shows a confirmation
card first: the first few rows and detected column types, so you can catch
a misread file before it's actually committed. If multiple files are ready
at once, an **"Import all"** button confirms them together.

## Type detection

Columns are typed automatically as numeric, text, datetime, or boolean
based on a sample of values. If it gets one wrong, you can
[override the type](explore.md#column-summary) directly in the column
summary table — the column's values are re-parsed to match.
