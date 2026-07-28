/*
 * setField(record, field, value)
 *
 * Return a NEW object: a copy of `record` with `field` set to `value`.
 *
 * - `field` is a string that arrives in a variable — it is not known
 *   when you write the code.
 * - If `field` already exists on `record`, its value is replaced.
 * - If `field` does not exist on `record`, it is added.
 * - `record` itself must not be modified.
 * - If `record` is empty ({}), the result is an object with just that
 *   one field.
 *
 * CONSTRAINT (the point of this exercise): build the result as a single
 * object literal in one expression. The tests check that the new key is
 * written inside the literal, and that you did not assign onto a copy
 * afterwards.
 */

function setField(record, field, value) {
 return {...record, [field]: value}
}

module.exports = { setField };

console.log(setField({ id: 1, status: 'open' }, 'status', 'closed'));
// { id: 1, status: 'closed' }
