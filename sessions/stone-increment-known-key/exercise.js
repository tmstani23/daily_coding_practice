/*
  incrementCount(counts, key)

  `counts` is an object mapping string keys to number values. `key` is
  guaranteed to already exist in `counts` (you don't need to handle a
  missing key in this exercise).

  Return a NEW object, same as `counts` but with the value at `key`
  increased by 1. All other keys/values stay the same. Do not mutate
  the original `counts` object — the caller's object must be unchanged
  after the call.

  Examples:
  - counts = { a: 1, b: 2 }, key = 'a' -> { a: 2, b: 2 }
  - counts = { x: 5 }, key = 'x' -> { x: 6 }
*/

function incrementCount(counts, key) {
  return ( {...counts, [key]: counts[key] + 1})
}

module.exports = incrementCount;

console.log(incrementCount({ a: 1, b: 2 }, 'a')); // { a: 2, b: 2 }
