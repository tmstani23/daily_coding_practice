/*
 * capitalizeFirstWord(sentence)
 *
 * `sentence` is a string of words separated by single spaces (no leading
 * or trailing spaces, no punctuation). Return a NEW string identical to
 * `sentence` except the FIRST word has its first character uppercased.
 * Every other character — including the rest of the first word and all
 * other words — is left exactly as given (casing untouched).
 *
 * Edge cases covered by the tests:
 *  - a single-word input
 *  - first word already starts with an uppercase letter
 *  - later words have mixed/uppercase casing that must NOT change
 */
function capitalizeFirstWord(sentence) {
    //split the string by spaces into an array
    let finalSentence = sentence.split(' ');
    //access the first word
    let capitalLetter = finalSentence[0][0].toUpperCase();
    let firstWord = capitalLetter + finalSentence[0].substring(1)
    
        //console.log(firstWord);
        //access the first letter and uppercase it
    //join or return the array to a string
    finalSentence[0] = firstWord;
    
    finalSentence = finalSentence.join(' ')
    //return the final string
    console.log(finalSentence)
    return finalSentence;

}

module.exports = capitalizeFirstWord;

console.log(capitalizeFirstWord('the quick brown fox')); // 'The quick brown fox'
