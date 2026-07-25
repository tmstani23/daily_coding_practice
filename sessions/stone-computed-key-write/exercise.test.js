const { test } = require('node:test');
const assert = require('node:assert');
const { makeEntry } = require('./exercise');

test('builds an object with the given key and value', () => {
  assert.deepStrictEqual(makeEntry('shipped', 3), { shipped: 3 });
});

test('works with a different key name', () => {
  assert.deepStrictEqual(makeEntry('pending', 6), { pending: 6 });
});

test('works with a falsy value (0)', () => {
  assert.deepStrictEqual(makeEntry('errors', 0), { errors: 0 });
});
