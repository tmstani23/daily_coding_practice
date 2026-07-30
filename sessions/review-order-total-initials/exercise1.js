/*
 * totalDeliveredPrice(orders)
 *
 * `orders` is an array of objects: { item: string, price: number, qty: number, delivered: boolean }.
 * Return the total cost (price * qty) summed across only the orders
 * where `delivered` is true.
 *
 * Edge cases covered by the tests:
 *  - empty array -> 0
 *  - no delivered orders -> 0
 *  - all orders delivered
 */
function totalDeliveredPrice(orders) {
  let deliveredPrice = 0;
  //map through each elem in the orders array
  orders.map( (order) => {
    
    if(order.delivered === true) {
      deliveredPrice += order.price * order.qty
    }
   }
  );
  return deliveredPrice;
}

module.exports = totalDeliveredPrice;

console.log(totalDeliveredPrice([
  { item: 'mug', price: 10, qty: 2, delivered: true },
  { item: 'pen', price: 2, qty: 5, delivered: false },
])); // 20
