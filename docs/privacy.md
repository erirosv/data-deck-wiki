# Privacy & architecture

## The core promise

The app itself — [Sources](sources/index.md), [Datasets](datasets/index.md),
and [Reports](reports/index.md) — runs entirely in memory, in your own
browser tab. Nothing you upload, build, or analyze is sent to a server,
written to disk, or shared with other users. Close the tab, and it's gone,
unless you deliberately [export your project](project/save-load.md) first.

This isn't a policy — it's an architectural fact. There is no backend
receiving your data by default; the app is a single static HTML file with
no server-side component to send it to.

## Multiple people using it "at once"

There's no shared server or session to worry about here: every person who
opens the app gets their own fully independent copy running in their own
browser tab, with nothing shared between them. Nothing needs to be
provisioned or scaled for concurrent use.

## The two exceptions, and why they don't change this

Both are **opt-in**, configured explicitly in
[`config.json`](getting-started/configuration.md), and both are read-only
or user-confirmed by default:

1. **Update checking** — one read-only GET request to GitHub's public
   releases API on load. No data leaves the browser; it only checks a
   version number.
2. **Bug reporting** — see [Bug reporting](deployment/bug-reporting.md).
   By default, a crash shows the person exactly what would be reported and
   waits for them to decide what happens to it. Fully automatic reporting
   exists as an explicit opt-in (`autoSubmit: true`) for deployments that
   want it, not as a default behavior.

Neither of these ever transmits anything about the data you're actually
working with — datasets, source readings, or report contents never leave
the browser through either path.

## Why no automatic, silent crash-reporting pipeline

This was a deliberate design decision, for two independent reasons — see
the full reasoning in
[GitHub integration → Why the backend relay exists](deployment/github-integration.md#why-the-backend-relay-exists).
Short version: a GitHub write token can't safely live in browser code, and
silently posting crash data to a public tracker would contradict the
"nothing leaves your browser without you knowing" principle everything
else here is built around.
