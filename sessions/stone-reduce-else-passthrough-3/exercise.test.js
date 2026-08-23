const test = require('node:test');
const assert = require('node:assert');
const { sumInStockPrices } = require('./exercise.js');

test('mixed stock', () => {
  assert.strictEqual(sumInStockPrices([
    { name: 'pen', price: 2, inStock: true },
    { name: 'mug', price: 9, inStock: false },
    { name: 'pad', price: 4, inStock: true },
  ]), 6);
});

test('all in stock', () => {
  assert.strictEqual(sumInStockPrices([
    { name: 'pen', price: 2, inStock: true },
    { name: 'mug', price: 9, inStock: true },
  ]), 11);
});

test('none in stock', () => {
  assert.strictEqual(sumInStockPrices([
    { name: 'mug', price: 9, inStock: false },
  ]), 0);
});

test('empty array', () => {
  assert.strictEqual(sumInStockPrices([]), 0);
});
