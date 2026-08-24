# Joining & appending

Both operations create a **new** dataset — the two originals are always
left untouched.

## Join

Combine two datasets by matching a key column, inner or left join —
the standard "add columns from another table" operation.

## Append (stack rows)

Combine two datasets by **stacking their rows** — for the common case of
several files with the same columns, like one export per month.

Columns that don't match between the two are kept, with blanks filled in
wherever a given row doesn't have that column.

## Comparing before combining

Before joining or appending two files, **"Compare with another dataset"**
shows a side-by-side schema diff: which columns exist in both, which are
only on one side, and whether the detected type agrees — useful for
catching a mismatch (e.g. a column typed as text in one file and numeric
in the other) before it causes a confusing result.
