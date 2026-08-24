# Bridges between workspaces

[Sources](sources/index.md) and [Datasets](datasets/index.md) use
different data models on purpose — Sources is strict long-format with time
as a first-class dimension, Datasets is a free-form wide table with no
time requirement. Rather than force them into a single model, they're kept
separate and connected by two explicit, one-click bridges.

## Sources → Datasets

From any saved [Extract](sources/extracts.md), click **"→ Dataset"**. The
extract's long-format rows (source, parameter, value, time) are pivoted
into a wide table — one column per parameter, one row per source+timestamp
— and sent straight to the Datasets workspace. This is a genuine pivot
operation, not just a copy: it unlocks correlation, PCA, clustering, and
the baseline model on data that started as sensor readings.

## Datasets → Sources ("Promote to Sources")

From any dataset, **"Promote to Sources"** does the reverse: unpivots a
wide table back into long-format measurements.

1. Pick a **source column** (identifies which rows belong to which
   source) — or skip it to treat the whole dataset as one source
2. Pick a **timestamp column** (optional — if skipped, a synthetic
   increasing sequence is used instead, with a note in the import log)
3. Pick which **numeric columns** become parameters

This unlocks source grouping, thresholds/alarms, date-range extracts, and
time-series charts for data that didn't start out as sensor readings.

## Neither operation is destructive

Both bridges create new data in the target workspace — the original
extract or dataset is left completely untouched either way.
