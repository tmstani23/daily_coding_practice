const { test } = require('node:test');
const assert = require('node:assert');
const { addCount } = require('./exercise');

test('increments the given key', () => {
  assert.deepStrictEqual(addCount({ shipped: 2 }, 'shipped'), { shipped: 3 });
});

test('increments the right key, leaves others alone', () => {
  assert.deepStrictEqual(
    addCount({ shipped: 2, pending: 5 }, 'pending'),
    { shipped: 2, pending: 6 }
  );
});

test('works when the key is the only one', () => {
  assert.deepStrictEqual(addCount({ x: 0 }, 'x'), { x: 1 });
});
