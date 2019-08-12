/**
 * Generates basic stats for describing chart data
 * @param {object} chart_obj
 *
 * @returns {array} array of objects containing stats for each dataset
 */
export function genStats(chart_obj) {
  // In future will get different stats depending on type property
  let statsObjs = [];

  // TODO: handle floats
  chart_obj.data.datasets.forEach(dataset => {
    let datasetStats = {
      label: dataset.label,
      max_value: Math.max(...dataset.data),
      max_value_labels: [],
      min_value: Math.min(...dataset.data),
      min_value_labels: []
    };

    dataset.data.forEach((value, index) => {
      if (value === datasetStats.max_value) {
        let corresponding_label = chart_obj.data.labels[index];
        datasetStats.max_value_labels.push(corresponding_label);
      }
      if (value === datasetStats.min_value) {
        let corresponding_label = chart_obj.data.labels[index];
        datasetStats.min_value_labels.push(corresponding_label);
      }
    });

    statsObjs.push(datasetStats);
  });

  return statsObjs;
}

/**
 * Calculates a single max and single min value for entire chart
 * @param {} labels_array 
 */




/**
 * Generates a grammatically correct string from array of labels
 * @param {array} labels_array
 */
export function arrayToString(labels_array) {
  let labels_string = "";
  if (labels_array.length > 1) {
    // add an "and" second to last
    labels_array.splice(labels_array.length - 1, 0, "and");
    // fix summary statement syntax
    let regex = /, and,/;
    if (labels_array.length > 3) {
      labels_string = labels_array.join(", ");
      labels_string = labels_string.replace(regex, ", and");
    } else {
      labels_string = labels_array.join(" ");
    }
    // labels_string = labels_string + " are";
  } else if (labels_array.length === 1) {
    // labels_string = labels_array[0] + " is";
    labels_string = labels_array[0];
  } else {
    throw "empty array";
  }
  return labels_string;
}

/**
 * Converts integers one through ten to a word spelling out the number
 * eg. takes 2 and returns "two"
 * @param {int} 
 * 
 * @returns {string} spelled out number
 */
export function spellInt(int) {
  
  const arry_one_to_ten = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

  if (int > 0 && int < 11) {
    return arry_one_to_ten[int-1];
  }
}