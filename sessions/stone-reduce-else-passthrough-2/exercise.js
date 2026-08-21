/*
 * sumLongWords(words, minLength)
 *
 * Given an array of strings and a number, return the TOTAL number of
 * characters across only the words whose length is >= minLength.
 * Words shorter than minLength contribute nothing.
 *
 * Cases the tests check:
 * - normal mix of long and short words
 * - NO word meets minLength -> return 0
 * - EVERY word meets minLength -> total of all lengths
 * - empty array -> return 0
 * - minLength of 0 -> every word counts
 *
 * Constraint: build this with a single reduce over the array, and write
 * the callback with a block body (curly braces), not a one-line
 * expression. No separate accumulator variable outside the reduce.
 */

function sumLongWords(words, minLength) {
    //return total # of chars whose word length is >= minLength
    //
    return words.reduce((accum, currentWord) => {
        if (currentWord.length >= minLength) {
            return accum += currentWord.length;
        }
        else {
            return accum
        }
    }, 0)
}

module.exports = { sumLongWords };

console.log(sumLongWords(['hi', 'there', 'friend'], 5)); // 11
