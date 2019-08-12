import { addChartAlt } from "../src/addChartAlt";
import { barChart } from "../src/barChart";

// test 1
let canvas1 = document.createElement("canvas");
let ctx1 = canvas1.getContext('2d');
let testChart1 = new Chart(ctx1, barChart);
addChartAlt(testChart1, toggle=false, overview=false);

// test 2
let canvas2 = document.createElement("canvas");
let ctx2 = canvas2.getContext('2d');
let testChart2 = new Chart(ctx2, barChart);
addChartAlt(testChart2, toggle=false, overview=true);

// test 3
let canvas3 = document.createElement("canvas");
let ctx3 = canvas3.getContext('2d');
let testChart3 = new Chart(ctx3, barChart);
addChartAlt(testChart3, toggle=true, overview=true);

// test 4
let canvas4 = document.createElement("canvas");
let ctx4 = canvas4.getContext('2d');
let testChart4 = new Chart(ctx4, barChart);
addChartAlt(testChart4, toggle=true, overview=false);

/*
describe("addChartAlt inserts alt format below canvas in the DOM", () => {
    test("toggle", )
})
*/