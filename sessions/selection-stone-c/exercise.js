/*
Input: an array of user objects, each { name: string, email: string, age: number }.

adults(users)
  Give back the user objects whose age is 18 or more, in the same order.
  [{name:'Ada',...,age:36}, {name:'Bo',...,age:17}]
    -> [{name:'Ada',...,age:36}]
  Nobody 18 or over -> []
  Empty input -> []

Do not modify the input array or the objects in it.
*/

function adults(users) {
  return users.filter((user) => user.age >= 18)
}

module.exports = { adults };

const sample = [
  { name: 'Ada', email: 'ada@x.com', age: 36 },
  { name: 'Bo', email: 'bo@x.com', age: 17 },
  { name: 'Cy', email: 'cy@x.com', age: 22 },
];

console.log(adults(sample)); // Ada and Cy objects
