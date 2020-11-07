---
title: Overview
meta:
  - name: robots
    content: noindex
---

# Overview

Welcome to The Illinois Criminal Justice Information Authority (ICJIA) _Arrest Explorer_ Developer Guide!

This guide is meant for developers and other curious citizens who are interested in technical details of the _Arrest Explorer_ project.

## Contents

- Overview: Current page.
- [Project Architecture](./architecture.md): Explanation for the _Arrest Explorer_ project architecture.

## Running locally

You can run its individual elements locally on your workstation. In order to replicate the full _Arrest Explorer_ experience, however, you will have to setup proxying for frontend apps.

### GUI client

::: warning NOTE

GUI client app has `pre-` npm hook scripts for `serve` and `build` to fetch and cache data from the project API server. Since `serve` and `build` scripts rely on `vue-cli-service`, you can run the `npx vue-cli-service serve` or `build` to ignore the `pre-` step.
:::

```sh
# clone source repo
git clone https://github.com/ICJIA/arrest-explorer.git

# change directory
cd arrest-explorer

# install node modules
npm install

# serve for development
npm run serve

# build for production
npm run build
```

### API server

::: warning NOTE

The production server fetches source data from an internal MS SQL Server database at startup. For local development, you can use the SQLite database file in the project repository by changing the `storage` option in `/src/config.ts`

```typescript
type config = {
  storage: "memory" | "mssql" | "sqlite";
};

export default {
  storage: "sqlite", // change from `mssql`
} as config;
```

:::

```sh
# clone source repo
git clone https://github.com/ICJIA/arrest-explorer-api.git

# change directory
cd arrest-explorer-api

# install node modules
npm install

# serve for development
npm run serve

# build for production
npm run build

# start the production server
npm run start
```

### Documentation

```sh
# clone source repo
git clone https://github.com/ICJIA/arrest-explorer-docs.git

# change directory
cd arrest-explorer-docs

# install node modules
npm install

# serve for writing
npm run docs:dev

# build to static files
npm run docs:build
```

<FundingStatement />
