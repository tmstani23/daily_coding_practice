/*
 * formatInitialLastName(fullName)
 *
 * `fullName` is a string with exactly two words separated by a single
 * space: a first name and a last name (e.g. "Jane Doe"). Return a string
 * with the first name shortened to its initial followed by a period,
 * then the last name unchanged: "J. Doe".
 *
 * Edge cases covered by the tests:
 *  - first name is already a single character ("A Lee" -> "A. Lee")
 *  - last name casing is preserved exactly as given
 */
function formatInitialLastName(fullName) {
    //split the str into words
    let splitNameArr = fullName.split(' ')
    
    let firstWord = splitNameArr[0].substring(0,1)
    let secondWord = splitNameArr[1];

    let finalWord = firstWord.concat('. ', secondWord)
                   
    return finalWord;
                

    
}

module.exports = formatInitialLastName;

console.log(formatInitialLastName('Jane Doe')); // 'J. Doe'
