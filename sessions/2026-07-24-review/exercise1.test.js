const test = require('node:test');
const assert = require('node:assert');
const getInitials = require('./exercise1');

test('gets initials from a multi-word name', () => {
  assert.strictEqual(getInitials('John Ronald Reuel Tolkien'), 'JRRT');
});

test('gets initials from a two-word name', () => {
  assert.strictEqual(getInitials('Ada Lovelace'), 'AL');
});

test('handles a single-word name', () => {
  assert.strictEqual(getInitials('Cher'), 'C');
});

test('uppercases initials regardless of input case', () => {
  assert.strictEqual(getInitials('mary jane watson'), 'MJW');
});
