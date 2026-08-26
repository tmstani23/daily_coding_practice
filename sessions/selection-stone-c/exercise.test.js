const test = require('node:test');
const assert = require('node:assert');
const { adults } = require('./exercise.js');

const users = () => [
  { name: 'Ada', email: 'ada@x.com', age: 36 },
  { name: 'Bo', email: 'bo@x.com', age: 17 },
  { name: 'Cy', email: 'cy@x.com', age: 22 },
];

test('keeps only 18 and over, in order', () => {
  assert.deepStrictEqual(adults(users()), [
    { name: 'Ada', email: 'ada@x.com', age: 36 },
    { name: 'Cy', email: 'cy@x.com', age: 22 },
  ]);
});

test('nobody qualifies', () => {
  assert.deepStrictEqual(adults([{ name: 'Bo', email: 'bo@x.com', age: 17 }]), []);
});

test('empty input', () => {
  assert.deepStrictEqual(adults([]), []);
});

test('input is not modified', () => {
  const input = users();
  adults(input);
  assert.deepStrictEqual(input, users());
});
