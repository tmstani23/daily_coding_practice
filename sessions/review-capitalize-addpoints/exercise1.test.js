const test = require('node:test');
const assert = require('node:assert');
const capitalizeFirstWord = require('./exercise1');

test('capitalizes only the first word of a lowercase sentence', () => {
  assert.strictEqual(capitalizeFirstWord('the quick brown fox'), 'The quick brown fox');
});

test('handles a single-word input', () => {
  assert.strictEqual(capitalizeFirstWord('hello'), 'Hello');
});

test('leaves an already-capitalized first word unchanged', () => {
  assert.strictEqual(capitalizeFirstWord('Already good day'), 'Already good day');
});

test('does not touch the casing of later words', () => {
  assert.strictEqual(capitalizeFirstWord('the QUICK Brown fox'), 'The QUICK Brown fox');
});
