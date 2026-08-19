const test = require('node:test');
const assert = require('node:assert/strict');
const dedupeArray = require('./exercise.js');

test('collapses repeats, keeps first-appearance order', () => {
  assert.deepStrictEqual(dedupeArray([3, 1, 3, 2, 1, 4]), [3, 1, 2, 4]);
});

test('array with no repeats is unchanged', () => {
  assert.deepStrictEqual(dedupeArray([5, 6, 7]), [5, 6, 7]);
});

test('empty array returns empty array', () => {
  assert.deepStrictEqual(dedupeArray([]), []);
});

test('single-item array returns that item', () => {
  assert.deepStrictEqual(dedupeArray([9]), [9]);
});
