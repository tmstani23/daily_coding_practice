const test = require('node:test');
const assert = require('node:assert');
const indexById = require('./exercise.js');

test('empty array returns empty object', () => {
  assert.deepStrictEqual(indexById([]), {});
});

test('indexes items by id', () => {
  const items = [
    { id: 'a', name: 'Alice' },
    { id: 'b', name: 'Bob' },
  ];
  assert.deepStrictEqual(indexById(items), {
    a: { id: 'a', name: 'Alice' },
    b: { id: 'b', name: 'Bob' },
  });
});

test('later duplicate id overwrites earlier one', () => {
  const items = [
    { id: 'x', name: 'First' },
    { id: 'x', name: 'Second' },
  ];
  assert.deepStrictEqual(indexById(items), {
    x: { id: 'x', name: 'Second' },
  });
});
