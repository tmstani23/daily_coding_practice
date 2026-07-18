const { test } = require('node:test');
const assert = require('node:assert');
const { titleCase } = require('./exercise');

test('capitalizes lowercase words', () => {
  assert.strictEqual(titleCase('hello world'), 'Hello World');
});

test('normalizes all-caps words', () => {
  assert.strictEqual(titleCase('THE QUICK BROWN FOX'), 'The Quick Brown Fox');
});

test('handles already-mixed casing', () => {
  assert.strictEqual(titleCase('already Capitalized WORDS'), 'Already Capitalized Words');
});

test('handles a single word', () => {
  assert.strictEqual(titleCase('a'), 'A');
});

test('returns empty string for empty input', () => {
  assert.strictEqual(titleCase(''), '');
});
