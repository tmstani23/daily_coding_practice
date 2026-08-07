const assert = require('node:assert');
const test = require('node:test');
const createLabel = require('./exercise');

test('adds a computed key alongside the fixed type field', () => {
  assert.deepStrictEqual(createLabel('color', 'red'), { type: 'label', color: 'red' });
});

test('works with a different field name and a non-string value', () => {
  assert.deepStrictEqual(createLabel('size', 12), { type: 'label', size: 12 });
});

test('works with a boolean value', () => {
  assert.deepStrictEqual(createLabel('active', true), { type: 'label', active: true });
});
