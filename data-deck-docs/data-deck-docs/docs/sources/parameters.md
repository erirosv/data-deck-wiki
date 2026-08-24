# Parameters & thresholds

Every distinct parameter name found across your imports (e.g.
"temperature", "humidity") gets its own row in the **Parameters** tab,
where you can set:

- **Unit** — shown throughout the app and in exports (e.g. `°C`, `%`)
- **Description** — free text, included in the [data dictionary](../project/data-dictionary.md) export
- **Min / max threshold** — the bounds that define an alarm

## Thresholds

Setting a min and/or max for a parameter does two things:

1. Adds a horizontal alarm line to that parameter's line charts
2. Feeds the Dashboard's **Live status** card, which shows the most recent
   reading for every source/parameter combination that has a threshold,
   with an at-a-glance OK / out-of-range indicator

You can also filter the Data tab to **only show threshold violations** —
rows whose value is currently outside the configured bounds are
highlighted directly in the table.

## Thresholds vs. anomaly detection

Thresholds are static, fixed bounds you set yourself. For catching sudden
shifts or drift that a fixed threshold wouldn't flag, see
[rolling anomaly detection](charts.md#anomaly-detection) in Charts — the
two are independent and can be used together.
