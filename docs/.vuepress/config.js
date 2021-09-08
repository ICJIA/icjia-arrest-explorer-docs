const tables = [
    "arrests",
    "arrestees",
    "arrests_per_arrestee",
    "arrest_charges",
  ],
  demographics = ["gender", "age_group", "race"];

module.exports = {
  title: "Arrest Explorer Docs",
  base: "/arrestexplorer/docs/",
  description:
    "Documentation site for the Illinois Criminal Justice Information Authority Arrest Explorer.",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://icjia.illinois.gov/researchhub/favicon.ico",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
    ],
  ],
  themeConfig: {
    logo: "https://icjia.illinois.gov/researchhub/icjia-logo.png",
    nav: [
      { text: "User Agreement", link: "/agreement" },
      {
        text: "Arrest Explorer",
        link: "https://icjia.illinois.gov/arrestexplorer",
      },
    ],
    sidebar: [
      "/",
      "/data",
      {
        title: "API",
        sidebarDepth: 1,
        path: "/api/",
        children: [
          "/api/",
          "/api/parameters",
          "/api/graphical",
          "/api/variables",
        ],
      },
      "/about",
      "/funding",
    ],
    sidebarDepth: 2,
    searchPlaceholder: "search",
    displayAllHeaders: false,
  },
  plugins: ["fulltext-search"],
  async additionalPages() {
    const levels = await require("axios")
        .get(
          "https://raw.githubusercontent.com/ICJIA/arrest_explorer/master/src/levels.json"
        )
        .then(function(res) {
          var s = "";
          for (var k in res.data)
            if (Object.prototype.hasOwnProperty.call(res.data, k)) {
              res.data[k].values =
                k === "county"
                  ? tables
                  : demographics.indexOf(k) === -1
                  ? ["arrestcharges"]
                  : ["arrests", "arrestees", "arrests_per_arrestee"];
              s +=
                "### " +
                k +
                "\n> Values: _" +
                res.data[k].values.join(", ") +
                "_\n::: details Levels\n";
              for (var i = 0, n = res.data[k].label.length; i < n; i++) {
                s +=
                  res.data[k].index[i] +
                  ". " +
                  res.data[k].label[i] +
                  " (" +
                  res.data[k].code[i] +
                  ")\r\n";
              }
              s += ":::\n";
            }
          return s;
        }),
      param_info = {
        all: {
          value: [
            {
              default: true,
              description:
                "Total arrests. Each count corresponds to a unique arrest record as defined by the Document Control Number (DCN) assigned to the arrest.",
              value: "arrests",
            },
            {
              default: false,
              description:
                "Number of individuals arrested (some repeating). Each count corresponds to a unique combination of name and date of birth.",
              value: "arrestees",
            },
            {
              default: false,
              description: "arrests / arrestees.",
              value: "arrests_per_arrestee",
            },
            {
              default: false,
              description:
                "Number of charges (possibly multiple per arrest). Each count corresponds to a charge associated with an arrest.",
              value: "arrest_charges",
            },
          ],
          split: [
            {
              default: false,
              description:
                "Splits total values by one to two variables. Separate two variables with a comma; e.g., `split=age_group,race`.",
              value: "One to two variable names",
            },
          ],
          format_file: [
            {
              default: false,
              description:
                "JavaScript Object Notation. An object with a `header` and `rows` entry, which are arrays containing column names and rows respectively.",
              value: "json",
            },
            {
              default: true,
              description:
                "Comma Separated Values. The first line contains column names, and the rest are cases.",
              value: "csv",
            },
            {
              default: false,
              description:
                "Tab Separated Values. The first line contains column names, and the rest are cases.",
              value: "tsv",
            },
          ],
          format_json: [
            {
              default: false,
              description:
                "Includes all tables and variables; same as [data.json](https://raw.githubusercontent.com/ICJIA/arrest_explorer/master/src/data.json).",
              value: "raw",
            },
            {
              default: true,
              description:
                "Rows are arrays, with column entries associated by index with the header array.",
              value: "arrays",
            },
            {
              default: false,
              description: "Rows are objects, with named column entries.",
              value: "objects",
            },
          ],
          format_table: [
            {
              default: false,
              description:
                "A row for each split level, with repeated years and first-split levels if there are two splits.",
              value: "tall",
            },
            {
              default: true,
              description: "Tall first split and wide second split.",
              value: "mixed",
            },
            {
              default: false,
              description:
                "One row per year, with a column for each variable level.",
              value: "wide",
            },
          ],
          format_category: [
            {
              default: true,
              description: "Full label, as displayed.",
              value: "labels",
            },
            {
              default: false,
              description:
                "Index of the level when labels are sorted alphabetically.",
              value: "indices",
            },
            {
              default: false,
              description: "Short code of the level.",
              value: "codes",
            },
          ],
        },
        aspects: [
          {
            value: "label",
            description:
              "Level label, as listed in the variables section, separated by commas.",
            operators: "!=, =",
          },
          {
            value: "max",
            description: "Maximal value totals within the year range.",
            operators: ">, <",
          },
          {
            value: "min",
            description: "Minimal value totals within the year range.",
            operators: ">, <",
          },
          {
            value: "sum",
            description: "Sum of value totals within the year range.",
            operators: ">, <",
          },
          {
            value: "mean",
            description: "Average of value totals within the year range.",
            operators: ">, <",
          },
        ],
        graphical: {
          as_table: [
            {
              default: false,
              description: "Displays data as a table.",
              value: true,
            },
            {
              default: true,
              description: "Displays data as a plot.",
              value: false,
            },
          ],
          plot_type: [
            {
              default: true,
              description: "A line connects each value within a split level.",
              value: "line",
            },
            {
              default: false,
              description:
                "A bar extends from the lower bound to each value, in year or level groups.",
              value: "bar",
            },
            {
              default: false,
              description: "A point marks each value.",
              value: "scatter",
            },
          ],
          theme_dark: [
            {
              default: false,
              description: "Use the dark theme.",
              value: true,
            },
            {
              default: true,
              description: "Use the light theme.",
              value: false,
            },
          ],
          svg: [
            {
              default: false,
              description:
                "Render the plot with Scalable Vector Graphics. This is often better looking and faster with few cases, but much slower with many cases. When saving images, plots are first converted to SVG for scaling.",
              value: true,
            },
            {
              default: true,
              description:
                "Render the plot with Canvas. Handles many cases well, but does not scale.",
              value: false,
            },
          ],
          format_image: [
            {
              default: true,
              description: "Scalable Vector Graphics",
              value: "svg",
            },
            {
              default: false,
              description: "Portable Network Graphics",
              value: "png",
            },
            {
              default: false,
              description: "Joint Photographic Experts Group",
              value: "jpeg",
            },
          ],
          intro: [
            {
              default: true,
              description: "Show the introduction panel on initial load.",
              value: true,
            },
            {
              default: false,
              description: "Show the data display on initial load.",
              value: false,
            },
          ],
          embed: [
            {
              default: true,
              description:
                "Removes all interface elements other than the data display. No and any value is considered true.",
              value: true,
            },
          ],
        },
      };
    function write_md(o, e) {
      var s = "",
        k,
        i,
        n;
      for (k in o)
        if (Object.prototype.hasOwnProperty.call(o, k)) {
          s += "## " + k + "\n\n";
          for (i = 0, n = o[k].length; i < n; i++) {
            s +=
              "### " +
              o[k][i].value +
              (o[k][i].default ? " **\\***" : "") +
              "\n> " +
              o[k][i].description +
              "\n";
          }
        }
      return s;
    }
    return [
      {
        path: "/api/",
        title: "API",
        content: [
          "# Application Programming Interface",
          "This is the API entry point:",
          '> <a href="https://icjia.illinois.gov/arrestexplorer/api" rel="noreferrer" target="_blank">icjia.illinois.gov/arrestexplorer/api</a>',
          "By default, it will return a .csv file of total arrests by year, but you can add query parameters to select different values, add splits, and change the format.",
          "Parameters can be added after a `?`, and separated by `&`.",
          "For example, this will request total arrestees by year, split by race, as a .tsv file:",
          '> <a href="https://icjia.illinois.gov/arrestexplorer/api/?value=arrestees&split=race&format_file=tsv" rel="noreferrer" target="_blank">icjia.illinois.gov/arrestexplorer/api/?**value**=arrestees&**split**=race&**format_file**=tsv</a>',
          "See the [Parameters](/api/parameters.html) and [Graphical Parameters](/api/graphical.html) pages for lists of available formatting and display options.",
          "See the [Variables](/api/variables.html) page for variables by which to split total values.",
          "See the [repository examples](https://github.com/ICJIA/arrest_explorer/tree/master/examples) for applied examples in R and Python.",
        ].join("\n\n"),
      },
      {
        path: "/api/parameters.html",
        title: "Parameters",
        content: [
          "# Parameters",
          "Each entry is an optional query parameter, with keys as main headings and values as subheadings.",
          "These can be entered after the URL following a `?`, with multiple separated by an `&`.",
          "For example:\n> <a href='https://icjia.illinois.gov/arrestexplorer/?value=arrestees&split=gender' rel='noreferrer' target='_blank'>https://icjia.illinois.gov/arrestexplorer/?**value**=arrestees&**split**=gender</a>",
          "::: tip\nAdd `api/` before the `?` to download from the API.\n:::",
          write_md(param_info.all),
          "## sort",
          "### Variable names with an optional aspect",
          [
            "> `{-}variable name[aspect]`, with multiple separated by a comma.",
            "> `-` specifies decreasing order; `label` is the default aspect, so can be omitted.",
            "> For example, `sort=county,-race[mean]`.",
          ].join("\\\n"),
          [
            "## filter",
            "### Variable names with specified values",
            "> Filters are entered as separate parameters (not with `filter=`) in this format:\\",
            "> `{variable name[aspect]}{type}{value}`\\",
            "> These are the available `aspects`, with the `types` they accommodate:",
            (function() {
              for (
                var s = "", i = 0, n = param_info.aspects.length;
                i < n;
                i++
              ) {
                s +=
                  (s ? "\n" : "") +
                  "> - **" +
                  param_info.aspects[i].value +
                  "** (" +
                  param_info.aspects[i].operators +
                  "): " +
                  param_info.aspects[i].description;
              }
              return s;
            })(),
            ">",
            "> For example, `offense_category[label]=homicide&offense_class[mean]>1000`.\\",
            "> `aspect` defaults to `label` if `type` is `!=` or `=`, and to `mean` otherwise, so the aspect could be omitted in this case.",
          ].join("\n"),
          "**\\*** denotes default values.",
        ].join("\n\n"),
      },
      {
        path: "/api/graphical.html",
        title: "Graphical Parameters",
        content: [
          "# Graphical Parameters",
          "In addition to the general parameters, these can be included to affect aspects of the graphical interface:",
          write_md(param_info.graphical),
          "**\\*** denotes default values.",
        ].join("\n\n"),
      },
      {
        path: "/api/variables.html",
        title: "Variables",
        content: [
          "# Variables",
          "These variables can be added with the [split](/api/parameters.html#split) parameter to break total values down into categories (e.g., `Women` and `Men` with the `gender` variable).",
          "Up to two can be added at once, which further breaks category totals into subcategory totals (e.g., `Asian Women` and `Asian Men`, etc., when `split=gender,race`).",
          "The values note indicates which values have information for that variable, as only demographic variables are included in the `arrests` and `arrestees` tables, and only crime-related variables are included in the `arrest_charges` table.",
          "The levels component lists levels in each category format: `index. Label (code)`.",
          "Variable names and their levels are also listed in [levels.json](https://raw.githubusercontent.com/ICJIA/arrest_explorer/master/src/levels.json).",
          levels,
        ].join("\n\n"),
      },
    ];
  },
};
