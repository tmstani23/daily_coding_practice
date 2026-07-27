/*
 * truncate(str, maxLength)
 *
 * Return a shortened version of `str`:
 *  - if `str` is LONGER than `maxLength`, return its first `maxLength`
 *    characters followed by '...'
 *  - otherwise return `str` unchanged
 *
 * Edge cases covered by the tests:
 *  - length exactly equal to maxLength -> unchanged (no '...')
 *  - empty string -> '' (unchanged)
 *  - maxLength of 0 with a non-empty string -> just '...'
 */
function truncate(str, maxLength) {
    let finalStr;
    //check length of str
    if (str.length > maxLength) {
        finalStr = str.slice(0, maxLength).concat('...')
        return finalStr
    }
    else { return str }
     // if length is > maxLength
        //slice the characters by maxLength
            //add join? with ...
        //save as finalStr and return finalStr
    //else return str
}

module.exports = truncate;

console.log(truncate('Hello world', 5)); // 'Hello...'
