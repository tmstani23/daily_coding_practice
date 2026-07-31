/*
incrementCount(counts, key)

Given an object `counts` mapping string keys to numbers, and a `key`
string, increment the count for that key by 1 and return the updated
object.

If `key` does not already exist in `counts`, treat its current count
as 0 before incrementing (so the result is 1).

Examples:
  incrementCount({ a: 2 }, 'a')  -> { a: 3 }
  incrementCount({ a: 2 }, 'b')  -> { a: 2, b: 1 }
  incrementCount({}, 'x')        -> { x: 1 }
*/

function incrementCount(counts, key) {
  return {...counts, [key]: (counts[key] || 0) + 1}
}

module.exports = incrementCount;

console.log(incrementCount({ a: 2 }, 'b')); // { a: 2, b: 1 }
