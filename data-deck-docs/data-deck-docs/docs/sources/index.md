# Sources — overview

The **Sources** workspace is built for time-series data: sensor readings,
IoT devices, machine logs, anything where each measurement has a
timestamp, comes from some named source, and has a parameter/value pair.

Internally, everything imported here is normalized into one shared,
long-format dataset:

```
{ deviceId, deviceName, field, value, unixTime, ts, importId }
```

That shared model is what makes [Extracts](extracts.md),
[Charts](charts.md), and the [Report builder](../reports/index.md) all work
against the same combined pool of data regardless of which file it
originally came from.

## Sidebar sections

- **[Importing data](import.md)** — CSV/XLSX/JSON, long or wide format,
  multi-sheet Excel, custom delimiters
- **[Source groups](groups.md)** — organize sources (by building, room,
  device type, whatever makes sense) for quick selection elsewhere
- **[Parameters & thresholds](parameters.md)** — units, descriptions,
  min/max alarm bounds per parameter
- **[Browsing & editing data](data.md)** — search, sort, filter, edit, and
  delete individual measurements
- **[Extracts](extracts.md)** — save a named source+parameter+date-range
  slice for reuse
- **[Charts & anomaly detection](charts.md)** — line/bar/histogram/boxplot/scatter,
  plus rolling anomaly detection

## Not sure if your data belongs here or in Datasets?

If it has a time dimension you want to track over time or alarm on, use
Sources. If it's a general table without a required time column, use
[Datasets](../datasets/index.md) instead — and either way, you can move
data between them later with the [bridges](../bridges.md).
