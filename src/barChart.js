import pattern from "patternomaly";

// TODO: fix issue with tests not passing with patterns

let hot = pattern.draw("zigzag", "rgba(140, 127, 114, 0.4)");
let iced = pattern.draw("dot", "rgba(112, 91, 58, 0.4)");

// Chart object data

// 2 datasets, 1 label
export const coffeeChart_2_1 = {
  type: "bar",
  data: {
    labels: ["April"],
    datasets: [
      { label: "Hot", data: [9], backgroundColor: hot },
      { label: "Iced", data: [21], backgroundColor: iced }
    ]
  },
  
  options: {
    title: {
      display: true,
      text: "Coffees Consumed by Month"
    },
    scales: {
      xAxes: [
        {
          //barPercentage: 1,
          maxBarThickness: 40
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
};

// 1 dataset, 4 labels
export const coffeeChart_1_4 = {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April"],
    datasets: [
      { label: "Hot", data: [19, 22, 16, 9], backgroundColor: hot }
    ]
  },
  
  options: {
    title: {
      display: true,
      text: "Coffees Consumed by Month"
    },
    scales: {
      xAxes: [
        {
          //barPercentage: 1,
          maxBarThickness: 40
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
};

// 2 datasets, 4 labels
export const coffeeChart = {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April"],
    datasets: [
      { label: "Hot", data: [19, 22, 16, 9], backgroundColor: hot },
      { label: "Iced", data: [12, 10, 15, 21], backgroundColor: iced }
    ]
  },
  
  options: {
    title: {
      display: true,
      text: "Coffees Consumed by Month"
    },
    scales: {
      xAxes: [
        {
          //barPercentage: 1,
          maxBarThickness: 40
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
};

// 2 datasets, 6 labels
export const coffeeChart_2_6 = {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      { label: "Hot", data: [19, 21, 16, 9, 7, 4], backgroundColor: hot },
      { label: "Iced", data: [12, 10, 15, 21, 25, 29], backgroundColor: iced }
    ]
  },
  
  options: {
    title: {
      display: true,
      text: "Coffees Consumed by Month"
    },
    scales: {
      xAxes: [
        {
          //barPercentage: 1,
          maxBarThickness: 20
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
};

// 1 dataset, 12 labels
export const coffeeChart_1_12 = {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      { label: "Hot", data: [19, 22, 16, 9, 7, 4, 4, 4, 6, 8, 15, 18], backgroundColor: hot }
    ]
  },
  
  options: {
    title: {
      display: true,
      text: "Coffees Consumed by Month"
    },
    scales: {
      xAxes: [
        {
          //barPercentage: 1,
          maxBarThickness: 40
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
};

// 2 datasets, 12 labels
export const coffeeChart_full = {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      { label: "Hot", data: [19, 22, 16, 9, 7, 4, 4, 2, 6, 8, 15, 18], backgroundColor: hot },
      { label: "Iced", data: [12, 10, 15, 21, 19, 22, 26, 29, 24, 20, 15, 9], backgroundColor: iced }
    ]
  },
  
  options: {
    title: {
      display: true,
      text: "Coffees Consumed by Month"
    },
    scales: {
      xAxes: [
        {
          //barPercentage: 1,
          maxBarThickness: 40
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
};

/*
export const barChart = {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "April"],
    datasets: [
      { label: "label1", data: [3, 5, 4, 7], backgroundColor: "rgba(140, 127, 114, 0.5)" },
      { label: "label2", data: [2, 8, 6, 5], backgroundColor: "rgba(112, 91, 112, 0.5)" },
      { label: "label3", data: [8, 6, 4, 1], backgroundColor: "rgba(112, 91, 58, 0.5)" }
    ]
  },
  
  options: {
    title: {
      display: true,
      text: "Number of votes by year"
    },
    scales: {
      xAxes: [
        {
          barPercentage: 0.8,
          maxBarThickness: 25
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
};
*/