// Given a key (a string) and a value (any type), return a NEW object
// with exactly one property: that key, set to that value. The key can
// be any string — not one you type by hand into the object — and the
// value can be anything, including falsy values like 0, '', or false.
function makeEntry(key, value) {
  // your code here
}

module.exports = { makeEntry };

console.log(makeEntry('shipped', 3)); // { shipped: 3 }
