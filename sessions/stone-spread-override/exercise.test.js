const test = require('node:test');
const assert = require('node:assert');
const { setField } = require('./exercise');

test('replaces an existing key', () => {
  assert.deepStrictEqual(
    setField({ id: 1, status: 'open' }, 'status', 'closed'),
    { id: 1, status: 'closed' }
  );
});

test('adds a key that is not there yet', () => {
  assert.deepStrictEqual(
    setField({ id: 2 }, 'status', 'open'),
    { id: 2, status: 'open' }
  );
});

test('works on an empty record', () => {
  assert.deepStrictEqual(setField({}, 'name', 'Ada'), { name: 'Ada' });
});

test('does not modify the original', () => {
  const original = { id: 3, status: 'open' };
  setField(original, 'status', 'closed');
  assert.deepStrictEqual(original, { id: 3, status: 'open' });
});

test('key is written inside the object literal', () => {
  const src = setField.toString();
  assert.match(src, /\[[^\]]+\]\s*:/, 'expected a computed key inside a literal');
  assert.doesNotMatch(src, /\]\s*=[^=]/, 'no bracket-assignment after copying');
});
