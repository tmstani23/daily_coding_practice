const test = require('node:test');
const assert = require('node:assert');
const fileExtension = require('./exercise.js');

test('simple filename, uppercase extension', () => {
  assert.strictEqual(fileExtension('report.PDF'), 'pdf');
});

test('already lowercase', () => {
  assert.strictEqual(fileExtension('notes.txt'), 'txt');
});

test('multiple dots takes the last part', () => {
  assert.strictEqual(fileExtension('archive.TAR.gz'), 'gz');
});

test('many dots, mixed case', () => {
  assert.strictEqual(fileExtension('my.notes.Final.TXT'), 'txt');
});

test('single characters', () => {
  assert.strictEqual(fileExtension('a.b'), 'b');
});
