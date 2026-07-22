const { test } = require('node:test');
const assert = require('node:assert');
const { countByStatus } = require('./exercise');

test('counts orders by status', () => {
  assert.deepStrictEqual(
    countByStatus([
      { id: 1, status: 'shipped' },
      { id: 2, status: 'pending' },
      { id: 3, status: 'shipped' },
      { id: 4, status: 'shipped' },
      { id: 5, status: 'pending' },
    ]),
    { shipped: 3, pending: 2 }
  );
});

test('handles a single status', () => {
  assert.deepStrictEqual(
    countByStatus([{ id: 1, status: 'shipped' }]),
    { shipped: 1 }
  );
});

test('handles an empty array', () => {
  assert.deepStrictEqual(countByStatus([]), {});
});
