---
meta:
  - name: robots
    content: noindex
---

# _Arrest Explorer's_ Application Programming Interface

A key component of _Arrest Explorer_ is its Application Programming Interface (API). This makes it easier to dynamically include the latest data from within _Arrest Explorer_ in other data visualizations or online publications. (Review [Data User Agreement](/User_Agreement) for terms and attribution.)

## Learning the API

The API is called through an http get, i.e. by retrieving a URL with a specific URL scheme. This will return the data (by default as a CSV). To simply test, navigate to [https://icjia.illinois.gov/arrestexplorer/api/](https://icjia.illinois.gov/arrestexplorer/api/), without any arguments it will return the default view of arrests by year for all available years.

The easiest way to learn the API is by using the graphical interface to find either exactly what you want or something predictably simple.

As an example if you wanted the number of arrest per year by race and sex, you could navigate to [_Arrest Explorer_](https://icjia.illinois.gov/arrestexplorer/) and then add gender and race as breaking variables via the data menu. Once those are entered, you will see the data on screen.

If you click on the export menu, you will see a link under _Download through the API:_

[https://icjia.illinois.gov/arrestexplorer/api/?split=gender,race](https://icjia.illinois.gov/arrestexplorer/api/?split=gender,race)

Generally, this is the best starting point for using the API, first experiment with the graphics interface, and see how breaking variables and filters are applied.

:::tip It is safe to experiment with the API

The API is read only and cannot modify data or provide any identifying details. It is also written so that if the command is not perfect it will not return any data, this protects against accidentally retrieving different data than was requested.

:::

Once you have a grasp on what is available, you can use one of two provided API example scripts as a starting point to access the API data from third party software such as [R](https://www.r-project.org/) or [Python](https://www.python.org/)

The R example in particular provides details about most options as comments in the code:

```R
# ICJIA CHRI Arrest Explorer API example in R

library(data.table) # this merely provides the fread package, tidyverse or the base csv read would also work
library(ggplot2) # the most widely plot, merely used to demonstrate the simplicity of plotting the data in R

# this example defines a custom function in R that eases use of the API

CHRI_api <- function(value = 'arrests',

                     # value options are
                     # arrests
                     # arrestees
                     # arrests_per_arrestee
                     # arrest_charges

                     split = '',

                     # one or two arguments as string seperated by
                     # variables
                     # county, crime_type, offense_category
                     # offense_class, race, age_group, gender

                     #arguments can be filtered using "attributes"/"aspects"

                     # label, max, min, sum, mean

                     # e.g. instead of offense_class, offense_class[mean]>1000

                     su = '',


                     # filter arguments, using same variables as split argument
                     # arguments can be filtered using
                     # label, max, min, sum, mean

                     # e.g. instead of offense_class, offense_class[mean]>1000

                     sort = '',

                     # +/- variable[attribute] and ordered
                     # e.g. county, -race[mean]


                     format_table = 'tall',

                     # tall, mixed, wide

                     ..., # advanced function see substitute call below

                      base_url = 'https://icjia.illinois.gov/arrestexplorer/api')


{
  #put a valid URL together from the above function call
  url <-  paste0(base_url, '/?value=', value, '&format_table=', format_table)
 # if there any filter su arguments, insert them into the above.
  if(su != '') url = paste0(url, '&', su)

 # process additional ... arguments into the call
  args = c(list(
    split = paste(split, collapse = ','),
    sort = paste(sort, collapse = ',')
  ), as.list(substitute(...())))

  for (p in names(args)) if (args[[p]] != '')
    {
    url = paste0(url, '&', p, '=', args[[p]])
  }

  # provider user feedback showing the URL
  message('reading in table from:\n', url)

  # read the url in, the API returns a CSV, fread is a very fast csv read function that outputs
  # a data.table type of dataframe.
  fread(url)
}

arrests <- CHRI_api() # without arguments the CHRI_api will return annual total arrests
# an example of how to plot this data using the common ggplot function
ggplot(data = arrests, mapping = aes(x=Year, y = arrests)) + geom_line()

# demonstration of a call for arrestees by gender
working_call <- CHRI_api(value = 'arrestees',split='gender')

# this is a counterexample, and will fail because the su argument is invalid
arresstees_by_gender_race_incorrectly <- CHRI_api(value = 'arrestees',split='gender', su = 'race=White')

# this API was built to be quite conservative about accepting incorrect input

# the final example is based on the below string, which was copied from the UI using the export menu
# https://icjia.illinois.gov/arrestexplorer/api/?format_table=tall&value=arrestees&split=race,county&county[label]=douglas,dupage,edgar,edwards


# this replicates the above call in the API
test <- CHRI_api(value = 'arrestees', split ='race,county', su = 'county[label]=champaign,dupage,edgar,edwards')

# Note that there are also options in the API such as &format_category=indices which returns numeric codes instead of text labels, and can be inserted into the
# the URL.


```

The R example script is available [here](/arrestexplorer/docs/assets/api_example.R).

There is also an example script written in Python available [here](/arrestexplorer/docs/assets/api_example.py).

Note that the Python and R examples were written by different authors and do different demonstration tasks. Both however access multiple basic functions of the API using their respective languages.

<FundingStatement />
