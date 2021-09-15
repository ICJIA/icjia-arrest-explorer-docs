---
meta:
  - name: robots
    content: noindex
---

# Explorer

The Illinois Criminal Justice Information Authority (ICJIA) _Arrest Explorer_ provides an [interactive data dashboard](https://icjia.illinois.gov/arrestexplorer/), to facilitate exploration of the _Arrest Explorer_ data.

::: tip

Most of your interactions with _Arrest Explorer_ are likely to be through the _Data Menu_.

![Data Menu](/assets/data-menu-icon.PNG)

Click there to explore!
:::

## Main view

When you first open _Arrest Explorer_ you will see a landing screen, this summarizes the documentation and the Data User Agreement. Once you acknowledge, you will reach the Main View:

<div style="text-align:center">

![Main view screenshot](/assets/main-view.PNG)

</div>

**The main view has the following elements you can interact with:**

1. The main plot area, here you can see the data and move your mouse over any point and see the underlying number.
2. ![About Menu](/assets/about-icon.PNG) Clicking opens a menu providing links to this documentation, the initial info screen, and settings for the dark theme and other overall information about ICJIA and CHRI data.
3. ![ViewTable](/assets/view-as-table-icon.PNG) Clicking changes the main plot to a spreadsheet like view of the data.
4. ![Export](/assets/export.PNG) Clicking opens a menu with options to export the data seen in the main plot. Formats include images of the graphs, spreadsheets of the data, embeddable links for other websites, and
5. ![Data Menu](/assets/data-menu-icon.PNG) Clicking this will open a side menu next to the main plot. This is the main way to request different data/views, filter results, change the plot to bar graphs.

## The Data Menu

The Data Menu holds the most important controls for exploring data in _Arrest Explorer_. In this menu, you can change what topic you want to examine (Arrests, Arrestees, Arrests per Arrestee, or Arrests by Charges), change the years to include, or breakdown the results by demographics or other details.

After you click _data_ in the lower right hand corner, it will open a side menu on the right hand side, as seen in the screen shot below.

<div style="text-align:center">

![Data Menu in Main View](/assets/data-menu-open.PNG)

</div>

The menu is subdivided into several sections, so each will be briefly reviewed from top to bottom.

### Selecting which Dataset to view in _Arrest Explorer_

The topmost section of the Data Menu is entitled (1) Dataset to view. By using the drop down you can select one of 4 datasets as the main type of data to display in _Arrest Explorer_.

<div style="text-align:left">

![Dataset to Review](/assets/1-dataset-to-review.PNG)

</div>

_Arrests_ reflects the total number of adult arrests in the _Arrest Explorer_ database, with count reflecting an individual arrest. _Arrestees_ counts the number of unique individuals who were arrested during the years, so if an individual was arrested 5 times they would count for five in _Arrests_ and only once in _Arrestees_. _Arrests per Arrestees_ is the simply _Arrests_ divided by _Arrestees_. These first three options can be broken down by demographics variables.

The final option _Arrest Charges_ is the count of _Arrests_ categorized by the highest associated charge with that arrest. (For example if someone was arrested for homicide and theft, the arrest would only count under homicide.) Note that the totals for this category are identical to _Arrests_, however this dataset can be broken down by details of the charge but not demographics. How to break down datasets by year and

## Specifying years

_Arrest Explorer_ data can be filted by year, using the _Timeframe_ submenu. By default all years are shown and data is plotted for each year, between the _Starting Year_ and _Ending Year_.

<div style="text-align:left">

![Selecting Years](/assets/2-timeframe.PNG)

</div>

There is also the option to Aggregate years, which in this context means to average all values between the _Starting Year_ and _Ending Year_ (including the endpoints). This is most useful when breaking down arrest data by other variables.

## Breaking data down further

_Arrest Explorer_ allows you to subdivide datasets by up to two breaking variables.

![Break Variables](/assets/3-break-variables.PNG)

All datasets can be broken by county. Arrest Charges can only be broken down by offense_category, crime type, and class. All others can be broken down by gender, race, or age group.

## Filtering data

It is possible to filter datasets by the breaking variables. By default, _Arrest Explorer_ filters County for the six most populous counties. To do modify a filter such as which Counties are included first select one or more break variables and then select _Edit County Filter_.

![Finding the filter menu](/assets/break-by-variables-open.PNG)

Once you click the edit filter menu, _Arrest Explorer_ will open a a new submenu, as seen below:

![Sort & Filter Submenu](/assets/sort-and-filter-submenu.PNG)

The top option of this menu is _sort by_ and allows changing between alphabetical sorting and sorting by the average. The option of sorting by average will essentially allow you to present data in rank order. There is also the option to sort by increasing/decreasing order.

The second option allows you to select which categories within a break variable to display. For example, County defaults to having only the six most populous Counties included (though Cook is presented as two Counties). Selecting the arrow will show a complete list of options and allow individually selecting/deselecting them, to manually set a filter.

In addition to the manual selection it is possible to set lower and upper limits on which categories to show. For example, it would be possible to select all counties, and then set the filter to only include counties with more than 5000 arrests, as shown below:

![Sort & Filter Submenu](/assets/filtered-sort-menu.PNG)

The result is that only 11 counties are shown, however this is determined by the data and not the user. Note that the user should still review the actual data shown to ensure the results match expectations. This is because this filter operates independantly of what other breaking variable may be selected, so county and race are selected, the filter on county would only examine totals by county, and the filter on race would only examine totals by race, however the output would race X county.

## Adjusting Output Options

Returning to the data menu, the fourth and final set of options are related to presentation of the data. These are the _output options_.

![Output Options](4-output)

## The Export Menu

## Changing the Theme

<FundingStatement />
