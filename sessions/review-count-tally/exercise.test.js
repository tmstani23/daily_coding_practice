const test = require('node:test');
const assert = require('node:assert');
const { countVotes } = require('./exercise.js');

const ballots = () => [
  { voter: 'ada', choice: 'blue' },
  { voter: 'bo', choice: 'green' },
  { voter: 'cy', choice: 'blue' },
  { voter: 'di', choice: 'red' },
  { voter: 'ed', choice: 'blue' },
];

test('counts each choice that appears', () => {
  assert.deepStrictEqual(countVotes(ballots()), { blue: 3, green: 1, red: 1 });
});

test('single ballot', () => {
  assert.deepStrictEqual(countVotes([{ voter: 'ada', choice: 'blue' }]), { blue: 1 });
});

test('empty array returns empty object', () => {
  assert.deepStrictEqual(countVotes([]), {});
});

test('no phantom keys for choices that never appear', () => {
  const result = countVotes([{ voter: 'ada', choice: 'blue' }]);
  assert.deepStrictEqual(Object.keys(result), ['blue']);
});

test('input is not modified', () => {
  const input = ballots();
  countVotes(input);
  assert.deepStrictEqual(input, ballots());
});
