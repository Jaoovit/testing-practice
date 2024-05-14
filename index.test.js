const { capitalize, reverseString, calculator } = require("./index.js");

describe("capitalize function", () => {
  test("the output is a capitalized word", () => {
    expect(capitalize("test")).toBe("Test");
  });
});

describe("reveseString function", () => {
  test("the output is a revesed string", () => {
    expect(reverseString("string")).toBe("gnirts");
  });
});

describe("calculator object", () => {
  test("the 6 + 2 is 8", () => {
    expect(calculator.add(6, 2)).toBe(8);
  });
  test("the 6 - 2 is 0", () => {
    expect(calculator.sub(6, 2)).toBe(4);
  });
  test("the 6 x 2 is 12", () => {
    expect(calculator.mult(6, 2)).toBe(12);
  });
  test("the 6 / 2 is 3", () => {
    expect(calculator.div(6, 2)).toBe(3);
  });
});
