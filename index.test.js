const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./index.js");

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

describe("caesarCipher function", () => {
  test("should shift character in the string by the given factor", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  test("should handle wrapping from z to a", () => {
    expect(caesarCipher("xyz", 1)).toBe("yza");
  });
  test("should keep the same case", () => {
    expect(caesarCipher("Hello World", 1)).toBe("Ifmmp Xpsme");
  });
  test("should keep punctuation unchanged", () => {
    expect(caesarCipher("Hello, World!", 1)).toBe("Ifmmp, Xpsme!");
  });
});

describe("analyzeArray function", () => {
  test("should return correct object for non-empty array", () => {
    const inputArray = [1, 8, 3, 4, 2, 6];
    const expectedResult = {
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    };
    expect(analyzeArray(inputArray)).toEqual(expectedResult);
  });
  test("should return correct object for empty array", () => {
    const inputArray = [];
    const expectedResult = {
      average: NaN,
      min: NaN,
      max: NaN,
      length: 0,
    };
    expect(analyzeArray(inputArray)).toEqual(expectedResult);
  });
});
