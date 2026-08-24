# Overview

Data Deck ships as a single static HTML file. There is no build step and,
by default, no backend — you can literally double-click `index.html` and
start using it.

## Ways to run it

| Method | Setup | Update checks | Automatic bug reports |
|---|---|---|---|
| Open the file directly | none | no | no |
| [Bare metal](bare-metal.md) (any static file server) | one command | yes | no (unless you also run the backend) |
| [Docker](docker.md) | `docker compose up` | yes | optional, if you configure the relay |

## What you get out of the box

- Import CSV, XLSX (including multi-sheet workbooks), and JSON
- Two workspaces — [Sources](../sources/index.md) for time-series data,
  [Datasets](../datasets/index.md) for general tabular data
- A [report builder](../reports/index.md) with a guided simple mode and a
  full block-based advanced mode
- Project save/load, an activity log, and a data dictionary export
- Light/dark theme, keyboard shortcuts, and touch support

## Next steps

If you just want to use the tool, open `index.html` and go — the rest of
this section is only relevant if you're deploying it for other people.
