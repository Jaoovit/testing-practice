const { capitalize, reverseString } = require("./index.js");

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
