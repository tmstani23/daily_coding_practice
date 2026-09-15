const test = require('node:test');
const assert = require('node:assert/strict');
const { quantityLabel } = require('./exercise');

test('keeps a quantity of zero', () => {
  const item = { name: 'Pencils', quantity: 0 };

  assert.equal(quantityLabel(item), 'Pencils: 0');
  assert.deepEqual(item, { name: 'Pencils', quantity: 0 });
});

const cases = [
  ['present quantity', { name: 'Folders', quantity: 12 }, 'Folders: 12'],
  ['missing quantity', { name: 'Notebooks' }, 'Notebooks: not set'],
  ['null quantity', { name: 'Markers', quantity: null }, 'Markers: not set'],
  ['undefined quantity', { name: 'Tape', quantity: undefined }, 'Tape: not set'],
];

for (const [label, item, expected] of cases) {
  test(label, () => {
    const before = { ...item };
    assert.equal(quantityLabel(item), expected);
    assert.deepEqual(item, before);
  });
}
