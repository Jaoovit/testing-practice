function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mult: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
};

function caesarCipher(str, shift) {
  return str
    .split("")
    .map((char) => {
      if (char.match(/[a-z]/i)) {
        let code = char.charCodeAt(0);
        let isUpperCase = char === char.toUpperCase();
        let offset = isUpperCase ? 65 : 97;
        code = ((((code - offset + shift) % 26) + 26) % 26) + offset;
        return String.fromCharCode(code);
      }
      return char;
    })
    .join("");
}

function analyzeArray(arr) {
  if (arr.length === 0) {
    return {
      average: NaN,
      min: NaN,
      max: NaN,
      length: 0,
    };
  }
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const average = sum / arr.length;

  return {
    average,
    min,
    max,
    length: arr.length,
  };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
