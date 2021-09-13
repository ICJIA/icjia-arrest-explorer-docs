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

<FundingStatement />
