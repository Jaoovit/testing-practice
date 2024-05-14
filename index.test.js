const capitalize = require("./index.js");

describe("capitalize function", () => {
  test("the output is a capitalized word", () => {
    expect(capitalize("test")).toBe("Test");
  });
});
