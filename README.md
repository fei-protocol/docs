# Tribe DAO Docs

This repo contains [documentation for Tribe DAO projects](https://docs.tribedao.xyz).

Deployed at: https://docs.tribedao.xyz

The docs are built using [Docusaurus 2](https://docusaurus.io/).

### TL;DR

1. Make changes to the `gh-pages` branch (ideally by branching and raising a PR)
2. Commit and push
3. Run `yarn deploy`

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Changes are read from `gh-pages` and the site is rebuilt upon deploy:

```
$ yarn deploy
```

The deploy script will build your local version of the code and push it to the `master` branch.

Github Pages will then serve whatever is in `master`.
