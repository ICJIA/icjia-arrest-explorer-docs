---
meta:
  - name: robots
    content: noindex
---

# CHRI

_ICJIA Arrest Explorer_ provides aggregated adult criminal history records information (CHRI) data provided by the Illinois State Police. Read this page to learn more about CHRI data as it relates to _ICJIA Arrest Explorer_.

## Illinois CHRI system

::: tip
For more authoritative and detailed information on CHRI, please refer to [CHRI User’s Manual](https://www.isp.state.il.us/docs/5-336e.pdf) published by the Illinois State Police.
:::

The Criminal Identification Act [[20 ILCS 2630](http://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=350&ChapterID=5)] defines the process of collection and handling of criminal history record information (CHRI). The Criminal Identification Act mandates Illinois State Police to serve as a central repository of criminal history information, to which all other criminal justice agencies report criminal history records.

The following excerpt from CHRI User's Manual offers the scope of criminal history relevant to the Illinois CHRI system:

> "Illinois law defines criminal history as data identifiable to an individual and consisting of descriptions or notations of arrests, detentions, indictments, information, pretrial proceedings, trials, or other formal events in the criminal justice system or descriptions or notations of criminal charges and the nature of any disposition arising there from, including sentencing, court or correctional supervision, rehabilitation and release.

## ICJIA's access to CHRI data

Based on an MOU (Memorandum of Understanding) between the Illinois State Police and ICJIA, ICJIA is allowed access to CHRI data "for research, evaluative purposes, or statistical activities."

The access is granted to allow ICJIA to fulfill its mandate to act as "a central repository and clearing house for federal, state, and local research studies, plans, projects, proposals, and other information relating to all aspects of criminal justice system improvement and to encourage educational programs for citizen support of State and local efforts to make such improvements" [[20 ILCS 3930/7 et seq.](http://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=397&ChapterID=5)].

While ICJIA is authorized to access CHRI data "for its research, evaluative and statistical activity needs," this access is granted with a set of specific requirements. One such requirement most relevant to _ICJIA Arrest Explorer_ is that ICJIA shall not publish statistics derived from CHRI data "when the total of arrests, charging decisions, convictions, or sentences is less than ten on a state, county, or local level." At ICJIA, this particular requirement is internally known as the "less than 10" rule.

::: warning NOTE
Please refer to [the "Preparing _Arrest Explorer_ Data" section on the Data page](./data.md#preparing-arrest-explorer-data) to learn more about how _ICJIA Arrest Explorer_ prepares the data to serve while remaining compliant to the terms of the MOU.

In particular, read [this part on noise injection](./data.md#noise-injection) to see how _ICJIA Arrest Explorer_ copes with the "less than 10" rule.
:::

For all practical purposes, ICJIA R&A staff relies on a local copy of the Illinois State Police's CHRI "Ad Hoc" database. Direct access to the local database is also limited to only a small number of staff members. Also, any research project that involves CHRI data conducted, sponsored, or supported by ICJIA must obtain IRB (institutional review board) approval.

## Updating CHRI data

ICJIA updates its local copy of CHRI data twice a year. Updating CHRI data is a _manual_ process managed by the ICJIA R&A database administrator. It is manual in a sense that the work is not scheduled to run automatically but rather initiated by a human person who executes a set of prepared SQL scripts.

These updates are important for not just adding more recent records to the local copy but also reflecting changes to old records, for instance, due to expungements of certain criminal records. The most notable example of such changes in recent years is the statewide expungement of marijuana convictions.

The first update takes place in the first quarter, generally in late February or early March. The precise date depends on the database administrator's schedule and workload. At this time, the entire CHRI records are updated, all the way back to the first recorded arrest in the CHRI system through arrests occurring on December 31st of the prior year.

The second update takes place in the third quarter, sometime in late August or early September. At this time, only the recent records are updated, i.e. back to arrests in 2000 through arrests on June 30th of the current year. Please note that the meaning of "recent" may change in future.

<FundingStatement />
