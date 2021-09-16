---
title: Developing Arrest Explorer
meta:
  - name: robots
    content: noindex
---

# Developing Arrest Explorer

Welcome to The Illinois Criminal Justice Information Authority (ICJIA) _Arrest Explorer_ Developer Guide!

This guide is meant for developers and other curious citizens who are interested in technical details of the _Arrest Explorer_ project.

## Running locally

It is possible to install a copy of _Arrest Explorer_ locally and to modify it. This is useful if you are interested in learning how to build a similar application. Please do note that releasing copies of Arrest Explorer is not permitted by the [User Agreement](/user_agreement), though using the code with other data and without the ICJIA logo is.

## GUI and API

::: warning NOTE
_Arrest Explorer_ uses Node, Github, Vue, and VuePress. These brief directions assume you have git and node installed.

:::

To install and run arrest explorer locally follow these steps.

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

### Documentation

This documentation site is also available as an example.

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
