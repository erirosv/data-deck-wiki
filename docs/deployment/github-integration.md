# GitHub integration

Two independent features connect to GitHub. Only the second one needs any
setup.

## 1. Update checking (no setup beyond a repo name)

Set `updateCheck.githubRepo` in [`config.json`](../getting-started/configuration.md).
On load, the app makes one **read-only** GET request to GitHub's public
releases API and shows a dismissible banner if a newer version is tagged
than the `version` in your config. No token, no write access — this only
ever reads.

## 2. Bug reporting — three modes

Controlled entirely by `bugReport` in `config.json`, no code changes:

| Mode | Config | Behavior on a crash |
|---|---|---|
| **Manual** (default) | `githubRepo` set, `apiEndpoint` empty | A dialog shows the full report. "Copy report", or "Open as GitHub issue" (opens GitHub's own pre-filled new-issue page — you click submit there). |
| **User-confirmed automatic** | `apiEndpoint` set, `autoSubmit: false` | Same dialog, plus a "Send automatically" button that posts through your backend relay. Still one click. |
| **Fully automatic** | `apiEndpoint` set, `autoSubmit: true` | No dialog. The report is sent through the relay and the issue filed the moment a crash happens — zero clicks. |

### Why the backend relay exists

Creating a GitHub issue requires a token with write access. That token
can never safely live in code that runs in someone's browser — anyone
could read it straight out of dev tools. The relay (`/server`) holds it
server-side instead; the browser only ever talks to your own backend, not
to GitHub directly.

### Setting it up

1. **Create a scoped GitHub token.** Use a
   [fine-grained personal access token](https://github.com/settings/tokens?type=beta),
   scoped to **only** the one repository you want reports filed in, with
   **Issues: Read and write** and nothing else. Avoid a classic token with
   full `repo` scope if you can — this relay never needs more than
   issue-creation rights.

2. **Configure the relay:**
   ```bash
   cp server/.env.example server/.env
   ```
   ```env
   GITHUB_TOKEN=<your token>
   GITHUB_REPO=your-org/data-deck
   ALLOWED_ORIGIN=http://localhost:8080   # your real frontend URL in production
   ```

3. **Point the frontend at it**, in `config.json`:
   ```json
   "bugReport": {
     "githubRepo": "your-org/data-deck",
     "apiEndpoint": "http://localhost:3001/api/report-bug",
     "autoSubmit": false
   }
   ```

4. **Run it:**
   ```bash
   docker compose up -d --build
   ```

### Rate limiting

The relay throttles itself (default 20 issues/hour total, 5/hour per IP —
tune via `MAX_REPORTS_PER_HOUR` / `MAX_REPORTS_PER_HOUR_PER_IP` in
`server/.env`), since it's a public POST endpoint that creates real issues
and is reachable by anyone who knows the URL, not just your frontend.

## Choosing `autoSubmit`

`false` (the default) keeps a human in the loop before anything is ever
filed — worth keeping if reports might contain fragments of what someone
was doing at the time, especially if the repo is public. `true` is there
for internal/trusted deployments where zero-click reporting matters more
than a review step. Either way it's a deliberate, explicit choice you
make in config — not a default you have to work around.

See [Bug reporting](bug-reporting.md) for what the report itself contains.
