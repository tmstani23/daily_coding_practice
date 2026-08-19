/*
Write dedupeArray(arr), which takes an array of numbers (possibly with
repeats, possibly empty) and returns a NEW array containing each distinct
value once, in the order each value first appeared.

Cases the tests check:
- an array with repeats -> repeats collapsed, first-appearance order kept
- an array with no repeats -> returned unchanged (as values, still a new array)
- an empty array -> returns an empty array
- a single-item array -> returns that one item

This one is meant to be built using a Set, not filter/indexOf or a manual
loop with an "already seen" check.
*/

function dedupeArray(arr) {
  let finalSet = new Set(arr);
  let finalArr = [...finalSet];
  return finalArr;
}

module.exports = dedupeArray;

console.log(dedupeArray([3, 1, 3, 2, 1, 4])); // [3, 1, 2, 4]
