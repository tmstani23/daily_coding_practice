/**
 * indexById(items)
 *
 * Given an array of objects, each with an `id` field, return a SINGLE
 * object that maps each item's id to the full item object.
 *
 * - Empty array input -> return {}
 * - If two items share the same id, the LATER one in the array wins
 *   (its object ends up stored at that id).
 */

function indexById(items) {
    
    return items.reduce((accum, currentItem) => {
        let currentId = currentItem.id;
        console.log(currentId)
        return {...accum, [currentId]: {...currentItem}}
    }, {})
}

module.exports = indexById;

console.log(indexById([{ id: 'a', name: 'Alice' }, { id: 'b', name: 'Bob' }]));
// { a: { id: 'a', name: 'Alice' }, b: { id: 'b', name: 'Bob' } }
