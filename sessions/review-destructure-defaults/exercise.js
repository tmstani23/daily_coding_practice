/*
 * formatBook(book)
 *
 * Turn a book record into a one-line display string.
 *
 * Examples:
 *   { title: 'Dune', author: 'Frank Herbert', year: 1965 }
 *     -> 'Dune by Frank Herbert (1965)'
 *   { title: 'Beowulf', author: 'Unknown Poet' }
 *     -> 'Beowulf by Unknown Poet (unknown)'
 *
 * Details:
 * - `title` and `author` are always present.
 * - `year` may be missing; when it is, the string shows the word
 *   `unknown` in its place.
 * - Do not modify the input object.
 *
 * Constraint (a test checks this): read the fields you need out of the
 * parameter in ONE statement. After that statement, the body must not
 * mention `book` again.
 */

function formatBook(book) {
    let copiedBook = {...book};
    let displayString = '';
    return displayString = `${copiedBook.title} by ${copiedBook.author} (${copiedBook.year || 'unknown'})`;
}

module.exports = formatBook;

console.log(formatBook({ title: 'Dune', author: 'Frank Herbert', year: 1965 })); // 'Dune by Frank Herbert (1965)'
