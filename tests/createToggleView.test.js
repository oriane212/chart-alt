import { createToggleView, createToggleViewBtn, toggleView } from "../src/createToggleView";
//import Chart from "chart.js";
import { barChart } from "../src/barChart";
import { createTable } from "../src/createTable.js";
import { addFallbackText } from '../src/addFallbackText';


/*
const table = document.createElement("table");
table.classList.add("opacity-zero");
*/
let canvas = document.createElement("canvas");
//let ctx = canvas.getContext('2d');
//let chart = new Chart(ctx, barChart);
addFallbackText(canvas);
const table = createTable(barChart);
const article = createToggleView(canvas, table);

const btn = article.firstElementChild;

describe("createToggleView", () => {

    test("returns an HTML article element containing canvas and then table", () => {
        expect(article.tagName).toEqual("ARTICLE");
        expect(article.classList).toContain("toggle-view")
        expect(article.children).toContain(canvas, table);
        expect(canvas.nextElementSibling).toBe(table);
    })

    test("article contains button for toggling views", () => {
        expect(btn.tagName).toEqual("BUTTON");
    })

    test("toggle button appears before canvas", () => {
        expect(btn.nextElementSibling).toBe(canvas);
    })
})

describe("createToggleViewBtn", () => {

    const button = createToggleViewBtn();

    test("returns an HTMLButtonElement", () => {
        expect(button.tagName).toEqual("BUTTON");
    })

    test("innerText is 'Table view'", () => {
        expect(button.innerText).toEqual("Table view");
    })
    
})

// do this last
describe("view toggles on button click", () => {
    test("first click toggles from canvas to table", () => {
        btn.click();
        expect(canvas.classList).toContain("opacity-zero");
        expect(table.classList).not.toContain("opacity-zero");
        expect(btn.innerText).toEqual("Chart view");
    })
    test("second click toggles view back", () => {
        btn.click();
        expect(canvas.classList).not.toContain("opacity-zero");
        expect(table.classList).toContain("opacity-zero");
        expect(btn.innerText).toEqual("Table view");
    })
    
})