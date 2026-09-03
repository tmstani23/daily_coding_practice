/*
 * displayLabel(user)
 *
 * Build the label shown next to a user in a list.
 *
 * The user object has:
 *   name     - a string, always present
 *   nickname - a string, MAY BE MISSING entirely
 *   active   - a boolean, always present
 *
 * Show the nickname if the user has one, otherwise the name.
 * If the user is not active, put ' (inactive)' on the end.
 *
 * { name: 'Dana', nickname: 'Dee', active: true }  -> 'Dee'
 * { name: 'Dana', active: true }                   -> 'Dana'
 * { name: 'Dana', nickname: 'Dee', active: false } -> 'Dee (inactive)'
 * { name: 'Sam', active: false }                   -> 'Sam (inactive)'
 */

function displayLabel(user) {
    let finalStr = '';
    //check if the current user has a nickname
    finalStr = user.nickname || user.name
    //check if user is not active
    if (!user.active) {
        finalStr = finalStr.concat(` (inactive)`);
    }
    return finalStr;
        // add (inactive) to end of final string        

}

module.exports = { displayLabel };

console.log(displayLabel({ name: 'Dana', nickname: 'Dee', active: true })); // 'Dee'
