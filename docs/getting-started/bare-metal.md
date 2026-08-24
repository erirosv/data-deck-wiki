# Bare metal

Data Deck's app is a static file, so any web server that can serve static
files works — there's nothing Data-Deck-specific about hosting it.

```bash
# Python (built in, zero install)
python3 -m http.server 8080

# Node
npx serve . -l 8080

# nginx / Apache
# point the document root at the folder containing index.html
```

Then open `http://localhost:8080`.

## Why serve it over HTTP instead of just opening the file?

Opening `index.html` directly (`file://...`) works for everything except
one feature: the [update check](configuration.md) and any
[GitHub bug-reporting](../deployment/github-integration.md) integration
need `config.json` to be fetchable over HTTP. If it's missing or
unreachable, the app silently skips that step — nothing breaks, you just
don't get the update banner.

## Reverse proxy

If you're putting this behind nginx, Apache, Caddy, or similar in front of
a domain, the only two things worth doing are:

1. Don't cache `config.json` — see the [Docker nginx config](docker.md) for
   an example rule.
2. If you're also running the [bug-report relay](../deployment/github-integration.md),
   proxy its port too and update `bugReport.apiEndpoint` in `config.json`
   to the public URL.
