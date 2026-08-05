const { test } = require("node:test");
const assert = require("node:assert");
const { tallyStatuses } = require("./exercise");

test("empty array returns empty object", () => {
  assert.deepStrictEqual(tallyStatuses([]), {});
});

test("single order gets a count of 1", () => {
  assert.deepStrictEqual(tallyStatuses([{ status: "pending" }]), {
    pending: 1,
  });
});

test("counts multiple statuses across several orders", () => {
  assert.deepStrictEqual(
    tallyStatuses([
      { status: "pending" },
      { status: "shipped" },
      { status: "pending" },
      { status: "delivered" },
      { status: "shipped" },
      { status: "shipped" },
    ]),
    { pending: 2, shipped: 3, delivered: 1 },
  );
});
