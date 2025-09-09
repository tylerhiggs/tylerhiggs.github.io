# [Tyler Higgs' Portfolio](https://tylerhiggs.github.io/)

## Setup

Make sure to install dependencies:

```bash
# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# bun
bun run dev
```

## Production

Build the application for production using SSG:

```bash
# bun
bun run generate
```

Locally preview production build:

```bash
# bun
bun run preview
```

## Deploy to GitHub Pages

This project is deployed to GitHub Pages at [https://tylerhiggs.github.io/](https://tylerhiggs.github.io/) as a static, server-side generated site using the workflow defined in [.github/workflows/deploy.yml](.github/workflows/deploy.yml). The workflow is triggered on pushes and pull requests to the `main` branch.
