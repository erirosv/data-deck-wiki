# Configuration (config.json)

`config.json` is loaded once, at startup, by a single `fetch('config.json')`
call. If it's missing or unreachable (for example, if you opened `index.html`
directly as a local file), the app quietly skips everything in this file —
nothing breaks.

```json
{
  "appName": "Data Deck",
  "version": "1.0.0",
  "updateCheck": {
    "enabled": true,
    "githubRepo": "your-org/data-deck"
  },
  "bugReport": {
    "githubRepo": "your-org/data-deck",
    "apiEndpoint": "http://localhost:3001/api/report-bug",
    "autoSubmit": false
  }
}
```

## `updateCheck`

| Key | Type | Meaning |
|---|---|---|
| `enabled` | boolean | Turn the check on/off entirely |
| `githubRepo` | string | `owner/repo` to check releases against |

On load, if enabled, the app makes **one read-only GET request** to
GitHub's public releases API (`api.github.com/repos/OWNER/REPO/releases/latest`),
compares the tag to `version`, and shows a dismissible banner if a newer
release exists. No token is used or required — this only reads public data.

## `bugReport`

| Key | Type | Meaning |
|---|---|---|
| `githubRepo` | string | Used to build a pre-filled "new issue" link on GitHub |
| `apiEndpoint` | string | URL of your own [bug-report relay](../deployment/github-integration.md), if you're running one |
| `autoSubmit` | boolean | If `true` **and** `apiEndpoint` is set, crash reports are sent automatically with no dialog |

See [GitHub integration](../deployment/github-integration.md) for the full
walkthrough of what each combination of these settings does.

## Editing without rebuilding

In the Docker setup, `config.json` is bind-mounted rather than baked into
the image — edit the file on the host and reload the page, no rebuild or
restart needed.
