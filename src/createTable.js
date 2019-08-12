import { genStats, arrayToString, spellInt } from "./utils";

/**
 * create an HTML table containing a header row of labels and row for each dataset
 * @param {object} chart_obj
 * @param {boolean} overview set true by default to include an overview of chart data within table caption
 * @param {boolean} hide set true by default to visually hide table
 * 
 * @returns {HTMLTableElement}
 */
export function createTable(chart_obj, overview = true, hide = true) {
  // TODO: add checks
  /*
  if (chart_obj.type !== "bar") {
    throw "Chart object type is not bar";
  }
  */
  // TODO: check for length of labels to equal length of each dataset.data
  const table = document.createElement("table");
  /*
  if (hide) {
    table.classList.add("opacity-zero");
  }*/


  // set subdata false if chart has only one dataset
  let subdata = false;
  if (chart_obj.data.datasets.length > 1) {
    subdata = true;
  }

  // TODO: update caption to only calculate one min and max per chart, regardless of subdata
  const caption = createCaption(chart_obj, overview);

  // pass subdata to create or not create a subdata col
  const thead = createThead(chart_obj.data.labels, subdata);
  const tbody = createTbody(chart_obj.data.datasets, subdata);

  table.append(caption, thead, tbody);
  return table;
}

/**
 * create an HTML caption element containing title
 * @param {object} chart_obj
 * @param {boolean} overview set true by default to include an overview of chart data
 * 
 * @returns {HTMLTableCaptionElement}
 */
export function createCaption(chart_obj, overview = true) {
  const caption = document.createElement("caption");
  let title = "Untitled";
 
  if (chart_obj.options.title.text !== "") {
    title = chart_obj.options.title.text;
  }
  let type = chart_obj.config.type;

  let num_datasets = chart_obj.data.datasets.length;
  let num_d_s = num_datasets;
  if (num_datasets <= 10) {
    num_d_s = spellInt(num_datasets);
  }
  let num_datasets_s = '';
  if (num_datasets > 1) {
    num_datasets_s = `${num_d_s} datasets`;
  } else {
    num_datasets_s = `${num_d_s} dataset`;
  }

  let num_labels = chart_obj.data.labels.length;
  let num_l_s = num_labels;
  if (num_labels <=10) {
    num_l_s = spellInt(num_labels);
  }
  let num_labels_s = '';
  if (num_labels > 1) {
    num_labels_s = `${num_l_s} categories`;
  } else {
    num_labels_s = `${num_l_s} category`;
  }

  caption.innerHTML = `Alternative format for ${type} chart, <span class="alt-title">${title}</span>. Table shows ${num_datasets_s} and ${num_labels_s}.`;

  if (overview) {
    if (chart_obj.data.datasets.length <= 4) {
      const span = createOverview(chart_obj);
      caption.append(span);
    } else {
      throw "Overview cannot be generated for number of datasets exceeding 4."
    }
    
  }
  return caption;
}

/**
 *  create an HTML span element containing an overview of chart data
 * @param {object} chart_obj
 * 
 * @returns {HTMLSpanElement}
 */
export function createOverview(chart_obj) {
  const span = document.createElement("span");
  span.classList.add("overview");
  const statsObjs = genStats(chart_obj);

  //let summary_stats_s = '';

  /*
  if (statsObjs.length === 1) {
    

    //let max_labels_s = arrayToString(statsObjs[0].max_value_labels);
    //let min_labels_s = arrayToString(statsObjs[0].min_value_labels);
    summary_stats_s = (
      `
      The max value ${substring}is ${statsObjs[0].max_value} (${max_labels_s}).
      The min value ${substring}is ${statsObjs[0].min_value} (${min_labels_s}).
      `
    );
    
  } else {
    */
    
    let summary_stats_arry = statsObjs.map(object => {

      let max_labels_s = arrayToString(object.max_value_labels);
      let min_labels_s = arrayToString(object.min_value_labels);

      let substring = '';
      if (statsObjs.length > 1) {
        substring = `for "${object.label}" `;
      } 

      return `
      Max and min values ${substring}are ${object.max_value} (${max_labels_s}) and ${object.min_value} (${min_labels_s}), respectively.
      `;

      /*
      return `
        For ${object.label}, ${max_labels_s} the greatest, with a value of ${
        object.max_value
      }, and ${min_labels_s} the lowest, with a value of ${object.min_value}.
        `;
      */


    });

    let span_stats = summary_stats_arry.map(stat => {
      const span = document.createElement("span");
      span.classList.add("stat");
      span.innerHTML = stat;
      return span;
    })

    // summary_stats_s = summary_stats_arry.join(" ");
  //}
    span_stats.forEach(span_stat => {
      span.append(span_stat);
    })
    

  // let summary_stats_s = summary_stats_arry.join(" ");
  // span.innerHTML = `${summary_stats_s}`;

  return span;
}

/**
 * create an HTML table head row of labels
 * @param {array} labels
 * @param {bool} subdata
 * 
 * @returns {HTMLTableSectionElement}
 */
export function createThead(labels, subdata) {
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  // create empty col if subdata is true
  if (subdata) {
    const empty = document.createElement("td");
    empty.classList.add("empty-th");
    tr.append(empty);
  }

  // fill in headers row
  for (let label of labels) {
    const th = createTh(label, false);
    tr.append(th);
  }

  thead.append(tr);
  return thead;
}

/**
 * create an HTML table body containing a row for each dataset object
 * @param {array} datasets
 * @param {bool} subdata
 * 
 * @returns {HTMLTableSectionElement}
 */
export function createTbody(datasets, subdata) {
  // TODO: add checks
  // check for a label for each dataset
  const tbody = document.createElement("tbody");
  for (let dataset of datasets) {
    // const tr_data = createTr_data(dataset.label, dataset.data);
    const tr_data = createTr_data(dataset, subdata);
    tbody.append(tr_data);
  }

  return tbody;
}

/**
 * create an HTML table row for a dataset
 * @param {array} dataset
 * @param {bool} subdata
 * 
 * @returns {HTMLTableRowElement}
 */
export function createTr_data(dataset, subdata) {
  const tr_data = document.createElement("tr");

  if (subdata) {
    const th = createTh(dataset.label, true);
    tr_data.append(th);
  }

  // fill in data row
  for (let datapoint of dataset.data) {
    let td = document.createElement("td");
    td.innerHTML = datapoint;
    tr_data.append(td);
  }

  return tr_data;
}

/**
 * create an HTML table header cell
 * @param {string} label
 * @param {boolean} row
 * 
 * @returns {HTMLTableHeaderCellElement}
 */
export function createTh(label, row = true) {
  let th = document.createElement("th");
  th.innerHTML = label;
  if (row) {
    th.setAttribute("scope", "row");
  } else {
    th.setAttribute("scope", "col");
  }
  return th;
}
