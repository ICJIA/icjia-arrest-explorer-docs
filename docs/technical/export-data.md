# The Export Menu

The export menu can be accessed with the _Export_ button at the bottom center. **This menu helps you export the plots and/or data as specifically seen when you press the button, so first use the data menu to select the data of interest.**

Once clicked, it will open the following menu:

![Export options](/assets/export-menu.PNG)

The export menu can be subdivided into four sections: 1) Saving an image of the plot, 2) downloading data, 3) exporting a direct URL and/or embeddable plot, 4) access to the data via API. The details of each setion are describe in detail below.

## Saving an image of the plot

Clicking _Save Image_ will download an image according the settings selected. The main option is Image format. The three formats available are PNG (Portable Network Graphics), JPEG or JPG (Joint Photographic Experts Group), and SVG (Scalable Vector Graphics).

For the best reproduction onscreen or in print, use the SVG format. This format is fundamentally different from JPG/PNG and instead of recording pixels, it tells computers which lines to draw. The result is that the SVG format will be accurate to the online plots and data at any scale and remain sharp and clear. However, while the SVG format is widely supported by modern web browsers, it is less widely supported and familiar for than the photo formats.

PNG and JPEG are picture/photo based options that are similar to files you might receive from a digital camera. PNG will download a pixel perfect image of the plots as seen, JPEG will will download an image of the plots but removing details that you are unlikely to notice to save space. For PNG and JPEG formats you may select width and height for the image from dropdown options. The options reflect the scale seen on the screen (100%), 5x the scale on the screen (500%), and options based on three high definition formats (Full HD 1920 x 1080, WQHD/2k 2560 x 1440, and UHD 4k 4096 x 2160). It is possible to mix the horizonatol and vertical dimensions from the different scales. In general, for placing a simple plot in a document intended to be read on a computer, 100% or HD is sufficient. If there are multiple plots or you wish to show images full screen on a high definition display, 4k is advisable when using JPEG/PNG formats to ensure text remains sharp and unpixelated.

## Downloading Data

Clicking _Download Data_ will download a file of the selected format, the formats available are CSV (Comma Seperated Values), TSV (Tab Seperated Values), and JSON (JavaScript Object Notation).

_For most users csv is strongly advised_, the CSV format is a simple spreadsheet and can be readily read or importated by Microsoft Excel, Apple Numbers, or programs such as SPSS/SAS/R/SYSTAT. TSV is very similar however it uses tab instead of commas to differenative values, and can be used with the same software. The table formats are the same used as when viewing data as a table, see the section on [Table Formats](#table-formats) under _Adjusting Output Options_ for a brief description. It will often be best to first use the data menu to select the format of the table onscreen and then to export.

JSON is available for advanced users. This format is simple database format, if you are not familiar or interested in learning about this format do not use it. When exporting JSON there are three major options: raw, arrays, and objects.

If selected _raw_ will download the entire _Arrest Explorer_ database. This is one exception to the rule that the export menu is specific to the data view. Please be thoroughly familiar with [technical details of what the data is](/technical/data) before doing this, as it is a raw version of the _Arrest Explorer_ database, not the actual CHRI data.

If array is selected, a json will be exported in an array format similar to a spreadsheet table with a header followed by many data rows. If object is select, the json will be structured with each row as a potentially independant object (i.e. header values embedded in each row). These two options also have the option of [Table Format](#table-formats), which in this case determines what the headers included are.

## URL and Embedding links

The _Export Menu_ shows a full URL of the current main view under _Link to this plot:_. This link can be used for sending someone else that exact view, for example via e-mail or text message. It may also be used to link to a specific view of Arrest explorer from an article or online. To the other lower right there is an option to _COPY EMBED CODE_, if clicked this will copy a longer URL to the clipboard that can be pasted into an external webpage to show an embedded view of _Arrest Explorer_, such the view below:

<iframe title="Plot of Illinois Arrests by Race, County, and Year" width="100%" height="435" frameborder="0" src="http://localhost:8080/arrestexplorer/?split=race,county&county[mean]>10000&race[mean]>10000&embed"></iframe>

## API URLs

The final section _Download through the API:_ provides a URL that accesses the API directly. If clicked this will download the data in the format selected under _Download Data_. This link however can be also embedded in computer programs or altered to directly access data through the API.

This is provided as convenience for those using the API. For more details on the API, refer to the [API section](/technical/api).
