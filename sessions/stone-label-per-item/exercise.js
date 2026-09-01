/*
Input: an array of item objects, each { name: string, qty: number }.

itemLabels(items)
  Give back a label string for every item, in the same order: the name,
  a space, an 'x', then the quantity.
  [{name:'Widget',qty:3}, {name:'Bolt',qty:1}] -> ['Widget x3', 'Bolt x1']
  [{name:'Nut',qty:12}]                        -> ['Nut x12']
  []                                           -> []

Don't modify the input array or the objects in it.
*/

function itemLabels(items) {
  return items.map((item) => `${item.name} x${item.qty}`)
}

module.exports = { itemLabels };

const sample = [
  { name: 'Widget', qty: 3 },
  { name: 'Bolt', qty: 1 },
];

console.log(itemLabels(sample)); // [ 'Widget x3', 'Bolt x1' ]
