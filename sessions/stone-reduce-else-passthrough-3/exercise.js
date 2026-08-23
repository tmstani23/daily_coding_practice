/*
 * sumInStockPrices(items)
 *
 * Return the total price of only the items that are in stock.
 *
 * [{name:'pen', price:2, inStock:true}, {name:'mug', price:9, inStock:false}] -> 2
 * [{name:'pen', price:2, inStock:true}, {name:'mug', price:9, inStock:true}]  -> 11
 * [{name:'mug', price:9, inStock:false}] -> 0
 * [] -> 0
 *
 * Constraint: one reduce over the array, callback written with a block
 * body (curly braces). No accumulator variable outside the reduce, no
 * filter.
 */

function sumInStockPrices(items) {
    return items.reduce((accum, itemObj) => {
        //check if itemObj is in stock
        if(itemObj.inStock === true) {
           return accum += itemObj.price
        }
        return accum;
    }, 0)
}

module.exports = { sumInStockPrices };

console.log(sumInStockPrices([{ name: 'pen', price: 2, inStock: true }, { name: 'mug', price: 9, inStock: false }])); // 2
