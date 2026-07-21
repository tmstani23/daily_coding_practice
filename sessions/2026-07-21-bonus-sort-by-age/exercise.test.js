const { test } = require('node:test');
const assert = require('node:assert');
const { sortByAge } = require('./exercise');

test('sorts ascending by age', () => {
  assert.deepStrictEqual(
    sortByAge([{ name: 'A', age: 30 }, { name: 'B', age: 20 }, { name: 'C', age: 25 }]),
    [{ name: 'B', age: 20 }, { name: 'C', age: 25 }, { name: 'A', age: 30 }]
  );
});

test('handles an already-sorted array', () => {
  assert.deepStrictEqual(
    sortByAge([{ name: 'A', age: 10 }, { name: 'B', age: 20 }]),
    [{ name: 'A', age: 10 }, { name: 'B', age: 20 }]
  );
});

test('handles a single-person array', () => {
  assert.deepStrictEqual(
    sortByAge([{ name: 'A', age: 40 }]),
    [{ name: 'A', age: 40 }]
  );
});

test('handles an empty array', () => {
  assert.deepStrictEqual(sortByAge([]), []);
});
