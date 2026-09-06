const test = require('node:test');
const assert = require('node:assert');
const pricesInDollars = require('./exercise');

test('converts each product price to dollars, in order', () => {
  const products = [
    { name: 'Mug', priceCents: 1250 },
    { name: 'Pen', priceCents: 999 },
    { name: 'Hat', priceCents: 500 },
  ];
  assert.deepStrictEqual(pricesInDollars(products), [12.5, 9.99, 5]);
});

test('single product', () => {
  assert.deepStrictEqual(pricesInDollars([{ name: 'Hat', priceCents: 500 }]), [5]);
});

test('empty list gives an empty list', () => {
  assert.deepStrictEqual(pricesInDollars([]), []);
});

test('one output value per input product', () => {
  const products = [
    { name: 'A', priceCents: 100 },
    { name: 'B', priceCents: 250 },
    { name: 'C', priceCents: 2499 },
    { name: 'D', priceCents: 105 },
  ];
  assert.strictEqual(pricesInDollars(products).length, products.length);
});

test('input is not modified and a new array comes back', () => {
  const products = [
    { name: 'Mug', priceCents: 1250 },
    { name: 'Pen', priceCents: 999 },
  ];
  const before = [
    { name: 'Mug', priceCents: 1250 },
    { name: 'Pen', priceCents: 999 },
  ];
  const result = pricesInDollars(products);
  assert.notStrictEqual(result, products);
  assert.deepStrictEqual(products, before);
});
