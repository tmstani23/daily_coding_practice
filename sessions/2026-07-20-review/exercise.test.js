const { test } = require('node:test');
const assert = require('node:assert');
const { averageOfLongWords } = require('./exercise');

test('averages lengths of words longer than 3 chars', () => {
  assert.strictEqual(averageOfLongWords(['cat', 'jumping', 'ox', 'lantern']), 7); // (7+7)/2
});

test('returns 0 for empty array', () => {
  assert.strictEqual(averageOfLongWords([]), 0);
});

test('returns 0 when no words qualify', () => {
  assert.strictEqual(averageOfLongWords(['ox', 'at', 'a']), 0);
});

test('handles all words qualifying', () => {
  assert.strictEqual(averageOfLongWords(['apple', 'grape']), 5);
});
