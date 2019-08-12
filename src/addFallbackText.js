/**
 * add fallback text to HTML canvas element for chart
 * @param {object} chart_obj Chart.js instance
 */
export function addFallbackText(chart_obj) {
    let title = "Untitled";
        if (chart_obj.options.title.text !== "") {
            title = chart_obj.options.title.text;
        }
    let type = chart_obj.config.type;

    if (chart_obj.canvas instanceof HTMLCanvasElement) {
        chart_obj.canvas.innerText = `${title}. Alternative format for this ${type} chart is above.`;
    } else {
        throw "Must provide a Chart instance with an HTMLCanvasElement";
    }
    
    return;
}