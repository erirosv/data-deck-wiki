# Browsing & editing data

The **Data** tab shows the combined dataset from every import, with
filtering, sorting, search, and inline editing.

## Filtering

- Select specific sources and/or parameters
- Set a date range
- Free-text search across source name, parameter, and value
- **"Only show threshold violations"** — narrows to rows currently outside
  a configured min/max (see [Parameters & thresholds](parameters.md))

## Sorting

Click a column header to sort by it. **Shift+click** another header to add
it as a secondary sort (a tiebreaker) — the header shows `↑1`, `↓2` etc. to
indicate sort order.

## Editing

Each row has a **Delete** button. Deleting is protected by a single-level
undo — an **"Undo last row deletion"** button appears after a delete in
case it was a mistake.

## Turning a filter into an extract

Once you've got a filter you like, **"Save this filter as an extract"**
turns it into a named [Extract](extracts.md) you can reuse without
rebuilding the filter from scratch.

## Exporting

Export the full (unfiltered) dataset as CSV or XLSX from the buttons below
the table.
