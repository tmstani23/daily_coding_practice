const test = require('node:test');
const assert = require('node:assert');
const { displayLabel } = require('./exercise.js');

test('nickname wins when present', () => {
  assert.strictEqual(
    displayLabel({ name: 'Dana', nickname: 'Dee', active: true }),
    'Dee'
  );
});

test('falls back to name when nickname is missing', () => {
  assert.strictEqual(
    displayLabel({ name: 'Dana', active: true }),
    'Dana'
  );
});

test('inactive user with a nickname', () => {
  assert.strictEqual(
    displayLabel({ name: 'Dana', nickname: 'Dee', active: false }),
    'Dee (inactive)'
  );
});

test('inactive user without a nickname', () => {
  assert.strictEqual(
    displayLabel({ name: 'Sam', active: false }),
    'Sam (inactive)'
  );
});
