# Docker

## App only (no automatic bug reporting)

```bash
docker compose up -d --build data-deck
```

Open `http://localhost:8080`.

## App + bug-report relay

```bash
cp server/.env.example server/.env
# edit server/.env with your GitHub token and repo — see GitHub integration
docker compose up -d --build
```

This starts two containers:

- **`data-deck`** — nginx serving the static app on port `8080`
- **`data-deck-api`** — the optional bug-report relay on port `3001`,
  only needed if you want automatic crash reporting to GitHub

If you don't want the relay at all, you can remove the `data-deck-api`
service from `docker-compose.yml` and leave `bugReport.apiEndpoint` blank
in `config.json` — everything else works the same.

## What's in the image

```dockerfile
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
COPY config.json /usr/share/nginx/html/config.json
COPY nginx.conf /etc/nginx/conf.d/default.conf
```

`config.json` is bind-mounted in `docker-compose.yml` rather than baked
into the image, so you can edit the version number or update-check/bug-report
settings without rebuilding:

```yaml
volumes:
  - ./config.json:/usr/share/nginx/html/config.json:ro
```

The nginx config also disables caching specifically on `config.json` so
edits take effect on the next page load, not the next deploy:

```nginx
location = /config.json {
    add_header Cache-Control "no-store, no-cache, must-revalidate";
    expires -1;
}
```

## Changing the port

Edit the `ports:` line for the `data-deck` service in `docker-compose.yml`:

```yaml
ports:
  - "YOUR_PORT:80"
```
