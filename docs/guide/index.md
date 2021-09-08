# Introduction

This project is intended to make aggregate arrest data in Illinois more accessible to the public. Arrest explorer provides aggregate information about arrest based on the computerized criminal history  (CCH) system maintained by the Illinois State Police, this is often also referred to as Criminal History Record Information (CHRI). Arrest explorer has both a web interface as well as an API.

## What Data is available

Data available via Arrest Explorer are adult arrests where the highest charge (as recorded by the Police) related to the arrest recorded was a class B misdemeanor or higher. This excludes juvenile arrests, as well as arrests for class C misdemeanors and local ordinance violations.

## Data Protection and precision

Many individuals who arrested are innocent and never charged in court, tried, or convicted.  To respect the privacy of the innocent, no personally identifying data is included and it is not possible to query arrest charges alongside demographic information. Moreover, data have been very slightly modified to impede use of the data to re-identify any individual arrestee, specifically: 

1) Statewide totals for arrests and arrestees are exact matches to the CCH extract, which is updated twice a year.
2) Subtotals are accurate within +/- 1 (e.g. arrests by race or arrest charges by county)
3) All numbers under 10 are replaced with substitutes: 1 is substituted for numbers 0-4, 6 is substituted for numbers 5-9.  

These procedures have minimal impact on analysis of the data in ways that would generally be well suited for, such as longitudinal or geographic trends. If however you have need of exact numbers, additional fields, and/or identified data, please contact ICJIA.

## Using Arrest Explorer

For example, here is a plot of total arrests by year:

<iframe title="Plot of Illinois Arrests by Year" width="100%" height="400" frameborder="0" src="https://icjia.illinois.gov/arrestexplorer/?embed"></iframe>

This plot is an embedded version of the **graphical interface**:

> [icjia.illinois.gov/arrestexplorer](https://icjia.illinois.gov/arrestexplorer)

You can download its underlying data from the export menu, or through the **programming interface**:

> [icjia.illinois.gov/arrestexplorer/api](https://icjia.illinois.gov/arrestexplorer/api)

For more about using the Application Programming Interface, see the [API](/api) page.

For more about the original data and how they are aggregated, see the [Data](/data) page.

For more technical details, see the [GitHub repository](https://github.com/ICJIA/arrest_explorer).
