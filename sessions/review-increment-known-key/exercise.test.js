const assert = require('node:assert');
const { test } = require('node:test');
const { bumpStat } = require('./exercise');

test('increments an existing key by 1', () => {
  const stats = { wins: 4, losses: 2 };
  const result = bumpStat(stats, 'wins');
  assert.strictEqual(result.wins, 5);
});

test('increments a different key without touching others', () => {
  const stats = { views: 10, shares: 3 };
  const result = bumpStat(stats, 'shares');
  assert.strictEqual(result.shares, 4);
  assert.strictEqual(result.views, 10);
});

test('works when the key name is held in a variable', () => {
  const stats = { clicks: 0 };
  const key = 'clicks';
  const result = bumpStat(stats, key);
  assert.strictEqual(result.clicks, 1);
});

test('returns the object', () => {
  const stats = { a: 1 };
  const result = bumpStat(stats, 'a');
  assert.strictEqual(typeof result, 'object');
  assert.strictEqual(result.a, 2);
});
