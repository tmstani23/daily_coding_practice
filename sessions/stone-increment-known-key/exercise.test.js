const test = require('node:test');
const assert = require('node:assert');
const incrementCount = require('./exercise.js');

test('increments the value at the given key', () => {
  const result = incrementCount({ a: 1, b: 2 }, 'a');
  assert.deepStrictEqual(result, { a: 2, b: 2 });
});

test('works for a different key', () => {
  const result = incrementCount({ x: 5 }, 'x');
  assert.deepStrictEqual(result, { x: 6 });
});

test('leaves other keys unchanged', () => {
  const result = incrementCount({ a: 1, b: 2, c: 3 }, 'b');
  assert.deepStrictEqual(result, { a: 1, b: 3, c: 3 });
});

test('does not mutate the original object', () => {
  const original = { a: 1, b: 2 };
  incrementCount(original, 'a');
  assert.deepStrictEqual(original, { a: 1, b: 2 });
});
