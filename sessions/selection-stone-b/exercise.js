// Given an array of order objects, each with a `status` field, return an
// object counting how many orders have each status. Keys are whatever
// status strings appear in the input (never hardcoded); values are counts.
// - Empty array in -> {} (empty object).
// - A status appearing once still gets a key with value 1.
// - Order of keys in the returned object does not matter.
function tallyStatuses(orders) {

//iterate through the orders array
//check if status value is in finalObj
  //if so add 1 to final objects value for that status
  //else add the key to final object and +1 the value for that key

return orders.reduce((cb, currentVal) => {
  cb[currentVal.status] = (cb[currentVal.status] || 0) + 1
  return cb
  
}, {})

}

module.exports = { tallyStatuses };

console.log(
  tallyStatuses([
    { status: "pending" },
    { status: "shipped" },
    { status: "pending" },
  ]),
); // { pending: 2, shipped: 1 }
