const test = require('node:test');
const assert = require('node:assert');
const { sumLongWords } = require('./exercise.js');

test('normal mix of long and short words', () => {
  assert.strictEqual(sumLongWords(['hi', 'there', 'friend'], 5), 11);
});

test('no word meets minLength', () => {
  assert.strictEqual(sumLongWords(['a', 'bb', 'ccc'], 10), 0);
});

test('every word meets minLength', () => {
  assert.strictEqual(sumLongWords(['alpha', 'bravo', 'delta'], 3), 15);
});

test('short words in the MIDDLE do not reset the running total', () => {
  assert.strictEqual(sumLongWords(['seven!!', 'no', 'eight!!!', 'x'], 5), 15);
});

test('empty array', () => {
  assert.strictEqual(sumLongWords([], 4), 0);
});

test('minLength of 0 counts every word', () => {
  assert.strictEqual(sumLongWords(['ab', 'cde'], 0), 5);
});

test('uses reduce with a block-body callback and no outside accumulator', () => {
  const src = sumLongWords.toString();
  assert.ok(/\.reduce\s*\(/.test(src), 'expected a .reduce( call');
  assert.ok(/=>\s*\{/.test(src), 'expected an arrow callback with a block body');
});
