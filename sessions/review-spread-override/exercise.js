/*
 * replaceField(record, field, value)
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
 */

function replaceField(record, field, value) {
    return { ...record, [field]: value}
}

module.exports = replaceField;

console.log(replaceField({ id: 1, color: 'red' }, 'color', 'blue'));
// { id: 1, color: 'blue' }
