const test = require('node:test');
const assert = require('node:assert');
const sumPositives = require('./exercise.js');

test('empty array returns 0', () => {
  assert.strictEqual(sumPositives([]), 0);
});

test('all positive numbers sums all of them', () => {
  assert.strictEqual(sumPositives([1, 2, 3]), 6);
});

test('mixed positive/negative/zero sums only positives', () => {
  assert.strictEqual(sumPositives([3, -1, 5, 0, 2]), 10);
});

test('all negative or zero returns 0', () => {
  assert.strictEqual(sumPositives([-4, 0, -2]), 0);
});
