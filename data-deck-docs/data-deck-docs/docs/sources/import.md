# Importing data

Drag one or more CSV/XLSX files onto the Import tab, or click to choose
files. Multiple files are merged into the same shared dataset — nothing
overwrites anything.

## Automatic column recognition

Data Deck tries to recognize columns by name regardless of exact naming —
"Source", "Timestamp", "Reading" work just as well as "deviceId",
"unixTime", "value". Every import — whether recognized automatically or
not — shows a **confirmation card** first: a preview of the first rows and
the detected column types, so you can catch a misread file (e.g. wrong
delimiter) before it's actually imported.

If several files are recognized automatically at once, an **"Import all
recognized files"** button appears so you don't have to confirm each one
individually.

## Manual column mapping

If a file's columns can't be confidently identified, you'll be asked to
map them by hand: which column is the source/device ID, which is the
parameter name, which is the value, which is the timestamp.

## Long vs. wide format

- **Long format** (default): one row per measurement —
  `timestamp, source, parameter, value`.
- **Wide format**: one column per source, e.g. a timestamp column plus
  `Room A`, `Room B`, `Room C` columns each holding a value. Toggle this in
  the mapping card if your file looks like that — Data Deck auto-suggests
  wide format when it detects a timestamp column plus two or more numeric
  columns.

## CSV delimiter

If a file doesn't parse correctly with auto-detection, set the delimiter
manually (comma, semicolon, tab, or pipe) next to the drop zone before
re-uploading.

## Multi-sheet Excel

If an uploaded workbook has more than one sheet, a picker appears listing
every sheet name — choose which one to import.
