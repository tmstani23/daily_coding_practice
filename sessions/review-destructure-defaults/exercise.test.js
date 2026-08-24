const test = require('node:test');
const assert = require('node:assert');
const formatBook = require('./exercise.js');

test('all fields present', () => {
  assert.strictEqual(
    formatBook({ title: 'Dune', author: 'Frank Herbert', year: 1965 }),
    'Dune by Frank Herbert (1965)'
  );
});

test('year missing', () => {
  assert.strictEqual(
    formatBook({ title: 'Beowulf', author: 'Unknown Poet' }),
    'Beowulf by Unknown Poet (unknown)'
  );
});

test('input object is not modified', () => {
  const input = { title: 'Beowulf', author: 'Unknown Poet' };
  formatBook(input);
  assert.deepStrictEqual(input, { title: 'Beowulf', author: 'Unknown Poet' });
});

test('body reads the parameter at most once', () => {
  const src = formatBook.toString();
  const body = src.slice(src.indexOf(')') + 1);
  const mentions = (body.match(/\bbook\b/g) || []).length;
  assert.ok(
    mentions <= 1,
    `body mentions "book" ${mentions} times - pull the fields out in one statement`
  );
});
