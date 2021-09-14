---
meta:
  - name: robots
    content: noindex
---

# Explorer

The Illinois Criminal Justice Information Authority (ICJIA) _Arrest Explorer_ provides an [interactive data dashboard](https://icjia.illinois.gov/arrestexplorer/), to facilitate exploration of the _Arrest Explorer_ data.

::: tip

Most of your interactions with _Arrest Explorer_ are likely to be through the ![Data Menu](/assets/DataMenu.PNG). Click there to explore!
:::

## Main view

When you first open _Arrest Explorer_ you will see a landing screen, this summarizes the documentation and the Data User Agreement. Once you acknowledge, you will reach the Main View:

<div style="text-align:center">

![Main view screenshot](/assets/MainView.PNG)

</div>

**The main view has the following elements you can interact with:**

1. The main plot area, here you can see the data and move your mouse over any point and see the underlying number.
2. The About menu ![About Menu](/assets/About.PNG), this provides links to this documentation, the initial info screen, and settings for the dark theme and other overall information about ICJIA and CHRI data.
3. View as Table: Clicking ![ViewTable](/assets/ViewTable.PNG) changes the main plot to a spreadsheet like view of the data.
4. Export, clicking ![Export](/assets/Export.PNG) opens a menu with options to export the data seen in the main plot. Formats include images of the graphs, spreadsheets of the data, embeddable links for other websites, and
5. Data Menu, ![Data Menu](/assets/DataMenu.PNG), clicking this will open a side menu next to the main plot. This is the main way to request different data/views, filter results, change the plot to bar graphs.

## The Data Menu

The Data Menu holds the most important controls for exploring data in _Arrest Explorer_. In this menu, you can change what topic you want to examine (Arrests, Arrestees, Arrests per Arrestee, or Arrests by Charges), change the years to include, or breakdown the results by demographics or other details.

After you click ![Data Menu](/assets/DataMenu.PNG) in the lower right hand corner, it will open a side menu on the right hand side, as seen in the screen shot below.

<div style="text-align:center">

![Data Menu in Main View](/assets/DataMenuOpen.PNG)

</div>

The menu is subdivided into several sections, so each will be briefly reviewed from top to bottom.

### Selecting which Dataset to view in _Arrest Explorer_

The topmost section of the Data Menu is entitled (1) Dataset to view. By using the drop down you can select one of 4 datasets as the main type of data to display in _Arrest Explorer_.

<div style="text-align:left">

![Dataset to Review](/assets/1-dataset-to-review.PNG)

</div>

_Arrests_ reflects the total number of adult arrests in the _Arrest Explorer_ database, with count reflecting an individual arrest. _Arrestees_ counts the number of unique individuals who were arrested during the years, so if an individual was arrested 5 times they would count for five in _Arrests_ and only once in _Arrestees_. _Arrests per Arrestees_ is the simply _Arrests_ divided by _Arrestees_. These first three options can be broken down by demographics variables.

The final option _Arrest Charges_ is the count of _Arrests_ categorized by the highest associated charge with that arrest. (For example if someone was arrested for homicide and theft, the arrest would only count under homicide.) Note that the totals for this category are identical to _Arrests_, however this dataset can be broken down by details of the charge but not demographics. How to break down datasets by year and

# Sections still under construction

## Specifying years

_Arrest Explorer_ data can be filted by year. By default all years are shown and data is plotted for each year, optionally you can show the average for the selected timeframe. This later option is of most interest when you break by demographic or charge information.

## Breaking data down further

AE allows you to break by one or two variables. All data can be broken by county. Arrest Charges can only be broken down by offense_category, crime_type, and class. All others can be broken down by gender, race, or age_group.

## Filtering data

It is possible to filter the breaking variables. Arrest Explorer in fact does this by default for County, to avoid showing a graph of 102 counties. To filter data you must first select a breaking variable, and then click edit filter under that variable.

## The Export Menu

## Changing the Theme

<FundingStatement />
