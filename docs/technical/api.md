---
meta:
  - name: robots
    content: noindex
---

# API server

The Illinois Criminal Justice Information Authority (ICJIA) _Arrest Explore_ disseminates the aggregated data via a public API server. An HTTP request can be sent to the server to get _Arrest Explorer_ data.

## Data tables

::: tip

See the [CHRI page](./chri.md) for more about the original source of data, and the [Data page](./data.md) for more about the provided tables.
:::

For each aggregate unit (arrests, arrestees, and arrest charges), three groups of tables are available: annual total, aggregates on one additional grouping variable, and aggregates on two additional grouping variables. All counts are annual counts with `arrestyear` as a default grouping variable.

Each data table consists of the following columns: `arrestyear`, grouping variables, and `value`, in that order. For instance, a table for annual total has `arrestyear` and `value` columns, whereas a table with `agegroup` as a grouping variable has `arrestyear`, `agegroup`, and `value` columns.

Please note that the data tables use encoded values for grouping variables. To get decoded values for the grouping variables, use the "reference" tables at `/ref/[variable]`. See the [reference tables section](#reference-tables) for more.

### Arrest tables

Arrest tables are generated using four grouping variables in addition to `arrestyear`: `agegroup`, `county`, `gender`, and `race`.

#### Annual total

- `/arrests`

#### One additional grouping variable

- `/arrests/by-agegroup`
- `/arrests/by-county`
- `/arrests/by-gender`
- `/arrests/by-race`

#### Two additional grouping variables

- `/arrests/by-agegroup-and-county`
- `/arrests/by-agegroup-and-gender`
- `/arrests/by-agegroup-and-race`
- `/arrests/by-county-and-gender`
- `/arrests/by-county-and-race`
- `/arrests/by-gender-and-race`

### Arrestee tables

Arrestee tables are generated using four grouping variables in addition to `arrestyear`: `agegroup`, `county`, `gender`, and `race`.

#### Annual total

- `/arrestees`

#### One additional grouping variable

- `/arrestees/by-agegroup`
- `/arrestees/by-county`
- `/arrestees/by-gender`
- `/arrestees/by-race`

#### Two additional grouping variables

- `/arrestees/by-agegroup-and-county`
- `/arrestees/by-agegroup-and-gender`
- `/arrestees/by-agegroup-and-race`
- `/arrestees/by-county-and-gender`
- `/arrestees/by-county-and-race`
- `/arrestees/by-gender-and-race`

### Arrest charge tables

Arrest charge tables are generated using four grouping variables in addition to `arrestyear`: `county`, `crimetype`, `offensecategory`, and `offenseclass`.

#### Annual total

- `/arrestcharges`

#### One additional grouping variable

- `/arrestcharges/by-county`
- `/arrestcharges/by-crimetype`
- `/arrestcharges/by-offensecategory`
- `/arrestcharges/by-offenseclass`

#### Two additional grouping variables

Note that `crimetype` and `offensecategory` are not used in the same table since they provide the same information at different levels (offense types are subcategories of crime types).

- `/arrestcharges/by-county-and-crimetype`
- `/arrestcharges/by-county-and-offensecategory`
- `/arrestcharges/by-county-and-offenseclass`
- `/arrestcharges/by-crimetype-and-offenseclass`
- `/arrestcharges/by-offensecategory-and-offenseclass`

## Reference tables

::: tip
See the [Grouping variables section](./data.md#grouping-variables) of the Data page for more details.
:::

Reference tables provide decoded values for the encoded grouping variables values in data tables. Each reference table has two columns, `id` and `value`, where `id` is the encoded value found in data tables and `value` is the corresponding decoded value.

For example, the reference table for the `agegroup` variable looks like this:

| id  | value |
| --- | ----- |
| 0   | 18-24 |
| 1   | 25-44 |
| 2   | 45-64 |
| 3   | 65+   |

### Demographic characteristics

- `/ref/agegroup`
- `/ref/county`
- `/ref/gender`
- `/ref/race`

### Offense characteristics

- `/ref/crimetype`
- `/ref/offensecategory`
- `/ref/offenseclass`

## Query parameters

The _Arrest Explorer_ API provides a small set of query parameters to customize the returned table. These query parameters are not available for reference tables at `/ref/[variable]`.

### Filter by arrest year

There are two query parameters, `maxYear` and `minYear`, to filter by the `arrestyear` column. For example:

- `?maxYear=2010` filters out all rows with `arrestyear` higher than `2010` value.
- `?minYear=2010` filters out all rows with `arrestyear` lower than `2010` value.

### Sort by a column

The `sortBy` parameter can sort the data by one or more variables, each in ascending (default) or descending order. For example:

- `?sortBy=arrestyear` sorts the table by `arrestyear` in ascending order. This is equivalent to `?sortBy=arrestyear:asc`.
- `?sortBy=arrestyear:desc` sorts the table by `arrestyear` in descending order.

`sortBy` can take more than one column, with multiple columns separated by commas.

### Format

The `csv` parameter specifies the format of the returned table, as either Comma Separated Values (CSV) or JavaScript Object Notation (JSON). For example:

- `?csv=false` returns data in JSON format. This is the default behavior.
- `?csv=true` returns data in CSV format.

## Examples

The following are some example queries you can send to fetch data with query parameters:

#### Arrests by agegroup and county, for arrests in 2015 and before, sorted by county

- URL path: `/arrests/by-agegroup-and-county?maxYear=2015&sortBy=county`
- JSON response:

```json
[
  { "arrestyear": 2009, "agegroup": 0, "county": 1, "value": 1234 },
  { "arrestyear": 2009, "agegroup": 0, "county": 2, "value": 1234 },
  { "arrestyear": 2009, "agegroup": 0, "county": 3, "value": 1234 },
  { "arrestyear": 2009, "agegroup": 0, "county": 4, "value": 1234 },
  { "arrestyear": 2009, "agegroup": 0, "county": 5, "value": 1234 },
  { "arrestyear": 2009, "agegroup": 0, "county": 6, "value": 1234 },
  ...,
  { "arrestyear": 2015, "agegroup": 3, "county": 101, "value": 1234 },
  { "arrestyear": 2015, "agegroup": 3, "county": 102, "value": 1234 }
]
```

- Formatted:

| arrestyear | agegroup | county | value |
| ---------- | -------- | ------ | ----- |
| 2009       | 0        | 1      | 1234  |
| 2009       | 0        | 2      | 1234  |
| 2009       | 0        | 3      | 1234  |
| 2009       | 0        | 4      | 1234  |
| 2009       | 0        | 5      | 1234  |
| 2009       | 0        | 6      | 1234  |
| ...        | ...      | ...    | ...   |
| 2015       | 3        | 101    | 1234  |
| 2015       | 3        | 102    | 1234  |

#### Arrestees by agegroup and gender, sorted by gender and agegroup both in an descending order

- URL path: `/arrestees/by-agegroup-and-gender?sortBy=gender:desc,agegroup`
- JSON response:

```json
[
  { "arrestyear": 2009, "agegroup": 3, "gender": 0, "value": 1234 },
  { "arrestyear": 2009, "agegroup": 2, "gender": 0, "value": 1234 },
  { "arrestyear": 2009, "agegroup": 1, "gender": 0, "value": 1234 },
  { "arrestyear": 2009, "agegroup": 0, "gender": 0, "value": 1234 },
  { "arrestyear": 2009, "agegroup": 3, "gender": 1, "value": 1234 },
  { "arrestyear": 2009, "agegroup": 2, "gender": 1, "value": 1234 },
  ...,
  { "arrestyear": 2019, "agegroup": 1, "gender": 1, "value": 1234 },
  { "arrestyear": 2019, "agegroup": 0, "gender": 1, "value": 1234 }
]
```

- Formatted:

| arrestyear | agegroup | gender | value |
| ---------- | -------- | ------ | ----- |
| 2009       | 3        | 0      | 1234  |
| 2009       | 2        | 0      | 1234  |
| 2009       | 1        | 0      | 1234  |
| 2009       | 0        | 0      | 1234  |
| 2009       | 3        | 1      | 1234  |
| 2009       | 2        | 1      | 1234  |
| ...        | ...      | ...    | ...   |
| 2019       | 1        | 1      | 1234  |
| 2019       | 0        | 1      | 1234  |

#### Arrest charges by offense class, for arrests in 2015 and after, in CSV format

- URL path: `/arrestcharges/by-offenseclass?minYear=2015&csv=true`
- Response in raw (CSV):

```csv
arrestyear,offenseclass,value
2015,0,1234
2015,1,1234
2015,2,1234
2015,3,1234
2015,4,1234
2015,5,1234
...,...,...
2019,7,1234
2019,8,1234
```

- Formatted:

| arrestyear | offenseclass | value |
| ---------- | ------------ | ----- |
| 2015       | 0            | 1234  |
| 2015       | 1            | 1234  |
| 2015       | 2            | 1234  |
| 2015       | 3            | 1234  |
| 2015       | 4            | 1234  |
| 2015       | 5            | 1234  |
| ...        | ...          | ...   |
| 2019       | 7            | 1234  |
| 2019       | 8            | 1234  |

<FundingStatement />
