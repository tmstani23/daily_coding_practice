const { test } = require('node:test');
const assert = require('node:assert');
const incrementCount = require('./exercise');

test('increments an existing key', () => {
  assert.deepStrictEqual(incrementCount({ a: 2 }, 'a'), { a: 3 });
});

test('defaults an absent key to 0 before incrementing', () => {
  assert.deepStrictEqual(incrementCount({ a: 2 }, 'b'), { a: 2, b: 1 });
});

test('handles an empty starting object', () => {
  assert.deepStrictEqual(incrementCount({}, 'x'), { x: 1 });
});
