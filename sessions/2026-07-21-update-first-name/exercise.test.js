const { test } = require('node:test');
const assert = require('node:assert');
const { updateFirstName } = require('./exercise');

test('updates first name, keeps other fields', () => {
  assert.deepStrictEqual(
    updateFirstName({ first: 'Tim', last: 'S', age: 30 }, 'Timothy'),
    { first: 'Timothy', last: 'S', age: 30 }
  );
});

test('works when person only has a first name', () => {
  assert.deepStrictEqual(
    updateFirstName({ first: 'Tim' }, 'Timothy'),
    { first: 'Timothy' }
  );
});

test('does not mutate the original object', () => {
  const person = { first: 'Tim', last: 'S' };
  updateFirstName(person, 'Timothy');
  assert.strictEqual(person.first, 'Tim');
});

test('returns a new object, not the same reference', () => {
  const person = { first: 'Tim', last: 'S' };
  const result = updateFirstName(person, 'Timothy');
  assert.notStrictEqual(result, person);
});
