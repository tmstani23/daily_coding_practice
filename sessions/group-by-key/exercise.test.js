const test = require('node:test');
const assert = require('node:assert');
const groupByKey = require('./exercise.js');

test('empty array returns empty object', () => {
  assert.deepStrictEqual(groupByKey([], 'dept'), {});
});

test('single item returns one bucket with one-item array', () => {
  const items = [{ name: 'A', dept: 'eng' }];
  assert.deepStrictEqual(groupByKey(items, 'dept'), {
    eng: [{ name: 'A', dept: 'eng' }],
  });
});

test('groups multiple items into separate buckets', () => {
  const items = [
    { name: 'A', dept: 'eng' },
    { name: 'B', dept: 'sales' },
    { name: 'C', dept: 'eng' },
  ];
  assert.deepStrictEqual(groupByKey(items, 'dept'), {
    eng: [
      { name: 'A', dept: 'eng' },
      { name: 'C', dept: 'eng' },
    ],
    sales: [{ name: 'B', dept: 'sales' }],
  });
});

test('all items sharing the same key value land in one bucket', () => {
  const items = [
    { name: 'A', dept: 'eng' },
    { name: 'B', dept: 'eng' },
    { name: 'C', dept: 'eng' },
  ];
  assert.deepStrictEqual(groupByKey(items, 'dept'), {
    eng: [
      { name: 'A', dept: 'eng' },
      { name: 'B', dept: 'eng' },
      { name: 'C', dept: 'eng' },
    ],
  });
});

test('preserves original item order within a bucket', () => {
  const items = [
    { id: 1, status: 'open' },
    { id: 2, status: 'closed' },
    { id: 3, status: 'open' },
    { id: 4, status: 'open' },
  ];
  assert.deepStrictEqual(groupByKey(items, 'status').open.map(i => i.id), [1, 3, 4]);
});
