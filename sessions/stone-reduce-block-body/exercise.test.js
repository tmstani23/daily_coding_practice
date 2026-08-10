const { test } = require("node:test");
const assert = require("node:assert");
const { doublePositives } = require("./exercise");

test("empty array returns empty array", () => {
  assert.deepStrictEqual(doublePositives([]), []);
});

test("no positive numbers returns empty array", () => {
  assert.deepStrictEqual(doublePositives([-3, 0, -1]), []);
});

test("doubles only the positive numbers, in order", () => {
  assert.deepStrictEqual(doublePositives([3, -1, 0, 5]), [6, 10]);
});
