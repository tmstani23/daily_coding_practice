const test = require('node:test');
const assert = require('node:assert/strict');
const { activeUserNames } = require('./exercise');

test('returns active users’ names in input order', () => {
  const users = [
    { name: 'Ari', active: true },
    { name: 'Bo', active: false },
    { name: 'Cy', active: true },
  ];

  assert.deepEqual(activeUserNames(users), ['Ari', 'Cy']);
});

test('does not mutate the input array or its users', () => {
  const users = [
    { name: 'Ari', active: true },
    { name: 'Bo', active: false },
  ];
  const original = structuredClone(users);

  activeUserNames(users);

  assert.deepEqual(users, original);
});

test('returns an empty array when no users are active', () => {
  assert.deepEqual(
    activeUserNames([{ name: 'Ari', active: false }]),
    [],
  );
});

test('returns an empty array for an empty input', () => {
  assert.deepEqual(activeUserNames([]), []);
});
