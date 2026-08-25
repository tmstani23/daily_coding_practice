const { test } = require("node:test");
const assert = require("node:assert");
const { countByGenre } = require("./exercise");

test("empty array returns empty object", () => {
  assert.deepStrictEqual(countByGenre([]), {});
});

test("single book gets a count of 1", () => {
  assert.deepStrictEqual(countByGenre([{ genre: "poetry" }]), { poetry: 1 });
});

test("counts multiple genres across several books", () => {
  assert.deepStrictEqual(
    countByGenre([
      { genre: "scifi" },
      { genre: "horror" },
      { genre: "scifi" },
      { genre: "memoir" },
      { genre: "horror" },
      { genre: "horror" },
    ]),
    { scifi: 2, horror: 3, memoir: 1 },
  );
});

test("built with one array-method call, no loop, no outside accumulator", () => {
  const src = countByGenre.toString();
  assert.ok(!/\b(for|while)\s*\(/.test(src), "no for/while loop");
  assert.ok(
    !/\b(let|var)\s+\w+\s*=\s*(\{|\[)/.test(src),
    "no accumulator object declared outside the array-method call",
  );
});
