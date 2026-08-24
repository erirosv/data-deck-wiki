# Data Deck

Data Deck is a general-purpose data tool that runs entirely in your browser.
Import time-series or general tabular data, explore and clean it, run
statistics and simple ML, build a report, and export — all client-side.

!!! note "Nothing leaves your browser"
    There is no backend by default. Files you upload are processed only in
    memory, in your own browser tab. Nothing is written to disk, sent to a
    server, or shared between users. Closing the tab clears everything
    unless you explicitly export your project first.

## Starting it up

The app itself is a single static HTML file — no build step. Pick
whichever of these fits; full details in [Getting started](getting-started/overview.md).

=== "Just open the file"

    Double-click `index.html`. Works completely offline. The only thing
    you lose this way is the update-check banner (it needs `config.json`
    served over HTTP to work).

=== "Bare metal"

    ```bash
    cd deploy
    python3 -m http.server 8080
    ```
    Open **`http://localhost:8080`**.

=== "Docker"

    ```bash
    docker compose up -d --build
    ```
    Open **`http://localhost:8080`**.

### Ports

| Service | Port | Required? |
|---|---|---|
| **Data Deck app** (nginx) | `8080` | Yes — this is the app itself |
| **Bug-report relay** (`data-deck-api`) | `3001` | No — only if you want [automatic GitHub bug reporting](deployment/github-integration.md) |

Both are configurable — see the `ports:` entries in `docker-compose.yml`
if you need to change them (e.g. to avoid a clash with something else
already running on `8080`).

## Two workspaces, one tool

Data Deck is built around two complementary workspaces that cover
different shapes of data:

<div class="grid cards" markdown>

- :material-clock-outline: **[Sources](sources/index.md)**

    Time-series data — sensor readings, IoT devices, logs, anything with a
    timestamp. Source grouping, thresholds and alarms, date-range extracts,
    time-series charts with anomaly detection.

- :material-table: **[Datasets](datasets/index.md)**

    General tabular data — no time dimension required. Column statistics,
    correlation, preprocessing, PCA, clustering, a baseline ML model, joins.

</div>

They're connected by [bridges](bridges.md) so you can move data between
them in either direction, and both feed into the same
[report builder](reports/index.md).

## Where to start

- New to the tool? Start with [Getting started](getting-started/overview.md).
- Want to self-host it? See [Deployment](deployment/hosting.md).
- Curious about the privacy model? See [Privacy & architecture](privacy.md).
