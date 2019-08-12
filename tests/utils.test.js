import { barChart } from "../src/barChart";
import { genStats, arrayToString } from "../src/utils";

describe("genStats", () => {
  const statsObjs = genStats(barChart);

  test("returns an array containing an object for each dataset", () => {
    expect(statsObjs).toBeInstanceOf(Array);
    expect(statsObjs.length).toEqual(barChart.data.datasets.length);
    for (let i = 0; i < statsObjs.length; i++) {
      expect(statsObjs[i]).toBeInstanceOf(Object);
    }
  });

  test("each object in the array contains expected properties", () => {
    for (let i = 0; i < statsObjs.length; i++) {
      expect(statsObjs[i]).toHaveProperty(
        "label",
        barChart.data.datasets[i].label
      );
      expect(statsObjs[i]).toHaveProperty(
        "max_value",
        Math.max(...barChart.data.datasets[i].data)
      );
      expect(statsObjs[i]).toHaveProperty(
        "min_value",
        Math.min(...barChart.data.datasets[i].data)
      );
      expect(statsObjs[i]).toHaveProperty("max_value_labels");
      expect(statsObjs[i].max_value_labels).toBeInstanceOf(Array);
      expect(statsObjs[i]).toHaveProperty("min_value_labels");
      expect(statsObjs[i].min_value_labels).toBeInstanceOf(Array);
    }
  });

  test("hard values for first dataset are correct", () => {
    expect(statsObjs[0].label).toEqual("label1");
    expect(statsObjs[0].max_value).toEqual(7);
    expect(statsObjs[0].max_value_labels).toEqual(["April"]);
    expect(statsObjs[0].min_value).toEqual(3);
    expect(statsObjs[0].min_value_labels).toEqual(["Jan"]);
  });
});

describe("arrayToString", () => {
  const s1 = arrayToString(["one"]);
  const s2 = arrayToString(["one", "two"]);
  const s3 = arrayToString(["one", "two", "three"]);
  const s4 = arrayToString(["one", "two", "three", "four"]);

  test("throws when array is empty", () => {
    expect(() => {
      arrayToString([]);
    }).toThrowError("empty array");
  });

  test("returns expected string from lists of one, two three, and four list items", () => {
    expect(s1).toEqual("one is");
    expect(s2).toEqual("one and two are");
    expect(s3).toEqual("one, two, and three are");
    expect(s4).toEqual("one, two, three, and four are");
  });
});
