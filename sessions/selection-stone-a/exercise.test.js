const { test } = require("node:test");
const assert = require("node:assert");
const { sumEngineeringHours } = require("./exercise");

test("empty array returns 0", () => {
  assert.strictEqual(sumEngineeringHours([]), 0);
});

test("no engineering employees returns 0", () => {
  assert.strictEqual(
    sumEngineeringHours([{ department: "sales", hoursWorked: 8 }]),
    0,
  );
});

test("sums only engineering hours, ignoring other departments", () => {
  assert.strictEqual(
    sumEngineeringHours([
      { department: "engineering", hoursWorked: 10 },
      { department: "sales", hoursWorked: 5 },
      { department: "engineering", hoursWorked: 6 },
      { department: "marketing", hoursWorked: 3 },
    ]),
    16,
  );
});

test("single engineering employee", () => {
  assert.strictEqual(
    sumEngineeringHours([{ department: "engineering", hoursWorked: 7 }]),
    7,
  );
});
