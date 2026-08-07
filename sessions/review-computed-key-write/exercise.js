/**
 * createLabel(field, value)
 *
 * Returns a NEW object with:
 *   - a fixed `type` property set to 'label'
 *   - a second property whose NAME comes from `field` (a string passed in
 *     at call time, not known ahead of time), set to `value`
 *
 * Examples:
 *   createLabel('color', 'red')  -> { type: 'label', color: 'red' }
 *   createLabel('size', 12)      -> { type: 'label', size: 12 }
 *
 * Edge cases:
 *   - value can be any type (string, number, boolean, etc.) — store it as-is
 *   - field is always a non-empty string
 */

function createLabel(field, value) {
  let finalObj = {
    type: 'label',
  }
  finalObj[field] = value;
  return finalObj;
}

module.exports = createLabel;

console.log(createLabel('color', 'red')); // { type: 'label', color: 'red' }
