# Data

## Original Data

The Illinois State Police maintains a database of individually identifiable criminal history record information (CHRI; pronounced "cry"). The Illinois Criminal Justice Information Authority (ICJIA) _Arrest Explorer_ provides an aggregated version of this database. Read this page to learn more about CHRI data as it relates to _Arrest Explorer_.

### Illinois CHRI system

::: tip
For more authoritative and detailed information on CHRI, please refer to [CHRI User's Manual](https://www.isp.state.il.us/docs/5-336e.pdf) published by the Illinois State Police.
:::

The Criminal Identification Act [[20 ILCS 2630](https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=350&ChapterID=5)] defines the process of collection and handling of criminal history record information. The Criminal Identification Act mandates the Illinois State Police serve as a central repository of criminal history information, to which all other criminal justice agencies report their interactions with offenders.

The following excerpt from [CHRI User's Manual](https://www.isp.state.il.us/docs/5-336e.pdf) offers the scope of criminal history relevant to the Illinois CHRI system:

> "Illinois law defines criminal history as data identifiable to an individual and consisting of descriptions or notations of arrests, detentions, indictments, information, pretrial proceedings, trials, or other formal events in the criminal justice system or descriptions or notations of criminal charges and the nature of any disposition arising there from, including sentencing, court or correctional supervision, rehabilitation and release." (Ch. 1, p. 1)

### ICJIA's access to CHRI data

Based on a Memorandum of Understanding between the Illinois State Police and ICJIA, ICJIA is allowed access to CHRI data "for research, evaluative purposes, or statistical activities."

The access is granted to allow ICJIA to fulfill its mandate to act as "a central repository and clearing house for federal, state, and local research studies, plans, projects, proposals, and other information relating to all aspects of criminal justice system improvement and to encourage educational programs for citizen support of State and local efforts to make such improvements" [[20 ILCS 3930/7 et seq.](https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=397&ChapterID=5)].

While ICJIA is authorized to access CHRI data "for its research, evaluative and statistical activity needs," this access is granted with a set of specific requirements. One such requirement most relevant to _Arrest Explorer_ is that ICJIA shall not publish statistics derived from CHRI data "when the total of arrests, charging decisions, convictions, or sentences is less than ten on a state, county, or local level." At ICJIA, this particular requirement is internally known as the "less than 10" rule.

::: warning NOTE
Please refer to the [Aggregated Data section](#aggregated-data) of the Data page to learn more about how _Arrest Explorer_ prepares the data to serve while remaining compliant to the terms of the Memorandum of Understanding.

In particular, read the [Noise injection section](#noise-injection) of the Data page to see how _Arrest Explorer_ copes with the "less than 10" rule.
:::

For all practical purposes, ICJIA Research & Analysis staff rely on a local copy of the Illinois State Police's CHRI ad hoc database. Direct access to the local database is also limited to only a small number of staff members. Any research project that involves CHRI data conducted, sponsored, or supported by ICJIA must obtain institutional review board approval.

### Updating CHRI data

ICJIA updates its local copy of CHRI data twice a year with a set of SQL scripts manually executed by the ICJIA Research & Analysis database administrator.

These updates add, revise, and sometimes remove (notably as part of the statewide expungement of marijuana convictions) records.

The first update takes place in the first quarter, generally in late February or early March. The precise date depends on the database administrator's schedule and workload. At this time, all CHRI records are updated, from the first recorded arrest in the CHRI system through arrests occurring on December 31st of the prior year.

The second update takes place in the third quarter, sometime in late August or early September. At this time, only recent (from the year 2000 through June 30th of the current year) records are updated. Please note that the meaning of "recent" may change.

## Aggregated Data

_Arrest Explorer_ **filters** the raw CHRI data, and **aggregates** them to avoid sharing information that can be associated with individuals.

::: warning NOTE
The process described below is based on the domain expertise of the ICJIA Research & Analysis staff, and seeks to provide the most relevant information on arrests, but no form of data processing and aggregation is perfect. Recognizing this, we try to fully and accurately report our processes.
:::

### Filtering

The raw CHRI data may include records with faulty or missing information introduced by human or system errors, just as any other real-world measurements. While these errors may not be significant to the original purposes of the CHRI system, _Arrest Explorer_ recognizes the likelihood of their presence and implements a filtering mechanism to avoid or correct such errors when possible.

The criteria for filtered arrest records to be used are as follows:

1. Arrest charges to be reported as specified by the Criminal Identification Act [[20 ILCS 2630/5 et seq.](https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=350&ChapterID=5)] only.
2. New arrests only (remove records for bond forfeiture or past arrests, etc.).
3. Arrests in 2009 and later only.
4. Persons arrested of age between 18 and 99 only.
5. Persons arrested with known gender and race values only (remove records with the "unknown" value for gender or race).

### Aggregating

::: tip
Refer to the [Variables section](/api/variables.html) of the API page to view the complete list of _Arrest Explorer_ data tables.
:::

Using the filtered CHRI data, _Arrest Explorer_ generates a number of aggregate data tables. All aggregates are annual counts and each table is based on a combination of a unit and a set of grouping variables to aggregate the filtered CHRI records. In addition, the aggregation step uses a simple noise injection method in order to prevent extracting information on a specific arrest from the aggregated data.

### Noise injection

_Arrest Explorer_ uses the following noise injection algorithm to protect individuals' criminal records from data mining:

1. If the aggregated count is less than 10, the count is rounded.
2. If the count is 10 or higher, it has a random chance of noise injection.
3. If yes to the noise injection, 1 is added to or subtracted from the count by a random chance.
4. If no to the noise injection, the count remains the same.

::: warning NOTE
For more details on the "less than 10" part of the noise injection algorithm, please refer to the [ICJIA's access to CHRI data section](#icjia-s-access-to-chri-data) of the CHRI page.
:::

This noise injection method is applied to all aggregated data tables _except for_ the annual total for each aggregate unit (arrests, arrestees, and arrest charges).

While the injected noise may change individual aggregate counts in most data tables, the size of the noise is kept minimal to preserve the overall distribution of data. The result is thus in line with the goal of the _Arrest Explorer_, which is to provide the public with insights into criminal arrest trends and associations.
