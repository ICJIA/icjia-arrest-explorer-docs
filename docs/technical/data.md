---
meta:
  - name: robots
    content: noindex
---

# _Arrest Explorer_ data

The Illinois Criminal Justice Information Authority (ICJIA) _Arrest Explorer_ provides aggregated criminal history record information (CHRI), which can be used to observe trends and associations in arrests. Read this page to learn more about how _Arrest Explorer_ prepares CHRI data as well as various aspects of the final aggregated results.

The _Arrest Explorer_ dataset is created by a three step process:

1. Data retrieval: only specific CHRI data are retrieved from the Illinois State Police's Computerized Criminal History (CCH) database.
2. Data aggregation: individual records are totalled into aggregate tables
3. Data privacy protection: to impede re-identification of individuals, the aggregate tables are slightly altered.

The next three sections detail the specifics of each step. The final sections provide a brief data dictionary detailed the specific variables in the _Arrest Explorer_ database.

## Retrieval and Data Exclusion

The raw CHRI data may include records with faulty or missing information introduced by human or system errors, just as any other real-world measurements. While these errors may not be significant to the original purposes of the CHRI system, _Arrest Explorer_ recognizes the likelihood of their presence and implements a filtering mechanism to avoid or correct such errors when possible.

The criteria for filtered arrest records to be used are as follows:

1. Arrest charges to be reported as specified by the Criminal Identification Act [[20 ILCS 2630/5 et seq.](https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=350&ChapterID=5)] only. Generally this means that Class C misdemeanors and local ordinance violations are excluded, but all felony classes and class A and B misdemeanors are included.
2. New arrests only (records for bond forfeiture or back entered past arrests, etc. are excluded).
3. Arrests in 2009 and later, only complete years are included.
4. Persons aged between 18 and 99 years old at time of arrest.
5. Only persons arrested with known gender and race values (remove records with the "unknown" value for gender or race).
6. While not a filter per se, if an arrest record has been expunged that it would not longer appear in the CCH database and thereforce is not included in _Arrest Explorer_.

## Aggregatation and Grouping

Using the filtered CHRI data, aggregate data tables are created. All aggregates are annual counts and each table is based on either arrests or arrestees and a set of [grouping variables](#grouping-variables) to total and subtotal the filtered CHRI records. Additionally the data are altered during the process to prevent re-identification of individuals and protect privacy.

## Privacy Protections

_Arrest Explorer_ alters the aggregate tables to protect privacy. These procedures are intended to increase uncertainty about individuals records in the dataset, even for individuals with multiple uncommon characteristics. For example if an individual lives in a county where only twelve people of their race/ethnicity live, then it may be possible to determine which of the twelve people is in the dataset by adding a single additional category such as age group. _Arrest Explorer_ avoids this situation by altering the data, especially for small numbers representing only a handful of cases. Additionally noise is added to larger numbers to prevent someone from accurately deducing small numbers by substraction.

1. If the aggregated count for a specific cell on a table is less than 10 it is recoded.

- Numbers 0 to 4 are replaced by 1
- Numbers 5 to 9 are replaced by 6

2. If the count is 10 or higher, it has 1, -1, or 0 added to it.
3. Grand totals for the state are not modified, i.e. the total number of arrests or arrestees are precise reflections of the data in CCH on the date of extraction, according to the [Data Retrieval and Exclusion](#retrieval-and-data-exclusion)

While these changes make individual aggregate counts "incorrect" in most data tables, the overall distribution of the data is a very close representation of the unaltered data. In other words, numbers are close aproximations and not official crime statistics. The result is thus in line with the goal of the _Arrest Explorer_, which is to provide the public with insights into criminal arrest trends and associations.

## Data Dictionary

### Top level variables

In order to offer more comprehensive insights into the criminal arrest trends in Illinois, _Arrest Explorer_ aggregates the filtered CHRI data using three units of analysis:

- **Arrest**: Each count in arrest tables corresponds to a unique arrest record as defined by the Document Control Number (DCN) assigned to the arrest.
- **Arrestee** (person arrested): Each count in arrestee tables corresponds to a unique combination of name and date of birth.
- **Arrests per Arrestee**: This is the number of arrests divided by the number of arestees.
- **Arrests by charges (or Arrest Charges)**: This is the count of arrests categorized by the highest related charge, not a total count of charges. For example if an individual were arrested for murder and theft, their arrest would be counted once and only once for murder, and not appear under theft.

### Breaking variables

_Arrest Explorer_ uses a set of grouping variables and their combinations to generate aggregates that offer more context information. Except for year as the basic unit for all aggregate counts, these grouping variables can be divided into two categories: _demographic_ and _offense_ characteristics.

Please note that, to avoid losing too much information from less than 10 counts, _Arrest Explorer_ uses coarsened variables and limits the maximum number of grouping variables used for each table to two.

#### Demographics

##### Age group

The age of person arrested is binned into the following four age groups:

- 17 to 24
- 25 to 44
- 45 to 64
- 65 and older

##### County

There are 102 counties in the State of Illinois. Because the City of Chicago has a very large portion of the State's population, its county, Cook, is subdivided into "Cook Chicago" and "Cook County Suburbs". You can find a complete list of counties in Illinois on this [Wikipedia page](https://en.wikipedia.org/wiki/List_of_counties_in_Illinois).

##### Gender

For the purpose of _Arrest Explorer_, there are only two gender values: Female and Male. Please note that all records with "unknown" gender value are filtered out, as described in the [Data Retrieval and Exclusion](#retrieval-and-data-exclusion).

##### Race

For the purpose of _Arrest Explorer_, there are only fiverace values: African American, Asian, Hispanic, Native American, and White. Critically Hispanic was not used prior to 2015, though some records may have been updated retroactively due to 2015 and later arrests. Please note that all records with "unknown" race value are filtered out, as described in the [Data Retrieval and Exclusion](#retrieval-and-data-exclusion).

#### Offense characteristics

##### Crime type

Crimes fall into five broad categories:

- Person
- Property
- Drugs
- Weapons
- Other harm
- All other

Please also recall that _Arrest Explorer_ excludes arrests with missing, unknown, or invalid charges, as well as Class C misdemeanors, local ordinance violations, and arrests related to bail violations.

##### Offense category

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

##### Offense class

There are 6 felony classes and 2 misdemeanor classes included in _Arrest Explorer_:

- First degree murder, or class M felony
- Class X felonies
- Class 1 felonies
- Class 2 felonies
- Class 3 felonies
- Class 4 felonies
- Class A misdemeanors
- Class B misdemeanors

Illinois Complied Statute [730 ILCS 5/5-4.5-10](https://www.ilga.gov/legislation/ilcs/ilcs4.asp?DocName=073000050HCh%2E+V%2E+Art%2E+4%2E5&ActID=1999&ChapterID=55&SeqStart=27300000&SeqEnd=29800000) provides authoritative details on theses reportable classes of offense. Class C misdemeanors are omitted from _Arrest Explorer_ data since they are not part of the CHRI system according to the Criminal Identification Act [[20 ILCS 2630/5 et seq.](https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=350&ChapterID=5)].
