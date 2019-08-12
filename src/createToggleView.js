
/**
 * create a toggleable view for the canvas and table
 * @param {HTMLCanvasElement} canvas_el 
 * @param {HTMLTableElement} table_el 
 * 
 * @returns {HTMLElement} containing canvas, table, and button
 */
export function createToggleView(canvas_el, table_el) {
  const article = document.createElement("article");
  article.classList.add("toggle-view");
  const button = createToggleViewBtn();
  article.append(button, canvas_el, table_el);
  return article;
}

/**
 * create an HTML button element for toggling between chart and table views
 * 
 * @returns {HTMLButtonElement} button 
 */
export function createToggleViewBtn() {
  const button = document.createElement("button");
  button.innerText = "Show Alt";
  button.setAttribute("value", "alt");
  button.setAttribute("type", "button");
  button.addEventListener("click", toggleView);
  return button;
}

/**
 * toggles view between canvas and table within article
 * @param {Event} e
 */
export function toggleView(e) {

  // toggle button value
  if (e.target.getAttribute("value") === "alt") {
    e.target.setAttribute("value", "chart");
  } else {
    e.target.setAttribute("value", "alt");
  }

  // toggle button label
  if (e.target.innerText === "Show Alt") {
    e.target.innerText = "Show Chart";
  } else {
    e.target.innerText = "Show Alt";
  }

  // toggle canvas and table
  
  let inner = e.target.previousSibling;

  // get .alt-container element within inner element and toggle chart-alt-back and chart-alt-front
  let alt = inner.querySelector(".alt-container");
  alt.classList.toggle("chart-alt-back");
  alt.classList.toggle("chart-alt-front");
  
  // do same for canvas el
  let canvas = inner.querySelector("canvas");
  canvas.classList.toggle("chart-alt-back");
  canvas.classList.toggle("chart-alt-front");

}