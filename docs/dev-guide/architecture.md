---
meta:
  - name: robots
    content: noindex
---

# Project Architecture

_ICJIA Arrest Explorer_ consists of multiple parts, or components, each built on many popular open-source projects when possible. Together, they provide an integrated platform for distributing aggregated Illinois CHRI data.

::: tip

See [the CHRI page on User Guide](../guide/chri.md) to learn more about the Illinois CHRI data.
:::

## Components

_ICJIA Arrest Explorer_ projects consists of the following components:

- API database
- API server ([GitHub](https://github.com/ICJIA/arrest-explorer-api))
- GUI client ([GitHub](https://github.com/ICJIA/arrest-explorer))
- Documentation ([GitHub](https://github.com/ICJIA/arrest-explorer-docs))

_Figure 1_ below provides a graphical summary of how these components relate to one another.

<div style="text-align:center">
<span class="fig-title">Figure 1. Main components</span>

![Components diagram](/assets/diagram-components.png)

</div>

::: warning NOTE

In _Figure 1_ above,

- the sync icon indicates that data is regenerated periodically;
- the pin icon indicates that data is fetched from the respective source and then cached; and
- third-party client is _not_ part of the _ICJIA Arrest Explorer_ project but is included to illustarte potential use cases other than via GUI app.

:::

### API database

_ICJIA Arrest Explorer_ API database is a Microsoft SQL Server database containing a set of tables to be served by the API server. These tables are prepared by cleaning and aggregating of the raw CHRI data.

The database also include [stored procedures](https://docs.microsoft.com/en-us/sql/relational-databases/stored-procedures/stored-procedures-database-engine) for cleaning and aggregating CHRI data to generate API data tables. These stored procedures are executed periodically (annually) when the CHRI data at ICJIA are updated in order to generate API tables with new data.

::: warning NOTE

If you are an ICJIA R&A Staff member responsible for maintaining the _ICJIA Arrest Explorer_ and needs access to this database, talk to the database administrator to gain read (and write) permission to the API database.
:::

### API server

At the core of the _ICJIA Arrest Explorer_ project is API server to distribute the aggregated CHRI data over HTTP. At build, the API server fetches prepared data tables from the API database, caches the data in memory, and serves it.

API server([Github](https://github.com/ICJIA/arrest-explorer-api)) is powered by the following key technologies:

- [Node.js](https://nodejs.org/) for the server-side runtime for JavaScript;
- [TypeScript](https://www.typescriptlang.org/) for the benefits of static typing; and
- [Express.js](https://expressjs.com/) for a minimal framework to build web server.

### GUI client

_ICJIA Arrest Explorer_ GUI client app contains a project landing page (`/`) as well as the interactive data explorer (`/explore`). At build, the GUI client fetches data from the API server, reshapes the data for its use, and caches the data.

GUI client app([Github](https://github.com/ICJIA/arrest-explorer)) is powered by the following key technologies:

- [Vue.js](https://vuejs.org/) for the JavaScript web UI application framework; and
- [Vuetify.js](https://vuetifyjs.com/) for Material Design UI components.

### Documentation

The current site([GitHub](https://github.com/ICJIA/arrest-explorer-docs)) serves as the documentation for the _ICJIA Arrest Explorer_ project and consists of User Agreement, User Guide and Developer Guide.

The documentation site is powered by [VuePress](https://vuepress.vuejs.org/).

## Deployment

_Figure 2_ below provides a graphical summary of how the components are deployed.

<div style="text-align:center">
<span class="fig-title">Figure 2. Deployment strategy</span>

![Components diagram](/assets/diagram-deployment.png)

</div>

### Updating data

Updating aggregated CHRI data to distribute begins with updating the local CHRI database at ICJIA, which is a regular but manual process managed by the ICJIA R&A Unit database administrator.

Once the CHRI database is updated, the database administrator will run a stored procedure for regenerating aggregated CHRI data tables in the API database.

The API server, on the other hand, is scheduled to restart automatically and regularly by a process manager. This allows the API server to serve the updated data when available since the API server fetches and caches data from the API database at start.

At start, the API server also triggers the build hook for the GUI client app on Netlify. The GUI client then fetches and caches data from the API server as part of the build process. Consequently, the end users are able to explore the updated data using its interactive data explorer.

<FundingStatement />
