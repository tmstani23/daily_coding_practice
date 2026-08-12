const assert = require('node:assert');
const test = require('node:test');
const replaceField = require('./exercise');

test('replaces an existing field, other fields untouched', () => {
  const result = replaceField({ id: 1, color: 'red' }, 'color', 'blue');
  assert.deepStrictEqual(result, { id: 1, color: 'blue' });
});

test('adds a field that does not exist yet', () => {
  const result = replaceField({ id: 2 }, 'size', 'M');
  assert.deepStrictEqual(result, { id: 2, size: 'M' });
});

test('works on an empty object', () => {
  const result = replaceField({}, 'name', 'x');
  assert.deepStrictEqual(result, { name: 'x' });
});

test('does not mutate the original record', () => {
  const original = { id: 3, color: 'green' };
  const before = { ...original };
  replaceField(original, 'color', 'purple');
  assert.deepStrictEqual(original, before);
});

test('builds the result as a single object literal, not a bracket assignment onto a copy', () => {
  const src = replaceField.toString();
  assert.ok(
    !/\]\s*=(?!=)/.test(src),
    'should not write `copy[field] = value` — build the new key into one object literal'
  );
});
