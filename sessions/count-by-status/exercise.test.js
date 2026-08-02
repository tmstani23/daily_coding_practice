const { test } = require("node:test");
const assert = require("node:assert");
const { countByStatus } = require("./exercise");

test("empty array returns empty object", () => {
  assert.deepStrictEqual(countByStatus([]), {});
});

test("single order", () => {
  assert.deepStrictEqual(countByStatus([{ id: 1, status: "shipped" }]), {
    shipped: 1,
  });
});

test("multiple statuses with ties", () => {
  assert.deepStrictEqual(
    countByStatus([
      { id: 1, status: "shipped" },
      { id: 2, status: "pending" },
      { id: 3, status: "shipped" },
      { id: 4, status: "cancelled" },
      { id: 5, status: "pending" },
    ]),
    { shipped: 2, pending: 2, cancelled: 1 },
  );
});

test("does not mutate the input array", () => {
  const orders = [
    { id: 1, status: "shipped" },
    { id: 2, status: "shipped" },
  ];
  const snapshot = JSON.parse(JSON.stringify(orders));
  countByStatus(orders);
  assert.deepStrictEqual(orders, snapshot);
});
