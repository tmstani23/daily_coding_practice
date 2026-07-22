// Given a counts object and a key that IS already in the object, return
// the object with that key's count increased by 1. The key is always
// present — you don't need to handle a missing key here.
function addCount(counts, key) {
  // your code here
}

module.exports = { addCount };

console.log(addCount({ shipped: 2 }, 'shipped')); // { shipped: 3 }
console.log(addCount({ shipped: 2, pending: 5 }, 'pending')); // { shipped: 2, pending: 6 }
