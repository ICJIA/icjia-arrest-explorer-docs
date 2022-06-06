---
footer: © 2021 Illinois Criminal Justice Information Authority

title: Overview
meta:
  - name: robots
    content: noindex
---

# Introduction

This project is intended to make aggregate arrest data in Illinois more accessible to the public.

This data are Criminal History Record Information (CHRI). While CHRI records are collected primarily for creating individuals' criminal history transcripts and are confidential per state law [[20 ILCS 2630/7](https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=350&ChapterID=5)], in de-identified aggregate form they are a unique statewide source of criminal justice data, including demographic and offense-related variables.

## What Data is Available

Data available via Arrest Explorer are adult arrests where the highest charge related to the arrest recorded was a class B misdemeanor or higher. This excludes juvenile arrests, arrests with no demographic information, as well as arrests for class C misdemeanors and local ordinance violations. Arrest Charges provides a view of arrests categorized by the most severe offense charged for the arrest. All data come from the Illinois State Police CHRI database, which is also referred to as the Computer Criminal History (CCH) database.

## Data Privacy and Precision

_Arrest Explorer_ data are modified slightly to protect confidentiality.

Many individuals who arrested are innocent and never charged in court, tried, or convicted. To respect the privacy of the innocent, no personally identifying data is included and it is not possible to query arrest charges alongside demographic information.

Specific modifications have been made to data to impede its use to re-identify any individual arrestee, specifically:

1.  Statewide totals for arrests and arrestees are exact matches to the CCH database at the time data was retrieved, which occurs twice a year.
2.  Subtotals are accurate within +/- 1 (e.g. arrests by race or arrest charges by county)
3.  All numbers under 10 are replaced with substitutes: 1 is substituted for numbers 0-4, 6 is substituted for numbers 5-9.

These procedures have minimal impact on analysis of the data in ways that would the data generally be well suited for, such as longitudinal or geographic trends. If however you have need of exact numbers, additional fields, and/or identified data, please contact ICJIA.

## Highlights in the Guide

- Overview: Current page.
- [Explorer](/arrestexplorer/docs/explorer): How to use the Arrest Explorer's interactive data explorer.
- [User Agreement](/arrestexplorer/docs/user_agreement): The full Data User Agreement.
- [CHRI](/arrestexplorer/docs/technical/chri): Details on the _Arrest Explorer_'s data source.
- [Data](/arrestexplorer/docs/technical/data): Further explanation for the data provided by _Arrest Explorer_.
- [Export](/arrestexplorer/docs/technical/export-data): How to export data for external use.
- [API server](/arrestexplorer/docs/technical/api): How to get the _Arrest Explorer_ data directly from the API server.

## Using Arrest Explorer

Arrest Explorer is intended to be approachable, easy to use, and fast. It creates modern looking graphs rapidly, that can be used interactively and easily exported for further analysis or embedded in other websites. As an example, here is a plot of Illinois Arrests by Year:

<iframe title="Plot of Illinois Arrests by Year" width="100%" height="400" frameborder="0" src="https://icjia.illinois.gov/arrestexplorer/?embed"></iframe>

This plot is an embedded version of the **graphical interface**, if you have not already we'd encourage opening a window from the following link:

> <a href="https://icjia.illinois.gov/arrestexplorer" target="\_blank">icjia.illinois.gov/arrestexplorer</a>

::: tip
For more guidance, read the full user guide: [Using Arrest Explorer](/arrestexplorer/docs/explorer)
:::

You can download its underlying data from the export menu, or through the **programming interface**. For example here is a link to the raw data for the chart above:

> [icjia.illinois.gov/arrestexplorer/api](https://icjia.illinois.gov/arrestexplorer/api)

For more about using the data, how it is retrieved and aggregated, about Application Programming Interface, or how _Arrest Explorer_ works, see the [Technical](/arrestexplorer/docs/technical/) pages.

For more technical details, see the [GitHub repository](https://github.com/ICJIA/arrest_explorer).

### User agreement

By using data provided by _Arrest Explorer_, you are confirming that you accept the _Arrest Explorer_ [Data User Agreement](/arrestexplorer/docs/User_Agreement).

<FundingStatement />
