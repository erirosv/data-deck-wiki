# About

Data Deck is a single-file, browser-only tool for working with both
time-series and general tabular data — import, explore, clean, visualize,
model, and report, without any data leaving your browser unless you
explicitly choose to export it.

## Design principles

- **Privacy by architecture, not by policy** — see [Privacy & architecture](privacy.md)
- **Two workspaces for two shapes of data** — [Sources](sources/index.md)
  for time-series, [Datasets](datasets/index.md) for general tabular data,
  connected by explicit [bridges](bridges.md) rather than forced into one
  model
- **Progressive disclosure** — [Simple mode](reports/simple-mode.md) for
  people who don't want to think about blocks and chart types,
  [Advanced mode](reports/advanced-mode.md) for full control, built on the
  same engine
- **Deliberate, not default, automation** — anything that leaves the
  browser (update checks, bug reports) is opt-in and, by default,
  reviewable before it happens

## Feedback

If you're self-hosting this with [bug reporting configured](deployment/github-integration.md),
crashes surface a report you can send from right inside the app. Otherwise,
file an issue on the project's GitHub repository directly.
