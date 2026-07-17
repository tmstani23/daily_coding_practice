const { test } = require('node:test');
const assert = require('node:assert');
const { sumOfSquaresOfEvens } = require('./exercise');

test('sums squares of even numbers', () => {
  assert.strictEqual(sumOfSquaresOfEvens([1, 2, 3, 4]), 20); // 2^2 + 4^2
});

test('returns 0 for empty array', () => {
  assert.strictEqual(sumOfSquaresOfEvens([]), 0);
});

test('returns 0 when no evens present', () => {
  assert.strictEqual(sumOfSquaresOfEvens([1, 3, 5]), 0);
});

test('handles negative even numbers', () => {
  assert.strictEqual(sumOfSquaresOfEvens([-2, 3, -4]), 20); // (-2)^2 + (-4)^2
});
