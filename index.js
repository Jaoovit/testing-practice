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

module.exports = { capitalize, reverseString, calculator };
