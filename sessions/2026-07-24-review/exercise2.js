/*
 * updateEmail(user, newEmail)
 *
 * `user` is an object with at least an `email` field, possibly others.
 * Return a NEW object identical to `user` except `email` is replaced
 * with `newEmail`. Do not mutate the original object.
 *
 * Edge cases covered by the tests:
 *  - other fields are preserved untouched
 *  - original object is unchanged after the call
 */
function updateEmail(user, newEmail) {
    //create new obj, copy the input obj with spread, update the email property with newEmail input param
    const finalObj = {...user, email: newEmail}
    return finalObj;
}

module.exports = updateEmail;

console.log(updateEmail({ name: 'Sam', email: 'sam@old.com' }, 'sam@new.com')); // { name: 'Sam', email: 'sam@new.com' }
