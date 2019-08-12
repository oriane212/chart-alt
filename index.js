import classes from './src/styles_doc.css';
import "./src/styles_chartAlt.css";
import Chart from "chart.js";
import {coffeeChart, coffeeChart_2_6, coffeeChart_full, coffeeChart_1_4, coffeeChart_2_1, coffeeChart_1_12} from "./src/barChart.js";
import { addChartAlt } from './src/addChartAlt';

/* Create a container/article for canvas and table, with fixed or toggled view */

// generate alternative format from Chart instance

// create accessible chart view/container

//createAccessChart



/* #chart1 */

var ctx1 = document.getElementById('chart1').getContext('2d');
var chart1 = new Chart(ctx1, coffeeChart_2_6);
addChartAlt(chart1);


/* #chart2 */

var ctx2 = document.getElementById('chart2').getContext('2d');
var chart2 = new Chart(ctx2, coffeeChart_2_6);
addChartAlt(chart2, true);



/* #test3 
let canvasTest3 = document.createElement("canvas");
canvasTest3.setAttribute("id", "test3");
const tests = document.getElementById("tests");
tests.append(canvasTest3);
let ctxTest3 = canvasTest3.getContext("2d");

let testChart3 = new Chart(ctxTest3, barChart);
addChartAlt(testChart3);

*/



/* #test4 
let canvasTest4 = document.createElement("canvas");
canvasTest4.setAttribute("id", "test4");
const tests = document.getElementById("tests");
tests.append(canvasTest4);
*/

//let ctxTest4 = canvasTest4.getContext("2d");



//let testChart4 = new Chart(ctxTest4, barChart);



//addChartAlt(testChart4);




/* Create a Visually Hidden Table */

/*
let canvas1 = document.createElement("canvas");
let ctx1 = canvas1.getContext("2d");

// TODO: check ctx vs canvas, and do we need to save to variable?


let canvasChart1 = new Chart(ctx1, barChart); 
console.log(canvasChart1);
console.log(canvasChart1.chart.canvas);
console.log(canvasChart1.config);

addFallbackText(canvas1);

let table1 = createTable(barChart);

const eg_createTable = document.getElementById("eg_createTable");
eg_createTable.append(canvas1, table1);
*/





/* Create a Toggled View */

/*
let canvas2 = document.createElement("canvas");
let ctx2 = canvas2.getContext("2d");

// TODO: check ctx vs canvas, and do we need to save to variable?
let canvasChart2 = new Chart(ctx2, barChart); 

addFallbackText(canvas2);

let table2 = createTable(barChart);


let article = createToggleView(canvas2, table2);
const eg_createToggleView = document.getElementById("eg_createToggleView");
eg_createToggleView.append(article);
*/