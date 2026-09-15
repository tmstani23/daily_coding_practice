const test = require('node:test');
const assert = require('node:assert/strict');
const { displayLabel } = require('./exercise');

test('shows the new admin marker for an active admin', () => {
  assert.equal(
    displayLabel({ name: 'Dana', nickname: 'Dee', active: true, role: 'admin' }),
    'Dee [admin]'
  );
});

test('places the admin marker before the inactive marker', () => {
  assert.equal(
    displayLabel({ name: 'Sam', active: false, role: 'admin' }),
    'Sam [admin] (inactive)'
  );
});

test('keeps the current label for a non-admin', () => {
  assert.equal(
    displayLabel({ name: 'Jo', active: false, role: 'editor' }),
    'Jo (inactive)'
  );
});
