import {addFallbackText} from "../src/addFallbackText";

const canvas = document.createElement("canvas");
addFallbackText(canvas);

describe("addFallbackText", () => {
    test("canvas contains fallback text", () => {
        expect(canvas.innerText).toEqual("Accessible alternative format for this visual chart is in the table below.");
    })

    test("throws when given noncanvas element", () => {
        const noncanvas = document.createElement("span");
        expect(() => {
            addFallbackText(noncanvas);
        }).toThrowError("Must provide an HTMLCanvasElement");
    })
});