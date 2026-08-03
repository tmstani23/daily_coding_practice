const test = require('node:test');
const assert = require('node:assert');
const addPoints = require('./exercise2');

test('adds points to an existing player', () => {
  assert.deepStrictEqual(addPoints({ ana: 10 }, 'ana', 5), { ana: 15 });
});

test('defaults a new player to 0 before adding points', () => {
  assert.deepStrictEqual(addPoints({ ana: 10 }, 'ben', 3), { ana: 10, ben: 3 });
});

test('does not mutate the original object', () => {
  const original = { ana: 10 };
  addPoints(original, 'ana', 5);
  assert.deepStrictEqual(original, { ana: 10 });
});

test('handles an empty starting leaderboard', () => {
  assert.deepStrictEqual(addPoints({}, 'cy', 7), { cy: 7 });
});
