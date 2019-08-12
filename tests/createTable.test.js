import {
  createTable,
  createCaption,
  createOverview,
  createThead,
  createTbody,
  createTr_data,
  createTh
} from "../src/createTable";

import { barChart } from "../src/barChart";

let emptyOptions = Object.assign({}, barChart);
emptyOptions.options = {};

const title = barChart.options.title.text;
const labels = barChart.data.labels;
const datasets = barChart.data.datasets;

// TESTS

/* Create Table */

describe("createTable for a bar chart", () => {
  // create table
  const table = createTable(barChart);
  // create table with no overview that is not visually hidden
  const table2 = createTable(barChart, false, false);

  let nonbarChart = Object.assign({}, barChart);
  nonbarChart.type = "nonbar";

  test("type is bar", () => {
    expect(barChart.type).toEqual("bar");
  });

  test("throws when chart object is not type 'bar'", () => {
    expect(() => {
      createTable(nonbarChart);
    }).toThrowError("Chart object type is not bar");
  });

  test("returns a table element containing a caption, header, and body (in that order)", () => {
    expect(table.tagName).toEqual("TABLE");
    expect(table.childElementCount).toEqual(3);
    expect(table.firstChild.tagName).toEqual("CAPTION");
    expect(table.children[1].tagName).toEqual("THEAD");
    expect(table.lastChild.tagName).toEqual("TBODY");
  });

  test("visually hides table only if hide is set true", () => {
      expect(table.classList).toContain("opacity-zero");
      expect(table2.classList).not.toContain("opacity-zero");
  });

  test("table caption does not include overview only if set to false", () => {
    const tablecaption = table.firstChild;
    const table2caption = table2.firstChild;
    expect(tablecaption).not.toEqual(table2caption);
    expect(tablecaption.innerHTML).toContain("span");
    expect(tablecaption.children[0].classList).toContain("overview");
  })
  
});

/* Create Caption */
describe("createCaption", () => {
  // create caption element
  const caption = createCaption(barChart);
  const caption2 = createCaption(barChart, false);
  const caption3 = createCaption(emptyOptions, false);

  test("returns a 'caption' element containing title", () => {
    expect(caption.tagName).toEqual("CAPTION");
    expect(caption.innerHTML).toContain(title, "Table format for visual chart,");
  });

  test("does not include overview only if set to false", () => {
    expect(caption.childElementCount).toEqual(1);
    expect(caption.children[0].tagName).toEqual("SPAN");
    expect(caption.children[0].classList).toContain("overview");
    expect(caption2).not.toEqual(caption);
    expect(caption2.childElementCount).toEqual(0);
    expect(caption2.innerHTML).toContain(title, "Table format for visual chart,");
    expect(caption2.innerHTML).not.toContain("span");
  });

  test("replaces null title text with 'Untitled'", () => {
    expect(caption3.innerHTML).toEqual("Table format for visual chart, Untitled.");
  })
});

/* Create Overview */
describe("createOverview", () => {
  // create span element containing overview
  const overview = createOverview(barChart);

  test("returns a 'span' element with length greater than zero", () => {
    expect(overview.tagName).toEqual("SPAN");
    expect(overview.innerHTML.length).not.toEqual(0);
  });

  test("span has class 'overview'", () => {
    expect(overview.classList).toContain("overview");
  })

  test("overview for barChart example contains expected statements for max/min values for each dataset", () => {
    expect(overview.innerHTML).toContain(
      "For label1, April is the greatest, with a value of 7, and Jan is the lowest, with a value of 3."
    );
    expect(overview.innerHTML).toContain(
      "For label2, Feb is the greatest, with a value of 8, and Jan is the lowest, with a value of 2."
    );
    expect(overview.innerHTML).toContain(
      "For label3, Jan is the greatest, with a value of 8, and April is the lowest, with a value of 1."
    );
  });
});

/* Create Table Header */

describe("createThead", () => {
  // create table header
  const thead = createThead(labels);

  test("returns a 'thead' element", () => {
    expect(thead.tagName).toEqual("THEAD");
  });

  test("thead contains a single child element (tr)", () => {
    expect(thead.childElementCount).toEqual(1);
    expect(thead.firstChild.tagName).toEqual("TR");
  });

  test("tr inside thead contains correct number of children, starting with empty cell", () => {
    expect(thead.firstChild.childElementCount).toEqual(labels.length + 1);
    expect(thead.firstChild.firstChild.tagName).toEqual("TD");
    expect(thead.firstChild.firstChild.innerHTML).toEqual("");
  });

  for (let i = 1; i < thead.firstChild.children.length; i++) {
    test("each remaining child is a 'TH' element with 'col' scope", () => {
      expect(thead.firstChild.children[i].tagName).toEqual("TH");
      expect(thead.firstChild.children[i].getAttribute("scope")).toEqual("col");
    });

    test("each 'TH' element contains corresponding label", () => {
      expect(thead.firstChild.children[i].innerHTML).toEqual(labels[i - 1]);
    });
  }
});

/* Create Table Body */
describe("createTbody", () => {
  // create table body
  const tbody = createTbody(datasets);

  test("returns a 'tbody' element", () => {
    expect(tbody.tagName).toEqual("TBODY");
  });

  test("tbody element contains a row for each dataset", () => {
    expect(tbody.childElementCount).toEqual(datasets.length);
  });

  for (let i = 0; i < tbody.children.length; i++) {
    test("each child is a row that begins with a header cell that contains dataset label and has 'row' scope", () => {
      expect(tbody.children[i].tagName).toEqual("TR");
      expect(tbody.children[i].firstChild.tagName).toEqual("TH");
      expect(tbody.children[i].firstChild.getAttribute("scope")).toEqual("row");
    });

    for (let x = 1; x < tbody.children[i].children.length; x++) {
      test("each remaining child of the child row is a table cell containing the correct corresponding dataset value", () => {
        expect(tbody.children[i].children[x].tagName).toEqual("TD");
      });
    }
    
  }
});

/* Create Table Row */
describe("createTr_data", () => {
  // create table row of data
  const data = datasets[0].data;
  const label = datasets[0].label;
  const tr = createTr_data(label, data);

  test("returns a 'tr' element", () => {
    expect(tr.tagName).toEqual("TR");
  });

  test("returns a 'tr' element containing correct child el count", () => {
    expect(tr.childElementCount).toEqual(data.length + 1);
  });

  test("has 'th' as first child with 'row' scope", () => {
    expect(tr.firstChild.tagName).toEqual("TH");
    expect(tr.firstChild.getAttribute("scope")).toEqual("row");
  });

  for (let i = 1; i < tr.children.length; i++) {
    test("each remaining child is a 'TD' element", () => {
      expect(tr.children[i].tagName).toEqual("TD");
    });

    test("each 'TD' element contains corresponding dataset value", () => {
      expect(tr.children[i].innerHTML).toEqual(data[i - 1].toString());
    });
  }
});

/* Create Table Header  */
describe("createTh", () => {
  // create header cell
  const row = false;
  const label = "test label";
  const th = createTh(label, row);

  test("returns a 'th' element", () => {
    expect(th.tagName).toEqual("TH");
  });

  test("element has 'scope' attribute equal to value passed", () => {
    if (row) {
      expect(th.getAttribute("scope")).toEqual("row");
    } else {
      expect(th.getAttribute("scope")).toEqual("col");
    }
  });

  test("contains provided label", () => {
    expect(th.innerHTML).toContain(label);
  });
});
