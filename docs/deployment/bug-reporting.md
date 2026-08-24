# Bug reporting

## What triggers it

A global error handler catches any uncaught JavaScript error or unhandled
promise rejection anywhere in the app — so a bug never just leaves the UI
silently frozen with no feedback.

## What a report contains

```
**Error:** <message>

**When:** <ISO timestamp>

**Page:** <URL>

**Browser:** <user agent string>

**Stack trace:**
```
<stack trace>
```

**What were you doing when this happened?**
_(add details here before submitting)_
```

Nothing about the person's actual data (dataset contents, source
readings) is included — just the error message, stack trace, and basic
environment info. In manual and user-confirmed modes, the person sees this
exact text before anything happens to it and can edit it freely (e.g. to
fill in that last section) before sending.

## Where it can go

- **Copy report** — always available, no configuration needed
- **Open as GitHub issue** — opens GitHub's own new-issue page, pre-filled,
  in a new tab; requires `bugReport.githubRepo` in
  [config.json](../getting-started/configuration.md)
- **Send automatically** — posts through your own
  [backend relay](github-integration.md); requires `bugReport.apiEndpoint`

## Rate limiting is toast-based, not silent-drop

If the same error fires repeatedly in a loop, the toast notification
itself is throttled (no more than one every few seconds) so it can't spam
the screen — but every distinct error still gets logged to the browser
console for debugging.
