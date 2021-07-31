//write a function that calculates sum of integers in a string.

function sumOfIntegersInString(s) {
  return Array.from(s)
    .map(Number)
    .filter(Number)
    .reduce((a, b) => a + b);
}
