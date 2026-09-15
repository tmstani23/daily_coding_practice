/*
Return a label for an inventory item in the form "<name>: <quantity>".

If quantity is missing, null, or undefined, display "not set" instead.
A quantity of 0 is a real quantity and must stay 0. Do not change the
input item. Any implementation that meets this behavior is acceptable.

Examples:
{ name: 'Pencils', quantity: 0 } -> 'Pencils: 0'
{ name: 'Notebooks' } -> 'Notebooks: not set'
*/
function quantityLabel(item) {
    let returnLabel = '';
    return returnLabel = `${item.name}: ${item.quantity ?? 'not set'}`   
}

module.exports = { quantityLabel };

console.log(quantityLabel({ name: 'Pencils', quantity: 0 })); // Pencils: 0
