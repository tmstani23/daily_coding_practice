/*
 * getInitials(fullName)
 *
 * `fullName` is a string of words separated by single spaces (no leading
 * or trailing spaces, no punctuation). Return the initials as a single
 * uppercase string with no separators, one letter per word, regardless
 * of the input's original casing.
 *
 * Edge cases covered by the tests:
 *  - a single-word name (one letter back)
 *  - input already lowercase
 */
function getInitials(fullName) {
    return fullName.split(/\s+/).map((word) => {return (word.charAt(0).toUpperCase())}).join('');
}

module.exports = getInitials;

console.log(getInitials('John Ronald Reuel Tolkien')); // 'JRRT'
