# KompaktOS documentation

The documentation site for KompaktOS, built with [Docusaurus](https://docusaurus.io).
Live at <https://kompaktos.gez.im>.

## Run it

Everything runs in Docker, so you do not need Node on your machine.

```
docker compose up
```

Then open <http://localhost:3000>. Edits appear without a restart.

## Build the static site

```
docker compose --profile tools run --rm build
```

The output lands in `build/`. To check it as it will be served:

```
docker compose --profile tools up serve
```

and open <http://localhost:3001>.

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages, through
`.github/workflows/deploy.yml`. The custom domain is set in `static/CNAME`.

## Layout

```
docs/
  intro.mdx          first page
  prepare/           backup and unlocking
  install/           installing, updating, going back
  features/          what works and the Kompakt features
  develop/           the Extras section
src/pages/           the Support page
sidebars.ts          the sidebar; every page must be listed here
docusaurus.config.ts site settings, header and footer
```
