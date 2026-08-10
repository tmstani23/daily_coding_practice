// Given an array of numbers, use reduce to build a NEW ARRAY containing
// double the value of each POSITIVE number in the input (0 and negative
// numbers are skipped entirely, not included as 0 or as-is).
// - Empty array in -> [].
// - No positive numbers in the input -> [].
// - Order of the output matches the order numbers appeared in the input.
function doublePositives(numbers) {
  return numbers.reduce((accumArr, currentVal) => {
    if (currentVal > 0) {
      accumArr.push(currentVal * 2);
    }
    return accumArr;
  }, []);
}

module.exports = { doublePositives };

console.log(doublePositives([3, -1, 0, 5])); // [6, 10]
