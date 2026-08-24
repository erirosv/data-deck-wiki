# Save / load a project

Since nothing is saved automatically (see [Privacy & architecture](../privacy.md)),
this is the one deliberate way to persist a session across tab closes or
browser restarts.

## Export

From the Dashboard, **"Export project (.json)"** downloads a single file
containing everything: source data, datasets (including all preprocessing
already applied), extracts, source groups, thresholds, units,
descriptions, the activity log, and the report draft — title, blocks,
logo, and branding settings included.

## Import

**"Import project…"** loads a previously exported file back in, restoring
the session exactly as it was. If the current session already has data in
it, you'll be asked to confirm before it's replaced.

## What this is (and isn't)

This is a manual, explicit action — a file you keep yourself, on your own
computer. It's not automatic persistence, and the app never writes
anything to disk on its own; exporting only happens when you click the
button.
