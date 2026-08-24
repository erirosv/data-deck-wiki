# Charts & anomaly detection

## Chart types

Line, bar, histogram, boxplot, and scatter — pick a chart type, select
sources and parameters, and generate.

## Layout modes (line charts)

- **One chart per parameter** — all selected sources overlaid on the same
  chart
- **One chart per source** — all selected parameters overlaid
- **Grid** — one small chart per source × parameter combination

## Aggregation

For long date ranges, raw points can be aggregated into hourly or daily
buckets so the chart stays readable instead of plotting every single
reading.

## Threshold overlay

If a parameter has a [min/max threshold](parameters.md) set, its line
charts automatically show horizontal alarm lines at those bounds.

## Anomaly detection

A separate, optional overlay: **"Highlight anomalies (rolling z-score)"**.

Unlike static thresholds, this is **causal and rolling** — each point is
compared only against the mean/standard deviation of a window of preceding
points, not the whole series or a fixed bound. That means it catches
sudden shifts or drift even in a range that's otherwise "normal" for the
series as a whole.

Configure:

- **Rolling window** — how many preceding points count as "recent history"
- **Threshold (standard deviations)** — how far a point has to deviate to
  be flagged

Flagged points are drawn larger and in red directly on the line chart, and
a summary table below lists how many anomalies were found per source and
parameter.
