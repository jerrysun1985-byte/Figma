# Design Company Website

This repository is prepared for the Figma Make website:

https://www.figma.com/make/AGB6nv3N9Sra52blSNFMM1/Design-company-website?t=2Xp7ZY5hDbSY019h-1

The current project is a deploy-ready static site. It is ready to connect to Netlify through GitHub and does not require external build dependencies.

## Local Development

```bash
npm install
npm run build
```

## Build

```bash
npm run build
```

The production output is generated in `dist`.

## Netlify

Use these settings when importing this GitHub repository into Netlify:

- Branch: `main`
- Build command: `npm run build`
- Publish directory: `dist`

The same settings are also stored in `netlify.toml`.

## Updating From Figma Make

When the Figma Make source code export is available, replace the current app files with the exported source, then verify:

```bash
npm install
npm run build
```
