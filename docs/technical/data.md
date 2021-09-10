---
meta:
  - name: robots
    content: noindex
---

# Data

The Illinois Criminal Justice Information Authority (ICJIA) _Arrest Explorer_ provides aggregated criminal history record information (CHRI), which can be used to observe trends and associations in arrests. Read this page to learn more about how _Arrest Explorer_ prepares CHRI data as well as various aspects of the final aggregated results.

## Preparing _Arrest Explorer_ data

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
Refer to the [Data tables section](./api.md#data-tables) of the API page to view the complete list of _Arrest Explorer_ data tables.
:::

Using the filtered CHRI data, _Arrest Explorer_ generates a number of aggregate data tables. All aggregates are annual counts and each table is based on a combination of a unit and a set of [grouping variables](#grouping-variables) to aggregate the filtered CHRI records. In addition, the aggregation step uses a simple noise injection method in order to prevent extracting information on a specific arrest from the aggregated data.

#### Noise injection

_Arrest Explorer_ uses the following noise injection algorithm to protect individuals' criminal records from data mining:

1. If the aggregated count is less than 10, the count is rounded.
2. If the count is 10 or higher, it has a random chance of noise injection.
3. If yes to the noise injection, 1 is added to or subtracted from the count by a random chance.
4. If no to the noise injection, the count remains the same.

::: warning NOTE
For more details on the "less than 10" part of the noise injection algorithm, please refer to the [ICJIA's access to CHRI data section](./chri.md#icjia-s-access-to-chri-data) of the CHRI page.
:::

See _Figure 1_ for a flowchart of the noise injection algorithm.

<div style="text-align:center">
<span class="fig-title">Figure 1. Noise injection flowchart</span>

![Noise injection flowchart diagram](/assets/diagram-noise-flowchart.png)

</div>

This noise injection method is applied to all aggregated data tables _except for_ the annual total for each aggregate unit (arrests, arrestees, and arrest charges).

While the injected noise may change individual aggregate counts in most data tables, the size of the noise is kept minimal to preserve the overall distribution of data. The result is thus in line with the goal of the _Arrest Explorer_, which is to provide the public with insights into criminal arrest trends and associations.

## Aggregate units

In order to offer more comprehensive insights into the criminal arrest trends in Illinois, _Arrest Explorer_ aggregates the filtered CHRI data using three units of analysis:

- **Arrest**: Each count in arrest tables corresponds to a unique arrest record as defined by the Document Control Number (DCN) assigned to the arrest.
- **Arrestee** (person arrested): Each count in arrestee tables corresponds to a unique combination of name and date of birth.
- **Arrest charge**: Each count in arrest charge tables corresponds to each offense charge associated with a given arrest.

## Grouping variables

_Arrest Explorer_ uses a set of grouping variables and their combinations to generate aggregates that offer more context information. Except for year as the basic unit for all aggregate counts, these grouping variables can be divided into two categories: _demographic_ and _offense_ characteristics.

Please note that, to avoid losing too much information from less than 10 counts, _Arrest Explorer_ uses coarsened variables and limits the maximum number of grouping variables used for each table to two.

### Demographic characteristics

#### Age group

The age of person arrested is binned into the following four age groups:

- 17 to 24
- 25 to 44
- 45 to 64
- 65 and older

#### County

There are 102 counties in the State of Illinois. You can find a complete list of counties in Illinois on this [Wikipedia page](https://en.wikipedia.org/wiki/List_of_counties_in_Illinois).

#### Gender

For the purpose of _Arrest Explorer_, there are only two gender values: Female and Male. Please note that all records with "unknown" gender value are filtered out, as described in the [Filtering section](#filtering).

#### Race

For the purpose of _Arrest Explorer_, there are only three race values: Black, White, and Other. Other includes all race values in the CHRI system other than Black and White. Please note that all records with "unknown" race value are filtered out, as described in the [Filtering section](#filtering).

### Offense characteristics

#### Crime type

Crimes fall into five broad categories:

- Person
- Property
- Drugs
- Weapons
- Other harm
- All other

#### Offense category

Offense are subcategories of crime, based on the those used by the Illinois State Police with some variation.

<details>
<summary>Click here to see all offense categories</summary>

- Homicide
- Criminal sexual assault
- Robbery
- Battery
- Assault
- Human Trafficking
- Kidnaping
- Burglary
- Burglary/theft from motor vehicle
- Theft
- Motor vehicle theft
- Arson
- Deception
- Criminal damage & trespass to property
- Deadly weapons
- Sex offenses
- Offenses involving children
- Criminal abortion
- Disorderly conduct
- Interference with public officers
- Intimidation
- Threat-terrorism
- DUI offenses
- Other harm offenses
- Cannabis Control Act
- Controlled Substances Act
- Methamphetamine offenses
- Hypodermic Syringes & Needles Act
- Drug Paraphernalia Act
- Other drug offenses
- Gambling
- Liquor Control Act violations
- Motor vehicle related offenses
- Traffic code violations
- Violations of criminal registration laws
- Violate order of protection/no contact
- Miscellaneous offenses Chapter 720
- Miscellaneous offenses other chapters
- Conservation offenses

</details>

#### Offense class

There are 6 felony classes and 2 misdemeanor classes:

- First degree murder, or class M felony
- Class X felonies
- Class 1 felonies
- Class 2 felonies
- Class 3 felonies
- Class 4 felonies
- Class A misdemeanors
- Class B misdemeanors

Illinois Complied Statute [730 ILCS 5/5-4.5-10](https://www.ilga.gov/legislation/ilcs/ilcs4.asp?DocName=073000050HCh%2E+V%2E+Art%2E+4%2E5&ActID=1999&ChapterID=55&SeqStart=27300000&SeqEnd=29800000) provides authoritative details on theses reportable classes of offense. Class C misdemeanors are omitted from _Arrest Explorer_ data since they are not part of the CHRI system according to the Criminal Identification Act [[20 ILCS 2630/5 et seq.](https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=350&ChapterID=5)].
