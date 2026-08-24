# Docker & bare metal

See [Getting started → Bare metal](../getting-started/bare-metal.md) and
[Getting started → Docker](../getting-started/docker.md) for setup
instructions.

## Summary

Data Deck's app is a static file — the server's only job is to hand it
out. There's an optional second piece, the **bug-report relay**, only
needed if you want automatic crash reporting; see
[GitHub integration](github-integration.md).

```
deploy/
├── index.html          # the app itself
├── config.json          # runtime config — update check, bug-report settings
├── Dockerfile            # nginx image serving index.html + config.json
├── nginx.conf             # disables caching on config.json specifically
├── docker-compose.yml      # orchestrates the app + optional relay
├── README.md
└── server/                  # optional — only for automatic bug reporting
    ├── index.js
    ├── package.json
    ├── Dockerfile
    └── .env.example
```

## Minimal deployment (no backend)

```bash
docker compose up -d --build data-deck
```

This alone gives you the app plus [update checking](../getting-started/configuration.md)
(a read-only check against GitHub's public API, no token needed). No bug
reporting.

## Full deployment (with automatic bug reporting)

See [GitHub integration](github-integration.md) for the complete
walkthrough, including creating a scoped GitHub token.
