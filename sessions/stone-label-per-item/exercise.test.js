const test = require('node:test');
const assert = require('node:assert');
const { itemLabels } = require('./exercise.js');

const items = () => [
  { name: 'Widget', qty: 3 },
  { name: 'Bolt', qty: 1 },
  { name: 'Nut', qty: 12 },
];

test('one label per item, in order', () => {
  assert.deepStrictEqual(itemLabels(items()), ['Widget x3', 'Bolt x1', 'Nut x12']);
});

test('single item', () => {
  assert.deepStrictEqual(itemLabels([{ name: 'Nut', qty: 12 }]), ['Nut x12']);
});

test('empty input', () => {
  assert.deepStrictEqual(itemLabels([]), []);
});

test('input is not modified', () => {
  const input = items();
  itemLabels(input);
  assert.deepStrictEqual(input, items());
});

test('returns a different array than the input', () => {
  const input = items();
  assert.notStrictEqual(itemLabels(input), input);
});
