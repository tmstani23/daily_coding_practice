/*
Write groupByKey(items, key).

Given an array of objects and a field name (key), group the objects into
a plain object. Each distinct value found at item[key] becomes a property
on the result; its value is an array of every item that had that value,
in their original order.

Examples:
  groupByKey(
    [{ name: 'A', dept: 'eng' }, { name: 'B', dept: 'sales' }, { name: 'C', dept: 'eng' }],
    'dept'
  )
  -> {
       eng:   [{ name: 'A', dept: 'eng' }, { name: 'C', dept: 'eng' }],
       sales: [{ name: 'B', dept: 'sales' }]
     }

Edge cases:
  - empty items array -> returns {}
  - a single item -> returns one bucket containing an array of that one item
  - every item sharing the same key value -> one bucket holding all of them
*/

function groupByKey(items, key) {
  //if the new object doesn't contain the item's key value as a property:
    //set the currentitem object key's value as the property name in the new object
    //return the current item object within an array as a value
  //if the new object does contain the item's key value as a property:
    //push currentItem object onto the end of the new objects array with that property
  //return the new object
   
  return items.reduce((accumObj, currentItem) => {
    let currentKey = currentItem[key]
    if(accumObj[currentKey] === undefined) {
      accumObj = {...accumObj, [currentKey]: [{...currentItem}] }
    }
    else {
      accumObj[currentKey].push(currentItem)
    }
    return accumObj;
}, {})
}

module.exports = groupByKey;

console.log(groupByKey(
  [{ name: 'A', dept: 'eng' }, { name: 'B', dept: 'sales' }, { name: 'C', dept: 'eng' }],
  'dept'
));
// { eng: [{ name: 'A', dept: 'eng' }, { name: 'C', dept: 'eng' }], sales: [{ name: 'B', dept: 'sales' }] }
