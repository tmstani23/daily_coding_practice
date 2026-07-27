const test = require('node:test');
const assert = require('node:assert');
const truncate = require('./exercise');

test('shortens a string longer than maxLength', () => {
  assert.strictEqual(truncate('Hello world', 5), 'Hello...');
});

test('leaves a shorter string unchanged', () => {
  assert.strictEqual(truncate('Hi', 5), 'Hi');
});

test('length exactly maxLength is unchanged', () => {
  assert.strictEqual(truncate('Hello', 5), 'Hello');
});

test('empty string is unchanged', () => {
  assert.strictEqual(truncate('', 5), '');
});

test('maxLength of 0 gives just the ellipsis', () => {
  assert.strictEqual(truncate('abc', 0), '...');
});
