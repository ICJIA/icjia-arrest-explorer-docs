---
footer: © 2021 Illinois Criminal Justice Information Authority

title: Overview
meta:
  - name: robots
    content: noindex
---


# Introduction

This project is intended to make aggregate arrest data in Illinois more accessible to the public. While CHRI records are collected primarily for creating individuals' criminal history transcripts and are confidential per state law [[20 ILCS 2630/7](https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=350&ChapterID=5)], in de-identified aggregate form they are a unique statewide source of criminal justice data, including demographic and offense-related variables.
Arrest explorer provides these aggregate data about arrests based on the computerized criminal history  (CCH) system maintained by the Illinois State Police, this is often also referred to as Criminal History Record Information (CHRI).

## What Data is Available

Data available via Arrest Explorer are adult arrests where the highest charge (as recorded by the Police) related to the arrest recorded was a class B misdemeanor or higher. This excludes juvenile arrests, as well as arrests for class C misdemeanors and local ordinance violations.

## Data Protection and Precision

Many individuals who arrested are innocent and never charged in court, tried, or convicted.  To respect the privacy of the innocent, no personally identifying data is included and it is not possible to query arrest charges alongside demographic information. Moreover, data have been very slightly modified to impede use of the data to re-identify any individual arrestee, specifically:

1) Statewide totals for arrests and arrestees are exact matches to the CCH extract, which is updated twice a year.
2) Subtotals are accurate within +/- 1 (e.g. arrests by race or arrest charges by county)
3) All numbers under 10 are replaced with substitutes: 1 is substituted for numbers 0-4, 6 is substituted for numbers 5-9.  

These procedures have minimal impact on analysis of the data in ways that would generally be well suited for, such as longitudinal or geographic trends. If however you have need of exact numbers, additional fields, and/or identified data, please contact ICJIA.

## Contents

You will find in this Guide:

- Overview: Current page.
- [CHRI](./chri.md): Details on the _Arrest Explorer_'s data source.
- [Data](./data.md): Explanation for the data provided by _Arrest Explorer_.
- [Explorer](./explorer.md): How to use the Arrest Explorer's interactive data explorer.
- [API server](./api.md): How to get the _Arrest Explorer_ data directly from the API server.
- [FAQ](./faq.md): Frequently asked questions and answers.


## Using Arrest Explorer

For example, here is a plot of total arrests by year:

<iframe title="Plot of Illinois Arrests by Year" width="100%" height="400" frameborder="0" src="https://icjia.illinois.gov/arrestexplorer/?embed"></iframe>

This plot is an embedded version of the **graphical interface**:

> [icjia.illinois.gov/arrestexplorer](https://icjia.illinois.gov/arrestexplorer)

You can download its underlying data from the export menu, or through the **programming interface**:

> [icjia.illinois.gov/arrestexplorer/api](https://icjia.illinois.gov/arrestexplorer/api)

For more about using the Application Programming Interface, see the [API](/guide/api) page.

For more about the original data and how they are aggregated, see the [Data](/data) page.

For more technical details, see the [GitHub repository](https://github.com/ICJIA/arrest_explorer).




## Introduction

_Arrest Explorer_ is the latest iteration of the ICJIA Research & Analysis Unit's ongoing effort to bring criminal justice data to the public. It seeks to provide aggregated arrest information from the Illinois State Police's Criminal History Records Information (CHRI) system.

This project is born out of a desire to provide the public with unique insights drawn from the CHRI records. While CHRI records are collected primarily for creating individuals' criminal history transcripts and are confidential per state law [[20 ILCS 2630/7](https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=350&ChapterID=5)], in de-identified aggregate form they are a unique statewide source of criminal justice data, including demographic and offense-related variables.

### How to access _Arrest Explorer_ data

There are two main ways to access data provided by the _Arrest Explorer_:

1. Using the [interactive data explorer](./explorer) on the [_Arrest Explorer_ website](https://icjia-arrest-explorer.netlify.app).
2. Making HTTP request to the [_Arrest Explorer_ API server](./api).

Refer to the corresponding User Guide page for more details on each approach.

### User agreement

By using data provided by _Arrest Explorer_, you are confirming that you accept the _Arrest Explorer_ [User Agreement](../agreement/).

<FundingStatement />
