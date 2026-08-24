# Data Deck — documentation site

A standalone MkDocs site documenting only Data Deck — no other project's
content included.

## Run it locally

```bash
pip install -r requirements.txt
mkdocs serve
```

Open `http://127.0.0.1:8000`. Edits to any `.md` file live-reload.

## Build a static site

```bash
mkdocs build --strict
```

Output goes to `site/`. Verified clean — `--strict` fails on any broken
internal link or nav entry pointing at a missing file; this build passes
with zero warnings or errors.

## Structure

```
mkdocs.yml
docs/
  index.md              # home — includes startup instructions + ports table
  getting-started/        # installing & configuring the app
  sources/                  # time-series workspace docs
  datasets/                   # tabular/ML workspace docs
  reports/                      # report builder docs
  project/                        # save/load, activity log, data dictionary
  deployment/                       # Docker/bare metal + GitHub integration
  bridges.md                          # Sources ↔ Datasets
  privacy.md                            # architecture & privacy model
  about.md
  assets/stylesheets/extra.css           # referenced by mkdocs.yml
  js/init-mermaid.js                       # referenced by mkdocs.yml
```

Every page documents an actual, currently-built feature of the app —
nothing here is placeholder content, and there's no other project's
material mixed in.
