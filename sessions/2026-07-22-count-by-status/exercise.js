// Given an array of order objects, each with a `status` field, return
// an object mapping each status to how many orders have it.
// Empty array in -> empty object out.
function countByStatus(orders) {
  let shippedOrders = { shipped: 0 };

  if (!Array.isArray(orders) || orders.length === 0) {
    shippedOrders = {};
    return shippedOrders;
  }

  // loop through the array
  for (const { status } of orders) {
    if (status === "shipped") {
      shippedOrders.shipped += 1;
    }
  }
  return shippedOrders;
}

module.exports = { countByStatus };

console.log(
  countByStatus([
    { id: 1, status: "shipped" },
    { id: 2, status: "shipped" },
  ]),
); // { shipped: 2 }
