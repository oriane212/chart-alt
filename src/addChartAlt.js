import { addFallbackText } from "./addFallbackText";
import { createTable } from "./createTable";
import { createToggleViewBtn } from "./createToggleView";

// NOTE: To use, canvas element must first exist in the DOM and have a parent node

/**
 * 
 * @param {object} chart created with Chart.js
 * @param {*} toggle set false by default to keep alt format hidden from view
 * @param {*} overview set true by default to include an overview of data within the alt format
 */
export function addChartAlt(chart, toggle=false, overview=true) {
    console.log(toggle);
    // check for chart type
    if (chart.config.type !== "bar") {
        throw "chart-alt currently only works for bar charts. To add an alt format, make sure your chart 'type' property is value 'bar'.";
    } else {
        
        // add article element above canvas
        let canvasParent = chart.canvas.parentNode;

        let article = document.createElement("article");
        article.classList.add("chart-alt");

        // add second article el above canvas
        let article2 = document.createElement("article");
        article2.classList.add("chart-alt-inner");

        article.append(article2);
        canvasParent.insertBefore(article, chart.canvas);
        
        // add fall back text to canvas
        addFallbackText(chart);

        // add front class to canvas
        chart.canvas.classList.add("chart-alt-front");

        // create table using data in chart.config and overview option
        let alt = createTable(chart, overview);
        let altContainer = document.createElement("div");
        altContainer.classList.add("alt-container", "chart-alt-back");
        altContainer.append(alt);
        //article.append(altContainer, chart.canvas);
        
        article2.append(altContainer, chart.canvas);
        
        // if toggle, add chart-alt-toggle class and add button 
        if (toggle) {
            article.classList.add("chart-alt-toggle");
            let toggleViewBtn = createToggleViewBtn();
            //article.insertBefore(toggleViewBtn, altContainer);
            article.append(toggleViewBtn);
        } 

    }
    
}