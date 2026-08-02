// Given an array of order objects, each with a `status` field, return an
// object mapping each distinct status to how many orders have that status.
// - Empty array in -> empty object out ({}).
// - A status may appear any number of times (including just once).
// - Only statuses that actually appear in the input should be keys in the
//   output — don't pre-fill a fixed list of known statuses.
function countByStatus(orders) {
  let finalObj = {
    
  };
  //loop through the orders
  for (const order of orders) {
    let key = order.status;
    //console.log(finalObj[key])
    //check if finalObj has the key
      
    if (finalObj[key] !== undefined) {
      //if so just +1 the value
      finalObj[key] += 1
    }
    else {
      //if not so
        //add the key and +1 the value
      finalObj = {...finalObj, [key]: 1}
    }
  }
    //check if finalObj has the key
      //if so just +1 the value
      
  return finalObj
      
}

module.exports = { countByStatus };

console.log(
  countByStatus([
    { id: 1, status: "shipped" },
    { id: 2, status: "pending" },
    { id: 3, status: "shipped" },
  ]),
); // { shipped: 2, pending: 1 }
