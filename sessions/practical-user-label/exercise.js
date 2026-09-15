/*
 * displayLabel(user)
 *
 * This list-label helper already chooses a nickname (or name) and adds an
 * inactive marker. Add the new product requirement:
 *
 * When user.role is 'admin', include ' [admin]' after the name/nickname and
 * before any ' (inactive)' marker.
 *
 * Examples:
 * { name: 'Dana', nickname: 'Dee', active: true, role: 'admin' }
 *   -> 'Dee [admin]'
 * { name: 'Sam', active: false, role: 'admin' }
 *   -> 'Sam [admin] (inactive)'
 *
 * Users without role: 'admin' should keep their current labels.
 */

function displayLabel(user) {
  let finalStr = user.nickname || user.name;
  if(user.role === 'admin') {
    finalStr = finalStr.concat(' [admin]')
  }
  if (!user.active) {
    finalStr = finalStr.concat(' (inactive)');
  }

  return finalStr;
}

module.exports = { displayLabel };

console.log(displayLabel({ name: 'Dana', nickname: 'Dee', active: true }));
