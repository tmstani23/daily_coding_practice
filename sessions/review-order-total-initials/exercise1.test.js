const test = require('node:test');
const assert = require('node:assert');
const totalDeliveredPrice = require('./exercise1');

test('empty array returns 0', () => {
  assert.strictEqual(totalDeliveredPrice([]), 0);
});

test('sums only delivered orders', () => {
  const orders = [
    { item: 'mug', price: 10, qty: 2, delivered: true },
    { item: 'pen', price: 2, qty: 5, delivered: false },
  ];
  assert.strictEqual(totalDeliveredPrice(orders), 20);
});

test('returns 0 when none delivered', () => {
  const orders = [
    { item: 'mug', price: 10, qty: 2, delivered: false },
    { item: 'pen', price: 2, qty: 5, delivered: false },
  ];
  assert.strictEqual(totalDeliveredPrice(orders), 0);
});

test('sums all when all delivered', () => {
  const orders = [
    { item: 'mug', price: 10, qty: 2, delivered: true },
    { item: 'pen', price: 2, qty: 5, delivered: true },
  ];
  assert.strictEqual(totalDeliveredPrice(orders), 30);
});
