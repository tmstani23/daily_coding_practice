const test = require('node:test');
const assert = require('node:assert');
const updateEmail = require('./exercise2');

test('replaces the email field', () => {
  assert.deepStrictEqual(
    updateEmail({ name: 'Sam', email: 'sam@old.com' }, 'sam@new.com'),
    { name: 'Sam', email: 'sam@new.com' }
  );
});

test('preserves other fields', () => {
  assert.deepStrictEqual(
    updateEmail({ name: 'Sam', age: 30, email: 'sam@old.com' }, 'sam@new.com'),
    { name: 'Sam', age: 30, email: 'sam@new.com' }
  );
});

test('does not mutate the original object', () => {
  const original = { name: 'Sam', email: 'sam@old.com' };
  updateEmail(original, 'sam@new.com');
  assert.deepStrictEqual(original, { name: 'Sam', email: 'sam@old.com' });
});
