const test = require('node:test');
const assert = require('node:assert');
const formatInitialLastName = require('./exercise2');

test('shortens first name to initial', () => {
  assert.strictEqual(formatInitialLastName('Jane Doe'), 'J. Doe');
});

test('handles an already single-character first name', () => {
  assert.strictEqual(formatInitialLastName('A Lee'), 'A. Lee');
});

test('preserves last name casing', () => {
  assert.strictEqual(formatInitialLastName('Bob McDonald'), 'B. McDonald');
});
